<template>
  <div class="container">
    <div>
      <form
        class="grid grid-cols-2 gap-3 lg:p-6 p-4"
        @submit.prevent="sendData()"
      >
        <div class="col-span-2">
          <label for="id_body" class="rtl fs-4 text-treaget irsa"
            >قبول درخواست</label
          >
          <div class="col-span-2">
            <p class="fs-6 pb-2 mt-3 px-2 rtl text-muted">
              مدت زمان انجام پروژه را وارد کنید
            </p>
            <div class="py-3 px-2">
              <input
                type="number"
                placeholder="روز"
                required
                v-model="time"
                class="shadow-none rtl border-bottom bg-gray-100"
              />
            </div>
            <div class="rtl">
              <button
                class="
                  px-3
                  mx-1
                  py-2
                  bg-treaget
                  shadow-md
                  rounded-full
                  text-white
                  btn-animation btn-material
                "
              >
                <div v-if="loading == false">تایید</div>
                <div
                  class="d-flex flex-column align-items-center"
                  v-if="loading == true"
                >
                  <div class="loader-light"></div>
                </div>
              </button>
            </div>
          </div>
          <div class="rtl m-4"></div>
        </div>
      </form>
      <div class="treaget-modal rtl" :class="modal ? 'open' : ''">
        <div class="treaget-modal-overlay" @click="modal = false"></div>
        <div class="treaget-modal-card">
          <div class="treaget-modal-body">
            <div class="treaget-modal-content fs-5">موفقیت آمیز بود</div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      modal: false,
      time: null,
    };
  },
  methods: {
    async sendData() {
      this.loading = true;
      await fetch(
        `https://treaget.com/api/AddAcceptRequestApi/${this.$route.params.data}/`,
        {
          method: "post",
          credentials: "same-origin",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${this.$store.state.token}`,
          },
          body: JSON.stringify({
            time: this.time,
          }),
        }
      ).then((response) => {
        (this.loading = false), (this.modal = true);
      });
    },
  },
  mounted() {},
};
</script>

<style>
</style>