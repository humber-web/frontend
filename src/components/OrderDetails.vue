<template>
    <div class="p-2 bg-black  h-32 rounded-lg text-white cursor-pointer hover:bg-[#000000de]">
        <div class="flex justify-between">
            <p>{{ title }}</p>
            <font-awesome-icon :icon="icon" class=" bg-white text-black p-2 rounded-lg" />
        </div>   
        <p class="text-white pt-2   text-2xl text-center">{{ orders }}</p>
        <p class="text-white text-nowrap text-xs font-semibold pt-4">{{ details }}</p>
    </div>
    
</template>
<script>


export default{
    name: 'OrderDetails',
    props:{
        title: {
            type: String,
            required: true
        },
        icon:{
            type: String,
            default: ''
        },
        orders:{
            type: Number,
            default: 0
        },
        details:{
            type: String,
            default: ''
        }
    }
}


</script>