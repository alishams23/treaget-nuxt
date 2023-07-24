<template>
    <div class="shadow-1 bg-white p-3  rounded-10   ">
      
        <div v-if="data.imageBlog" class="img-course-height shadow-2 cover rounded-10" :style="`background-image:url('${data.imageBlog.photo}');background-size: cover;`">
            <!-- <img class="rounded-10 w-full h-full cover"  src="https://i.gyazo.com/4193ee51b263d4a0dab88720352ca87a.jpg" alt="img"> -->
        </div>
      <div class="d-flex nm-4  rtl ">
       <div class="d-flex bg-white rounded-pill px-1 py-1 shadow-3">
        <div class=" rounded-pill bg-white h-10 w-10 p-half shadow-md " v-if="data.author">
            <img class="rounded-pill w-full h-full cover" v-if="data.author.image_profile != null" :src="data.author.image_profile " alt="img">
            <img class="rounded-pill w-full h-full cover" v-else src="@/assets/inside/avatar.jpg" alt="img">
        </div>
       <div class="pe-4  ps-3 ">
        <div class=" fw-bold text-sm text-nowrap  ">
            {{ data.author.get_full_name }}
          </div>
          <div class="fs-7 text-muted ">
            {{ data.author.get_full_name }}
          </div>
       </div>
       </div>
      </div>
        <div class="text-right rtl pt-3 pb-3">
            <h4 class="fw-bold text-sm irsa  text-lg">{{data.title}}</h4>
  
        </div>
    </div>
</template>

<script>

export default {
    props:["data",],
    data() {
      return {
   
      };
    },
    methods: {

    },mounted(){

  },
  };
</script>

<style>
.img-course-width{
    width: 250px;

}
.img-course-height{
    height: 130px;
}
.text-nowrap{
    text-overflow: ellipsis; 
    overflow: hidden; 
    white-space: nowrap;
}
.p-half{
    padding: 3px;
}
.nm-4{
    margin-top: -28px;
 
}



</style>