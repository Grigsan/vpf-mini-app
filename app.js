const STORAGE_KEY = "vpf-trainer-progress-v1";

const FUNCTIONS = [
  {
    id: "attention",
    title: "Внимание",
    description: "Фокус, устойчивость и переключение внимания.",
    tasks: [
      {
        id: "attention-choice",
        type: "choice",
        title: "Найди лишнее слово",
        prompt: "Что из списка меньше всего связано с остальными?",
        options: ["Сосна", "Ель", "Берёза", "Карандаш"],
        answer: "Карандаш",
        explanation: "Тренирует выделение главного и фильтрацию отвлечений."
      },
      {
        id: "attention-reaction",
        type: "reaction",
        title: "Реакция на сигнал",
        prompt: "Нажми «Старт», дождись сигнала и кликни как можно быстрее.",
        explanation: "Тренирует скорость реакции и готовность к переключению."
      }
    ]
  },
  {
    id: "memory",
    title: "Память",
    description: "Запоминание и воспроизведение информации.",
    tasks: [
      {
        id: "memory-words",
        type: "memory",
        title: "Запомни 5 слов",
        prompt: "Запомни слова и введи их через запятую.",
        words: ["яблоко", "река", "окно", "книга", "звезда"],
        explanation: "Тренирует кратковременную и рабочую память."
      },
      {
        id: "memory-input",
        type: "input",
        title: "Пара чисел",
        prompt: "Введи 2 последних числа из ряда: 3, 7, 2, 9, 4, 6, ?",
        answers: ["4, 6", "4 6", "4;6"],
        explanation: "Тренирует удержание последовательностей в памяти."
      }
    ]
  },
  {
    id: "speech",
    title: "Речь",
    description: "Подбор слов и вербализация.",
    tasks: [
      {
        id: "speech-category",
        type: "input",
        title: "Категории",
        prompt: "Назови 3 фрукта через запятую.",
        answers: ["яблоко, груша, банан"],
        explanation: "Тренирует словарный запас и категориальное мышление."
      },
      {
        id: "speech-choice",
        type: "choice",
        title: "Синоним",
        prompt: "Выбери синоним слова «быстрый».",
        options: ["Медленный", "Скорый", "Редкий", "Сонный"],
        answer: "Скорый",
        explanation: "Тренирует гибкость речи и подбор слов."
      }
    ]
  },
  {
    id: "thinking",
    title: "Мышление",
    description: "Логика, анализ и поиск решений.",
    tasks: [
      {
        id: "thinking-choice",
        type: "choice",
        title: "Логическая связь",
        prompt: "День относится к ночи так же, как тепло к ...",
        options: ["Зима", "Холод", "Лето", "Огонь"],
        answer: "Холод",
        explanation: "Тренирует логические связи."
      },
      {
        id: "thinking-input",
        type: "input",
        title: "Продолжи ряд",
        prompt: "Продолжи ряд: 2, 4, 8, 16, ...",
        answers: ["32", "32."],
        explanation: "Тренирует закономерности и аналитическое мышление."
      }
    ]
  },
  {
    id: "perception",
    title: "Восприятие",
    description: "Различение деталей и сенсорная точность.",
    tasks: [
      {
        id: "perception-choice",
        type: "choice",
        title: "Найди оттенок",
        prompt: "Какой цвет ближе к тёплому?",
        options: ["Сине-голубой", "Оранжевый", "Серый", "Фиолетовый"],
        answer: "Оранжевый",
        explanation: "Тренирует различение сенсорных признаков."
      },
      {
        id: "perception-input",
        type: "input",
        title: "Детали",
        prompt: "Сколько букв «о» в слове «самоконтроль»?",
        answers: ["3", "три", "3."],
        explanation: "Тренирует точность восприятия деталей."
      }
    ]
  },
  {
    id: "praxis",
    title: "Праксис",
    description: "Планирование действий и моторные навыки.",
    tasks: [
      {
        id: "praxis-sequence",
        type: "input",
        title: "Последовательность действий",
        prompt: "Назови 3 шага приготовления чая через запятую.",
        answers: ["кипяток, чай, налить"],
        explanation: "Тренирует планирование действий."
      },
      {
        id: "praxis-reaction",
        type: "reaction",
        title: "Кнопка-стоп",
        prompt: "Нажми «Старт», затем «Стоп» как можно быстрее после сигнала.",
        explanation: "Тренирует скорость моторной реакции."
      }
    ]
  },
  {
    id: "gnosis",
    title: "Гнозис",
    description: "Узнавание образов и смыслов.",
    tasks: [
      {
        id: "gnosis-choice",
        type: "choice",
        title: "Узнай предмет",
        prompt: "Что можно использовать для письма?",
        options: ["Ластик", "Карандаш", "Молоток", "Ключ"],
        answer: "Карандаш",
        explanation: "Тренирует узнавание и категоризацию."
      },
      {
        id: "gnosis-memory",
        type: "memory",
        title: "Образы",
        prompt: "Запомни 4 предмета и введи их через запятую.",
        words: ["часы", "дом", "лист", "мяч"],
        explanation: "Тренирует зрительное узнавание."
      }
    ]
  },
  {
    id: "executive",
    title: "Исполнительные функции / Самоконтроль",
    description: "Планирование, контроль и переключение.",
    tasks: [
      {
        id: "executive-choice",
        type: "choice",
        title: "Приоритет",
        prompt: "Что лучше сделать сначала при большом списке дел?",
        options: [
          "Проверить соцсети",
          "Определить самое важное",
          "Сразу всё одновременно",
          "Отложить на потом"
        ],
        answer: "Определить самое важное",
        explanation: "Тренирует приоритизацию и самоконтроль."
      },
      {
        id: "executive-input",
        type: "input",
        title: "Пауза",
        prompt: "Заполни фразу: «Сначала думаю, потом ...»",
        answers: ["действую", "делаю"],
        explanation: "Тренирует контроль импульсов."
      },
      {
        id: "executive-reaction",
        type: "reaction",
        title: "Старт-стоп",
        prompt: "Нажми «Старт» и реагируй на сигнал, не торопясь.",
        explanation: "Тренирует выдержку и контроль скорости."
      }
    ]
  }
];

