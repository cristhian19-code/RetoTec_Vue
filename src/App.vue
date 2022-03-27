<template>
  <div class="p-5">
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions(["getFilms"])
    },
    created() {
        this.getFilms();
    },
};
</script>