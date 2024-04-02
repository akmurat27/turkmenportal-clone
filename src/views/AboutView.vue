<template>
    <h1 @click="goToHome" style="cursor: pointer;">This is an about page</h1>
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
        <div class="xl:flex xl:items-center md:flex md:items-center">
          <button class="flex items-center box h-8">
            <img src="@/assets/icons8-menu.svg" class="w-[12px] h-[12px]">
            <span class="mx-2 text-xs font-medium lg:block md:hidden"> ВСЕ КАТЕГОРИИ </span>
          </button>
          <button class="mx-2 text-xs font-medium h-8 box">НОВОСТИ</button>
          <button class="mx-2 text-xs font-medium h-8 box">СТАТЬИ</button>
          <button class="mx-2 text-xs font-medium h-8 box">МЕДИА</button>
          <button class="mx-2 text-xs font-medium h-8 box lg:block md:hidden">БИЗНЕС</button>
          <button class="mx-2 text-xs font-medium h-8 box xl:block md:hidden lg:hidden">ИНФОРМАЦИОННАЯ ПРОГРАММА</button>
          <button class="mx-2 text-xs font-medium h-8 box xl:block md:hidden lg:hidden">ЧЛЕНЫ СППТ</button>
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
          <button class="box xl:h-8 xl:ml-2 xl:w-8 xl:m-auto xl:flex xl:items-center xl:justify-center lg:hidden">
            <img src="@/assets/user-512.png" class="h-[18px]">
          </button>
        </div>
      </div>
    </div>
    <div class="second-nav xl:flex xl:justify-between xl:items-end xl:h-[50px] xl:p-4 xl:mt-3 lg:hidden">
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
    <div class="flex">
      <!-- <div class="sidebar w-[25%] p-4 border">
        <span class="font-medium text-lg">Последние новости</span>
        
        <div id="tabs" class="pt-2 flex justify-start w-[190px] h-[50px]">
          <button class="border border-solid border-black mr-2">
            <span class="text-md mx-3">В тренде</span>
          </button>
          <button class="border border-solid border-black mr-2">
            <span class="text-md mx-3">Лента</span>
          </button>
        </div>
        
        <hr style="width: 100%;">
        
        <div v-for="trends in trendy" :key=trends>
          <div class="flex my-2">
            <span class="text-xs mr-2">{{ trends.data }}</span>
            <div class="flex items-center">
              <img :src="trends.img" style="width: 10px; height: 10px;" >
              <span class="text-xs mx-1">{{ trends.views }}</span>
            </div>
          </div>
          <span class="lenta">{{ trends.text }}</span>
          <hr style="width: 100%; margin-top: 10px; margin-bottom: 15px">
        </div>
      </div> -->
      <div class="border w-[30%] px-4">
        <span class="font-medium text-lg">Последние новости</span>
        <!-- Tabs -->
        <ul id="tabs" class="inline-flex w-full border-b">
          <li class="bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px"><a id="default-tab" href="#first">В тренде</a></li>
          <li class="px-4 text-gray-800 font-semibold py-2 rounded-t"><a href="#second">Лента</a></li>
        </ul>
      
        <!-- Tab Contents -->
        <div id="tab-contents">
          <div id="first" v-for="trends in trendy" :key=trends class="">
            <div class="flex my-2">
              <span class="text-xs mr-2">{{ trends.data }}</span>
              <div class="flex items-center">
                <img :src="trends.img" style="width: 10px; height: 10px;" >
                <span class="text-xs mx-1">{{ trends.views }}</span>
              </div>
            </div>
            <span class="lenta">{{ trends.text }}</span>
            <hr style="width: 100%; margin-top: 10px; margin-bottom: 15px">
          </div>
          <div id="second" class="hidden p-4">
            Second tab
          </div>
        </div>
      </div>

      <div class="mainPage w-[75%] p-4">
        <span class="text-2xl font-bold">В Туркменистане стартует финальная часть проекта «Юные вестники мира»</span>
        <div class="flex my-5">
          <span class="font-bold">15:37</span> 
          <span class="font-medium mx-2">02.04.2024</span> 
          <div class="flex items-center mx-2">
            <img src="@/assets/aboutView/icons/comment-svgrepo-com.svg" style="width: 12px; height: 12px;">
            <span class="mx-1">0</span> 
          </div>
          <div class="flex items-center">
            <img src="@/assets/obyavlenie/eye-regular.svg" style="width: 10px; height: 10px;" > 
            <span class="mx-1">483</span>
          </div>
        </div>
        <img class="rounded-md" src="@/assets/aboutView/c71d765b359015e223273d36bf9d55f3-8970836-382x254-2.webp">
        <span class="text-xs"> Фото: turkmenistan.gov.tm </span>
        <div class="article_text" v-for="(item, i) in article_text" :key="i" >
          <p>{{ item.text }}</p>
        </div>
      </div>
      <div class="ads w-[25%] p-4">
        <img class="rounded-lg" src="@/assets/img/53daeb106dab95f9c75ffc67d6f5c2d8.gif">
        <img class="py-2" src="@/assets/img/9772b21286f1c201eb7c03588cef8f3c.jpg">
        <hr style="width: 100%; margin: auto; margin-top: 20px; margin-bottom: 20px;">
        <span class="headerColor2">АФИША</span>
        <img src="@/assets/aboutView/ads/d6b8cbb94d8851718aeef9f582e45381-8970735-240x160-2.webp">
        <span class="entry-title my-2">Киноафиша киноконцертного зала «Туркменистан»</span>
        <hr style="width: 100%; margin: auto; margin-top: 20px; margin-bottom: 20px;">
        <span class="headerColor2">СТАТЬИ</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    article_text: [
      {  
        text: "Институт международных отношений Министерства иностранных дел Туркменистана объявил даты проведения полуфинала и финала III сезона проекта «Юные вестники мира» среди старшеклассников страны."
      },
      {  
        text: "Две полуфинальные игры состоятся 17 и 19 апреля в стенах вуза, а финал запланирован на 8 мая, сообщает издание «Туркменистан: Золотой век»."
      },
      { 
         text: " По итогам восьми отборочных игр, прошедших с начала учебного года 2023-2024, сформирована команда из 16 наиболее талантливых и способных участников-полуфиналистов, которым предстоит продолжить интеллектуальную борьбу."
      },

      { 
        text: "В каждой из двух полуфинальных игр примут участие по 8 школьников. Право выступить в финале получат 8 лучших игроков – по 4 победителя из каждого полуфинала, между которыми и разыграют призовые места в заключительном соревновании."
      },

      { 
        text: "Как сообщают организаторы, участников ждут непростые и увлекательные задания, ставшие еще более строгой проверкой компетенций учащихся. Кроме того, посредством видеосвязи юным вестникам будут заданы вопросы от ученых страны и соотечественников."
      },

      { 
        text: " Для качественной подготовки к финальным испытаниям на официальном сайте ИМО МИД Туркменистана www.iirmfa.edu.tm размещен обширный список рекомендованной литературы."
      },

      { 
        text: "Интеллектуальный проект проводится среди учащихся 9-11 классов и нацелен на профориентацию, выявление одаренных школьников с широкими знаниями и качествами, необходимыми для построения успешной дипломатической карьеры."
      },

      { 
        text: 'Тематика проекта охватывает разные периоды истории туркменского народа и становления национальной дипломатии. Поскольку III сезон посвящен 300-летию великого поэта и философа Махтумкули Фраги, в содержание игр включены задания о его жизни и литературном наследии, являющемся «национальным светочем общечеловеческих ценностей».' }
    ],
    trendy: [
      {
        data: "24 март 2024",
        img: require("@/assets/obyavlenie/eye-regular.svg"),
        views: "1234",
        text: "Глава Туркменистана поручил провести на высоком уровне форум TEIF-2024 в Париже"
      },
      {
        data: "24 март 2024",
        img: require("@/assets/obyavlenie/eye-regular.svg"),
        views: "1234",
        text: "Глава Туркменистана поручил провести на высоком уровне форум TEIF-2024 в Париже"
      },
      {
        data: "24 март 2024",
        img: require("@/assets/obyavlenie/eye-regular.svg"),
        views: "1234",
        text: "Глава Туркменистана поручил провести на высоком уровне форум TEIF-2024 в Париже"
      },
      {
        data: "24 март 2024",
        img: require("@/assets/obyavlenie/eye-regular.svg"),
        views: "1234",
        text: "Глава Туркменистана поручил провести на высоком уровне форум TEIF-2024 в Париже"
      },
      {
        data: "24 март 2024",
        img: require("@/assets/obyavlenie/eye-regular.svg"),
        views: "1234",
        text: "Глава Туркменистана поручил провести на высоком уровне форум TEIF-2024 в Париже"
      },
      {
        data: "24 март 2024",
        img: require("@/assets/obyavlenie/eye-regular.svg"),
        views: "1234",
        text: "Глава Туркменистана поручил провести на высоком уровне форум TEIF-2024 в Париже"
      },
      {
        data: "24 март 2024",
        img: require("@/assets/obyavlenie/eye-regular.svg"),
        views: "1234",
        text: "Глава Туркменистана поручил провести на высоком уровне форум TEIF-2024 в Париже"
      },  
    ]
  }), 
  methods: {
    goToHome() {
      this.$router.push('/homePage')
    },
  },

}
</script>

<style>
.lenta {
  color: #3d3d3d;
  font-size: 14px;
  line-height: 1.5;
  display: block;
}
.article_text p {
  margin: 0 0 20px;
  word-break: break-word;
  text-align: left !important;
}
.article_text {
  font-family: "PT Root UI", sans-serif;
  font-weight: normal;
  /* padding-bottom: 10px; */
  font-size: 16px;
  line-height: 1.57;
  margin: 18px 0;
  color: #000;
}
.headerColor2 {
  color: #505050;
  /* font-family: "Commissioner", Helvetica, sans-serif, Arial, Verdana; */
  font-size: 18px;
  font-weight: normal;
  line-height: 1.45;
  font-stretch: condensed;
}
.entry-title {
    color: #3d3d3d;
    font-size: 14px;
    line-height: 1.45;
    /* color: #000; */
    display: block;
}
</style>