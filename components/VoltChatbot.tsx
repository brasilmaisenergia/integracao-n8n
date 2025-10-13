'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'volt';
  timestamp: Date;
}

export default function VoltChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou o Volt, seu assistente de energia! ⚡ Como posso te ajudar hoje?',
      sender: 'volt',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    { text: '💡 Quero economizar energia', value: 'economizar' },
    { text: '☀️ Como funciona energia solar?', value: 'solar' },
    { text: '📊 Analisar minha fatura', value: 'fatura' },
    { text: '🎓 Cursos disponíveis', value: 'cursos' },
  ];

  const getVoltResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();

    // Respostas baseadas em palavras-chave
    if (lowerMessage.includes('economizar') || lowerMessage.includes('economia')) {
      return 'Ótimo! Existem várias formas de economizar energia:\n\n1. **Energia Solar** - Reduza até 95% da sua conta\n2. **Geração Distribuída** - Sem investimento inicial\n3. **Mercado Livre** - Para grandes consumidores\n\nQuer que eu analise sua fatura para uma recomendação personalizada? 📊';
    }

    if (lowerMessage.includes('solar') || lowerMessage.includes('painel')) {
      return 'Energia solar é incrível! ☀️\n\nCom painéis solares você:\n- Economiza até 95% na conta de luz\n- Valoriza seu imóvel\n- Contribui para o meio ambiente\n- Tem retorno do investimento em 3-5 anos\n\nPosso te conectar com instaladores certificados. Quer fazer uma simulação?';
    }

    if (lowerMessage.includes('fatura') || lowerMessage.includes('conta')) {
      return 'Posso analisar sua fatura de energia gratuitamente! 🔍\n\nVou identificar:\n- Seu perfil de consumo\n- Oportunidades de economia\n- Melhor solução para você\n\nVá em "Para Sua Casa" e faça o upload da sua fatura. É rápido e seguro!';
    }

    if (lowerMessage.includes('curso') || lowerMessage.includes('aprender')) {
      return 'Temos cursos incríveis sobre energia! 🎓\n\n**Nível 1 (GRATUITO):**\n- Introdução à energia solar\n- Como economizar energia\n- Entenda sua fatura\n\n**Níveis 2-4 (Pagos):**\n- Instalação de sistemas solares\n- Mercado livre de energia\n- Certificação profissional\n\nAcesse "Cursos" no menu para saber mais!';
    }

    if (lowerMessage.includes('preço') || lowerMessage.includes('custo') || lowerMessage.includes('valor')) {
      return 'Os valores variam conforme sua necessidade! 💰\n\n**Cursos:**\n- Nível 1: GRATUITO\n- Nível 2: R$ 297\n- Nível 3: R$ 497\n- Nível 4: R$ 997\n\n**Instalação Solar:**\nDepende do seu consumo. Faça uma simulação gratuita e receba orçamentos de instaladores certificados!';
    }

    if (lowerMessage.includes('mercado livre')) {
      return 'Mercado Livre é para grandes consumidores! ⚡\n\n**Quem pode:**\n- Empresas com consumo > 500 kW\n- Indústrias\n- Shoppings\n- Condomínios\n\n**Vantagens:**\n- Economia de 10-30%\n- Previsibilidade de custos\n- Energia renovável\n\nQuer uma análise do seu caso?';
    }

    if (lowerMessage.includes('geração distribuída') || lowerMessage.includes('cooperativa')) {
      return 'Geração Distribuída é perfeita para quem não pode instalar painéis! 🏢\n\n**Como funciona:**\n- Você assina uma cooperativa\n- Eles geram energia solar\n- Você recebe créditos na sua conta\n- Economia de 10-20%\n\n**Vantagens:**\n- Sem investimento inicial\n- Sem obras\n- Pode cancelar quando quiser\n\nQuer conhecer cooperativas disponíveis?';
    }

    if (lowerMessage.includes('obrigado') || lowerMessage.includes('valeu')) {
      return 'Por nada! 😊 Estou sempre aqui para ajudar! Se tiver mais dúvidas, é só chamar! ⚡';
    }

    if (lowerMessage.includes('oi') || lowerMessage.includes('olá') || lowerMessage.includes('ola')) {
      return 'Olá! Tudo bem? 😊 Sou o Volt e estou aqui para te ajudar com tudo sobre energia! Como posso te auxiliar hoje?';
    }

    // Resposta padrão
    return 'Hmm, não tenho certeza sobre isso ainda! 🤔\n\nMas posso te ajudar com:\n- Análise de fatura\n- Energia solar\n- Cursos\n- Economia de energia\n- Mercado livre\n\nOu fale com nossa equipe em contato@brasilmaisenergia.com';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simular delay de digitação
    setTimeout(async () => {
      const responseText = await getVoltResponse(inputText);
      
      const voltMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'volt',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, voltMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (value: string) => {
    const quickReplyMessages: Record<string, string> = {
      economizar: 'Quero economizar energia',
      solar: 'Como funciona energia solar?',
      fatura: 'Quero analisar minha fatura',
      cursos: 'Quais cursos vocês oferecem?',
    };

    setInputText(quickReplyMessages[value] || value);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Botão Flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-[#2A4B7B] hover:bg-[#1e3557] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
          aria-label="Abrir chat com Volt"
        >
          <div className="relative">
            <Image
              src="/images/volt-default.png"
              alt="Volt"
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className="absolute -top-1 -right-1 bg-[#FBC13A] text-[#2A4B7B] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
              ⚡
            </span>
          </div>
        </button>
      )}

      {/* Janela do Chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-4 border-[#2A4B7B]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2A4B7B] to-[#1e3557] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/volt-default.png"
                alt="Volt"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#FBC13A]"
              />
              <div>
                <h3 className="font-bold text-lg">Volt</h3>
                <p className="text-xs text-gray-200">Seu assistente de energia ⚡</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#FBC13A] transition-colors text-2xl font-bold"
              aria-label="Fechar chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-[#2A4B7B] text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-md border border-gray-200'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <span className={`text-xs ${message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'} mt-1 block`}>
                    {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-md border border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-[#2A4B7B] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#2A4B7B] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-[#2A4B7B] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="p-3 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-2">Respostas rápidas:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.value}
                    onClick={() => handleQuickReply(reply.value)}
                    className="text-xs bg-gray-100 hover:bg-[#2A4B7B] hover:text-white text-gray-700 px-3 py-2 rounded-lg transition-colors"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Digite sua mensagem..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#2A4B7B]"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-[#FBC13A] hover:bg-[#e5ad2a] text-[#2A4B7B] rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Enviar mensagem"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

