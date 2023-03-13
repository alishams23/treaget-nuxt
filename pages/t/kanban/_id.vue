<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable class="list-group" :list="list1.data" group="people">
        <button
          class="list-group-item d-flex justify-content-center flex-column bg-white shadow-1 rounded-10 my-3 px-3 py-2 pointer"
          v-for="(element, index) in list1.data"
          :key="element.name + 'cc' + index"
        >
          <Kanban :element=element.name />
        </button>
      </draggable>
      <button @click="modal=true" class="d-flex h-10 col-12  shadow-md  justify-content-center justify-content-between align-items-center rtl bg-treaget rounded-10 text-white " >
        <div class="p-2 ">
         کار جدید
        </div>
       <button  class="shadow-lg px-1 rounded-3  m-2 bg-white">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-plus-lg"  viewBox="0 0 16 16">
       <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
         </svg>
       </button>
   </button>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable class="list-group" :list="list2.data" group="people">
        <button
          class="list-group-item d-flex justify-content-center flex-column bg-white shadow-1 rounded-10 my-3 px-3 py-2 pointer"
          v-for="(element, index) in list2.data"
          :key="element.name + 'cc' + index"
        >
          <Kanban :element=element.name />
        </button>
      </draggable>
      <button class="d-flex h-10 col-12  shadow-md  justify-content-center justify-content-between align-items-center rtl bg-treaget rounded-10 text-white " >
         <div class="p-2 ">
          کار جدید
         </div>
        <button  class="shadow-lg px-1 rounded-3  m-2 bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-plus-lg"  viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
          </svg>
        </button>
    </button>
    </div>

    <rawDisplayer name="row-1" class="col-3" :value="list1" title="List 1" />

    <rawDisplayer name="row-2" class="col-3" :value="list2" title="List 2" />


    <div class="treaget-modal rtl" :class="modal ? 'open' : ''">
      <div class="treaget-modal-overlay" @click="modal = false"></div>
      <div class="treaget-modal-card">
        <div class="treaget-modal-body">
          <div class="treaget-modal-content fs-5">
            <ul>
              <li>
                <input type="checkbox" >
              
                <h2>توضیحات</h2>
                <div class="accordion-content"><textarea rows="5"></textarea></div>
              </li>
              <li>
                <input type="checkbox" checked>
               
                <h2>دسته بندی ها</h2>
                <div class="accordion-content"><input type="text"><span></span></div>
              </li>
              <li>
                <input type="checkbox" checked>
            
                <h2>Points of Interest</h2>
                <p class="accordion-content">By making the open state default for when :checked isn't detected, we can make this system accessable for browsers that don't recognize :checked. The fallback is simply an open accordion. The accordion can be manipulated with Javascript (if needed) by changing the "checked" property of the input element.</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable-axis";
import Kanban from "~/components/Kanban.vue";
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
    Kanban,
},
  data() {
    return {
      addName: '',
      modal:false,
      list1: {data:[
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }],
        text: "",
      }
        
      ,
      list2: {data:
       [ { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }],
        text:""
    }
    };
  },
  methods: {
    add(){
      this.addName.data.push({name: data.text})
      data.text = ''
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    // log: function(evt) {
    //   window.console.log(evt);
    // }
  }
};
</script>

<style scoped>
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
}


.transition, ul li i:before, ul li i:after, .accordion-content {
  transition: all 0.25s ease-in-out;
}

.flipIn, ul li, h1 {
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
  border-top: 1px dotted #dce7eb;
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

ul li input[type=checkbox] {
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
}
ul li input[type=checkbox]:checked ~ .accordion-content {
  margin-top: 0;
  max-height: 0;
  opacity: 0;
  transform: translate(0, 50%);
}
ul li input[type=checkbox]:checked ~ i:before {
  transform: translate(2px, 0) rotate(45deg);
}
ul li input[type=checkbox]:checked ~ i:after {
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