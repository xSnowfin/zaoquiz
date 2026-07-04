const Game = {
  state: {
    currentStageIndex: 0,
    currentStage: null,
    data: null
  },

  // 初期化
  init() {
    this.state.data = Storage.load();

    this.state.currentStageIndex =
      this.state.data.currentStageIndex || 0;

    this.loadStage(this.state.currentStageIndex);
  },

  // ステージ読み込み
  loadStage(index) {
    const stage = GAME_CONFIG.stages[index];

    if (!stage) {
      UI.showMessage("ゲームクリア！");
      UI.showFinalScreen?.();
      return;
    }

    this.state.currentStage = stage;
    this.state.currentStageIndex = index;

    Storage.setStage(index);

    UI.renderStage(stage);
  },

  // 次へ進む
  nextStage() {
    const nextIndex = this.state.currentStageIndex + 1;

    Storage.markCleared(this.state.currentStage.id);

    this.loadStage(nextIndex);
  },

  // 回答チェック（クイズ用）
  checkAnswer(input) {
    const stage = this.state.currentStage;

    if (!stage || stage.type !== "quiz") return false;

    const correct = input.trim() === stage.answer;

    if (correct) {
      UI.showMessage("正解！");
      this.nextStage();
    } else {
      UI.showMessage("違うみたい…もう一度！");
    }

    return correct;
  },

  // AR解放処理
  unlockAR(arKey) {
    Storage.setFlag(arKey, true);
    UI.showMessage("ARを発見した！");
  },

  // AR確認
  isARUnlocked(arKey) {
    return Storage.getFlag(arKey) === true;
  },

  // 現在ステージ取得
  getCurrentStage() {
    return this.state.currentStage;
  }
};