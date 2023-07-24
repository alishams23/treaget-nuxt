<template>
  <div>
    <!-- edith1 open -->

    <!-- price box -->
    <div  id="service">
      <div class="d-flex justify-content-center" v-if="loading == true">
        <span class="loader"></span>
      </div>

      <div v-if="loading == false">
        <masonry-wall :items="service" :ssr-columns="1" :column-width="160" :gap="16">
          <template #default="{ item, index }">
            <div class="rounded-lg shadow-lg  border-t bg-white w-full text-center">
              
              <h4 class="irsa py-3 text-md" >{{ item.specialName }}</h4>
              <div class="my-2 pb-2" v-if="item.price">
                <p class="irsa text-sm text-black">{{ item.price }}</p>
                <span class="coins irsa text-sm">تومان</span>
              </div>
              <div class="p-2 pb-3" v-for="(facilities, indexOption) in item.serviceOption"
                :key="facilities + 'facilities-profileService'">
                <div class="
                  d-flex
                  flex-row
                  border-bottom
                  justify-content-between
                  p-2
                  mx-4
                ">
                  <div class="col-2">
                    <div>
                      <svg v-if="facilities.price == 0 || facilities.price == null" xmlns="http://www.w3.org/2000/svg"
                        width="17" height="17" fill="#FF3600" class="bi bi-check2-circle" viewBox="0 0 16 16">
                        <path
                          d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                        <path
                          d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                      </svg>
                      <svg v-if="
                        facilities.price != 0 &&
                        facilities.isChoice != true &&
                        facilities.price != null
                      " xmlns="http://www.w3.org/2000/svg" v-on:click="plusKey(index, indexOption)" width="16"
                        height="16" fill="green" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                      <svg v-if="facilities.isChoice" xmlns="http://www.w3.org/2000/svg"
                        v-on:click="minesKey(index, indexOption)" width="15" height="15" fill="red"
                        class="bi bi-dash-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                      </svg>
                    </div>
                  </div>
                  <div class="col-10 text-right">
                    <div>{{ facilities.title }}</div>
                    <div v-if="facilities.price != 0">{{ facilities.price }}</div>
                  </div>
                </div>
              </div>
              <div>
                <button v-on:click="
                  order(index);
                  modal = true;
                " class="text-white bg-dark rounded-lg px-3 py-1 irsa" v-if="
                  $store.state.username != item.author.username &&
                  $store.state.ServiceProvider != true
                ">
                  سفارش دادن
                </button>
                <button @click="deleteService(item.id)"
                  class="text-white bg-dark rounded-lg px-3  py-1 irsa"
                  v-if="$store.state.username == item.author.username">
                   <button  class="rounded-full m-2 bg-gray-100 h-8 w-8"
                 >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="black" class="bi bi-trash"
                    viewBox="0 0 16 16">
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 a1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg>
                </button>
                </button>
               
              </div>
            </div>

          </template>
        </masonry-wall>
      </div>



      <div v-if="loading == false && service.length == 0">
        <empty />
      </div>


      <div class="treaget-modal rtl" :class="modal ? 'open' : ''">
        <div class="treaget-modal-overlay" @click="modal = false"></div>
        <div class="treaget-modal-card">
          <div class="treaget-modal-body">
            <div class="treaget-modal-content fs-5">
              <form @submit.prevent="sendOrder">

                <h5>
                  توضیحات سفارش
                </h5>


                <div>
                  <div>
                    <div class="mb-3">
                      <label for="message-text" class="rtl col-form-label">توضیحات شما:</label>
                      <textarea v-model="descriptionOrder" class="form-control border-none bg-gray-50" id="message-text"
                        required></textarea>
                    </div>
                  </div>
                </div>
                <div class="d-flex">
                  <button type="submit" class="
                      px-3
                      mx-1
                      py-2
                      bg-treaget
                      shadow-md
                      rounded-full
                      text-white
                    ">
                    اضافه کردن
                  </button>
                  <a class="bg-white py-2 border rounded-pill px-4" @click="modal = false">
                    بستن
                  </a>
                </div>
              </form>
            </div>
            <div class="treaget-modal-footer">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import empty from "./Empty.vue";
export default {
  components: { empty },
  props: ["username"],
  data() {
    return {
      service: [],
      loading: true,
      orderData: "",
      descriptionOrder: "",
      modal: false,
    };
  },
  methods: {
    ServiceApi() {
      fetch(`https://treaget.com/api/profile_items/ServiceListApi/${this.username}/`)
        .then((response) => response.json())
        .then((data) => {
          this.service = data;
          this.loading = false;
        });
    },
    order(index) {
      this.orderData = this.service[index];
    },
    plusKey(index, indexOption) {
      if (this.service[index]["price"] == null)
        this.service[index]["price"] = 0;
      this.service[index]["price"] +=
        this.service[index]["serviceOption"][indexOption]["price"];
      this.service[index]["serviceOption"][indexOption]["isChoice"] = true;
    },
    minesKey(index, indexOption) {
      this.service[index]["price"] -=
        this.service[index]["serviceOption"][indexOption]["price"];
      this.service[index]["serviceOption"][indexOption]["isChoice"] = false;
    },
    async deleteService(id) {
      await fetch(`https://treaget.com/api/profile_items/DestroyServiceApi/${id}/`, {
        method: "delete",
        credentials: "same-origin",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      });
      window.location.reload();
    },
    sendOrder() {
      let listOptionService = [];
      this.orderData["serviceOption"].forEach((element) => {
        if (element["isChoice"]) listOptionService.push(element["id"]);
        if (element["price"] == 0 || element["price"] == null)
          listOptionService.push(element["id"]);
      });
      fetch(
        `https://treaget.com/api/AddOrderApi/${this.orderData["author"]["username"]}` +
          "/",
        {
          method: "post",
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": window.CSRF_TOKEN,
          },
          body: JSON.stringify({
            price: this.orderData["price"],
            title: this.orderData["title"],
            body: this.descriptionOrder,
            service: this.orderData["id"],
            optionsServiceMain: listOptionService,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          window.location.href = `/account/orders/`;
        });
    },
  },
  mounted() {
    this.ServiceApi();
  },
};
</script>

<style>
</style>