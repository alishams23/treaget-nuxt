<template>
  <div class="d-flex" >
    <div class="mx-3" v-for="column in data.lists" v-key="column.id + 'kanbanColumn'">
      <div class="d-flex" >
        <h3 class="px-3 fw-bold">
          {{ column.title }}
        </h3>
      </div>
      <draggable
        class="list-group rounded-13 border-t my-2 bg-gray-50 shadow-2 p-3"
        style="min-width: 190px;"
        group="people" :id="column.id"
        @end="onDragEnd"
      >
        <button
          v-for="(element, index) in column.items"
          :key="element + 'cvc' + index"
          :id="element.id "
          class="list-group-item d-flex justify-content-center flex-column bg-white shadow-1  rounded-10 my-3 px-3 py-2 pointer"
        >
          <Kanban :element="element" />
        </button>
      </draggable>
      <button
        class="d-flex bg-white px-2 shadow-2 justify-content-center justify-content-between align-items-center rtl rounded-13"
        @click="modal = true"
      >
        <div class="p-2">
          کار جدید
        </div>
        <button class=" ">
          <div
            class="h-8 w-8 m-2 shadow-2 bg-treaget rounded-13 d-flex align-items-center justify-content-center"
          >
            <i class="fad fa-plus" />
          </div>
        </button>
      </button>
    </div>

<!-- <div v-for="column in data.lists" v-key="column.id + 'kanbanRawDisplay'">
  <rawDisplayer name="row-1" class="col-3" :value="column.items" :title="column.title" />

</div> -->



    <div class="treaget-modal rtl" :class="modal ? 'open' : ''">
      <div class="treaget-modal-overlay" @click="modal = false" />
      <div class="treaget-modal-card">
        <div class="treaget-modal-body">
          <div class="treaget-modal-content fs-5">
            <ul>
              <li class="">
                <input type="checkbox" >

                <h2 class="irsa" >عنوان</h2>
                <div class="accordion-content">
                  <input type="text" class="shadow-none border" />
                </div>
              </li>
              <li class="border-t mt-3">
                <input type="checkbox" checked>
                <h2 class="irsa">توضیحات</h2>
                <div class="accordion-content">
                  <textarea rows="5" class="shadow-none border" />
                </div>
              </li>
              <li class="border-t mt-3">
                <input type="checkbox" checked>
                <h2>دسته بندی ها</h2>
                <div class="accordion-content">
                  <Update />
                </div>
              </li>
       
            </ul>
          </div>
          <div class="treaget-modal-footer">
            <div class="d-flex">
              <button
                class="bg-white py-2 border rounded-pill px-4"
                @click="modal = false"
              >
                بستن
              </button>

              <button
              class="bg-treaget mx-2 py-2  rounded-pill px-4"
              @click="modal = false"
            >
              اعمال
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable-axis'
import Kanban from '~/components/Kanban.vue'
export default{
  name: 'TwoLists',
  display: 'Two Lists',
  order: 1,
  components: {
    draggable,
    Kanban
  },
  data () {
    return {
      addName: '',
      modal: false,
      data:[],
      loading:false,
      title:'',
      body:'',
      
    }
  },
  methods: {
    getData(){
      fetch(
        `https://treaget.com/api/kanban/kanban/${this.$route.params.id}/`,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`

          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          this.loading = false;
        })
    },
    add () {
      this.addName.data.push({ name: data.text })
      data.text = ''
    },
    replace () {
      this.list = [{ name: 'Edgard' }]
    },
    clone (el) {
      return {
        name: el.name + ' cloned'
      }
    },async onDragEnd(event) {
      console.log('Dragged element:', event.item.id ,'fvfv',event.from.id , event.to.id);
      for (let index = 0; index < data.lists.length; index++) {
         element = array[index];   
      }
      await axios
        .post(
          `https://treaget.com/api/kanban/Order/`,
          {
            finalListId: event.to.id,
            firstListId: event.from.id,
            id: event.item.id,
            finalListOrder: [],
          },
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`,
            },
          }
        )
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
    }
  },mounted(){
    this.getData()
  }
}
</script>

<style scoped>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
}

.transition,
ul li i:before,
ul li i:after,
.accordion-content {
  transition: all 0.25s ease-in-out;
}

.flipIn,
ul li,
h1 {
  animation: flipdown 0.5s ease both;
}

.accordion-content {
  line-height: 26px;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  max-height: 800px;
  opacity: 1;
  transform: translate(0, 0);
  margin-top: 14px;
  z-index: 2;
}

ul {
  list-style: none;
  perspective: 900;
  padding: 0;
  margin: 0;
}
ul li {
  position: relative;
  padding: 0;
  margin: 0;
  padding-bottom: 4px;
  padding-top: 18px;
}
ul li:nth-of-type(1) {
  animation-delay: 0.5s;
}
ul li:nth-of-type(2) {
  animation-delay: 0.75s;
}
ul li:nth-of-type(3) {
  animation-delay: 1s;
}
ul li:last-of-type {
  padding-bottom: 0;
}

ul li input[type='checkbox'] {
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
}
ul li input[type='checkbox']:checked ~ .accordion-content {
  margin-top: 0;
  max-height: 0;
  opacity: 0;
  transform: translate(0, 50%);
}
ul li input[type='checkbox']:checked ~ i:before {
  transform: translate(2px, 0) rotate(45deg);
}
ul li input[type='checkbox']:checked ~ i:after {
  transform: translate(-2px, 0) rotate(-45deg);
}

@keyframes flipdown {
  0% {
    opacity: 0;
    transform-origin: top center;
    transform: rotateX(-90deg);
  }
  5% {
    opacity: 1;
  }
  80% {
    transform: rotateX(8deg);
  }
  83% {
    transform: rotateX(6deg);
  }
  92% {
    transform: rotateX(-3deg);
  }
  100% {
    transform-origin: top center;
    transform: rotateX(0deg);
  }
}
</style>
