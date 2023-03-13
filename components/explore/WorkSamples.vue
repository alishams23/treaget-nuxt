<template>
  <div>
    <div v-if=" results.length != 0">
        <masonry-wall :items="results[0]" :ssr-columns="1" :column-width="160" :gap="16">
            <template #default="{ item, index }">
    
              <nuxt-link class :to="'/t/PicturePost/' + item.id">
                <img :src="item.image" class="rounded-md" v-show="item.loaded" @load="onImgLoad(index)" />
              </nuxt-link>
    
    
              <div class=" loaderBox rounded-md" style="height:200px" v-if="!item.loaded"></div>
            </template>
          </masonry-wall>
    </div>
    <div v-if="loading == true" class="d-flex justify-content-center pt-6">
      <span class="loader"></span>
    </div>
    <Empty v-if="(results.length == 0 && loading == false)" />
  </div>
    
</template>

<script>
import WorkSamples from "~/components/explore/WorkSamples.vue";
import PostRequest from "~/components/PostRequest.vue";
export default {
    props:["search"],
  head() {
    return {
      title: "کاوش"
    };
  },
  name: "Home",
  components: { PostRequest, WorkSamples },
  data() {
    return {
      page: 1,
      results: [[]],
      loading: true,
      nextPage: true,
    };
  },
  methods: {
  
    handleScroll() {
        if (
        document.body.scrollHeight - window.scrollY <= 1000  && this.loading == false && this.nextPage == true
      ) {
        this.page += 1;
        this.searchExplorePicture();

      }
        },

    async searchExplorePicture() {
      this.loading = true
      this.nextPage = true
      try{
        await fetch(
        `https://treaget.com/api/PictureSearchApi/?page=${this.search == "" || this.search == null ? 1 : this.page}&search=${this.search}`,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${this.$store.state.token}`
          }
        }
      )
        .then(response => response.json())
        .then(data => {
          data["results"].forEach(element => this.results[0].push(element));
        });
      }catch (error) {
                this.loading = false;
                this.nextPage = false;
                console.log(error);
            }
      
      this.loading = false

    },
   
    onImgLoad(index) {

      this.results[0][index]["loaded"] = true
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  mounted() {
    this.searchExplorePicture();
    window.addEventListener("scroll", this.handleScroll);

  },watch:{
    search(){
        this.results = [[]]
        this.page = 1

   this.searchExplorePicture()
    }
  }
};
</script>

<style>
</style>