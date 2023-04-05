<template>
    <div class="row">
     
        <div class="my-2 col-md-4 col-sm-6" v-for="data,index in UsersData" :key="data.pk +'----'+index+ '-user-explore'">
       <user-less-info :data="data" />
        </div>
        <div v-if="loading == true" class="d-flex justify-content-center pt-6">
          <span class="loader"></span>
        </div>
        <Empty v-if="(UsersData.length == 0 && loading == false)" />
      </div>
</template>

<script>
import Empty from '../Empty.vue';

export default {
    props: ["search"],
    head() {
        return {
            title: "کاوش"
        };
    },
    name: "Home",
    data() {
        return {
            page: 1,
            loading: false,
            UsersData: [],
            results: [[]],
            nextPage: true
        };
    },
    methods: {
        async searchUser() {
            this.loading = true;
            this.nextPage = true;
            try {
                await fetch(`https://treaget.com/api/UserSearchListApi/?search=${this.search}&page=${this.search == "" || this.search == null ? 1 : this.page}&ordering=${this.search == "" || this.search == null ? "?" : ""}`, {
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json",
                        Authorization: `Token ${this.$store.state.token}`
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                    data["results"].forEach(element => this.UsersData.push(element));
                });
            }
            catch (error) {
                this.loading = false;
                this.nextPage = false;
                console.log(error);
            }
            this.loading = false;
        },
        handleScroll() {
            if (document.body.scrollHeight - window.scrollY <= 1000 && this.loading == false && this.nextPage == true) {
                this.page += 1;
                this.searchUser();
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        this.searchUser();
    },
    watch: {
        search() {
            this.page = 1;
            this.UsersData = [];
            this.searchUser();
        }
    },
    components: { Empty }
};
</script>