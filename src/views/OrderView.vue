<template>
    <div class="flex flex-col p-1 w-full relative">
        <!-- <div class="w-full max-w-full top-0 left-0 fixed  z-10"> -->

            <div class="flex justify-between items-center font-semibold mb-2">
                <h1 class="text-2xl font-bold">Pedidos</h1>
                <p>Sexta Feira, 12 agosto 2024</p>
            </div>
            <div class="flex justify-between items-center font-semibold mb-2">
                <div class="flex gap-2">
                    <p class="bg-white px-4 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100">Todos</p>
                    <p class="bg-white px-4 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100">Pendentes</p>
                    <p class="bg-white px-4 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100">Completados</p>
                </div>
                <div class="">
                    <input type="search" class="w-full px-2 py-1 border border-gray-100 rounded-lg mt-2 bg-gray-100"
                    placeholder="Pesquisar..." />
                </div>
            </div>
        <!-- </div> -->
        <div class="grid grid-cols-3 gap-2 ">
            <OrderComponent/>
            <OrderComponent/>
            <OrderComponent/>
            <OrderComponent/>
            <OrderComponent/>
            <OrderComponent/>
            <OrderComponent/>
            <OrderComponent/>
            <OrderComponent/>
            

        </div>


    </div>
</template>
<script>
import OrderComponent from '../components/OrderComponent.vue'
export default {
    name: 'Orders',
    components: {
        OrderComponent
    }
}


</script>