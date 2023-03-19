<template>
    <div class="px-4">
        <div class="my-6 row rtl">
            <div v-for="(result, index) in data" :key="result.username + 'notification'"
                class="col-12 p-3 my-2 rounded-2xl shadow-1 bg-white d-flex justify-content-between align-items-center flex-wrap">
                <nuxt-link :to="`/${result.username}`" class="d-flex align-items-center">
                    <div v-if="result.image != null" class="w-10 h-10 m-1 rounded-2xl overflow-hidden">
                        <img :src="result.image" alt="" class="rounded-2xl" />
                    </div>
                    <div v-else class="w-10 h-10 m-1 rounded-2xl overflow-hidden">
                        <img src="@/assets/inside/avatar.jpg" alt="" class="rounded-2xl" />
                    </div>
                    <div class="px-2 ">
                        <strong>{{ result.username }}</strong>
                        <p>{{ result.get_full_name }}</p>
                    </div>

                </nuxt-link>
           
                <div>
                    <button @click="followHandler(result, index)" href="#" v-if="
                        result.username != $store.state.username &&
                        result.is_followed == false || result.is_followed == 'loading'
                    " class="
              text-xs
              btn-material btn-animation
              bg-treaget btn-animation-shadow  
              text-white
            ">
                        <div v-if="result.is_followed == false">دنبال کردن</div>
                        <div class="d-flex flex-column align-items-center px-3" v-if="result.is_followed == 'loading'">
                            <div class="loader-light"></div>
                        </div>
                    </button>
                    
                    <button @click="followHandler(result, index)" href="#" v-if="
                        result.username != $store.state.username &&
                        result.is_followed == true 
                    " class="text-xs btn-material btn-animation text-black  btn-animation-shadow-black border">
                        <div >لغو دنبال کردن</div>
                       
                    </button>
                </div>
            </div>
            <div v-if="data.length == 0 && loading == false">
                <p>
                    <empty />
                </p>
            </div>
        </div>
        <div class="d-flex justify-content-center" v-if="loading">
            <span class="loader"></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [],
            loading: true,
            loadingFollow: false,
        }
    },
    methods: {
        getData() {
            this.loading = true
            fetch(`http://127.0.0.1:8000/api/followingList/?username=${this.$route.params.user}`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${this.$store.state.token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    this.data = data
                    this.loading = false
                });
        }, async followHandler(user, index) {
            let is_followed = this.data[index].is_followed 
            this.data[index].is_followed = 'loading'
            try {
                await fetch(
                    `http://127.0.0.1:8000/api/FollowUnfollowApi/${user.username}`,
                    {
                        headers: {
                            "Content-type": "application/json",
                            Accept: "application/json",
                            Authorization: `Token ${this.$store.state.token}`,
                        },
                    }
                );

                this.data[index].is_followed = !is_followed;
                this.loadingFollow = false;
            } catch (error) {
               this.data[index].is_followed = is_followed;
            }
        },
    }, mounted() {
        this.getData()
    }

}
</script>

<style>
</style>