const UI = {
  // 初期化
  init() {
    this.titleScreen = document.getElementById("title-screen");
    this.gameScreen = document.getElementById("game-screen");

    this.stageInfo = document.getElementById("stage-info");
    this.contentArea = document.getElementById("content-area");
    this.message = document.getElementById("message");

    this.inputArea = document.getElementById("input-area");
    this.answerInput = document.getElementById("answer-input");
    this.submitBtn = document.getElementById("submit-btn");

    this.startBtn = document.getElementById("start-btn");
  },

  // タイトル → ゲーム画面
  showGameScreen() {
  this.titleScreen.classList.remove("active");
  this.titleScreen.classList.add("hidden");

  this.gameScreen.classList.remove("hidden");
  this.gameScreen.classList.add("active");
  },
  // ステージ描画
  renderStage(stage) {
    this.clearMessage();
    this.stageInfo.innerText = stage.title;

    this.contentArea.innerHTML = "";

    if (stage.type === "quiz") {
      this.renderQuiz(stage);
    }

    if (stage.type === "ar") {
      this.renderAR(stage);
    }

    if (stage.type === "minigame") {
      this.renderMiniGame(stage);
    }
  },

  // クイズ表示
  renderQuiz(stage) {
    const q = document.createElement("div");
    q.className = "question";
    q.innerText = stage.question;

    this.contentArea.appendChild(q);

    this.inputArea.classList.remove("hidden");

    this.submitBtn.onclick = () => {
      const value = this.answerInput.value;
      Game.checkAnswer(value);
      this.answerInput.value = "";
    };
  },

  // AR表示
  renderAR(stage) {
    this.inputArea.classList.add("hidden");

    const box = document.createElement("div");
    box.className = "ar-box";

    const text = document.createElement("p");
    text.innerText = stage.message;

    const hint = document.createElement("p");
    hint.innerText = "ヒント：" + stage.hint;

    const btn = document.createElement("button");
    btn.innerText = "ARをスキャンした（仮）";

    btn.onclick = () => {
      Game.unlockAR(stage.arKey);
      Game.nextStage();
    };

    box.appendChild(text);
    box.appendChild(hint);
    box.appendChild(btn);

    this.contentArea.appendChild(box);
  },

  // ミニゲーム（仮表示）
  renderMiniGame(stage) {
    this.inputArea.classList.add("hidden");

    const box = document.createElement("div");
    box.className = "minigame-box";

    const text = document.createElement("p");
    text.innerText = stage.message;

    const btn = document.createElement("button");
    btn.innerText = "クリア（仮）";

    btn.onclick = () => {
      Game.nextStage();
    };

    box.appendChild(text);
    box.appendChild(btn);

    this.contentArea.appendChild(box);
  },

  // メッセージ表示
  showMessage(msg) {
    this.message.innerText = msg;
  },

  clearMessage() {
    this.message.innerText = "";
  }
};
