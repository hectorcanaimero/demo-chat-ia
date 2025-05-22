const n = window.location.pathname;
console.log(n);
import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
createChat({
  webhookUrl: 'https://hook.z0n.co/webhook/1c1742f4-57fa-46d5-999e-2177d2e60eab/chat',
  target: '#n8n-chat',
  mode: 'window',
  chatInputKey: 'chatInput',
  chatSessionKey: 'sessionId',
  metadata: {},
  showWelcomeScreen: false,
  defaultLanguage: 'pt',
  initialMessages: [
    'Olá! 👋',
    'Meu nome é Nathan. Como posso ajudar você hoje?'
  ],
  i18n: {
    pt: {
      title: 'IA Condor!',
      subtitle: "Vamos a falar do produto.",
      footer: '',
      getStarted: '',
      inputPlaceholder: 'Digite sua pergunta..',
    },
  },
});