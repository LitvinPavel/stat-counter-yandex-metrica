# Счетчик статистики посещения
Выводит данные посещения текущей страницы (за последних 3 дня) во всплывающем окне. 
Один - в один как у Auto.ru на карточках товара.

# Простая установка
1. Ставим счетчик Яндекс Метрики на сайт.
2. Регистрируем приложение в Яндекс [OAuth](https://oauth.yandex.ru/client/new)
3. Получаем токен Любым удобным [способом](https://tech.yandex.ru/oauth/doc/dg/concepts/about-docpage/)
4. Вставляем токен в headers запроса (файл script.js)
5. Вставляем id счетчика Яндекс Метрики в ссылку (заменяем 'ХХХХХХХХ')
6. Подключаем файл script.js перед закрывающим тегом </body>
7. Полключаем файл style.css внутри тега <head></head>
8. Внутрь тега <body></body> вставляем div#show-module из файла index.html
9. Все сохраняем и пробуем.

PS Взбалтываем, но не перемешиваем =)
