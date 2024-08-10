<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header">{{ header }}</th>
                    <th v-if="ownerData != 'categories'">Availability</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="index">
                    <td v-for="header in headers" :key="header">{{ item[header] }}</td>
                    <td v-if="ownerData != 'categories'"><input type="checkbox" /></td>
                    <td>
                        <div class="flex gap-2">
                            <div class="flex justify-center items-center w-8 h-8 bg-white rounded-lg cursor-pointer hover:bg-yellow-500 hover:text-white">
                                <font-awesome-icon icon="pencil" class="" />
                            </div>
                            <div class="flex justify-center items-center w-8 h-8 bg-white rounded-lg cursor-pointer hover:bg-red-500 hover:text-white">
                                <font-awesome-icon icon="trash" />
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'Table',
    components: {

    },
    props: {
        data: {
            type: Array,
            required: true,
        },
        ownerData: {
            type: String,
            required: false,
        }
    },
    computed: {
        headers() {
            console.log(this.data);
            if (this.data.length === 0) return [];
            return Object.keys(this.data[0]);
        },

    },
    
}

</script>
<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    color: #ddd;
    font-size: medium;

    
}

 td {
    padding: 7px;
    border-bottom: 1px solid black;
}

th {
    background-color: black;
    text-align: left;
    padding: 5px;
}

th:first-child {
    border-top-left-radius: 10px;
    /* border-bottom-left-radius: 10px; */
}

th:last-child {
    border-top-right-radius: 10px;
    /* border-bottom-right-radius: 10px; */
}

/* tbody>tr>td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

tbody>tr>td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
} */

tbody>tr {
    background-color: rgb(219, 223, 229);
    /* Example hover color */

}

tbody>tr:hover {
    background-color: rgb(209 213 219);
}

tbody {
    color: black;
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
}
</style>