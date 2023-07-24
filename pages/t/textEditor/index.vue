<template>
    <form class="px-3" @submit.prevent="sendData" enctype="multipart/form-data">
      <div class="mt-3 mb-5">
        <p class="text-right fw-bold my-3 fs-6">تیتر مقاله</p>
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
      <div class="my-4">
        <div class="text-right fw-bold">انتخاب عکس مقاله</div>
      </div>
      <div class="d-flex">
        <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  @change="changePhoto($event)"
                  class="form-control shadow-none border-none mt-3 rtl"
                  name="photo"
                />
      </div>
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

  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import axios from 'axios'
  
  
  export default {

    data() {
      return {
        loading: false,
        photo: '',
        title: '',
        error: '',
        body: '',
        imageId:null,
        fd:null,
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
    methods: {
      changePhoto(event) {
      this.photo = event.target.files[0];
    },
      async sendData() {
        if (
          this.body == null ||
          this.body == '' ||
          this.photo == null ||
          this.photo == ''
        ) {
          this.error = 'لطفا همه ی مقادیر را وارد کنید '
          return 0
        }
        this.loading = true
        this.fd = new FormData()
        this.fd.append('photo', this.photo)
        this.fd.append('title_for_photo', this.title)
        await axios
          .post(
            `https://treaget.com/api/blog/CreateImage/`,this.fd,
          
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
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data)
              console.log(error.response.status)
              console.log(error.response.headers)
            }
          })
          .then(response => {
            this.imageId = response.data.id
            axios
              .post(
                `https://treaget.com/api/blog/createBlog/`,
                {
                  title: this.title,
                  body: this.body,
                  imageBlog: this.imageId
                },
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
              .catch(function (error) {
                if (error.response) {
                  console.log(error.response.data)
                  console.log(error.response.status)
                  console.log(error.response.headers)
                }
              })
              .then(response => {
                this.$router.push(`/t/blog/${response.data.id}`)
              })
          })
  
        this.loading = false
      }
    }
  }
  </script>
  