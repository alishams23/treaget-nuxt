<template>
    <div>
        <div class="tags d-flex flex-row-reverse justify-content-between align-items-center">
            <div class=" px-3 py-1 bg-treaget-50 text-treaget rounded-pill"><p class="text-xs fw-bold ">طراحی</p></div>
            <div class=" rounded-pill px-2 py-1">
              <i class="fa-edit fad text-xs"></i>
           </div>
          </div>
          <div class="kanban-content my-3 text-right">
            <p>
            {{element}}
            </p>
          </div>
          <div class="userKanbanImg row">
            <img class="col-2 rounded-pill px-1" src="~/assets/inside/avatar.jpg" alt="">
          </div>
    </div>
</template>

<script>
export default{
    props:["element"]
}
</script>