const express = require("express");
const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("assets"));

app.post("/gerar", async (req, res) => {
  try {
    console.log("Prompt recebido:", req.body.prompt);

    const resposta = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content:
                "Você é um gerador de código HTML e CSS. Responda SOMENTE com código puro. NUNCA use crases, markdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML. Siga EXATAMENTE o que o usuário pedir. Se pedir algo quicando, use translateY no @keyframes. Se pedir algo girando, use rotate.",
            },
            {
              role: "user",
              content: req.body.prompt,
            },
          ],
        }),
      },
    );

    const dados = await resposta.json();
    console.log("Resposta da API:", dados); 

    res.json(dados);
  } catch (erro) {
    console.error("🔥 ERRO REAL:", erro);
    res.status(500).json({ erro: erro.message });
  }
});
const port = 3030;
app.listen(port, () => {
  console.log(`🚀🔥Server rodando na porta http://localhost:${port} !`);
});
