<template>
  <div class="px-3">
   
    <div class="row">
      <div class="col-lg-4 col-md-12 col-12 mt-5">
        <div class="bg-treaget rounded-10">
          <div
            class="
              background-wallet
              d-flex
              flex-column
              justify-content-between
              py-2
              px-2
            "
            v-if="loadingWallet == false"
          >
            <div class="d-flex justify-content-between">
              <div class="d-flex ps-2 pt-2">
                <div class="">
                  <button @click="getData()" class="rounded-pill bg-white-opacity d-flex justify-content-center align-items-center w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      class="bi bi-arrow-clockwise"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                      />
                      <path
                        d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                      />
                    </svg>
                  </button>
                </div>
                <div class="ps-2">
                  <div class="rounded-pill bg-white-opacity d-flex justify-content-center align-items-center w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="white"
                      class="bi bi-wallet2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p class="text-white fs-6 pe-2 pt-2 fw-bold">کیف پول</p>
            </div>
            <div class="text-white d-flex justify-content-end">
              <p class="fs-xs px-3 fw-light">تومان</p>
              <p class="pe-3 fs-3">{{data.cash}}</p>
            </div>
          </div>
          <div
            v-else
            class="
              background-wallet
              d-flex
              rounded-3
              loaderBox
              flex-column
              justify-content-between
              py-2
              px-2
            "
          ></div>
        </div>
      </div>
      <div class="col-lg-8 col-md-12 col-12 mt-5">
        <div class="d-flex flex-row">
          <p
            class="fs-1 ms-5 mt-45 fw-bolder d-block"
            v-if="loadingWallet == false"
          >
          {{data.cash}}
          </p>
          <div v-else class="loaderBox ms-5 rounded-10 mt-45 px-5 py-3"></div>
        </div>
        <div
          class="mt-5 ms-5 d-flex justify-content-start"
          v-if="loadingWallet == false"
        >
          <nuxt-link tag="button" to="/t/chargeWallet"
            class="rounded-10 bg-treaget text-white btn-material btn-animation px-5 py-1"
          >
            واریز وجه
          </nuxt-link>
          <nuxt-link tag="button" to="/t/withdrawMoney" class="btn-t-hover rounded-10 ms-3 px-2 bg-gray-100">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2744 19.75V4.75"
                stroke="#0000006e"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.2988 13.7002L12.2748 19.7502L6.24976 13.7002"
                stroke="#0000006e"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nuxt-link>
          <nuxt-link tag="button" to="/t/desk/wallet" class="btn-t-hover rounded-10 ms-3 px-2 bg-gray-100">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.7367 2.7619H8.08369C6.02469 2.7619 4.24969 4.4309 4.24969 6.4909V17.2039C4.24969 19.3799 5.90869 21.1149 8.08369 21.1149H16.0727C18.1327 21.1149 19.8017 19.2649 19.8017 17.2039V8.0379L14.7367 2.7619Z"
                stroke="#0000006e"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.474 2.75021V5.65921C14.474 7.07921 15.623 8.23121 17.042 8.23421C18.359 8.23721 19.706 8.23821 19.797 8.23221"
                stroke="#0000006e"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.284 15.5578H8.88699"
                stroke=" #3f3f3f4d"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.2425 10.6056H8.88651"
                stroke=" #3f3f3f4d"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nuxt-link>
        </div>
        <div class="mt-5 ms-5 d-flex justify-content-start" v-else>
          <button class="rounded-10 loaderBox px-5 py-3"></button>

          <button class="rounded-10 ms-3 px-3 loaderBox"></button>
          <button class="rounded-10 ms-3 px-3 loaderBox"></button>
        </div>
      </div>
    </div>
    <!-- ------------------------------------------------------------------------- -->
    <div class="">
      <div
        class="my-6 grid lg:grid-cols-5 grid-cols-3 gap-2 "
       
         v-if="loading==false"
      >
        <CardDesk cardTitle="پرداخت های امن" :cardData="data.numberSafePayment" />
        <CardDesk cardTitle="سفارش ها" :cardData="data.numberOrders" />
        <CardDesk v-if="$store.state.ServiceProvider == true" cardTitle="نمونه کار ها" :cardData="data.numberPicture" />
        <CardDesk v-if="$store.state.ServiceProvider == false" cardTitle="درخواست ها" :cardData="data.numberRequest" />
        <CardDesk cardTitle="پروژه های  انجام شده" :cardData="data.numberDoProject" />
        <CardDesk cardTitle="پروژه های  در حال انجام" :cardData="data.numberDoingProject" />
        <CardDesk v-if="$store.state.ServiceProvider == true" cardTitle="خدماتی که ارائه میدهید" :cardData="data.numberService" />
        
      </div>
      <div
        class="my-6 grid lg:grid-cols-5 grid-cols-3 gap-2"
        
         v-else
      >
        <div
          v-for="n in 5"
          :key="n + 'desk'"
          class="
            
           loaderBox
          py-5
            
            flex flex-col
            h-full
            items-center
            justify-center
            relative
            rounded-2xl
            w-full
           
          "
          style=""
        >
          <div class="py-3"></div>
        </div>
      </div>
    </div>
    <div v-if="data">
      <alert type="warning" link="/t/addworksample/" v-if="data.pictureCheck "><div class="fw-bold">هشدار</div><div class="text-muted">لطفا نمونه کار خود را بارگزاری کنید</div></alert>
      <alert type="warning" link="/t/addcv/"  v-if="data.timelineCheck"><div class="fw-bold">هشدار</div><div class="text-muted">لطفا رزومه ی خود را تکمیل نمایید</div></alert>
      <alert type="warning"  link="/t/addservices/" v-if="data.serviceCheck"><div class="fw-bold">هشدار</div><div class="text-muted">لطفا خدماتی که ارائه میدهید را مشخص نمایید</div></alert>
    </div>
  </div>
</template>
<script>
import alert from '~/components/Alert.vue';
export default {
  components: { alert },
  data() {
    return {
      data: null,
      loading: true,
      loadingWallet: true,
      cardData: null,
    };
  },
  methods: {
    
    async getData() {
        this.loading= true
      this.loadingWallet= true
      fetch(`https://treaget.com/api/DeskApi/`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          this.loading = false;
          this.loadingWallet = false;
        });
    },
  },mounted(){
    this.getData()
  }
};
</script>

<style>
.card-desk:hover {
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  color: white;

}
</style>