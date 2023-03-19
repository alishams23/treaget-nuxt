<template>
   <div>
    <div v-if="(resultsProject.length > 0)">
     
        <div class="my-4" v-for="data in resultsProject" :key="data.id + '-postRequest-explore'">
            <post-request :data="data" :reload="getDataExploreProjectReload" />
        </div>
        
    </div>
    <Empty v-if="(resultsProject.length == 0 && loading == false)" />
    <div v-if="loading == true" class="d-flex justify-content-center pt-6">
        <span class="loader"></span>
      </div>
   </div>
</template>

<script>
import Project from "~/components/explore/Project.vue";
import PostRequest from "~/components/PostRequest.vue";
export default {
    props: ["search"],
    head() {
        return {
            title: "کاوش"
        };
    },
    name: "Home",

    components: { PostRequest, Project },
    data() {
        return {
            page: 1,
            resultsProject: [],
            loading: true,
            nextPage: true,
        };
    },
    methods: {

        
        getDataExploreProjectReload() {
            window.location.reload();
        },
        async searchExploreProject() {
            this.loading = true
try{
    await fetch(`http://127.0.0.1:8000/api/RequestSearchApi/?search=${this.search}&page=${this.page}`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${this.$store.state.token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    data["results"].forEach(element =>
                        this.resultsProject.push(element)
                    );
                });
} catch (error) {
      this.loading = false
      this.nextPage = false
      console.log(error)
      }
            this.loading = false

        },
        handleScroll() {
            if (
                document.body.scrollHeight - window.scrollY <= 1000 && this.loading == false && this.nextPage == true
            ) {
                this.page += 1;
                this.searchExploreProject();
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll)
    },
    mounted() {

        this.searchExploreProject()
        window.addEventListener("scroll", this.handleScroll);


    },
    watch: {
        search() {
            this.resultsProject = []
           this.page = 1
           this.nextPage= true
             this.searchExploreProject()
        }
    }
};
</script>


<style>

</style>