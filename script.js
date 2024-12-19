// Initial variables
let coins = 0;
let caseValue = 1;
let skins = ["AK-47 | Redline", "M4A4 | Asiimov", "AWP | Dragon Lore", "USP-S | Orion"];
let inventory = [];

document.getElementById("click-button").addEventListener("click", openCase);

function openCase() {
    // Earn coins and open a case
    coins += caseValue;
    document.getElementById("coins").textContent = coins;

    // Simulate opening a case and getting a random skin
    let randomSkin = skins[Math.floor(Math.random() * skins.length)];
    inventory.push(randomSkin);

    // Update inventory UI
    updateInventory();
}

function updateInventory() {
    let skinList = document.getElementById("skin-list");
    skinList.innerHTML = ""; // Clear current inventory
    inventory.forEach(skin => {
        let li = document.createElement("li");
        li.textContent = skin;
        skinList.appendChild(li);
    });
}
