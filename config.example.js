// Copy this file to config.js and add your API keys.
// config.js is gitignored — never commit real keys.

window.__MINDMAP_CONFIG__ = {
  aiProfiles: [
    { apiKey: "", model: "llama-3.1-8b-instant" },   // Groq
    { apiKey: "", model: "deepseek-chat" },            // DeepSeek
    { apiKey: "", model: "claude-sonnet-4-20250514" }, // Anthropic
    { apiKey: "", model: "gpt-4o" }                    // OpenAI
  ],
  activeProfile: 0
};
