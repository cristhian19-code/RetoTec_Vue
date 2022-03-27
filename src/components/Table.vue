<template>
    <input class="w-full border rounded-md outline-none py-2 mb-3 px-2" v-model="search" type="text" placeholder="Busca por titulo....">

    <table class="w-full text-sm text-left text-gray-600">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Imagen
                </th>
                <th scope="col" class="px-6 py-3">
                    Titulo
                </th>
                <th scope="col" class="px-6 py-3">
                    Director
                </th>
                <th scope="col" class="px-6 py-3">
                    Año
                </th>
                <th scope="col" class="px-6 py-3">
                    Puntaje
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <TableItem v-for="film in films" :key="film.id" :film="film"/>
        </tbody>
    </table>
    <Pagination />
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import TableItem from './TableItem.vue'
import Pagination from './Pagination.vue'

export default {
    data() {
        return {
            search: ""
        }
    },
    computed: {
        ...mapGetters(["searchFilm"]),
        ...mapState(['filmsPaginated']),
        films(){
            // Arreglo paginado o busqueda vacia retorna getter searchFilm
            if(this.filmsPaginated.length === 0 || this.search.length>0){
                return this.searchFilm(this.search)
            }
            // retorna el arreglo paginado
            else{
                return this.filmsPaginated;
            }
        }
    },
    components: { TableItem, Pagination }
}

</script>