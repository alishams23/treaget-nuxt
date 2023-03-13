<template>
  <div class="rtl p-3">
    <h1 v-if="error.statusCode === 404">صفحه ی مورد نظر یافت نشد</h1>
    <h1 v-else>{{error.message}}</h1>
    <NuxtLink tag="button" class="bg-treaget btn-material mt-5" to="/">بازگشت به صفحه ی اول</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>