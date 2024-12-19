// Initial variables
let coins = 0;
let caseValue = 1;
let skins = ["AK-47 | Redline", "M4A4 | Asiimov", "AWP | Dragon Lore", "USP-S | Orion"];
let inventory = [];

document.getElementById("click-button").addEventListener("click", openCase);
document.getElementById("sell-button").addEventListener("click", sellSkin);

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

function sellSkin() {
    if (inventory.length > 0) {
        // Sell the first skin in the inventory
        let soldSkin = inventory.shift(); // Remove the first item in the array
        coins += 10; // Add some coin value when selling a skin (you can change this)
        document.getElementById("coins").textContent = coins;
        alert("You sold: " + soldSkin);

        // Update inventory UI
        updateInventory();
    } else {
        alert("Your inventory is empty!");
    }
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