const app = document.querySelector("#app");
const nav = document.querySelector("#nav");
const resetButton = document.querySelector("#reset-progress");

const state = {
  activeTab: "home",
  timers: {}
};

const progress = loadProgress();

renderNav();
renderApp();
bindReset();

function renderNav() {
  const tabs = [
    { id: "home", title: "Главная" },
    ...FUNCTIONS.map((item) => ({ id: item.id, title: item.title }))
  ];

  nav.innerHTML = "";
  tabs.forEach((tab) => {
    const button = document.createElement("button");
    button.textContent = tab.title;
    button.className = tab.id === state.activeTab ? "active" : "";
    button.addEventListener("click", () => {
      state.activeTab = tab.id;
      renderNav();
      renderApp();
    });
    nav.appendChild(button);
  });
}

function renderApp() {
  app.innerHTML = "";
  if (state.activeTab === "home") {
    renderHome();
    return;
  }

  const section = FUNCTIONS.find((item) => item.id === state.activeTab);
  if (!section) {
    return;
  }

  const panel = document.createElement("section");
  panel.className = "panel";
  panel.innerHTML = `
    <h2>${section.title}</h2>
    <p class="meta">${section.description}</p>
  `;

  section.tasks.forEach((task) => {
    panel.appendChild(renderTask(section, task));
  });

  panel.appendChild(renderFunctionProgress(section.id));
  app.appendChild(panel);
}

