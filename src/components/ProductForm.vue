<template>
    <div class="p-4  bg-white rounded-lg ">
        <p class="font-bold">{{ titelForm }}</p>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-2 py-2">
            <div class="flex flex-col gap-2">
                <label class="font-semibold">Name</label>
                <input type="text" class="bg-gray-200 rounded-lg py-1 px-2" v-model="formData.name">
            </div>
            <div class="flex flex-col gap-2">
                <label class="font-semibold">Descrição</label>
                <input type="text" class="bg-gray-200 rounded-lg py-1 px-2" v-model="formData.description">
            </div>
            <div class="flex flex-col gap-2">
                <label class="font-semibold">Preçp</label>
                <input type="text" class="bg-gray-200 rounded-lg py-1 px-2" v-model="formData.price">
            </div>
            <div class="flex flex-col gap-2">
                <label class="font-semibold">Ingredientes</label>
                <input type="text" class="bg-gray-200 rounded-lg py-1 px-2" v-model="formData.ingredients">
            </div>
            <div class="flex flex-col gap-2">
                <label class="font-semibold">Categoria</label>
                <select v-model="formData.category" class="bg-gray-200 rounded-lg py-1 px-2">
                    <option value="Categoria 1">Categoria 1</option>
                    <option value="Categoria 2">Categoria 2</option>
                    <option value="Categoria 3">Categoria 3</option>
                </select>
            </div>
            <div class="flex justify-between items-center gap-2">
                <label class="font-semibold">Contable</label>
                <input type="checkbox" class="bg-gray-200 rounded-lg p" v-model="formData.is_quantifiable">
            </div>
            <button class="bg-black text-white rounded-lg py-1 px-2">Salvar</button>
        </form>

    </div>

</template>
<script>

export default {
    name: 'ProductForm',
  
    data() {
        return {
            formData: {},
            titelForm: 'Novo Producto'

        }
    },
    methods: {
        handleSubmit() {
            console.log(this.formData);
        }
    }

}
</script>

<!-- 
itemID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    ingredients = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    availability = models.BooleanField(default=True)
    categoryID = models.ForeignKey(MenuCategory, on_delete=models.CASCADE)
    is_quantifiable = models.BooleanField(default=True)  


-->