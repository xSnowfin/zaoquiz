const Quiz = {
  // 正誤判定
  check(stage, input) {
    if (!stage || stage.type !== "quiz") {
      return { correct: false, message: "このステージはクイズじゃない" };
    }

    const normalizedInput = input.trim();
    const normalizedAnswer = stage.answer.trim();

    const correct = normalizedInput === normalizedAnswer;

    if (correct) {
      return {
        correct: true,
        message: "正解！"
      };
    }

    return {
      correct: false,
      message: "違うみたい…もう一度！"
    };
  },

  // 文字ゆれ対策（将来用）
  normalize(text) {
    return text
      .trim()
      .replace(/\s+/g, "")
      .toLowerCase();
  }
};