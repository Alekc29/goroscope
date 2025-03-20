import requests
from bs4 import BeautifulSoup
import json

# Функция для парсинга гороскопа
def parse_horoscope():
    signs = [
        "aries", "taurus", "gemini", "cancer", "leo", "virgo",
        "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
    ]
    horoscopes = {}

    for sign in signs:
        url = f"https://horo.mail.ru/prediction/{sign}/today/"
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")
        horoscope = soup.find("main", class_="e45a4c1552 be13d659a4 navigationContainer_2 dcced6f448")
        if horoscope:
            horoscopes[sign] = horoscope.get_text(strip=True)
        else:
            horoscopes[sign] = "Гороскоп не найден."

    # Сохраняем данные в JSON
    with open("horoscope.json", "w", encoding="utf-8") as f:
        json.dump(horoscopes, f, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    parse_horoscope()