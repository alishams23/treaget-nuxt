<template>
  <div class="container">
    <div>
      <form @submit.prevent="sendData">
        <div class="grid rtl grid-cols-2 gap-3 lg:p-6 p-4">
          <div class="col-span-2" id="nameProduct">
            <label for="id_body" class="rtl fs-4 text-treaget irsa"
              >افزودن درخواست</label
            >
            <p tag="div" class="text-right mt-3 fs-6 text-muted">موضوع</p>
            <input
              v-model="title"
              type="text"
              required
              name="alt"
              maxlength="200"
              class="shadow-none rtl bg-gray-100 border-bottom"
              id="id_alt"
            />
          </div>

          <div class="col-span-2">
            <p class="text-right mt-3 fs-6 text-muted">توضیحات</p>
            <textarea
              name="body"
              v-model="body"
              cols="40"
              required
              rows="8"
              class="shadow-none bg-gray-100 border-bottom rtl p-3"
              id="id_body"
            ></textarea>
          </div>
          <div class="col-span-2">
            <p class="text-right mt-3 fs-6 text-muted">قیمت به تومان</p>
            <input
              type="number"
              min="1"
              name="alt"
              required
              v-model="price"
              maxlength="200"
              class="shadow-none rtl bg-gray-100 border-bottom"
              id="id_alt"
            />
          </div>
          <div>
            <button
              type="submit"
              class="px-4 py-2 rounded-full py-2 text-white bg-treaget irsa"
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
import axios from "axios";
export default {
  data() {
    return {
      modal: false,
      loading: false,
      title: "",
      body: "",
      price: "",
    };
  },
  methods: {
    async sendData() {
      this.loading = true;
      await axios
        .post(
          `https://treaget.com/api/AddRequestApi/`,
          { body: this.body, title: this.title, price: this.price },
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`,
            },
          }
        )
        .then((response) => {
          this.loading = false;
          this.modal = true;
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    },
  },
};
</script>

<style>
</style>