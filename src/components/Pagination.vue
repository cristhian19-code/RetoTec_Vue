<template>
    <div class="flex justify-center gap-3 mt-3">
        <button
            @click="getFilmsPage(page - 1)"
            class="bg-blue-500 px-2 py-1 text-white rounded-md"
            v-for="page in total_page"
            :key="page"
        >{{ page }}</button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['total_page'])
    },
    methods: {
        ...mapActions(['getFilmsPage'])
    },
};
</script>