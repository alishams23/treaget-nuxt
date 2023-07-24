<template>
  <div>
    <div class="container-fluid">
      <img class="banner-img rounded-18 w-full cover" src="~/assets/images/banner.png" alt="">
    </div>
    <div class="
        flex
        lg:flex-row
        flex-col
        justify-content-between
        lg:py-8 lg:space-x-8
        px-3
      ">
      <div class="d-flex justify-content-center " >
        <div class="bg-white mx-4 user-img" style="border-radius: 45px;">
          <div class="  m-1  w-24 h-24 " style=" ">
            <div class=" w-full h-full bg-white" style="border-radius: 50px;padding: 0.20rem;">
              <img v-if="data.image" v-bind:src="data.image" class="w-full h-full cover" style="border-radius: 37px; " />
              <img v-else src="@/assets/inside/avatar.jpg" class="w-full h-full cover" style="border-radius: 37px; " />
            </div>
  
          </div>
        </div>
      </div>
      <div class="lg:w/8/12 flex-column d-flex align-items-end">
        <h2 class="font-semibold mt-3 lg:text-2xl text-lg mb-2 irsa d-flex">
          <!-- TODO:add special user -->
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" 
            class="m-1 mx-3 bi bi-patch-check-fill" viewBox="0 0 16 16">
            <path
              d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
          </svg> -->
          <span class="">{{ data.get_full_name }}</span>
        </h2>
        <p class="text-right mb-2 text-sm dark:text-gray-100 irsa">
          {{ data.bio }}
        </p>

        <div class="flex font-semibold mb-3 space-x-2 dark:text-gray-10" v-for="category in data.category"
          :key="category + 'category-profileHeader'">
          <a class="irsa text-sm">{{ category.title }}</a>
        </div>

        <div class="
            
            d-flex
            justify-content-end
            align-items-center
            flex-wrap
            font-semibold
            space-x-3
            text-center text-sm
            my-2
          ">


          <div class="drop  -color-lighter drop--down">
            <button><a href="#" class="
              my-1
              btn-shadow-black
              btn-animation
              flex
              items-center
              justify-center
              rounded-full
              text-xl
              p-2
             
            ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
              </a></button>

            <div class="drop__content  -transition-slide-in">


              <div class="drop-list -size-large  -position-left -border-rounded">
                <button class="drop-list__btn py-2" v-if="data.username != this.$store.state.username">
                  <nuxt-link :to="'/t/chat/'+ data.username"
                    class="d-flex  mx-3 justify-content-between align-items-center" href="">

                    <i class="fa fa-paper-plane"></i>

                    <div class="text-sm ">
                      ارسال پیام
                    </div>
                  </nuxt-link>
                </button>
                <button class="drop-list__btn py-2">
                  <div @click="shareLink()"
                    class="d-flex  mx-3 justify-content-between align-items-center text-blue-500" href="">

                    <i class="fa fa-share"></i>

                    <div class="text-sm ">
                      اشتراک گذاری پروفایل
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>


          <nuxt-link tag="button" to="/t/settings"
            class="text-xs my-1 btn-material btn-animation bg-treaget btn-animation-shadow   "
            v-if="data.username == this.$store.state.username">
            تنظیمات
          </nuxt-link>

          <button @click="followHandler" href="#" v-if="
            data.username != this.$store.state.username &&
            data.is_followed == false
          " class="
              text-xs
              my-1
              btn-material btn-animation
              bg-treaget btn-animation-shadow  
              text-white
              
            ">
            <div v-if="loadingFollow == false">دنبال کردن</div>
            <div class="d-flex flex-column align-items-center" v-if="loadingFollow == true">
              <div class="loader-light"></div>
            </div>
          </button>
          <button @click="followHandler" href="#" v-if="
            data.username != this.$store.state.username &&
            data.is_followed == true
          " class="text-xs my-1 btn-material btn-animation text-black  btn-animation-shadow-black border">
            <div v-if="loadingFollow == false">لغو دنبال کردن</div>
            <div class="d-flex flex-column align-items-center" v-if="loadingFollow == true">
              <div class="loader-orange"></div>
            </div>
          </button>

          <button class="text-xs my-1 btn-material btn-animation bg-treaget btn-animation-shadow   " v-if="
            data.username != this.$store.state.username &&
            this.$store.state.ServiceProvider == false
          ">
            ثبت سفارش
          </button>
          <button class="text-xs btn-material  my-1 btn-animation bg-treaget btn-animation-shadow   " v-if="
            data.username != this.$store.state.username &&
            this.$store.state.ServiceProvider == false
          ">
            پرداخت امن
          </button>
          <div></div>
        </div>
      </div>
    </div>
    <div class="
        divide-gray-300 divide-transparent divide-x
        grid grid-cols-2
        lg:text-left lg:text-lg
        mt-3
        text-center
        w-full
        dark:text-gray-100
      ">
      <nuxt-link :to="`/${data.username}/followers`" class="text-center flex-col justify-content-center text-xs my-3">
        <p class="irsa text-xs lg:pl-2 text-muted">دنبال کننده</p>
        <div class="mt-2 fs-6">{{ data.number_follow.followers }}</div>
      </nuxt-link>
      <nuxt-link :to="`/${data.username}/following`" class="text-center justify-content-center flex-col text-xs my-3">
        <p class="irsa text-xs lg:pl-2 text-muted">دنبال شونده</p>
        <div class="mt-2 fs-6">{{ data.number_follow.following }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  props: ["data"],
  data() {
    return { loadingFollow: false };
  },
  methods: {
    copyToClipboard(textToCopy) {
      // navigator clipboard api needs a secure context (https)
      if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(textToCopy);
      } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
          // here the magic happens
          document.execCommand("copy") ? res() : rej();
          textArea.remove();
        });
      }
    },
    shareLink() {
      this.copyToClipboard(`/${this.data.username}/`)
      alert(` کپی شد.`);
    },
    async followHandler() {
      this.loadingFollow = true;
      try {
        await fetch(
          `https://treaget.com/api/FollowUnfollowApi/${this.data.username}`,
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`,
            },
          }
        );
        this.data.is_followed = !this.data.is_followed;
        this.loadingFollow = false;
      } catch (error) {
        // this.loadingFollow = false
      }
    },
  },
};
</script>

<style>

</style>