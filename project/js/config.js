const GAME_CONFIG = {
  title: "蔵王ジャンプ台AR謎解きゲーム",

  // ステージ進行定義
  stages: [
    {
      id: "stage1",
      type: "quiz",
      title: "Stage 1",
      message: "ジャンプ台の謎を解け",
      question: "蔵王の有名な競技は？",
      answer: "ジャンプ"
    },

    {
      id: "ar1",
      type: "ar",
      title: "AR①",
      message: "ARスポットを探せ",
      arKey: "ar_point_1",
      hint: "ジャンプ台の下を探してみよう"
    },

    {
      id: "stage2",
      type: "quiz",
      title: "Stage 2",
      message: "次の謎に挑戦",
      question: "冬に有名な蔵王の自然現象は？",
      answer: "樹氷"
    },

    {
      id: "ar2",
      type: "ar",
      title: "AR②",
      message: "もう一つのARを探せ",
      arKey: "ar_point_2",
      hint: "観客席付近を探そう"
    },

    {
      id: "final",
      type: "quiz",
      title: "Final",
      message: "最後の謎",
      question: "蔵王の山の名前は？",
      answer: "蔵王山"
    },

    {
      id: "secret_ar",
      type: "ar",
      title: "Secret AR",
      message: "隠されたARを見つけろ",
      arKey: "secret_ar",
      hint: "受付近くに何かある"
    },

    {
      id: "mini_game",
      type: "minigame",
      title: "ミニゲーム",
      message: "ジャンプタイミングゲーム",
      gameId: "jump_timing"
    }
  ]
};