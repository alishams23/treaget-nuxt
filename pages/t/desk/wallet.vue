<template>
    <div>


        <div class="px-4 my-6">
            <div class="m-1 row rtl">
                <div v-for=" result in data" :key="result.username + 'notification'"
                    class="col-12 p-3 my-2 rounded-2xl border-t shadow-1 bg-white d-flex justify-content-between align-items-center flex-wrap">
                    <div>

                        <div class="px-2 ">
                            <p class="text-muted">مبلغ</p>
                            <strong>{{ result.cash }}</strong>
                        </div>

                    </div>

                    <div>
                        <div class="px-2 ">
                            <p class="text-muted">تاریخ</p>
                            <strong>{{ result.timePayment }}</strong>
                        </div>
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
       
    </div>
</template>

<script>
import Desk from "~/components/Desk.vue"
export default {


    components: { Desk },
    data() {
        return {
            data: [],
            loading:true
        }
    }, methods: {
        async getData() {
            this.loading = true
            await fetch(
                `http://127.0.0.1:8000/api/wallet/listTransaction/`,
                {
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json",
                        Authorization: `Token ${this.$store.state.token}`
                    }
                }
            )
                .then(response => response.json())
                .then(data => {
                    this.data = data;
                });
            this.loading = false

        }
    }, mounted() {
        this.getData()
    }
}
</script>

<style>
</style>