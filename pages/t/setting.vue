<template>
  <div>
    <div class="d-flex justify-content-center" v-if="loading == true">
      <span class="loader"></span>
    </div>
    <form v-if="loading == false" @submit.prevent="sendData">
      <div class="grid grid-cols-2 gap-3 lg:p-6 p-4">
        <div class="col-span-2">
          <label for="id_body" class="rtl fs-4 text-treaget mt-5 irsa">
            تنظیمات
          </label>
          <div class="d-flex justify-content-center">
            <img
              v-if="data.image"
              :src="data.image"
              class="w-20 h-20 rounded-pill cover"
              alt=""
            />
            <img
              v-else
              src="@/assets/inside/avatar.jpg"
              class="w-20 h-20 rounded-pill"
              alt=""
            />
          </div>
          <div class="mt-2"
            ><div class="d-flex justify-content-center align-items-center">
              <div>تغییر عکس پروفایل</div>
              <div>
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  @change="changePhoto($event)"
                  class="form-control shadow-none border-none mt-3 rtl"
                  name="photo"
                />
              </div></div
          ></div>

          <div class="row">
            <div class="col-md-6 col-sm-12 col-6">
              <p class="text-right mt-3 fs-6 text-muted">نام خانوادگی</p>
              <input
                required
                v-model="data.last_name"
                type="text"
                class="shadow-none rtl px-2 bg-gray-50 border-bottom"
              />
            </div>
            <div class="col-md-6 col-sm-12 col-6">
              <p class="text-right mt-3 fs-6 text-muted">نام</p>
              <input
                required
                v-model="data.first_name"
                type="text"
                class="shadow-none rtl px-2 bg-gray-50 border-bottom"
              />
            </div>
            <div class="col-12">
              <p class="text-right mt-3 fs-6 text-muted">
                (bio)اطلاعاتی درباره خود
              </p>
              <textarea
                name="body"
                v-model="data.bio"
                cols="30"
                rows="8"
                class="
                  irsa
                  fw-light
                  shadow-none
                  bg-gray-50
                  rtl
                  p-3
                  border-bottom
                "
                id="id_body"
              ></textarea>
            </div>
            <div class="rtl px-4 py-3">
              <button
                class="
                  px-4
                  py-2
                  rounded-full
                  py-2
                  text-white
                  bg-treaget
                  irsa
                  btn-material btn-animation btn-animation-shadow
                "
              >
                <div v-if="sendLoading == false">ارسال</div>
                <div
                  class="d-flex flex-column align-items-center"
                  v-if="sendLoading == true"
                >
                  <div class="loader-light"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {},
      loading: true,
      sendLoading: false,
      image: null,
      fd: null,
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      await fetch(`https://treaget.com/api/UserSettingApi/`, {
        method: "put",
        credentials: "same-origin",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          this.loading = false;
        });
    },
    async sendData() {
      this.sendLoading = true;
      this.fd = new FormData();
      this.fd.append("first_name", this.data.first_name);
      this.fd.append("last_name", this.data.last_name);
      this.fd.append("bio", this.data.bio);
        if (this.image != null )this.fd.append("image", this.image);

      await axios
        .put(`https://treaget.com/api/UserSettingApi/`, this.fd, {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${this.$store.state.token}`,
          },
        })
        .then((response) => {
          this.sendLoading = false;
          window.location.reload();
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    },
    changePhoto(event) {
      this.image = event.target.files[0];
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
</style>