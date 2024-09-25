<template>
    <!-- Don't need 'action' attribute cuz we're using JavaScript to handle the submission -->
     <!-- Attach submit event like attaching event to other things -->
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <!-- Want to do two-way data binding. Not one-way (unidirectional input) . Use v-model -->
    <input type="email" required v-model="email">

    <label>Password:</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
        <option value="default">-- Select --</option>
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
    </select>

    <label>Skills: </label>
    <input type="text" v-model="temporarySkill" @keyup="addSkill">
    <div v-for="skill in skills" :key="skill" class="pill" @click="deleteSkill(skill)">
        {{ skill }}
    </div>

    <div class="terms">
        <input type="checkbox" v-model="terms" required>
        <label>Accept terms and conditions</label>
    </div>

    <!-- The only reason we're putting it in a div is so that we can apply some styles to it -->
     <div class="submit">
        <button>Create an Account</button>
     </div>

    <!-- They're all bound to names data -->
    <!-- <div>
        <input type="checkbox" value="shaun" v-model="names">
        <label>Shaun</label>
    </div>
    <div>
        <input type="checkbox" value="yoshi" v-model="names">
        <label>Yoshi</label>
    </div>
    <div>
        <input type="checkbox" value="mario" v-model="names">
        <label>Mario</label>
    </div> -->
  </form>
</template>

<script>
export default {
    data() {
        return {
            email : '', 
            password : '', 
            role : 'default',
            terms : false,
            // names : []
            temporarySkill : '', 
            skills : [], 
            passwordError : ''
        }
    }, 
    updated() {
        console.log(this.email)
        // console.log(this.names)
    }, 
    methods : {
        addSkill(e) {
            if (e.key === "Enter" && this.temporarySkill) {
                if (!this.skills.includes(this.temporarySkill)) {
                    this.skills.push(this.temporarySkill)
                    this.temporarySkill=''  
                }
            }
        }, 
        deleteSkill(skill) {
            this.skills = this.skills.filter((s) => s!==skill)
        }, 
        handleSubmit() {
            //validate password to see if it meets requirements
            this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long'
            console.log(this.email)
            console.log(this.password)
            console.log(this.select)
        }
    }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0 ;
    position: relative;
    top: 1px;
}
.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit {
    text-align: center;
}
.error {
    color:#ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>