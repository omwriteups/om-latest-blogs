
const container = document.getElementById("container");

function addPost(){
  const url = document.getElementById("url").value;
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;

  if(!url || !title) return alert("URL and Title required");

  const card = document.createElement("a");
  card.href = url;
  card.target = "_blank";
  card.className = "card";

  const img = document.createElement("img");
  img.src = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true`;
  img.onerror = () => img.src = "fallback.png";

  const content = document.createElement("div");
  content.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;

  card.appendChild(img);
  card.appendChild(content);
  container.appendChild(card);

  document.getElementById("url").value = "";
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
}
