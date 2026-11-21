document.getElementById("year").textContent = new Date().getFullYear();
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menu?.setAttribute("aria-expanded", "false");
}));
document.getElementById("copy")?.addEventListener("click", async () => {
  const status = document.getElementById("copyStatus");
  try {
    await navigator.clipboard.writeText("u5dpubfy");
    status.textContent = "Server-Code wurde kopiert.";
  } catch {
    status.textContent = "Server-Code: u5dpubfy";
  }
});