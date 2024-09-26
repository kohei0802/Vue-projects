<template>
  <div class="home">
    home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue';


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

    const handleClick = () => {
      // console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = 'hello ninjas'
      name.value = 'Luigi'
      age.value = 27
    }

    //if these are changed, it won't change the data in the template (non-reactive value)

    //return anything we want to use in the template 
    // return {
    //   name: name, 
    //   age: age,
    // }
    return {
      name, 
      age,
      handleClick,
      p
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
