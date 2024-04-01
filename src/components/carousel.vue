<template>
    <div class="carousel" ref="carousel" @mousedown="startDrag" @mouseup="endDrag" @mousemove="drag">
      <div class="carousel-container" ref="container">
        <div class="carousel-slide" v-for="(item, index) in items" :key="index">
          <!-- Your slide content -->
          <img :src="item.src" alt="Slide Image">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDragging: false,
        startPosition: 0,
        currentTranslate: 0,
        previousPosition: 0,
        threshold: 50,
        items: [ /* Your carousel items */ ]
      };
    },
    methods: {
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
  };
  </script>
  
  <style>
  .carousel {
    overflow: hidden;
    width: 100%;
  }
  
  .carousel-container {
    display: flex;
  }
  
  .carousel-slide {
    flex-shrink: 0;
    width: 100%;
  }
  </style>
  