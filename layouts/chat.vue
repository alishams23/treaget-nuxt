<template>
  <div class="main-container height-full-treaget p-0"  style="      min-height: 100% ;">
    <div class="h-100 w-100 pt-5 mt-5 css-loading-off" >
      <div class="d-flex flex-column align-items-center" >
      <span class="loader"></span>
    </div>
    </div>
    <div id="wrapper" style="visibility: hidden;" class="css-loaded height-full-treaget" v-if="
        alow == true
      ">
      <ChatUsers />
      <div class="main_content height-full-treaget p-0" >
        <NavbarChat />
       
        <div class="height-full-treaget" >
          <nuxt style="height: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Desk from "~/components/Desk.vue";

export default {
  data() {
    return {
      alow: false,
      loading: true
    };
  },
  head() {
    return {
      link: [

        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/tailwind.css"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/style.css"
        }
      ]
    };
  },
  computed: {
    isAuthenticated: {
      get() {
        return this.$store.state.isAuthenticated;
      }
    }
  },
  methods: {
    getInfo() {
      try {
        fetch(
          `http://127.0.0.1:8000/api/UserRetrieveApi/${this.$store.state.username}/`,
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`
            }
          }
        )
          .then(response => response.json())
          .then(data => {
            this.$store.commit("getUser", data);
          });
        this.loading = false;
      } catch (error) {}
    },
    loginPage() {
      if (
        this.isAuthenticated == true ||
        this.$route.name == "user" ||
        this.$route.name == "t-explore" ||
        this.$route.name == "t-signUp"
      ) {
        this.alow = true;
        if (this.loading == true) this.getInfo();
      } else {
        this.$router.push("/t/login");
      }
    },
  },
  mounted() {
    this.loginPage();
  },
  beforeMount() {
    this.$store.commit("onStart");
  },
  watch: {
    $route(to, from) {
      this.loginPage();
    }
  },
  components: { Desk }
};
</script>

<style>
.height-full-treaget{
    min-height: 100%;max-height: 100%;height:100%;overflow-y: hidden
}
</style>