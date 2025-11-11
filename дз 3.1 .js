// Перевірка правильності введення login, email, phone

// Імітація введення користувачем
let login = "user_name123!!";
let email = "example@gmail.com";
let phone = "+380501234567";

//Перевірка login
let loginPattern = /^[a-zA-Z0-9_]{3,20}$/; // тільки латиниця, цифри, _
if (login.match(loginPattern)) {
    console.log("✅ Login введено правильно");
} else {
    console.log("❌ Login неправильний");
}

//Перевірка email
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
if (email.search(emailPattern) !== -1) {
    console.log("✅ Email правильний");
} else {
    console.log("❌ Email неправильний");
}

//Перевірка phone 
let phonePattern = /^\+380\d{9}$/;
if (phone.match(phonePattern)) {
    console.log("✅ Номер телефону правильний");
} else {
    console.log("❌ Номер телефону неправильний");
}
