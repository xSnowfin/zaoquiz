window.addEventListener("DOMContentLoaded", () => {

  UI.init();   // ←絶対最初

  Game.init();

  UI.startBtn.addEventListener("click", () => {
    UI.showGameScreen();
    Game.loadStage(Game.state.currentStageIndex);
  });

  UI.showMessage("準備完了。スタートを押してください。");

});