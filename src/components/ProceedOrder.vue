<template>
    <div class="bg-white h-full w-full p-2 rounded-lg flex flex-col">
        <div class="flex justify-between items-center border-b pb-2">
            <div>
                <p class="text-lg font-bold">Humberto Rosabal</p>
                <p class="text-xs font-semibold">Pedido nº 12 / Mesa nº 4</p>
                <p class="text-xs font-semibold pt-2">Segunda, agosto 12, 2024 19:30</p>
            </div>
            <div class="w-10 h-10 bg-black text-white rounded-lg flex justify-center items-center">
                <p>TA</p>
            </div>
        </div>
        <p class="text-lg font-bold">Detalhes</p>
        <div class="flex flex-col shadow-sm mb-2 ">
            <div class="flex justify-between">
                <p class="text-md font-semibold">Bebida 2</p>
                <p class="text-md font-semibold">x2</p>
            </div>
            <div class="flex flex-col">
                <p class="text-xs font-extralight"></p>
                <p class="text-xs font-extralight"></p>
                <div class="flex justify-between items-center">
                    <p class="pt-2">
                        <font-awesome-icon icon="wallet" />
                        <span class="pl-2">Total</span>
                    </p>
                    <p class="text-md font-bold">1400 <span class="text-xs">CVE</span></p>
                </div>
            </div>
        </div>
        <div class="flex flex-col shadow-sm mb-2 ">
            <div class="flex justify-between">
                <p class="text-md font-semibold">Bebida 1</p>
                <p class="text-md font-semibold">x1</p>
            </div>
            <div class="flex flex-col">
                <p class="text-xs font-extralight">Extra: Queijo, Ananas, Hovo.</p>
                <p class="text-xs font-extralight">Nota: Hovo mal Pasado.</p>
                <div class="flex justify-between items-center">
                    <p class="pt-2">
                        <font-awesome-icon icon="wallet" />
                        <span class="pl-2">Total</span>
                    </p>
                    <p class="text-md font-bold">700 <span class="text-xs">CVE</span></p>
                </div>
            </div>
        </div>
        <div class="flex flex-col shadow-sm mb-2 ">
            <div class="flex justify-between">
                <p class="text-md font-semibold">Bebida 1</p>
                <p class="text-md font-semibold">x1</p>
            </div>
            <div class="flex flex-col">
                <p class="text-xs font-extralight">Extra: Queijo, Ananas, Hovo.</p>
                <p class="text-xs font-extralight">Nota: Hovo mal Pasado.</p>
                <div class="flex justify-between items-center">
                    <p class="pt-2">
                        <font-awesome-icon icon="wallet" />
                        <span class="pl-2">Total</span>
                    </p>
                    <p class="text-md font-bold">700 <span class="text-xs">CVE</span></p>
                </div>
            </div>
        </div>
        <div class="flex flex-col shadow-sm mb-2 ">
            <div class="flex justify-between">
                <p class="text-md font-semibold">Bebida 1</p>
                <p class="text-md font-semibold">x1</p>
            </div>
            <div class="flex flex-col">
                <p class="text-xs font-extralight">Extra: Queijo, Ananas, Hovo.</p>
                <p class="text-xs font-extralight">Nota: Hovo mal Pasado.</p>
                <div class="flex justify-between items-center">
                    <p class="pt-2">
                        <font-awesome-icon icon="wallet" />
                        <span class="pl-2">Total</span>
                    </p>
                    <p class="text-md font-bold">700 <span class="text-xs">CVE</span></p>
                </div>
            </div>
        </div>
        <div class="flex flex-col pt-4">
            <div class="flex justify-between">
                <p>Items (4)</p>
                <p class="text-md font-bold">2300 <span class="text-xs">CVE</span></p>
            </div>
            <div class="flex justify-between">
                <p>IVA (15%)</p>
                <p class="text-md font-bold">345 <span class="text-xs">CVE</span></p>
            </div>
            <div class="w-full py-4 bg-black rounded-lg text-white flex justify-between p-2 mt-4 cursor-pointer hover:bg-[#000000de]">
                <p class="text-md font-bold">2645 <span class="text-xs">CVE</span></p>
                <div class="flex justify-center items-center gap-2  text-sm">
                    <p class="">Salvar Pedido</p>
                    <font-awesome-icon icon="arrow-right" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProceedOrder',
}


</script>