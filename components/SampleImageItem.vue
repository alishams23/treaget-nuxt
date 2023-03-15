<template>
  <div>
    <nuxt-link class :to="'/t/PicturePost/' + data.id">
                <img :src="data.image" class="rounded-md" v-show="loaded" @load="loaded= true" />
                
              </nuxt-link>
    
    
              <div class=" loaderBox rounded-md" style="height:200px" v-if="!loaded"></div>
  </div>
</template>

<script>
export default {
  props:["data","index"],
  data(){
    return{
      loaded:false
    }
  },
methods:{

}
}
</script>

<style>

</style>