<template>
  <div>
    <h2 class="sub-header">用户管理</h2>
    <form @submit.prevent='submit'>
      <div class="form-group">
        <label for="username">用户名</label>
        <input v-model='form.username' type="text" class="form-control" id="username" placeholder="username">
      </div>
      <div class="form-group">
        <label for="email">邮箱</label>
        <input v-model='form.email' type="text" class="form-control" id="email" placeholder="email">
      </div>
      <div class="form-group">
        <label for="phone">手机</label>
        <input v-model='form.phone' type="text" class="form-control" id="phone" placeholder="phone">
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>
<script>
  import axios from 'axios'
  import router from '../../router/index.js'
  export default {
    data () {
      return {
        form: {
          username: '',
          email: '',
          phone: ''
        }
      }
    },
    methods: {
      submit () {
        axios.post('/api/users', this.form)
          .then(res => {
            //  通过客户端
            router.push('/users')
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
<style></style>
