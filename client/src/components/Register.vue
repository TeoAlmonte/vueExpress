<template>
  <div class="register">
    <input v-model="email" type="email" name="email" placeholder="email">
    <input v-model="password" type="password" name="password" placeholder="password">
    <button @click="register">register</button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService.js'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      console.log('pressed', this.email, this.password)
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
