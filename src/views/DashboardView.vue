<template>
    <div>
    <div class="flex justify-between items-center font-semibold mb-2">
        <h1 class="text-2xl font-bold">Bem vindo ao Dashboard</h1>
        <p>Sexta Feira, 12 agosto 2024</p>
    </div>
    <div class="grid grid-cols-4 w-full gap-2">
        <div class="col-span-3 row-span-4">
            <div class="grid grid-cols-3 gap-2">
                <OrderDetails title="Novo Pedido" icon="bell" orders="16" details="Atualiza com cada pedidido"/>
                <OrderDetails title="Total de Pedidos" icon="bell" orders="86" details="Atualiza com cada pedidido"/>
                <OrderDetails title="Em Espera" icon="bell" orders="9" details="Atualiza com cada pedidido"/>
            </div>
            <div class="grid grid-cols-2 gap-2 pt-4">
                <DashboardList title="Lista de Pedidos" :data="orders"/>
                <DashboardList title="Pagamentos" :data="ordersToPay"/>
            </div>
        </div>
        <div class="col-span-1 row-span-4 flex flex-col gap-2">
            <div class="bg-black py-2 text-white text-center rounded-lg cursor-pointer hover:bg-[#000000de]">
                <p><font-awesome-icon icon="plus" class="mr-2"/>Novo Pedido</p>
            </div>
            <PratosPopulares :items="Populars"/>
            <OutStock :items="OutStock"/>
            
        </div>
    </div>

</div>
        
</template>
<script>
import OrderDetails from '@/components/OrderDetails.vue'
import DashboardList from '@/components/DashboardList.vue'
import PratosPopulares from '../components/PratosPopulares.vue'
import OutStock from '../components/OutStock.vue'
export default {
    name: 'Dashboard',
    components: {
        OrderDetails,
        DashboardList,
        PratosPopulares,
        OutStock
    },
    data(){
        return{
            orders: [
                {
                    id: 1,
                    name: 'João Alves',
                    status: 'Em Espera',
                    total: 4,
                    table: 2,
                },
                {
                    id: 2,
                    name: 'Maria Wanzeler',
                    status: 'Em Espera',
                    total: 3,
                    table: 2,
                },
                {
                    id: 3,
                    name: 'José Marques',
                    status: 'Em Espera',
                    total: 5,
                    table: 2,
                },
                {
                    id: 4,
                    name: 'Ana Lopes',
                    status: 'Em Espera',
                    items: 9,
                    table: 2,
                    total: 8,
                },
                {
                    id: 5,
                    name: 'Carlos Pinto',
                    status: 'Em Espera',
                    items: 6,
                    table: 2,
                    total: 9,
                },
                {
                    id: 6,
                    name: 'Marta Marques',
                    status: 'Em Espera',
                    items: 7,
                    table: 2,
                    total: 3,
                },
                {
                    id: 7,
                    name: 'Pedro Teixeira',
                    status: 'Em Espera',
                    items: 11,
                    table: 2,
                    total: 4,
                },
              
            ],
            ordersToPay: [
                {
                    id: 1,
                    name: 'João Alves',
                    toPay:true,
                },
                {
                    id: 2,
                    name: 'Maria Wanzeler',
                    toPay:true,
                },
                {
                    id: 3,
                    name: 'José Marques',
                    toPay:true,
                },
                {
                    id: 4,
                    name: 'Ana Lopes',
                    toPay:true,
                },
                {
                    id: 5,
                    name: 'Carlos Pinto',
                    toPay:true,
                },
                {
                    id: 6,
                    name: 'Marta Marques',
                    toPay:true,
                },
                {
                    id: 7,
                    name: 'Pedro Teixeira',
                    toPay:true,
                },
               

            ],
            Populars:[
                {
                    id: 1,
                    name: 'Bacalhau à Brás',
                    orders: 23
                },
                {
                    id: 2,
                    name: 'Bitoque',
                    orders: 19
                },
                {
                    id: 3,
                    name: 'Francesinha',
                    orders: 17
                },
                {
                    id: 4,
                    name: 'Arroz de Pato',
                    orders: 10
                },
                
                
            ],
            OutStock:[
                {
                    id: 1,
                    name: 'Bacalhau à Brás',
                    available: "16:00 H"
                },
                {
                    id: 2,
                    name: 'Bitoque',
                    available: "17:00 H"

                },
                {
                    id: 3,
                    name: 'Francesinha',
                    available: "18:00 H"
                },
                {
                    id: 4,
                    name: 'Arroz de Pato',
                    available: "Manhã"
                },
                
                
            ]
        }
    }

}



</script>