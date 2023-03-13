<template>
  <div>
    <div class="d-flex px-4 justify-content-between mt-3 mb-5">
      <div class="d-flex"></div>
      <div class="rtl">
        <div class="mb-2 mt-1 font-semibold text-xl rtl">سلام 👋</div>
        <div class="text-md rtl">به تریگت خوش آمدید</div>
      </div>
    </div>
    <div class="px-3">
      <div class="d-flex flex-row ">
        <div class="d-flex col justify-content-center"><i
            class="fa fa-search p-3 text-white bg-treaget rounded-2xl"></i></div>

        <input class="col-10 col-lg-11 rounded-2xl border rtl  shadow-none" name="name" type="search"
          placeholder="search" v-model="search" />
      </div>
    </div>
    <div class="tab-wrap mt-5 border-bottom bg-white d-flex justify-content-center">

      <input type="radio" name="tabs" id="tab3" checked />
      <div class="tab-label-content" id="tab3-content">
        <label for="tab3" v-on:click="page = 0">
          <div class=" mx-2">نمونه کار</div>
          <i class="fad fa-image" style="font-size:20px"></i>
        </label>
      </div>

      <input type="radio" name="tabs" id="tab2" />
      <div class="tab-label-content" id="tab2-content">
        <label for="tab2" v-on:click="page = 1">
          <div class=" mx-2">پروژه</div>
          <i class="fad fa-bags-shopping" style="font-size:20px"></i>
        </label>

      </div>

      <input type="radio" name="tabs" id="tab1"  />
      <div class="tab-label-content" id="tab1-content">
        <label for="tab1" v-on:click="page = 2">
          <div class=" m-2">فریلنسر</div>
          <i class="fad fa-user" style="font-size:20px"></i>
        </label>
      </div>




      
     

      <div class="slide d-flex justify-content-center">
        <div class="slide-inside"></div>
      </div>
    </div>
    <!-- Load more-->
    <div class="px-3 mt-5" v-if="page == 0">

      <WorkSamples :search="search" />

    </div>
    <div v-if="page == 1">

      <Project :search="search" />
    </div>
    <div class="px-3" v-if="page == 2">

      <ExploreUser :search="search" />
    </div>

   
  </div>
</template>

<script>
import Project from "~/components/explore/Project.vue";
import WorkSamples from "~/components/explore/WorkSamples.vue";
import PostRequest from "~/components/PostRequest.vue";
export default {
  head() {
    return {
      title: "کاوش"
    };
  },
  name: "Home",
  components: { PostRequest, WorkSamples, Project },
  data() {
    return {

      search: "",

      page: 0,


    };
  },

};
</script>



<style lang="scss">
@mixin tabs {
  @for $i from 1 through 3 {
    &:nth-of-type(#{$i}) {
      &:checked {
        ~.slide {
          left: calc((100% / #{3}) * #{$i - 1});
        }
      }
    }
  }

}

@mixin tabs-2 {

  @for $i from 1 through 2 {
    &:nth-of-type(#{$i}) {
      &:checked {
        ~.slide-2 {
          left: calc((100% / #{2}) * #{$i - 1});
        }
      }
    }
  }
}

.tab-wrap {
  position: relative;
  display: flex;
}

input[type="radio"][name="tabs"] {
  position: absolute;
  z-index: -1;

  &:checked {
    +.tab-label-content {
      label {
        color: rgb(0, 0, 0);
      }


    }
  }

  @include tabs;

  &:first-of-type {
    &:checked {
      ~.slide {
        left: 0;
      }
    }
  }

}


input[type="radio"][name="tabs-2"] {
  position: absolute;
  z-index: -1;

  &:checked {
    +.tab-label-content {
      label {
        color: rgb(0, 0, 0);
      }


    }
  }



  @include tabs-2;

  &:first-of-type {
    &:checked {
      ~.slide-2 {
        left: 0;
      }
    }
  }
}

label {
  cursor: pointer;
  color: rgba(83, 83, 83, 0.8);
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 40px;
  width: 100%;
}

.slide {

  width: calc(100% / #{3});
  height: 5px;
  position: absolute;
  top: calc(100% - 3px);
  transition: left 0.3s ease-out;
}

.slide-2 {

  width: calc(100% / #{2});
  height: 5px;
  position: absolute;
  top: calc(100% - 3px);
  transition: left 0.3s ease-out;
}

.slide-inside {
  background: #ff1e00;
  width: 80%;
  height: 3px;
  border-radius: 50px 50px 0px 0px;
}

.tab-label-content {
  width: 100%;


}
</style>