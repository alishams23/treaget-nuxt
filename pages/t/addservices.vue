<template>
  <div class="px-3">
    <div class="container" id="addService">
      <form @submit.prevent="submitForm" class="bg-white rounded-md ">
        <div class=" rtl">
          <label class="rtl fs-4 text-treaget irsa">افزودن خدمات</label>

          <div id="specialName" hidden>
            <p class="fs-6 pb-2 text-muted"> نام خدمات</p>
            <input type="text" class="shadow-none px-2 bg-gray-100 border-bottom" v-model="specialName" />
          </div>
          <div class=" " id="nameProduct">
            <div class="justify-content-between rtl  fs-6 text-muted d-flex">
              <div class="pb-2">نام خدمات طبق دسته بندی</div>
             
            </div>
            <div id="list1" class="dropdown-check-list col-12" tabindex="100">
              <input type="text" name="alt" maxlength="200" @input="inputMethod" v-model="text"
                class="shadow-none rtl bg-gray-100 anchor border-bottom" @click="anchorClick" autocomplete="off"
                id="id_alt" />

              <ul class="items bg-gray-100  scrollBarStyleSmall" style="max-height: 220px; overflow-y: scroll">
                <li class="d-flex justify-content-end p-2 border-bottom " @click="choseOption(item)" :class="
                  nameProduct == item.pk ? 'bg-dark text-white ' : ''
                " v-for="item in category" :key="item.pk + 'category-addService'">
                  <div>{{ item.title }}</div>
                </li>
              </ul>
            </div>
          </div>
          <div >
            <a class="text-blue-400 text-xs" @click="changeDiv()">انتخاب نام خدمات خارج از دسته بندی</a>
          </div>
          <div class="">
            <p class="fs-6 pb-2 text-muted">قیمت به تومان</p>
            <input type="number" placeholder="price" v-model="priceProduct"
              class="shadow-none border-bottom bg-gray-100" />
          </div>
        </div>
        <div v-for="(data, index) in serviceOption" :key="data + 'serviceOption-addService'"
          class="d-flex flex-row  px-3 mx-3 py-3 border-bottom">
          <div class="col-8 fw-bold">{{ data.title }}</div>
          <div class="col-3 px-1 ">{{ data.price }}</div>
          <div class="col-1 pointer" v-on:click="deleteOption(index)">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-x-square-fill"
              viewBox="0 0 16 16">
              <path
                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
            </svg>
          </div>
        </div>
        <div class="d-flex justify-content-end m-3 p-2">
          <a class="bg-treaget rounded-full text-white px-3 py-2 mx-2 btn-material btn-animation btn-animation-shadow"
            @click="openModalOption()">افزودن ویژگی
          </a>
          <button
            class="px-3 py-2 rounded-full text-white bg-treaget btn-material btn-animation btn-animation-shadow  irsa">
            <div v-if="loading == false">ارسال</div>
            <div class="d-flex flex-column align-items-center" v-if="loading == true">
              <div class="loader-light"></div>
            </div>
          </button>
        </div>
      </form>
      <div class="treaget-modal treaget-modal-option rtl">
        <div class="treaget-modal-overlay" @click="closeModalOption()"></div>
        <div class="treaget-modal-card">
          <div class="treaget-modal-body">
            <form @submit.prevent="submitModel" class="modal-content p-3">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">قابلیت جدید</h5>

              </div>
              <div class="modal-body">
                <div>
                  <div class="mb-3">
                    <label for="message-text" class="rtl col-form-label ">قابلیت یا ویژگی خدمات شما:</label>
                    <textarea class="form-control border-none shadow-none border-bottom bg-gray-100" v-model="optionName"
                      id="message-text" required></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="rtl col-form-label">
                      هزینه ی قابلیت:(اختیاری)</label>
                    <input type="number" min="1" v-model="priceOption" @click="showAlert = !showAlert"
                      class="bg-gray-100 form-control border-none shadow-none border-bottom" id="recipient-name" />
                  </div>
                  <div class="alert alert-secondary rtl" v-if="priceOption != ''" role="alert">
                    در صورت اضافه کردن هزینه این قابلیت در خدمات شما به صورت
                    آپشن در می آید و کارفرما باید بابت آن هزینه بپردازد
                  </div>
                </div>
              </div>
              <div class="d-flex m-4">
                <button type="button" class="px-3 mx-1 py-2 btn-animation rounded-full border"
                  @click="closeModalOption()" ref="btnClose">
                  بستن
                </button>
                <button class="
                    px-3
                    mx-1
                    py-2
                    bg-treaget
                    shadow-md
                    rounded-full
                    text-white
                    btn-animation
                    btn-material
                  ">
                  اضافه کردن
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
      <div class="treaget-modal treaget-modal-product-check rtl">
        <div class="treaget-modal-overlay" @click="closeModal()"></div>
        <div class="treaget-modal-card">
          <div class="treaget-modal-body">
            <div class="treaget-modal-content fs-5">موفقیت آمیز بود</div>
            <div class="treaget-modal-footer">
              <div class="d-flex">
                <button class="bg-white py-2 border rounded-pill px-4" @click="closeModal()">
                  بستن
                </button>
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
  data() {
    return {
      serviceOption: [],
      showAlert: false,
      priceOption: "",
      optionName: "",
      nameProduct: "",
      priceProduct: "",
      specialName: "",
      category: [],
      text: "",
      categoriesInstance: [],
      loading: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    changeDiv() {
      let SpecialName = document.querySelector("#specialName");
      let attrSpecialName = SpecialName.getAttribute("hidden");
      let nameProduct = document.querySelector("#nameProduct");
      if (attrSpecialName != null) {
        SpecialName.removeAttribute("hidden");
        nameProduct.setAttribute("hidden", null);
        this.nameProduct = "";
      } else {
        nameProduct.removeAttribute("hidden");
        SpecialName.setAttribute("hidden", null);
        this.specialName = "";
      }
    },
    deleteOption(index) {
      this.serviceOption.splice(index, 1);
    },
    submitModel() {
      fetch("http://127.0.0.1:8000/api/AddOptionService/", {
        method: "post",
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
        body: JSON.stringify({
          title: this.optionName,
          price: parseInt(this.priceOption),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.serviceOption.push({
            title: data["title"],
            price: data.price,
            id: data["id"],
          });
        });
      this.closeModalOption()
      this.optionName = "";
      this.priceOption = "";
    },
    async submitForm() {
      let dataOption = [];
      this.serviceOption.forEach((element) => {
        dataOption.push(element["id"]);
      });
      this.loading = true
      await fetch("http://127.0.0.1:8000/api/AddService/", {
        method: "post",
        credentials: "same-origin",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
        body: JSON.stringify({
          serviceOption: dataOption,
          nameProduct: parseInt(this.nameProduct),
          price: parseInt(this.priceProduct),
          specialName: this.specialName,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.openModal()
        });
      this.loading = false

    },
    getData() {
      fetch(`http://127.0.0.1:8000/api/ProductApi/`, {
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
    inputMethod(value) {
      var checkList = document.getElementById("list1");
      if (this.text == "") checkList.classList.remove("visible");
      else checkList.classList.add("visible");
      this.searchCategory(value);
    },
    anchorClick() {
      var checkList = document.getElementById("list1");
      if (checkList.classList.contains("visible"))
        checkList.classList.remove("visible");
      else checkList.classList.add("visible");
    },
    choseOption(item) {
      if (this.nameProduct == item.pk) {
        this.nameProduct = "";
        this.text = "";
      } else {
        this.nameProduct = item.pk;
        this.text = item.title;
      }
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
    closeModalOption() {
      document.querySelector(".treaget-modal-option").classList.remove("open");
    },
    openModalOption() {
      document.querySelector(".treaget-modal-option").classList.add("open");
    },
  },
};
</script>

<style>
</style>