function renderHome() {
  const overview = document.createElement("section");
  overview.className = "panel";
  overview.innerHTML = `
    <h2>Функции и прогресс</h2>
    <p class="meta">Это не диагностика и не лечение, а лёгкая тренировка-игра.</p>
  `;

  const grid = document.createElement("div");
  grid.className = "grid";
  FUNCTIONS.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    const stats = getFunctionStats(item.id);
    card.innerHTML = `
      <span class="tag">${stats.accuracy}% точности</span>
      <h3>${item.title}</h3>
      <p class="meta">${item.description}</p>
      <p class="meta">Попыток: ${stats.attempts}, Верных: ${stats.correct}</p>
      <button class="btn btn-outline" data-open="${item.id}">Перейти</button>
    `;
    grid.appendChild(card);
  });
  overview.appendChild(grid);
  overview.appendChild(renderOverallProgress());
  app.appendChild(overview);

  overview.querySelectorAll("button[data-open]").forEach((button) => {
    button.addEventListener("click", (event) => {
      state.activeTab = event.currentTarget.dataset.open;
      renderNav();
      renderApp();
    });
  });
}

function renderTask(section, task) {
  const container = document.createElement("div");
  container.className = "task";
  const taskProgress = getTaskProgress(section.id, task.id);

  container.innerHTML = `
    <h4>${task.title}</h4>
    <p class="meta">${task.prompt}</p>
    <div class="task-controls" data-task="${task.id}"></div>
    <div class="feedback" aria-live="polite">
      ${renderTaskFeedback(taskProgress, task.explanation)}
    </div>
  `;

  const controls = container.querySelector(".task-controls");
  if (task.type === "choice") {
    task.options.forEach((option) => {
      const button = document.createElement("button");
      button.className = "btn btn-outline";
      button.textContent = option;
      button.addEventListener("click", () => {
        if (button.disabled) {
          return;
        }
        controls.querySelectorAll("button").forEach((control) => {
          control.disabled = true;
        });
        const isCorrect = option === task.answer;
        updateFeedback(container, isCorrect, task.explanation);
        setTimeout(() => updateProgress(section.id, task.id, isCorrect), 200);
      });
      controls.appendChild(button);
    });
  }

  if (task.type === "input") {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Ваш ответ";

    const button = document.createElement("button");
    button.className = "btn";
    button.textContent = "Проверить";
    button.addEventListener("click", () => {
      if (button.disabled) {
        return;
      }
      input.disabled = true;
      button.disabled = true;
      const normalized = normalizeAnswer(input.value);
      const isCorrect = task.answers.some(
        (answer) => normalizeAnswer(answer) === normalized
      );
      updateFeedback(container, isCorrect, task.explanation);
      setTimeout(() => updateProgress(section.id, task.id, isCorrect), 200);
    });
    controls.appendChild(input);
    controls.appendChild(button);
  }

  if (task.type === "memory") {
    const showButton = document.createElement("button");
    showButton.className = "btn btn-outline";
    showButton.textContent = "Показать слова";

    const wordsField = document.createElement("span");
    wordsField.className = "pill";
    wordsField.textContent = "Слова скрыты";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Введите слова";

    const checkButton = document.createElement("button");
    checkButton.className = "btn";
    checkButton.textContent = "Проверить";

    let wordsVisible = false;
    showButton.addEventListener("click", () => {
      if (wordsVisible) {
        return;
      }
      wordsVisible = true;
      wordsField.textContent = task.words.join(", ");
      setTimeout(() => {
        wordsVisible = false;
        wordsField.textContent = "Слова скрыты";
      }, 5000);
    });

    checkButton.addEventListener("click", () => {
      const userWords = normalizeAnswer(input.value)
        .split(",")
        .map((word) => word.trim())
        .filter(Boolean);
      const normalizedWords = task.words.map((word) => normalizeAnswer(word));
      const correctCount = userWords.filter((word) =>
        normalizedWords.includes(word)
      ).length;
      const isCorrect = correctCount >= Math.ceil(task.words.length * 0.6);
      updateProgress(section.id, task.id, isCorrect);
      updateFeedback(
        container,
        isCorrect,
        `${task.explanation} Совпадений: ${correctCount}/${task.words.length}.`
      );
    });

    controls.appendChild(showButton);
    controls.appendChild(wordsField);
    controls.appendChild(input);
    controls.appendChild(checkButton);
  }

  if (task.type === "reaction") {
    const startButton = document.createElement("button");
    startButton.className = "btn";
    startButton.textContent = "Старт";

    const status = document.createElement("span");
    status.className = "pill";
    status.textContent = "Ожидание";

    const stopButton = document.createElement("button");
    stopButton.className = "btn btn-outline";
    stopButton.textContent = "Стоп";
    stopButton.disabled = true;

    let ready = false;
    let startTime = 0;
    let timeoutId = null;

    startButton.addEventListener("click", () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      ready = false;
      status.textContent = "Ждите сигнал...";
      stopButton.disabled = false;
      startTime = 0;
      timeoutId = setTimeout(() => {
        ready = true;
        startTime = Date.now();
        status.textContent = "Жми!";
      }, 800 + Math.random() * 1200);
    });

    stopButton.addEventListener("click", () => {
      if (!startTime) {
        status.textContent = "Рано! Попробуйте снова.";
        updateProgress(section.id, task.id, false);
        updateFeedback(container, false, task.explanation);
        return;
      }
      const reactionTime = Date.now() - startTime;
      const isCorrect = reactionTime <= 600;
      updateProgress(section.id, task.id, isCorrect, reactionTime);
      updateFeedback(
        container,
        isCorrect,
        `${task.explanation} Время реакции: ${reactionTime} мс.`
      );
      stopButton.disabled = true;
      status.textContent = "Готово";
    });

    controls.appendChild(startButton);
    controls.appendChild(status);
    controls.appendChild(stopButton);
  }

  return container;
}

