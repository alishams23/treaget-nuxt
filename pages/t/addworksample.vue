<template>
  <div class="container">
    <form class="grid grid-cols-2 gap-3 lg:p-6 p-4" @submit.prevent="sendData">
      <div class="col-span-2">
        <label class="rtl fs-4 text-treaget irsa">افزودن نمونه کار</label>
        <p class="text-right mt-3 fs-6 text-muted">توضیحات محصول</p>
        <input
          type="text"
          name="alt"
          v-model="alt"
          maxlength="200"
          class="shadow-none rtl bg-gray-100 border-bottom"
          id="id_alt"
        />
      </div>
      <div class="col-span-2">
        <div class="justify-content-between rtl mt-3 fs-6 text-muted d-flex">
          <div>دسته بندی</div>
          <div
            class="px-4 text-danger"
            style="cursor: pointer"
            v-if="text != ''"
            @click="
              closeCategory();
              text = '';
            "
          >
            بستن
          </div>
        </div>

        <div id="list1" class="dropdown-check-list col-12" tabindex="100">
          <input
            type="text"
            name="alt"
            maxlength="200"
            @input="inputMethod"
            v-model="text"
            class="shadow-none rtl bg-gray-100 anchor border-bottom"
            @click="anchorClick"
            autocomplete="off"
            id="id_alt"
          />
          <!-- <span class="anchor w-100 shadow-none bg-gray-100 rounded-3 border-none  py-3 ">Select Fruits</span> -->
          <ul
            class="items w-100 bg-gray-100 scrollBarStyleSmall"
            style="max-height: 250px; overflow-y: scroll"
          >
            <li
              class="d-flex justify-content-end p-2 border-bottom"
              @click="
                chosen.includes(item.pk)
                  ? chosen.pop(item.pk)
                  : chosen.push(item.pk)
              "
              :class="
                chosen.includes(item.pk) == true
                  ? 'bg-gradient-blue text-white'
                  : ''
              "
              v-for="item in category"
              :key="item.pk + 'category-addWorkSample'"
            >
              <div>{{ item.title }}</div>
            </li>
          </ul>
        </div>
        <div class="d-flex flex-wrap">
          <button
            class="rounded-full btn-t-hover m-1 border text-sm mt-3 px-4 py-1"
            v-for="item in categoriesInstance"
            :key="item + 'categoriesInstance-addWorkSample'"
            v-show="chosen.includes(item.pk)"
          >
            {{ item.title }}
          </button>
        </div>
        <p class="text-right mt-5 fs-6 text-muted">انتخاب عکس محصول</p>

        <input
          type="file"
          required
          id="photo"
          accept="image/*"
          @change="changePhoto($event)"
          class="form-control shadow-none border-none mt-3 rtl"
          name="photo"
        />
        <!-- @change="sendPhoto($event)" -->
        <div class="rtl m-4">
          <button
            class="px-4 py-2 rounded-full py-2 text-white bg-treaget irsa"
          >
            <div v-if="loading == false">ارسال</div>
            <div
              class="d-flex flex-column align-items-center"
              v-if="loading == true"
            >
              <div class="loader-light"></div>
            </div>
          </button>
        </div>
      </div>
    </form>
    <div class="treaget-modal treaget-modal-product-check rtl">
      <div class="treaget-modal-overlay" @click="closeModal()"></div>
      <div class="treaget-modal-card">
        <div class="treaget-modal-body">
          <div class="treaget-modal-content fs-5">موفقیت آمیز بود</div>
          <div class="treaget-modal-footer">
            <div class="d-flex">
              <button
                class="bg-white py-2 border rounded-pill px-4"
                @click="closeModal()"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      text: "",
      alt: "",
      loading: false,
      category: [],
      chosen: [],
      categoriesInstance: [],
      image: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    inputMethod(value) {
      var checkList = document.getElementById("list1");

      if (this.text == "") checkList.classList.remove("visible");
      else checkList.classList.add("visible");
      this.searchCategory(value);
    },
    getData() {
      fetch(`https://treaget.com/api/profile_items/SkillsList/`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.category = data;
          this.categoriesInstance = data;
        });
    },
    searchCategory(value) {
      if (this.text == "") {
        this.category = this.categoriesInstance;
      } else {
        this.category = [];
        this.categoriesInstance.forEach((element) => {
          if (element.title.includes(this.text)) this.category.push(element);
        });
      }
    },
    async sendData() {
      this.loading = true;
      let fd = new FormData();
      fd.append("alt", this.alt);
      fd.append("category", this.chosen);
      fd.append("image", this.image);
      await axios
        .post(`https://treaget.com/api/AddPostPictureApi/`, fd, {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${this.$store.state.token}`,
          },
        })
        .then((response) => {
          this.openModal();
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
      this.loading = false;
    },
    changePhoto(event) {
      this.image = event.target.files[0];
    },
    closeModal() {
      document
        .querySelector(".treaget-modal-product-check")
        .classList.remove("open");
    },
    openModal() {
      document
        .querySelector(".treaget-modal-product-check")
        .classList.add("open");
    },
    closeCategory() {
      document.getElementById("list1").classList.remove("visible");
    },
    anchorClick() {
      var checkList = document.getElementById("list1");
      if (checkList.classList.contains("visible"))
        checkList.classList.remove("visible");
      else checkList.classList.add("visible");
    },
  },
};
</script>

<style>
</style>