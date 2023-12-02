<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Product</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage your product data here</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-product">
                        <button class="bt-green">+ Add Product</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input
                        class="search-field"
                        type="text"
                        id="deskripsi"
                        placeholder="Tambah deskripsi..."
                    />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>PRODUCT CODE</th>
                            <th>PRODUCT NAME</th>
                            <th>PRICE</th>
                            <th>STATUS</th>
                            <th>PRODUCT CATEGORY</th>
                            <th>UNIT</th>
                            <th>PRODUCT STATUS</th>
                            <th>PRODUCT IMAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_product" :key="item.id">
                            <td class="center">{{ item.product_code }}</td>
                            <td class="center">{{ item.product_name }}</td>
                            <td class="center">{{ item.price }}</td>
                            <td class = "center"><label class = "label-green">{{ item.status}}</label></td>
                            <td class="center">{{ item.product_category }}</td>
                            <td class = "center">{{ item.unit}}</td>
                            <td class="center">
                                <div v-if="item.product_status === 'Availability'">
                                    <label class="label-green">Availability</label>
                                </div>
                                <div v-else>
                                    <label class="label-red">Unavailable</label>
                                </div> 
                            </td>

                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-product">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-product">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

export default {
	name: 'list-product',
	components: {
		Menu
	},
    data(){
        return {
            list_product: [
                {
                    id: "1",
                    product_code: "kwdwn298",
                    product_name: "Samsung S21 Tra",
                    price: "5.750.000",
                    status: "Publish",
                    product_category: "Electronic",
                    unit: "20",
                    product_status: "Availability",
                    product_image: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/05/HP-Samsung-Galaxy-S23-FE-3292346088.jpg"

                },
                {
                    id: "2",
                    product_code: "ijofj090",
                    product_name: "Iphone 15 Pro",
                    price: "30.000.000",
                    status: "Publish",
                    product_category: "Electronic",
                    unit: "20",
                    product_status: "Unavailable",
                    product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9yduQROI-YFvdBxDk8Izg9lFycRxr9SpmChHIAHjMr3bvuSkfFwhbSWZCEa0WHD4L_w&usqp=CAU"
                },
                {
                    id: "3",
                    product_code: "naurachrsm12",
                    product_name: "Iphone 13 Pro",
                    price: "20.000.000",
                    status: "Publish",
                    product_category: "Electronic",
                    unit: 20,
                    product_status: "Availability",
                    product_image: "https://www.bjxku.com/uploads/images/img/2022/0627/1656299906962056.png"
                }
            ]
        }
    }
}
</script>