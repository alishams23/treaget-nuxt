<template>
  <div class="px-3">
    <div class="my-6 rtl" id="listOrder">
      <div
        class="p-3 my-3 m-1 rounded-2xl shadow-1 border-t bg-white row"
        v-for="order in listOrders"
        :key="order.id + 'listOrders-order'"
      >
        <div class="d-flex align-items-center">
          <div
            class="w-10 h-10 m-1 rounded-full overflow-hidden"
            v-if="order.author.username == $store.state.username"
          >
            <img
              v-bind:src="
                order.designer.image
                  ? order.designer.image
                  : '/staticApi/inside/avatar.jpg'
              "
              alt=""
              class="rounded-full"
            />
          </div>
          <div class="p-1" v-if="order.author.username == $store.state.username">
            <p class="irsa font-semibold">
              <nuxt-link :to="'/' + order.designer.username">{{
                order.designer.username
              }}</nuxt-link>
            </p>
            <div class="text-xs irsa">{{ order.createdAdd }}</div>
          </div>
          <div
            class="w-10 h-10 m-1 rounded-full overflow-hidden"
            v-if="order.author.username != $store.state.username"
          >
            <img
              v-bind:src="
                order.author.image
                  ? order.author.image
                  : '/staticApi/inside/avatar.jpg'
              "
              alt=""
              class="rounded-full"
            />
          </div>
          <div class="p-1">
            <nuxt-link
              v-if="order.author.username != $store.state.username"
              class="font-semibold"
              :to="'/' + order.author.username"
              >{{ order.author.username }}</nuxt-link
            >
          </div>
          <div class="d-flex pt-1 align-items-center">
            <p class="irsa mx-2 border py-1 px-4 rounded-full">
              قیمت:{{ order.price }}
            </p>
          </div>
        </div>
        <div class="bold font-semibold pt-3">
          <div v-if="order.service && order.service.specialName">
            {{ order.service.specialName }}
          </div>
          <div v-else-if="order.service && order.service.nameProduct">
            {{ order.service.nameProduct.title }}
          </div>
          <div v-else>{{ order.title }}</div>
        </div>
        <div>
          <div v-if="order.body">توضیحات : {{ order.body }}</div>
          <div class="d-flex mt-3">
            <div
              class="mx-1 px-3 border rounded-full text-sm"
              v-for="option in order.optionsServiceMain"
              :key="option.id + 'order.optionsServiceMain-order'"
            >
              {{ option.title }}
            </div>
          </div>
        </div>
        <div class="d-flex flex-wrap mt-3">
          <br />
          <nuxt-link :to="`/api/projectManager/kanban/${order.safePayment.id}`"
            v-if="order.accept == true && order.safePayment"
           
            class="
              bg-blue-400
              flex-fill
              text-center
              m-1
              p-2
              rounded-full
              irsa
            "
            ><span class="text-white">مدیریت پروژه</span></nuxt-link
          >
          <a
            v-if="
              order.accept == true &&
              (order.safePayment == false || order.safePayment == null) &&
              $store.state.username != order.designer.username
            "
            v-bind:href="'/account/addSafePaymentOrder/' + order.id + '/'"
            class="
              bg-green-400
              flex-fill
              text-center
              m-1
              p-2
              rounded-full
              irsa
            "
            ><span class="text-white">پرداخت امن</span></a
          >
          <a
            v-if="order.accept == null && $store.state.username != order.author.username"
            @click="AcceptApi(order.id)"
            v-bind:href="'/account/ordersTrue/' + order.id + '/'"
            class=" bg-green-400 flex-fill text-center m-1 p-2 rounded-full irsa">
            <div class="text-white" v-if="loadingAccept == false">تایید سفارش</div>
            <div
              class="d-flex flex-column align-items-center"
              v-if="loadingAccept == true"
            >
              <div class="loader-light"></div>
            </div></a
          >
          <a
            v-if="order.accept == null"
           
           @click="CancelApi(order.id)"
            class="bg-red-500 flex-fill text-center m-1 p-2 rounded-full irsa">
             <div v-if="loadingCancel == false" class="text-white">لغو سفارش</div>
            <div
              class="d-flex flex-column align-items-center"
              v-if="loadingCancel == true"
            >
              <div class="loader-light"></div>
            </div></a
          >
          <nuxt-link
          :to="$store.state.username != order.author.username
                ? '/' + order.author.username 
                : '/' + order.designer.username "
           
            class="
              bg-gray-100
              flex-fill
              text-center
              m-1
              p-2
              rounded-full
              irsa
            "
            >دیدن پروفایل</nuxt-link
          >
          <nuxt-link :to="'/t/chat/'+  $store.state.username != order.author.username
                ? order.author.username
                : order.designer.username"
           
            class="
              bg-gray-100
              flex-fill
              text-center
              m-1
              p-2
              rounded-full
              irsa
            "
            >چت</nuxt-link
          >
        </div>
        <div
          class="irsa mt-3 p-3 rounded-full bg-gray-100"
          v-if="
            order.accept == true &&
            order.safePayment == null &&
            $store.state.username != order.author.username
          "
        >
          <span class="text-lg">تاییدیه شما برای کارفرما ارسال شد</span> <br />
          مدیریت پروژه بعد از فعال سازی پرداخت امن قابل استفاده است
        </div>
        <div
          class="col-span-2 mt-3 p-3 rounded-full irsa bg-gray-100"
          role="alert"
          v-if="
            order.accept == true &&
            order.safePayment == null &&
            $store.state.username != order.designer.username
          "
        >
          در صورتی که مبلغ پروژه ی شما بیشتر از اعتبار شما در کیف پولتان باشد به
          درگاه پرداخت منتقل میشوید تا کیف پول شما شارژ شود و پس از آن باید
          <b>دوباره</b> پرداخت امن را کلیک کنید
        </div>
      </div>
      <div class="d-flex justify-content-center" v-if="loading">
        <span class="loader"></span>
      </div>
      <div v-if="loading == false && listOrders.length == 0"><empty /></div>
    </div>
  </div>
</template>

<script>
import Desk from "~/components/Desk.vue";
export default {
  
  components: { Desk },
  data() {
    return {
      listOrders: [],
      loading: true,
      loadingCancel: false,
      loadingAccept: false,
      orderData: "",
      descriptionOrder: "",
    };
  },
  methods: {
    OrdersApi() {
      this.loading = true
      this.listOrders = []
      fetch(`https://treaget.com/api/OrderApi/`,{headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },})
        .then((response) => response.json())
        .then((data) => {
          this.listOrders = data;
          this.loading  = false;
        });
    },
    async CancelApi(id) {
      this.loadingCancel=true
      await fetch(`https://treaget.com/api/OrderFalseApi/?pk=${id}`,{headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },})
        this.loadingCancel=false
        this.OrdersApi()
    },
    async AcceptApi(id) {
      this.loadingAccept=true,
      await fetch(`https://treaget.com/api/OrderTrueApi/?pk=${id}`,{headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },})
        this.loadingAccept=false
        this.OrdersApi()
    },

  },
  mounted() {
    this.OrdersApi();
  },
};
</script>

<style>
</style>