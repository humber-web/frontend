<template>

    <div class="flex flex-col gap-2 w-1/6 shadow-right">
        <div class="p-2">
            <p class="text-xl text-teal-700 text-center italic">Aroma Italia</p>
        </div>
        <div class="flex flex-col gap-2 p-2 text-left font-semibold">
            <SideBarLink to="dashboard" icon="tachometer-alt" />
            <SideBarLink to="Menu" icon="utensils" />
            <SideBarLink to="Pedidos" icon="shopping-cart" />
            <SideBarLink to="Messas" icon="chair" />
            <SideBarLink to="Contabilidade" icon="calculator" />
            <SideBarLink to="Configurações" icon="cogs" />
        </div>
        <div class="mt-12 flex gap-2 p-2">
            <div class="w-12 h-12 rounded-full bg-black">
                <img :src="avatar" alt="" class="w-full h-full object-cover rounded-full">
            </div>
            <div class="flex flex-col">
                <p class="font-bold">Humberto Rosabal</p>
                <p class="text-sm text-gray-400">Admin</p>
            </div>
        </div>
        <div class="p-2 gap-2 text-center">
            
            <p><font-awesome-icon icon="sign-out-alt" class="mr-4 font-semibold"/> Sair</p>
        </div>
    </div>
</template>
<script>
import avatar  from '../assets/avatar.png'
import SideBarLink from '@/components/SideBarLink.vue'
export default {
    name: 'SideBar',
    components: {
        SideBarLink
        // HelloWorld
    },
    data() {
        return {
            avatar: avatar
        }
    }
}


</script>