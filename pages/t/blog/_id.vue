<template>
  <!-- /header -->
  <!--content-->
 <div>
  <div class="px-3" v-if="data != null">
    <div class="bg-white rounded-13 shadow-1">
      <div v-if="data.imageBlog" class="col-12 p-4">
       

        <img
          v-bind:src="data.imageBlog.photo"
          class="rounded-13 cover w-full h-full"
          alt=""
        />
        <div class="d-flex" style="margin-top: -70px;">
         
           
            <div class="drop -color-lighter drop--down">
              <button>
                <a
                  href="#"
                  class="ms-3  h-10 w-10 rounded-18 shadow-2 bg-white d-flex justify-content-center align-items-center"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
                </a>
              </button>
  
              <div class="drop__content -transition-slide-in" style="z-index:9999">
                <div class="drop-list -size-large -position-right -border-rounded">
                 
                  <button class="drop-list__btn py-2">
                    <div
                      @click="shareLink()"
                      class="d-flex mx-3 justify-content-between align-items-center "
                      href
                    >
                      <i class="fa fa-share"></i>
  
                      <div class="text-sm">اشتراک گذاری پروفایل</div>
                    </div>
                  </button>
                  <button class="drop-list__btn py-2">
                    <nuxt-link 
                    v-if="data.author.username == this.$store.state.username"
                    :to="'/t/textEditor/'+ data.id"
                      class="d-flex mx-3 justify-content-between align-items-center "
                      href
                    >
                      <i class="fa fa-pen"></i>
  
                      <div class="text-sm">ادیت</div>
                  </nuxt-link >
                  </button>
                  <button class="drop-list__btn py-2"  @click="deletePicture(data.id)"  v-if="data.author.username == this.$store.state.username">
                    <div
                      class="d-flex mx-3 justify-content-between align-items-center text-danger"
                      href
                    >
                      <i class="fad fa-trash"></i>
  
                      <div class="text-sm">حذف</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
        
        </div>
      </div>
      <div class="col-12">
        <div class="px-4">
          <h2 class="v2 irsa rtl pb-4 px-2 pt-5">
            {{ data.title }}
          </h2>
          <vue-editor
            v-model="data.body"
            :editorOptions="editorOptions"
            disabled
          ></vue-editor>
        </div>
      </div>
      <div class="py-4">
        
        <div
          class="d-flex justify-content-around align-items-center px-1 bg-white shadow-1 mx-3 rounded-13 py-3"
        >
          <div class="d-flex">
            <nuxt-link
            :to="checkLogin() ? '' : '/t/login'"
             class="d-flex items-center" >
              <div class="irsa py-1 px-3 border rounded-full text-xs">
                تعداد لایک : {{ data.like_count }}
              </div>
              <div
                class="p-2 rounded-full text-black hapus_krs"
                v-on:click="like(data.id)"
                v-bind:value="data.id"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  v-if="data.likeAuthor"
                  fill="green"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  v-else
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                  />
                </svg>
              </div>
            </nuxt-link>
          </div>
          <nuxt-link :to="'/'+data.author.username" class="d-flex">
            <div class="d-flex flex-column justify-content-between py-2">
              <div class="rtl fw-bold">
                {{ data.author.username }}
              </div>
              <div class="text-xs text-muted rtl">
                {{ data.author.get_full_name }}
              </div>
            </div>
            <div
              class="rounded-pill bg-white h-14 w-14 p-half shadow-lg ms-3"
              v-if="data.author"
            >
              <img
                class="rounded-pill w-full h-full cover"
                v-if="data.author.image_profile != null"
                :src="data.author.image_profile"
                alt="img"
              />
              <img
                class="rounded-pill w-full h-full cover"
                v-else
                src="@/assets/inside/avatar.jpg"
                alt="img"
              />
            </div>
          </nuxt-link>
        </div>
      
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-6" v-if="loading == true">
    <span class="loader"></span>
  </div>
 </div>
</template>

<script>
import axios from 'axios'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  data() {
    return {
      loading: true,
      loadingCategory: true,
      data: null,
      category: null,
      editorOptions: {
        theme: 'bubble'
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      this.loading=true
      await axios
        .get(
          `https://treaget.com/api/blog/blog_retrieve/${this.$route.params.id}/`,
          {
            headers: {
              'Content-type': 'application/json',
              Accept: 'application/json',
              Authorization:
                this.$store.state.token != ''
                  ? `Token ${this.$store.state.token}`
                  : ''
            }
          }
        )
        .then(response => (this.data = response.data))
      this.loading = false
      
    },
    async like(id) {
      await fetch(
        `https://treaget.com/api/blog/AddLikeView/?id=${this.$route.params.id}`,
        {
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization:
              this.$store.state.token != ''
                ? `Token ${this.$store.state.token}`
                : ''
          }
        }
      )
      if (this.data.likeAuthor == true) {
        this.data.likeAuthor = false
        this.data.like_count--
      } else {
        this.data.likeAuthor = true
        this.data.like_count++
      }
    }, async deletePicture(id) {
      await fetch(`https://treaget.com/api/blog/BlogRemove/${id}/`, {
        method: "delete",
        credentials: "same-origin",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`
        }
      }).then(
        this.$router.push(`/t/blog/`)

      );
    },
    checkLogin () {
      return this.$store.state.isAuthenticated == true
    },shareLink() {
      this.copyToClipboard(`https://treaget.com/t/blog/${this.data.id}/`);
      alert(` کپی شد.`);
    },copyToClipboard (textToCopy) {
      // navigator clipboard api needs a secure context (https)
      if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(textToCopy)
      } else {
        // text area method
        const textArea = document.createElement('textarea')
        textArea.value = textToCopy
        // make the textarea out of viewport
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        // eslint-disable-next-line promise/param-names
        return new Promise((res, rej) => {
          // here the magic happens
          // eslint-disable-next-line prefer-promise-reject-errors
          document.execCommand('copy') ? res() : rej()
          textArea.remove()
        })
      }
    },
  }
}
</script>
