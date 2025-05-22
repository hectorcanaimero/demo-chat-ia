import {
  createChat
} from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
// Criar uma div para conter o chat
const targetDiv = document.createElement('div');
targetDiv.id = 'n8n-chat';
document.body.appendChild(targetDiv);
// CriaÃƒÂ§ÃƒÂ£o do chat com as mensagens iniciais incluindo a resposta do n8n
window.n8nChatInstance = createChat({
  webhookUrl: 'https://n8neditor.waila.io/webhook/78d412b9-a9db-40d2-8466-4188db9ebf04/chat',
  webhookConfig: {
    method: 'POST',
    headers: {}
  },
  target: '#n8n-chat',
  mode: 'window',  // Sempre mantÃƒÂ©m o modo window
  chatInputKey: 'chatInput',
  chatSessionKey: 'sessionId',
  sessionId: '${t}',
  metadata: {
    productId: '${ e || 10 }',
    productTitle: '${o}'
  },
  showWelcomeScreen: false,
  defaultLanguage: 'pt-BR',
  initialMessages: '${JSON.stringify(r)}',
  i18n: {
    'pt-BR': {
      title: 'Ã°Å¸Â¤â€“ CONDOR IA',
      subtitle: "Especialista em produtos Condor",
      footer: 'Ã‚Â© Condor EletrÃƒÂ´nicos', // Personalizar o texto do footer
      getStarted: 'Nova Conversa',
      inputPlaceholder: 'Digite sua pergunta...',
      sendMessage: 'Enviar',
      errorMessage: 'Ocorreu um erro. Por favor, tente novamente mais tarde.',
      closeChat: 'Fechar chat',
      openChat: 'Abrir chat'
    }
  }
});
// FunÃƒÂ§ÃƒÂ£o para remover ou substituir o footer apÃƒÂ³s o carregamento do chat
setTimeout(() => {
  // Remover o texto "Powered by n8n" do footer se o CSS nÃƒÂ£o funcionar
  const footerElement = document.querySelector('.n8n-chat__footer');
  if (footerElement) {
    footerElement.innerHTML = '<span>Ã‚Â© Condor EletrÃƒÂ´nicos</span>';
  }
  // TambÃƒÂ©m remover qualquer elemento com a classe .chat-powered-by
  const poweredByElement = document.querySelector('.chat-powered-by');
  if (poweredByElement) {
    poweredByElement.style.display = 'none';
  }
}, 1000);