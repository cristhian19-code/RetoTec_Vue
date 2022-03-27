<template>
    <tr class="bg-white border-b hover:bg-gray-100">
        <th class="p-2">
            <img class="h-24 block mx-auto" :src="film.image" />
        </th>
        
        <td class="px-6 py-4">{{ film.title }}</td>
        <td class="px-6 py-4">{{ film.director }}</td>
        <td class="px-6 py-4">{{ film.release_date }}</td>
        <td class="px-6 py-4">{{ film.rt_score }}</td>
        <td class="px-6 py-4 text-right">
        <router-link :to="{name: 'Film', params: {id: film.id}}" class="font-medium text-blue-600 hover:underline">Ver mas</router-link>
            <button @click="goFilm" ></button>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        film: {
            type: Object
        }
    },
};
</script>