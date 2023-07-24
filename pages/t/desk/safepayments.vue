<template>
  <div class="px-3">
    
    <div class="my-6 grid gap-2 uk-link-reset rtl">
      <div
        class="p-3 m-1 my-4 rounded-2xl shadow-1 border-t bg-white bg-white row"
        v-for="result in safePayment"
        :key="result.id + 'safePayment-safePayment'"
        v-show="loading == false"
      >
        <div class="d-flex">
          <div
            v-if="$store.state.username == result.receiver.username"
            class="w-10 h-10 m-1 rounded-2xl overflow-hidden"
          >
            <img
              v-if="result.sender.image"
              :src="result.sender.image"
              alt=""
              class="rounded-2xl"
            /><img
              v-else
              src="@/assets/inside/avatar.jpg"
              alt=""
              class="rounded-2xl"
            />
          </div>

          <div v-else class="w-10 h-10 m-1 rounded-2xl overflow-hidden">
            <img
              v-if="result.receiver.image"
              :src="result.receiver.image"
              alt=""
              class="rounded-2xl"
            />
            <img
              v-else
              src="@/assets/inside/avatar.jpg"
              alt=""
              class="rounded-2xl"
            />
          </div>

          <div class="p-1">
            <p class="irsa">
              <a v-if="$store.state.username == result.receiver.username">{{
                result.sender.username
              }}</a>

              <a v-else>{{ result.receiver.username }}</a>
            </p>
            <br />
            <p class="irsa ]">
              <span class="text-muted">توضیحات:</span> {{ result.description }}
            </p>
            <p class="irsa">
              <span class="text-muted">قیمت:</span> {{ result.price }}
            </p>
            <span class="text-xs irsa"> {{ result.createdAdd }} </span>
          </div>
        </div>
        <div class="d-flex flex-wrap mt-3">
          <br />
          <nuxt-link :to="`https://treaget.com/api/projectManager/kanban/${result.id}`" 
            class="
              bg-blue-600
              flex-fill
              text-center
              m-1
              p-2
              rounded-full
              irsa
            "
            ><span class="text-white">مدیریت پروژه</span></nuxt-link
          >
          <div
            v-if="
              (result.paymentBoolean == true &&
                $store.state.username == result.receiver.username) ||
              (result.senderBoolean == true &&
                $store.state.username == result.sender.username)
            "
          ></div>

          <a
            v-else
            class="
             
              bg-green-500
              flex-fill
              m-1
              p-2
              text-center
              rounded-full
              irsa
            "
            @click="accept(result.id)"
            ><span class="text-white">اعلام اتمام کار</span></a
          >

          <a
            v-if="
              result.sender.username != $store.state.username &&
              result.paymentBoolean != null &&
              result.senderBoolean != true &&
              result.paymentBoolean != true &&
              result.sender.username != $store.state.username
            "
            @click="refuse(result.id)"
            class="bg-red-400    flex-fill m-1 p-2 text-center rounded-full irsa"
            ><span class="text-white">لغو سفارش</span></a
          >

          <nuxt-link
            :to="
              $store.state.username == result.receiver.username
                ? `/${result.sender.username}`
                : `/${result.receiver.username}`
            "
            class="
            
             text-center
              bg-gray-200
              flex-fill
              m-1
              p-2
              rounded-full
              irsa
            "
            >دیدن پروفایل</nuxt-link
          >
          <nuxt-link
            :to="'/t/chat/'+ 
                  $store.state.username == result.receiver.username
                    ? result.sender.username
                    : result.receiver.username
              "
            class="
              bg-gray-200
              flex-fill
              
             text-center

              m-1
              p-2
              uk-text-center
              rounded-full
              irsa
            "
            >چت</nuxt-link
          >
          <nuxt-link
            :to="`/t/desk/addDispute/${result.id}`"
            class="
              bg-gray-200
               
              flex-fill
              m-1
              p-2
             text-center
              rounded-full
              irsa
            "
            >اعلام اختلاف</nuxt-link
          >
        </div>

        <div
          class="irsa mt-3 p-3 rounded-full bg-gray-100"
          v-if="
            result.sender.username == $store.state.username &&
            result.paymentBoolean == true &&
            result.senderBoolean == false
          "
        >
          <span class="text-lg">خدمات دهنده اتمام کار را فعال کرده</span> <br />
          در صورتی که خدمات دهنده کار را به اتمام رسانده شما نیز باید اتمام کار
          را فعال کنید تا روند تکمیل شود ، در غیر این صورت باید در قسمت اعلام
          اختلاف مشکل مربوطه را مطرح کنید
        </div>

        <div
          class="irsa mt-3 p-3 rounded-full bg-gray-100"
          v-if="
            result.sender.username == $store.state.username &&
            result.paymentBoolean == null
          "
        >
          <span class="text-lg"
            >خدمات دهنده لغو سفارش را انتخاب کرده است است</span
          >
          <br />
          هزینه ای که از کیف پول شما کسر شده است به کف پول شما بازگشته است و
          میتوانید خرید دیگری انجام دهید
        </div>

        <div
          class="irsa mt-3 p-3 rounded-full bg-gray-100"
          v-if="
            result.sender.username != $store.state.username &&
            result.senderBoolean == true &&
            result.paymentBoolean == false
          "
        >
          <span class="text-lg">کارفرما اتمام کار را فعال کرده است است</span>
          <br />
          شما نیز باید اتمام کار را بزنید تا روند تکمیل شود
        </div>
      </div>
      <div v-if="safePayment.length == 0 && loading == false">
        <empty />
      </div>
      <div class="d-flex flex-column align-items-center" v-if="loading == true">
        <span class="loader"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Desk from "~/components/Desk.vue";
import Empty from "~/components/Empty.vue";
export default {
  transition: "null",
  components: { Desk, Empty },
  data() {
    return {
      safePayment: [],
      loading: true,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.loading = true;
      await fetch(`https://treaget.com/api/SafePaymentApi/`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      })
        .then((Response) => Response.json())
        .then((data) => {
          this.safePayment = data;
          this.loading = false;
        });
    },
    async accept(id) {
      this.loading = true;
      await fetch(`https://treaget.com/api/AcceptSafePaymentApi/${id}`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      }).then((Response) => {
        this.getData();
      });
    },
    async refuse(id) {
      this.loading = true;
      await fetch(`https://treaget.com/api/RefuseSafePaymentApi/?pk=${id}`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      }).then((Response) => {
        this.getData();
      });
    },
  },
};
</script>

<style>
</style>