<template>
    <div class="bg-white rounded-lg h-64 p-2 hover:bg-gray-100 cursor-pointer shadow-md">
        <div class="w-full h-28  rounded-lg">
            <img :src="pizza" alt="" class="w-full h-full object-cover rounded-lg">
        </div>
        <div class="felx flex-col ">
            <p class="text-md font-semibold pt-2">{{data.name}}</p>
            <p class="w-full text-wrap text-xs text-gray-400 pt-1">{{data.descrition}}</p>
        </div>
        <div class="flex justify-between pt-6">
            <p class="font-bold">{{data.price}} <span class="text-xs">CVE</span></p>
            <div class="flex items-center gap-2 text-sm">
                <div class="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center">
                    <font-awesome-icon icon="minus"  />
                </div>
                <p class="text-lg font-bold">{{ data.quantity }}</p>
                <div class="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">

                    <font-awesome-icon icon="plus" class="" />
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import pizza from '../assets/pizza.png'
export default{
    name: 'Item',
    props:{
        data: {
            type: Object,
            default: {}
        }
    },
    data(){
        return{
            pizza: pizza
        }
    }
}

</script>