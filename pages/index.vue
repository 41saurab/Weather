<template>
    <div>
        <div class="mb-3 container text-center items-center text-3xl">
            <label for="" class="form-label">City : {{ city }} </label>
            <select class="form-select form-select-lg" name="" id="" v-model="city" @change="getUrl(city)">
                <option selected>Select city</option>
                <option :value="p.name" v-for="(p, index) in products.data.data" :key="index">{{ p.name }}</option>
            </select>

            <div v-if="pending" class="flex flex-col items-center justify-center py-6">
                <img src="~/assets/images/loading.gif" alt="">
                <span>Searching location...</span>
            </div>
            <div v-else>
                <h1>{{ weathers.weather[0].main }}</h1>

                <div class="flex items-center justify-center">
                    <img src="~/assets/images/cloudy.gif" alt="" v-if="weathers.weather[0].main == 'Clouds'">
                    <img src="~/assets/images/rainy.gif" alt="" v-if="weathers.weather[0].main == 'Rain'">
                    <img src="~/assets/images/sunny.gif" alt="" v-if="weathers.weather[0].main == 'Sunny'">
                    <img src="~/assets/images/thunderstorm.gif" alt="" v-if="weathers.weather[0].main == 'Thunderstorm'">
                    <img src="~/assets/images/windy.gif" alt="" v-if="weathers.weather[0].main == 'Wind'">
                    <img src="~/assets/images/haze.gif" alt="" v-if="weathers.weather[0].main == 'Haze'">
                </div>
                <div>
                    <h3> {{ weathers.main.temp }}°C</h3>
                </div>
                <div>
                    <h2>{{ weathers.weather[0].description }}</h2>
                </div>
            </div>
        </div>

        <div class="felx text-center justify-center my-6 text-xl font-extralight text-gray-400">Powered by:<span
                class="font-extralight">
                asantusta</span>
        </div>
    </div>
</template>

<script setup>
let city = ref("Dharan");
let url = ref("https://api.openweathermap.org/data/2.5/weather?q=dharan&appid=bb56c02e1c9d8725b103b04b0b5d1401&units=metric");

const { data: products } = await useFetch("https://www.nepallocation.com.np/api/v1/city/list", { headers: { Authorization: "Bearer DwbgfEy-Tll1h-VLNebB1IKS" } });
const { data: weathers, pending } = await useFetch(url, { refetch: true });

function getUrl(city) {
    url.value = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb56c02e1c9d8725b103b04b0b5d1401&units=metric`;
}
</script>

<style scoped></style>
