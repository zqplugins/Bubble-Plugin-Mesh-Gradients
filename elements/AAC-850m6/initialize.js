function(instance, context) {
  instance.data.rgbaToHex = (rgba) => {
    const values = rgba.substring(rgba.indexOf("(") + 1, rgba.lastIndexOf(")")).split(",");
    const r = parseInt(values[0].trim());
    const g = parseInt(values[1].trim());
    const b = parseInt(values[2].trim());
    const a = parseFloat(values[3].trim());

    const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return `#${hex}`;
  };
};