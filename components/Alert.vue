<template>
  <nuxt-link :to="link ? link : ''"
    class="rounded-10  m-0 my-2  shadow-1 bg-white border-t hover:bg-gray-100 d-flex justify-content-between "
    style="overflow: hidden">
    <div class="d-flex align-items-center pl-3">
      <div class=" d-flex align-items-center">
        <div class="d-none d-lg-block">
          <button class="d-flex justify-content-center align-items-center w-8 h-8 rounded-pill bg-gray-100"
            style="z-index: 9999" v-if="link != null">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
              class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z" />
              <path fill-rule="evenodd"
                d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z" />
            </svg>
          </button>
        </div>
      </div>


    </div>
    <div class="d-flex align-items-center ">
      <div class="rtl py-3 pr-2">
        <slot> </slot>
      </div>
      <div v-if="alert != false">
        <div class="rounded-pill mx-2 w-8 h-8 d-flex justify-content-center align-items-center"
          :class="type == 'warning' ? 'bg-warning' : type == 'danger' ? 'bg-danger' : 'bg-treaget'">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" class="bi bi-bell"
            viewBox="0 0 16 16">
            <path
              d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
        </div>
      </div>
      <div class="" :class="type == 'warning' ? 'bg-warning' : type == 'danger' ? 'bg-danger' : 'bg-treaget'"
        style="width: 5px !important;height:100%"></div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["type", "link", "alert"],
};
</script>

<style>
</style>