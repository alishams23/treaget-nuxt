<template>
  <div>
        <div>
      <div class=" gap-3  p-4">
        <form class="" @submit.prevent="sendData">
          <label for="id_body" class="rtl fs-4 text-treaget irsa"
            >اعلام اختلاف</label
          >
          
          <p class="text-right mt-3 fs-6 text-muted">علت اختلاف</p>
          <textarea
            name="body"
            v-model="text"
            cols="40"
            rows="8"
            required
            class="border shadow-none bg-gray-50 rtl p-3"
            id="id_body"
          ></textarea>
          <div class="rtl m-4">
            <button
              class="px-4 py-2 rounded-full py-2 text-white bg-treaget irsa"
              type="submit"
            >
              <div v-if="loading == false">ارسال</div>
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
    </div>
    <div class="treaget-modal  rtl" :class="modal ? 'open' : ''">
      <div class="treaget-modal-overlay" @click="modal=false"></div>
      <div class="treaget-modal-card">
        <div class="treaget-modal-body">
          <div class="treaget-modal-content fs-5">موفقیت آمیز بود</div>
          <div class="treaget-modal-footer">
            <div class="d-flex">
              <button
                class="bg-white py-2 border rounded-pill px-4"
                @click="modal=false"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
 data() {
    return {
      text: "",
      loading: false,
      modal:false,
    };
  },
  methods:{
    async sendData(){
      this.loading= true
       
      await axios
        .post(
          `http://127.0.0.1:8000/api/AddDisputeApi/`,
          {
           safePayment: "1",
          description: this.text,
          },
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`,
            },
          }
        ).then(() => {this.loading = false;this.modal=true})
        
        
    }
  }
}
</script>

<style>

</style>