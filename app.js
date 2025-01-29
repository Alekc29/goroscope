// Интеграция с Telegram Web Apps
Telegram.WebApp.ready();
Telegram.WebApp.setHeaderColor("#6C5B7B"); // Цвет заголовка
Telegram.WebApp.setBackgroundColor("#F5F5F5"); // Цвет фона

// Отображаем приветствие
const user = Telegram.WebApp.initDataUnsafe.user;
if (user) {
    document.getElementById("output").textContent = `Привет, ${user.first_name}!`;
    console.log("Имя пользователя:", user.first_name);
}

// Кнопка закрытия
Telegram.WebApp.MainButton.setText("Закрыть").show().onClick(() => {
    Telegram.WebApp.close();
});