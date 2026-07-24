const levels = [
  {
    chapter: 1,
    title: "Jesus superior aos anjos",
    questions: [
      {
        ref: "Hb 1.1-2",
        prompt: "Por meio de quem Deus falou nestes últimos dias?",
        options: ["Pelos reis de Israel", "Pelo Filho", "Pelos anjos", "Por Moisés apenas"],
        answer: 1,
        note: "Hebreus começa mostrando que a revelação final de Deus veio por meio do Filho.",
      },
      {
        ref: "Hb 1.3",
        prompt: "O que o Filho realizou em relação aos pecados?",
        options: ["A purificação dos pecados", "A troca da fé pela lei", "A criação de outro templo", "A coroação dos anjos"],
        answer: 0,
        note: "O Filho realizou a purificação dos pecados e se assentou à direita da Majestade.",
      },
      {
        ref: "Hb 1.8",
        prompt: "Como é descrito o trono do Filho?",
        options: ["Passageiro", "Terreno apenas", "Eterno", "Sem autoridade"],
        answer: 2,
        note: "O Reino do Filho é apresentado como eterno e justo.",
      },
      {
        ref: "Hb 1.14",
        prompt: "Qual é a função dos anjos em relação aos salvos?",
        options: ["Substituir Cristo", "Servir em favor dos que herdarão a salvação", "Ser mediadores da nova aliança", "Oferecer sacrifício final"],
        answer: 1,
        note: "Os anjos são servos; Cristo é o Filho superior a eles.",
      },
    ],
  },
  {
    chapter: 2,
    title: "Jesus se fez humano para salvar",
    questions: [
      {
        ref: "Hb 2.1",
        prompt: "Que advertência aparece no início do capítulo?",
        options: ["Não prestar atenção", "Prestar mais atenção ao que foi ouvido", "Abandonar a esperança", "Voltar aos sacrifícios diários"],
        answer: 1,
        note: "A mensagem da salvação exige atenção e perseverança.",
      },
      {
        ref: "Hb 2.9",
        prompt: "Por que Jesus foi feito menor que os anjos por um pouco?",
        options: ["Para sofrer a morte em favor de todos", "Para deixar de ser Filho", "Para depender dos sacerdotes", "Para negar a humanidade"],
        answer: 0,
        note: "Jesus se humilhou para experimentar a morte em favor de todos.",
      },
      {
        ref: "Hb 2.14-15",
        prompt: "Do que Jesus liberta os seres humanos?",
        options: ["Da perseverança", "Do medo da morte", "Da fé", "Da esperança futura"],
        answer: 1,
        note: "Cristo venceu o poder da morte e liberta os que viviam escravizados pelo medo.",
      },
      {
        ref: "Hb 2.18",
        prompt: "Por que Jesus pode socorrer os que são tentados?",
        options: ["Porque nunca sofreu", "Porque foi tentado e sofreu", "Porque rejeitou os irmãos", "Porque os anjos intercedem por ele"],
        answer: 1,
        note: "Jesus entende a luta humana e socorre quem é tentado.",
      },
    ],
  },
  {
    chapter: 3,
    title: "Cristo maior que Moisés",
    questions: [
      {
        ref: "Hb 3.1",
        prompt: "Quais títulos são dados a Jesus?",
        options: ["Apóstolo e sumo sacerdote", "Rei de Salém e escriba", "Anjo e juiz terreno", "Levita e soldado"],
        answer: 0,
        note: "Jesus é apresentado como Apóstolo e Sumo Sacerdote da confissão cristã.",
      },
      {
        ref: "Hb 3.5-6",
        prompt: "Qual diferença aparece entre Moisés e Cristo?",
        options: ["Moisés foi filho; Cristo foi servo", "Moisés e Cristo tiveram o mesmo papel", "Moisés foi servo; Cristo é Filho sobre a casa", "Cristo dependeu da autoridade de Moisés"],
        answer: 2,
        note: "Moisés foi fiel como servo, mas Cristo é Filho sobre a casa de Deus.",
      },
      {
        ref: "Hb 3.12",
        prompt: "Que perigo deve ser vigiado entre os irmãos?",
        options: ["Um coração mau e incrédulo", "Excesso de hospitalidade", "Muita perseverança", "Confiança firme demais"],
        answer: 0,
        note: "Hebreus alerta contra um coração que se afasta do Deus vivo.",
      },
      {
        ref: "Hb 3.13",
        prompt: "Por que os irmãos devem exortar uns aos outros?",
        options: ["Para competir", "Para ninguém ser endurecido pelo engano do pecado", "Para abandonar a fé", "Para substituir a oração"],
        answer: 1,
        note: "A comunhão ajuda os cristãos a continuarem firmes.",
      },
    ],
  },
  {
    chapter: 4,
    title: "Descanso, Palavra e trono da graça",
    questions: [
      {
        ref: "Hb 4.2",
        prompt: "Por que a mensagem ouvida por Israel não trouxe proveito?",
        options: ["Porque não foi acompanhada de fé", "Porque faltou informação", "Porque Deus não prometeu descanso", "Porque Moisés não era servo"],
        answer: 0,
        note: "Ouvir a mensagem sem fé não produz o fruto esperado.",
      },
      {
        ref: "Hb 4.12",
        prompt: "Como a palavra de Deus é descrita?",
        options: ["Antiga e sem efeito", "Viva e eficaz", "Somente simbólica", "Menor que a palavra dos anjos"],
        answer: 1,
        note: "A palavra de Deus revela pensamentos e intenções do coração.",
      },
      {
        ref: "Hb 4.14-15",
        prompt: "Quem é o grande sumo sacerdote dos cristãos?",
        options: ["Arão", "Moisés", "Jesus, o Filho de Deus", "Melquisedeque como substituto final"],
        answer: 2,
        note: "Jesus é o grande Sumo Sacerdote que se compadece das nossas fraquezas.",
      },
      {
        ref: "Hb 4.16",
        prompt: "Como devemos nos aproximar do trono da graça?",
        options: ["Com confiança", "Com desprezo", "Com medo sem esperança", "Com incredulidade"],
        answer: 0,
        note: "Em Cristo, podemos buscar misericórdia e graça em tempo oportuno.",
      },
    ],
  },
  {
    chapter: 5,
    title: "O chamado do sumo sacerdote",
    questions: [
      {
        ref: "Hb 5.4",
        prompt: "Como alguém recebe a honra do sacerdócio?",
        options: ["Por escolha própria", "Por chamado de Deus", "Por votação popular", "Por força militar"],
        answer: 1,
        note: "O sacerdócio é apresentado como chamado de Deus, não autopromoção.",
      },
      {
        ref: "Hb 5.6",
        prompt: "Segundo qual ordem Cristo é sacerdote?",
        options: ["Ordem de Faraó", "Ordem de Melquisedeque", "Ordem de Davi", "Ordem dos anjos"],
        answer: 1,
        note: "Hebreus liga o sacerdócio de Cristo à ordem de Melquisedeque.",
      },
      {
        ref: "Hb 5.8",
        prompt: "O que Jesus aprendeu por meio dos sofrimentos?",
        options: ["A obediência", "A incredulidade", "A negligência", "A rejeição da vontade de Deus"],
        answer: 0,
        note: "O sofrimento de Cristo aparece ligado à obediência perfeita.",
      },
      {
        ref: "Hb 5.14",
        prompt: "Para quem é o alimento sólido?",
        options: ["Para os maduros", "Para os que recusam aprender", "Para os desobedientes", "Para os que abandonam a fé"],
        answer: 0,
        note: "A maturidade espiritual envolve discernir o bem e o mal.",
      },
    ],
  },
  {
    chapter: 6,
    title: "Maturidade e esperança",
    questions: [
      {
        ref: "Hb 6.1",
        prompt: "Que direção espiritual o autor propõe?",
        options: ["Avançar para a maturidade", "Voltar ao Egito", "Abandonar a esperança", "Depender de sacrifícios repetidos"],
        answer: 0,
        note: "Hebreus chama os leitores a crescerem na fé.",
      },
      {
        ref: "Hb 6.10",
        prompt: "O que Deus não é injusto para esquecer?",
        options: ["O trabalho e o amor demonstrados pelos santos", "A riqueza dos reis", "A força militar", "A fama humana"],
        answer: 0,
        note: "Deus vê o serviço e o amor demonstrados ao seu povo.",
      },
      {
        ref: "Hb 6.12",
        prompt: "Quem os leitores devem imitar?",
        options: ["Os que herdam promessas pela fé e perseverança", "Os que voltam atrás", "Os desobedientes do deserto", "Os que desprezam a graça"],
        answer: 0,
        note: "Fé e perseverança caminham juntas em Hebreus.",
      },
      {
        ref: "Hb 6.19",
        prompt: "Como a esperança é descrita?",
        options: ["Âncora segura e firme da alma", "Sombra inútil", "Medo sem resposta", "Peso que impede a fé"],
        answer: 0,
        note: "A esperança em Cristo firma a alma.",
      },
    ],
  },
  {
    chapter: 7,
    title: "Melquisedeque e o sacerdócio superior",
    questions: [
      {
        ref: "Hb 7.1-2",
        prompt: "O que Abraão entregou a Melquisedeque?",
        options: ["O dízimo de tudo", "A arca da aliança", "As tábuas da Lei", "O maná do deserto"],
        answer: 0,
        note: "Esse detalhe mostra a grandeza de Melquisedeque no argumento de Hebreus.",
      },
      {
        ref: "Hb 7.14",
        prompt: "De qual tribo veio Jesus?",
        options: ["Judá", "Levi", "Benjamim", "Efraim"],
        answer: 0,
        note: "Jesus veio de Judá, não da linhagem sacerdotal levítica.",
      },
      {
        ref: "Hb 7.16",
        prompt: "Em que se baseia o sacerdócio de Cristo?",
        options: ["No poder de uma vida indestrutível", "Na genealogia levítica", "No templo terreno", "Na sucessão de Arão"],
        answer: 0,
        note: "O sacerdócio de Cristo é superior e permanente.",
      },
      {
        ref: "Hb 7.25",
        prompt: "Por que Jesus pode salvar completamente?",
        options: ["Porque vive sempre para interceder", "Porque oferece sacrifícios por si mesmo", "Porque depende dos anjos", "Porque muda a cada geração"],
        answer: 0,
        note: "Jesus vive para interceder pelos que se aproximam de Deus por meio dele.",
      },
    ],
  },
  {
    chapter: 8,
    title: "A nova aliança",
    questions: [
      {
        ref: "Hb 8.1",
        prompt: "Qual é o ponto principal apresentado no capítulo?",
        options: ["Temos um sumo sacerdote assentado à direita da Majestade", "A antiga aliança é superior", "Os anjos são mediadores finais", "Não há necessidade de sacerdote"],
        answer: 0,
        note: "Cristo reina e ministra como Sumo Sacerdote superior.",
      },
      {
        ref: "Hb 8.6",
        prompt: "Como o ministério de Jesus é comparado ao antigo?",
        options: ["Superior", "Inferior", "Sem importância", "Temporário"],
        answer: 0,
        note: "Jesus é mediador de aliança superior, baseada em promessas superiores.",
      },
      {
        ref: "Hb 8.10",
        prompt: "Onde Deus promete colocar suas leis na nova aliança?",
        options: ["Na mente e no coração do povo", "Apenas em pedras externas", "Nas armas dos reis", "Somente no templo"],
        answer: 0,
        note: "A nova aliança transforma o interior do povo de Deus.",
      },
      {
        ref: "Hb 8.12",
        prompt: "Que promessa de perdão aparece na nova aliança?",
        options: ["Deus perdoa e não se lembra dos pecados", "Deus guarda os pecados para sempre", "Não há misericórdia", "O perdão depende dos anjos"],
        answer: 0,
        note: "A nova aliança destaca o perdão gracioso de Deus.",
      },
    ],
  },
  {
    chapter: 9,
    title: "O sangue de Cristo e o santuário",
    questions: [
      {
        ref: "Hb 9.7",
        prompt: "Com que frequência o sumo sacerdote entrava no Santo dos Santos?",
        options: ["Uma vez por ano", "Todos os dias", "Uma vez por mês", "Nunca"],
        answer: 0,
        note: "O acesso antigo era limitado e apontava para algo maior.",
      },
      {
        ref: "Hb 9.12",
        prompt: "Com que sangue Cristo entrou no santuário?",
        options: ["Com seu próprio sangue", "Com sangue de bodes", "Com sangue de touros", "Com sangue oferecido por Arão"],
        answer: 0,
        note: "Cristo obteve redenção eterna com seu próprio sangue.",
      },
      {
        ref: "Hb 9.22",
        prompt: "Que princípio sobre perdão aparece no capítulo?",
        options: ["Sem derramamento de sangue não há remissão", "Sem templo não há oração", "Sem reis não há fé", "Sem genealogia não há esperança"],
        answer: 0,
        note: "Hebreus mostra a seriedade do pecado e a suficiência do sacrifício de Cristo.",
      },
      {
        ref: "Hb 9.27-28",
        prompt: "Como Cristo aparecerá pela segunda vez?",
        options: ["Para salvar os que o aguardam", "Para repetir sacrifícios", "Para negar a esperança", "Para voltar ao sistema antigo"],
        answer: 0,
        note: "A esperança cristã aponta para a salvação final em Cristo.",
      },
    ],
  },
  {
    chapter: 10,
    title: "Sacrifício definitivo e perseverança",
    questions: [
      {
        ref: "Hb 10.1",
        prompt: "Como a lei é descrita?",
        options: ["Sombra dos bens futuros", "Sacrifício definitivo", "Trono da graça", "Cidade celestial"],
        answer: 0,
        note: "A lei apontava para a realidade plena em Cristo.",
      },
      {
        ref: "Hb 10.10",
        prompt: "Por meio de que oferta os cristãos são santificados?",
        options: ["Pela oferta do corpo de Jesus Cristo", "Pela oferta de moedas", "Pela oferta dos anjos", "Pela força dos reis"],
        answer: 0,
        note: "O sacrifício de Cristo é único e suficiente.",
      },
      {
        ref: "Hb 10.24-25",
        prompt: "Que prática comunitária os cristãos não devem abandonar?",
        options: ["A congregação dos irmãos", "A peregrinação ao Egito", "A genealogia sacerdotal", "A oferta de animais"],
        answer: 0,
        note: "A comunhão estimula amor, boas obras e perseverança.",
      },
      {
        ref: "Hb 10.36",
        prompt: "De que os cristãos necessitam para alcançar a promessa?",
        options: ["Perseverança", "Avareza", "Medo", "Isolamento"],
        answer: 0,
        note: "A caminhada cristã exige perseverança.",
      },
    ],
  },
  {
    chapter: 11,
    title: "A galeria da fé",
    questions: [
      {
        ref: "Hb 11.1",
        prompt: "Segundo Hebreus, o que é fé?",
        options: ["Certeza do que se espera e convicção do que não se vê", "Medo sem esperança", "Apenas conhecimento histórico", "Repetição de rituais"],
        answer: 0,
        note: "Fé envolve confiança nas promessas de Deus.",
      },
      {
        ref: "Hb 11.7",
        prompt: "O que Noé fez pela fé?",
        options: ["Preparou a arca", "Construiu o templo", "Recusou obedecer", "Voltou para Ur"],
        answer: 0,
        note: "Noé respondeu à advertência de Deus com obediência.",
      },
      {
        ref: "Hb 11.8",
        prompt: "Como Abraão demonstrou fé ao ser chamado?",
        options: ["Obedeceu e saiu sem saber para onde ia", "Permaneceu em sua terra", "Recusou a promessa", "Pediu um rei"],
        answer: 0,
        note: "Abraão caminhou confiando em Deus.",
      },
      {
        ref: "Hb 11.24",
        prompt: "Que privilégio Moisés recusou pela fé?",
        options: ["Ser chamado filho da filha de Faraó", "Receber a bênção de Melquisedeque", "Entrar no Santo dos Santos", "Ser rei de Salém"],
        answer: 0,
        note: "Moisés escolheu identificar-se com o povo de Deus.",
      },
    ],
  },
  {
    chapter: 12,
    title: "Correndo com os olhos em Jesus",
    questions: [
      {
        ref: "Hb 12.1",
        prompt: "Como a carreira cristã deve ser corrida?",
        options: ["Com perseverança", "Com preguiça", "Com incredulidade", "Com abandono da fé"],
        answer: 0,
        note: "A imagem é de uma corrida espiritual que exige constância.",
      },
      {
        ref: "Hb 12.2",
        prompt: "Para quem devemos olhar?",
        options: ["Para Jesus, autor e consumador da fé", "Para os reis do Egito", "Para Esaú como exemplo final", "Para os anjos como mediadores"],
        answer: 0,
        note: "Jesus é o foco da perseverança cristã.",
      },
      {
        ref: "Hb 12.5-11",
        prompt: "Como Hebreus interpreta a disciplina de Deus?",
        options: ["Como cuidado de Pai", "Como rejeição definitiva", "Como castigo sem propósito", "Como fim da fé"],
        answer: 0,
        note: "A disciplina de Deus visa formar seus filhos.",
      },
      {
        ref: "Hb 12.14",
        prompt: "O que os cristãos devem buscar com todos?",
        options: ["Paz e santificação", "Vingança", "Riqueza", "Isolamento"],
        answer: 0,
        note: "A fé cristã deve aparecer em relacionamentos e santidade.",
      },
    ],
  },
  {
    chapter: 13,
    title: "Vida cristã na prática",
    questions: [
      {
        ref: "Hb 13.1",
        prompt: "Que amor deve continuar?",
        options: ["O amor fraternal", "O amor ao dinheiro", "O amor à disputa", "O amor à fama"],
        answer: 0,
        note: "Hebreus termina aplicando a fé à vida comunitária.",
      },
      {
        ref: "Hb 13.5",
        prompt: "Que atitude deve substituir o amor ao dinheiro?",
        options: ["Contentamento", "Avareza", "Medo", "Orgulho"],
        answer: 0,
        note: "O contentamento nasce da confiança na presença de Deus.",
      },
      {
        ref: "Hb 13.8",
        prompt: "Que declaração é feita sobre Jesus Cristo?",
        options: ["Ele é o mesmo ontem, hoje e para sempre", "Ele muda conforme as gerações", "Ele depende de sacrifícios diários", "Ele é menor que os anjos para sempre"],
        answer: 0,
        note: "A constância de Cristo fortalece a fé.",
      },
      {
        ref: "Hb 13.16",
        prompt: "Que práticas não devem ser esquecidas?",
        options: ["Fazer o bem e repartir com os outros", "Competir por honra", "Abandonar a comunhão", "Negar a graça"],
        answer: 0,
        note: "Louvor a Deus também aparece em bondade e generosidade.",
      },
    ],
  },
];

