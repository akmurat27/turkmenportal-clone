<template>
  <div class="shadow-lg shadow-red-500 w-[80%] m-auto">
    <img class="w-full md:hidden" src="@/assets/img/e5832b4ed51d3df3ec542e6dc1c92dff.gif">
    <div class="flex justify-between items-center h-12 md:flex md:justify-between md:items-center md:hidden " style="background-color: #F1F1F1;">
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
      <div class="flex items-center p-4">
        <div class="" @click="goToHome" style="cursor: pointer;"> 
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
          <button class="mx-2 text-xs font-medium h-8 box md:hidden">НОВОСТИ</button>
          <button class="mx-2 text-xs font-medium h-8 box md:hidden">СТАТЬИ</button>
          <button class="mx-2 text-xs font-medium h-8 box md:hidden">МЕДИА</button>
          <button class="mx-2 text-xs font-medium h-8 box lg:block md:hidden">БИЗНЕС</button>
          <button class="mx-2 text-xs font-medium h-8 box xl:block md:hidden lg:hidden">ИНФОРМАЦИОННАЯ ПРОГРАММА</button>
          <button class="mx-2 text-xs font-medium h-8 box xl:block md:hidden lg:hidden">ЧЛЕНЫ СППТ</button>
        </div>
        <div class="lg:flex lg:items-center md:flex md:items-center">
          <button class="flex items-center box h-8 px-2.5" >
            <img src="@/assets/plus-5-512.png" class="w-[16px] h-[16px]">
            <span class="text-xs font-medium lg:block md:hidden px-1">ДОБАВИТЬ ОБЪЯВЛЕНИЕ</span>
          </button>
          <button class="flex items-center box h-8 px-2.5">
            <img src="@/assets/search-13-512.png" class="w-[16px] h-[16px]">
            <span class="text-xs font-medium lg:block md:hidden px-1">ПОИСК</span>
          </button>
          <button class="box pl-2.5 xl:h-8 xl:w-8 xl:m-auto xl:flex xl:items-center xl:justify-center lg:hidden">
            <img src="@/assets/user-512.png" class="w-[16px] h-[16px]">
          </button>
        </div>
      </div>
    </div>
    <div class="second-nav xl:flex xl:justify-between xl:items-end xl:h-[50px] xl:p-4 xl:mt-3 lg:hidden md:w-[100%] md:h-[80px]">
      <div class="flex items-end md:flex md:justify-center md:items-center md:flex-wrap md:pt-[20px] ">
        <button class="text-4xl mr-3 lg:block md:hidden font-medium news" style="color: #505050">НОВОСТИ</button>
        <button class="mx-3 md:mx-2 text-sm md:text-[15px]  lg:block news" style="color: #505050">Дайджест</button>
        <button class="mx-3 md:mx-2 text-sm md:text-[15px]  lg:block news" style="color: #505050">Политика</button>
        <button class="mx-3 md:mx-2 text-sm md:text-[15px]  lg:block news" style="color: #505050">Культура</button>
        <button class="mx-3 md:mx-2 text-sm md:text-[15px]  lg:block news" style="color: #505050">Экономика</button>
        <button class="mx-3 md:mx-2 text-sm md:text-[15px]  lg:block news" style="color: #505050">Образование</button>
        <button class="mx-3 md:mx-2 text-sm md:text-[15px] news" style="color: #505050">Туризм</button>
        <button class="mx-3 md:mx-2 text-sm md:text-[15px] news" style="color: #505050">Технологии</button>
        <button class="mx-3 md:mx-2 text-sm md:text-[15px] news" style="color: #505050">Здоровье</button>
      </div>
      <button class="text-sm news md:hidden" style="color: #505050">Пoказать еще</button>
    </div>
    <hr style="width: 98%; margin: auto;">
    <div class="flex">
      <div class="border w-[220px] px-4 md:hidden lg:block">
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
            <router-link to="/NewsComp"><span class="lenta">{{ trends.text }}</span></router-link>
            <hr style="width: 100%; margin-top: 10px; margin-bottom: 15px">
          </div>
          <div id="second" class="hidden p-4">
            Second tab
          </div>
        </div>
        <h1>Архив новостей</h1>
        <div class="calendar mb-[20px]">
          <div class="header">
            <button @click="previousMonth" style="color: blue;">&lt;</button>
            <h2>{{ currentMonth }}</h2>
            <button @click="nextMonth" style="color: blue;">&gt;</button>
          </div>
          <div class="days-of-week">
            <div v-for="dayOfWeek in daysOfWeek" :key="dayOfWeek" class="day-of-week">{{ dayOfWeek }}</div>
          </div>
          <div class="days">
            <div v-for="week in weeks" :key="week">
              <div v-for="day in week" :key="day.value" :class="{ 'day': true, 'current-day': isCurrentDay(day.value) }">{{ day.value }}</div>
            </div>
          </div>
        </div>
        <hr style="width: 100%; margin: auto;">
        <img src="@/assets/gif/1db207ea77dd7c4924f3fd368f84cd56.gif" class="mt-[20px]">
      </div>

      <div class="mainPage w-[75%] p-4 md:w-full">
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
        <img class="rounded-md md:w-full" src="@/assets/aboutView/c71d765b359015e223273d36bf9d55f3-8970836-382x254-2.webp">
        <span class="text-xs"> Фото: turkmenistan.gov.tm </span>
        <div class="article_text" v-for="(item, i) in article_text" :key="i" >
          <p>{{ item.text }}</p>
        </div>
        <hr style="width: 100%; margin: auto; margin-top: 20px; margin-bottom: 20px;">
        <div class="flex h-[30px] md:flex md:flex-col md:h-[80px]">
          <h1>Поделиться в социальной сети:</h1>
          <div class="flex w-[10%] mx-2 md:mx-0">
            <img class="mx-0.5 md:w-[24px] md:h-[24px]" src="@/assets/set/VK_Compact_Logo_(2021-present).svg.png">
            <img class="mx-0.5 md:w-[24px] md:h-[24px]" src="@/assets/set/x-social-media-logo-icon.webp">
            <img class="mx-0.5 md:w-[24px] md:h-[24px]" src="@/assets/set/Odnoklassniki.svg.png">
            <img class="mx-0.5 md:w-[24px] md:h-[24px]" src="@/assets/set/images.png">
          </div>
        </div>
        <h1 class="mb-[10px] md:hidden lg:block">Если вы заметили ошибку в тексте, пожалуйста, выделите её и нажмите Ctrl+Enter</h1>
        <img src="@/assets/img/3b81b7a6f8f89c1765c9f531ff6ce0c3.gif" class="md:hidden lg:block">
        <h1 class="mt-[40px] text-red-800 font-medium text-[19px]">КОММЕНТАРИИ</h1>
        <hr style="width: 100%; margin: auto; margin-bottom: 10px; margin-top: 5px;">
        <input class="w-full  fake_comment_input" type="text">
        <h1 style="position: relative; bottom: 5rem;" class="ml-[20px]">Для того, чтобы оставить комментарий <a href="#" style="color: #006FD1;"> авторизуйтесь </a> или <a href="#" style="color: #006FD1;"> зарегистрируйтесь </a> </h1>
        <h1 class="mt-[40px] text-red-800 font-medium text-[19px]">ЧИТАЙТЕ ТАКЖЕ</h1>
        <hr style="width: 100%; margin: auto; margin-bottom: 10px; margin-top: 5px;">
        <div class="flex flex-wrap">
          <div v-for="(item, i) in read_more" :key="i" style="flex: 1 0 300px;" class="md:flex">
            <img :src="item.image" class="rounded-md h-[200px] md:w-[175px] md:py-3 md:mr-2">
            <p class="mt-2 text-[14px] w-[300px] md:w-auto md:font-medium md:text-[14px]">{{ item.text }}</p>
          </div>
        </div>
      </div>
      <div class="ads w-[25%] p-4 md:hidden lg:block">
        <img class="rounded-lg" src="@/assets/img/53daeb106dab95f9c75ffc67d6f5c2d8.gif">
        <img class="py-2" src="@/assets/img/9772b21286f1c201eb7c03588cef8f3c.jpg">
        <hr style="width: 100%; margin: auto; margin-top: 20px; margin-bottom: 20px;">
        <span class="headerColor2">АФИША</span>
        <img src="@/assets/aboutView/ads/d6b8cbb94d8851718aeef9f582e45381-8970735-240x160-2.webp">
        <span class="entry-title my-2">Киноафиша киноконцертного зала «Туркменистан»</span>
        <hr style="width: 100%; margin: auto; margin-top: 20px; margin-bottom: 20px;">
        <span class="headerColor2">СТАТЬИ</span>
        
        <div class="carousel">
          <div class="carousel-container" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }" >
            <div v-for="(item, index) in items" :key="index" class="carousel-slide">
              <!-- Slide content -->
              <div class="carousel-image-wrapper">
                <img :src="item.img" :alt="item.altText" class="carousel-image">
                {{item.text}}
              </div>
            </div>
          </div>
          <div class="pagination">
            <button v-for="(item, index) in pagination" :key="index" @click="goToSlide(index)" :class="{ 'active': index === currentSlide }">{{ index + 1 }}</button>
          </div>
          <button @click="prevSlide" :disabled="currentSlide === 0" class="w-[50px] h-[50px]" id="prev">
            <img class="w-[50px] h-[50px]" src="@/assets/Media/chevron-left.svg">
          </button>
          <button @click="nextSlide" :disabled="currentSlide === items.length - 1"  class="w-[50px] h-[50px]" id="next">
            <img class="w-[50px] h-[50px]" src="@/assets/Media/chevron-right.svg">
          </button>
        </div>
        <hr style="width: 100%; margin: auto; margin-top: 20px; margin-bottom: 20px;">
        <div class="flex  justify-center">
          <img src="@/assets/gif/1db207ea77dd7c4924f3fd368f84cd56.gif" class="mt-[20px]">
        </div>
      </div>
    </div>
    <fooTer />
  </div>
