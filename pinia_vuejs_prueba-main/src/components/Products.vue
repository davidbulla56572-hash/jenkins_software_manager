<script setup>
    import useKartStore from '../store/kartStore.js';
    import { storeToRefs } from 'pinia';
    import CardProduct from './CardProduct.vue';
    
    const store = useKartStore();
    const {products} = storeToRefs(store);

    const addToKartProduct = (idProduct) => {
        store.addToKart({idProduct});
    };

</script>

<template>
    <div class="sm:col-span-2 p-2 bg-slate-300">
        <p class="p-2 font-bold text-lg border-b-2 border-gray-300">Products</p>
        <div class="space-y-2 mt-2">
            <CardProduct
                v-for="product of products"
                v-bind="product"
                :addToKartProduct="addToKartProduct"
            />
        </div>
    </div>
</template>