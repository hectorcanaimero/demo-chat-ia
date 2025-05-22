! function () {
  function n() {
    const n = window.location.pathname;
    return /\/product\/\d+(?:\/[\w-]+)?/.test(n)
  }

  function t() {
    const n = window.location.pathname.match(/\/product\/(\d+)/);
    return n ? n[1] : null
  }

  function e() {
    if (!n()) return;
    const e = t(),
      o = function () {
        const n = window.location.pathname.split("/");
        let t = -1;
        for (let e = 0; e < n.length; e++)
          if ("product" === n[e]) {
            t = e;
            break
          } if (t >= 0 && n.length > t + 2) {
          const e = n[t + 2];
          return decodeURIComponent(e.replace(/-/g, " "))
        }
        return ""
      }();
    if (console.log("Produto detectado - ID:", e, "TÃƒÂ­tulo:", o), window.chatLoadedProductId === e && document.querySelector(".n8n-chat")) {
      const n = document.querySelector(".n8n-chat");
      return void(n && (n.style.display = ""))
    }! function () {
      const n = document.querySelector(".n8n-chat");
      n && n.remove();
      const t = document.querySelector('link[href*="n8n/chat/dist/style.css"]');
      if (t && t.remove(), window.chatLoadedProductId = null, window.n8nChatInstance) try {
        window.n8nChatInstance = null
      } catch (n) {
        console.log("Error cleaning up chat instance:", n)
      }
    }(), console.log("Loading chat widget for product:", e, "with title:", o);
    const a = "chat-session-" + Date.now();

    function r(n, t) {
      const a = document.createElement("style");
      a.textContent = '\n        :root {\n          --chat--color-primary: #0b479c !important;\n          --chat--color-primary-shade-50: #0d54b9 !important;\n          --chat--color-primary-shade-100: #0f62d7 !important;\n          --chat--color-secondary: #0b479c !important;\n          --chat--color-dark: #101330 !important;\n          --chat--header-height: auto;\n          --chat--header--padding: var(--chat--spacing);\n          --chat--header--background: #0b479c !important;\n          --chat--header--color: var(--chat--color-light);\n          --chat--header--border-top: none;\n          --chat--header--border-bottom: none;\n          --chat--header--border-bottom: none;\n          --chat--header--border-bottom: none;\n          --chat--heading--font-size: 1.7em!important;\n          --chat--header--color: var(--chat--color-light);\n          --chat--subtitle--font-size: 1.2em!important;\n          --chat--subtitle--line-height: 1.6;\n          --chat--message--font-size: 0.9rem !important;\n        }\n        \n        /* Ocultar o "Powered by n8n" no footer */\n        .chat-powered-by {\n          display: none !important;\n        }\n        \n        /* Ocultar o rodapÃƒÂ© inteiro se necessÃƒÂ¡rio */\n        .n8n-chat__footer {\n          display: none !important;\n        }\n      ', document.head.appendChild(a), document.head.insertAdjacentHTML("beforeend", '<link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />');
      let r = [];
      n && n.output && r.push(n.output);
      const c = document.createElement("script");
      c.type = "module", c.innerHTML = `\n        import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';\n        \n        // Criar uma div para conter o chat\n        const targetDiv = document.createElement('div');\n        targetDiv.id = 'n8n-chat';\n        document.body.appendChild(targetDiv);\n        \n        // CriaÃƒÂ§ÃƒÂ£o do chat com as mensagens iniciais incluindo a resposta do n8n\n        window.n8nChatInstance = createChat({\n          webhookUrl: 'https://n8neditor.waila.io/webhook/78d412b9-a9db-40d2-8466-4188db9ebf04/chat',\n          webhookConfig: {\n            method: 'POST',\n            headers: {}\n          },\n          target: '#n8n-chat',\n          mode: 'window', // Sempre mantÃƒÂ©m o modo window\n          chatInputKey: 'chatInput',\n          chatSessionKey: 'sessionId',\n          sessionId: '${t}',\n          metadata: {\n            productId: ${e||10}, \n            productTitle: '${o}'\n          },\n          showWelcomeScreen: false,\n          defaultLanguage: 'pt-BR',\n          initialMessages: ${JSON.stringify(r)},\n          i18n: {\n            'pt-BR': {\n              title: 'Ã°Å¸Â¤â€“ CONDOR IA',\n              subtitle: "Especialista em produtos Condor",\n              footer: 'Ã‚Â© Condor EletrÃƒÂ´nicos', // Personalizar o texto do footer\n              getStarted: 'Nova Conversa',\n              inputPlaceholder: 'Digite sua pergunta...',\n              sendMessage: 'Enviar',\n              errorMessage: 'Ocorreu um erro. Por favor, tente novamente mais tarde.',\n              closeChat: 'Fechar chat',\n              openChat: 'Abrir chat'\n            }\n          }\n        });\n        \n        // FunÃƒÂ§ÃƒÂ£o para remover ou substituir o footer apÃƒÂ³s o carregamento do chat\n        setTimeout(() => {\n          // Remover o texto "Powered by n8n" do footer se o CSS nÃƒÂ£o funcionar\n          const footerElement = document.querySelector('.n8n-chat__footer');\n          if (footerElement) {\n            footerElement.innerHTML = '<span>Ã‚Â© Condor EletrÃƒÂ´nicos</span>';\n          }\n          \n          // TambÃƒÂ©m remover qualquer elemento com a classe .chat-powered-by\n          const poweredByElement = document.querySelector('.chat-powered-by');\n          if (poweredByElement) {\n            poweredByElement.style.display = 'none';\n          }\n        }, 1000);\n      `, document.body.appendChild(c)
    }
    console.log("Enviando mensagem inicial para o n8n..."), fetch("https://n8neditor.waila.io/webhook/78d412b9-a9db-40d2-8466-4188db9ebf04/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chatInput: "ola",
        sessionId: a,
        metadata: {
          productId: e,
          productTitle: o
        }
      })
    }).then((n => n.json())).then((n => {
      console.log("Resposta inicial recebida:", n), r(n, a)
    })).catch((n => {
      console.error("Erro ao obter resposta inicial:", n), r(null, a)
    })), window.chatLoadedProductId = e
  }

  function o() {
    const o = t();
    if (n())
      if (window.chatLoadedProductId !== o) e();
      else {
        const n = document.querySelector(".n8n-chat");
        n && (n.style.display = "")
      }
    else {
      const n = document.querySelector(".n8n-chat");
      n && (n.style.display = "none")
    }
  }
  window.chatLoadedProductId = null, o(), window.addEventListener("popstate", (function () {
    setTimeout(o, 300)
  }));
  const a = history.pushState;
  history.pushState = function () {
    a.apply(this, arguments), setTimeout(o, 300)
  };
  const r = history.replaceState;
  history.replaceState = function () {
    r.apply(this, arguments), setTimeout(o, 300)
  };
  let c = location.href;
  new MutationObserver((() => {
    const n = location.href;
    n !== c && (c = n, setTimeout(o, 300))
  })).observe(document, {
    subtree: !0,
    childList: !0
  })
}();