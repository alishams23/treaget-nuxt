<template>
        <!-- right sidebar-->
    <div class="   d-lg-block d-none  mt-3 " >
        <div class="shadow-1 rounded-2xl border-t">
          <div class="text-right p-3 px-4 fs-5 fw-bold">افراد پیشنهادی</div>
  
          <div class="d-flex flex-column rtl">
            <div class="d-flex justify-content-center" v-for="n in 6" :key="n + '_3-home'">
              <div class="UserSuggestionLoader" v-show="userSuggestion.length == 0"></div>
            </div>
            <nuxt-link :to="'/' + data.username" v-for="data in userSuggestion" :key="data.username + '_4-home'">
              <div class="
                  d-flex
                  justify-content-between
                  mx-3 mb-1
                  hover:bg-gray-100
                  p-2
                  rounded-10
                ">
                <div class="
                    border-2
                    d-flex
                    justify-content-center
                    align-items-center
                    p-1
                    w-14
                    h-14
                 
                  " style="border-radius: 35px">
                  <img v-bind:src="data.image" class="w-full h-full cover" style="border-radius: 35px; " />
                </div>
                <div class="d-flex flex-column align-items-end my-1">
                  <div class="fw-bold">
                    {{ data.username }}
                  </div>
                  <div class="fw-light">{{ data.full_name }}</div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'UserSuggestion',
    data(){
        return{
            userSuggestion: [],
        }
    },
    methods: {
        getUserSuggestion() {
      fetch(`http://127.0.0.1:8000/api/UserSuggestion/`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.userSuggestion = data;
        });
    },
    },
    mounted() {
        this.getUserSuggestion();
    },
}
</script>

<style>
</style>