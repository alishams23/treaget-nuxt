<template>
  <div class="">
    <NavbarMain class="mb-5" />
<div class="section-container rtl mt-5 pt-5">
  <div class="    d-flex justify-content-end ">
    <a class=" p-2  px-3 d-flex align-items-center  rounded-18   shadow-2  btn-animation" @click="$router.go(-1)">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left m-1"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
      </svg>
    </a>
  </div>
  <div v-if="loading == false">
    <h1 class="irsa fw-bold fs-1 text-treaget">قوانین</h1>
    <br />

    <div v-for="result in data" :key="result.id" class="border-bottom py-5">
      <div class="d-flex">
        <p class="  fw-bold p-3 fs-3 text-treaget ">{{ result.title }}</p>
      </div>
      <p class="fs-5" v-html="result.body"></p>
    </div>
  </div>
  <div class="d-flex justify-content-center" v-if="loading == true">
    <span class="loader"></span>
  </div>

</div>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "قوانین"
    };
  },
  layout: "main",
  head() {
    return {
      link: [

        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/style-main.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/tailwind.css"
        },

      ],
    };
  },
  data() {
    return {
      data: [],
      loading: true,
    };
  },
  methods: {
    async getData() {
      fetch(`https://treaget.com/api/RulesListApi/`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          this.loading = false;
          console.log(this.data);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
</style>