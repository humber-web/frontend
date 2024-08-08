<template>
    <div class="p-2 grid grid-cols-4 min-h-screen h-full bg-gray-200 gap-2">
        <div class="col-span-3 row-span-4 ">
            <div class="flex justify-between w-full">
                <div class="flex items-center gap-2 pl-2">
                    <router-link to="/dashboard">
                        <div
                            class=" w-8 h-8 text-black hover:bg-black hover:text-white rounded-full bg-white flex items-center justify-center shadow-sm">
                            <font-awesome-icon icon="arrow-left" class="" />
                        </div>
                    </router-link>
                    <p class="text-2xl font-bold">Menu</p>
                </div>
                <div class="pr-2">
                    <input type="search" class="w-full px-2 py-1 border border-gray-100 rounded-lg mt-2 bg-gray-100"
                        placeholder="Pesquisar..." />
                </div>
            </div>
            <div class="grid grid-cols-6">
                <div class="col-span-1 row-span-4 p-2 w-full flex flex-col  items-center gap-2 h-full overflow-y-auto ">
                    <div v-for="(category, index) in categories" :key="index"
                        class="bg-white w-full h-20 rounded-lg p-2 flex flex-col justify-between cursor-pointer shadow-md hover:bg-gray-100 "
                        @click="selectCategory(category)">
                        <p class="text-lg font-semibold">{{ category.name }}</p>
                        <p class="text-sm text-gray-300 ">{{ category.total }} items</p>
                    </div>
                </div>
                <div class="col-span-5 row-span-4 p-2">
                    <div class="grid grid-cols-4 gap-2">
                        <Item v-for="(item, index) in selectedCategory?.items" :key="index" :data="item" />
                    </div>
                </div>

            </div>

        </div>
        <div class="col-span-1 row-span-4 pt-2">
            <ProceedOrder />
        </div>


    </div>

