const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Kung Fu Panda é um filme de animação que foi lançado em 2008 que conta a história de Po, um panda que trabalha na loja de macarrão de sua familia e sonha em transformar-se em um dragão guerreiro.",
        alternativas: [
            {
                texto: "Já asisti o filme e gostei da animação e desenvolvimento da história!",
                afirmacao: "A pessoa gostou do filme"
            },
            {
                texto: "Assisti o filme, mas não gostei de comoa história se desenvolvel",
                afirmacao: "A pessoa não gostou do filme"
            }
        ]
    },
    {
        enunciado: "No primeiro filme, Po enfrenta Tai Lung, o que você achou desssa luta?",
        alternativas: [
            {
                texto: "Achei muito boa a cena de luta, muito bem desenvolvida e engraçada!",
                afirmacao: "A cena foi divertida"
            },
            {
                texto: "Não gostei da cena de luta, poderia ter tido mais ação e emoção!",
                afirmacao: "A cena não foi boa"
            }
        ]
    },
    {
        enunciado: "Na saga, Po desenvolve uma grande amizade com os cinco furiosos",
        alternativas: [
            {
                texto: "Gosto de como a amizade deles foi desenvolvida no decorrer dos filmes",
                afirmacao: "ela gostou do desenvolvimento dos personagens"
            },
            {
                texto: "Não gostei de como desenvolveram a amizade dos personagens",
                afirmacao: "ela não gostou do desenvolvimento dos personagens"
            }
        ]
    },
    {
        enunciado: "No último filme, os cinco furiosos não tiveram uma aparição",
        alternativas: [
            {
                texto: "Infelizmente os cinco furiosos não apareceram,mas esse fato não teve importância para a história",
                afirmacao: "não fez importância os cinco furiosos não aparecerem"
            },
            {
                texto: "Infelizmente os cinco furiosos não apareceram, não teve impacto na hostória geral do filme, mas senti falta da aparição dos personagens!",
                afirmacao: "fez importância os cinco furiosos não aparecerem"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
