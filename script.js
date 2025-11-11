// --- Скрипт для знаходження спільних слів між двома фразами ---
// Використовується Set (new Set)

// Функція очищення тексту і розбиття на слова
function getWords(text) {
    return text
        .toLowerCase()
        .replace(/[^\wа-яіїєґ']/gi, " ") // видаляє розділові знаки
        .split(/\s+/) // розбиває по пробілах
        .filter(Boolean); // прибирає порожні елементи
}

// Основна функція пошуку спільних слів
function findCommonWords(phrase1, phrase2) {
    const words1 = getWords(phrase1);
    const words2 = getWords(phrase2);

    const set1 = new Set(words1);
    const set2 = new Set(words2);

    // Знаходимо спільні елементи
    return [...set1].filter(word => set2.has(word));
}

// --- Отримання фраз через prompt з перевіркою ---
function askPhrase(message) {
    let phrase;
    do {
        phrase = prompt(message);
        if (phrase === null) return null; // Якщо користувач натиснув "Скасувати"
        phrase = phrase.trim();
        if (!phrase) alert("Будь ласка, введіть текст!");
    } while (!phrase);
    return phrase;
}

// --- Основна логіка ---
const phrase1 = askPhrase("Введіть першу фразу:");
if (phrase1 !== null) {
    const phrase2 = askPhrase("Введіть другу фразу:");
    if (phrase2 !== null) {
        const commonWords = findCommonWords(phrase1, phrase2);

        if (commonWords.length > 0) {
            alert("Спільні слова: " + commonWords.join(", "));
            console.log("Спільні слова:", commonWords);
        } else {
            alert("Спільних слів немає.");
            console.log("Спільних слів немає.");
        }
    } else {
        alert("Ви скасували введення другої фрази.");
    }
} else {
    alert("Ви скасували введення першої фрази.");
}
