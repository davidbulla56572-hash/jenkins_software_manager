<script setup>
    import useKartStore from '../store/kartStore.js';
    import { storeToRefs } from 'pinia';

    const store = useKartStore();
    const { selectedProducts } = storeToRefs(store);

    const deleteProduct = (idProduct) => {
        store.removeProductToKart({idProduct});
    };

</script>

<template>
    <div class="sm:col-span-1 p-2 bg-slate-300">
        <p class="p-2 text-xl font-bold border-b-2 border-slate-300">
            Kart
        </p>
        <div class="space-y-2 mt-2">
            <div
                v-for="sProduct of selectedProducts"
                class="bg-white bg-opacity-30 p-2 rounded"
            >
                <p class="line-clamp-1">{{ sProduct.title }}</p>
                <div class="border-t py-1 font-bold text-center">
                    <p>Id Product: <span class="text-indigo-600">{{ sProduct.id }}</span></p>
                    <p>Album Id: <span class="text-indigo-600">{{ sProduct.albumId }}</span></p>
                    <p class="bg-white rounded">Cantidad: <span class="text-cyan-600">{{ sProduct.cuantity }}</span></p>
                </div>
                <button
                    class="bg-red-500 text-sm px-2 py-1 text-white font-bold rounded w-full"
                    @click="() => deleteProduct(sProduct.id)"
                >
                    Eliminar
                </button>
            </div>
        </div>
    </div>
</template>