const Storage = {
  KEY: "zao_ar_game_save_v2",

  // 初期データ
  defaultData: {
    currentStageIndex: 0,
    clearedStages: [],
    flags: {},
    updatedAt: null
  },

  // セーブ取得
  load() {
    const raw = localStorage.getItem(this.KEY);
    if (!raw) return { ...this.defaultData };

    try {
      return JSON.parse(raw);
    } catch (e) {
      console.error("Save data corrupted:", e);
      return { ...this.defaultData };
    }
  },

  // セーブ保存
  save(data) {
    data.updatedAt = Date.now();
    localStorage.setItem(this.KEY, JSON.stringify(data));
  },

  // リセット
  reset() {
    localStorage.removeItem(this.KEY);
  },

  // ステージ進行更新
  setStage(index) {
    const data = this.load();
    data.currentStageIndex = index;
    this.save(data);
  },

  // ステージクリア記録
  markCleared(stageId) {
    const data = this.load();

    if (!data.clearedStages.includes(stageId)) {
      data.clearedStages.push(stageId);
    }

    this.save(data);
  },

  // フラグ管理（AR・受付・隠し用）
  setFlag(key, value) {
    const data = this.load();
    data.flags[key] = value;
    this.save(data);
  },

  getFlag(key) {
    const data = this.load();
    return data.flags[key];
  }
};