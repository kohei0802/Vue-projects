<template>

  <div v-if="job">
    <h2>{{job.title}}</h2>
      <!-- To get any parameters on the route -->
      <!-- <p>The job id is {{ $route.params.id }}</p> -->
    <p>The job id is {{ id }}</p>
    <p>{{job.details}}</p>
  </div>
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
            job : null,
        }
    }, 
    mounted(){
        fetch('http://localhost:3000/jobs/' + this.id)
        // Be careful that res.json() but not res.json 
        .then((res) => res.json())
        .then((data) => this.job = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>