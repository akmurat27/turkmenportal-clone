<template>
  <div class="shadow-lg shadow-red-500 w-[80%] m-auto">
    <img class="w-full" src="@/assets/img/e5832b4ed51d3df3ec542e6dc1c92dff.gif">
    <div class="lg:flex lg:justify-between lg:items-center lg:h-12 " style="background-color: #F1F1F1;">
      <div class="lg:flex lg:items-center md:flex md:items-center md:text-xs md:h-12" style="padding: 0 15px;">
        <span class="date_time">
          {{ currentDate }}
          {{ currentTime }}
        </span>
        <div class="weather_info w-[135px] h-[12px]">
          <a href="https://turkmenportal.com/weather" class="flex news">
            <div class="weather_info_icon flex">
              <img src="@/assets/A8d-25.webp" class="w-[25px] h-[25px]">
              <span class="weather_info_temp font-medium">25°</span>
            </div>
            <div class="weather_info_caption">
              <span class="weather_info_citi">Ашхабад</span>
            </div>
          </a>
        </div>
        <div style="border-right: 1px solid grey; height: 13px; margin-left: 6px;"></div>
        <button class="mx-3 news">
          <span style="font-size: 12px;">
            Курс валюты Центрального банка
          </span>
        </button>
        <div style="border-right: 1px solid grey; height: 13px; margin-left: 6px;"></div>
        <button class="mx-3 news">
          <span style="font-size: 12px;">
            Список банкоматов
          </span>
        </button>
        <div style="border-right: 1px solid grey; height: 13px; margin-left: 6px;"></div>
        <span class="mx-3 news" style="font-size: 12px; cursor: pointer;">18+</span>
      </div>
      <div class="pull-right flex items-center justify-end" style="padding: 0 15px;">
        <div>
          <span style="font-size: 12px;">Выберите язык:</span>
        </div>
        <div class="flex mx-1">
          <img class="mx-1" style="cursor: pointer;" src="@/assets/yazyki/tm.png">
          <img class="mx-1" style="cursor: pointer;" src="@/assets/yazyki/tr.png">
          <img class="mx-1" style="cursor: pointer;" src="@/assets/yazyki/ru.png">
          <img class="mx-1" style="cursor: pointer;" src="@/assets/yazyki/en.png">
        </div>
      </div>
    </div>
    <div class="">
      <div class="lg:flex lg:items-center lg:p-4">
        <div class="">
          <img src="@/assets/img/logo_tp.png" class="w-full h-full">
        </div>
        <div class="px-4">
          <img class="rounded-lg w-full" src="@/assets/img/3cc278f317104ffe0e261fdbf032062c.gif">
        </div>
      </div>
      <div class="lg:flex lg:justify-between lg:items-center lg:bg-red-800 lg:text-white lg:h-10 md:flex md:justify-between md:items-center md:bg-red-800 md:text-white md:h-10 md:p-4">
        <div class="lg:flex lg:items-center md:flex md:items-center">
          <button class="flex items-center box h-8">
            <img src="@/assets/icons8-menu.svg" class="w-[12px] h-[12px]">
            <span class="mx-2 text-xs font-medium lg:block md:hidden"> ВСЕ КАТЕГОРИИ </span>
          </button>
          <button class="mx-2 text-xs font-medium h-8 box">НОВОСТИ</button>
          <button class="mx-2 text-xs font-medium h-8 box">СТАТЬИ</button>
          <button class="mx-2 text-xs font-medium h-8 box">МЕДИА</button>
          <button class="mx-2 text-xs font-medium h-8 box lg:block md:hidden">БИЗНЕС</button>
          <button class="mx-2 text-xs font-medium h-8 box lg:block md:hidden">ИНФОРМАЦИОННАЯ ПРОГРАММА</button>
          <button class="mx-2 text-xs font-medium h-8 box lg:block md:hidden">ЧЛЕНЫ СППТ</button>
        </div>
        <div class="lg:flex lg:items-center md:flex md:items-center">
          <button class="flex items-center mx-2 box h-8" >
            <img src="@/assets/plus-5-512.png" class="w-[16px] h-[16px] mx-2">
            <span class="text-xs font-medium lg:block md:hidden">ДОБАВИТЬ ОБЪЯВЛЕНИЕ</span>
          </button>
          <button class="flex items-center mx-2 box h-8">
            <img src="@/assets/search-13-512.png" class="w-[16px] h-[16px] mx-2">
            <span class="text-xs font-medium lg:block md:hidden">ПОИСК</span>
          </button>
          <button class="box h-8 ml-2 w-8 m-auto flex items-center justify-center">
            <img src="@/assets/user-512.png" class="h-[18px]">
          </button>
        </div>
      </div>
      <div class="second-nav flex justify-between items-end h-[50px] p-4 lg:mt-3">
        <div class="flex items-end">
          <button class="text-4xl mr-3 md:hidden lg:block font-medium news" style="color: #505050">НОВОСТИ</button>
          <button class="mx-3 text-sm md:hidden lg:block news" style="color: #505050">Дайджест</button>
          <button class="mx-3 text-sm md:hidden lg:block news" style="color: #505050">Политика</button>
          <button class="mx-3 text-sm md:hidden lg:block news" style="color: #505050">Культура</button>
          <button class="mx-3 text-sm md:hidden lg:block news" style="color: #505050">Экономика</button>
          <button class="mx-3 text-sm md:hidden lg:block news" style="color: #505050">Образование</button>
          <button class="mx-3 text-sm news" style="color: #505050">Туризм</button>
          <button class="mx-3 text-sm news" style="color: #505050">Технологии</button>
          <button class="mx-3 text-sm news" style="color: #505050">Здоровье</button>
        </div>
        <button class="text-sm news" style="color: #505050">Пoказать еще</button>
      </div>
      <hr style="width: 98%; margin: auto;">
      <div class="lg:flex lg:p-4 lg:justify-between md:p-4">
        <div class="lg:w-[100%]">
          <div class="lg:flex lg:h-[640px]">
            <div class="lg:w-[42%] lg:pt-4">
              <img class="rounded-md lg:w-full md:w-full" src="@/assets/img/de579dad30a2e6e4b5cf2019bb541791-8966694-380x253-2.webp">
              <div class="text-left mt-3">
                <span class="text-red-800">Сегодня 19:47</span>
                <h1 class="font-sans text-lg font-bold my-3">В Туркменистане стартовала «Академия для женщин-предпринимателей»</h1>
                <p class="my-3 font-sans">В Ашхабаде, Дашогузе, Мары и Туркменабате 2 марта стартовали курсы «Академии для женщин-предпринимателей» (AWE). Программа реализуется Посольством США в Туркменистане совместно с Союзом...</p>
              </div>
            </div>
            <div class="lg:flex lg:flex-col lg:w-[59%]">
              <div class="lg:flex lg:p-4 lg:ml-5" v-for="(novosti , i) in news" :key="i">
                <img class="lg:rounded-md" :src="novosti.img">
                <div class="flex flex-col text-left mx-3 md:justify-center">
                  <div class="text-red-800 text-sm">
                    {{ novosti.text }}
                  </div>
                  <div class="font-sans text-sm">
                    {{ novosti.content }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:block md:hidden">
            <img class="rounded-lg" src="@/assets/img/3b81b7a6f8f89c1765c9f531ff6ce0c3.gif">
          </div>
        </div>
        <div class="lg:pt-4 lg:block md:hidden w-[25%]">
          <img class="rounded-lg" src="@/assets/img/53daeb106dab95f9c75ffc67d6f5c2d8.gif">
          <img class="py-2" src="@/assets/img/9772b21286f1c201eb7c03588cef8f3c.jpg">
        </div>
      </div>




      <section class="lg:flex lg:justify-between lg:mt-8 lg:p-4 md:p-4">
        <div class="СПОРТ lg:w-[30%]">
          <div class="flex justify-between items-end">
            <button class="text-4xl news">СПОРТ</button>
            <button class="text-sm news">Показать еще</button>
          </div>
          <hr class="border-t-2 border-grey my-3">
          <div class="flex flex-col ">
            <div class="flex md:my-3" v-for="(games, i) in sport" :key="i">
              <img class="lg:m-3 rounded-lg" :src="games.image" style="width: 100px; height: 70px;">
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
        <div class="Бизнес lg:w-[30%] md:mt-5">
          <div class="flex justify-between items-end">
            <button class="text-4xl news">БИЗНЕС</button>
            <button class="text-sm news">Показать еще</button>
          </div>
          <hr class="border-t-2 border-grey my-3">
          <div class="flex flex-col ">
            <div class="flex md:my-3" v-for="(business, i) in biznes" :key="i">
              <img :src="business.image" class="lg:m-3 rounded-lg" style="width: 100px; height: 70px;">
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
        <div class="В Мире lg:w-[30%] md:mt-5">
          <div class="flex justify-between items-end">
            <button class="text-4xl news">В МИРЕ</button>
            <button class="text-sm news">Показать еще</button>
          </div>
          <hr class="border-t-2 border-grey my-3">
          <div class="flex flex-col ">
            <div class="flex md:my-3" v-for="(world, i) in mir" :key="i">
              <img :src="world.image" class="lg:m-3 rounded-lg" style="width: 100px; height: 70px;">
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
      <nav class="lg:flex lg:items-end lg:justify-between lg:p-4 md:p-4 md:flex md:text-sm">
        <button class="lg:text-4xl md:text-4xl md:items-start md:mt-2 md:justify-center md:flex news">СТАТЬИ</button>
        <div class="lg:w-[80%]">
          <button class="mx-3 md:mt-2 news">Выдающиеся личности Туркменистана</button>
          <button class="mx-3 md:mt-2 news">Образование</button>
          <button class="mx-3 md:mt-2 news">Спорт</button>
          <button class="mx-3 md:mt-2 news">Hi-Tech</button>
          <button class="mx-3 md:mt-2 news">Туризм</button>
          <button class="mx-3 md:mt-2 news">Авто</button>
        </div>
        <button class="news lg:w-[14%] lg:text-right md:w-[15%] md:items-end md:mt-2 md:justify-end md:flex">Показать еще</button>
      </nav>
      <hr class="border-t-2 border-grey my-3" style="width: 98%; margin: auto;">
      <section class="mt-5 p-4">
        <div class="lg:flex lg:justify-between md:flex md:justify-between">
          <div v-for="(status , i) in statyi" :key="i">
            <img class="rounded-lg lg:w-[180px] lg:h-[120px] md:w-[110px] md:h-[75px]" :src="status.image">
            <div class="lg:w-[180px] lg:mt-3 lg:text-sm news md:w-[90px] md:mt-3 md:text-sm md:overflow-hidden">
              {{ status.content }}
            </div>
          </div>
        </div>
      </section>
      <nav class="lg:flex lg:items-end lg:p-4 md:p-4 md:flex md:justify-between md:items-end md:text-sm" style="margin-top: 4rem;">
        <button class="text-4xl md:items-start md:mt-2 md:justify-center md:flex news">АФИША</button>
        <div class="lg:mx-3 lg:w-[79%] md:mx-3">
          <button class="mx-3 news">Выставки</button>
          <button class="mx-3 news">Детям</button>
          <button class="mx-3 news">Кинотеатры</button>
          <button class="mx-3 news">Клубы</button>
          <button class="mx-3 news">Концерты</button>
          <button class="mx-3 news">События</button>
        </div>
        <button class="news lg:w-[15%] lg:text-right md:w-[15%] md:items-end md:mt-2 md:justify-end md:flex">Показать еще</button>
      </nav>
      <hr class="border-t-2 border-grey my-3" style="width: 98%; margin: auto;">
      <div @mousedown="startDrag" @mouseup="endDrag" @mousemove="drag" ref="carouselVue" class="carouselVue lg:mt-5 lg:p-4 lg:flex lg:justify-between lg:overflow-hidden md:flex md:justify-between md:overflow-hidden md:p-4">
        <div class="carouselVue-container" ref="container">
          <div v-for="(anons , i) in afisha" :key="i" style="cursor: pointer" class="carouselVue-slide lg:rounded-lg lg:shadow-xl lg:mx-3 md:rounded-lg md:shadow-xl md:mx-3">
            <img :src="anons.image" class="md:w-full rounded-t-lg">
            <div class="lg:w-[250px] lg:mt-5 lg:text-sm lg:px-4 md:w-[205px] md:text-sm md:p-3 md:text-center md:text-custom-gray">
              {{ anons.content }}
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex lg:justify-between lg:p-4 md:block" style="margin-top: 5rem;">
        <div class="lg:w-[50%] md:w-[100%] md:p-4">
          <nav class="lg:flex lg:justify-left lg:items-end md:flex md:items-end md:justify-between">
            <button class="lg:text-4xl md:text-4xl news">ТЕНДЕРЫ</button>
            <div class="lg:mx-3 md:w-[50%]">
              <button class=" news">Государственные</button>
              <button class="mx-3 news">Коммерческие</button>
            </div>
            <div class="">
              <button class="news">Показать еще</button>
            </div>
          </nav>
          <hr class="border-t-2 border-grey my-3">
          <div class="lg:flex lg:flex-wrap">
            <div v-for="(trends, i) in tendery" :key="i" style="flex: 1 0 200px;" class="lg:my-5 md:px-[10px] md:h-[100px] md:mt-[15px] lg:m-[5px] lg:p-[5px]">
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
              <div class="text-sm text-blue-800 pt-2 news" style="cursor: pointer">
                {{ trends.content }}              
              </div>
              <hr class="border-t-2 border-grey my-5">
            </div>
          </div>
        </div>
        <div class="lg:w-[45%] md:w-[100%] md:p-4">
          <nav class="lg:flex lg:justify-between lg:items-end md:flex md:justify-between md:items-end">
            <button class="text-4xl news">ОБЪЯВЛЕНИЯ</button>
            <div class="md:w-[45%] lg:w-[35%]">
              <button class="news mx-5">Прочие</button>
            </div>
            <div class="">
              <button class="news">Показать еще</button>
            </div>
          </nav>
          <hr class="border-t-2 border-grey my-3">
          <div class="flex flex-col">
            <div class="flex items-center md:my-4" v-for="(ads, i) in obyavlenia" :key="i">
              <img :src="ads.img" class="rounded-lg lg:w-[75px] lg:h-[75px] md:w-[75px] md:h-[90px] md:w-full">
              <div class="flex flex-col m-3">
                <div class="font-semibold news" style="font-size: 15px;">
                  {{ ads.title }}
                </div>
                <div class="text-sm news">
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
          <button class="text-4xl news">МЕДИА</button>
          <div class="lg:w-[80%] md:w-[70%] md:text-sm">
            <button class="mx-3 news">Дайджест</button>
            <button class="mx-3 news">Наши видео</button>
            <button class="mx-3 news">Общество</button>
            <button class="mx-3 news">Афиши</button>
            <button class="mx-3 news">Бизнес</button>
            <button class="mx-3 news">Спорт</button>
          </div>
          <div>
            <button class="news md:text-sm">Показать еще</button>
          </div>
        </nav>
        <hr class="border-t-2 border-grey my-3">
        <div class="carousel">
          <div class="carousel-container" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }" >
            <div v-for="(item, index) in items" :key="index" class="carousel-slide mx-0.5">
              <!-- Slide content -->
              <div class="carousel-image-wrapper">
                <img :src="item.img" :alt="item.altText" class="carousel-image">
              </div>
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
  mounted() {
    this.getCurrentDateTime();
  },
  data: () => ({
    isDragging: false,
    startPosition: 0,
    currentTranslate: 0,
    previousPosition: 0,
    threshold: 50,
    currentDate: '',
    currentTime: '',
    hover: false,
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
    },
    getCurrentDateTime() {
      const currentDate = new Date();
      this.currentDate = currentDate.toDateString();
      this.currentTime = currentDate.toLocaleTimeString();
    },
    startDrag(event) {
      this.isDragging = true;
      this.startPosition = event.clientX || event.touches[0].clientX;
      this.previousPosition = this.currentTranslate;
    },
    endDrag() {
      this.isDragging = false;
    },
    drag(event) {
      if (this.isDragging) {
        const currentPosition = event.clientX || event.touches[0].clientX;
        const diff = currentPosition - this.startPosition;
        this.currentTranslate = this.previousPosition + diff;
        this.$refs.container.style.transform = `translateX(${this.currentTranslate}px)`;
      }
    }
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carouselVue {
    overflow: hidden;
    width: 100%;
  }
  
  .carouselVue-container {
    display: flex;
  }
  
  .carouselVue-slide {
    flex-shrink: 0;
  }
.carousel-image-wrapper:hover {
  cursor: pointer; /* Indicate hover interaction possibility */
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}

.date_time {
    margin-right: 10px;
    display: inline-block;
    min-width: 150px;
    font-size: 12px;
    line-height: 1.5;
    font-family: "PT Root UI", "Commissioner", Helvetica, sans-serif, Arial, Verdana;
}
.weather_info_temp {
    font-size: 18px;
}
.weather_info_caption {
    order: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 14px 10px auto 10px;
    font-size: 12px;
}
.weather_info_icon img {
    width: 25px;
    margin-right: 5px;
}
.weather_info_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
}
.weather_info {
    display: inline-block;
    width: 135px;
    height: 12px;
}
.weather_info a {
  position: relative;
  top: -16px;
  left: 0;
  width: 100%;
  height: 44px;
  background: #dee8ee;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  color: #554d4d;
}
.news:hover{
  color: red !important;
}
.box:hover {
  background-color: rgb(255, 255, 255); /* Change to your desired hover color */
  color: #000000; /* Change to your desired hover text color */
}
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  transition: transform 3s ease-in-out;
}

.carousel-slide {
  flex-shrink: 0;
}

.carousel-image {
  width: 100%;
  height: auto;
  object-fit: cover;
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