<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-product">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Add Product</h1>
                    <p class="mt5 mb20 tc-green">Make your product looking good for customer</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label">Product Image</label>
                </div>
                <div class="w80 relative">
                    <input
                        class="hidden"
                        type="file"
                        id="upload-file"/>
                     <img
                     class="cursor-pointer"
                     src="../../assets/images/tambahkanfoto.png"  
                     alt=""
                     style="width: 100px; height: auto;"
                     @click="upload_file()" 
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Code</label>
                </div>
                <div class="w80 relative">
                    <input
                        class="form-text"
                        type="text"
                        minlength="0"
                        maxlength="8"
                        placeholder="Product Code"
                    >
                    <span class = "addon-right"> 0 / 8</span>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Name</label>
                </div>
                <div class="w80 relative">
                    <input
                        class="form-text"
                        type="text"
                        minlength="5"
                        maxlength="20"
                        placeholder="Product Name"
                    >
                    <span class = "addon-right"> 5 / 20</span>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Price</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Price"
                    >
                </div>
            </div>

            <div class="mt20 row">
                <div class="w20">
                    <label class="form-label"> Product Description</label>
                </div>
                <div class="w80">
                    <textarea class= "form-text" placeholder="Masukkan Product Description" style="height: 100px; vertical-align: top;"></textarea>
                </div>
            </div>
     

            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Unit</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Unit"
                    >
                </div>
            </div>
        </div>

        
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Maximum Purchase</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Maximum Purchase"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Category</label>
                </div>
                <div class="w80">
                    <select class="form-select">
                        <option disabled selected>--- Choose Category ---</option>
                        <option value="1">Electronic</option>
                        <option value="2">House Ware</option>
                        <option value="3">Clothes</option>
                    </select>
                </div>
            </div>
            <div class="flex mt30">
                <router-link to="/list-product">
                    <button class="bt-submit-green">Add Product</button>
                </router-link>
            </div>
        </div>
</template>

<script>
export default {
	name: 'add-product',
    methods: {
        upload_file(){
            const input_file = document.querySelector("#upload-file");
            input_file.click();
        },
    },
};
</script>