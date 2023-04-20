<template>
  <div>
    <div class="sidebar border bg-white scrollBarHidden" style="overflow-y:scroll" id="sidebar">
  
      <div class="flex justify-between items-center p-2 pl-5 relative d-lg-none ">
        <div class="d-flex align-items-center"> <div >
          <img src="@/static/icon.png" style="width: 50px" />
        </div>
        <div ><img src="@/assets/inside/images/treaget2.png" class="mx-3"
            style="width: 61px"></div></div>
        <span class="hide-close-icon" @click="slideBarDeactivator"><svg xmlns="http://www.w3.org/2000/svg" width="22"
            height="22" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg></span>
      </div>
      <div class="sidebar_inner" >
        <div class="flex flex-col items-center my-6" v-if="loading == false">
          <div class="w-24 h-24 overflow-hidden shadow-1" style="border-radius: 39px">
            <img :src="user.image" class="w-full h-full cover overflow-hidden" v-if="user.image" />
            <img v-else src="@/assets/inside/avatar.jpg" class="w-full h-full cover overflow-hidden" />
          </div>
          <div class="text-xl capitalize mt-4 uk-link-reset  ">
            {{ user.get_full_name }}
          </div>
          <div class="
              flex
              justify-around
              w-full
              items-center
              text-center
              uk-link-reset
              text-gray-800
              mt-6
            ">
            <div>
              <div>
                {{idToken}}
                <p class="  text-muted">بازدید</p>
                <div>{{ user.visitorCount }}</div>
              </div>
            </div>

            <div>
              <nuxt-link :to="`/${user.username}/followers`">
                <p class="  text-muted">دنبال کننده</p>
                <div>{{ user.number_follow.followers }}</div>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link :to="`/${user.username}/following`">
                <p class="  text-muted">دنبال شونده</p>
                <div>{{ user.number_follow.following }}</div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div v-else class="d-flex justify-content-center">
          <span class="GradientLoader"></span>
        </div>

        <ul class="text-right ">
          <div>
            <li>
              <span class="  mr-4" style="color: #e0e0e0"> منو </span>
            </li>
            <li>
              <nuxt-link to="/t/Home" class="rtl hover:text-yellow rounded-2xl">
                <button class="col-12 d-flex align-items-center rounded-13" v-bind:class="
                  currentRouteName() == 't-Home'
                    ? 'btn-material  bg-treaget '
                    : ''
                ">
                  <div class="child_menu"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.8)" fill="currentColor" id="Outline"
                    viewBox="0 0 24 24">
                    <path
                      d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z" />
                  </svg>
                  <span class="  mr-4"> خانه </span>
                </button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/t/explore" class="rtl hover:text-yellow">
                <button class="col-12 d-flex align-items-center rounded-13" v-bind:class="
                  currentRouteName() == 't-explore'
                    ? 'btn-material  bg-treaget '
                    : ''
                ">
                  <div class="child_menu"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.8)" fill="currentColor" id="Outline"
                    viewBox="0 0 24 24">
                    <path
                      d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
                  </svg>
                  <span class="  mr-4"> کاوش </span>
                </button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/t/chat" href="" class="rtl hover:text-yellow">
                <button class="col-12 d-flex align-items-center rounded-13" v-bind:class="
                  currentRouteName() == 't-chat'
                    ? 'btn-material  bg-treaget '
                    : ''
                ">
                  <div class="child_menu"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.8)" fill="currentColor" id="Outline"
                    viewBox="0 0 24 24">
                    <path
                      d="M24,11.247A12.012,12.012,0,1,0,12.017,24H19a5.005,5.005,0,0,0,5-5V11.247ZM22,19a3,3,0,0,1-3,3H12.017a10.041,10.041,0,0,1-7.476-3.343,9.917,9.917,0,0,1-2.476-7.814,10.043,10.043,0,0,1,8.656-8.761A10.564,10.564,0,0,1,12.021,2,9.921,9.921,0,0,1,18.4,4.3,10.041,10.041,0,0,1,22,11.342Z" />
                    <path d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z" />
                    <path d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
                    <path d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
                  </svg>
                  <span class="  mr-4"> گپ </span>
                  <span class="nav-tag bg-treaget mx-1" v-if="false">
                   </span>
                </button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/t/desk/main" class="rtl hover:text-yellow">
                <button class="col-12 d-flex align-items-center rounded-13" v-bind:class="
                  currentRouteCheck('desk')
                              ? 'btn-material  bg-treaget '
                              : ''
                ">
                  <div class="child_menu"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.8)" id="Outline" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
                    <path
                      d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
                    <path
                      d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
                    <path
                      d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
                  </svg>
                  <span class="  mr-4">میز کار</span>
                </button>
              </nuxt-link>
            </li>
            <li v-if="this.$store.state.username != ''">
              <nuxt-link :to="'/' + this.$store.state.username" class="rtl hover:text-yellow">
                <button class="col-12 d-flex align-items-center rounded-13" v-bind:class="
                  currentRouteName() == 'user'
                    ? 'btn-material  bg-treaget '
                    : ''
                ">
                  <div class="child_menu"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.8)" fill="currentColor" id="Outline"
                    viewBox="0 0 24 24">
                    <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                    <path
                      d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                  </svg>
                  <span class="  mr-4"> صفحه ی من </span>
                </button>
              </nuxt-link>
            </li>
          </div>
          <li>
            <span class="  mr-4" style="color: #e0e0e0"> عمومی </span>
          </li>
          <li>
            <nuxt-link to="/t/settings" class="rtl hover:text-yellow">
              <button class="col-12 d-flex align-items-center rounded-13" v-bind:class="
              currentRouteCheck('settings')
                  ? 'btn-material  bg-treaget text-white'
                  : ''
              ">
                <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.8)" fill="currentColor" id="Outline"
                  viewBox="0 0 24 24">
                  <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
                  <path
                    d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z" />
                </svg>
                <span class="  mr-4">تنظیمات</span>
              </button>
            </nuxt-link>
          </li>

          <li class="pb-5">
            <a @click="logout" v-if="this.$store.state.isAuthenticated == true" class="rtl hover:text-yellow ">
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span class="  mr-4"> خروج </span>
            </a>
          </li>
          <div class="treaget-modal rtl" :class="modal ? 'open' : ''">
            <div class="treaget-modal-overlay"></div>
            <div class="treaget-modal-card">
              <form class="treaget-modal-body" @submit.prevent="sendNumber">
                <div class="treaget-modal-content fs-5">
                  <div>
                    <div class="fs-6">کد تایید ارسال شده به شماره تلفنتان را وارد نمایید
                    </div>
                    <div class="py-3 px-5 text-danger" v-if="statusCheck == true">خطایی رخ داد ممکن است کد را اشتباه وارد کرده باشید</div>

                  </div><input v-model="code" type="text" required name="alt" maxlength="200"
                    class="shadow-none rtl bg-gray-100 border-bottom mt-4" id="id_alt" />
                </div>
                <div class="treaget-modal-footer">
                  <div class="d-flex">
                    <button
              type="submit"
              class="px-4 py-2 rounded-full py-2 text-white bg-treaget  "
            >
              <div v-if="loadingSMS == false">ارسال</div>
              <div
                class="d-flex flex-column align-items-center"
                v-if="loadingSMS == true"
              >
                <div class="loader-light"></div>
              </div>
            </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      counterNotification: 0,
      counterMessage: 0,
      results: [],
      user: {},
      title:null,
      loading: true,
      loadingSMS:false,
      modal: false,
      code: null,
      statusSend: false,
      statusCheck: false,
      idToken:''
    };
  },
  methods: {
    async userData() {
      this.loading = true;
      await fetch(
        `https://treaget.com/api/UserRetrieveApi/${this.$store.state.username}/`
      )
        .then((response) => response.json())
        .then((data) => {
          this.user = data;
        });
      this.loading = false;
      this.$store.commit("getUser", this.user);
    },
    CountRead() {
      fetch("https://treaget.com/api/CountReadStatus/", {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.counterNotification = data["notification"];
          this.counterMessage = data["message"];
          if (data["verify_phone"] == false && this.statusSend == false) {
            this.SendSms();
          }
        });
    },logout(){
      this.$store.commit("logout")
      this.$router.push("/t/login")
    },
    async SendSms() {
      this.statusSend = true
      await fetch("https://treaget.com/api/Send_code/", {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      })
      this.modal = true
    },
    async sendNumber() {
      this.loadingSMS= true

      try {
        if (this.code != null) {
          this.statusCheck = false
          let statusCheckApi = await fetch(`https://treaget.com/api/Code_check/?code=${this.code}`, {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`,
            },
          })
          console.log(statusCheckApi.status); // returns 200
          this.statusCheck = true
          if (statusCheckApi.ok) {
            this.modal = false
          }
        }
      } catch (error) {
        this.statusCheck = true
      }
      this.loadingSMS= false



    },
    currentRouteName() {
      return this.$route.name;
    },
    currentRouteCheck(data) {
      return this.$route.name.split("-").includes(data);
    },
    slideBarDeactivator() {
      document.getElementById('wrapper').classList.remove("sidebar-active")
    },
   
  },
  mounted() {
    this.userData();
   
    setInterval(() => this.CountRead(), 18000);
  },
};
</script>

<style>
</style>