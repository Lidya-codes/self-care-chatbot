const chatBox = document.getElementById("chat-box");

window.onload = () => {
  appendMessage("Bot", "👋 Hi, I'm your Self-Care Bot. How are you feeling today?");
};

function handleMessage() {
  const input = document.getElementById("user-input");
  const userText = input.value.trim();
  if (!userText) return;

  appendMessage("You", userText);
  const response = getResponse(userText.toLowerCase());
  setTimeout(() => appendMessage("Bot", response), 500);
  input.value = "";
}

document.getElementById("user-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleMessage();
  }
});

function appendMessage(sender, text) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(msg) {
  if (msg.includes("sad") || msg.includes("down")) {
    return "💖 I'm here for you. Take 3 deep breaths and try a little walk. You’ve got this!";
  } else if (msg.includes("tired") || msg.includes("exhausted")) {
    return "😴 Rest is essential. Grab some water and take a 15-minute break — you've earned it!";
  } else if (msg.includes("anxious") || msg.includes("worried")) {
    return "🧘‍♀️ Let's do a grounding exercise. Name 5 things you can see right now. You're safe.";
  } else if (msg.includes("happy") || msg.includes("joyful") || msg.includes("excited")) {
    return "✨ I’m smiling with you! Keep soaking in the good vibes and spread your sunshine 🌞";
  } else if (msg.includes("emotional") || msg.includes("cry")) {
    return "💗 Emotions are valid. Let it out if you need to — and don't forget to be gentle with yourself.";
  } else if (msg.includes("stressed") || msg.includes("stress")) {
    return "😌 Deep breath in… and out. You're doing better than you think. You've got this.";
  } else if (msg.includes("angry") || msg.includes("mad")) {
    return "😤 It’s okay to feel anger. Take some space, drink water, and write down what you're feeling.";
  } else if (msg.includes("lonely") || msg.includes("alone")) {
    return "💌 You are not alone. Reach out to a friend or do something kind for yourself today.";
  } else if (msg.includes("love") || msg.includes("heart")) {
    return "💞 Love starts with you. Be proud of how far you've come. You are deeply worthy of care.";
  } else {
    return "🌷 I may be a bot, but I care! Try saying something like: 'I'm tired', 'I feel sad', or 'I'm feeling anxious' 💌";
  }
}
