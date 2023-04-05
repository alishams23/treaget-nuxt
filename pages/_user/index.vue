<template>
  <div>
    <div v-if="loading == false">
      <div>
        <ProfileHeader :data="user" />
        <!-- edith1 open -->


        <div class="tab-wrap mb-5  border-bottom bg-white d-flex justify-content-center">
          <input type="radio" :name="user.ServiceProvider == false ? 'tabs-2' : 'tabs'" id="tab1" checked />
          <div class="tab-label-content" id="tab1-content" v-if="user.ServiceProvider == true">
            <label for="tab1" v-on:click="page = 0">
              <div class=" mx-2">نمونه کار</div>
              <i class="fad fa-image" style="font-size:20px"></i>
            </label>
          </div>
          <div class="tab-label-content" id="tab1-content" v-if="user.ServiceProvider == false">
            <label for="tab1" v-on:click="page = 0">
              <div class=" mx-2">پروژه ها</div>
              <i class="fad fa-bags-shopping" style="font-size:20px"></i>
            </label>
          </div>

          <input type="radio" :name="user.ServiceProvider == false ? 'tabs-2' : 'tabs'" id="tab2" />
          <div class="tab-label-content" id="tab2-content" v-if="user.ServiceProvider == true">
            <label for="tab2" v-on:click="page = 1">
              <div class=" mx-2">رزومه</div>
              <i class="fad fa-clipboard-list" style="font-size:20px"></i>
            </label>
          </div>
          <div class="tab-label-content" id="tab2-content" v-if="user.ServiceProvider == false">
            <label for="tab2" v-on:click="page = 1">
              <div class=" mx-2">علایق</div>
              <i class="fad fa-box-heart" style="font-size:20px"></i>
            </label>
          </div>

          <input type="radio" name="tabs" id="tab3" v-if="user.ServiceProvider == true" />
          <div class="tab-label-content" id="tab3-content" v-if="user.ServiceProvider == true">
            <label for="tab3" @click="page = 2">
              <div class=" m-2">خدمات</div>
              <i class="fad fa-store" style="font-size:20px"></i>
            </label>
          </div>
          <div class=" d-flex justify-content-center"  :class="user.ServiceProvider == false ? 'slide-2' : 'slide'">
            <div class="slide-inside"></div>
          </div>
        </div>



     
      </div>

      <ProfileGallery :username="this.$route.params.user" v-if="page == 0 && user.ServiceProvider == true"
        class="px-3" />
      <ProfileCv :username="this.$route.params.user" v-if="page == 1 && user.ServiceProvider == true" />
      <ProfileService :username="this.$route.params.user" v-if="page == 2 && user.ServiceProvider == true"
        class="px-3" />
      <profile-request :username="this.$route.params.user" v-if="page == 0 && user.ServiceProvider == false"
        class="px-3" />
      <profile-favorite :username="this.$route.params.user" v-if="page == 1 && user.ServiceProvider == false"
        class="px-3" />
    </div>
    <div v-else class="d-flex justify-content-center align-items-center ">
      <span class="loader"></span>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return { user: {}, loading: true, page: 0 };
  },
  methods: {
    getUserApi() {
      let headers = this.$store.state.token != '' ? {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${this.$store.state.token}`,
      } : {
        "Content-type": "application/json",
        Accept: "application/json",

      }
      fetch(
        `https://treaget.com/api/UserRetrieveApi/${this.$route.params.user}/`, { headers: headers }
      )
        .then((response) => response.json())
        .then((data) => {
          this.user = data;
          this.loading = false;
        });


    },
  },
  mounted() {
    this.getUserApi();
  },
};
</script>

<style>
</style>