const passingScore = 3;
const questionCount = 4;
const storageKey = "hebreusQuizProgress";
const optionOrders = [
  [0, 1, 2, 3],
  [2, 0, 3, 1],
  [1, 3, 0, 2],
  [3, 2, 1, 0],
];

const state = {
  currentLevel: 1,
  currentQuestion: 0,
  selectedOption: null,
  displayedOptions: [],
  displayedAnswer: 0,
  answered: false,
  levelCorrect: 0,
  streak: 0,
  bestStreak: 0,
  unlocked: 1,
  completed: {},
};

const elements = {
  levelGrid: document.querySelector("#levelGrid"),
  currentLevelLabel: document.querySelector("#currentLevelLabel"),
  levelScoreLabel: document.querySelector("#levelScoreLabel"),
  streakLabel: document.querySelector("#streakLabel"),
  completedLabel: document.querySelector("#completedLabel"),
  chapterLabel: document.querySelector("#chapterLabel"),
  levelTitle: document.querySelector("#levelTitle"),
  levelBadge: document.querySelector("#levelBadge"),
  questionProgress: document.querySelector("#questionProgress"),
  questionReference: document.querySelector("#questionReference"),
  questionText: document.querySelector("#questionText"),
  optionsList: document.querySelector("#optionsList"),
  feedbackBox: document.querySelector("#feedbackBox"),
  submitAnswer: document.querySelector("#submitAnswer"),
  nextQuestion: document.querySelector("#nextQuestion"),
  restartLevel: document.querySelector("#restartLevel"),
  resetProgress: document.querySelector("#resetProgress"),
  summaryPanel: document.querySelector("#summaryPanel"),
  summaryText: document.querySelector("#summaryText"),
  continueButton: document.querySelector("#continueButton"),
};

