<template>
    <div>
      <h1>Weather in Ashgabat</h1>
      <div v-if="weatherData">
        <p>Temperature: {{ weatherData.main.temp }} °C</p>
        <p>Description: {{ weatherData.weather[0].description }}</p>
        <!-- Add more weather information as needed -->
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        weatherData: null,
        apiKey: 'YOUR_OPENWEATHERMAP_API_KEY'
      };
    },
    mounted() {
      this.fetchWeatherData();
    },
    methods: {
      async fetchWeatherData() {
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ashgabat&appid=${this.apiKey}&units=metric`);
          if (!response.ok) {
            throw new Error('Weather data not found');
          }
          const data = await response.json();
          this.weatherData = data;
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  </script>