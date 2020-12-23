# Ant Design Vue

by Mottor 💪

## Режим разработки и предпросмотра стилей

```
nvm use
npm run start
```

## Основные изменения по сравнению с оригинальным Ant Design Vue

1. Изменены стили отдельных элементов

2. Возможность добавлять свои иконки. Подробнее в icons.md

3. Возможность растягивать компонент Select по всю ширину родительского элемента.
Для этого нужно добавить атрибут `:full-width="true"`

```
<a-select default-value="lucy" :full-width="true">
    <a-select-option value="jack">
        Jack
    </a-select-option>
    <a-select-option value="lucy">
        Very long option.....
    </a-select-option>
</a-select>
```

4. Возможность убирать стрелку у Popover и Tooltip. Для этого нужно добавить атрибут `arrow` (bool).

Пример:

```
<a-popover placement="bottom" :arrow="false">
    <template slot="content">
        <p>Content</p>
        <p>Content</p>
    </template>
    <template slot="title">
        <span>Title</span>
    </template>
    <a-button>Bottom</a-button>
</a-popover>
```

5. Новый стиль вкладок (Tab) - убираются отступы, полоска выделения становится шириной с текст.
Для включения нужно добавить атрибут `:new-style="true"`

```
<a-tabs default-active-key="1" :new-style="true">
    <a-tab-pane key="1" tab="Tab 1">
      Tab 1
    </a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2">
      Tab 2
    </a-tab-pane>
</a-tabs>
```

6. Возможность растягивать компонент a-radio-group по всю ширину родительского элемента.
Для этого нужно добавить атрибут `:full-width="true"`

```
<a-radio-group default-value="1" :full-width="true">
    <a-radio-button value="1">1</a-radio-button>
    <a-radio-button value="2">test</a-radio-button>
    <a-radio-button value="3">Very long option.....</a-radio-button>
</a-radio-group>
```

7. Возможность добавить иконки к пунктам Select. Для этого нужно добавить атрибут `:show-selected-icon="true"`.

```
<a-select default-value="lucy" style="width: 120px" :show-selected-icon="true">
  <a-icon slot="menuItemSelectedIcon" type="smile"/>
  <a-select-option value="jack">
    Jack
  </a-select-option>
  <a-select-option value="lucy">
    Lucy
  </a-select-option>
</a-select>
```

По умолчанию иконка - галочка:

```
<a-select default-value="lucy" style="width: 120px" :show-selected-icon="true">
  <a-select-option value="jack">
    Jack
  </a-select-option>
  <a-select-option value="lucy">
    Lucy
  </a-select-option>
</a-select>
```

8. У компонента a-input-search добавлены опции:

- `icon-position` (`after`, `before`) - положение иконки с лупой, по умолчанию (`after`)- после поля ввода
- `disable-icon-events` (bool) - отключает кликабельность иконки с лупой

```
<a-input-search
    icon-position="before"
    :disable-icon-events="true"
    placeholder="icon-position=before"
    style="width: 200px" />
```

9. Добавлены компоненты типографики:

```
<a-title>h1. Ant Design</a-title>
<a-title :level="2">h2. Ant Design</a-title>
<a-title :level="3">h3. Ant Design</a-title>
<a-title :level="4">h4. Ant Design</a-title>

<a-text>Ant Design</a-text>
<a-text type="secondary">Ant Design</a-text>
<a-text type="warning">Ant Design</a-text>
<a-text type="danger">Ant Design</a-text>
<a-text disabled>Ant Design</a-text>
<a-text mark>Ant Design</a-text>
<a-text code>Ant Design</a-text>
<a-text underline>Ant Design</a-text>
<a-text delete>Ant Design</a-text>
<a-text strong>Ant Design</a-text>

<a-paragraph :editable="{onChange: () => {}}">Test paragraph</a-paragraph>
<a-paragraph copyable>This is a copyable text.</a-paragraph>
<a-paragraph :copyable="{text: 'Hello, Ant Design!'}">Replace copy text.</a-paragraph>

<a-paragraph :ellipsis="{rows: 3, expandable: true}">
  Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
  Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
  a design language for background applications, is refined by Ant UED Team. Ant Design, a
  design language for background applications, is refined by Ant UED Team. Ant Design, a design
</a-paragraph>
```
