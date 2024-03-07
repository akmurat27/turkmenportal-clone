<template>
  <div class="w-[80%] m-auto">
    <div class="flex">
      <img src="@/assets/img/logo_tp.png">
      <img class="rounded-lg ml-8 mb-3" src="@/assets/img/3cc278f317104ffe0e261fdbf032062c.gif">
    </div>
    <div class="nav">
      <div class="flex justify-around items-center bg-red-500 text-white h-10">
          
        <span>ВСЕ КАТЕГОРИИ</span>
        <span>НОВОСТИ</span>
        <span>СТАТЬИ</span>
        <span>МЕДИА</span>
        <span>БИЗНЕС</span>
        <span>ИНФОРМАЦИОННАЯ ПРОГРАММА</span>
        <span>ЧЛЕНЫ СППТ</span>
        <span>ДОБАВИТЬ ОБЪЯВЛЕНИЕ</span>
        <span>ПОИСК</span>
          
      </div>
    </div>
    <div class="second-nav">
      <div class="flex justify-around items-center h-10">
        <span>НОВОСТИ</span>
        <span>Дайджест</span>
        <span>Политика</span>
        <span>Культура</span>
        <span>Экономика</span>
        <span>Образование</span>
        <span>Туризм</span>
        <span>Технологии</span>
        <span>Здоровье</span>
        <span>Паказать еще</span>
      </div>
    </div>
    <hr>
    <div class="flex">
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
        <img class="my-10" src="@/assets/img/videoframe_3341.png">
      </div>
    </div>
    <div>
      <img style="position: absolute; bottom: 100px" src="@/assets/img/3b81b7a6f8f89c1765c9f531ff6ce0c3.gif">
    </div>
    <div class="">
      <div class="СПОРТ w-[30%]">
        <div class="flex justify-between items-end">
          <span class="text-4xl">СПОРТ</span>
          <span class="text-sm">Показать еще</span>
        </div>
        <hr class="border-t-2 border-black my-3">
        <div class="flex flex-col ">
          <div class="flex" v-for="(games, i) in sport" :key="i">
            <img class="m-3 rounded-lg" :src="games.image">
            <div class="flex flex-col text-left m-3">
              <div>
                {{ games.text }}
              </div>
              <div>
                {{ games.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
        image: require('@/assets/sport/2a6bcea488477a85ccfc5986d5c3fb8e-8967072-90x114-2.webp'),
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
  ]
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
