<template>
<div class="bg-red-800 h-auto flex justify-center">
    <div class="w-[500px] rounded-lg border border-white flex flex-col items-center">
        <img :src="products.image" class="w-[300px] h-[300px] border border-black">
        <div class="text-white">
            title:<div class="text-lg font-bold"> {{products.title}}</div>
            price:<div class="text-lg font-bold"> {{products.price}}</div>
            id:<div class="text-lg font-bold"> {{products.id}}</div>
            description:<div class="text-lg font-bold"> {{products.description}} </div>
            category:<div class="text-lg font-bold"> {{products.category}} </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default{
    data:() => ({
        products: [],
    }),
    created() {
        this.getProductDetail()
    },
    methods: {
        getProductDetail() {
            let param_id = this.$route.params.id
            axios.get('https://fakestoreapi.com/products/' + param_id)
            .then((res) => {
                this.products = res.data
                console.log(this.products)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    
    }
}
</script>
