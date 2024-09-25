<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    click me
  </div>
</template>

<script>
export default {
    props : [
        'delay'
    ], 
    data() {
        return {
            showBlock: false,
            timer : null, 
            reactionTime : 0
        }
    },
    // when mounted on HTML 
    mounted() {
        console.log('component mounted')
        setTimeout(() => {
            this.showBlock = true
            // console.log(this.delay)
            this.startTimer()
        }, this.delay)
    }, 
    methods: {
        startTimer() {
            // {} function is gonna be run every 10m seconds
            this.timer=setInterval(() => {
                this.reactionTime += 10;
            }, 10)
        },
        stopTimer() {
            // the function above is no longer get fired anymore after clear 
            clearInterval(this.timer)
            console.log(this.reactionTime)
            this.$emit('end', this.reactionTime)
        }   
    }
    // // when data gets updated 
    // updated() {
    //     console.log('component updated')
    // }, 
    // // when gets taken out of HTML 
    // unmounted() {
    //     console.log('unmounted')
    // }
}
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>