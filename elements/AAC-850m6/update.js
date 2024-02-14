function(instance, properties, context) {
  const root = instance.canvas.get(0);

  const { base_color, color_stops, color_key } = properties;

  if (!base_color || !color_stops || !color_key) return;

  const { data } = instance;

  if (base_color === data.base_color && color_stops === data.color_stops && color_key === data.color_key) return;

  data.base_color = base_color;
  data.color_stops = color_stops;
  data.color_key = color_key;

  const hex_color = base_color.startsWith("#") ? base_color : data.rgbaToHex(base_color);
    
  const newStyle = window.MeshGrad.generateMeshGradient(color_stops, hex_color, color_key);
  const existingStyle = root.getAttribute("style") || "";

  root.setAttribute("style", `${existingStyle} ${newStyle}`);
}