const diceRow = document.getElementById("diceRow");
const resultEl = document.getElementById("result");
const historyEl = document.getElementById("history");
const rollBtn = document.getElementById("rollBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const diceCountLabel = document.getElementById("diceCountLabel");

const PIP_LAYOUTS = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9]
};

let diceCount = 2;
let history = [];

function buildDie(value) {
    const die = document.createElement("div");
    die.className = "die";

    for (let i = 1; i <= 9; i++) {
        const pip = document.createElement("div");
        pip.className = "pip";
        if (PIP_LAYOUTS[value].includes(i)) {
            pip.style.opacity = "1";
        }
        die.appendChild(pip);
    }

    return die;
}

function renderDice(values) {
    diceRow.innerHTML = "";
    values.forEach(function (value) {
        diceRow.appendChild(buildDie(value));
    });
}

function renderHistory() {
    historyEl.innerHTML = history
        .slice(-5)
        .reverse()
        .map(function (entry) {
            return `<div class="history_row"><span>${entry.values.join(" + ")}</span><span>Total: ${entry.total}</span></div>`;
        })
        .join("");
}

function updateDiceCountLabel() {
    diceCountLabel.textContent = diceCount;
    renderDice(new Array(diceCount).fill(1));
    resultEl.innerHTML = "Total: <b>-</b>";
}

decreaseBtn.addEventListener("click", function () {
    diceCount = Math.max(1, diceCount - 1);
    updateDiceCountLabel();
});

increaseBtn.addEventListener("click", function () {
    diceCount = Math.min(6, diceCount + 1);
    updateDiceCountLabel();
});

rollBtn.addEventListener("click", function () {
    const dice = diceRow.querySelectorAll(".die");
    dice.forEach(function (die) { die.classList.add("rolling"); });
    rollBtn.disabled = true;

    setTimeout(function () {
        const values = [];
        for (let i = 0; i < diceCount; i++) {
            values.push(Math.floor(Math.random() * 6) + 1);
        }

        renderDice(values);

        const total = values.reduce(function (sum, v) { return sum + v; }, 0);
        resultEl.innerHTML = `Total: <b>${total}</b>`;

        history.push({ values: values, total: total });
        renderHistory();

        rollBtn.disabled = false;
    }, 500);
});

updateDiceCountLabel();