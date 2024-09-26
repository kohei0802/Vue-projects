<template>
  <div class="home">
    home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name">

    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button>
    <!-- <p>Company name: {{ company }}</p> -->

    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="company in matchingCompanies" :key="company">
      {{ company }}
    </div>
  </div>
</template>

<script>
// Both ref and reactive can be used to make reactive values 
import { ref, reactive, computed, watch, watchEffect } from 'vue';


export default {
  name: 'HomeView',
  setup() {
    // this.$refs. cannot be used in setup()
    // There's no "this" to start with
    console.log('setup')

    //In composition API, we import the parts we need to use from Vue.
    //You can pass something in as the parameter of ref() to set the value inside the reference object 
    const p = ref(null)

    // let name='mario'
    // ref is a constant, but the value inside it can be changed
    // but .operator is not needed outside
    let name=ref('mario')
    let age=ref(30)

    // WARNING: can't work on primitive values like string
    let ninjaTwo = reactive({name: 'luigi', age: 2})

    // Reactive does not require .value 
    const updateNinjaTwo = () => {
      ninjaTwo.age = 29
    }

    const handleClick = () => {
      // console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = 'hello ninjas'
      name.value = 'Luigi'
      age.value = 27
    }


    //Computed values 
    // const company = computed(() => 'Deloitte')

    const companies = ref(['Deloitte', 'HKT', 'Manulife', 'Morgan Stanley'])
    const search = ref('')
    const matchingCompanies = computed(() => companies.value.filter((c) => c.includes(search.value)))

    // Variable specific update() hook 
    watch(search, () => {
      console.log('watch function ran')
    })
    
    watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })

    //return anything we want to use in the template 
    // return {
    //   name: name, 
    //   age: age,
    // }
    return {
      name, 
      age,
      handleClick,
      p, 
      ninjaTwo, 
      updateNinjaTwo, 
      companies, 
      search, 
      matchingCompanies
    }
  }, 
  created() {
    console.log('created')
  }, 
  mounted() {
    console.log('mounted')
  }
}
</script>
