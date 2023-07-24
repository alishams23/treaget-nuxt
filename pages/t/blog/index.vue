<template>
  <div class="px-3">
 
    <div class="px-2 py-2 pb-4">
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex col justify-content-start">
          <div class="d-flex p-3 text-white bg-treaget rounded-13">
            <i class="fa fa-search" />
          </div>
        </div>
        <div class="row col-10 col-lg-11">
          <input
            v-model="text"
            class="col-12 rounded-13 rtl shadow-none border"
            name="name"
            type="search"
            placeholder="جستجو"
            @keyup.enter="
              getData()
              data = []
              page = 1
            "
          >
        </div>
      </div>
    </div>
    <div class="d-flex flex-row align-items-stretch flex-wrap">
      <nuxt-link
        v-for="item in data"
        :key="item.id + 'blog list'"
        :to="'/t/blog/' + item.id"
        class="col-12 col-lg-6 col-xl-6 col-md-6 pt-2 pb-3 px-2 d-flex align-items-stretch"
      >
        <Blog-item class="w-full" :data="item" />
      </nuxt-link>
    </div>

    <div >
      <Empty v-if="data.length == 0 && loading == false" class="mt-5" />
     
    </div>
    <!-- post 2-->
    <!-- Load more-->
    <div class="d-flex justify-content-center">
      <button
        v-if="nextPage != null && loading == false"
        class="border rounded-pill py-2 px-3 mt-2 bg-white"
        @click="
          page++
          getData()
        "
      >
        بیشتر
      </button>
    </div>
    <div v-if="loading" class="d-flex justify-content-center">
      <span class="loader" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      page: 1,
      data: [],
      text: '',
      page: 1,
      loading: false,
      nextPage: null
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    checkLogin () {
      return this.$store.state.isAuthenticated == true
    },
    async getData () {
      this.loading = true
      await axios
        .get(
          `https://treaget.com/api/blog/Blog_List/?search=${
            this.text == null ? '' : this.text
          }&page=${this.page}`
        )

        .then((response) => {
          console.log(response.data)
          this.nextPage = response.data.next
          this.loading = false
          response.data.results.forEach(element => this.data.push(element))
        })
    }
  }
}
</script>

<style></style>
