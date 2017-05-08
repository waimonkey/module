<template>
  <div>
    <p>ID:{{user.id}}</p>
    <p>计划名称:{{user.plan}}</p>
    <p>计划年份:{{user.planYear}}</p>
    <p>计划月份:{{user.planMonth}}</p>
    <p>计划类型:{{user.planType}}</p>
    <p>创建人:{{user.createdMan}}</p>
    <p>创建时间:{{user.createdTime}}</p>
    <p>计划状态:{{user.planStatus}}</p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: {
        id: '',
        paln: '',
        planYear: '',
        planMonth: '',
        planType: '',
        createdMan: '',
        createdTime: '',
        planStatus: ''
      }
    }
  },
  created () {
    const id = this.$route.params.id
    this.getUserById(id)
  },
  methods: {
    getUserById (id) {
      axios.get(`/api/users/${id}`)
        .then(res => {
          this.user = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style></style>
