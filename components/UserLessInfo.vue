<template>
  <nuxt-link :to="'/' + data.username">

    <div class="d-flex justify-content-center p-3" style="margin-bottom: -75px">
      <div class="transform transition  m-1 w-20 h-20" style="padding: 2px; border-radius: 35px">
        <img v-if="data.image" v-bind:src="data.image" class="w-full h-full  shadow-2  bg-gray-200 cover"
          style="border-radius: 33px; " />
        <img v-else src="@/assets/inside/avatar.jpg" class="w-full h-full  shadow-2 bg-gray-200 cover"
          style="border-radius: 33px; " />
        <a
          class="bg-white-dark shadow rounded-full w-6 h-6 flex justify-center items-center text-white border-white absolute right-2 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="white" class="bi bi-person-fill"
            viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </a>
      </div>

    </div>
    <div class="rounded-2xl shadow-1 border-t bg-white w-full text-center mt-3 pt-5" style="
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
                      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
                  ">
      <p class="text-xs text-muted">{{ data.username }}</p>
      <div class=" pb-1">
        <p class=" fw-bold ">{{ data.get_full_name }}</p>
      </div>

      <div class="px-1 mb-2">
        <p class=" text-xs " style="
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                      ">{{ data.bio ? data.bio : "&nbsp;" }}</p>
      </div>
      <div style="overflow-x:scroll;overflow-y:hidden" class="d-flex py-3 scrollBarStyleSmall "
        v-if="data.postPicture && data.postPicture.length != 0">
        <div v-for="postPicture in data.postPicture" :key="postPicture.id + 'postPicture'"
          class="ml-2   shadow-2 rounded-10 transform transition hover:scale-105">
          <div class="w-14  h-14"><img :src="postPicture.image" alt="" class="w-full rounded-10 h-full cover   p-0">
          </div>
        </div>
      </div>
      <div v-if="data.postPicture.length == 0" class="py-3">
        <div class="h-14"></div>
      </div>

    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["data"]

}
</script>

<style>
</style>