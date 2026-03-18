<script>
    import Header from './components/Header.vue';
    import Products from './components/Products.vue';
    import Kart from './components/Kart.vue'

    export default {
        components:{
            Header,
            Products,
            Kart
        }
    }
</script>

<template>
    <div class="p-4 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        <Header />
        <Products />
        <Kart />
    </div>
</template>