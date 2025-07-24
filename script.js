function gerarPost() {
      const ideias = [
        "💡 Tema: 'Como eu organizo meu caos criativo'\n📌 Tipo: Carrossel com 5 dicas práticas",
        "📸 Tema: 'Por que seu conteúdo ainda não viralizou?'\n📌 Tipo: Story com enquetes e quiz",
        "🔍 Tema: 'Erros que te deixam invisível no Instagram'\n📌 Tipo: Reels com storytelling"
      ];
      mostrar(ideias);
    }

    function gerarReel() {
      const roteiros = [
        "🎬 Roteiro: 'Começo o dia assim...' + caos do bastidor + final com café e respiro 😅",
        "🎥 Roteiro: '1 ideia que me salvou no conteúdo essa semana' + explicação rápida",
        "📹 Roteiro: 'O que eu faria diferente se estivesse começando hoje' + edição com cortes e música leve"
      ];
      mostrar(roteiros);
    }

    function gerarLegenda() {
      const legendas = [
        "🧠 Reflexiva: 'Não é sobre postar todo dia, é sobre aparecer quando importa.'",
        "🔥 Desafiadora: 'Poste mesmo sem vontade. A constância é mais forte que a inspiração.'",
        "😂 Engraçada: 'Se der certo, é marketing. Se não der, é conceito artístico.'"
      ];
      mostrar(legendas);
    }

    function mostrar(array) {
      const resultado = array[Math.floor(Math.random() * array.length)];
      document.getElementById('output').innerText = resultado;
    }