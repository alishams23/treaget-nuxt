<template>
  <header class="bg-white d-flex align-items-center main-container border-bottom " style="position:fixed;">
    <div class="header_inner d-flex align-items-center navbar-left">
      <div class="left-side d-flex align-items-center">
        {{ par }}
        <!-- Logo -->
        <div @click="slideBarActivator" class="d-lg-none px-3" id="back">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
            class="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
          </svg>
        </div>
        <nuxt-link type="div" :to="'/' + $route.params.username" class=" lg:pr-4  d-flex align-items-center space-x-3 "
          v-if="$route.params.user != null">
          <div class="
                  h-10
                
                  flex-shrink-0
                  rounded-2xl
                  overflow-hidden
                  shadow-lg
                  w-10
                ">
            <img v-bind:src="
              $route.params.user.image != null
                ? 'https://treaget.com' + $route.params.user.image
                : getImgUrl('inside/avatar.jpg')
            " alt="" class="rounded-2xl " />
          </div>
          <div class="flex-1 min-w-0 relative text-gray-500">
            <h4 class=" irsa text-sm text-black">
              {{ $route.params.user.get_full_name }}
            </h4>
          </div>
        </nuxt-link>

      </div>
      <div class="right-side">
        <nuxt-link to="/t/home" class=" h-10 w-10 rounded-full bg-treaget treaget-shadow d-flex align-items-center justify-content-center ">
          <i class="fa fa-home text-white p-2"></i>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>
  
<script>
export default {
  data() {
    return {
      user: null,
      par:null
    }
  },
  methods: {
    slideBarActivator() {
      document.getElementById('wrapper').classList.add("sidebar-active")
    }, getImgUrl(pic) {
      return require("@/assets/" + pic);
    },

  }

};
</script>
  
<style ></style>