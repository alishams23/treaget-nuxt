<template>
  <div>
    <h2 class="text-treaget fw-bold px-5 py-3 irsa">ورود</h2>
    <p class="notice px-5">لطفا برای دسترسی به سایت وارد شوید</p>
 <a class="text-center text-danger " v-if="this.generalError == true"
        ><div class="mt-3">رمز عبور یا نام کاربری اشتباه است</div></a
      > 
    <form @submit.prevent="doLogin" class="px-5 py-5">
      <label class="text-right" for="usernameinput">نام کاربری</label>

      <input
        type="text"
        minlength="6"
        class="py-4 bg-input bg-input-active fw-light"
        id="usernameinput"
        pattern="[A-Za-z0-9&.]*"
        placeholder="username"
        v-model="username"
        required
        
      />
   

      <div class="col-12">
        <label class="text-right mt-3" for="passwordinput">رمز عبور</label>
        <input
          type="password"
          class="py-4 bg-input fw-light"
          id="passwordinput"
        minlength="8"

          placeholder="*********"
          v-model="password"
         required
        />
       
      </div>
      <button
        class="
          mt-5
          bg-treaget
          btn-material btn-animation
          d-flex
          align-items-center
          justify-content-center
          
        "
        style=""
        type="submit"
      >
        <div v-if="loading == false" class="">ورود</div>
        <div
          class="d-flex flex-column align-items-center"
          v-if="loading == true"
        >
          <div class="loader-light"></div>
        </div>
      </button>
     
      <a class="text-center"
        ><div class="mt-3">رمز عبور خود را فراموش کرده اید؟</div></a
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  head() {
    return {
      title: "ورود"
    };
  },
  name: "Login",
  layout: "landing",
  data() {
    return {
      generalError: false,
      username: "",
      password: "",
  
   
      loading: false,
    };
  },
  mounted() {
    if (this.$store.state.isAuthenticated == true) {
      this.$router.push("/t/home");
    }
  },
  methods: {
    async doLogin() {
    
        try {
          this.loading = true;
          let mydata = await axios
            .post("https://treaget.com/api/token/", {
              username: this.username,
              password: this.password,
            })
            .then((response) =>
              this.$store.commit("login", {
                token: response.data.token,
                username: this.username,
              })
            );
          this.loading = false;
          this.$router.back();
        } catch (error) {
          this.loading = false;

          this.generalError = true;
        }
      }
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