const COLOR_KA = "#fedc45";
const COLOR_MA = "#000000";
const COLOR_KU = "#282828";
const COLOR_RA = "#e4e4e4";
const COLOR_ND = "#f6f6f6";
const COLOR_OM = "#ffffff"

const KMKR_COLORS = [
  COLOR_KA,
  COLOR_MA,
  COLOR_MA,

  COLOR_MA,
  COLOR_ND,
  COLOR_KU,

  COLOR_OM,
  COLOR_OM,
  COLOR_RA,

  COLOR_OM,
  COLOR_MA,
  COLOR_OM,

  COLOR_MA,
  COLOR_OM,
  COLOR_OM,

  COLOR_OM,
  COLOR_KA,
  COLOR_OM,
];


const changeColors = function () {

  const KMKR_RENDER = [...KMKR_COLORS]
    .map(v => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort).map(({ v }) => v);

  for (let i = 0; i < KMKR_RENDER.length; i++) {
    document.getElementById("logo").getElementById(i).style.fill = KMKR_RENDER[i];
  }
};

window.setInterval(changeColors, 1000);