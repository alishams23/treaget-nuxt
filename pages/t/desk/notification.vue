<template>
  <div class="px-3">
    <div class="my-6 grid gap-2 " >
      <div v-for="notification in results" :key="notification.id + 'notification'" >

        <Alert :link="`/${notification.user.username}`" :alert="false">
          <div class="d-flex align-items-center rounded-2xl  flex-row ">
            <div v-if="notification.user.image != null" class="w-10 h-10  rounded-2xl overflow-hidden">
              <img :src="notification.user.image" alt="" class="rounded-2xl" />
            </div>

            <div v-else class="w-10 h-10  rounded-2xl overflow-hidden">
              <img src="@/assets/inside/avatar.jpg" alt="" class="rounded-2xl" />
            </div>

            <div class="p-1">
              <p class="irsa">
                <strong>{{ notification.user.username }}</strong>
                {{ notification.title }}
              </p>
              <p class="irsa text-xs">
                {{ notification.body }}
              </p>
              <span class="text-xs irsa"> {{ notification.createdAdd }} </span>
            </div>
          </div>
        </Alert>
      </div>
      <div v-if="results.length == 0 && loading == false">
        <p>
          <empty />
        </p>
      </div>
    </div>
    <div class="d-flex justify-content-center" v-if="loading">
      <span class="loader"></span>
    </div>
  </div>
</template>

<script>
import Alert from "~/components/Alert.vue";
export default {
  data() {
    return {
      results: [],
      page: 1,
      loading: true,
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      await fetch(`https://treaget.com/api/NotificationApi/?page=${this.page}`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      })
        .then((Response) => Response.json())
        .then((data) => data.results.forEach((element) => this.results.push(element)));
      this.loading = false;
    },
    handleScroll() {
      if (document.body.scrollHeight - window.scrollY <= 1000 && this.loading == false) {
        this.page += 1;
        this.getData();
     
      }
    },
   
  },beforeDestroy() {
  window.removeEventListener("scroll", this.handleScroll)
},
  mounted() {
    this.getData();
    window.addEventListener("scroll", this.handleScroll);
  },
  components: { Alert }
};
</script>

<style>
</style>