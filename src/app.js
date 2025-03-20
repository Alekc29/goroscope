// Интеграция с Telegram Web Apps
Telegram.WebApp.ready();
Telegram.WebApp.setHeaderColor("#63ef0c"); // Цвет заголовка
Telegram.WebApp.setBackgroundColor("#F5F5F5"); // Цвет фона

// Отображаем приветствие
const user = Telegram.WebApp.initDataUnsafe.user;
if (user) {
    document.getElementById("output").textContent = `Привет, ${user.first_name}!`;
    console.log("Имя пользователя:", user.first_name);
}

// Получаем элементы DOM
const zodiacSelect = document.getElementById("zodiac-sign");
const horoscopeText = document.getElementById("horoscope-text");

// Функция для получения гороскопа
async function getHoroscope(sign) {
    try {
        const response = await fetch(`https://Alekc29.github.io/goroscope/data/horoscope.json`);
        const data = await response.json();
        return data[sign] || "Гороскоп не найден.";
    } catch (error) {
        console.error("Ошибка при загрузке гороскопа:", error);
        return "Не удалось загрузить гороскоп. Попробуйте позже.";
    }
}

// Функция для обновления текста гороскопа
async function updateHoroscope() {
    const selectedSign = zodiacSelect.value;
    const horoscope = await getHoroscope(selectedSign);
    horoscopeText.textContent = horoscope;
}

// Слушаем изменения в выпадающем списке
zodiacSelect.addEventListener("change", updateHoroscope);

// Инициализация текста при загрузке страницы
updateHoroscope();

// Кнопка "Закрыть" (опционально)
Telegram.WebApp.MainButton.setText("Закрыть").show().onClick(() => {
    Telegram.WebApp.close();
});