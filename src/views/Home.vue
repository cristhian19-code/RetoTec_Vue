<template>
    <h1 class="text-4xl my-5 text-center font-bold text-gray-700">Films</h1>

    <Loading v-if="isLoading" />
    <Table v-else />
    
    <FabReload/>
</template>

<script>
import Table from "../components/Table.vue";
import { mapState } from 'vuex';
import Loading from "../components/Loading.vue";
import FabReload from "../components/FabReload.vue";

export default {
    components: {
    Table,
    Loading,
    FabReload
},
    computed: {
        ...mapState(['isLoading'])
    }
};
</script>