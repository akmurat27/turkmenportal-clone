<template>
    <div class="shadow-lg shadow-red-500 w-[80%] m-auto">
        <img class="w-full hidden md:block" src="@/assets/img/e5832b4ed51d3df3ec542e6dc1c92dff.gif">
        <div class="flex justify-between items-center h-12" style="background-color: #F1F1F1;">
            <div class="flex items-center" style="padding: 0 15px;">
                <span class="date_time">
                {{ currentDate }}
                {{ currentTime }}
                </span>
                <div class="weather_info w-[135px] h-[12px]">
                    <a href="https://turkmenportal.com/weather" class="flex justify-center news">
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
        <div class="p-4 w-[50%] m-auto">
            <div v-for="product in products" :key="product.id" class="product flex p-4">
                <img class="w-[90px] h-[60px]" :src="product.image">
                <div class="flex flex-col pl-2">
                    <div class="text-red-500 text-md font-bold truncate">{{ product.title }}</div>
                    <div class="text-gray-900 font-bold">{{ product.price }}</div>
                    <div class="text-gray-700">{{ product.category }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    data () {
        return {
            products: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                this.products = res.data
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
};
</script>

<style>
.product{
    cursor: pointer;
}
.truncate{
    max-width: 400px;
    overflow: hidden;
    white-space: nowrap; 
    text-overflow: ellipsis;
}
</style>