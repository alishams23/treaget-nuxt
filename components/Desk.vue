<template>
  <div>
    <ul class="  flex-nowrap    scrollBarStyleSmallHidden   d-flex" style="overflow-x:scroll;overflow-y:hidden;" id="dashboardHeader">
      <li  v-bind:class="currentRouteCheck('main')   ? 't-active' : 'border-bottom'">
        <nuxt-link to="/t/desk/main" class="nav-items-t"><div class="nav-item-t"><div class="ms-3 me-3 nowrap" >میز کار</div></div></nuxt-link>
      </li>
      <li v-bind:class="currentRouteCheck('notification')  ? 't-active' : 'border-bottom'">
        <nuxt-link to="/t/desk/notification" class="nav-items-t"><div class="nav-item-t"><div class="ms-3 me-3 nowrap">نوتیفیکیشن</div></div></nuxt-link>
      </li>
      <li v-bind:class="currentRouteCheck('orders')   ? 't-active' : 'border-bottom'">
        <nuxt-link to="/t/desk/orders" class="nav-items-t"><div class=" nav-item-t"><div class="ms-3 me-3 nowrap">سفارشات شما</div></div></nuxt-link>
      </li>
      <li v-bind:class="currentRouteCheck('safepayments')   ? 't-active' : 'border-bottom'">
        <nuxt-link to="/t/desk/safepayments" class="nav-items-t"><div class="nav-item-t">
            <div class="ms-3 me-3 nowrap">پرداخت های امن</div></div></nuxt-link>
      </li>
      <li v-bind:class="currentRouteCheck('differences')   ? 't-active' : 'border-bottom'">
        <nuxt-link to="/t/desk/differences" class="nav-items-t"><div class="nav-item-t"><div class="ms-3 me-3 nowrap">اختلافات</div></div></nuxt-link>
      </li>
      <li v-bind:class="currentRouteCheck('wallet')  ? 't-active ' : 'border-bottom'">
        <nuxt-link to="/t/desk/wallet" class="nav-items-t"><div class="nav-item-t"><div class="ms-3 me-3 nowrap">تراکنش ها</div></div></nuxt-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    currentRouteCheck(data) {
      return this.$route.name.split("-").includes(data);
    }
  },
};
</script>

<style>

</style>