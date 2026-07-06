var tools = [
  { tag: "Retrosynthesis & reasoning", title: "ChemCrow", icon: ICONS.flaskChat,
    desc: "An open-source framework that pairs a large language model with 18 expert chemistry tools, letting it plan multi-step syntheses, check reagent availability, and reason through reactions.",
    cited: "Cited as: Empel & Koenigs (2023)" },
  { tag: "Machine learning toolkit", title: "DeepChem", icon: ICONS.network,
    desc: "An open-source deep learning library built for chemistry, used to train models that predict reaction outcomes and help optimize experimental conditions.",
    cited: "Cited as: Wu et al. (2018)" },
  { tag: "Reaction prediction", title: "IBM RXN for Chemistry", icon: ICONS.retro,
    desc: "IBM's AI platform for predicting chemical reactions and planning retrosynthesis routes, used to suggest viable synthesis pathways for a target compound.",
    cited: "Cited as: IBM Research (n.d.)" },
  { tag: "Autonomous experimentation", title: "Coscientist", icon: ICONS.robotArm,
    desc: "A GPT-4-driven system that autonomously designs, plans, and physically carries out chemistry experiments, coordinating web search, documentation, and robotic lab hardware.",
    cited: "Cited as: Boiko et al. (2023)" },
  { tag: "Chemical language model", title: "ChemLLM", icon: ICONS.chatMolecule,
    desc: "A fine-tuned large language model trained specifically on chemical reaction data, built to predict molecular properties and recommend synthesis routes in natural language.",
    cited: "Cited as: Zheng et al. (2024)" }
];

var index = 0;
var cardEl = document.getElementById("card");
var iconEl = document.getElementById("icon");
var tagEl = document.getElementById("tag");
var titleEl = document.getElementById("title");
var descEl = document.getElementById("desc");
var citedEl = document.getElementById("cited");
var dotsEl = document.getElementById("dots");

function renderDots() {
  dotsEl.innerHTML = "";
  for (var i = 0; i < tools.length; i++) {
    var d = document.createElement("div");
    d.className = "dot" + (i === index ? " active" : "");
    dotsEl.appendChild(d);
  }
}

function paint() {
  var t = tools[index];
  iconEl.innerHTML = t.icon;
  tagEl.textContent = t.tag;
  titleEl.textContent = t.title;
  descEl.textContent = t.desc;
  citedEl.textContent = t.cited;
  renderDots();
}

function show(newIndex, direction) {
  var outClass = direction > 0 ? "out-left" : "out-right";
  cardEl.classList.add(outClass);
  setTimeout(function () {
    index = (newIndex + tools.length) % tools.length;
    paint();
    cardEl.classList.remove("out-left", "out-right");
  }, 180);
}

document.getElementById("zoneRight").addEventListener("click", function () { show(index + 1, 1); });
document.getElementById("zoneLeft").addEventListener("click", function () { show(index - 1, -1); });

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") show(index + 1, 1);
  if (e.key === "ArrowLeft") show(index - 1, -1);
});

paint();
