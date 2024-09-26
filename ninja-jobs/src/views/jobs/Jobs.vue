<template>
  <h1>Jobs</h1>
  <!-- There's no error even if I remove the v-if  -->
  <div v-if="jobs">
    <div v-for="job in jobs" :key="job.id" class="job">
      <!-- Use params to pass parameters in the route -->
      <router-link :to="{
          name : 'jobDetails', 
          // Could be passed as props 
          params : {
            id : job.id
          }}"> 
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
  
</template>

<script>
import JobDetails from './JobDetails.vue';

export default {
    data() {
        return {
          // Populate this jobs array with data 
            jobs : null 
        }
    }, 
    mounted() {
      // Asyncrhonous and returns a promise 
      fetch('http://localhost:3000/jobs')
      // Only way to get back the json 
      .then(res => res.json())
      // Parsed data is here 
      .then(data => this.jobs = data)
      .catch(err => console.log(err.message))
    }
}
</script>

<style>
  .job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }

  .job h2:hover {
    background: #ddd;
  }

  .job a {
    text-decoration: none;
  }
</style>