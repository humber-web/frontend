<template>
    <div class="bg-white p-2 rounded-lg">
        <div class="flex justify-between items-center">
            <p class="text-lg font-semibold">Pratos Populares</p>
            <p class="text-gray-400 text-sm cursor-pointer  hover:text-black ">Ver Todos</p>
        </div>
        <div class="flex gap-2 text-sm text-gray-300">
            <p class="text-xs">Ranking</p>
            <p class="text-xs">Nome</p>
        </div>
        <div class="flex flex-col gap-2">
            <div v-for="(item, index) in items" :key="index" class="flex items-center gap-2 mb-2">
                <p class="text-bold text-sm ml-4">0{{ index + 1 }}</p>
                <div class="flex items-center ml-2 border-b w-48 max-w-48 text-nowrap ">
                    <div class="w-8 h-8 rounded-full">
                        <img :src="pizza" alt="" class="w-full h-full object-cover rounded-full">
                    </div>
                    <div class="ml-2">
                        <p class="text-md font-semibold">{{ item.name }}</p>
                        <p class="text-xs text-bold">Pedidos:<span class="text-green-500 ml-2 text-bold">{{ item.orders }}</span></p>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
import pizza from '../assets/pizza.png'
export default {
    name: 'PratosPopulares',
    props: {
        items: {
            type: Array,
            default: []
        },
    },
    data() {
        return {
            pizza: pizza
        }
    }
}


</script>