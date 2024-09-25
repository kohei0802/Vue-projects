<template>
  <h1>Job Details Page</h1>
  <!-- To get any parameters on the route -->
  <!-- <p>The job id is {{ $route.params.id }}</p> -->
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
    props:[
        // getting route parameter as props is possible as long as it is configured in indexe.js  
        'id',
    ],
    data() {
        return {
            // id: this.$route.params.id
        }
    }
}
</script>

<style>

</style>