<template>
  <div>
     <div class="d-flex flex-column align-items-center" v-if="loading == true">
        <span class="loader"></span>
      </div>
    <div class="d-flex justify-content-center" v-if="cv.length != 0">
     
      <div class="  col-lg-11 col-md-11 col-sm-11 col-xs-11 col-10 ">
        <ul class="timeline w-full">
          <li v-for="data in cv" :key="data.id + 'profileCv'" class="">
            
            <div class="direction-l ">
              <div class="flag-wrapper">
                <span class="irsa">{{ data.title }}</span>
                <span class="time-wrapper irsa">
                  <button @click="deleteData(data.id)" class="rounded-full m-2 bg-gray-100 h-8 w-8"
                  v-if="data.person.username==$store.state.username">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="black"
                      class="bi bi-trash" viewBox="0 0 16 16">
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 a1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                  </button>
                  <span class="time text-muted" v-if="data.start!= null || data.end!=null">تاریخ <br />{{data.end}}
                    {{data.start}}</span></span>
                    
              </div>
              <Alert   :alert="false">  
                <div class="
                flag
              ">
                <div class="p-2">{{ data.body }}</div>

              </div>   
              </Alert>
             
            </div>
          </li>
        </ul>

      </div>
    </div>
    <div v-if="loading == false && cv.length == 0">
      <empty />
    </div>

  </div>
</template>

<script>
import axios from "axios"
import "@/assets/inside/css/cv.css";
export default {
  props: ["username"],
  data() {
    return {
      cv: [],
      loading: true,
    };
  },
  methods: {
    getDataHome() {
      this.loading = true;
      this.cv=[]
      fetch(
        `https://treaget.com/api/profile_items/timelineRetrieveApiView/?username=${this.username}`,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.cv = data;
          this.loading = false;
        });
    },
    deleteData(id){
      axios
        .delete(
          `https://treaget.com/api/profile_items/timelineDeleteApi/${id}/`,
          
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`,
            },
          }
        )
        .then((response) => {
          this.getDataHome()
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }
  },
  mounted() {
    this.getDataHome();
  },
};
</script>

<style>
</style>