<script setup>
    import useKartStore from '../store/kartStore.js';
    import { storeToRefs } from 'pinia';

    const store = useKartStore();
    const { totalKart } = storeToRefs(store);
</script>
<template>
    <header class="rounded font-bold items-center bg-slate-300 shadow px-4 py-2 flex sm:col-span-3 justify-between">
        <p>KartStore</p>
        <p class="rounded p-2 text-white drop-shadow text-xl">Productos Carrito <span class=" text-indigo-500">{{totalKart}}</span></p>
    </header>
</template>