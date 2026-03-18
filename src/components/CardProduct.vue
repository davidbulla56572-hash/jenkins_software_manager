<script setup>
    const props = defineProps({
        albumId: Number,
        id: Number,
        title: String,
        url: String,
        thumbnailUrl: String,
        addToKartProduct: Function
    });

</script>
<template>
    <div class="bg-white bg-opacity-50 rounded shadow overflow-hidden">
        <div>
            <img
                :src="thumbnailUrl"
                :alt="title"
                class="w-full aspect-square object-cover max-h-24"
            >
        </div>
        <div class="grid grid-cols-6 p-2 items-center text-center justify-between gap-4">
            <p class="col-span-4 line-clamp-1">{{ title }}</p>
            <p class="font-bold col-span-2">{{ id }} | Album: <span class="text-cyan-400">{{ albumId }}</span></p>
        </div>
        <div class="flex p-2">
            <button
                class="form-input rounded border-2 border-transparent bg-opacity-60 transition duration-200 ease-out hover:border-stone-300 text-sm hover:shadow"
                @click="() => addToKartProduct(id)"
            >
                Agregar
            </button>
        </div>
    </div>
</template>