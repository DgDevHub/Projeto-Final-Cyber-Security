document.addEventListener('DOMContentLoaded', () => {
    const perguntas = [
        { 
            pergunta: "Qual dos sinais abaixo indica que uma mensagem de WhatsApp ou e-mail pode ser um golpe?", 
            respostas: [
                "Mensagem de um conhecido pedindo ajuda financeira urgente", 
                "E-mail de uma loja pedindo para confirmar uma compra que você não fez", 
                "Mensagem de um banco pedindo para atualizar sua senha através de um link", 
                "Todas as opções"
            ], 
            correta: 3 
        },
        { 
            pergunta: "Qual a prática mais segura ao receber uma ligação pedindo informações bancárias?", 
            respostas: [
                "Fornecer os dados apenas se a pessoa disser que é do banco", 
                "Desligar e ligar diretamente para o banco para confirmar", 
                "Confirmar os dados por mensagem se o banco pedir", 
                "Passar apenas informações que você considera não sensíveis"
            ], 
            correta: 1 
        },
        { 
            pergunta: "Qual dos comportamentos abaixo é mais seguro para evitar cair em golpes online?", 
            respostas: [
                "Clique em links de promoções de lojas desconhecidas para verificar ofertas", 
                "Use senhas simples para lembrar facilmente", 
                "Desconfie de ofertas muito vantajosas e verifique a origem", 
                "Acredite em mensagens de bancos solicitando dados pessoais por SMS"
            ], 
            correta: 2 
        },
        { 
            pergunta: "O que você deve fazer ao receber uma mensagem de alguém dizendo ser seu parente pedindo dinheiro com urgência?", 
            respostas: [
                "Transferir o dinheiro imediatamente para ajudar", 
                "Pedir mais detalhes por mensagem", 
                "Ligar para o parente diretamente para confirmar", 
                "Responde com os dados do seu banco"
            ], 
            correta: 2 
        },
        { 
            pergunta: "Qual a melhor maneira de se proteger ao usar Wi-Fi público, como em um café?", 
            respostas: [
                "Acessar suas contas bancárias apenas se a rede parecer segura", 
                "Não acessar contas pessoais ou de bancos em Wi-Fi público sem proteção", 
                "Usar sempre a mesma senha em todas as contas para facilitar o acesso", 
                "Confiar que a rede Wi-Fi pública do local é segura"
            ], 
            correta: 1 
        }
    ];
    

    let perguntaAtual = 0;
    const Pergunta = document.getElementById("Pergunta");
    const containerRespostas = document.getElementById("containerRespostas");
    const botoesResposta = [
        document.getElementById('resposta0'),
        document.getElementById('resposta1'),
        document.getElementById('resposta2'),
        document.getElementById('resposta3')
    ];
    const nome = sessionStorage.getItem("nomeUser")
    const mensagem = document.getElementById('mensagem');
    let p = 0;

    function carregarPergunta() {
        const pergunta = perguntas[perguntaAtual];
        Pergunta.textContent = pergunta.pergunta;
        botoesResposta.forEach((botao, index) => {
            botao.textContent = pergunta.respostas[index];
            botao.onclick = () => verificarResposta(index);
        });
        mensagem.classList.add('hide'); 
    }

    function verificarResposta(respostaEscolhida) {
        const pergunta = perguntas[perguntaAtual];
        if (respostaEscolhida === pergunta.correta) {
            mostrarMensagemAcerto();
        } else {
            mostrarMensagemErro();
        }
    }

    function mostrarMensagemAcerto() {
        mensagem.textContent = "Resposta correta!";
        mensagem.classList.remove('hide');
        mensagem.classList.remove('erro');
        mensagem.classList.add('acerto');
        setTimeout(() => {
            perguntaAtual++;
            p++
            if (perguntaAtual < perguntas.length) {
                carregarPergunta();
            } else {
                mostrarMensagemSucesso();
            }
        }, 1000); 
    }

    function mostrarMensagemErro() {
        mensagem.textContent = "Resposta incorreta. Reiniciando o quiz...";
        mensagem.classList.remove('hide');
        mensagem.classList.remove('acerto');
        mensagem.classList.add('erro');
        setTimeout(() => {
            perguntaAtual = 0;
            carregarPergunta();
        }, 1000); 
    }

    function mostrarMensagemSucesso() {
        mensagem.textContent = "Parabéns " + nome+"! Você completou o quiz com a pontuação de " + p +"!";
        mensagem.classList.remove('hide');
        mensagem.classList.remove('erro');
        mensagem.classList.add('acerto');
        setTimeout(() => {
            sessionStorage.removeItem("nomeUser")
            window.location.href= "../html/home.html"; 
        }, 3000); 
        p = 0
    }


    carregarPergunta();
});
