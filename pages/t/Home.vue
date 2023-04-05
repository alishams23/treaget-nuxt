<template>

    <div class="d-flex flex-row justify-content-center  pt-0  " id="home">
      <!-- left sidebar-->
      <div class=" col-xl-7 col-lg-7 col-md-12 col-12   " >
        <div class="relative mx-lg-3">
          <div class="">
            <ul class=" d-flex scrollBarStyleSmallHidden mb-3 mouseDrag" style="overflow-x:scroll;cursor: grab;">
              <li v-for="data in userFollowing" :key="data.username + '_1-home'">
                <a @click="handlerSelectedUser(data)">
                  <div class="bg-treaget transform m-1 w-20 h-20 transition hover:bg-gradient-blue"
                    style="padding: 2px 2px 2px 2.4px; border-radius: 35px">
                    <div class="p-1 w-full h-full bg-white" style="border-radius: 33px">
                      <img v-if="data.image" v-bind:src="data.image" class="w-full h-full cover"
                        style="border-radius: 30px; " />
                      <img v-else src="@/assets/inside/avatar.jpg" class="w-full h-full cover"
                        style="border-radius: 30px; " />
                    </div>
                    <a v-if="selectedUser == data.username" class="
                        bg-white
                        rounded-full
                        w-6
                        h-6
                        d-flex
                        justify-content-center
                        align-items-center
                        absolute
                        right-2
                        border-3
                        bottom-0
                      ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-check"
                        viewBox="0 0 16 16">
                        <path
                          d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                    </a>
                  </div>
                </a>
  
                <a class="block text-center text-x truncate w-24">
                  {{ data.username }}
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        <div id="posts" class="space-y-5 pb-3" v-for="data in results" v-bind:key="data.data.id + '_2-home'">
          <PostPicture v-if="data.item == 'picture'" :data="data.data" :reload="getDataHome" />
          <post-request v-if="data.item == 'request'" :data="data.data" :reload="getDataHome" />
        </div>
      <empty v-if="results.length == 0 && !loading" />
        
        <!-- post 2-->
  
        <!-- Load more-->
        <div class="loader-keeper">
          <div class="d-flex justify-content-center" v-if="loading ">
            <span class="loader"></span>
          </div>
        </div>
        
      </div>
  
      <!-- right sidebar-->
      <UserSuggestion class="col-5" />
   
    </div>
 
</template>

<script>
import PostRequest from "~/components/PostRequest.vue";
import UserSuggestion from "~/components/UserSuggestion.vue";
export default {
  name: "Home",
  components: {
    PostRequest,
    UserSuggestion
},
  data() {
    return {
      postPage: 1,
      results: [],
      selfUser: "",
      loading: true,
      userSuggestion: [],
      userFollowing: [],
      loadingFollowing: true,
      url: "https://treaget.com/api/HomeApiView/",
      selectedUser: null,
    };
  },
  methods: {
    async getDataHome(page) {
      if (page == 1) {
        this.results = [];
      }
      this.loading = true;
      let userUrl;
      this.selectedUser != null
        ? (userUrl = `&user=${this.selectedUser}`)
        : (userUrl = "");

      await fetch(
        `https://treaget.com/api/HomeApiView/?page=${page}${userUrl}`,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${this.$store.state.token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          data.forEach((element) => this.results.push(element));
          this.loading = false;
        });
    },

    getUserFollowing() {
      this.loadingFollowing = true;
      fetch(`https://treaget.com/api/following/`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.userFollowing = data;
          this.loadingFollowing = false;
        });
    },
    handleScroll() {
      if (document.body.scrollHeight - window.scrollY <= 1000 && this.loading == false && this.results != 0) {
        this.postPage += 1;
        this.getDataHome(this.postPage);
        // console.log('running');
      }
    },
    handlerSelectedUser(data) {
      if (this.selectedUser == null || this.selectedUser != data.username) {
        this.selectedUser = data.username;
        this.postPage = 1;
        this.getDataHome(1);
      } else {
        this.selectedUser = null;
        this.postPage = 1;
        this.getDataHome(1);
      }
    }
  }, beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  mounted() {
    this.getDataHome(this.postPage);

    this.selfUser = this.$store.state.username;
    this.getUserFollowing();
    window.addEventListener("scroll", this.handleScroll);



    const slider = document.querySelector('.mouseDrag');
    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    let stopDragging = function (event) {
      mouseDown = false;
    };

    slider.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if (!mouseDown) { return; }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });

    // Add the event listeners
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
  },
};
</script>

<style>
</style>
