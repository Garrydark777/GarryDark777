// Анимация звёзд
const stars = "✦✧⋆⁺₊⋆☾⋆⁺₊⋆✧✦";
setInterval(() => {
    const star = document.createElement("div");
    star.textContent = stars[Math.floor(Math.random() * stars.length)];
    star.style.position = "fixed";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.opacity = "0.7";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 2000);
}, 300);

// Функция для копирования криптоадресов
function copyAddress(coin) {
    const addresses = {
        BTC: "bc1q4f5v0p3k7q9j2x6n8g0zm7d9v4c1x2z3q4k5l6",
        ETH: "0x7F3A1eD7E0633074B31e2aB2B3D3c4D5E6F7A8B9",
        SOL: "7V2X3Y4Z5A6B7C8D9E0F1G2H3I4J5K6L7M8N9O0P",
        TON: "EQAB1C2D3E4F5G6H7I8J9K0L1M2N3O4P5Q6R7S8T9"
    };
    navigator.clipboard.writeText(addresses[coin]);
    const message = document.getElementById("message");
    message.textContent = `Адрес ${coin} скопирован!`;
    setTimeout(() => message.textContent = "", 3000);
}