function renderTaskFeedback(taskProgress, explanation) {
  const accuracy = taskProgress.attempts
    ? Math.round((taskProgress.correct / taskProgress.attempts) * 100)
    : 0;
  const bestTime = taskProgress.bestTimeMs
    ? `Лучшее время: ${taskProgress.bestTimeMs} мс.`
    : "Время реакции ещё не записано.";
  return `
    <strong>Результат:</strong> ${taskProgress.correct}/${taskProgress.attempts} верно (${accuracy}%).
    <br />
    ${bestTime}
    <br />
    <em>${explanation}</em>
  `;
}

function renderFunctionProgress(functionId) {
  const stats = getFunctionStats(functionId);
  const panel = document.createElement("div");
  panel.className = "progress";
  panel.innerHTML = `
    <div class="progress-item">
      <strong>Итог функции</strong>
      <p>Попыток: ${stats.attempts}</p>
      <p>Верных: ${stats.correct}</p>
      <p>Точность: ${stats.accuracy}%</p>
    </div>
    <div class="progress-item">
      <strong>Общая тренировка</strong>
      <p>${getOverallStats().summary}</p>
    </div>
  `;
  return panel;
}

function renderOverallProgress() {
  const stats = getOverallStats();
  const container = document.createElement("div");
  container.className = "progress";
  container.innerHTML = `
    <div class="progress-item">
      <strong>Общий прогресс</strong>
      <p>Попыток: ${stats.attempts}</p>
      <p>Верных: ${stats.correct}</p>
      <p>Средняя точность: ${stats.accuracy}%</p>
    </div>
    <div class="progress-item">
      <strong>Пояснение</strong>
      <p>${stats.summary}</p>
    </div>
  `;
  return container;
}

function updateFeedback(container, isCorrect, explanation) {
  const feedback = container.querySelector(".feedback");
  feedback.innerHTML = `
    <strong class="${isCorrect ? "" : "warning"}">${
    isCorrect ? "Верно!" : "Пока нет, попробуйте ещё."
  }</strong>
    <br />
    <em>${explanation}</em>
  `;
  renderNav();
}

