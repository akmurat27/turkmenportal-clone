<template>
  <img class="w-[80%] m-auto" src="@/assets/img/e5832b4ed51d3df3ec542e6dc1c92dff.gif">
  <div class="w-[80%] m-auto shadow-lg shadow-red-500">
    <div class="flex">
      <img src="@/assets/img/logo_tp.png">
      <img class="rounded-lg ml-8 mb-3" src="@/assets/img/3cc278f317104ffe0e261fdbf032062c.gif">
    </div>
    <div class="nav">
      <div class="flex justify-around items-center bg-red-800 text-white h-10">
        <button class="flex items-center">
          <img src="@/assets/icons8-menu.svg" class="w-[12px] h-[12px]">
          <span class="mx-2">ВСЕ КАТЕГОРИИ</span>
        </button>
        <span>НОВОСТИ</span>
        <span>СТАТЬИ</span>
        <span>МЕДИА</span>
        <span>БИЗНЕС</span>
        <span>ИНФОРМАЦИОННАЯ ПРОГРАММА</span>
        <span>ЧЛЕНЫ СППТ</span>
        <div>
          <span>ДОБАВИТЬ ОБЪЯВЛЕНИЕ</span>
          <span>ПОИСК</span>
        </div>
      </div>
    </div>
    <div class="second-nav flex justify-between items-end h-[60px] p-4">
      <span class="text-4xl">НОВОСТИ</span>
      <div class="flex">
        <span class="mx-3">Дайджест</span>
        <span class="mx-3">Политика</span>
        <span class="mx-3">Культура</span>
        <span class="mx-3">Экономика</span>
        <span class="mx-3">Образование</span>
        <span class="mx-3">Туризм</span>
        <span class="mx-3">Технологии</span>
        <span class="mx-3">Здоровье</span>
      </div>
      <span>Пoказать еще</span>
    </div>
    <hr style="width: 98%; margin: auto;">
    <div class="flex p-4">
      <div class="w-[35%] mt-3">
        <img class="rounded-lg" src="@/assets/img/de579dad30a2e6e4b5cf2019bb541791-8966694-380x253-2.webp">
        <div class="text-left mt-3">
          <span class="text-red-800">Сегодня 19:47</span>
          <h1 class="font-sans text-lg font-bold my-3">В Туркменистане стартовала «Академия для женщин-предпринимателей»</h1>
          <p class="my-3 font-sans">В Ашхабаде, Дашогузе, Мары и Туркменабате 2 марта стартовали курсы «Академии для женщин-предпринимателей» (AWE). Программа реализуется Посольством США в Туркменистане совместно с Союзом...</p>
        </div>
      </div>
      <div class="flex flex-col w-[45%] mt-3">
        <div class="flex" v-for="(novosti , i) in news" :key="i">
          <img class="m-3 rounded-lg" :src="novosti.img">
          <div class="flex flex-col text-left m-3">
            <div class="text-red-800 text-sm">
              {{ novosti.text }}
            </div>
            <div class="font-sans text-sm">
              {{ novosti.content }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <img class="my-3 rounded-lg" src="@/assets/img/53daeb106dab95f9c75ffc67d6f5c2d8.gif">
        <img class="my-8" src="@/assets/img/videoframe_3341.png">
      </div>
    </div>
    <div class="p-4">
      <img style="position: absolute; bottom: -3rem;" class="rounded-lg" src="@/assets/img/3b81b7a6f8f89c1765c9f531ff6ce0c3.gif">
    </div>
    <section class="flex justify-between mt-8 p-4">
      <div class="СПОРТ w-[30%]">
        <div class="flex justify-between items-end">
          <span class="text-4xl">СПОРТ</span>
          <span class="text-sm">Показать еще</span>
        </div>
        <hr class="border-t-2 border-grey my-3">
        <div class="flex flex-col ">
          <div class="flex" v-for="(games, i) in sport" :key="i">
            <img class="m-3 rounded-lg" :src="games.image" style="width: 100px; height: 70px;">
            <div class="flex flex-col text-left m-3">
              <div class="text-red-600 text-sm">
                {{ games.text }}
              </div>
              <div class="text-sm">
                {{ games.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Бизнес w-[30%]">
        <div class="flex justify-between items-end">
          <span class="text-4xl">БИЗНЕС</span>
          <span class="text-sm">Показать еще</span>
        </div>
        <hr class="border-t-2 border-grey my-3">
        <div class="flex flex-col ">
          <div class="flex" v-for="(business, i) in biznes" :key="i">
            <img :src="business.image" class="m-3 rounded-lg" style="width: 100px; height: 70px;">
            <div class="flex flex-col text-left m-3">
              <div class="text-red-600 text-sm">
                {{ business.text }}
              </div>
              <div class="text-sm">
                {{ business.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="В Мире w-[30%]">
        <div class="flex justify-between items-end">
          <span class="text-4xl">В МИРЕ</span>
          <span class="text-sm">Показать еще</span>
        </div>
        <hr class="border-t-2 border-grey my-3">
        <div class="flex flex-col ">
          <div class="flex" v-for="(world, i) in mir" :key="i">
            <img :src="world.image" class="m-3 rounded-lg" style="width: 100px; height: 70px;">
            <div class="flex flex-col text-left m-3">
              <div class="text-red-600 text-sm">
                {{ world.data }}
              </div>
              <div class="text-sm">
                {{ world.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style="margin-top: 4rem; margin-bottom: 5rem;" class="p-4">
      <img class="rounded-lg" src="@/assets/img/3f16a7289de119ffdc9a4d395a1b8227.gif">
    </section>
    <nav class="flex justify-left items-end p-4">
      <span class="text-4xl">СТАТЬИ</span>
      <div class="mx-3">
        <span class="mx-3">Выдающиеся личности Туркменистана</span>
        <span class="mx-3">Образование</span>
        <span class="mx-3">Спорт</span>
        <span class="mx-3">Hi-Tech</span>
        <span class="mx-3">Туризм</span>
        <span class="mx-3">Авто</span>
      </div>
      <div class="w-[29%] text-right">
        <span class="">Показать еще</span>
      </div>
    </nav>
    <hr class="border-t-2 border-grey my-3" style="width: 98%; margin: auto;">
    <section class="mt-5 p-4">
      <div class="flex justify-between">
        <div v-for="(status , i) in statyi" :key="i">
          <img class="rounded-lg" :src="status.image" style="width: 180px; height: 120px;">
          <div class="w-[180px] mt-3 text-sm">
            {{ status.content }}
          </div>
        </div>
      </div>
    </section>
    <nav class="flex justify-left items-end p-4" style="margin-top: 4rem;">
      <span class="text-4xl">АФИША</span>
      <div class="mx-3">
        <span class="mx-3">Выставки</span>
        <span class="mx-3">Детям</span>
        <span class="mx-3">Кинотеатры</span>
        <span class="mx-3">Клубы</span>
        <span class="mx-3">Концерты</span>
        <span class="mx-3">События</span>
      </div>
      <div class="w-[50%] text-right">
        <span class="">Показать еще</span>
      </div>
    </nav>
    <hr class="border-t-2 border-grey my-3" style="width: 98%; margin: auto;">
    <section class="mt-5 p-4">
      <div class="flex justify-between">
        <div v-for="(anons , i) in afisha" :key="i" class="rounded-lg shadow-lg">
          <img :src="anons.image">
          <div class="w-[180px] mt-5 text-sm px-4">
            {{ anons.content }}
          </div>
        </div>
      </div>
    </section>
    <div class="flex justify-between p-5" style="margin-top: 5rem;">
      <div class="w-[50%]">
        <nav class="flex justify-left items-end">
          <span class="text-4xl">ТЕНДЕРЫ</span>
          <div class="mx-3">
            <span class="mx-3">Государственные</span>
            <span class="mx-3">Коммерческие</span>
          </div>
          <div class="ml-8">
            <span class="">Показать еще</span>
          </div>
        </nav>
        <hr class="border-t-2 border-grey my-3">
        <div style="display: flex; flex-wrap: wrap;">
          <div v-for="(trends, i) in tendery" :key="i" style="flex: 1 0 200px; padding: 5px; margin: 5px;">
            <div class="flex items-center">
              <div class="text-sm">
                {{ trends.vrema }}
              </div>
              <div class="text-sm ml-3">
                {{ trends.data }}
              </div>
              <div style="border-right: 1px solid grey; height: 20px; margin-left: 6px;"></div>
              <img src="@/assets/obyavlenie/eye-regular.svg" style="width: 10px; height: 10px; margin-left: 15px;" >
              <span style="font-size: 10px; margin-left: 3px;">2927</span>
            </div>
            <div class="text-sm text-blue-800 pt-2">
              {{ trends.content }}
            </div>
            <hr class="border-t-2 border-grey my-3">
          </div>
        </div>
      </div>
      <div class="w-[45%]">
        <nav class="flex justify-left items-end">
          <span class="text-4xl">ОБЪЯВЛЕНИЯ</span>
          <div class="mx-10">
            <span>Прочие</span>
          </div>
          <div class="ml-12">
            <span>Показать еще</span>
          </div>
        </nav>
        <hr class="border-t-2 border-grey my-3">
        <div class="flex flex-col">
          <div class="flex items-center" v-for="(ads, i) in obyavlenia" :key="i">
            <img :src="ads.img" style="width: 75px; height: 75px" class="rounded-lg">
            <div class="flex flex-col m-3">
              <div class="font-semibold" style="font-size: 15px;">
                {{ ads.title }}
              </div>
              <div class="text-sm">
                {{ ads.descr }}
              </div>
              <div class="flex items-center">
                <div class="text-xs">
                  {{ ads.vrema }}
                </div>
                <div class="text-xs ml-3">
                  {{ ads.data }}
                </div>
                <div style="border-right: 1px solid grey; height: 20px; margin-left: 10px;"></div>
                <img src="@/assets/obyavlenie/eye-regular.svg" style="width: 10px; height: 10px; margin-left: 10px;" >
                <span style="font-size: 10px; margin-left: 4px;">2927</span>
              </div>
            </div>
            <hr class="border-t-2 border-black my-3">
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 2rem;" class="p-4" >
      <img src="@/assets/img/9134dc8eaf6cf0eba497f6133a3f8fa3.jpg" class="rounded-lg">
    </div>
    <div style="margin-top: 4rem;" class="p-4">
      <nav class="flex justify-between items-end">
        <span class="text-4xl">МЕДИА</span>
        <div class="w-[80%]">
          <span class="mx-3">Дайджест</span>
          <span class="mx-3">Наши видео</span>
          <span class="mx-3">Общество</span>
          <span class="mx-3">Афиши</span>
          <span class="mx-3">Бизнес</span>
          <span class="mx-3">Спорт</span>
        </div>
        <div>
          <span>Показать еще</span>
        </div>
      </nav>
      <hr class="border-t-2 border-grey my-3">
      <div class="carousel">
        <div class="carousel-container" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
          <div v-for="(item, index) in items" :key="index" class="carousel-slide">
            <!-- Slide content -->
            <img :src="item.img" :alt="item.altText" class="carousel-image">
            
          </div>
        </div>
        <button @click="prevSlide" :disabled="currentSlide === 0" class="w-[50px] h-[50px]" id="prev">
          <img class="w-[50px] h-[50px]" src="@/assets/Media/chevron-left.svg">
        </button>
        <button @click="nextSlide" :disabled="currentSlide === items.length - 1"  class="w-[50px] h-[50px]" id="next">
          <img class="w-[50px] h-[50px]" src="@/assets/Media/chevron-right.svg">
        </button>
      </div>
    </div>
    <fooTer />
  </div>
</template>

<script> 
import fooTer from '@/components/fooTer.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    fooTer
  },
  data: () => ({
    news: [
    { 
      img: require('@/assets/img/45b954d88b1176b04e350fcede256acb-8966978-90x60-2.webp'),
      text: "Сегодня 19:47",
      content: "В агентстве «Туркменсвязь» прошло торжественное собрание по случаю Международного женского дня",
    },
    {
      img: require("@/assets/img/3ba5cf06611b1f6d20b80bfe91a8aa5a-8967139-90x60-2.webp"),
      text: "Сегодня 15:35",
      content: "Во Французском институте в Ашхабаде покажут фильм «Дивертисмент»",
    },
    {
      img: require("@/assets/img/a067b8d535ef634dcde23afc55880a76-8966863-90x60-2.webp"),
      text: "Сегодня 14:04",
      content: "Главы миссий ОБСЕ обсудили в Ашхабаде региональные вопросы сотрудничества",
    },
    {
      img: require("@/assets/img/cb9014474986adc597add65a2ef8caf0-8966954-90x60-2.webp"),
      text: "Сегодня 13:17",
      content: "В Анау состоится ярмарка вакансий",
    },
    {
      img: require("@/assets/img/dbae76e6f716d7a53d9e64683fbad462-8966878-90x60-2.webp"),
      text: "Сегодня 12:30",
      content: "Делегация Японского агентства международного сотрудничества посетила порт Туркменбаши",
    },
    {
      img: require("@/assets/img/d966ec6bcbc4ff20b196db68049b3e5c-8966979-90x60-2.webp"),
      text: "Сегодня 12:56",
      content: "Посол Туркменистана в Румынии и ректор нефтегазового вуза Плоешти обсудили дальнейшее сотрудничество",
    }
    ],
    sport: [
      {
        image: require('@/assets/sport/11ff870763bf8262951f66ff8e8ce625-8967079-90x114-2.webp'),
        text: 'Сегодня 11:01',
        content: '«Реал» и «Манчестер Сити» вышли в 1/4 финала Лиги чемпионов УЕФА',
      },
      {
        image: require('@/assets/sport/a15e408cd2f7f47d2a2cc60ea15b6da4-8966734-90x114-2.webp'),
        text: 'Сегодня 10:46',
        content: 'Гол Теймура Чарыева помог «Абдыш-Ате» разгромить «Тайчунг Футуро» в четвертьфинале Кубка АФК',
      },
      {
        image: require('@/assets/sport/27da55f8cdc7659016bb235e3972f241-8966778-90x114-2.webp'),
        text: 'Вчера 10:39',
        content: 'Сборная Туркменистана готовится к ключевым матчам отбора на ЧМ-2026 и Кубок Азии-2027 по футболу',
      },
      {
        image: require('@/assets/sport/e300f180f3f34fb81ca0ce3e46c8f70e-8966738-90x114-2.webp'),
        text: 'Вчера 07:34',
        content: 'Определились первые четвертьфиналисты европейской Лиги чемпионов',
      },
      {
        image: require('@/assets/sport/a15e408cd2f7f47d2a2cc60ea15b6da4-8966734-90x114-2.webp'),
        text: ' Вчера 07:26',
        content: 'Мастера тхэквондо ITF из Туркменистана завоевали 34 медали на международном турнире в Малайзии',
      },
      {
        image: require('@/assets/sport/73a01751a8a5b5b7ef34028b294b6ebb-8966621-90x114-2.webp'),
        text: '05.03.2024',
        content: 'Туркменские вузы определили сильнейших боксеров на Универсиаде в Ашхабаде',
      },
    ],
    biznes: [
      {
        image: require('@/assets/bisnez/db12c5f49d91ddc214d67209e533cf26-8967268-90x114-2.webp'),
        text: 'Сегодня 10:39',
        content: 'Ресторан Soltan в ТРЦ «Беркарар» принимает заявки на изготовление тортов'
      },
      {
        image: require('@/assets/bisnez/f12d1b487aa42274e302df8f4197c2e0-8967175-90x114-2.webp'),
        text: '07.03.2024',
        content: 'Мобильное приложение Broker: новый подход к тендерам и аукционам'
      },
      {
        image: require('@/assets/v-mire/55e394218115b971a595ae7125cb0af8-8967255-90x114-2.webp'),
        text: '07.03.2024',
        content: 'Туркменистан представил свой туристический потенциал на ITB Berlin 2024'
      },
      {
        image: require('@/assets/v-mire/852cd4eaef905f7e3292af0104f46931-8967271-90x114-2.webp'),
        text: '07.03.2024',
        content: 'Däp представляет новую весеннюю коллекцию URBAN'
      },
      {
        image: require('@/assets/bisnez/9c7a0bf465452af1a97e8fba5375b627-8967086-90x114-2.webp'),
        text: '07.03.2024',
        content: '«Туркменпочта»: надежная и быстрая доставка грузов в любой уголок Туркменистана'
      },
      {
        image: require('@/assets/bisnez/871b00a4e0a067fc0cb2c58389893434-8967062-90x114-2.webp'),
        text: '07.03.2024',
        content: 'В магазине EuroHome TM назвали преимущества европейских брендов сантехники'
      }
    ],
    mir: [
      {
        image: require('@/assets/v-mire/811c14551c6504a23a17724f0141825f-8967314-90x114-2.webp'),
        data: 'Сегодня 14:28',
        content: 'Юрию Гагарину сегодня исполнилось бы 90 лет'
      },
      {
        image: require('@/assets/v-mire/437aa6b9407a0085619bedf8fcbd74c5-8967313-90x114-2.webp'),
        data: 'Сегодня 14:22',
        content: 'Эрдоган заявил, что не будет баллотироваться в 2028 году'
      },
      {
        image: require('@/assets/v-mire/833cfc273cddeded8669a184db49f606-8967282-90x114-2.webp'),
        data: 'Сегодня 11:34',
        content: '«Сёгун» бьет рекорды на стриминге'
      },
      {
        image: require('@/assets/v-mire/852cd4eaef905f7e3292af0104f46931-8967271-90x114-2.webp'),
        data: 'Сегодня 10:49',
        content: 'Человек оказался главным кошмаром дикой природы'
      },
      {
        image: require('@/assets/v-mire/f1e85c4d20c2e98ba3b9faae4fbc1829-8967263-90x114-2.webp'),
        data: 'Сегодня 10:27',
        content: 'Британские ученые создают методы по раскрытию преступлений в космосе'
      },
      {
        image: require('@/assets/v-mire/55e394218115b971a595ae7125cb0af8-8967255-90x114-2.webp'),
        data: 'Сегодня 09:37',
        content: 'Исследование: сигнал тревоги медицинского оборудования может не спасти пациентов от гибели'
      }
    ],
    statyi: [
      {
        image: require('@/assets/Statyi/d13abd820aa2c0db95fb008e7e918dbc-8926073-180x134-2.webp'),
        content: 'Расписание приёма пищи во время поста Рамадан 2024 года (Туркменистан)'
      },
      {
        image: require('@/assets/Statyi/e274bc53cb2087f4b23a14b7220bdd90-8966883-180x134-2.webp'),
        content: 'За кадром: истории женщин, которые изменили киноиндустрию'
      },
      {
        image: require('@/assets/Statyi/fa537dc208401ea7cefc76255cb044c1-8966290-180x134-2.webp'),
        content: 'Как красиво разрезать торт: советы от кондитера Zyýat Hil'
      },
      {
        image: require('@/assets/Statyi/c6876ec2a4bc7b013647ed337014b884-8966209-180x134-2.webp'),
        content: 'Тот самый Хемра Широв'
      },
      {
        image: require('@/assets/Statyi/2e7cc376a32d896b19c9564558813e3a-8966105-180x134-2.webp'),
        content: 'Миссия выполнима: как привести себя в форму к лету за три месяца'
      },
      {
        image: require('@/assets/Statyi/771f6b653f3c49317d0cb0f10026d0a0-8966014-180x134-2.webp'),
        content: 'Экологическая безопасность производства – что важно знать работодателю'
      }
    ],
    afisha: [
      {
        image: require('@/assets/Statyi/d13abd820aa2c0db95fb008e7e918dbc-8926073-180x134-2.webp'),
        content: 'Расписание приёма пищи во время поста Рамадан 2024 года (Туркменистан)'
      },
      {
        image: require('@/assets/Statyi/d13abd820aa2c0db95fb008e7e918dbc-8926073-180x134-2.webp'),
        content: 'Расписание приёма пищи во время поста Рамадан 2024 года (Туркменистан)'
      },
      {
        image: require('@/assets/Statyi/d13abd820aa2c0db95fb008e7e918dbc-8926073-180x134-2.webp'),
        content: 'Расписание приёма пищи во время поста Рамадан 2024 года (Туркменистан)'
      },
      {
        image: require('@/assets/Statyi/d13abd820aa2c0db95fb008e7e918dbc-8926073-180x134-2.webp'),
        content: 'Расписание приёма пищи во время поста Рамадан 2024 года (Туркменистан)'
      },
      {
        image: require('@/assets/Statyi/d13abd820aa2c0db95fb008e7e918dbc-8926073-180x134-2.webp'),
        content: 'Расписание приёма пищи во время поста Рамадан 2024 года (Туркменистан)'
      },
      {
        image: require('@/assets/Statyi/d13abd820aa2c0db95fb008e7e918dbc-8926073-180x134-2.webp'),
        content: 'Расписание приёма пищи во время поста Рамадан 2024 года (Туркменистан)'
      },
    ],
    tendery: [
      { 
        vrema: '14:35',
        data: '23.02.2024',
        content: 'АОЗТ «Морской торговый флот» объявляет тендер на закупку запасных частей для нефтяного танкера «Битарап»'
      },
      { 
        vrema: '14:35',
        data: '23.02.2024',
        content: 'АОЗТ «Морской торговый флот» объявляет тендер на закупку запасных частей для нефтяного танкера «Битарап»'
      },
      { 
        vrema: '14:35',
        data: '23.02.2024',
        content: 'АОЗТ «Морской торговый флот» объявляет тендер на закупку запасных частей для нефтяного танкера «Битарап»'
      },
      { 
        vrema: '14:35',
        data: '23.02.2024',
        content: 'АОЗТ «Морской торговый флот» объявляет тендер на закупку запасных частей для нефтяного танкера «Битарап»'
      },
      { 
        vrema: '14:35',
        data: '23.02.2024',
        content: 'АОЗТ «Морской торговый флот» объявляет тендер на закупку запасных частей для нефтяного танкера «Битарап»'
      },
      { 
        vrema: '14:35',
        data: '23.02.2024',
        content: 'АОЗТ «Морской торговый флот» объявляет тендер на закупку запасных частей для нефтяного танкера «Битарап»'
      },
      { 
        vrema: '14:35',
        data: '23.02.2024',
        content: 'АОЗТ «Морской торговый флот» объявляет тендер на закупку запасных частей для нефтяного танкера «Битарап»'
      },
      { 
        vrema: '14:35',
        data: '23.02.2024',
        content: 'АОЗТ «Морской торговый флот» объявляет тендер на закупку запасных частей для нефтяного танкера «Битарап»'
      },
    ],
    obyavlenia: [
      {
        img: require('@/assets/obyavlenie/6918492e98b2647b442f0a4c098fce03-8967808-70x90-2.webp'),
        title: 'Таможенное оформление грузов! Профессионализм и надёжность!',
        descr: 'Aýbölek Faberlic Aşgabat +99361704962',
        vrema: '16:04',
        data: '13.03.2024'
      },
      {
        img: require('@/assets/obyavlenie/6918492e98b2647b442f0a4c098fce03-8967808-70x90-2.webp'),
        title: 'Таможенное оформление грузов! Профессионализм и надёжность!',
        descr: 'Aýbölek Faberlic Aşgabat +99361704962',
        vrema: '16:04',
        data: '13.03.2024'
      },
      {
        img: require('@/assets/obyavlenie/6918492e98b2647b442f0a4c098fce03-8967808-70x90-2.webp'),
        title: 'Таможенное оформление грузов! Профессионализм и надёжность!',
        descr: 'Aýbölek Faberlic Aşgabat +99361704962',
        vrema: '16:04',
        data: '13.03.2024'
      },
      {
        img: require('@/assets/obyavlenie/6918492e98b2647b442f0a4c098fce03-8967808-70x90-2.webp'),
        title: 'Таможенное оформление грузов! Профессионализм и надёжность!',
        descr: 'Aýbölek Faberlic Aşgabat +99361704962',
        vrema: '16:04',
        data: '13.03.2024'
      },
      {
        img: require('@/assets/obyavlenie/6918492e98b2647b442f0a4c098fce03-8967808-70x90-2.webp'),
        title: 'Таможенное оформление грузов! Профессионализм и надёжность!',
        descr: 'Aýbölek Faberlic Aşgabat +99361704962',
        vrema: '16:04',
        data: '13.03.2024'
      },
      {
        img: require('@/assets/obyavlenie/6918492e98b2647b442f0a4c098fce03-8967808-70x90-2.webp'),
        title: 'Таможенное оформление грузов! Профессионализм и надёжность!',
        descr: 'Aýbölek Faberlic Aşgabat +99361704962',
        vrema: '16:04',
        data: '13.03.2024'
      },
    ],
    items: [
      {
        img: require('@/assets/Media/c1f98763e80ea3047bb4175f9f6760a9-8967946-382x254-4.webp'),
        text: 'Что такое Belet Film?'
      },
      {
        img: require('@/assets/Media/69d6d81d55b58cc623f2404585ee9ae0-8967865-382x254-4.webp'),
        text: 'Главные новости Туркменистана и мира на 13 марта'
      },
      {
        img: require('@/assets/Media/1ad598f6e13353f97b7f7f78da42edc5-8967722-382x254-4.webp'),
        text: 'Главные новости Туркменистана и мира на 12 марта'
      },
      {
        img: require('@/assets/Media/1ad598f6e13353f97b7f7f78da42edc5-8967722-382x254-4.webp'),
        text: 'Главные новости Туркменистана и мира на 12 марта'
      },
      {
        img: require('@/assets/Media/1ad598f6e13353f97b7f7f78da42edc5-8967722-382x254-4.webp'),
        text: 'Главные новости Туркменистана и мира на 12 марта'
      },
      {
        img: require('@/assets/Media/1ad598f6e13353f97b7f7f78da42edc5-8967722-382x254-4.webp'),
        text: 'Главные новости Туркменистана и мира на 12 марта'
      },
      {
        img: require('@/assets/Media/1ad598f6e13353f97b7f7f78da42edc5-8967722-382x254-4.webp'),
        text: 'Главные новости Туркменистана и мира на 12 марта'
      },
      {
        img: require('@/assets/Media/1ad598f6e13353f97b7f7f78da42edc5-8967722-382x254-4.webp'),
        text: 'Главные новости Туркменистана и мира на 12 марта'
      },
      {
        img: require('@/assets/Media/1ad598f6e13353f97b7f7f78da42edc5-8967722-382x254-4.webp'),
        text: 'Главные новости Туркменистана и мира на 12 марта'
      },
      {
        img: require('@/assets/Media/1ad598f6e13353f97b7f7f78da42edc5-8967722-382x254-4.webp'),
        text: 'Главные новости Туркменистана и мира на 12 марта'
      }

    ],
    currentSlide: 0,
    slideWidth: 300, // Adjust this value as needed
  }),

  methods: {
    nextSlide() {
      if (this.currentSlide < this.items.length - 1) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    }
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  transition: transform 3s ease;
}

.carousel-slide {
  flex-shrink: 0;
}

.carousel-image {
  width: 100%;
}
#prev,
#next {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(71, 71, 71);
  border: none;
  outline: 0;
  cursor: pointer;
  position: absolute;
}

#prev {
  top: 40%;
}

#next {
  top: 40%;
  right: 0;
}

</style>
