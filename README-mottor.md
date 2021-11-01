# Ant Design Vue by Mottor 💪

Форк оригинального репозитория для небольших правок в дизайне.

Оригинальный readme - `README-original.md`

Адрес NPM-пакета:

    https://www.npmjs.com/package/@mottor/ant-design-vue

Установка в проект

    npm i @mottor/ant-design-vue

## Подтягивание изменений оригинала

1.  Переключиться на нужную ветку

2.  Выполнить

        ./pull-original.sh

3.  Разрешить конфликты

4.  Запушить изменения

## Обновление версии в NPM

1.  Обновить номер версии в `package.json`

2.  Выполнить

        npm login
        nvm use
        npm i
        npm run dist && npm run compile && npm publish --public

3.  Проверить публикацию новой версии https://www.npmjs.com/package/@mottor/ant-design-vue - вкладка Versions.

## Push

    git status
    git add .
    git commit -m "............" --no-verify
    git push -u origin master
