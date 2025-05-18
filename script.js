const apiKey = 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;  // TEMPORARY use only

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
