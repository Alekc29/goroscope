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


// Данные гороскопов
const horoscopes = {
    "aries": "Сегодня вы полны энергии и решимости. Используйте это время для достижения своих целей.",
    "taurus": "Сегодняшний день благоприятен для финансовых операций. Будьте внимательны к деталям.",
    "gemini": "Ваше обаяние на высоте. Используйте это для налаживания новых связей.",
    "cancer": "Сегодня вы можете чувствовать себя эмоционально уязвимым. Найдите время для отдыха.",
    "leo": "Ваша уверенность привлекает внимание. Не бойтесь брать на себя ответственность.",
    "virgo": "Сегодняшний день подходит для планирования и организации. Детали имеют значение.",
    "libra": "Баланс и гармония — ваши главные союзники сегодня. Избегайте конфликтов.",
    "scorpio": "Ваша интуиция на высоте. Доверяйте своим внутренним ощущениям.",
    "sagittarius": "Сегодняшний день подходит для путешествий и новых впечатлений. Будьте открыты к переменам.",
    "capricom": "Ваша трудоспособность на высоте. Достигайте поставленных целей.",
    "aquarius": "Сегодня вы можете найти нестандартные решения для старых проблем. Думайте креативно.",
    "pisces": "Ваша чувствительность поможет вам понять окружающих. Будьте добры к себе и другим."
};

// Получаем элементы DOM
const zodiacSelect = document.getElementById("zodiac-sign");
const horoscopeText = document.getElementById("horoscope-text");

// Функция для обновления текста гороскопа
function updateHoroscope() {
    const selectedSign = zodiacSelect.value;
    horoscopeText.textContent = horoscopes[selectedSign];
}

// Слушаем изменения в выпадающем списке
zodiacSelect.addEventListener("change", updateHoroscope);

// Инициализация текста при загрузке страницы
updateHoroscope();

// Кнопка "Закрыть" (опционально)
Telegram.WebApp.setHeaderColor("#6C5B7B"); // Цвет заголовка

Telegram.WebApp.MainButton.setText("Закрыть").show().onClick(() => {
    Telegram.WebApp.close();
});