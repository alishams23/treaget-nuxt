<template>
 <div class="d-flex justify-content-center flex-row">
  <div class="col-lg-8 col-md-12 col-12">
    <post-picture :data="data" :reload="getData" v-if="data.length != 0" />
    <div class="d-flex flex-column align-items-center" v-if="loading">
      <span class="loader"></span>
    </div>

    <div v-if="loading == false && data.length == 0"><empty /></div>
  </div>
  </div>
</template>

<script>
import PostPicture from "~/components/PostPicture.vue";
export default {
  components: { PostPicture },
  data() {
    return {
      data: [],
      loading: true,
    };
  },
  methods: {
    async getData(page) {
      this.loading = true;
      await fetch(
        `https://treaget.com/api/PicturePostDestroyRetrive/${this.$route.params.id}/`,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${this.$store.state.token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
</style>