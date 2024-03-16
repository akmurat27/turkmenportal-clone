<template>
    <div>
      <div ref="carousel" class="overflow-hidden">
        <div ref="content" class="flex" :style="{ transform: `translateX(-${scroll}px)` }">
          <!-- Your carousel content here -->
        </div>
      </div>
      <button @click="scrollNext" v-show="showNext">Next</button>
      <button @click="scrollPrev" v-show="showPrev">Prev</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gap: 16,
        scroll: 0,
        width: 0
      };
    },
    computed: {
      showNext() {
        return this.$refs.carousel && this.$refs.content &&
          this.$refs.carousel.offsetWidth + this.$refs.carousel.scrollLeft < this.$refs.content.scrollWidth;
      },
      showPrev() {
        return this.$refs.carousel && this.$refs.carousel.scrollLeft > 0;
      }
    },
    mounted() {
      this.width = this.$refs.carousel.offsetWidth;
      window.addEventListener("resize", () => {
        this.width = this.$refs.carousel.offsetWidth;
      });
    },
    methods: {
      scrollNext() {
        this.$refs.carousel.scrollBy(this.width + this.gap, 0);
        this.scroll = this.$refs.carousel.scrollLeft;
      },
      scrollPrev() {
        this.$refs.carousel.scrollBy(-(this.width + this.gap), 0);
        this.scroll = this.$refs.carousel.scrollLeft;
      }
    }
  };
  </script>
  
  <style>
  .overflow-hidden {
    overflow: hidden;
  }
  .flex {
    display: flex;
  }
  </style>
  