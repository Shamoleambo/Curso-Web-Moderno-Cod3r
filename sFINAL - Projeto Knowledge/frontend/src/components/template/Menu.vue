<template>
    <aside class="menu" v-show="isMenuVisible" ></aside>
</template>

<script>
import { mapState } from 'vuex'; //mapState is responsible to map store's attributes inside the component

export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible']) //isMenuVisible is the attribute being mapped inside the Menu Component
}
</script>

<style>
    .menu{
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>