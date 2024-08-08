<template>
    <div class="bg-white rounded-lg h-80 p-2">
        <div class="flex flex-col justify-between gap-2 border-b">
            <div class="flex items-center">
                <div class="bg-black w-8 h-8 rounded-lg flex justify-center items-center ">
                    <p class="text-white text-xs">TA</p>
                </div>
                <div class="w-full flex flex-col items-center  justify-between p-1">
                    <div class="flex justify-between w-full ml-2">
                        <p class="text-md font-bold">Humberto Rosabal</p>
                        <p class="text-sm font-semibold">Pronto</p>
                    </div>
                    <div class="flex  justify-between w-full ml-2">
                        <p class="text-xs font-bold">Pedido nº 234</p>
                        <div class="flex items-center gap-1">
                            <span class="w-2 h-2 bg-green-500 rounded-lg"></span>
                            <p class="text-xs"> Pronto para server</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between mb-2">
                <p class="text-sm text-gray-400">Sexta Feira, 12 agosto 2024</p>
                <p class="text-sm text-gray-400">18:25</p>
            </div>
        </div>
        <div class="grid grid-cols-4 pt-2 border-b pb-4">
            <div class=" col-span-2 row-span-4">
                <p class="text-sm text-gray-400">Items</p>
                <p class="text-xs mb-2 font-bold">Classic ChesseBurger</p>
                <p class="text-xs mb-2 font-bold">Classic ChesseBurger</p>
                <p class="text-xs mb-2 font-bold">Classic ChesseBurger</p>
            </div>
            <div class="  row-span-4 text-center">
                <p class="text-sm text-gray-400">Qty</p>
                <p class="text-xs mb-2 font-bold ">2</p>
                <p class="text-xs mb-2 font-bold ">2</p>
                <p class="text-xs mb-2 font-bold ">2</p>
            </div>
            <div class=" text-right">
                <p class="text-sm text-gray-400 ">Preço</p>
                <p class="text-xs mb-2 font-bold">€ 12.00</p>
                <p class="text-xs mb-2 font-bold">€ 12.00</p>
                <p class="text-xs mb-2 font-bold">€ 12.00</p>
            </div>
            <div class="col-span-4 text-sm font-bold text-center ">
                <p>+5 mais</p>
            </div>
        </div>
        <div class="flex justify-between pt-2">
            <p class="text-md font-bold">Total</p>
            <p class="text-md font-bold">€ 36.00</p>
        </div>
        <div class="grid grid-cols-3 gap-2 mt-4">
            <div class=" bg-gray-400 rounded-lg flex justify-center items-center cursor-pointer">

                <p class=" ">Detalhes</p>
            </div>
            <div class=" bg-gray-400 rounded-lg flex justify-center items-center cursor-pointer">

                <p class=" ">Imprimir</p>
            </div>
            <div class="bg-black text-white rounded-lg flex justify-center items-center cursor-pointer">
                <p class="">Pagar</p>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'OrderComponent'
}
</script>