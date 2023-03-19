<template>
  <div class="container">
    <form class="grid grid-cols-2 gap-3 lg:p-6 p-4" @submit.prevent="sendData">
      <div class="col-span-2">
        <h2 class="rtl fs-4 text-treaget irsa">درخواست برداشت</h2>
        <p class="text-right mt-3 fs-6 text-muted">مبلغ مورد نظر</p>
        <input
          type="number"
          v-modal='price'
          maxlength="200"
          class="shadow-none rtl bg-gray-100 border-bottom"
        />
        <p class="text-right mt-3 fs-6 text-muted">شماره کارت</p>
        <input
          type="text"
          maxlength="200"
          class="shadow-none rtl bg-gray-100 border-bottom"
        />
        <p class="text-right mt-3 fs-6 text-muted">نام صاحب حساب</p>
        <input
          type="text"
          maxlength="200"
          class="shadow-none rtl bg-gray-100 border-bottom"
          id="id_alt"
        />
         <div class="rtl m-4">
          <button
            class="px-4 py-2 rounded-full py-2 text-white btn-material bg-treaget irsa"
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
      </div>
    </form>
    <div class="treaget-modal  rtl" :class="modal ? 'open' : ''">
      <div class="treaget-modal-overlay" @click="modal = false"></div>
      <div class="treaget-modal-card">
        <div class="treaget-modal-body">
          <div class="treaget-modal-content fs-5">درخواست شما برسی شده و پس از یک هفته پول به شما پرداخت خواهد شد</div>
          <div class="treaget-modal-footer">
            <div class="d-flex">
              <button
                class="bg-white py-2 border rounded-pill px-4"
                @click="modal = false"
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
export default {
  data(){
    return{
        loading:false,
        modal:false,
    }
  },methods:{
    async sendData() {
      this.loading = true;
      await axios
        .post(
          `http://127.0.0.1:8000/api/timelineCreateApi/`,
          {
            body: this.text,
          },
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`,
            },
          }
        )
        .then((response) => {
          this.openModal();
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
      this.loading = false;
    },
  }
};
</script>

<style>
</style>