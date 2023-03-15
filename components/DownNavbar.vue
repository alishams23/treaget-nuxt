<template >
  <div class="d-block d-sm-none fixed-bottom">
    <div class="d-flex justify-content-end " v-if="
                  currentRouteName() == 't-Home' ||   currentRouteName() == 't-explore'">


      <div class="drop   drop--up m-3">
        <div class="m-1 p-1"> <a @click="addPostClick" class="  rounded-full text-treaget bg-white px-2 py-3  shadow-lg ">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentcolor" class="bi  bi-plus "
              viewBox="0 0 16 16">
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </a></div>

        <div class="drop__content  -transition-slide-in">


          <div class="drop-list -size-large  -position-left -border-rounded">
            <button class="drop-list__btn " v-if="$store.state.ServiceProvider == true">
              <nuxt-link to="/t/addworksample" class="d-flex  mx-3 justify-content-between align-items-center" href="">

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style="transform: scale(0.8)"
                  fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
                  <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  <path
                    d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                </svg>

                <div class="text-sm ">
                  افزودن نمونه کار
                </div>
              </nuxt-link>
            </button>
            <button class="drop-list__btn" v-if="$store.state.ServiceProvider == true">
              <nuxt-link to="/t/addservices" class="d-flex  mx-3 justify-content-between align-items-center" href="">

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style="transform: scale(0.8)"
                  fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
                  <path
                    d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                </svg>

                <div class="text-sm ">
                  افزودن خدمات
                </div>
              </nuxt-link>

            </button>
            <button class="drop-list__btn" v-if="$store.state.ServiceProvider == true">
              <nuxt-link to="/t/addcv" class="d-flex  mx-3 justify-content-between align-items-center" href="">

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style="transform: scale(0.8)"
                  fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                  <path
                    d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>

                <div class="text-sm ">
                  افزودن رزومه
                </div>
              </nuxt-link>

            </button>
            <button class="drop-list__btn" v-if="$store.state.ServiceProvider == false">
              <nuxt-link to="/t/addRequest" class="d-flex  mx-3 justify-content-between align-items-center" href="">

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg"
                  viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                </svg>

                <div class="text-sm ">
                  افزودن درخواست
                </div>
              </nuxt-link>

            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white border nav">


      <nuxt-link to="/t/home" class="nav-item btn-material" :class=" currentRouteName() == 't-Home'
                    ? 'active bg-treaget '
                    : 'nav-color-inactive'">
        <i class="fa-home" :class=" currentRouteName() == 't-Home'
                    ? 'fa'
                    : 'fad'" style="font-size:20px"></i>
        <span class="nav-text">خانه</span>
      </nuxt-link>
      <nuxt-link to="/t/explore" class="nav-item btn-material" :class=" currentRouteName() == 't-explore'
                    ? 'active bg-treaget '
                    : 'nav-color-inactive'">
        <i class="fad fa-search" :class=" currentRouteName() == 't-explore'
                    ? 'fa'
                    : 'fad'" style="font-size:20px"></i>
        <span class="nav-text">کاوش</span>
      </nuxt-link>
      <nuxt-link to="/t/desk/main" class="nav-item btn-material" :class="  currentRouteCheck('desk')  
                    ? 'active bg-treaget '
                    : 'nav-color-inactive'">
        <i class="fad fa-box" :class="  currentRouteCheck('desk') 
                    ? 'fa'
                    : 'fad'" style="font-size:20px"></i>
        <span class="nav-text">میزکار</span>
      </nuxt-link>
      <nuxt-link :to="this.$store.state.username != '' ? '/' + this.$store.state.username : '/t/login'"
        class="nav-item btn-material" :class=" currentRouteName() == 'user'
                    ? 'active bg-treaget '
                    : 'nav-color-inactive'">
        <i class="fad fa-user" :class=" currentRouteName() == 'user'
                    ? 'fa'
                    : 'fad'" style="font-size:20px"></i>
        <span class="nav-text">پروفایل</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    currentRouteCheck(data) {
      return this.$route.name.split("-").includes(data);
    },currentRouteName() {
      return this.$route.name;
    },
    addPostClick() {
      document.querySelector("#addPost").click();
    }
  }
};
</script>

<style scoped>
.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}
.bottom-down-navbar-padding {
  padding-top: 18px;
  padding-bottom: 18px;
}

.nav {
  display: flex;
  flex-direction: row;

  margin: auto;

  padding: 10px 15px;
}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 10px 20px;
  cursor: pointer;
  /* transition: all 0.2s ease-out; */
  border-radius: 30px;
}

.nav-text {
  font-size: 16px;
  margin: auto;
  text-align: center;
  font-weight: 400;
  display: none;

}

.nav-item.active {
  flex-grow: 2;
  justify-content: flex-start;
}

.nav-item.active > .nav-text {
  display: inline-block;
}

.nav-color-inactive{
  color: rgb(88, 88, 88);
}


</style>