</template>
<script>
import Item from '../components/Item.vue'
import ProceedOrder from '../components/ProceedOrder.vue'
export default {
    name: 'Menu',
    components: {
        Item,
        ProceedOrder
    },
    data() {
        return {
            categories: [
                {
                    name: 'Todas',
                    total: 24,
                    items: [
                        { img: 'img1.jpg', name: 'Item 1', price: 10, quantity: 5, descrition: 'Item 1 é um item muito bom' },
                        { img: 'img2.jpg', name: 'Item 2', price: 15, quantity: 3, descrition: 'Item 1 é um item muito bom' },
                        { img: 'img3.jpg', name: 'Bebida 1', price: 5, quantity: 10, descrition: 'Item 1 é um item muito bom' },
                        { img: 'img4.jpg', name: 'Bebida 2', price: 7, quantity: 8, descrition: 'Item 1 é um item muito bom' },
                        { img: 'img5.jpg', name: 'Lanche 1', price: 12, quantity: 6, descrition: 'Item 1 é um item muito bom' },
                        { img: 'img6.jpg', name: 'Lanche 2', price: 14, quantity: 4, descrition: 'Item 1 é um item muito bom' },
                        { img: 'img7.jpg', name: 'Sobremesa 1', price: 8, quantity: 7, descrition: 'Item 1 é um item muito bom' },
                        { img: 'img8.jpg', name: 'Sobremesa 2', price: 9, quantity: 5, descrition: 'Item 1 é um item muito bom' },
                        { img: 'img9.jpg', name: 'Promoção 1', price: 20, quantity: 2, descrition: 'Item 1 é um item muito bom' },
                        { img: 'img10.jpg', name: 'Promoção 2', price: 25, quantity: 1, descrition: 'Item 1 é um item muito bom' },
                        { img: 'img11.jpg', name: 'Combo 1', price: 30, quantity: 3, descrition: 'Item 1 é um item muito bom' },
                        { img: 'img12.jpg', name: 'Combo 2', price: 35, quantity: 2, descrition: 'Item 1 é um item muito bom' },
                        { img: 'img13.jpg', name: 'Outro 1', price: 5, quantity: 10, descrition: 'Item 1 é um item muito bom' },
                        { img: 'img14.jpg', name: 'Outro 2', price: 6, quantity: 8, descrition: 'Item 1 é um item muito bom' }, ,
                        // Add more items as needed
                    ]
                },
                {
                    name: 'Bebidas',
                    total: 4,
                    items: [
                        { img: 'img3.jpg', name: 'Bebida 1', price: 5, quantity: 10, descrition: 'Bebida 1 é uma bebida muito boa' },
                        { img: 'img4.jpg', name: 'Bebida 2', price: 7, quantity: 8, descrition: 'Bebida 1 é uma bebida muito boa' },
                        // Add more items as needed
                    ]
                },
                {
                    name: 'Lanches',
                    total: 4,
                    items: [
                        { img: 'img5.jpg', name: 'Lanche 1', price: 12, quantity: 6, descrition: 'Lanche 1 é um lanche muito bom' },
                        { img: 'img6.jpg', name: 'Lanche 2', price: 14, quantity: 4, descrition: 'Lanche 1 é um lanche muito bom' },
                        { img: 'img6.jpg', name: 'Lanche 2', price: 14, quantity: 4, descrition: 'Lanche 1 é um lanche muito bom' },
                        { img: 'img6.jpg', name: 'Lanche 2', price: 14, quantity: 4, descrition: 'Lanche 1 é um lanche muito bom' },
                        // Add more items as needed
                    ]
                },
                {
                    name: 'Sobremesas',
                    total: 4,
                    items: [
                        { img: 'img7.jpg', name: 'Sobremesa 1', price: 8, quantity: 7, descrition: 'Sobremesa 1 é uma sobremesa muito boa' },
                        { img: 'img8.jpg', name: 'Sobremesa 2', price: 9, quantity: 5, descrition: 'Sobremesa 1 é uma sobremesa muito boa' },
                        { img: 'img8.jpg', name: 'Sobremesa 2', price: 9, quantity: 5, descrition: 'Sobremesa 1 é uma sobremesa muito boa' },
                        { img: 'img8.jpg', name: 'Sobremesa 2', price: 9, quantity: 5, descrition: 'Sobremesa 1 é uma sobremesa muito boa' },
                        // Add more items as needed
                    ]
                },
                {
                    name: 'Promoções',
                    total: 4,
                    items: [
                        { img: 'img9.jpg', name: 'Promoção 1', price: 20, quantity: 2 ,descrition: 'Promoção 1 é uma promoção muito boa'},
                        { img: 'img10.jpg', name: 'Promoção 2', price: 25, quantity: 1,descrition: 'Promoção 2 é uma promoção muito boa' },
                        { img: 'img10.jpg', name: 'Promoção 2', price: 25, quantity: 1,descrition: 'Promoção 1 é uma promoção muito boa'},
                        { img: 'img10.jpg', name: 'Promoção 2', price: 25, quantity: 1,descrition: 'Promoção 2 é uma promoção muito boa' }, 
                        // Add more items as needed
                    ]
                },
                {
                    name: 'Combos',
                    total: 4,
                    items: [
                        { img: 'img11.jpg', name: 'Combo 1', price: 30, quantity: 3 ,descrition: 'Combo 1 é um combo muito bom'},
                        { img: 'img12.jpg', name: 'Combo 2', price: 35, quantity: 2 ,descrition: 'Combo 1 é um combo muito bom'},
                        // Add more items as needed
                    ]
                },
                {
                    name: 'Outros',
                    total: 4,
                    items: [
                        { img: 'img13.jpg', name: 'Outro 1', price: 5, quantity: 10, descrition: 'Outro 1 é um outro muito bom' },
                        { img: 'img14.jpg', name: 'Outro 2', price: 6, quantity: 8 , descrition: 'Outro 1 é um outro muito bom' },
                        // Add more items as needed
                    ]
                }
            ],
            selectedCategory: null
        }
    },
    methods: {
        selectCategory(category) {
            this.selectedCategory = category;

        }
    },
    created() {
        this.selectedCategory = this.categories[0];
    }

}
</script>