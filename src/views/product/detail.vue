<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-user">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Detail Product</h1>
                    <p class="mt5 mb20 tc-green">Your product details</p>
                </div>
            </div>
            <hr class="uline-grey">

            <div class = "image-container">
                <img style="width: 400px;
                height: 400px;
                margin-top: 20px;"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXHW-9smQe-khc4htFYAllat5ESGs9WFgB2nucR4n-XaqaXA0ztr5z7CHkFZmAGZc_h8&usqp=CAU" 
                alt="">
            </div>
            <div class="section-container">
                        <div class="mt10">
                            <p class="detail-title-bold" style="font-size: 15px; margin-right: 100px;">Status</p>
                            <hr class="uline-black status-underline">
                            <div style="margin-top: 20px;">
                                <label class="label-green">Publish</label>
                            </div>                     
                        </div>

                        <div class="mt10">
                            <p class="detail-title-bold" style="font-size: 15px; margin-right: 150px;">Product Status</p>
                            <hr class="uline-black productstatus-underline">
                            <div style="margin-top: 20px;">
                                <label class="label-green">Availabilty</label>
                            </div>                       
                        </div>

                    </div>
                    <div class="mt10">
                        <div style="overflow: hidden;">
                            <div class="content">
                                <img 
                                width="15" 
                                src="../../assets/icons/orang.svg" style="float: left; margin-right: 5px; margin-top: 30px;" />
                                <div class="text">
                                    <p class="text-container" style="font-size: 15px; float: left; margin-top: 30px; color: lightgray;">Update by Admin 1</p>                                </div>
                            </div>
                        </div>
                                <img 
                                width="15" 
                                src="../../assets/icons/orang.svg" style="float: left; margin-right: 5px; margin-top: 10px;" />
                                <div class="text">
                                    <p class="text-container" style="font-size: 15px; margin-top: 15px; color: lightgray;">Update by Admin 2</p>
                                </div>
                    </div>
            <div class="mt10">
                <p><span style="color: lightgray;">kjmpep90</span></p>
            </div>
            <div class="text-container">
                        <p class="text-container" style="font-size: 10px; color: grey;">kudwn289</p>
                        <h1 class="text-container" style="font-size: 20px;">Samsung Galaxy Z FoldS</h1>
                        <h2 class="text-container" style="font-size: 20px;">Rp 29.990.000</h2>
                        <h3 class="text-container">Product Description</h3>
                        <div class="data">

                            <p class="text-container">Sesuai dengan namanya, Galaxy Zx Fold5 dapat dilipat, sehingga ia yang besar akan tetap muat di kantung anda</p>
                            <p class="text-container">Buka, tutup, atau tekuk ponsel ke sudut yang pas dengan flexibel hingga dirancang ulang.</p>
                            <P class="text-container">Lebih ramping, lebih ringan, lebih portabel</P>
                            <p class="text-container">Pengalaman menonton yang lebih menakjubkan</p>
                            <p class="text-container">Layar selalu cerah dengan 1750 nit</p>
                            <p class="text-container">Gaming dahsyat dengan snapdragon tercepat di Galaxy Z Fold5</p>
                            <p class="text-container"></p>
                        </div>

                        <div style="overflow: hidden;">
                            <h3 class="text-container" style="float: left; margin-right: 5px;">Product Category: </h3>
                            <p class="text-container" style="color:grey">Electronic</p>
                            <h3 class="text-container" style="float: left; margin-right: 5px;">unit: </h3>
                            <p class="text-container" style="color:grey">20</p>
                            <h3 class="text-container" style="float: left; margin-right: 5px;">Min. Purchase: </h3>
                            <p class="text-container" style="color:grey">1 Unit</p>
                            <h3 class="text-container" style="float: left; margin-right: 5px;">Max. Purchase: </h3>
                            <p class="text-container" style="color:grey">10 Unit</p>
                        </div>
                    </div>

            <div class="mt10">
                <p class="detail-title-bold">Email:</p>
                <p>vioniwitaelya@gmail.com</p>
            </div>
            <div>
                <p class="detail-title-bold">Roles</p>
                <label class="label-green">Super Admin</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'detail-product'
}
</script>