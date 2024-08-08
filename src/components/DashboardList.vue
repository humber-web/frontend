<template>
    <div class="p-2 bg-white rounded-lg">
        <div>
            <p class="text-lg font-semibold">{{ title }}</p>
            <input type="search" class="w-full px-2 py-1 border border-gray-200 rounded-lg mt-2 bg-gray-200"
                placeholder="Pesquisar..." />
            <div class="flex flex-col gap-1 py-2">
                <div v-for="(order, index) in data" :key="index" class=" group rounded-lg  flex items-center gap-2 border-b shadow-sm hover:bg-gray-200 p-1">
                    <div class="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:bg-[#000000de]">
                        <p class="uppercase text-white font-semibold">ta</p>
                    </div>
                    <div class="w-2/4">
                        <p class="text-md font-semibold">{{ order.name }}</p>
                        <p v-if="!order.toPay" class="text-sm text-gray-600">{{ order.total }} items</p>
                        <p v-else class="text-sm text-gray-600">Pedido nº {{ order.id }} </p>
                    </div>
                    <div v-if="!order.toPay">
                        <p class="text-xs text-nowrap text-gray-600 text-right mr-2">{{ order.status }}</p>
                        <p class="text-[10px] text-nowrap text-gray-600 mr-2">Esperando Pagamento</p>
                    </div>
                    <div v-else>
                        <div class="p-1 bg-black text-white rounded-lg ml-8 text-sm">
                            Pagar<font-awesome-icon icon="arrow-right" class="ml-2"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'DashboardList',
    props: {
        title: {
            type: String,
            required: true
        },
        data: {
            type: Array,
            default: []
        }
    }
}
</script>