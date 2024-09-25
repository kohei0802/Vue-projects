<template>
  <h1>Jobs</h1>
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
</template>

<script>
import JobDetails from './JobDetails.vue';

export default {
    data() {
        return {
            jobs : [
                {title: 'Ninja UX', id: 1, details:'lorem'},
                {title: 'Ninja Web Dev', id: 2, details:'lorem'},
                {title: 'Ninja Designer', id: 3, details:'lorem'},
            ]
        }
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