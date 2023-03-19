<template>
  <div class="border-t bg-white rounded-2xl border-top1 shadow-1 mx-3 lg:mx-0 rtl" v-if="data != null">
    <!-- post header-->
    <div class="flex justify-between items-center px-4 py-3">
      <div class="d-flex flex-1 align-items-center space-x-4">
        <a href>
          <div class="w-8 h-8 overflow-hidden" style="border-radius: 10px">
            <img v-if="data.author.image" v-bind:src="data.author.image" class />
            <img v-else src="@/assets/inside/avatar.jpg" class />
          </div>
        </a>
        <nuxt-link :to="'/' + data.author.username" class="block capitalize font-semibold px-4 dark:text-gray-100 irsa">
          {{ data.author.first_name }}
          {{ data.author.last_name }}
        </nuxt-link>
      </div>
      <button v-on:click="deletePicture(data.id)" class="rounded-full mx-2 bg-gray-100 h-8 w-8"
        v-if="this.$store.state.username == data.author.username">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash"
          viewBox="0 0 16 16">
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 a1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
      </button>
      <button v-on:click="shareLink(`account/post/${data.id}/`)" class="rounded-full bg-gray-100 h-8 w-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-share"
          viewBox="0 0 16 16">
          <path
            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
        </svg>
      </button>
    </div>
    <div class="p-3">
      <img v-bind:src="data.image" v-show="loaded" class="w-full h-full" alt style="border-radius: 12px"
        @load="onImgLoad()" />
      <div class="loaderBox rounded-md" style="height:400px" v-if="!loaded"></div>
    </div>
    <div class="py-3 px-4 space-y-3">
      <div class="flex items-center space-x-3">
        <div class="flex space-x-4">
          <a class="flex items-center">
            <div class="irsa py-1 px-3 border rounded-full text-xs"
              v-if="this.$store.state.username == data.author.username">تعداد لایک : {{ data.like_count }}</div>
            <div class="p-2 rounded-full text-black hapus_krs" v-on:click="like(data.id)" v-bind:value="data.id">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" v-if="data.likeAuthor" fill="currentColor"
                class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" v-else
                class="bi bi-heart" viewBox="0 0 16 16">
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </div>
          </a>
        </div>
        <div class="irsa row" style="white-space: initial">
          <p class="col-12">{{ data.alt }}</p>
        </div>
      </div>
      <div class="irsa d-flex flex-wrap">
        <p class="irsa rounded-full m-1 bg-gray-100 text-xs px-4 py-1" v-for="category in data.category"
          :key="category.pk + 'data.category-PostPicture'">{{ category.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "reload"],
  data() {
    return { loaded: false };
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
    shareLink(dataValue) {
      this.copyToClipboard(`${window.location.hostname}/${dataValue}`);
      alert(`${window.location.hostname}/${dataValue} کپی شد.`);
    },
    async deletePicture(id) {
      await fetch(`http://127.0.0.1:8000/api/PicturePostDestroyRetrive/${id}/`, {
        method: "delete",
        credentials: "same-origin",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`
        }
      });
      if (this.reload != null) {
        this.reload(1);
      }
    },
    async like(id) {
      await fetch(`http://127.0.0.1:8000/api/AddLikeView/?Picture=${id}`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`
        }
      });
      if (this.data.likeAuthor == true) {
        this.data.likeAuthor = false;
        this.data.like_count--;
      } else {
        this.data.likeAuthor = true;
        this.data.like_count++;
      }
    },
    onImgLoad() {
      this.loaded = true;
    }
  }
};
</script>

<style>
</style>