const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em qual Distrito Katniss vive antes de ser escolhida como tributo? ",
        alternativas: [
            {
                texto: "Distrito 11",
                afirmacao: [
                    "Errado",
                    ""
                ],
                proxima: 1,
            },
            {
                texto: "Distrito 12",
                afirmacao: [
                    "Correto",
                    ""
                ],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: " Qual é o propósito dos Jogos Vorazes?",
        alternativas: [
            {
                texto: "Entreter o Capitol e manter a ordem através do medo",
                afirmacao: [
                    "Correto",
                    "",
                    ""
                ],
                proxima: 3,
            },
            {
                texto: " Reforçar a aliança entre os distritos",
                afirmacao: [
                    "Errado",
                    "",
                    ""
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Qual é o nome do símbolo que representa a resistência contra o Capitol?",
        alternativas: [
            {
                texto: "O Falcão",
                afirmacao: [
                    "Errado",
                    "",
                    ""
                ],
                proxima: 3,
            },
            {
                texto: " O Tordo (Mockingjay)",
                afirmacao: [
                    "Correto",
                    "",
                    ""
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Quem é o mentor de Katniss e Peeta durante os Jogos?",
        alternativas: [
            {
                texto: " Haymitch Abernathy",
                afirmacao: [
                    "Correto",
                    ""
                ],
                proxima: 5,
            },
            {
                texto: "Effie Trinket",
                afirmacao: [
                    "Errado",
                    ""
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: " Qual tributo do Distrito 11 ajuda Katniss durante os Jogos?",
        alternativas: [
            {
                texto: " Clove",
                afirmacao: [
                    "Errado",
                    ""
                ],
                proxima: 5,
            },
            {
                texto: "Rue",
                afirmacao: [
                    "Correto",
                    ""
                ],
                proxima: 6,
            },
        ]
    },
    { 
        enunciado: " O que faz com que Katniss e Peeta se tornem um casal simbólico durante os Jogos?",
        alternativas: [
            {
                texto: "A colaboração de Katniss e Peeta em uma aliança com outros tributos",
                afirmacao: [
                    "Errado",
                    ""
                ],
                proxima: 7,
            },
            {
                texto: " O ato de Peeta declarar seu amor por Katniss na televisão",
                afirmacao: [
                    "Correto",
                    ""
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: " Qual é o nome da protagonista de “Jogos Vorazes”?",
        alternativas: [
            {
                texto: "Peeta Mellark",
                afirmacao: [
                    "Errado",
                    ""
                ],
                proxima: 7,
            },
            {
                texto: "Katniss Everdeen",
                afirmacao: [
                    "Correto",
                    ""
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: "Como os tributos são selecionados para participar dos Jogos Vorazes?",
        alternativas: [
            {
                texto: "Através de um sorteio público",
                afirmacao: [
                    "Correto",
                    ""
                ],
            },
            {
                texto: "Através de um teste de habilidades",
                afirmacao: [
                    "Errado",
                    "",
                    ""
                ],
            },
        ]
    }
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
