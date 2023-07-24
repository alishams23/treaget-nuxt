<template>
  <div >
    <div
      class="tags d-flex flex-row-reverse justify-content-between align-items-center"
      style="width: 150px;"
    >
      <!-- <div class="px-3 py-1 bg-treaget-50 text-treaget rounded-pill">
        <a class="text-xs fw-bold">طراحی</a>
      </div> -->
      <div class="text-muted text-xs"><div>{{element.updated_at}} </div></div>
      <div class="drop  -color-lighter drop--down">
        <div
        class="h-8 w-8 shadow-2 bg-gradient-blue text-white rounded-13 d-flex align-items-center justify-content-center"
      >
        <i class="fad fa-pen" />
      </div>

        <div class="drop__content  -transition-slide-in">
          <div class="drop-list -size-medium  -position-right -border-rounded">
            <button class="drop-list__btn py-2" >
              <a 
                class="d-flex  mx-3 justify-content-between align-items-center" href="">

                <i class="fad fa-pen"></i>

                <div class="text-sm ">
                  ادیت
                </div>
              </a>
            </button>
            <button class="drop-list__btn py-2">
              <div 
                class="d-flex  mx-3 justify-content-between align-items-center text-red-500" href="">

                <i class="fad fa-trash"></i>

                <div class="text-sm ">
                  حذف
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
     
    </div>

    <div class="kanban-content my-3 text-right">
      <p>
        {{ element.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['element']
}
</script>
