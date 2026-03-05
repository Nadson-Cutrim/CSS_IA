let botao = document.querySelector(".botao-gerar");

async function gerarCodigo() {
  try {
    let textoUsuario = document.querySelector(".caixa-texto").value;
    let blocoCodigo = document.querySelector(".bloco-codigo");
    let resultadoCodigo = document.querySelector(".resultado-codigo");

    let resposta = await fetch("/api/gerar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: textoUsuario,
      }),
    });
    if (!resposta.ok) {
      throw new Error("Erro na requisição: " + resposta.status);
    }

    let dados = await resposta.json();
    if (!dados.choices) {
      console.error("🚩Erro da API:", dados);
      blocoCodigo.textContent = "Erro ao gerar código.";
      return;
    }

    let resultado = dados.choices[0].message.content;
    resultado = resultado
      .replace(/```html/g, "")
      .replace(/```/g, "")
      .trim();

    blocoCodigo.textContent = resultado;
    resultadoCodigo.srcdoc = resultado;
  } catch (erro) {
    console.error("🚩Erro geral:", erro);
    document.querySelector(".bloco-codigo").textContent =
      "Erro inesperado. Verifique o console.";
  }
}

botao.addEventListener("click", gerarCodigo);

window.addEventListener("load", () => {
  const video = document.createElement("video");
  const midiaBackground = document.querySelector(".media-background");

  video.src = "/assets/background/bg-hero.mp4";
  video.autoplay = true;
  video.muted = true;
  video.playsInline = true;
  video.loop = true;
  video.transition = "0.1s infinite ease-in-out";
  video.style.opacity = 0;

  video.addEventListener("canplaythrough", () => {
    video.style.opacity = 1;
  });
  midiaBackground.appendChild(video);
});
