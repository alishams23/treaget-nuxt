<template>
    <div
          class="
            card-desk
            border-t
            shadow-1
            border-top1
            
            flex flex-col
            h-full
            items-center
            justify-center
            relative
            rounded-2xl
            w-full
           
          "
          style=""
        >
          <span class="irsa m-3 text-center"> {{cardTitle}} </span>
          <div class="d-flex">
            <p class="irsa text-xl py-3">{{cardData}}</p>
          </div>
        </div>
</template>

<script>
export default {
    name: 'CardDesk',
    props: ['cardTitle', 'cardData']
}
</script>