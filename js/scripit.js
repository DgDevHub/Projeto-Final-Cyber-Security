document.addEventListener('DOMContentLoaded', () => {
    const perguntas = [
        { pergunta: "Qual dos seguintes sinais é mais indicativo de um possível golpe em uma comunicação por e-mail ou mensagem?", respostas: ["O remetente possui um endereço de e-mail corporativo oficial", "O e-mail contém erros de gramática e ortografia.", "A mensagem oferece um prêmio de uma promoção que você nunca participou.", "O e-mail solicita a verificação de identidade através de um link suspeito"], correta: 3 },
        { pergunta: "Qual das seguintes práticas é a mais eficaz para proteger senhas?", respostas: [" Usar a mesma senha para todas as contas", "Ativar a autenticação de dois fatores", "Compartilhar senhas apenas com amigos confiáveis", "Anotar senhas em um caderno"], correta: 1 },
        { pergunta: "O que não faz parte dos quatro pilares da segurança da informação?", respostas: ["Eficiência", "Confidencialidade", "Integridade", "Autencidade"], correta: 0 },
        { pergunta: "Qual a principal função de um firewall?", respostas: ["Proteger contra virus", "Fazer backup de dados", "Bloquear acessos não autorizados à rede", "Melhorar a velocidade da internet"], correta: 2 },
        { pergunta: "Qual a melhor prática ao usar redes Wi-fi públicas?", respostas: ["Usar VPN para proteger a conexão", "Acessar contas bancárias", "Compartilhar informações pessoais", "Desativar o firewall"], correta: 0 }
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
    }


    carregarPergunta();
});
