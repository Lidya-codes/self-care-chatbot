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
  if (msg.includes("good") || msg.includes("great") || msg.includes("fine")) {
    return "😊 That’s great to hear. Hope the good vibe keeps rolling. Anything in particular making your day better?";
  } else if (msg.includes("bad") || msg.includes("not good") || msg.includes("awful")) {
    return "😞 Sorry to hear that. Want to talk about it? Sometimes just saying it out loud can make it lighter.";
  } else if (msg.includes("sad") || msg.includes("down")) {
    return "💬 Feeling low is okay — it happens to all of us. Want to name what’s been bringing you down?";
  } else if (msg.includes("tired") || msg.includes("exhausted") || msg.includes("drained")) {
    return "😴 Sounds like you’re running on empty. A break, even a small one, might help more than you think.";
  } else if (msg.includes("anxious") || msg.includes("worried") || msg.includes("overthinking")) {
    return "😟 Anxiety can really take over sometimes. Try this: name one thing that’s within your control right now.";
  } else if (msg.includes("happy") || msg.includes("excited") || msg.includes("joyful")) {
    return "🙌 Love that energy. What’s been going well today?";
  } else if (msg.includes("emotional") || msg.includes("cry")) {
    return "😔 Emotions are signals, not flaws. Let yourself feel them — no need to rush through or explain.";
  } else if (msg.includes("stressed") || msg.includes("pressure")) {
    return "📌 Stress can be heavy. Try listing just one thing you *can* do right now, and forget the rest for a bit.";
  } else if (msg.includes("angry") || msg.includes("mad") || msg.includes("frustrated")) {
    return "😤 Frustration's real. Want to vent or just need a distraction?";
  } else if (msg.includes("lonely") || msg.includes("alone")) {
    return "💬 Feeling isolated sucks. Even reaching out here counts. You’re not invisible — I see you.";
  } else if (msg.includes("love") || msg.includes("heart")) {
    return "❤️ Love is a lot. Whether you’re feeling it or missing it, it’s okay to sit with it for a while.";
  } else if (msg.includes("confused") || msg.includes("lost")) {
    return "🧭 Feeling stuck or unsure is part of figuring stuff out. Want to break it down together?";
  } else if (msg.includes("burnt out") || msg.includes("burned out") || msg.includes("overwhelmed")) {
    return "🔥 Burnout creeps in quietly. Can you drop just one thing today — even mentally?";
  } else if (msg.includes("meh") || msg.includes("okay") || msg.includes("neutral")) {
    return "😐 One of those ‘just okay’ days, huh? No pressure to be super productive. Existing is enough today.";
  } else {
    return "🤔 I’m here to chat about whatever’s on your mind. Try something like: ‘I feel stuck’, ‘I’m okay’, or even just ‘meh’.";
  }
}
