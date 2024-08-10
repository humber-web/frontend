<template>
    <div>
        <div>
            <div class="flex justify-between">
                <h1 class="text-2xl font-bold">Gestionar {{ titleHeader }}</h1>
                <div class="flex gap-2">
                    <p class="bg-white px-4 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100"
                        @click="selectData('categories')">Categorias</p>
                    <p class="bg-white px-4 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-100"
                        @click="selectData('products')">Productos</p>
                </div>
            </div>
            <div class="flex justify-between py-2">
                <input type="search" class="w-1/3 px-2 py-1 border border-gray-200 rounded-lg mt-2 bg-gray-100"
                    placeholder="Pesquisar..." />
                <div class="bg-black  px-4 py-2 text-white text-center rounded-lg cursor-pointer hover:bg-[#000000de]"
                    @click="showForm">
                    <p><font-awesome-icon icon="plus" class="mr-2" />{{ titleButton }}</p>
                </div>
            </div>
        </div>
        <Table :data="data" :ownerData="ownerData" />

        <div v-if="showProductForm" class="fixed inset-0 flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded-lg shadow-lg w-5/12" @click.stop>
                <div class="flex justify-between items-center mb-4">
                    <button @click="closeForm" class="text-gray-500 hover:text-gray-700">&times;</button>
                </div>
                <ProductForm />
            </div>
            <div class="fixed inset-0 bg-black opacity-50" @click="closeForm"></div>
        </div>


    </div>

</template>

<script>
import Table from '@/components/Table.vue'
// import { data } from 'autoprefixer';
import ProductForm from '@/components/ProductForm.vue'
export default {
    name: 'Products',
    components: {
        Table,
        ProductForm

    },
    data() {
        return {
            titleHeader: 'Productos',
            titleButton: 'Novo Producto',
            ownerData: 'products',
            showProductForm: false,
            products: [
                { name: 'Product 1', price: 100, category: 'Category A', descrition: 'Descrition A' },
                { name: 'Product 2', price: 200, category: 'Category B', descrition: 'Descrition B' },
                { name: 'Product 3', price: 300, category: 'Category C', descrition: 'Descrition C' },
                { name: 'Product 4', price: 300, category: 'Category C', descrition: 'Descrition C' },
                { name: 'Product 5', price: 300, category: 'Category C', descrition: 'Descrition C' },
                { name: 'Product 6', price: 300, category: 'Category C', descrition: 'Descrition C' },
                { name: 'Product 7', price: 300, category: 'Category C', descrition: 'Descrition C' },
                { name: 'Product 8', price: 300, category: 'Category C', descrition: 'Descrition C' },
                { name: 'Product 9', price: 300, category: 'Category C', descrition: 'Descrition C' },
                { name: 'Product 10', price: 300, category: 'Category C', descrition: 'Descrition C' },
            ],
            categories: [
                { name: 'Category A' },
                { name: 'Category B' },
                { name: 'Category C' },
                { name: 'Category D' },
                { name: 'Category E' },
                { name: 'Category F' },
                { name: 'Category G' },
                { name: 'Category H' },
            ],
            data: []
        }
    },
    mounted() {
        this.data = this.products
    },
    methods: {
        selectData(object) {
            this.data = this[object];
            this.titleHeader = object === 'products' ? 'Productos' : 'Categorias';
            this.titleButton = object === 'products' ? 'Novo Producto' : 'Nova Categoria';
            this.ownerData = object;
        },
        showForm() {
            if (this.ownerData === 'products') {
                this.showProductForm = true;
            }
        },
        closeForm() {
            this.showProductForm = false;
        }
    }
}

</script>