function loadProgress() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    state.unlocked = Math.min(Math.max(parsed.unlocked || 1, 1), levels.length);
    state.completed = parsed.completed || {};
    state.streak = parsed.streak || 0;
    state.bestStreak = parsed.bestStreak || 0;
    state.currentLevel = Math.min(parsed.currentLevel || state.unlocked, state.unlocked);
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function saveProgress() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      unlocked: state.unlocked,
      completed: state.completed,
      streak: state.streak,
      bestStreak: state.bestStreak,
      currentLevel: state.currentLevel,
    }),
  );
}

function getLevel() {
  return levels[state.currentLevel - 1];
}

function getQuestion() {
  return getLevel().questions[state.currentQuestion];
}

function getDisplayedQuestion(question) {
  const order = optionOrders[(state.currentLevel + state.currentQuestion) % optionOrders.length];
  return {
    options: order.map((optionIndex) => question.options[optionIndex]),
    answer: order.indexOf(question.answer),
  };
}

function completedCount() {
  return Object.keys(state.completed).length;
}

function renderLevels() {
  elements.levelGrid.innerHTML = "";

  levels.forEach((level, index) => {
    const levelNumber = index + 1;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "level-button";
    button.disabled = levelNumber > state.unlocked;
    button.innerHTML = `
      <strong>${levelNumber}</strong>
      <span>Hb ${level.chapter}</span>
    `;

    if (levelNumber === state.currentLevel) button.classList.add("active");
    if (state.completed[levelNumber]) button.classList.add("completed");
    if (levelNumber > state.unlocked) button.classList.add("locked");

    button.addEventListener("click", () => {
      if (levelNumber > state.unlocked) return;
      startLevel(levelNumber);
    });

    elements.levelGrid.appendChild(button);
  });
}

