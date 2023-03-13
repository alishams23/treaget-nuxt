<template>
 
</template>

<script>
export default {
    name:'Logout',
    mounted(){
    
            this.$store.commit("logout")
        
    }
}
</script>

<style>

</style>