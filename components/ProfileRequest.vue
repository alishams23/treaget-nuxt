<template>
  <div>
    <div v-for="result in data" :key="result.id + 'profileREquest'">
        <post-request :data="result" class="my-4" :reload="getData" />
        
    </div>
    <div class="d-flex flex-column align-items-center" v-if="loading">
      <span class="loader"></span>
    </div>
  
     
    <div v-if="loading == false && data.length==0"><empty /></div>
    
  </div>
</template>

<script>
export default {
 
  props:["username"],
  data() {
    return {
      data: [],
      loading: true,
      
    };
  },
  methods: {
    getData() {
      fetch(
        `https://treaget.com/api/RequestListApi/${this.username}/`
      )
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          this.loading = false;
    
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