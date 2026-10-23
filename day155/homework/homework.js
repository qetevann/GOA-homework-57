

const player1Bag = new Set(["Bloodthorn", "Water", "Glowspore", "Feather"]);
const player2Bag = new Set(["Water", "Crystal", "Glowspore", "Ironbark"]);


function createGuildStash(bag1, bag2) {
    return new Set([...bag1, ...bag2]);
}

const guildStash = createGuildStash(player1Bag, player2Bag);
console.log("გილდიის საცავი:", guildStash);


const healthPotionRecipe = new Set(["Water", "Bloodthorn", "Crystal"]);

function canCraft(recipe, stash) {
    return [...recipe].every((ingredient) => stash.has(ingredient));
}

console.log("შეგვიძლია ელექსირის მომზადება?", canCraft(healthPotionRecipe, guildStash)); // true


function getMissingIngredients(recipe, stash) {
    return new Set([...recipe].filter((ingredient) => !stash.has(ingredient)));
}

const manaPotionRecipe = new Set(["Water", "Moonleaf", "Crystal"]);

console.log(
    "აკლია ინგრედიენტები (Mana Potion):",
    getMissingIngredients(manaPotionRecipe, guildStash)
);


function getTradeableItems(bag1, bag2) {
    const onlyInBag1 = [...bag1].filter((item) => !bag2.has(item));
    const onlyInBag2 = [...bag2].filter((item) => !bag1.has(item));

    return new Set([...onlyInBag1, ...onlyInBag2]);
}

console.log("გასაცვლელი ნივთები:", getTradeableItems(player1Bag, player2Bag));