function renderStats() {
  elements.currentLevelLabel.textContent = state.currentLevel;
  elements.levelScoreLabel.textContent = `${state.levelCorrect}/${questionCount}`;
  elements.streakLabel.textContent = state.streak;
  elements.completedLabel.textContent = `${completedCount()}/${levels.length}`;
}

function renderQuestion() {
  const level = getLevel();
  const question = getQuestion();
  const displayed = getDisplayedQuestion(question);
  const progress = ((state.currentQuestion + 1) / questionCount) * 100;
  state.displayedOptions = displayed.options;
  state.displayedAnswer = displayed.answer;

  elements.chapterLabel.textContent = `Hebreus ${level.chapter}`;
  elements.levelTitle.textContent = level.title;
  elements.levelBadge.textContent = `Nível ${state.currentLevel}`;
  elements.questionProgress.style.width = `${progress}%`;
  elements.questionReference.textContent = `(${question.ref})`;
  elements.questionText.textContent = question.prompt;
  elements.feedbackBox.hidden = true;
  elements.feedbackBox.classList.remove("negative");
  elements.submitAnswer.hidden = false;
  elements.submitAnswer.disabled = true;
  elements.nextQuestion.hidden = true;
  elements.selectedOption = null;

  elements.optionsList.innerHTML = "";
  state.displayedOptions.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span>${option}</span>
    `;
    button.addEventListener("click", () => selectOption(index));
    elements.optionsList.appendChild(button);
  });

  state.selectedOption = null;
  state.answered = false;
  renderLevels();
  renderStats();
}

function selectOption(index) {
  if (state.answered) return;
  state.selectedOption = index;
  elements.submitAnswer.disabled = false;

  [...elements.optionsList.children].forEach((button, buttonIndex) => {
    button.classList.toggle("selected", buttonIndex === index);
  });
}

function submitAnswer() {
  if (state.selectedOption === null || state.answered) return;

  const question = getQuestion();
  const isCorrect = state.selectedOption === state.displayedAnswer;
  state.answered = true;

  [...elements.optionsList.children].forEach((button, index) => {
    button.disabled = true;
    button.classList.remove("selected");
    if (index === state.displayedAnswer) button.classList.add("correct");
    if (index === state.selectedOption && !isCorrect) button.classList.add("wrong");
  });

  if (isCorrect) {
    state.levelCorrect += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    elements.feedbackBox.classList.remove("negative");
    elements.feedbackBox.innerHTML = `<strong>Resposta certa.</strong> ${question.note}`;
  } else {
    state.streak = 0;
    elements.feedbackBox.classList.add("negative");
    elements.feedbackBox.innerHTML = `<strong>Revise com calma.</strong> A resposta correta é <strong>${String.fromCharCode(
      65 + state.displayedAnswer,
    )}</strong>. ${question.note}`;
  }

  elements.feedbackBox.hidden = false;
  elements.submitAnswer.hidden = true;
  elements.nextQuestion.hidden = false;
  renderStats();
  saveProgress();
}

function nextQuestion() {
  if (state.currentQuestion < questionCount - 1) {
    state.currentQuestion += 1;
    renderQuestion();
    return;
  }

  finishLevel();
}

function finishLevel() {
  const passed = state.levelCorrect >= passingScore;
  const isLastLevel = state.currentLevel === levels.length;

  if (passed) {
    state.completed[state.currentLevel] = state.levelCorrect;
    if (!isLastLevel) {
      state.unlocked = Math.max(state.unlocked, state.currentLevel + 1);
    }
  }

  saveProgress();
  renderLevels();
  renderStats();

  elements.summaryPanel.hidden = false;
  if (passed && isLastLevel) {
    elements.summaryText.textContent = `Você concluiu toda a trilha de Hebreus. Melhor sequência: ${state.bestStreak} acertos.`;
    elements.continueButton.textContent = "✓ Revisar do início";
  } else if (passed) {
    elements.summaryText.textContent = `Nível ${state.currentLevel} concluído com ${state.levelCorrect}/${questionCount} acertos. O próximo nível foi desbloqueado.`;
    elements.continueButton.textContent = "→ Ir para o próximo nível";
  } else {
    elements.summaryText.textContent = `Você fez ${state.levelCorrect}/${questionCount}. Para avançar, precisa acertar pelo menos ${passingScore}. Revise e tente de novo.`;
    elements.continueButton.textContent = "↻ Refazer nível";
  }

  elements.summaryPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function continueAfterSummary() {
  const passed = state.levelCorrect >= passingScore;
  const isLastLevel = state.currentLevel === levels.length;
  elements.summaryPanel.hidden = true;

  if (passed && !isLastLevel) {
    startLevel(state.currentLevel + 1);
  } else {
    startLevel(isLastLevel && passed ? 1 : state.currentLevel);
  }
}

function startLevel(levelNumber) {
  state.currentLevel = levelNumber;
  state.currentQuestion = 0;
  state.levelCorrect = 0;
  state.selectedOption = null;
  state.answered = false;
  elements.summaryPanel.hidden = true;
  saveProgress();
  renderQuestion();
}

function resetProgress() {
  const confirmed = window.confirm("Deseja zerar todo o progresso da trilha?");
  if (!confirmed) return;

  localStorage.removeItem(storageKey);
  state.currentLevel = 1;
  state.currentQuestion = 0;
  state.selectedOption = null;
  state.answered = false;
  state.levelCorrect = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.unlocked = 1;
  state.completed = {};
  startLevel(1);
}

elements.submitAnswer.addEventListener("click", submitAnswer);
elements.nextQuestion.addEventListener("click", nextQuestion);
elements.restartLevel.addEventListener("click", () => startLevel(state.currentLevel));
elements.resetProgress.addEventListener("click", resetProgress);
elements.continueButton.addEventListener("click", continueAfterSummary);

loadProgress();
startLevel(state.currentLevel);
