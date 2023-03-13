<template>
  <div v-show="hide == false">

     <nuxt  />
  </div>
</template>

<script>

export default {
  data(){
    return{
      hide:true
    }
  },

  layout: 'main',
  // OR
  layout (context) {
    return 'main'
  },methods : {
  
  }, computed: {
    isAuthenticated: {
      get() {
        return this.$store.state.isAuthenticated;
      }
    }
  },
   beforeMount() {
    this.$store.commit("onStart");
     
  },mounted(){
   if ( this.isAuthenticated == true) {
      this.$router.push("/t/home");
    } else {
    this.hide = false

    }
  }
}
</script>

<style >

</style>