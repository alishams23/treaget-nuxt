<template>
<div >
    <div style='position:fixed;top: 0;width: 100%;z-index:99999 ' class="bg-white shadow-1 ">
        <div class=" container px-5 py-4 d-flex justify-content-between align-items-center px-3">
            <div class="d-flex align-items-center">
                <div>
                  <img src="@/static/icon.png" style="width: 45px">
                </div>
                <div>
                  <img src="@/assets/inside/images/treaget2.png" class="mx-3" style="width: 55px">
                </div>
              </div>
              <div >
                <ul class="d-flex align-items-center ">
                 
                  <li class="mx-2 text-xl fw-bold px-5 d-none d-lg-block py-3 rounded-pill hover-button-blue ">
                    <nuxt-link class="px-2" to="/">خانه</nuxt-link>
                  </li>
                  <li class="mx-2 text-xl fw-bold px-5 d-none d-lg-block py-3 rounded-pill hover-button-blue ">
                    <nuxt-link class="px-2" to="/t/terms">قوانین</nuxt-link>
                  </li>
                  <li class="mx-2 text-xl fw-bold px-5 d-none d-lg-block py-3 rounded-pill hover-button-blue ">
                    <nuxt-link class="px-2" to="/t/update">وبلاگ</nuxt-link>
                  </li>
                  <li class="mx-2 text-xl fw-bold px-5 d-none d-lg-block py-3 rounded-pill hover-button-blue ">
                    <nuxt-link class="px-2" to="/t/contactUs">ارتباط با ما</nuxt-link>
                  </li>
                  <li class=" bg-treaget mx-3 px-5 py-3 fw-bold fs-5 rounded-pill text-white">
                    <nuxt-link class="px-2" to="/t/home">ورود</nuxt-link>
                  </li>
                  <li class=" bg-gradient-blue px-5 py-3 fw-bold fs-5 rounded-pill text-white">
                    <nuxt-link class="px-2" to="/t/signUp">ثبت نام</nuxt-link>
                  </li>
                </ul>
             
              </div>
        </div>
    </div>
</div>
</template>

<script>
export default{

} 
</script>

<style scoped>

</style>