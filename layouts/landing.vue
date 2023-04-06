<template>
  <div class="wrap d-flex align-items-center justify-content-center">
    <div
      id="login-page"
      class="content row align-items-center justify-content-center"
    >
      <div class="p-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 col-12 rtl">
        <div class="bg-white shadow-2 rounded-13">
          <div class="d-flex flex-row">
            <nuxt-link
              to="/t/signUp"
              class="col-6 py-3 border-b text-center"
              :class="$route.name == 't-signUp' ? 'tab-active' : ''"
            >
              ثبت نام
            </nuxt-link>
            <nuxt-link
              to="/t/login"
              class="col-6 py-3 border-b text-center"
              :class="$route.name == 't-login' ? 'tab-active' : ''"
            >
              ورود
            </nuxt-link>
          </div>
          <nuxt />
        </div>
      </div>
      <div
        class="p-4 col-lg-8 col-md-7 col-sm-12 col-xs-12 col-12 d-flex flex-column align-items-center justify-content-center"
      >
        <div
          class="py-4 px-lg-5 px-3 bg-white shadow-2 rounded-10 container rtl mb-2"
        >
          <div class="d-flex justify-content-between px-lg-2">
            <div class="text-sm">
              تریگت به فریلنسر ها در زمینه خدمات وب و برنامه نویسی کمک می کند تا
              در فضای امن و حرفه ای به کسب درآمد برسند و برای خود بازاری مستقل
              درست کنند.
            </div>
            <div
              class="h-10 p-3 shadow-2 w-10 mx-3 bg-white text-white rounded-13 d-flex align-items-center justify-content-center"
            >
              <div class="fs-3">
                ✌️
              </div>
            </div>
          </div>
        </div>
        <div class="py-5 px-lg-5 px-3 bg-white shadow-2 rounded-10 container rtl">
          <div class="px-lg-2">
            <div class="pb-4 fw-bold fs-5 text-treaget">
              مراحلی که شما را درتریگت به کسب درآمد میرساند
            </div>
            <div class="p-2 d-flex justify-content-between">
              <div>
                صفحه کاربری خودتان را ایجاد و اطلاعات خود را تکمیل کنید

                <div class="text-xs text-muted pt-2">
                  بعد از تکمیل ثبت نام وتایید شماره موبایل، از طریق تنظیمات
                  اطلاعات کاربری صفحه خودتان را تکمیل کنید
                </div>
              </div>

              <div>
                <div
                  class="h-10 w-10 mx-3 shadow-2 bg-treaget rounded-13 d-flex align-items-center justify-content-center"
                >
                  <i class="fad fa-pen" />
                </div>
              </div>
            </div>

            <div class="p-2 d-flex justify-content-between">
              <div>
                مشخص کردن خدمات و ثبت رزومه (نمونه کار)

                <div class="text-xs text-muted pt-2">
                  با مشخص کردن توانایی ها و نمونه کارهایتان به کارفرما کمک می
                  کنید تا شما را برای انجام پروژه هایش انتخاب کند.
                </div>
              </div>
              <div>
                <div
                  class="h-10 w-10 mx-3 shadow-2 bg-gradient-yellow text-white rounded-13 d-flex align-items-center justify-content-center"
                >
                  <i class="fad fa-list" />
                </div>
              </div>
            </div>
            <div class="p-2 d-flex justify-content-between">
              <div>
                انتخاب پروژه های آماده یا دریافت سفارش
                <div class="text-xs text-muted pt-2">
                  بعد از اینکه صفحه خودتان را به صورت حرفه ای آماده کردین می
                  توانید سفارش های کارفرما را دریافت و یا برای پروژه های از قبل
                  ثبت شده در سایت درخواست دهید.
                </div>
              </div>
              <div>
                <div
                  class="h-10 w-10 mx-3 shadow-2 bg-gradient-blue text-white rounded-13 d-flex align-items-center justify-content-center"
                >
                  <i class="fad fa-check" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'landing',
  // OR
  layout (context) {
    return 'landing'
  },
  head () {
    return {
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/css/tailwind.css'
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/css/style.css'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('onStart')
    // this.getInfo()
  },
  methods: {
    getInfo () {
      fetch(
        `https://treaget.com/api/UserRetrieveApi/${this.$store.state.username}/`,
        {
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Token ${this.$store.state.token}`
          }
        }
      )
        .then(response => response.json())
        .then((data) => {
          this.$store.commit('getUser', data)
        })
    }
  }
}
</script>

<style scoped>
.login {
  height: 100vh;
  background: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
}


.wrap {
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(147deg, #ff9100 0%, #ff2525 74%);
  min-height: 100%;
}

.wrap:before {
  content: ' ';
  display: block;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  opacity: 0.6;
  background-image: url(~@/assets/inside/images/login.png);
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}
.content {
  position: relative;
}
</style>