</template>
<script>
import fooTer from '@/components/fooTer.vue'
export default {
  components: {
    fooTer
  },
  props: {
    item: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    currentSlide: 0,
    slideWidth: 385,
    date: new Date(),
    read_more: [
      {
        image: require("@/assets/readMore/39fdfc111a1666cf30d957dc7e16a4be-8974722-300x210-2.jpg"),
        text: "Посол Туркменистана почтил память героев Великой Отечественной войны в Минске"
      },
      {
        image: require("@/assets/readMore/39fdfc111a1666cf30d957dc7e16a4be-8974722-300x210-2.jpg"),
        text: "Посол Туркменистана почтил память героев Великой Отечественной войны в Минске"
      },
      {
        image: require("@/assets/readMore/39fdfc111a1666cf30d957dc7e16a4be-8974722-300x210-2.jpg"),
        text: "Посол Туркменистана почтил память героев Великой Отечественной войны в Минске"
      },
      {
        image: require("@/assets/readMore/39fdfc111a1666cf30d957dc7e16a4be-8974722-300x210-2.jpg"),
        text: "Посол Туркменистана почтил память героев Великой Отечественной войны в Минске"
      },
      {
        image: require("@/assets/readMore/39fdfc111a1666cf30d957dc7e16a4be-8974722-300x210-2.jpg"),
        text: "Посол Туркменистана почтил память героев Великой Отечественной войны в Минске"
      },
      {
        image: require("@/assets/readMore/39fdfc111a1666cf30d957dc7e16a4be-8974722-300x210-2.jpg"),
        text: "Посол Туркменистана почтил память героев Великой Отечественной войны в Минске"
      }
    ],
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
    ],
    items: [
      {
        img: require('@/assets/carouselStatya/1c3be744fcf54c944a93d1049b574ffa-8974170-385x435-2.webp'),
        text: 'Что такое Belet Film?'
      },
      {
        img: require('@/assets/carouselStatya/8e5f8dfe8150bec7b70f92b9c8e7d62e-8974711-384x435-2.webp'),
        text: 'Главные новости Туркменистана и мира на 13 марта'
      },
      {
        img: require('@/assets/carouselStatya/ac745178635a71080967a6527b07e218-8974419-385x435-2.webp'),
        text: 'Главные новости Туркменистана и мира на 12 марта'
      },

    ],
  }), 
  methods: {
    goToHome() {
      this.$router.push('/homePage')
    },
    previousMonth() {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1);
    },
    nextMonth() {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
    },
    isCurrentDay(day) {
      const today = new Date();
      return this.date.getMonth() === today.getMonth() && this.date.getFullYear() === today.getFullYear() && day === today.getDate();
    },
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
    goToSlide(index) {
      this.currentSlide = index;
    }
  },
  computed: {
    currentMonth() {
      return this.date.toLocaleString('default', { month: 'long', year: 'numeric' });
    },
    daysOfWeek() {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    },
    weeks() {
      const firstDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
      const daysInMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
      const weeks = [];
      let week = [];
      for (let i = 0; i < firstDayOfMonth; i++) {
        week.push({ value: '' });
      }
      for (let i = 1; i <= daysInMonth; i++) {
        const currentDay = new Date(this.date.getFullYear(), this.date.getMonth(), i).getDay();
        week.push({ value: i });
        if (currentDay === 6 || i === daysInMonth) {
          weeks.push(week);
          week = [];
        }
      }
      return weeks;
    },
    pagination() {
      return Array.from({ length: Math.ceil(this.items.length / 3) }, (_, index) => index);
    },
  },
}
</script>

<style scoped>
.news:hover{
  color: red !important;
}
.pagination {
    margin-top: 10px;
  }
  
  .pagination button {
    cursor: pointer;
    background: none;
    border: none;
    margin-right: 5px;
    padding: 5px;
  }
  
  .pagination button.active {
    background-color: #ccc;
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
}
.carousel-image-wrapper:hover {
  cursor: pointer; /* Indicate hover interaction possibility */
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}
.calendar {
  font-family: Arial, sans-serif;
  width: 190px;
  padding: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.days-of-week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  font-size: 12px;
}

.day-of-week {
  text-align: center;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  font-size: 12px;
}

.day {
  text-align: center;
  color: blue;
}

.current-day {
  color: #ff3d02;
}

button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 18px;
}

.fake_comment_input {
    background: #f5f5f5 none repeat scroll 0 0;
    border: 1px solid #d9d9d9;
    color: #595959;
    display: block;
    font-size: 13px;
    line-height: 22px;
    padding: 11px 19px 54px;
}
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