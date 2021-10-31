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
                <span title="Остановить перевод речи" v-if="isMicro"  @click="isMicro = !isMicro; inputWords = tempInputWords" class="clickable material-icons">
                  stop
                </span>
                <span @click="speak('input')" class="clickable material-icons">
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
          <div class="translatorOutput">
            <div class="translatorOutputContent">
              <textarea :disabled="!outputEdittable" ref="outputWordsRef" v-model="outputWords">
                
              </textarea>
              <span class="material-icons">
                star_outlined
              </span>
            </div>
            <div class="translatorInputFooter">
              <div>
                <span @click="speak('output')" class="clickable material-icons">
                  volume_up
                </span>
              </div>
              <div>
                <span @click="copy()" class="clickable material-icons">
                  content_copy
                </span>
                <span @click="outputEdittable = !outputEdittable" class="clickable material-icons">
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
    <div v-if="virtualKeyboard" class="virtualKeyboard">
      <div class="virtualKeyboardHeader">
        <div>English</div>
        <div>
          <span @click="closeKeyboard()" class="material-icons clickable">
            close
          </span>
        </div>
      </div>
      <div class="keysRow">
        <div class="key">`</div>
        <div class="key">1</div>
        <div class="key">2</div>
        <div class="key">3</div>
        <div class="key">4</div>
        <div class="key">5</div>
        <div class="key">6</div>
        <div class="key">7</div>
        <div class="key">8</div>
        <div class="key">9</div>
        <div class="key">0</div>
        <div class="key">-</div>
        <div class="key">=</div>
        <div class="key">
          <span class="material-icons">
            backspace
          </span>
        </div>
      </div>
      <div class="keysRow">
        <div class="key">q</div>
        <div class="key">w</div>
        <div class="key">e</div>
        <div class="key">r</div>
        <div class="key">t</div>
        <div class="key">y</div>
        <div class="key">u</div>
        <div class="key">i</div>
        <div class="key">o</div>
        <div class="key">p</div>
        <div class="key">[</div>
        <div class="key">]</div>
        <div class="key">\</div>
      </div>
      <div class="keysRow">
        <div class="key">
          <span class="material-icons">
            home
          </span>
        </div>
        <div class="key">a</div>
        <div class="key">s</div>
        <div class="key">d</div>
        <div class="key">f</div>
        <div class="key">g</div>
        <div class="key">h</div>
        <div class="key">j</div>
        <div class="key">k</div>
        <div class="key">l</div>
        <div class="key">;</div>
        <div class="key">'</div>
      </div>
      <div class="keysRow">
        <div class="key">
          <span class="material-icons">
            file_upload
          </span>
        </div>
        <div class="key">z</div>
        <div class="key">x</div>
        <div class="key">c</div>
        <div class="key">v</div>
        <div class="key">b</div>
        <div class="key">n</div>
        <div class="key">m</div>
        <div class="key">,</div>
        <div class="key">.</div>
        <div class="key">/</div>
        <div class="key">
          <span class="material-icons">
            file_upload
          </span>
        </div>
      </div>
      <div class="keysRow">
        <div class="key ctrlAltKey">Ctrl + Alt</div>
        <div class="key spaceKey"></div>
        <div class="key ctrlAltKey">Ctrl + Alt</div>
      </div>
    </div>
    <audio ref="speaker">
       <source ref="speakerSource">
    </audio>
  </div>
</template>

<script>
// const SMS = require('simplefreesms');

// const tts = require('google-translate-tts');
// const fs = require('fs');

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
      yourNotListened: false
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
    listen(){
      var audioContext = new AudioContext();

      console.log("audio is starting up ...");

      var BUFF_SIZE = 16384;

      var audioInput = null,
          microphone_stream = null,
          gain_node = null,
          script_processor_node = null,
          script_processor_fft_node = null,
          analyserNode = null;

      if (!navigator.mediaDevices.getUserMedia)
        navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia ||
          navigator.mediaDevices.mozGetUserMedia || navigator.mediaDevices.msGetUserMedia;

      if (navigator.mediaDevices.getUserMedia){

        navigator.mediaDevices.getUserMedia({audio:true}, 
          function(stream) {
            start_microphone(stream);
          },
          function(e) {
            alert('Error capturing audio.');
          }
        );

      } else { alert('getUserMedia not supported in this browser.'); }

      // ---

      function show_some_data(given_typed_array, num_row_to_display, label) {

          var size_buffer = given_typed_array.length;
          var index = 0;
          var max_index = num_row_to_display;

          console.log("__________ " + label);

          for (; index < max_index && index < size_buffer; index += 1) {

              console.log(given_typed_array[index]);
          }
      }

      function process_microphone_buffer(event) { // invoked by event loop

          var i, N, inp, microphone_output_buffer;

          microphone_output_buffer = event.inputBuffer.getChannelData(0); // just mono - 1 channel for now

          // microphone_output_buffer  <-- this buffer contains current gulp of data size BUFF_SIZE

          show_some_data(microphone_output_buffer, 5, "from getChannelData");
      }

      function start_microphone(stream){

        gain_node = audioContext.createGain();
        gain_node.connect( audioContext.destination );

        microphone_stream = audioContext.createMediaStreamSource(stream);
        microphone_stream.connect(gain_node); 

        script_processor_node = audioContext.createScriptProcessor(BUFF_SIZE, 1, 1);
        script_processor_node.onaudioprocess = process_microphone_buffer;

        microphone_stream.connect(script_processor_node);

        // --- enable volume control for output speakers

        document.getElementById('volume').addEventListener('change', function() {

            var curr_volume = this.value;
            gain_node.gain.value = curr_volume;

            console.log("curr_volume ", curr_volume);
        });

        // --- setup FFT

        script_processor_fft_node = audioContext.createScriptProcessor(2048, 1, 1);
        script_processor_fft_node.connect(gain_node);

        analyserNode = audioContext.createAnalyser();
        analyserNode.smoothingTimeConstant = 0;
        analyserNode.fftSize = 2048;

        microphone_stream.connect(analyserNode);

        analyserNode.connect(script_processor_fft_node);

        script_processor_fft_node.onaudioprocess = function() {

          // get the average for the first channel
          var array = new Uint8Array(analyserNode.frequencyBinCount);
          analyserNode.getByteFrequencyData(array);

          // draw the spectrogram
          if (microphone_stream.playbackState == microphone_stream.PLAYING_STATE) {
            show_some_data(array, 5, "from fft");
          }
        };
      }  
    },
    closeKeyboard(){
      this.virtualKeyboard = !this.virtualKeyboard
    },
    async speak(source){
      // let speakText = this.inputWords
      // let speakLanguage = this.inputLanguage
      // if(source.includes('input')) {
      //   speakText = this.inputWords
      //   speakLanguage = this.inputLanguage
      // } else {
      //   speakText = this.outputWords
      //   speakLanguage = this.outputLanguage
      // }
      // const buffer = await tts.synthesize({
      //     text: speakText,
      //     voice: 'en-US',
      //     slow: false // optional
      // });
      // fs.writeFileSync('hello-world.mp3', buffer);

      let speakText = this.inputWords
      let speakLanguage = this.inputLanguage
      if(source.includes('input')) {
        speakText = this.inputWords
        speakLanguage = this.inputLanguage
      } else {
        speakText = this.outputWords
        speakLanguage = this.outputLanguage
      }
      fetch(`http://localhost:4000/api/speak/?language=${speakLanguage}&words=${speakText}`, {
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
      .then(async result => {
        console.log(`status: ${JSON.parse(result).status}`)
        if(JSON.parse(result).status.includes('OK')) {
          console.log(`url: ${JSON.parse(result).url}`)
          this.speakUrl = JSON.parse(result).url
          
          this.$refs.speakerSource.src = this.speakUrl
          // this.$refs.speaker.source = this.speakUrl
          // await this.$refs.speaker.setAttribute('src', JSON.parse(result).url)
          
          
          // await this.$refs.speaker.play()
          new Audio(this.speakUrl).play()
          let playPromise = this.$refs.speaker.play()
          if (playPromise !== undefined) {
            playPromise.then(async function() {
              // Automatic playback started!
              new Audio('https://translate.google.com/translate_tts?ie=UTF-8&q=speakText&tl=en&total=1&idx=0&textlen=9&client=tw-ob&prev=input&ttsspeed=1').play()
            }).catch(function(error) {
              console.log('ошибка вопроизведения')
            });
          }

        }
      });
    },
    swapLanguages(){
      let tempLanuage = this.inputLanguage
      this.inputLanguage = this.outputLanguage
      this.outputLanguage = tempLanuage
    },
    clearInput(){
      this.inputWords = ''
    },
    copy() {
      
      // this.$refs.outputWordsRef.disabled = false
      // this.$refs.outputWordsRef.selecteAll()
      // document.execCommand('copy')
      // this.$refs.outputWordsRef.disabled = true

      navigator.clipboard.writeText(this.outputWords)

    },
    reactiveTranslate() {
      if(this.inputWords.length >= 5000) {
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

  .spaceKey {
    width: 50%;
  }

  .ctrlAltKey {
    width: 15%;
  }

  .virtualKeyboardHeader {
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

</style>