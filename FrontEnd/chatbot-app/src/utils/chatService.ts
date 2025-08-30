// Simulação de respostas do chatbot
const botResponses = [
  "Essa é uma pergunta interessante! Como posso ajudar você com mais detalhes?",
  "Entendo seu ponto de vista. Vamos explorar isso juntos.",
  "Baseado no que você disse, sugiro que consideremos algumas opções.",
  "Isso é fascinante! Pode me contar mais sobre isso?",
  "Vou processar sua solicitação. Um momento, por favor...",
  "Aqui está minha análise sobre o que você perguntou.",
  "Interessante perspectiva! Vamos desenvolver essa ideia.",
];

export const simulateTyping = (delay: number = 1000): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, delay));
};

export const generateBotResponse = async (userMessage: string): Promise<string> => {
  // Simula tempo de processamento
  await simulateTyping(Math.random() * 2000 + 1000);
  
  // Respostas específicas para certas palavras-chave
  const message = userMessage.toLowerCase();
  
  if (message.includes('olá') || message.includes('oi')) {
    return "Olá! Como posso ajudar você hoje?";
  }
  
  if (message.includes('como vai') || message.includes('tudo bem')) {
    return "Estou funcionando perfeitamente, obrigado por perguntar! E você, como está?";
  }
  
  if (message.includes('ajuda') || message.includes('help')) {
    return "Claro! Estou aqui para ajudar. Pode me fazer qualquer pergunta ou pedir assistência com algum tópico específico.";
  }
  
  if (message.includes('tchau') || message.includes('adeus')) {
    return "Foi um prazer conversar com você! Até a próxima! 👋";
  }
  
  // Resposta aleatória para outras mensagens
  return botResponses[Math.floor(Math.random() * botResponses.length)];
};