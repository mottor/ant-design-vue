<template>
  <div>
    <div style="padding: 40px">
      <table class="conf">
        <tr>
          <td><a-input size="small" placeholder="Текст"></a-input></td>
          <td><a-button type="primary" size="small" icon="container">Кнопка</a-button></td>
          <td>
            <a-radio-group default-value="1" size="small">
              <a-radio-button value="1">1</a-radio-button>
              <a-radio-button value="2">2</a-radio-button>
              <a-radio-button value="3">
                <a-icon type="mtr-table-view" />
              </a-radio-button>
            </a-radio-group>
          </td>
          <td>
            <a-select default-value="lucy" size="small">
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy11</a-select-option>
            </a-select>
          </td>
          <td><a-date-picker size="small" format="DD.MM.YYYY" /></td>
          <td><a-input-number size="small" :min="8" :max="12" :value="10"></a-input-number></td>
          <td style="vertical-align: middle;">
            <a-switch
              checked-children="1"
              un-checked-children="0"
              size="small"
              v-decorator="['switch', { valuePropName: 'checked' }]"
            />
          </td>
          <td style="vertical-align: middle;">
            <a-switch
              loading
              checked
              size="small"
              v-decorator="['switch', { valuePropName: 'checked' }]"
            />
          </td>
          <td style="vertical-align: middle;">
            <a-switch
              disabled
              checked
              size="small"
              v-decorator="['switch', { valuePropName: 'checked' }]"
            />
          </td>
        </tr>
        <tr>
          <td><a-input placeholder="Текст"></a-input></td>
          <td><a-button type="primary" icon="container">Кнопка</a-button></td>
          <td>
            <a-radio-group default-value="1" size="default">
              <a-radio-button value="1">1</a-radio-button>
              <a-radio-button value="2">2</a-radio-button>
              <a-radio-button value="3">
                <a-icon type="mtr-table-view" />
              </a-radio-button>
            </a-radio-group>
          </td>
          <td>
            <a-select default-value="lucy">
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy11</a-select-option>
            </a-select>
          </td>
          <td><a-date-picker /></td>
          <td><a-input-number :min="8" :max="12" :value="10"></a-input-number></td>
          <td style="vertical-align: middle;">
            <a-switch
              checked-children="1"
              un-checked-children="0"
              v-decorator="['switch', { valuePropName: 'checked' }]"
            />
          </td>
          <td style="vertical-align: middle;">
            <a-switch loading v-decorator="['switch', { valuePropName: 'checked' }]" />
          </td>
          <td style="vertical-align: middle;">
            <a-switch disabled v-decorator="['switch', { valuePropName: 'checked' }]" />
          </td>
        </tr>
        <tr>
          <td><a-input size="large" placeholder="Текст"></a-input></td>
          <td><a-button type="primary" size="large" icon="container">Кнопка</a-button></td>
          <td>
            <a-radio-group default-value="1" size="large">
              <a-radio-button value="1">1</a-radio-button>
              <a-radio-button value="2">2</a-radio-button>
              <a-radio-button value="3">
                <a-icon type="mtr-table-view" />
              </a-radio-button>
            </a-radio-group>
          </td>
          <td>
            <a-select default-value="lucy" size="large">
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy11</a-select-option>
            </a-select>
          </td>
          <td><a-date-picker size="large" /></td>
          <td><a-input-number size="large" :min="8" :max="12" :value="10"></a-input-number></td>
          <td style="vertical-align: middle;">
            <a-switch size="large" v-decorator="['switch', { valuePropName: 'checked' }]" />
          </td>
          <td style="vertical-align: middle;">
            <a-switch
              checked
              size="large"
              loading
              v-decorator="['switch', { valuePropName: 'checked' }]"
            />
          </td>
          <td style="vertical-align: middle;">
            <a-switch
              size="large"
              disabled
              v-decorator="['switch', { valuePropName: 'checked' }]"
            />
          </td>
        </tr>
      </table>

      <br />
      <br />
      <h2>Buttons</h2>
      <div style="padding-left: 30px;">
        <a-button type="primary" icon="mtr-plus">Primary</a-button>
        <a-button type="secondary" icon="mtr-arrow-left">Secondary</a-button>
        <a-button icon="mtr-arrow-down">Default</a-button>
        <a-button type="outlined" icon="mtr-settings">Outlined</a-button>
        <a-button type="dashed" icon="mtr-search">Dashed</a-button>
        <a-button type="danger" icon="mtr-close">Danger</a-button>
        <a-button type="danger" icon="mtr-dots">Danger</a-button>
        <a-button type="link">Link</a-button>

        <br />
        <br />
        <h3>Button Group</h3>

        <a-radio-group default-value="1" size="default">
          <a-radio-button value="1">1</a-radio-button>
          <a-radio-button value="2">test</a-radio-button>
          <a-radio-button value="3">Very long option.....</a-radio-button>
        </a-radio-group>

        <div
          style="width:500px; border: 1px dashed grey; padding: 4px; display: inline-block; margin-left: 12px;"
        >
          <a-radio-group default-value="1" :full-width="true">
            <a-radio-button value="1">1</a-radio-button>
            <a-radio-button value="2">test</a-radio-button>
            <a-radio-button value="3">Very long option.....</a-radio-button>
          </a-radio-group>
        </div>

        <br />
        <br />
        <h3>Button a[href]</h3>
        <div>
          <a href="#" class="ant-btn"><span>Ссылка</span></a>
          <a href="#" class="ant-btn" disabled><span>Ссылка неактивная</span></a>
        </div>
      </div>

      <br />
      <br />
      <h2>Inputs</h2>
      <div style="padding-left: 30px;">
        <div><a-input style="width: 200px;" placeholder="Простой инпут"></a-input></div>
        <div style="margin-top: 16px">
          <a-input
            style="width: 200px;"
            default-value="mysite"
            class="ant-input-search-enter-button"
          >
            <a-button slot="addonAfter" type="primary">Кнопка</a-button>
          </a-input>
        </div>
        <div style="margin-top: 16px">
          <a-input-group>
            <a-input style="width: 200px;"></a-input>
            <a-button
              type="secondary"
              style="border-top-left-radius: 0; border-bottom-left-radius: 0"
              >Кнопка</a-button
            >
          </a-input-group>
        </div>
      </div>

      <br />
      <br />
      <h2>Switch</h2>
      <div style="padding-left: 30px;">
        <table class="conf">
          <tr>
            <td><a-button size="small">Кнопка</a-button></td>
            <td>
              <a-switch size="small" v-decorator="['switch', { valuePropName: 'checked' }]" />
            </td>
          </tr>
          <tr>
            <td><a-button>Кнопка</a-button></td>
            <td><a-switch v-decorator="['switch', { valuePropName: 'checked' }]" /></td>
          </tr>
          <tr>
            <td><a-button size="large">Кнопка</a-button></td>
            <td>
              <a-switch size="large" v-decorator="['switch', { valuePropName: 'checked' }]" />
            </td>
          </tr>
        </table>
      </div>

      <br />
      <br />
      <h2>Checkbox & Radio</h2>
      <div style="padding-left: 30px;">
        <a-checkbox-group :options="['Яблоко', 'Груша', 'Апельсин']" :default-value="['Яблоко']" />
        <br />
        <div style="margin-top: 16px">
          <a-radio-group :default-value="1">
            <a-radio :value="1">Опция 1</a-radio>
            <a-radio :value="2">Опция 2</a-radio>
            <a-radio :value="3">Опция 3</a-radio>
          </a-radio-group>
        </div>
      </div>

      <br />
      <br />
      <h2>Select</h2>
      <div style="padding-left: 30px;">
        <a-select default-value="lucy" style="width: 120px">
          <a-select-option value="jack">
            Jack
          </a-select-option>
          <a-select-option value="lucy">
            Lucy
          </a-select-option>
          <a-select-option value="disabled" disabled>
            Disabled
          </a-select-option>
          <a-select-option value="Yiminghe">
            yiminghe
          </a-select-option>
        </a-select>

        <a-select default-value="lucy" style="width: 120px" disabled>
          <a-select-option value="lucy">
            Lucy
          </a-select-option>
        </a-select>

        <a-select default-value="lucy" style="width: 120px" loading>
          <a-select-option value="lucy">
            Lucy
          </a-select-option>
        </a-select>
        <br />
        <br />

        <h3>Select (:show-selected-icon=true)</h3>

        <a-select default-value="lucy" style="width: 120px" :show-selected-icon="true">
          <a-icon slot="menuItemSelectedIcon" type="mtr-check" />
          <a-select-option value="jack">
            Jack
          </a-select-option>
          <a-select-option value="lucy">
            Lucy
          </a-select-option>
        </a-select>

        <a-select default-value="lucy" style="width: 120px" :show-selected-icon="true">
          <a-select-option value="jack">
            Jack
          </a-select-option>
          <a-select-option value="lucy">
            Lucy
          </a-select-option>
        </a-select>

        <br />
        <br />

        <h3>Select (:full-width=true)</h3>
        <p>Select должен быть внутри очерченной области.</p>
        <div class="clearfix">
          <div style="width:100px; border: 1px dashed grey; padding: 4px; float: left;">
            <a-select default-value="lucy" :full-width="true">
              <a-select-option value="jack">
                Jack
              </a-select-option>
              <a-select-option value="lucy">
                Very long option.....
              </a-select-option>
            </a-select>
          </div>

          <div
            style="width:250px; border: 1px dashed grey; padding: 4px; float: left; margin-left: 12px;"
          >
            <a-select default-value="lucy" :full-width="true">
              <a-select-option value="jack">
                Jack
              </a-select-option>
              <a-select-option value="lucy">
                Very long option.....
              </a-select-option>
            </a-select>
          </div>
        </div>
      </div>

      <br />
      <br />
      <h2>Icons</h2>
      <div style="padding-left: 30px;">
        <table class="" style="color: #1890ff">
          <tr>
            <td><a-icon type="mtr-plus" /></td>
            <td>mtr-plus</td>
          </tr>
          <tr>
            <td><a-icon type="mtr-arrow-down" /></td>
            <td>mtr-arrow-down</td>
          </tr>
          <tr>
            <td><a-icon type="mtr-arrow-left" /></td>
            <td>mtr-arrow-left</td>
          </tr>
          <tr>
            <td><a-icon type="mtr-arrow-right" /></td>
            <td>mtr-arrow-right</td>
          </tr>
          <tr>
            <td><a-icon type="mtr-arrow-up" /></td>
            <td>mtr-arrow-up</td>
          </tr>
          <tr>
            <td><a-icon type="mtr-close" /></td>
            <td>mtr-close</td>
          </tr>
          <tr>
            <td><a-icon type="mtr-settings" /></td>
            <td>mtr-settings</td>
          </tr>
          <tr>
            <td><a-icon type="mtr-dots" /></td>
            <td>mtr-dots</td>
          </tr>
          <tr>
            <td><a-icon type="mtr-dots-drag" /></td>
            <td>mtr-dots-drag</td>
          </tr>
          <tr>
            <td>
              <a-icon type="mtr-check" />
            </td>
            <td>mtr-check</td>
          </tr>
          <tr>
            <td><a-icon type="mtr-search" /></td>
            <td>mtr-search</td>
          </tr>
          <tr>
            <td><a-icon type="mtr-eye" /></td>
            <td>mtr-eye</td>
          </tr>
          <tr>
            <td><a-icon type="mtr-eye-off" /></td>
            <td>mtr-eye-off</td>
          </tr>
          <tr>
            <td>
              <a-icon type="mtr-trash1" />
              <a-icon type="mtr-trash2" />
            </td>
            <td>mtr-trash</td>
          </tr>
        </table>
      </div>

      <br />
      <br />
      <h2>Dropdown</h2>
      <div style="padding-left: 30px;">
        <table class="conf">
          <tr>
            <td>
              <a-dropdown :trigger="['click']">
                <a-button>Открывашка</a-button>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a target="_blank" rel="noopener noreferrer" href="#">Первый пункт</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a target="_blank" rel="noopener noreferrer" href="#">Второй пункт</a>
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item>
                    <a target="_blank" rel="noopener noreferrer" href="#">Третий пункт</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </td>
            <td>
              <a-dropdown :trigger="['click']">
                <a-button icon="ellipsis"></a-button>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a target="_blank" rel="noopener noreferrer" href="#">Первый пункт</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a target="_blank" rel="noopener noreferrer" href="#">Второй пункт</a>
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item>
                    <a target="_blank" rel="noopener noreferrer" href="#">Третий пункт</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </td>
            <td>
              <a-dropdown :trigger="['click']">
                <a-button type="link">Фильтр <a-icon type="mtr-arrow-down"/></a-button>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a target="_blank" rel="noopener noreferrer" href="#">Первый пункт</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a target="_blank" rel="noopener noreferrer" href="#">Второй пункт</a>
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item>
                    <a target="_blank" rel="noopener noreferrer" href="#">Третий пункт</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </td>
            <td>
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                  Click me <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a target="_blank" rel="noopener noreferrer" href="#">Первый пункт</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a target="_blank" rel="noopener noreferrer" href="#">Второй пункт</a>
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item>
                    <a target="_blank" rel="noopener noreferrer" href="#">Третий пункт</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </td>
          </tr>
        </table>
      </div>

      <br />
      <br />
      <h2>For CRM</h2>
      <div style="padding-left: 30px;">
        <p>Тут у нас разнородные компоненты должны выглядеть +/- одинаково: Dropdown и Popover.</p>
        <a-select
          class="is-filter"
          default-value="1"
          size="small"
          :dropdownMatchSelectWidth="false"
          :show-selected-icon="true"
        >
          <a-icon slot="menuItemSelectedIcon" type="mtr-check" />
          <a-select-option value="1">Сайт 1</a-select-option>
          <a-select-option value="2222">Сайт 2222</a-select-option>
        </a-select>
        <a-popover class="is-filter" placement="bottomLeft" trigger="click" :arrow="false">
          <a-button size="small" type="link">Статусы <a-icon type="mtr-arrow-down"/></a-button>
          <template slot="title">
            <span>Статусы для отображения:</span>
          </template>
          <template slot="content">
            <a-checkbox-group :options="['Новый', 'В работе']"></a-checkbox-group>
          </template>
        </a-popover>
        <a-popover class="is-filter" placement="bottomLeft" trigger="click" :arrow="false">
          <a-button size="small" type="link">Типы <a-icon type="mtr-arrow-down"/></a-button>
          <template slot="title">
            <span>Типы заявок:</span>
          </template>
          <template slot="content">
            <a-checkbox>Звонок</a-checkbox>
            <a-checkbox>Заказ</a-checkbox>
            <a-checkbox>Корзина</a-checkbox>
          </template>
        </a-popover>
        <div style="display: inline-block;">
          <a-range-picker class="is-filter" size="small" />
        </div>
        <a-dropdown :trigger="['click']">
          <a-button icon="ellipsis" type="secondary" size="small"></a-button>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="#">Выгрузка заявок</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <a-button icon="plus" type="primary" size="small">Создать заявку</a-button>
      </div>

      <br />
      <br />
      <h2>Tabs</h2>
      <div style="padding-left: 30px;">
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="Tab 1">
            Tab 1
          </a-tab-pane>
          <a-tab-pane key="2" tab="Tab 2">
            Tab 2
          </a-tab-pane>
          <a-tab-pane key="3" tab="Tab 3">
            Tab 3
          </a-tab-pane>
          <a-tab-pane key="4" tab="Tab 4" disabled>
            Tab 4
          </a-tab-pane>
        </a-tabs>

        <br />
        <br />
        <h3>Tabs (new style)</h3>
        <a-tabs default-active-key="1" :new-style="true">
          <a-tab-pane key="1" tab="Tab 1">
            Tab 1
          </a-tab-pane>
          <a-tab-pane key="2" tab="Tab 2">
            Tab 2
          </a-tab-pane>
          <a-tab-pane key="3" tab="Tab 3">
            Tab 3
          </a-tab-pane>
          <a-tab-pane key="4" tab="Tab 4" disabled>
            Tab 4
          </a-tab-pane>
        </a-tabs>
      </div>

      <br />
      <br />
      <h2>Popover</h2>
      <div style="padding: 50px 200px;">
        <table class="conf">
          <tr>
            <td>&nbsp;</td>
            <td>
              <a-popover placement="topLeft">
                <template slot="content">
                  <p>Content</p>
                  <p>Content</p>
                </template>
                <template slot="title">
                  <span>Title</span>
                </template>
                <a-button>TL</a-button>
              </a-popover>
            </td>
            <td>
              <a-popover placement="top" :visible="true">
                <template slot="content">
                  <p>Content</p>
                  <p>Content</p>
                </template>
                <template slot="title">
                  <span>Title</span>
                </template>
                <a-button>Top</a-button>
              </a-popover>
            </td>
            <td>
              <a-popover placement="topRight">
                <template slot="content">
                  <p>Content</p>
                  <p>Content</p>
                </template>
                <template slot="title">
                  <span>Title</span>
                </template>
                <a-button>TR</a-button>
              </a-popover>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <a-popover placement="leftTop">
                <template slot="content">
                  <p>Content</p>
                  <p>Content</p>
                </template>
                <template slot="title">
                  <span>Title</span>
                </template>
                <a-button>LT</a-button>
              </a-popover>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <a-popover placement="rightTop">
                <template slot="content">
                  <p>Content</p>
                  <p>Content</p>
                </template>
                <template slot="title">
                  <span>Title</span>
                </template>
                <a-button>RT</a-button>
              </a-popover>
            </td>
          </tr>
          <tr>
            <td>
              <a-popover placement="left">
                <template slot="content">
                  <p>Content</p>
                  <p>Content</p>
                </template>
                <template slot="title">
                  <span>Title</span>
                </template>
                <a-button>Left</a-button>
              </a-popover>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <a-popover placement="right" :visible="true">
                <template slot="content">
                  <p>Content</p>
                  <p>Content</p>
                </template>
                <template slot="title">
                  <span>Title</span>
                </template>
                <a-button>Right</a-button>
              </a-popover>
            </td>
          </tr>
          <tr>
            <td>
              <a-popover placement="leftBottom">
                <template slot="content">
                  <p>Content</p>
                  <p>Content</p>
                </template>
                <template slot="title">
                  <span>Title</span>
                </template>
                <a-button>LB</a-button>
              </a-popover>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <a-popover placement="rightBottom">
                <template slot="content">
                  <p>Content</p>
                  <p>Content</p>
                </template>
                <template slot="title">
                  <span>Title</span>
                </template>
                <a-button>RB</a-button>
              </a-popover>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <a-popover placement="bottomLeft">
                <template slot="content">
                  <p>Content</p>
                  <p>Content</p>
                </template>
                <template slot="title">
                  <span>Title</span>
                </template>
                <a-button>BL</a-button>
              </a-popover>
            </td>
            <td>
              <a-popover placement="bottom">
                <template slot="content">
                  <p>Content</p>
                  <p>Content</p>
                </template>
                <template slot="title">
                  <span>Title</span>
                </template>
                <a-button>Bottom</a-button>
              </a-popover>
            </td>
            <td>
              <a-popover placement="bottomRight">
                <template slot="content">
                  <p>Content</p>
                  <p>Content</p>
                </template>
                <template slot="title">
                  <span>Title</span>
                </template>
                <a-button>BR</a-button>
              </a-popover>
            </td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </div>

      <br />
      <br />
      <h2>Tooltip</h2>
      <div style="padding: 50px 200px;">
        <table class="conf">
          <tr>
            <td>&nbsp;</td>
            <td>
              <a-tooltip placement="topLeft">
                <template slot="title">
                  <span>Текст подсказки</span>
                </template>
                <a-button>TL</a-button>
              </a-tooltip>
            </td>
            <td>
              <a-tooltip placement="top" :visible="true">
                <template slot="title">
                  <span>Текст подсказки</span>
                </template>
                <a-button>Top</a-button>
              </a-tooltip>
            </td>
            <td>
              <a-tooltip placement="topRight">
                <template slot="title">
                  <span>Текст подсказки</span>
                </template>
                <a-button>TR</a-button>
              </a-tooltip>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <a-tooltip placement="leftTop">
                <template slot="title">
                  <span>prompt<br />text</span>
                </template>
                <a-button>LT</a-button>
              </a-tooltip>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <a-tooltip placement="rightTop">
                <template slot="title">
                  <span>prompt<br />text</span>
                </template>
                <a-button>RT</a-button>
              </a-tooltip>
            </td>
          </tr>
          <tr>
            <td>
              <a-tooltip placement="left" :visible="true">
                <template slot="title">
                  <span>Текст подсказки</span>
                </template>
                <a-button>Left</a-button>
              </a-tooltip>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <a-tooltip placement="right" :visible="true">
                <template slot="title">
                  <span>Текст подсказки</span>
                </template>
                <a-button>Right</a-button>
              </a-tooltip>
            </td>
          </tr>
          <tr>
            <td>
              <a-tooltip placement="leftBottom">
                <template slot="title">
                  <span>prompt<br />text</span>
                </template>
                <a-button>LB</a-button>
              </a-tooltip>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <a-tooltip placement="rightBottom">
                <template slot="title">
                  <span>prompt<br />text</span>
                </template>
                <a-button>RB</a-button>
              </a-tooltip>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <a-tooltip placement="bottomLeft">
                <template slot="title">
                  <span>Текст подсказки</span>
                </template>
                <a-button>BL</a-button>
              </a-tooltip>
            </td>
            <td>
              <a-tooltip placement="bottom" :visible="true">
                <template slot="title">
                  <span>Текст подсказки</span>
                </template>
                <a-button>Bottom</a-button>
              </a-tooltip>
            </td>
            <td>
              <a-tooltip placement="bottomRight">
                <template slot="title">
                  <span>Текст подсказки</span>
                </template>
                <a-button>BR</a-button>
              </a-tooltip>
            </td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </div>
      <br />
      <br />

      <h2>Popover/Tooltip without arrow</h2>
      <div style="padding: 50px 200px 100px;">
        <a-popover placement="bottom" :arrow="false">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-button>TL</a-button>
        </a-popover>

        <a-tooltip placement="bottomRight" :arrow="false">
          <template slot="title">
            <span>Текст подсказки</span>
          </template>
          <a-button>BR</a-button>
        </a-tooltip>
      </div>

      <h2>Input search</h2>
      <div>
        <a-input-search placeholder="input search example" style="width: 200px" />

        <a-input-search
          placeholder="icon-position=before"
          style="width: 200px"
          icon-position="before"
        />

        <a-input-search
          placeholder="disable icon events"
          style="width: 200px"
          :disable-icon-events="true"
        />
      </div>

      <br /><br />
      <h2>Icons</h2>
      <div>
        <a-icon type="mtr-eye" />
        <a-icon type="mtr-eye-off" />
        <a-icon type="eye" />
      </div>

      <br /><br />
      <h2>Typography</h2>
      <div style="padding-left: 30px;">
        <a-title>h1. Ant Design</a-title>
        <a-title :level="2">h2. Ant Design</a-title>
        <a-title :level="3">h3. Ant Design</a-title>
        <a-title :level="4">h4. Ant Design</a-title>
        <br />
        <a-paragraph>Параграф</a-paragraph>
        <br />
        <a-text>Ant Design</a-text>
        <br />
        <a-text type="secondary">Ant Design</a-text>
        <br />
        <a-text type="warning">Ant Design</a-text>
        <br />
        <a-text type="danger">Ant Design</a-text>
        <br />
        <a-text disabled>Ant Design</a-text>
        <br />
        <a-text mark>Ant Design</a-text>
        <br />
        <a-text code>Ant Design</a-text>
        <br />
        <a-text underline>Ant Design</a-text>
        <br />
        <a-text delete>Ant Design</a-text>
        <br />
        <a-text strong>Ant Design</a-text>
        <br />
        <br />
        <a-paragraph :editable="{ onChange: () => {} }">Test paragraph</a-paragraph>
        <a-paragraph copyable>This is a copyable text.</a-paragraph>
        <a-paragraph :copyable="{ text: 'Hello, Ant Design!' }">Replace copy text.</a-paragraph>

        <br />
        <br />
        <a-paragraph>
          Text text <a class="ant-link-secondary">Link secondary</a> text.
        </a-paragraph>
        <br />
        <a-paragraph ellipsis style="width: 250px; border: 1px dashed rgba(0,0,0,0.25);">
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team.
        </a-paragraph>

        <a-paragraph
          :ellipsis="{ rows: 3, expandable: true, suffix: '-- THIS IS SUFFIX' }"
          style="width: 250px; border: 1px dashed rgba(0,0,0,0.25);"
        >
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team.
        </a-paragraph>
      </div>
    </div>
  </div>
</template>

<script>
import AInputGroup from 'ant-design-vue/input/Group';
export default {
  name: 'Demo',
  components: { AInputGroup },
};
</script>
