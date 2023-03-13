<template>
<!-- TODO:add loading for image -->
    <div>
       <masonry-wall :items="data" :ssr-columns="1" :column-width="160" :gap="16">
        <template #default="{ item }">
          <nuxt-link class :to="'/t/PicturePost/' + item.id">
            <img :src="item.image" class="rounded-md"  />
          </nuxt-link>
        </template>
      </masonry-wall>
    </div>
</template>

<script>
export default {
props:["data"]
}
</script>

<style>

</style>