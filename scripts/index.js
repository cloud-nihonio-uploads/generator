function gen() {
const domain = "https://kali.linux-user.ml/embed/";
  const title = document.getElementById("title").value.replace("\n", "\\n");
  const params = new URLSearchParams();
  if (title) params.set("title", encodeURIComponent(title));

  const finalURLText = document.getElementById("final");
  finalURLText.innerText = `${domain}?${params.toString()}`;
};
