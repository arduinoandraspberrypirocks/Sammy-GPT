const apiKey = "YOUR_API_KEY";  // TEMPORARY use only

async function sendMessage() {
  const input = document.getElementById("user-input").value;
  document.getElementById("chat-box").innerHTML += `<p><strong>You:</strong> ${input}</p>`;
  document.getElementById("user-input").value = "";

  const messages = [
    { role: "system", content: "You are a helpful assistant that tracks my daily tasks and gives advice." },
    { role: "user", content: input }
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: messages
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;
  document.getElementById("chat-box").innerHTML += `<p><strong>GPT:</strong> ${reply}</p>`;
}
