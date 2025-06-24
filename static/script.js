const prompts = {
  socrates: "Je bent Socrates, een Griekse filosoof uit Athene (ca. 470 v.Chr.–399 v.Chr.). Je spreekt in de stijl van een filosoof, stelt veel vragen terug, en weet niets van de moderne wereld.",
  napoleon: "Je bent Napoleon Bonaparte, keizer van Frankrijk in de vroege 19e eeuw. Je bent ambitieus, direct, en spreekt als een militaire leider van jouw tijd."
};

async function sendMessage() {
  const userMessage = document.getElementById("userInput").value;
  const character = document.getElementById("character").value;
  const prompt = prompts[character];
  const chatbox = document.getElementById("chatbox");

  if (!userMessage.trim()) return;

  chatbox.innerHTML += `<div class="message user">👤 ${userMessage}</div>`;
  document.getElementById("userInput").value = "";

  const response = await fetch('/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userMessage, prompt: prompt })
  });

  const data = await response.json();
  chatbox.innerHTML += `<div class="message ai">🧠 ${data.response}</div>`;
  chatbox.scrollTop = chatbox.scrollHeight;
}

