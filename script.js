const chatBox = document.getElementById("chat-box");

function handleMessage() {
  const input = document.getElementById("user-input");
  const userText = input.value.trim();
  if (!userText) return;

  appendMessage("You", userText);
  const response = getResponse(userText.toLowerCase());
  setTimeout(() => appendMessage("Bot", response), 500);
  input.value = "";
}

function appendMessage(sender, text) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(msg) {
  if (msg.includes("sad") || msg.includes("down")) {
    return "💖 I'm here for you. Take 3 deep breaths and try a little walk. You’ve got this!";
  } else if (msg.includes("tired")) {
    return "😴 Sounds like you need some rest. Hydrate and take a 15-min break. Soft vibes only!";
  } else if (msg.includes("anxious")) {
    return "🧘‍♀️ Let’s ground ourselves. Name 5 things you see. You are safe and doing your best.";
  } else if (msg.includes("happy")) {
    return "✨ Love that for you! Celebrate the small wins and share your joy 💃";
  } else if(msg.includes("emotional")){
    return "Sometimes we may feel overwhelmed with life and troubles we face. You got this queen✨"
  }
  else {
    return "🌷 I may be a bot, but I care! Try saying: 'I feel anxious' or 'I'm tired' 💌";
  }
}
