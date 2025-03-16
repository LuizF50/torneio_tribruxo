const tarefas = [
    {
        nome: "O Labirinto das Criaturas",
        descricao: "Os campeões devem atravessar um labirinto repleto de criaturas mágicas, como um Nundu escondido na névoa, um Espectro de Poeira camuflado e até um Tronquilho que guarda uma chave essencial para escapar."
    },
    {
        nome: "O Enigma das Varinhas",
        descricao: "Cada campeão recebe uma varinha que não é a sua e deve resolver um enigma para identificar qual feitiço desbloqueia o retorno de sua própria varinha. Durante o desafio, os feitiços lançados podem ter efeitos imprevisíveis!"
    },
    {
        nome: "O Desafio do Trovão Alado",
        descricao: "Os competidores devem capturar uma pena de um Trovão-Alado (Thunderbird) sem assustá-lo. O pássaro é sensível às emoções, então apenas aqueles que dominam a calma e a magia delicada conseguirão se aproximar."
    },
    {
        nome: "A Arena dos Elementos",
        descricao: "Os campeões são transportados para um espaço onde cada ambiente simula um dos quatro elementos mágicos: fogo, água, terra e ar. Para atravessá-los, precisam solucionar desafios elementais, como domar um redemoinho de marés ou atravessar um deserto com dunas ilusórias."
    },
    {
        nome: "O Baile das Sombras",
        descricao: "Parece um baile inocente, mas na verdade, os campeões precisam identificar e capturar um Clabbert disfarçado entre os convidados. Para dificultar, o salão está cheio de feitiços de ilusão e poções de disfarce."
    },
    {
        nome: "A Fuga do Círculo Lunar",
        descricao: "Em uma floresta iluminada apenas pela lua cheia, os campeões devem encontrar um artefato escondido enquanto evitam um grupo de Lobisomens. Apenas feitiços defensivos são permitidos, e os campeões podem usar ingredientes da floresta para criar poções de proteção."
    },
    {
        nome: "A Provação dos Espelhos de Oclumência",
        descricao: "Os campeões enfrentam uma sala cheia de espelhos mágicos que revelam seus maiores medos, fraquezas e lembranças esquecidas. Para sair, precisam dominar a Oclumência e distinguir a realidade da ilusão."
    },
    {
        nome: "O Códex dos Feiticeiros Perdidos",
        descricao: "Cada campeão recebe uma página rasgada de um antigo grimório e precisa encontrar o restante do livro dentro de uma biblioteca encantada. O problema? Os livros voam, mordem, lançam feitiços e alguns tentam fugir!"
    },
    {
        nome: "A Travessia do Rio Estige",
        descricao: "Inspirado na mitologia, os campeões devem cruzar um rio onde espíritos perdidos tentam desviar suas mentes do caminho. Barqueiros encantados oferecem transporte, mas cada um cobra um preço diferente—nem sempre justo."
    },
    {
        nome: "O Duelo das Relíquias",
        descricao: "Na grande final, os campeões recebem objetos encantados aleatórios e devem usá-los para vencer desafios mágicos impostos por uma entidade ancestral. Criatividade, inteligência e habilidade mágica são essenciais para triunfar."
    }
];

function getRandomTarefa() {
    const randomIndex = Math.floor(Math.random() * tarefas.length);
    return tarefas[randomIndex];
}

function calcularPontos() {
    const input = document.getElementById('pontos').value;
    const pontosPossiveis = input
        .replace(/[\[\]]/g, '') // Remove colchetes
        .split(',') // Divide os valores por vírgula
        .map(Number); // Converte para números

    let primeiroLugar = 0;
    let segundoLugar = 0;
    let terceiroLugar = 0;

    for (const pontos of pontosPossiveis) {
        primeiroLugar += pontos; // Primeiro lugar ganha todos os pontos
        segundoLugar += Math.floor(pontos / 2); // Segundo lugar ganha metade dos pontos (arredondado para baixo)
        terceiroLugar += 0; // Terceiro lugar não ganha pontos
    }

    document.getElementById('primeiro').textContent = primeiroLugar;
    document.getElementById('segundo').textContent = segundoLugar;
    document.getElementById('terceiro').textContent = terceiroLugar;

    const tarefa = getRandomTarefa();
    document.getElementById('tarefa').innerHTML = `
        <strong>Tarefa:</strong> ${tarefa.nome}<br>
        <em>${tarefa.descricao}</em>
    `;
}

// Inicializa com uma tarefa aleatória ao carregar a página
const tarefaInicial = getRandomTarefa();
document.getElementById('tarefa').innerHTML = `
    <strong>Tarefa:</strong> ${tarefaInicial.nome}<br>
    <em>${tarefaInicial.descricao}</em>
`;