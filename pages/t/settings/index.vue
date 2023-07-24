<template>
  <div>
    <nuxt-link
      to="/t/settings/account"
      class="d-flex rtl align-items-center justify-content-between  px-4  shadow-1 rounded-13 mb-3 py-4"
    >
      <div>
        <p class="fw-bold fs-5">
          اکانت
        </p>
        <p class="text-sm text-muted">
          تنظیمات مربوط به اطلاعات کاربر
        </p>
      </div>
      <div
        class="h-10 w-10 mx-3 shadow-2 bg-treaget text-white rounded-13 d-flex align-items-center justify-content-center"
      >
        <i class="fad fa-user" />
      </div>
    </nuxt-link>

    <nuxt-link
    to="/t/settings/skills"
    class="d-flex rtl align-items-center justify-content-between  px-4  shadow-1 rounded-13 mb-3 py-4"
  >
    <div>
      <p class="fw-bold fs-5">
        فیلد کاری
      </p>
      <p class="text-sm text-muted">
        تنظیمات مربوط به نوع توانایی کاربر
      </p>
    </div>
    <div
      class="h-10 w-10 mx-3 shadow-2 bg-treaget text-white rounded-13 d-flex align-items-center justify-content-center"
    >
      <i class="fad fa-list" />
    </div>
  </nuxt-link>
  <div @click="logout"
  class="d-flex rtl align-items-center justify-content-between  px-4  shadow-1 rounded-13 mb-3 py-4"
>
  <div>
    <p class="fw-bold fs-5">
      خروج
    </p>
    <p class="text-sm text-muted">
      خروج از حساب کاربری
    </p>
  </div>
  <div
    class="h-10 w-10 mx-3 shadow-2 bg-treaget text-white rounded-13 d-flex align-items-center justify-content-center"
  >
    <i class="fad fa-sign-out" />
  </div>
</div>
  </div>
</template>

<script>
export default {
    methods:{
        logout(){
      this.$store.commit("logout")
      this.$router.push("/t/login")
    },
    }
}
</script>

<style></style>
