<template>
  <div class="container">
      <div class="d-flex justify-content-start">
           <a
          class=" p-2 px-3 d-flex align-items-center  rounded-18   shadow-2  btn-animation"
          @click="$router.go(-1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left m-1"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </a>
       </div>
    <div>
      <form @submit.prevent="sendData">
        <div class="grid rtl grid-cols-2 gap-3 lg:p-6 p-4">
          <div class="col-span-2" id="nameProduct">
            <label for="id_body" class="rtl fs-4 text-treaget irsa"
              >ارتباط با ما</label
            >
            <p tag="div" class="text-right mt-3 fs-6 text-muted">نام و نام خانوادگی</p>
            <input
              v-model="name"
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
            <p class="text-right mt-3 fs-6 text-muted">ایمیل</p>
            <input
              type="email"
              
              name="alt"
              required
              v-model="email"
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
      <div >
        <alert type="info" 
          ><p>نشانی : یزد خیابان شهید مطهری پارک علم و فناوری اقبال</p>
          <p>پست الکترونیکی : treaget@gmail.com</p>
          <p>اینستاگرام : instagram.com/treaget</p></alert
        >
      </div>
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
import axios from 'axios'
export default {
  head() {
    return {
      title: "ارتباط با ما"
    };
  },
  layout: "main",
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/uikit.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/tailwind.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/style.css",
        },
      ],
    };
  },
  data() {
    return {
      loading: false,
      modal: false,
      name: null,
      body: null,
      email: null,
    };
  },
  methods: {
    async sendData() {
      this.loading = true;
      await axios
        .post(
          `https://treaget.com/api/ContactApi/`,
          {
            body: this.body,
            name: this.name,
            email : this.email
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
          this.modal =true
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
  },
};
</script>

<style>
</style>