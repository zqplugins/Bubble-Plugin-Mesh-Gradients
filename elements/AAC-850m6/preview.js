function(instance, properties) {
  const root = instance.canvas.get(0);
    
  const pattern = document.createElement("div");
  pattern.style.height = `${properties.bubble.height()}px`;
  pattern.style.width = `${properties.bubble.width()}px`;
    
  const newStyle = "background-color: rgb(255, 122, 200);background-image: radial-gradient(at 0% 0%, rgb(255, 122, 200) 0px, transparent 55%), radial-gradient(at 9% 66%, rgb(255, 80, 95) 0px, transparent 55%), radial-gradient(at 15% 56%, rgb(137, 54, 255) 0px, transparent 55%), radial-gradient(at 89% 81%, rgb(255, 124, 98) 0px, transparent 55%), radial-gradient(at 9% 43%, rgb(127, 36, 255) 0px, transparent 55%), radial-gradient(at 7% 10%, rgb(125, 255, 113) 0px, transparent 55%);opacity: 0.5;";
  const existingStyle = pattern.getAttribute("style") || "";
  
  pattern.setAttribute("style", `${existingStyle} ${newStyle}`);

  root.appendChild(pattern);
}