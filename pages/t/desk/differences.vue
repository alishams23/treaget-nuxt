<template>
  <div>

    <div class="my-6  rtl" v-if="loading==false">

      <div class="p-3 m-1 my-4 rounded-2xl shadow-1 border-t bg-white bg-white row" v-for="result in data" :key="`${result.id}--dispute`">
        <div class="d-flex">
          <div class="p-1">
            <br>
            <p class='irsa '>
              <span class="text-muted">توضیحات اختلاف :</span> {{ result.description }}
            </p>
            <p class='irsa '>
              <span class="text-muted">نتیجه ی اختلاف :</span>
              <span v-if="result.Result">{{ result.Result }}</span>
              <span v-else>هنوز مشخص نشده</span>
            </p>
            <span class="text-xs irsa"> {{ result.createdAdd }} </span>
            <p class='irsa '>
              <br>
              <nuxt-link
                :to="$store.state.username == result.safePayment.sender.username ? `/${result.safePayment.receiver.username}` : `/${result.safePayment.sender.username}`"
                class="btn-material btn-animation btn-animation-shadow bg-treaget    px-4 py-1  rounded-2xl irsa "><span class="text-white">طرف
                  مقابل</span></nuxt-link>
            </p>

          </div>
        </div>

        <!-- TODO : check here -->
        <!-- <div class="irsa" v-if="result.accept == true && result.safePayment == null">
          تاییدیه شما به اطلاع سفارش دهنده خواهد رسید <br>
          در صورت فعال کردن پرداخت امن برای شما به شما در بخش نوتیفیکشن ها اطلاع رسانی خواهد شد و سیستم مدیریت پروژه
          برای شما فعال خواهد شد
        </div> -->

      </div>
      <div v-if="data.length == 0">
        <empty />
      </div>
    </div>
     <div class="d-flex justify-content-center my-6" v-if="loading">
      <span class="loader"></span>
    </div>
  </div>
</template>

<script>
import Empty from "~/components/Empty.vue"
export default {
  data() {
    return {
      data: [],
      loading: true
    }
  },
  components: { Empty },
  methods: {
    async getData() {
      this.loading = true
      await fetch(
        `https://treaget.com/api/DisputeApi/`,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,

          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          this.loading = false;
        });
    }
  },mounted(){
    this.getData()
  }
}
</script>

<style>
</style>