<template>
    <div>
      <p>Current Date: {{ currentDate }}</p>
      <p>Current Time: {{ currentTime }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentDate: '',
        currentTime: ''
      };
    },
    mounted() {
      this.getCurrentDateTime();
    },
    methods: {
      getCurrentDateTime() {
        const currentDate = new Date();
        this.currentDate = currentDate.toDateString();
        this.currentTime = currentDate.toLocaleTimeString();
      }
    }
  }
  </script>