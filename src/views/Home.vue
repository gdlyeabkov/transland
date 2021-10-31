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
                <span class="material-icons">
                  mic
                </span>
                <span class="material-icons">
                  volume_up
                </span>
              </div>
              <div>
                <span>
                  {{ inputWords.length }} / 5000
                </span>
                <span class="material-icons">
                  arrow_drop_down
                </span> 
                <span class="material-icons">
                  keyboard
                </span>
              </div>
            </div>
          </div>
          <div class="translatorOutput">
            <div class="translatorOutputContent">
              <textarea ref="outputWordsRef" v-model="outputWords" disabled>
                
              </textarea>
              <span class="material-icons">
                star_outlined
              </span>
            </div>
            <div class="translatorInputFooter">
              <div>
                <span class="material-icons">
                  volume_up
                </span>
              </div>
              <div>
                <span @click="copy()" class="material-icons">
                  content_copy
                </span>
                <span class="material-icons">
                  edit
                </span>
                <span class="material-icons">
                  share
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  </div>
</template>

<script>
// const SMS = require('simplefreesms');

export default {
  name: 'Home',
  data(){
    return {
      inputWords: '',
      outputWords: '',
      inputLanguage: 'ru',
      outputLanguage: 'en',
    }
  },
  mounted(){
    // SMS.sendStatic('XXXXXXXX', 'XXXXXXXXXXXXXX', 'message').then(function() {
    //   console.log('sended');
    // }).catch(function(err) {
    //   console.log(`not sended: ${err}`);
    // });
  }, 
  methods: {
    swapLanguages(){
      let tempLanuage = this.inputLanguage
      this.inputLanguage = this.outputLanguage
      this.outputLanguage = tempLanuage
    },
    clearInput(){
      this.inputWords = ''
    },
    copy() {
      this.$refs.outputWordsRef.selecteAll()
      document.execCommand('copy')
    },
    reactiveTranslate() {
      fetch(`http://localhost:4000/api/translate/?inputlanguage=${this.inputLanguage}&outputlanguage=${this.outputLanguage}&words=${this.inputWords}`, {
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
        }
      });
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
    background-color: rgb(225, 225, 225);
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
  }

  .languageSelector {
    border: none;
  }


</style>