function updateProgress(functionId, taskId, isCorrect, timeMs = null) {
  const functionProgress = progress.functions[functionId];
  if (!functionProgress) {
    return;
  }
  const taskProgress = functionProgress.tasks[taskId];
  taskProgress.attempts += 1;
  if (isCorrect) {
    taskProgress.correct += 1;
  }
  if (typeof timeMs === "number") {
    taskProgress.lastTimeMs = timeMs;
    if (!taskProgress.bestTimeMs || timeMs < taskProgress.bestTimeMs) {
      taskProgress.bestTimeMs = timeMs;
    }
  }
  saveProgress(progress);
  renderApp();
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return initProgress();
  }
  try {
    const parsed = JSON.parse(raw);
    return mergeProgress(parsed);
  } catch (error) {
    return initProgress();
  }
}

function initProgress() {
  const data = {
    functions: {}
  };
  FUNCTIONS.forEach((section) => {
    data.functions[section.id] = {
      tasks: section.tasks.reduce((acc, task) => {
        acc[task.id] = {
          attempts: 0,
          correct: 0,
          bestTimeMs: null,
          lastTimeMs: null
        };
        return acc;
      }, {})
    };
  });
  return data;
}

function mergeProgress(saved) {
  const base = initProgress();
  if (!saved || !saved.functions) {
    return base;
  }
  Object.keys(base.functions).forEach((functionId) => {
    const savedFunction = saved.functions[functionId];
    if (!savedFunction) {
      return;
    }
    Object.keys(base.functions[functionId].tasks).forEach((taskId) => {
      const savedTask = savedFunction.tasks?.[taskId];
      if (!savedTask) {
        return;
      }
      base.functions[functionId].tasks[taskId] = {
        ...base.functions[functionId].tasks[taskId],
        ...savedTask
      };
    });
  });
  return base;
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getTaskProgress(functionId, taskId) {
  return progress.functions[functionId]?.tasks[taskId] ?? {
    attempts: 0,
    correct: 0,
    bestTimeMs: null,
    lastTimeMs: null
  };
}

function getFunctionStats(functionId) {
  const tasks = progress.functions[functionId]?.tasks ?? {};
  let attempts = 0;
  let correct = 0;
  Object.values(tasks).forEach((task) => {
    attempts += task.attempts;
    correct += task.correct;
  });
  const accuracy = attempts ? Math.round((correct / attempts) * 100) : 0;
  return { attempts, correct, accuracy };
}

function getOverallStats() {
  let attempts = 0;
  let correct = 0;
  FUNCTIONS.forEach((section) => {
    const stats = getFunctionStats(section.id);
    attempts += stats.attempts;
    correct += stats.correct;
  });
  const accuracy = attempts ? Math.round((correct / attempts) * 100) : 0;
  const summary = attempts
    ? "Продолжайте тренироваться понемногу каждый день."
    : "Сделайте первое упражнение, чтобы увидеть прогресс.";
  return { attempts, correct, accuracy, summary };
}

function bindReset() {
  resetButton.addEventListener("click", () => {
    const confirmed = window.confirm(
      "Сбросить результаты? Это удалит локальный прогресс."
    );
    if (!confirmed) {
      return;
    }
    const fresh = initProgress();
    Object.assign(progress, fresh);
    saveProgress(progress);
    renderNav();
    renderApp();
  });
}

function runSelfTests() {
  const results = [];
  const assert = (name, condition) => {
    results.push({ name, passed: Boolean(condition) });
  };

  assert("Нормализация ответа", normalizeAnswer("  ТеСт ") === "тест");
  assert("Инициализация прогресса", Boolean(initProgress().functions.attention));
  assert("Статистика точности", getFunctionStats("attention").accuracy === 0);

  const failed = results.filter((item) => !item.passed);
  if (failed.length) {
    console.warn("Тесты не пройдены:", failed);
  } else {
    console.info("Тесты пройдены:", results);
  }
}

if (window.location.hash.includes("test")) {
  runSelfTests();
}
