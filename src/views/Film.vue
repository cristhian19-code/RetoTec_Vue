<template>
    <Loading v-if="!film.image" />
    <div
        v-else
        class="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between"
    >
        <img class="w-96" :src="film.image" alt />
        <div class="text-left w-full p-4">
            <h1 class="text-3xl font-extrabold text-gray-800">{{ film.title }}({{ film.release_date }})</h1>
            <h2 class="text-xl text-gray-500 mt-3 mb-5">{{ film.original_title }} - {{getTimeString}}</h2>
            <p class="font-bold text-gray-700 text-md my-2">
                Director:
                <span>{{ film.director}}</span>
            </p>
            <p class="font-bold text-gray-700 text-md my-2">
                Productor:
                <span>{{ film.producer}}</span>
            </p>
            <p class="font-bold text-md text-gray-700 mb-4">
                Descripcion:
                <span class="text-xs">{{ film.description }}</span>
            </p>
            <router-link class="text-blue-500 hover:underline font-semibold" :to="{name: 'Home'}">Atras</router-link>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import Loading from "../components/Loading.vue";
import {formatString} from '../helpers/formatString'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapGetters(["getFilmByID"]),
        film() {
            return this.getFilmByID(this.id) || {};
        },
        getTimeString(){
            return formatString(this.film.running_time)
        }
    },
    components: { Loading }
};
</script>