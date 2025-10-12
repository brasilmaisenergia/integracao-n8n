import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar dados básicos
    if (!body.tipo || !body.data) {
      return NextResponse.json(
        { error: 'Dados incompletos' },
        { status: 400 }
      );
    }

    // URL do webhook do n8n (será configurada nas variáveis de ambiente)
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    
    if (!n8nWebhookUrl) {
      console.error('N8N_WEBHOOK_URL não configurada');
      
      // Em desenvolvimento, apenas log os dados
      if (process.env.NODE_ENV === 'development') {
        console.log('📝 Dados do formulário (modo desenvolvimento):');
        console.log(JSON.stringify(body, null, 2));
        
        return NextResponse.json({
          success: true,
          message: 'Dados recebidos (modo desenvolvimento)',
          data: body,
        });
      }
      
      return NextResponse.json(
        { error: 'Serviço temporariamente indisponível' },
        { status: 500 }
      );
    }

    // Enviar dados para o n8n
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...body,
        source: 'brasil-mais-energia-website',
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
      }),
    });

    if (!response.ok) {
      console.error('Erro ao enviar para n8n:', await response.text());
      throw new Error('Erro ao processar formulário');
    }

    const result = await response.json();

    // Também salvar em Google Sheets como backup (opcional)
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
      } catch (error) {
        console.error('Erro ao salvar no Google Sheets:', error);
        // Não falhar se o backup falhar
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Formulário enviado com sucesso',
      data: result,
    });

  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    return NextResponse.json(
      { error: 'Erro ao processar formulário. Por favor, tente novamente.' },
      { status: 500 }
    );
  }
}

// Também aceitar GET para teste
export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'ok',
    message: 'API de formulários está funcionando',
    timestamp: new Date().toISOString(),
  });
}

