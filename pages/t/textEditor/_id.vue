<template>
  <form class="px-3" @submit.prevent="sendData" enctype="multipart/form-data">
    <div class="mt-3 mb-5">
      <p class="text-right fw-bold my-3 fs-6">تغییر تیتر مقاله </p>
      <input
        v-model="title"
        required
        type="text"
        class="shadow-none rtl px-3 bg-white border"
      />
    </div>
    <vue-editor
      class="bg-white"
      v-model="body"
      :editorOptions="editorOptions"
    ></vue-editor>
  
    
    <p class="text-danger rtl pt-3">
      {{ error }}
    </p>
    <div class="d-flex rtl m-3 mt-5">
      <button
        type="submit"
        class="px-3 btn bg-treaget py-2 px-5 fw-bold rounded-pill"
      >
        افزودن
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  data() {
    return {
      loading: true,
      title: this.title,
      body: this.body,
      sendLoading:false,
      fd:null,
      loadingCategory: true,
      editorOptions: {
          theme: 'snow',
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['link', 'blockquote', 'code-block'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }],
              [{ indent: '-1' }, { indent: '+1' }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ direction: 'rtl' }]
              // ['image']
            ]
          }
        }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      this.loading=true
      await axios
        .get(
          `https://treaget.com/api/blog/blog_retrieve/${this.$route.params.id}/`,
          {
            headers: {
              'Content-type': 'application/json',
              Accept: 'application/json',
              Authorization:
                this.$store.state.token != ''
                  ? `Token ${this.$store.state.token}`
                  : ''
            }
          }
        )
        .then(response => {
          this.title = response.data.title
          this.body = response.data.body
        })
      this.loading = false
      
    },
    async sendData() {
            this.sendLoading = true;
            this.fd = new FormData();
            this.fd.append("title", this.title);
            this.fd.append("body", this.body);



            await axios
                .put(`https://treaget.com/api/blog/BlogUpdate/${this.$route.params.id}/`, this.fd, {
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json",
                        Authorization: this.$store.state.token != "" ?`Token ${this.$store.state.token}` :"",
                    },
                })
                .then((response) => {
                    this.sendLoading = false;
                    window.location.reload();
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                });
        },

  }
}
</script>
