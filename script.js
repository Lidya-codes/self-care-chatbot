const chatBox = document.getElementById("chat-box");

window.onload = () => {
  appendMessage("Bot", "👋 Hey, I'm your Self-Care Bot. How's your day going?");
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
  if (!msg) return;

  if (msg.includes("sad") || msg.includes("down") || msg.includes("depressed")) {
    return "💗 That sounds really tough. I’m here to listen — what’s been on your mind lately?";
  } else if (msg.includes("tired") || msg.includes("exhausted") || msg.includes("drained")) {
    return "😴 Sounds like you’ve been pushing yourself. A little rest can go a long way. Be kind to your body today.";
  } else if (msg.includes("anxious") || msg.includes("worried") || msg.includes("panic")) {
    return "🫶 Let’s take a breath together. Try grounding yourself: name 3 things you see, 2 things you hear, and 1 thing you feel.";
  } else if (msg.includes("happy") || msg.includes("joyful") || msg.includes("excited") || msg.includes("great")) {
    return "😊 That’s lovely to hear. What’s making today feel extra good for you?";
  } else if (msg.includes("emotional") || msg.includes("cry") || msg.includes("overwhelmed")) {
    return "💧It’s okay to feel everything all at once. Let yourself feel, and know you're safe to do that here.";
  } else if (msg.includes("stressed") || msg.includes("stress") || msg.includes("pressure")) {
    return "🧠 Stress can build up fast. Can you take a 5-minute pause and breathe with me?";
  } else if (msg.includes("angry") || msg.includes("mad") || msg.includes("furious")) {
    return "😤 Anger is valid too. Sometimes writing it out or going for a walk helps clear the fog.";
  } else if (msg.includes("lonely") || msg.includes("alone")) {
    return "💌 You’re not alone — I’m right here. Want to talk about what’s making you feel that way?";
  } else if (msg.includes("love") || msg.includes("heart")) {
    return "💕 Love is powerful. Whether it’s from others or yourself, it’s always worth celebrating. What’s on your heart?";
  } else if (msg.includes("meh") || msg.includes("okay") || msg.includes("fine")) {
    return "🫂 Some days are just ‘meh’ — that’s okay too. Want to talk about it or leave it there for now?";
  } else if (msg.includes("good") || msg.includes("nice") || msg.includes("cool")) {
    return "😊 That’s great to hear. Hope the good vibe keeps rolling. Anything in particular making your day better?";
  } else if (msg.includes("grades") || msg.includes("marks") || msg.includes("test")) {
    return "📚 Ooo congrats on the grades! You put in the work and it’s showing. I’m proud of you.";
  } else if (msg.includes("gym") || msg.includes("exercise") || msg.includes("workout")) {
    return "💪 Movement is powerful. I’m glad you made time for your body today — it matters.";
  } else if (msg.includes("friend") || msg.includes("hang out") || msg.includes("people")) {
    return "👯 Spending time with people who lift you up is so good for the soul. Hope it left you feeling lighter.";
  } else if (msg.includes("food") || msg.includes("ate") || msg.includes("snack")) {
    return "🍽️ Nourishment is self-care too! What did you eat?";
  } else if (msg.includes("fun") || msg.includes("laugh") || msg.includes("smile")) {
    return "😄 Love that. Sometimes a good laugh is the best medicine. What made you smile today?";
  } else if (msg.includes("bored") || msg.includes("nothing to do")) {
    return "😶 Boredom can be weirdly heavy. Want to brainstorm something calming or creative to do?";
  } else {
    return "🤔 I’m here to chat about whatever’s on your mind. Try something like: ‘I feel stuck’, ‘I’m okay’, or even just ‘meh’.";
  }
}

