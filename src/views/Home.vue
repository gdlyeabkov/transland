<template>
  <div>
    <div class="header">
      <div>
        <span class="material-icons">
          menu
        </span>
        <span class="material-icons">
          translate
        </span>
        <span>
          Переводчик
        </span>
      </div>
      <div>
        <div class="avatar">
          Г
        </div>
        <span class="material-icons">
          apps
        </span>
      </div>
    </div>
    <div class="main">
      <div class="translator">
        <div class="translatorHeader">
          <div>
            <span>
              Определить язык
            </span>
            <select v-model="inputLanguage" class="languageSelector w-50 form-select" aria-label="Default select example">
              <option value="az">Азербайджанский</option>
              <option value="sq">Албанский</option>
              <option value="am">Амхарский</option>
              <option value="en">Английский</option>
              <option value="ar	">Арабский</option>
              <option value="hy">Армянский</option>
              <option value="af">Аффриканс</option>
              <option value="eu">Баскский</option>
              <option value="be">Белорусский</option>
              <option value="bn">Бенгальский</option>
              <option value="my">Бирманский</option>
              <option value="bg">Болгарский</option>
              <option value="bs">Боснийский</option>
              <option value="cy">Валлийский</option>
              <option value="hu">Венгерский</option>
              <option value="vi">Вьетнамский</option>
              <option value="gl">Галийский</option>
              <option value="el">Греческий</option>
              <option value="ka">Грузинский</option>
              <option value="gu">Гуджарати</option>
              <option value="da">Датский</option>
              <option value="zu">Зулу</option>
              <option value="he">Иврит</option>
              <option value="ig">Игбо</option>
              <option value="yi">Идиш</option>
              <option value="id">Индонезийский</option>
              <option value="ga">Ирландский</option>
              <option value="is">Исландский</option>
              <option value="es">Испанский</option>
              <option value="it">Итальянский</option>
              <option value="yo">Йоруба</option>
              <option value="kk">Казахский</option>
              <option value="kn">Каннада</option>
              <option value="ca">Каталаский</option>
              <option value="ky	">Киргизский</option>
              <option value="zh-cn">Китайский</option>
              <option value="ko">Корейский</option>
              <option value="co">Корсиканский</option>
              <option value="km">Кхмерский</option>
              <option value="lo">Лаосский</option>
              <option value="la">Латиский</option>
              <option value="lv">Латышский</option>
              <option value="lt">Литовский</option>
              <option value="lb">Люксембургский</option>
              <option value="mk">Македонский</option>
              <option value="mg">Малагасийский</option>
              <option value="ms">Малайский</option>
              <option value="ml">Малаялам</option>
              <option value="mt">Мальтийский</option>
              <option value="mi">Маори</option>
              <option value="mn">Монгольский</option>
              <option value="de">Немецкий</option>
              <option value="ne">Непальский</option>
              <option value="nl">Нидерланский</option>
              <option value="no">Норвежский</option>
              <option value="or">Ория</option>
              <option value="fa">Персидский</option>
              <option value="pl">Польский</option>
              <option value="pt">Португальский</option>
              <option value="ps">Пушту</option>
              <option value="rw">Руанда</option>
              <option value="ro">Румынский</option>
              <option value="ru">Русский</option>
              <option value="sm">Самоанский</option>
              <option value="sr">Сербский</option>
              <option value="si">Сингальский</option>
              <option value="sd">Синдхи</option>
              <option value="sk">Словацкий</option>
              <option value="sl">Словенский</option>
              <option value="so">Сомалийский</option>
              <option value="sw">Суахили</option>
              <option value="su">Суданский</option>
              <option value="tg">Таджикский</option>
              <option value="th">Тайский</option>
              <option value="ta">Тамильский</option>
              <option value="tt">Татарский</option>
              <option value="te">Телугу</option>
              <option value="tr">Турецкий</option>
              <option value="tk">Туркменский</option>
              <option value="uz">Узбекский</option>
              <option value="ug">Уйгурский</option>
              <option value="uk">Украинский</option>
              <option value="ur">Урду</option>
              <option value="fl">Филиппинский</option>
              <option value="fi">Финский</option>
              <option value="fr">Французский</option>
              <option value="fy">Фризский</option>
              <option value="ha">Хауса</option>
              <option value="hi">Хинди</option>
              <option value="hr">Хорватский</option>
              <option value="cs">Чешский</option>
              <option value="sv">Шведский</option>
              <option value="sn">Шона</option>
              <option value="sco">Шотландский</option>
              <option value="eo">Эсперанто</option>
              <option value="et">Эстонский</option>
              <option value="jv">Яванский</option>
              <option value="ja">Японский</option>
            </select>
          </div>
          <span @click="swapLanguages()" class="material-icons clickable">
            swap_horiz
          </span>
          <div class="languageOutput">
            <select v-model="outputLanguage" class="languageSelector w-50 form-select" aria-label="Default select example">
              <option value="az">Азербайджанский</option>
              <option value="sq">Албанский</option>
              <option value="am">Амхарский</option>
              <option value="en">Английский</option>
              <option value="ar	">Арабский</option>
              <option value="hy">Армянский</option>
              <option value="af">Аффриканс</option>
              <option value="eu">Баскский</option>
              <option value="be">Белорусский</option>
              <option value="bn">Бенгальский</option>
              <option value="my">Бирманский</option>
              <option value="bg">Болгарский</option>
              <option value="bs">Боснийский</option>
              <option value="cy">Валлийский</option>
              <option value="hu">Венгерский</option>
              <option value="vi">Вьетнамский</option>
              <option value="gl">Галийский</option>
              <option value="el">Греческий</option>
              <option value="ka">Грузинский</option>
              <option value="gu">Гуджарати</option>
              <option value="da">Датский</option>
              <option value="zu">Зулу</option>
              <option value="he">Иврит</option>
              <option value="ig">Игбо</option>
              <option value="yi">Идиш</option>
              <option value="id">Индонезийский</option>
              <option value="ga">Ирландский</option>
              <option value="is">Исландский</option>
              <option value="es">Испанский</option>
              <option value="it">Итальянский</option>
              <option value="yo">Йоруба</option>
              <option value="kk">Казахский</option>
              <option value="kn">Каннада</option>
              <option value="ca">Каталаский</option>
              <option value="ky	">Киргизский</option>
              <option value="zh-cn">Китайский</option>
              <option value="ko">Корейский</option>
              <option value="co">Корсиканский</option>
              <option value="km">Кхмерский</option>
              <option value="lo">Лаосский</option>
              <option value="la">Латиский</option>
              <option value="lv">Латышский</option>
              <option value="lt">Литовский</option>
              <option value="lb">Люксембургский</option>
              <option value="mk">Македонский</option>
              <option value="mg">Малагасийский</option>
              <option value="ms">Малайский</option>
              <option value="ml">Малаялам</option>
              <option value="mt">Мальтийский</option>
              <option value="mi">Маори</option>
              <option value="mn">Монгольский</option>
              <option value="de">Немецкий</option>
              <option value="ne">Непальский</option>
              <option value="nl">Нидерланский</option>
              <option value="no">Норвежский</option>
              <option value="or">Ория</option>
              <option value="fa">Персидский</option>
              <option value="pl">Польский</option>
              <option value="pt">Португальский</option>
              <option value="ps">Пушту</option>
              <option value="rw">Руанда</option>
              <option value="ro">Румынский</option>
              <option value="ru">Русский</option>
              <option value="sm">Самоанский</option>
              <option value="sr">Сербский</option>
              <option value="si">Сингальский</option>
              <option value="sd">Синдхи</option>
              <option value="sk">Словацкий</option>
              <option value="sl">Словенский</option>
              <option value="so">Сомалийский</option>
              <option value="sw">Суахили</option>
              <option value="su">Суданский</option>
              <option value="tg">Таджикский</option>
              <option value="th">Тайский</option>
              <option value="ta">Тамильский</option>
              <option value="tt">Татарский</option>
              <option value="te">Телугу</option>
              <option value="tr">Турецкий</option>
              <option value="tk">Туркменский</option>
              <option value="uz">Узбекский</option>
              <option value="ug">Уйгурский</option>
              <option value="uk">Украинский</option>
              <option value="ur">Урду</option>
              <option value="fl">Филиппинский</option>
              <option value="fi">Финский</option>
              <option value="fr">Французский</option>
              <option value="fy">Фризский</option>
              <option value="ha">Хауса</option>
              <option value="hi">Хинди</option>
              <option value="hr">Хорватский</option>
              <option value="cs">Чешский</option>
              <option value="sv">Шведский</option>
              <option value="sn">Шона</option>
              <option value="sco">Шотландский</option>
              <option value="eo">Эсперанто</option>
              <option value="et">Эстонский</option>
              <option value="jv">Яванский</option>
              <option value="ja">Японский</option>
            </select>
          </div>
        </div>
        <div class="translatorIO">
          <div class="translatorInput">
            <div class="translatorInputContent">
              <textarea @input="reactiveTranslate()" v-model="inputWords">
              
              </textarea>
              <span @click="clearInput()" v-if="inputWords.length >= 1" class="material-icons clickable">
                close
              </span>
            </div>
            <div class="translatorInputFooter">
              <div>
                <span title="Начать перевод речи" v-if="!isMicro" @click="isMicro = !isMicro; tempInputWords = inputWords; inputWords = 'Говорите'; listen()" class="clickable material-icons">
                  mic
                </span>
                <!-- <span title="Остановить перевод речи" v-if="isMicro"  @click="isMicro = !isMicro; inputWords = tempInputWords; stopListen()" class="clickable material-icons"> -->
                <span title="Остановить перевод речи" v-if="isMicro"  @click="isMicro = !isMicro; stopListen()" class="clickable material-icons">
                  stop
                </span>
                <span v-if="inputWords.length >= 1" @click="speak('input')" class="clickable material-icons">
                  volume_up
                </span>
              </div>
              <div>
                <span>
                  {{ inputWords.length }} / 5000
                </span>
                <div @click="virtualKeyboard = !virtualKeyboard" class="clickable">
                  <span :style="`color: ${virtualKeyboard ? 'rgb(0, 0, 0)' : 'rgb(175, 175, 175)'}`" class="material-icons">
                    keyboard
                  </span>
                  <span class="material-icons">
                    arrow_drop_down
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="translatorOutput"  :style="`background-color: rgb(${inputWords.length >= 1 ? '225, 225, 225' : '255, 255, 255'})`">
            <div class="translatorOutputContent">
              <textarea :disabled="!outputEdittable" ref="outputWordsRef" v-model="outputWords">
                
              </textarea>
              <span v-if="inputWords.length >= 1" class="material-icons">
                star_outlined
              </span>
            </div>
            <div  v-if="inputWords.length >= 1" class="translatorInputFooter">
              <div>
                <span @click="speak('output')" class="clickable material-icons">
                  volume_up
                </span>
              </div>
              <div>
                <span title="Копировать перевод" @click="copy()" class="clickable material-icons">
                  content_copy
                </span>
                <span title="Предложить исправление" @click="outputEdittable = !outputEdittable" class="clickable material-icons">
                  edit
                </span>
                <span @click="isShare = !isShare" title="Отправить перевод" class="clickable material-icons">
                  share
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="feedback">
      <span @click="feedbackDialog = true">
        Отправить отзыв
      </span>
    </div>
    <div class="footer">
      <div>
        <span class="icon material-icons">
          history
        </span>
        <span>
          История
        </span>
      </div>
      <div>
        <span class="icon material-icons">
          star
        </span>
        <span>
          Сохранённые
        </span>
      </div>
      <div>
        <span class="icon material-icons">
          group
        </span>
        <span>
          Предложить перевод
        </span>
      </div>
    </div>
    <div v-if="feedbackDialog" class="feedbackDialog">
      <div class="feedbackDialogHeader">
        <h5>
          Отправить отзыв
        </h5>
      </div>
      <div class="feedbackDialogBody">
        <textarea placeholder="Не включайте в отзыв конфиденциальную информацию. Если у вас есть вопросы в том числе правового характера, посетите Справочный центр или обратитесь в службу поддержки." v-model="feedback"></textarea>
        <div>
          <input type="checkbox" v-model="attachScreenshot">
          <span>
            Прикрепить скриншот
          </span>
        </div>
        <span>
          Некоторая информация об аккаунте и системе может быть отправлена в Google. Это помогает нам устранять неполадки и улучшать наши сервисы. Ваши данные будут обрабатываться в соответствии с Политикой конфиденциальности и Условиями использования. Мы можем запрашивать у вас дополнительные сведения или сообщать вам об обновлениях по электронной почте. Подать запрос на изменение контента в связи с нарушением законодательства можно на этой странице.
        </span>
      </div>
      <hr />
      <div class="feedbackDialogFooter">
        <span @click="feedbackDialog = false" class="feedbackCancelBtn">
          Отмена
        </span>
        <span @click="feedbackDialog = false" class="feedbackSubmitBtn">
          Отправить
        </span>
      </div>
    </div>
    <div v-if="emailDialog" class="backdrop">
      <div class="emailDialog">
        <div class="emailDialogHeader">
          <span>
            Отправка почты
          </span>
          <span @click="emailDialog = false" class="material-icons clickable">
            close
          </span>
        </div>
        <div class="inputData">
          <span>
            Введите ваш email
          </span>
          <input v-model="email" type="email" class="w-50 form-control" />
          <button @click="sendMail()" class="btn btn-success">
            Отправить на почту
          </button>
        </div>
      </div>
    </div>
    <div v-if="isShare" class="shareDialog">
      <span>
        Отправить перевод
      </span>
      <div>
        <div @click="emailDialog = true" class="clickable">
          <div class="">
            <span class="material-icons">
              mail_outline
            </span>
          </div>
          <span>
            Электронная почта
          </span>
        </div>
        <div @click="openTwitter()" class="clickable">
          <div class="twitter">

          </div>
          <span>
            Твиттер
          </span>
        </div>
      </div>
    </div>
    <div v-if="yourNotListened" class="yourNotListened">
      Вас не слышно
    </div>
    <div v-if="inputWords.length >= 5000" class="wordsLimit">
      <span>
        Максимальное количество символов 5000. Чтобы переводить дальше, пользуйтесь стрелками.
      </span>
      <div class="actions">
        <div>
          <span class="material-icons">
            keyboard_arrow_left
          </span>
          <span>
            Назад
          </span>
        </div>
        <div>
          <span>
            Далее
          </span>
          <span class="material-icons">
            keyboard_arrow_right
          </span>
        </div>
      </div>
      <button class="btn btn-">
        ОК
      </button>
    </div>
    <div v-if="virtualKeyboard" ref="keyboard" class="virtualKeyboard">
      <div @mousemove="moveKeyboard($event)" @mousedown="startMoveKeyboard()" @mouseup="stopMoveKeyboard()" class="virtualKeyboardHeader">
        <div>English</div>
        <div>
          <span @click="closeKeyboard()" class="material-icons clickable">
            close
          </span>
        </div>
      </div>
      <div class="keysRow">
        <div @click="inputWords += isShift ?
          '~'
        :
          '`'; reactiveTranslate()" class="key">{{
        isShift ?
          '~'
        :
          '`'
        }}</div>
        <div @click="inputWords += isShift ?
          '!'
        :
          '1'; reactiveTranslate()" class="key">{{
        isShift ?
          '!'
        :
          '1'
        }}</div>
        <div @click="inputWords += isShift ?
          '@'
        :
          '2'; reactiveTranslate()" class="key">{{
        isShift ?
          '@'
        :
          '2'
        }}</div>
        <div @click="inputWords += isShift ?
          '#'
        :
          '3'; reactiveTranslate()" class="key">{{
        isShift ?
          '#'
        :
          '3'
        }}</div>
        <div @click="inputWords += isShift ?
          '$'
        :
          '4'; reactiveTranslate()" class="key">{{
        isShift ?
          '$'
        :
          '4'
        }}</div>
        <div @click="inputWords += isShift ?
          '%'
        :
          '5'; reactiveTranslate()" class="key">{{
        isShift ?
          '%'
        :
          '5'
        }}</div>
        <div @click="inputWords += isShift ?
          '^'
        :
          '6'; reactiveTranslate()" class="key">{{
        isShift ?
          '^'
        :
          '6'
        }}</div>
        <div @click="inputWords += isShift ?
          '&'
        :
          '7'; reactiveTranslate()" class="key">{{
        isShift ?
          '&'
        :
          '7'
        }}</div>
        <div @click="inputWords += isShift ?
          '*'
        :
          '8'; reactiveTranslate()" class="key">{{
        isShift ?
          '*'
        :
          '8'
        }}</div>
        <div @click="inputWords += isShift ?
          '('
        :
          '9'; reactiveTranslate()" class="key">{{
        isShift ?
          '('
        :
          '9'
        }}</div>
        <div @click="inputWords += isShift ?
          ')'
        :
          '0'; reactiveTranslate()" class="key">{{
        isShift ?
          ')'
        :
          '0'
        }}</div>
        <div @click="inputWords += isShift ?
          '_'
        :
          '-'; reactiveTranslate()" class="key">{{
        isShift ?
          '_'
        :
          '-'
        }}</div>
        <div @click="inputWords += isShift ?
          '+'
        :
          '='; reactiveTranslate()" class="key">{{
        isShift ?
          '+'
        :
          '='
        }}</div>
        <div @click="inputWords.length >= 1 ? inputWords = inputWords.substring(0, inputWords.length - 1) : inputWords = ''" class="backSpaceKey key">
          <span class="material-icons">
            backspace
          </span>
        </div>
      </div>
      <div class="keysRow">
        <div @click="inputWords += 'q'; reactiveTranslate();" class="key">q</div>
        <div @click="inputWords += 'w'; reactiveTranslate();" class="key">w</div>
        <div @click="inputWords += 'e'; reactiveTranslate();" class="key">e</div>
        <div @click="inputWords += 'r'; reactiveTranslate();" class="key">r</div>
        <div @click="inputWords += 't'; reactiveTranslate();" class="key">t</div>
        <div @click="inputWords += 'y'; reactiveTranslate()" class="key">y</div>
        <div @click="inputWords += 'u'; reactiveTranslate()" class="key">u</div>
        <div @click="inputWords += 'i'; reactiveTranslate()" class="key">i</div>
        <div @click="inputWords += 'o'; reactiveTranslate()" class="key">o</div>
        <div @click="inputWords += 'p'; reactiveTranslate()" class="key">p</div>
        <div @click="inputWords += isShift ?
          '{'
        :
          '['; reactiveTranslate()" class="key">{{
        isShift ?
          '{'
        :
          '['
        }}</div>
        <div @click="inputWords += isShift ?
          '}'
        :
          ']'; reactiveTranslate()" class="key">{{
        isShift ?
          '}'
        :
          ']'
        }}</div>
        <div @click="inputWords += isShift ?
          '|'
        :
          '\\'; reactiveTranslate()" class="key">{{
        isShift ?
          '|'
        :
          '\\'
        }}</div>
      </div>
      <div class="keysRow">
        <div @click="homePress()" :class="{ keyHold: isHome, homeKey: true, key: true }">
          <span class="material-icons">
            home
          </span>
        </div>
        <div @click="inputWords += 'a'; reactiveTranslate()" class="key">a</div>
        <div @click="inputWords += 's'; reactiveTranslate()" class="key">s</div>
        <div @click="inputWords += 'd'; reactiveTranslate()" class="key">d</div>
        <div @click="inputWords += 'f'; reactiveTranslate()" class="key">f</div>
        <div @click="inputWords += 'g'; reactiveTranslate()" class="key">g</div>
        <div @click="inputWords += 'h'; reactiveTranslate()" class="key">h</div>
        <div @click="inputWords += 'j'; reactiveTranslate()" class="key">j</div>
        <div @click="inputWords += 'k'; reactiveTranslate()" class="key">k</div>
        <div @click="inputWords += 'l'; reactiveTranslate()" class="key">l</div>
        <div @click="inputWords += isShift ?
          ':'
        :
          ';'; reactiveTranslate()" class="key">{{
        isShift ?
          ':'
        :
          ';'
        }}</div>
        <div @click="inputWords += (isShift ?
          '\u0022'
        :
          '\''); reactiveTranslate()" class="key">{{
        isShift ?
          '\"'
        :
          '\''
        }}</div>
      </div>
      <div class="keysRow">
        <div @click="shiftPress()" :class="{ shiftKey: true, key: true, keyHold: isShift }">
          <span class="material-icons">
            file_upload
          </span>
        </div>
        <div @click="inputWords += 'z'; reactiveTranslate()" class="key">z</div>
        <div @click="inputWords += 'x'; reactiveTranslate()" class="key">x</div>
        <div @click="inputWords += 'c'; reactiveTranslate()" class="key">c</div>
        <div @click="inputWords += 'v'; reactiveTranslate()" class="key">v</div>
        <div @click="inputWords += 'b'; reactiveTranslate()" class="key">b</div>
        <div @click="inputWords += 'n'; reactiveTranslate()" class="key">n</div>
        <div @click="inputWords += 'm'; reactiveTranslate()" class="key">m</div>
        <div @click="inputWords += isShift ?
          '<'
        :
          ','; reactiveTranslate()" class="key">{{
        isShift ?
          '\u003c'
        :
          ','
        }}</div>
        <div @click="inputWords += isShift ?
          '>'
        :
          '.'; reactiveTranslate()" class="key">{{
        isShift ?
          '>'
        :
          '.'
        }}</div>
        <div @click="inputWords += isShift ?
          '?'
        :
          '/'; reactiveTranslate()" class="key">{{
        isShift ?
          '?'
        :
          '/'
        }}</div>
        <div @click="shiftPress()" :class="{ shiftKey: true, key: true, keyHold: isShift }">
          <span class="material-icons">
            file_upload
          </span>
        </div>
      </div>
      <div class="keysRow">
        <div class="key ctrlAltKey">Ctrl + Alt</div>
        <div @click="inputWords += ' '" class="key spaceKey"></div>
        <div class="key ctrlAltKey">Ctrl + Alt</div>
      </div>
    </div>
  </div>
