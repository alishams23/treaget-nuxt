<template>
  <div class="container">
    <form class="grid grid-cols-2 gap-3 lg:p-6 p-4" :action="`https://treaget.com/api/wallet/IncreaseMoney/${number}`">
      <div class="col-span-2">
        <label class="rtl fs-4 text-treaget irsa">شارژ کیف پول</label>
        <p class="text-right mt-3 fs-6 text-muted">مبلغ مورد نظر برای افزایش شارژ</p>
        <input
          type="number"
  
          required
          v-model="number"
   
       min="1"
          class="shadow-none rtl bg-gray-100 border-bottom"
          id="id_alt"
        />
      </div>
    
      <div class="rtl m-4 col-span-2">
          <button
            class="px-4 py-2 rounded-full py-2 text-white bg-treaget irsa"
          >
            <div v-if="loading == false">رفتن به درگاه بانکی</div>
            <div
              class="d-flex flex-column align-items-center"
              v-if="loading == true"
            >
              <div class="loader-light"></div>
            </div>
          </button>
        </div>
    </form>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      number: "",
      loading:false,
     
    };
  },
  mounted() {
  
  },
  methods: {
  
  },
};
</script>

<style>

</style>