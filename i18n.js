
const translations = {
  "zh-tw": {
    title: "🌍 社群全能翻譯助手（國際版）",
    inputLabel: "🔑 請輸入你的 OpenAI API Key：",
    saveKey: "儲存金鑰",
    translateBtn: "送出",
    langButtons: ["繁中", "美式英語", "日文", "韓文"],
    inputPlaceholder: "請輸入要翻譯的內容...",
    successCopy: "✅ 翻譯內容已自動複製到剪貼簿！",
    errorCopy: "⚠️ 複製失敗，請手動複製翻譯內容。",
    apiKeyWarning: "請先輸入並儲存你的 OpenAI API Key！",
    gptResponse: "🗨️ GPT 回應：\n"
  },
  "en": {
    title: "🌍 Universal Translator (International Edition)",
    inputLabel: "🔑 Enter your OpenAI API Key:",
    saveKey: "Save Key",
    translateBtn: "Translate",
    langButtons: ["Chinese", "English", "Japanese", "Korean"],
    inputPlaceholder: "Enter the text you want to translate...",
    successCopy: "✅ Translated content copied to clipboard!",
    errorCopy: "⚠️ Failed to copy. Please do it manually.",
    apiKeyWarning: "Please input and save your OpenAI API key first!",
    gptResponse: "🗨️ GPT says:\n"
  },
  "ja": {
    title: "🌍 ユニバーサル翻訳アシスタント（国際版）",
    inputLabel: "🔑 OpenAI APIキーを入力してください：",
    saveKey: "キーを保存",
    translateBtn: "翻訳",
    langButtons: ["繁体字", "英語", "日本語", "韓国語"],
    inputPlaceholder: "翻訳したいテキストを入力してください...",
    successCopy: "✅ 翻訳結果をクリップボードにコピーしました！",
    errorCopy: "⚠️ コピーに失敗しました。手動でコピーしてください。",
    apiKeyWarning: "まずAPIキーを入力して保存してください！",
    gptResponse: "🗨️ GPTの返答：\n"
  },
  "ko": {
    title: "🌍 유니버설 번역 도우미 (국제판)",
    inputLabel: "🔑 OpenAI API 키를 입력하세요:",
    saveKey: "키 저장",
    translateBtn: "번역",
    langButtons: ["중국어", "영어", "일본어", "한국어"],
    inputPlaceholder: "번역할 텍스트를 입력하세요...",
    successCopy: "✅ 번역된 내용을 클립보드에 복사했습니다!",
    errorCopy: "⚠️ 복사 실패. 수동으로 복사해주세요.",
    apiKeyWarning: "먼저 API 키를 입력하고 저장해주세요!",
    gptResponse: "🗨️ GPT 응답:\n"
  }
};

function detectLanguage() {
  const lang = navigator.language.toLowerCase();
  if (lang.includes("zh")) return "zh-tw";
  if (lang.includes("en")) return "en";
  if (lang.includes("ja")) return "ja";
  if (lang.includes("ko")) return "ko";
  return "zh-tw";
}

const currentLang = detectLanguage();
const t = translations[currentLang];