</template>

<script>

import speak from "offline-tts";

const MicRecorder = require('mic-recorder-to-mp3');

import STT from 'stt.js';

const baseUrl = 'https://inky-clever-coffee.glitch.me'

export default {
  name: 'Home',
  data(){
    return {
      inputWords: '',
      outputWords: 'Перевод',
      inputLanguage: 'ru',
      outputLanguage: 'en',
      speakUrl: '',
      outputEdittable: false,
      virtualKeyboard: false,
      isMicro: false,
      tempInputWords: '',
      yourNotListened: false,
      isShare: false,
      recorder: null,
      stt: null,
      intermeddiateResult: '',
      emailDialog: false,
      email: '',
      keyboardIsMove: false,
      isShift: false,
      isHome: false,
      feedbackDialog: false,
      feedback: '',
      attachScreenshot: false,
    }
  }, 
  methods: {
    homePress(){
      this.isHome = !this.isHome
      Array.from(document.querySelectorAll('.key')).map(key => {
        if(!key.classList.contains("spaceKey") && !key.classList.contains("homeKey") && !key.classList.contains("shiftKey") && !key.classList.contains("backSpaceKey") && !key.classList.contains("ctrlAltKey") && !key.classList.contains("specialKey")) {
          if(this.isHome) {
            key.textContent = key.textContent.toUpperCase()
          } else if(!this.isHome) {
            key.textContent = key.textContent.toLowerCase()
          }
        }
      })
    },
    shiftPress(){
      this.isShift = !this.isShift
      Array.from(document.querySelectorAll('.key')).map(key => {
        if(!key.classList.contains("spaceKey") && !key.classList.contains("homeKey") && !key.classList.contains("shiftKey") && !key.classList.contains("backSpaceKey") && !key.classList.contains("ctrlAltKey") && !key.classList.contains("specialKey")) {
          if(this.isShift) {
            key.textContent = key.textContent.toUpperCase()
          } else if(!this.isShift) {
            key.textContent = key.textContent.toLowerCase()
          }
        }
      })
    },
    moveKeyboard(event){
      if(this.keyboardIsMove) {
        this.$refs.keyboard.style.top
        this.$refs.keyboard.style = `
          position: absolute;
          top: ${event.y - 35}px;
          left: ${event.x - 35}px;
        ` 
      }      
    },
    startMoveKeyboard(){
      if(!this.keyboardIsMove) {
        this.keyboardIsMove = true
      }
    },
    stopMoveKeyboard(){
      this.keyboardIsMove = false
    },
    sendMail() {
      fetch(`${baseUrl}/api/send/?email=${this.email}&translate=${this.outputWords}`, {
        mode: 'cors',
        method: 'GET'
      }).then(response => response.body).then(rb  => {
        const reader = rb.getReader()
        return new ReadableStream({
          start(controller) {
            function push() {
              reader.read().then( ({done, value}) => {
                if (done) {
                  console.log('done', done);
                  controller.close();
                  return;
                }
                controller.enqueue(value);
                console.log(done, value);
                push();
              })
            }
            push();
          }
        });
      }).then(stream => {
        return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
      })
      .then(result => {
        if(JSON.parse(result).status.includes('OK')) {
          alert('Сообщение отправлено')
          this.emailDialog = false
        } else if(JSON.parse(result).status.includes('Error')) {
          alert('Сообщение не отправлено')
          this.emailDialog = false
        }
      });
    },
    openTwitter(){
      window.open(`https://twitter.com/intent/tweet?text=${this.outputWords}`)
    },
    stopListen(){
      this.recorder
      .stop()
      .getMp3().then(([buffer, blob]) => {
        const file = new File(buffer, './audios/me-at-thevoice.mp3', {
          type: blob.type,
          lastModified: Date.now()
        });
        
        this.stt.end();
      
      }).catch((e) => {
        console.log(`error: ${e}`);
      });
    },
    listen(){
      
      this.recorder = new MicRecorder({
        bitRate: 128
      });
      this.recorder.start().then(() => {
        this.stt = new STT({
          continuous: false,
          interimResults: true,
        });
        this.stt.on('start', () => {
          // handle start event
        });
        this.stt.on('end', () => {
          // handle end event
          this.inputWords = this.intermeddiateResult
          this.reactiveTranslate()
          this.isMicro = false
        });
        this.stt.on('result', ({ finalTranscript, interimTranscript }) => {
          // handle recognition result
          this.intermeddiateResult = finalTranscript
        });
        this.stt.on('error', (error) => {
          console.log('error :>> ', error);
          // no-speech|audio-capture|not-allowed|not-supported-browser
          this.yourNotListened = true
        });
        this.stt.start();
      }).catch((e) => {
        console.log(`error: ${e}`);
      });

    },
    closeKeyboard(){
      this.virtualKeyboard = !this.virtualKeyboard
    },
    async speak(source){
      if(source.includes('input')) {
        speak(
          // text
          this.inputWords,
          // voice
          2,
          // speed
          1.5,
          // volume
          0.8,
          // pitch
          0.6
        );
      } else {
        speak(
          // text
          this.outputWords,
          // voice
          2,
          // speed
          1.5,
          // volume
          0.8,
          // pitch
          0.6
        );
      }
    },
    swapLanguages(){
      let tempLanuage = this.inputLanguage
      this.inputLanguage = this.outputLanguage
      this.outputLanguage = tempLanuage
      this.reactiveTranslate()
    },
    clearInput(){
      this.inputWords = ''
      this.outputWords = 'Перевод'
    },
    copy() {
      navigator.clipboard.writeText(this.outputWords)
    },
    reactiveTranslate() {
      if(this.inputWords.length <= 5000) {
        fetch(`${baseUrl}/api/translate/?inputlanguage=${this.inputLanguage}&outputlanguage=${this.outputLanguage}&words=${this.inputWords}`, {
          mode: 'cors',
          method: 'GET'
        }).then(response => response.body).then(rb  => {
          const reader = rb.getReader()
          return new ReadableStream({
            start(controller) {
              function push() {
                reader.read().then( ({done, value}) => {
                  if (done) {
                    console.log('done', done);
                    controller.close();
                    return;
                  }
                  controller.enqueue(value);
                  console.log(done, value);
                  push();
                })
              }
              push();
            }
          });
        }).then(stream => {
          return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
        })
        .then(result => {
          if(JSON.parse(result).status.includes('OK')) {
            console.log(`result: ${JSON.parse(result).result}`)
            this.outputWords = JSON.parse(result).result
            
            if(this.inputWords.length <= 0){
              this.outputWords = 'Перевод'
            }
            
          }
        });

      }
    }
  }
}
</script>
<style scoped>

  .header {
    height: 50px;
    display: flex;
    box-sizing: border-box;
    padding: 0px 25px;
    justify-content: space-between;
    border-bottom: 1px solid rgb(200, 200, 200);
  }

  .header > div {
    display: flex;
    align-items: center;
  }

  .header > div > * {
    margin: 0px 10px;
  }

  .avatar {
    border-radius: 100%;
    width: 35px;
    height: 35px;
    background-color: rgb(0, 150, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255);
  }

  .footer {
    display: flex;
    justify-content: center;
  }

  .footer > div {
    margin: 0px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(175, 175, 175);
    width: 200px;
  }

  .icon {
    border-radius: 100%;
    border: 1px solid rgb(200, 200, 200);
    padding: 15px;
    font-size: 36px;
    margin: 10px 0px;
  }

  .translator {
    border: 1px solid rgb(150, 150, 150);
    margin: 50px auto;
    height: 300px;
    width: 85%;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }
  .translatorHeader {
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px 25px;
    border-bottom: 1px solid rgb(150, 150, 150);
  }

  .translatorHeader > div {
    display: flex;
    align-items: center;
    width: 50%;
  }

  .translatorHeader > div > span {
    margin: 0px 25px;
  }

  .translatorIO {
    height: 75%;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .translatorInput {
    box-sizing: border-box;
    padding: 15px;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgb(150, 150, 150);
  }

  .translatorOutput {
    box-sizing: border-box;
    padding: 15px;
    height: 100%;
    display: flex;
    width: 50%;
    flex-direction: column;
  }

  .translatorInputFooter {
    display: flex;
    justify-content: space-between;
  }

  .translatorInputFooter > div {
    display: flex;
  }

  .translatorInputFooter > div > * {
    margin: 0px 10px;
  }

  .translatorInput > div > textarea {
    width: 85%;
    border: none;
    min-height: 175px;
  }

  .translatorOutput > div > textarea {
    width: 85%;
    border: none;
    min-height: 175px;
    background-color: transparent;
  }

  .translatorOutput > div > textarea:disabled {
    background-color: transparent;
  }

  .languageOutput {
    justify-content: flex-end;
  }

  .translatorInputContent {
    display: flex;
  }

  .translatorOutputContent {
    display: flex;
  }

  .clickable {
    cursor: pointer;
    user-select: none;
  }

  .languageSelector {
    border: none;
  }

  .virtualKeyboard {
    box-sizing: border-box;
    padding: 15px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 700px;
    height: 300px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(175, 175, 175);
    border-radius: 8px;
  }

  .keysRow {
    display: flex;
    justify-content: center;
  }

  .key {
    user-select: none;
    cursor: pointer;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(240, 240, 240);
    width: 35px;
    height: 35px;
    border: 1px solid rgb(175, 175, 175);
    border-radius: 8px;
  }

  .key:hover {
    box-shadow: 0px 0px 5px rgb(200, 200, 200);
  }

  .key:active {
    box-shadow: inset 0px 0px 5px rgb(200, 200, 200);
  }

  .spaceKey {
    width: 50%;
  }

  .shiftKey {
    width: 15%;
  }

  .ctrlAltKey {
    width: 15%;
  }

  .virtualKeyboardHeader {
    user-select: none;
    cursor: move;
    display: flex;
    justify-content: space-between;
  }

  .wordsLimit {
    display: flex;
    position: absolute;
    top: 90%;
    left: 7%;
    border: 1px solid rgb(150, 150, 150);
    border-radius: 8px;
    background-color: rgb(50, 150, 255);
    width: 85%;
    height: 50px;
    color: rgb(255, 255, 255);
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }

  .wordsLimit > button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(255, 255, 255);
    width: 85px;
    height: 25px
  }

  .actions {
    display: flex;
  }

  .actions > * {
    margin: 0px 15px;
    display: flex;
    align-items: center;
  }

  .actions > div > * {
    margin: 0px 5px;
  }

  .yourNotListened {
    font-weight: bolder;
    position: absolute;
    width: 350px;
    height: 50px;
    top: 90%;
    left: 5%;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
    border-radius: 8px;
    color: rgb(255, 255, 255);
  }

  .shareDialog {
    position: absolute;
    top: 65%;
    left: 75%;
    width: 250px;
    height: 150px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 5px rgb(150, 150, 150);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .shareDialog > span {
    font-weight: bolder;
    font-size: 18px;
  }

  .shareDialog > div {
    display: flex;
    margin: 10px;
  }

  .shareDialog > div > div {
    display: flex;
    flex-direction: column;
    margin: 0px 25px;
    width: 25%;
    align-items: center;
    text-align: center;
  }

  .shareDialog > div > div > div {
    border-radius: 100%;
    border: 1px solid rgb(200, 200, 200);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(235, 235, 235);
  }

  .twitter {
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png')
  }

  .emailDialog {
    border-radius: 8px;
    position: absolute;
    width: 50%;
    height: 50%;
    top: 25%;
    left: 25%;
    background-color: rgb(50, 0, 165);
    box-sizing: border-box;
    padding: 15px;
  }
  
  .emailDialogHeader {
    display: flex;
    justify-content: space-between;
  }

  .emailDialogHeader > * {
    color: rgb(255, 255, 255);
    font-weight: bolder;
  }

  .backdrop {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 5;
  }

  .inputData {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inputData > span, .inputData > button {
    margin: 25px 0px;
    color: rgb(255, 255, 255);
  }

  .keyHold {
    background-color: rgb(215, 215, 215);
  }

  .feedback {
    justify-content: flex-end;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 0px 25px;
  }

  .feedback > span {
    font-size: 12px;
    cursor: pointer;
  }
  
  .feedback > span:hover {
    text-decoration: underline;
  }

  .feedbackDialog {
    position: absolute;
    top: 5%;
    left: 36%;
    background-color: rgb(255, 255, 255);
    width: 28%;
    height: 70%;
    box-shadow: 0px 0px 15px rgb(150, 150, 150);
  }

  .feedbackDialogHeader {
    background-color: rgb(150, 150, 150);
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 10px;
    color: rgb(255, 255, 255);
  }

  .feedbackDialogBody {
    display: flex;
    flex-direction: column;
  }

  .feedbackDialogBody > textarea {
    height: 100px;
    border: none;
  }

  .feedbackDialogBody > div {
    display: flex;
    align-items: center;
  }

  .feedbackDialogBody > div > * {
    margin: 0px 10px;
  }

  .feedbackDialogBody > span {
    box-sizing: border-box;
    padding: 15px;
    font-size: 12px;
  }

  .feedbackDialogFooter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .feedbackDialogFooter > span {
    cursor: pointer;
    font-weight: bolder;
    margin: 0px 15px;
  }

  .feedbackCancelBtn {
    color: rgb(175, 175, 175);
  }

  .feedbackSubmitBtn {
    color: rgb(0, 100, 255);
  }

</style>