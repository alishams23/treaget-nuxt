<template>
  <div>
    <h2 class="text-treaget fw-bold px-5 py-3 irsa">ثبت نام</h2>
    <p class="notice px-5">لطفا برای دسترسی به سایت ثبت نام کنید</p>
    <p class="text-danger px-5 text-treaget py-3">{{ errorGeneral }}</p>
    <form @submit.prevent="level = 1" class="px-5 py-5" v-if="level == 0">
      <label class="text-right" for="username">نام کاربری</label>

      <input
        type="text"
        name="username"
        class="py-4 bg-input bg-input-active fw-light"
        id="username"
        minlength="6"
        pattern="[A-Za-z0-9&.]*"
        style="text-transform: lowercase"
        required
        placeholder="username"
        v-model="username"
      />
      <label class="text-right mt-3" for="email">ایمیل</label>

      <input
        class="py-4 bg-input bg-input-active fw-light"
        id="email"
        type="email"
        name="email"
        placeholder="email address"
        required
        v-model="email"
      />

      <label class="text-right mt-3" for="password">رمز عبور</label>
      <input
        type="password"
        class="py-4 bg-input fw-light"
        id="password"
        v-model="Password"
        name="password"
        data-toggle="password"
        placeholder="+8 Characters"
        required
      />

      <button
        class="
          mt-5
          bg-treaget
          btn-material 
          d-flex
          align-items-center
          justify-content-center
        "
        style=""
        type="submit"
      >
        <div class="">ثبت</div>
      </button>
    </form>
    <form
      action=""
      class="px-5 py-5"
      @submit.prevent="validateForm"
      v-if="level == 1"
    >
      <label class="text-right" for="phoneNumber">شماره تلفن</label>

      <input
        class="py-4 bg-input bg-input-active fw-light"
        id="phoneNumber"
        type="text"
        name="phone_number"
        pattern="[0-9.]+"
        maxlength="11"
        minlength="11"
        placeholder="091********"
        required
        v-model="phoneNumber"
      />
      <label class="text-right mt-3" for="firstName">نام</label>

      <input
        class="py-4 bg-input bg-input-active fw-light"
        id="firstName"
        type="text"
        name="first_name"
        placeholder="first name"
        required
        v-model="firstName"
      />
      <label class="text-right mt-3" for="lastName">نام خانوادگی</label>

      <input
        class="py-4 bg-input bg-input-active fw-light"
        id="lastName"
        type="text"
        name="last_name"
        placeholder="last Name"
        required
        v-model="lastName"
      />
      <div class="col-12">
        <div class="d-flex  align-items-center">
          <input
            type="checkbox"
            id="service"
            v-model="checked"
            @click="checkboxChecked"
            class="shadow-none m-3"
            style="width: 35px; height: 35px"
          />
          <label for="service" class="fw-light text-right"
            >خدمات دهنده (فریلنسر)</label
          >
        </div>
        <br />
        <div class="d-flex  border-t align-items-center">
          <input
            type="checkbox"
            class="shadow-none m-3"
            style="width: 26px; height: 26px"
            id="service2"
            @click="checkboxChecked2"
            v-model="checked2"
          />
          <label for="service2" class="fw-light text-right"
            >کارفرما</label
          >
        </div>
        <br />
      </div>
      <button
        class="
          bg-treaget
          btn-material 
          d-flex
          align-items-center
          justify-content-center
        "
        style=""
        type="submit"
      >
        <div v-if="loading == false" class="">ثبت</div>
        <div
          class="d-flex flex-column align-items-center"
          v-if="loading == true"
        >
          <div class="loader-light"></div>
        </div>
      </button>
      <p class="font-s-13 mb-0 irsa text-center">
        کلیک روی ساخت اکانت به معنای موافقت با
        <nuxt-link to="/t/Rules" class="text-treaget"> قوانین </nuxt-link> است
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  head() {
    return {
      title: "ثبت نام"
    };
  },
  layout: "landing",
  data() {
    return {
      errorGeneral: null,
      username: "",
      Password: "",
      email: null,
      lastName: null,
      firstName: null,
      phoneNumber: null,
      level: 0,
      loading: false,
      checked: true,
      checked2: false,
    };
  },
  mounted() {
    if (this.$store.state.isAuthenticated == true) {
      this.$router.push("/t/Home");
    }
  },
  methods: {
    async doLogin() {},
    async validateForm() {
      var a = this.checked;
      var b = this.checked2;
      if ((a == false && b == true) || (a == true && b == false)) {
        this.loading = true;
        await axios
          .post(`https://treaget.com/api/UserCreate/`, {
            "username": this.username,
            "password": this.Password,
            "email": this.email,
            "last_name": this.lastName,
            "first_name": this.firstName,
            "phone_number": this.phoneNumber,
            "ServiceProvider": a == true ? true : false,
          }).catch(function (error) {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }

  })
          .then((response) => {
            this.$store.commit("login", {
              token: response.data.token,
              username: this.username,
            });
                 

          }).then(() => {this.$router.push("/t/home");
        })
          .catch(function (error) {

            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
        this.errorGeneral = 'خطایی در اطلاعاتی وارد شده ی شما میباشد لطفا چک کنید قبلا اکانتی با ایمیل ، شماره ی تلفن  یا یوزرنیم وارد شده ساخته نشده باشد'
        this.level = 0
        this.loading = false
      } else {
        if (a == true && b == true) {
          this.errorGeneral = "شما نمیتوانید هم خدمات دهنده باشید و هم کارفرما";
        } else {
          this.errorGeneral =
            "شما باید بین خدمات دهنده و کارفرما یکی را انتخاب کنید";
        }
      }
    },
    checkboxChecked() {
      if (this.checked == false) {
        this.checked = true
        this.checked2 = false
      } else {
        this.checked = false
        this.checked2 = true
      }
    },
    checkboxChecked2() {
      if (this.checked2 == false) {
        this.checked2 = true
        this.checked = false
      } else {
        this.checked2 = false
        this.checked = true
      }
    },
  },
};
</script>

<style scoped>
button[type="submit"] {
  width: 100%;
  padding: 14px;
  background: #ff0000;
  color: #fff;
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

.bg-input {
  height: 49px;
  padding-left: 1.25rem;
  color: #0b2238 !important;
  font-size: 16px;
  border-radius: 8px;
  font-weight: 500;
  transition: 0.3s !important;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;

  background-clip: padding-box;
  border: 1px solid #e7e7e7;
  box-shadow: none;
}
.bg-input:focus {
  box-shadow: none !important;
  border: 1px solid #f51616;
  height: 55px;

  color: #0b2238 !important;
  font-size: 16px;
  border-radius: 8px;
  font-weight: 500;
  transition: 0.3s !important;
}
</style>