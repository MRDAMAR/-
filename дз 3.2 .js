// Імітація введення користувачем
let rawLogin = "  user!@#name$$$   ";

// Видаляємо все, крім літер, цифр і _
let cleanedLogin = rawLogin.replace(/[^a-zA-Z0-9_]/g, "");

// Також прибираємо зайві пробіли (на початку/в кінці)
cleanedLogin = cleanedLogin.trim();

console.log("Очищений login:", cleanedLogin);
