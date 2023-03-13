<template>
    <div class="d-flex align-items-stretch flex-row" id="login-page">
    <div class="login col-lg-4 col-md-5 col-sm-12 col-xs-12 col-12 rtl">
      <div class="row">
        <nuxt-link to="/t/signUp" class="col-6 py-3 border-b text-center"  :class="$route.name == 't-signUp' ? 'tab-active' : ''" >ثبت نام</nuxt-link>
        <nuxt-link to="/t/login" class="col-6 py-3 border-b  text-center" :class="$route.name == 't-login' ? 'tab-active' : ''">ورود</nuxt-link>
      </div>
     <nuxt />
    </div>
    <div class="bg-g-login col-lg-8 col-md-7 col-sm-12 col-xs-12 col-12">
      <div class="background w-100 h-100"></div>
    </div>
  </div>
</template>

<script>

export default {
   head() {
    return {
      link: [
        
        // {
        //   rel: "stylesheet",
        //   type: "text/css",
        //   href: "/css/uikit.min.css",
        // },
        {
          rel: "stylesheet",
          type: "text/css",
          href: '/css/tailwind.css', 
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href:  '/css/style.css',
        },
       
      ],
    };
  },
  layout: 'landing',
  // OR
  layout (context) {
    return 'landing'
  },methods : {
    getInfo(){
      fetch(`https://treaget.com/api/UserRetrieveApi/${this.$store.state.username}/`,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${this.$store.state.token}`,
          },
        })
        .then((response) => response.json())
        .then((data) => {
          this.$store.commit('getUser',data)
        });
        
    }
  },
  mounted() {
    this.$store.commit("onStart");
    // this.getInfo()
  },
}
</script>

<style scoped>
.login {
  height: 100vh;
  background: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
}
.bg-g-login {
  background-color: #000000f8;
}

.background {
  background-image: url(~@/assets/inside/images/login.png);
  background-size: cover;
  opacity: 30%;
}

</style>