import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('invoice') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'Nenhum arquivo foi enviado' },
        { status: 400 }
      );
    }

    // Converter arquivo para base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString('base64');

    // Determinar o MIME type
    const mimeType = file.type;

    // Chamar Gemini Vision API
    const geminiApiKey = process.env.GEMINI_API_KEY;
    
    if (!geminiApiKey) {
      console.error('GEMINI_API_KEY não configurada');
      return NextResponse.json(
        { error: 'Serviço de análise temporariamente indisponível' },
        { status: 500 }
      );
    }

    const prompt = `Analise esta fatura de energia elétrica brasileira e extraia as seguintes informações em formato JSON:

{
  "nomeCliente": "nome completo do cliente",
  "cpfCnpj": "CPF ou CNPJ do cliente",
  "numeroInstalacao": "número da instalação",
  "distribuidora": "nome da distribuidora de energia",
  "consumoKwh": número (consumo em kWh do mês),
  "valorTotal": número (valor total da fatura em reais),
  "valorKwh": número (valor médio por kWh),
  "modalidadeTarifaria": "modalidade tarifária (Convencional, Branca, etc)",
  "classeConsumo": "classe de consumo (Residencial, Comercial, Industrial, etc)",
  "endereco": "endereço completo da unidade consumidora"
}

Importante:
- Retorne APENAS o JSON, sem texto adicional
- Use números sem formatação (ex: 450.50 ao invés de "450,50")
- Se algum campo não estiver visível, use "Não identificado" para strings e 0 para números
- Seja preciso na extração dos valores`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${geminiApiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
                {
                  inline_data: {
                    mime_type: mimeType,
                    data: base64,
                  },
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.1,
            topK: 32,
            topP: 1,
            maxOutputTokens: 2048,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Erro na API do Gemini:', errorText);
      return NextResponse.json(
        { error: 'Erro ao processar a imagem' },
        { status: 500 }
      );
    }

    const data = await response.json();
    
    // Extrair o texto da resposta
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!generatedText) {
      console.error('Resposta vazia do Gemini');
      return NextResponse.json(
        { error: 'Não foi possível extrair dados da fatura' },
        { status: 500 }
      );
    }

    // Limpar e parsear o JSON
    let jsonText = generatedText.trim();
    
    // Remover markdown code blocks se existirem
    if (jsonText.startsWith('```json')) {
      jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    } else if (jsonText.startsWith('```')) {
      jsonText = jsonText.replace(/```\n?/g, '');
    }

    const extractedData = JSON.parse(jsonText);

    // Validar dados essenciais
    if (!extractedData.nomeCliente || !extractedData.consumoKwh) {
      return NextResponse.json(
        { error: 'Não foi possível extrair informações suficientes da fatura' },
        { status: 400 }
      );
    }

    // Retornar dados extraídos
    return NextResponse.json(extractedData);

  } catch (error) {
    console.error('Erro ao processar fatura:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a fatura. Por favor, tente novamente.' },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

