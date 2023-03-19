<template>
  <div class="bg-white mx-3 rounded-2xl border-t shadow-1 -mx-2 lg:mx-0 rtl">
    <div class="flex justify-between items-center px-4 py-1 mt-3">
      <div class="d-flex flex-1 align-items-center space-x-4">
        <nuxt-link :to="'/' + data.author.username">
          <div class="mx-3 w-8 h-8 overflow-hidden" style="border-radius: 10px">
            <img v-if="data.author.image" v-bind:src="
              data.author.image
            " class="" />
            <img v-else src="@/assets/inside/avatar.jpg" class="" />
          </div>
        </nuxt-link>
        <div>
          <nuxt-link :to="'/' + data.author.username" class="capitalize font-semibold text-sm">
            {{ data.author.full_name }}
          </nuxt-link>
          <P class="text-sm rounded-full"> قیمت {{ data.price }} تومان </P>
        </div>
      </div>
      <button v-on:click="deleteRequest(data.id)" class="rounded-full mx-2 bg-gray-100 h-8 w-8"
        v-if="this.$store.state.username == data.author.username">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash"
          viewBox="0 0 16 16">
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
      </button>
      <button v-on:click="shareLink(`request/${data.id}/`)" class="rounded-full bg-gray-100 h-8 w-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-share"
          viewBox="0 0 16 16">
          <path
            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
        </svg>
      </button>
    </div>
    <div class="grid gap-3 lg:p-6 p-4">
      <h4 class=" fs-5 fw-bold irsa text-right">{{ data.title }}</h4>
      <p class=" text-right">{{ data.body }}</p>
      <p class=" px-2"></p>
      <div class="d-flex flex-wrap justify-content-between">
        <nuxt-link tag="button" :to="'/t/acceptRequest/' + data.id" v-if="
          this.$store.state.username != data.author.username &&
          this.$store.state.ServiceProvider == true
        " class="
            py-1
            px-3
            mx-3
            mt-1
            rounded-2xl
            text-sm
            btn-material  btn-animation-shadow
            irsa
            bg-treaget
            text-white
          ">
          قبول درخواست
        </nuxt-link>
        <button class="
            d-flex
            align-items-center
            border
            rounded-pill
            px-2
            mt-1
            mx-2
           
          " v-if="data.subcategories.length != 0" @click="active = !active">
          <p class="px-2" v-if="active">بستن</p>
          <svg v-if="active" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-chevron-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
          </svg>
          <p class="px-2" v-if="!active"> پیشنهاد ها</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down"
            viewBox="0 0 16 16" v-if="!active">
            <path fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
      <div v-for="result in data.subcategories" :key="result.id + '_subcategoriesRequest'" v-show="active == true">
        <div class=" hover:bg-gray-100 px-4 py-2 rounded-10">
          <nuxt-link :to="`/${result.author.username}`" class="d-flex " >
            <div class="
                border-2
                d-flex
                justify-content-center
                align-items-center
                p-1
                w-14
                h-14
              " style="border-radius: 35px">
              <img v-if="result.author.image" v-bind:src="result.author.image"
                class="w-full h-full cover rounded-full" />
              <img v-else src="@/assets/inside/avatar.jpg" class="w-full h-full cover rounded-full" />
            </div>
            <div class="d-flex me-3 flex-column  my-1">
            <div class="fw-bold">
              {{ result.author.username }}
            </div>
            <div class="">{{ result.author.full_name }}</div>
          </div>
          </nuxt-link>
          <div class="px-3 pt-3 fw-bold">{{ result.time }}</div>
        </div>
        
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props: ["data", "reload"],
  data() {
    return { active: false };
  },
  methods: {
    async deleteRequest(id) {
      await fetch(`http://127.0.0.1:8000/api/DestroyRequestApi/${id}/`, {
        method: "delete",
        credentials: "same-origin",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      });
      this.reload(1);
    },
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
      this.copyToClipboard(`${window.location.hostname}/${dataValue}`)
      alert(`${window.location.hostname}/${dataValue} کپی شد.`);
    },
  },
};
</script>

<style>
</style>