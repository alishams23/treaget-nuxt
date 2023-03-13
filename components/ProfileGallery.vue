<template>
  <div>
    
    <div class="d-flex flex-column align-items-center" v-if="loading">
      <span class="loader"></span>
    </div>
   <post-gallery v-else :data="picture" />
    <div v-if="loading == false && picture.length==0"><empty /></div>
  </div>
</template>

<script>

export default {
 
  props:["username"],
  data() {
    return {
      picture: [],
      loading: true,
      
    };
  },
  methods: {
    PictureApi() {
      fetch(
        `https://treaget.com/api/PicturePostListApi/${this.username}/`
      )
        .then((response) => response.json())
        .then((data) => {
          this.picture = data;
          this.loading = false;
         
        });
    },
    
  },
  mounted() {
    this.PictureApi();
  },
};
</script>

<style>
</style>