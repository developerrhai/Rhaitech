document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting RHAI Technology! We will get back to you soon.");
  this.reset();
});

const toggleBtn = document.getElementById("chatbot-toggle");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("close-chat");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

toggleBtn.onclick = () => chatbot.style.display = "flex";
closeChat.onclick = () => chatbot.style.display = "none";

sendBtn.onclick = sendMessage;
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const msg = userInput.value.trim();
  if (!msg) return;

  const userDiv = document.createElement("div");
  userDiv.className = "user-msg";
  userDiv.innerText = msg;
  chatBody.appendChild(userDiv);

  userInput.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(() => {
    const botDiv = document.createElement("div");
    botDiv.className = "bot-msg";
    botDiv.innerText = "Thanks for your message. Our AI team will assist you shortly.";
    chatBody.appendChild(botDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 800);
}
