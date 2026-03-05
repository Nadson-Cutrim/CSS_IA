
# 🎨 CSS Generator com IA

Uma aplicação web que gera **código HTML + CSS automaticamente usando Inteligência Artificial**, a partir de descrições em linguagem natural.

O usuário apenas descreve o que deseja (ex: *"bola azul quicando"*) e a aplicação gera o **código completo da animação**, além de mostrar um **preview em tempo real**.

---

## 🚀 Demo

🌐 **Acesse o projeto online:**
[https://gerador-de-css.vercel.app/](https://gerador-de-css.vercel.app/)

💻 **Repositório no GitHub:**
[https://github.com/Nadson-Cutrim/CSS_IA](https://github.com/Nadson-Cutrim/CSS_IA)

---

## 📸 Preview

Exemplo:
<div align="center" style="display: flex, gap: 10px">
<img src="/public/assets/code.png" alt="Preview" width="300" height="300">
<img src="/public/assets/code-html.png" alt="Preview" width="300" height="300">
<img src="/public/assets/ccs-project.gif" alt="Preview" width="600" height="300">

</div>

---

## 🧠 Como funciona

1. O usuário escreve uma descrição da animação ou elemento CSS.
2. O frontend envia a requisição para uma **API serverless**.
3. O backend envia o prompt para o **modelo de IA**.
4. A IA retorna **HTML + CSS puro**.
5. O código é exibido e renderizado automaticamente no preview.

---

## 🛠️ Tecnologias utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**
* **Node.js**
* **Express**
* **Groq API (Llama 3.3)**
* **Vercel (Serverless Functions)**

---

## 📂 Estrutura do Projeto

```
CSS_IA
│
├── api
│   └── gerar.js
│
├── public
│   ├── assets
│   │   └── background
│   │       └── bg-hero.mp4
│   │
│   ├── img
│   │   └── bg.png
│   │
│   ├── index.html
│   ├── styles.css
│   └── scripts.js
│
├── package.json
└── README.md
```

---

## ⚙️ Instalação e uso local

Clone o repositório:

```bash
git clone https://github.com/Nadson-Cutrim/CSS_IA.git
```

Entre na pasta:

```bash
cd CSS_IA
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env`:

```
GROQ_API_KEY=SUA_CHAVE_DA_API
```

Execute o servidor:

```bash
node server.js
```

Acesse no navegador:

```
http://localhost:3000
```

---

## 🔐 Segurança da API

A chave da API **não fica exposta no frontend**.

Ela é utilizada apenas no backend através de variáveis de ambiente.

Exemplo:

```javascript
process.env.GROQ_API_KEY
```

---

## 🌍 Deploy

O projeto está preparado para **deploy na Vercel** utilizando **Serverless Functions**.

Para publicar:

1. Suba o projeto no GitHub
2. Conecte o repositório na **Vercel**
3. Configure a variável de ambiente:

```
GROQ_API_KEY
```

4. Deploy automático 🚀

---

## ✨ Funcionalidades

✔ Geração automática de HTML + CSS
✔ Preview em tempo real
✔ Interface responsiva
✔ Integração com IA
✔ Deploy serverless

---

## 👨‍💻 Autor

Desenvolvido por **Nadson Cutrim**

🔗 LinkedIn
[https://www.linkedin.com/in/nadson-cutrim/](https://www.linkedin.com/in/nadson-cutrim/)

🐙 GitHub
[https://github.com/Nadson-Cutrim](https://github.com/Nadson-Cutrim)

---

## 📜 Licença

Este projeto está sob a licença **MIT**.

---