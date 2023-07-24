<template>
  <div class="container">
    <!-- <h1 class=" fs-3 text-right"> توضیحات</h1> -->
    <div>
      <div class="grid grid-cols-2 gap-3 lg:p-6 p-4">
        <div class="col-span-2">
          <label for="id_body" class="rtl fs-4 text-treaget irsa"
            >افزودن رزومه</label
          >
          <p class="text-right mt-3 fs-6 text-muted">توضیحات</p>
          <textarea
            name="body"
            v-model="text"
            cols="40"
            rows="8"
            class="border shadow-none bg-gray-50 rtl p-3"
            id="id_body"
          ></textarea>
          <div class="rtl m-4">
            <button
              class="px-4 py-2 rounded-full py-2 text-white bg-treaget irsa"
              @click="sendData()"
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
      </div>
    </div>
    <div class="treaget-modal treaget-modal-product-check rtl">
      <div class="treaget-modal-overlay" @click="closeModal()"></div>
      <div class="treaget-modal-card">
        <div class="treaget-modal-body">
          <div class="treaget-modal-content fs-5">موفقیت آمیز بود</div>
          <div class="treaget-modal-footer">
            <div class="d-flex">
              <button
                class="bg-white py-2 border rounded-pill px-4"
                @click="closeModal()"
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
import axios from "axios";
export default {
  data() {
    return {
      text: "",
      loading: false,
    };
  },
  methods: {
    async sendData() {
      this.loading = true;
      await axios
        .post(
          `https://treaget.com/api/profile_items/timelineCreateApi/`,
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
    closeModal() {
      document
        .querySelector(".treaget-modal-product-check")
        .classList.remove("open");
    },
    openModal() {
      document
        .querySelector(".treaget-modal-product-check")
        .classList.add("open");
    },
  },
};
</script>

<style>

</style>