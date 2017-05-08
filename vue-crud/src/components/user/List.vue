<template class="outer">
  <div class="choose outer">
    <!-- <h2 class="sub-header">用户管理</h2> -->
    <div class="head outer">
      <div class="now tas">任务派发
        <span>X</span></div>
    </div>
    <div class='middle outer'>
      <ul class="outer">
        <li>计划年份:</li>
        <li>全部</li>
        <li>2010</li>
        <li>2011</li>
        <li>2012</li>
        <li>2013</li>
        <li>2014</li>
        <li>2015</li>
        <li>2016</li>
        <li class="now">2017</li>
      </ul>
      </p>
      <ul class="outer">
        <li>计划月份:</li>
        <li>全部</li>
        <li>1月</li>
        <li>2月</li>
        <li class="now">3月</li>
        <li>4月</li>
        <li>5月</li>
        <li>6月</li>
        <li>7月</li>
        <li>8月</li>
        <li>9月</li>
        <li>10月</li>
        <li>11月</li>
        <li>12月</li>
      </ul>
      <ul class="outer">
        <li>计划类型:</li>
        <li class="now">全部</li>
        <li>片区营养计划</li>
        <li>主次干道营养计划</li>
        <li>已移交新道路营养计划</li>
      </ul>

      <ul class="outer">
        <li>计划状态:</li>
        <li class="now">全部</li>
        <li>制定中</li>
        <li>内部初审</li>
        <li>待审核</li>
        <li>待下发</li>
        <li>已下发</li>
      </ul>
    </div>
    <div class="table-responsive content outer">
      <!-- <router-link class = 'btn btn-success pull-right' to='/users/add'>添加任务</router-link> -->
      <table class="table table-striped en">
        <thead>
          <tr>
            <th>计划名称</th>
            <th>计划年份</th>
            <th>计划月份</th>
            <th>计划类型</th>
            <th>创建人</th>
            <th>创建时间</th>
            <th>计划状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='user in users'>
            <td>{{user.paln}}</td>
            <td>{{user.planYear}}</td>
            <td>{{user.planMonth}}</td>
            <td>{{user.planType}}</td>
            <td>{{user.createdMan}}</td>
            <td>{{user.createdTime}}</td>
            <td>{{user.planStatus}}</td>
            <td>
              <router-link :to="{name: 'user.info', params: { id: user.id } }" class="el-icon-document"></router-link>
              <router-link :to="{name: 'user.edit', params: { id: user.id } }" class="el-icon-upload"></router-link>
              <a @click.prevent='removeById(user.id)' href='' class="el-icon-delete"></a>
            </td>
          </tr>
        </tbody>
      </table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalCount" class="pull-right">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import router from '../../router/'
  import AppTab from '../commen/AppTab.vue'
  export default {
    data () {
      return {
        users: [],
        pageSize: 5,
        totalCount: 0,
        currentPage: 1,
        editableTabs: [{
          title: '任务派发',
          name: '1'
        }]
      }
    },
    components: {
      AppTab
    },
    watch: {
      '$route' (to, from) {
        const page = to.query.page
        this.currentPage = Number.parseInt(page)
        const limit = to.query.limit
        this.pageSize = Number.parseInt(limit)
        this.getUsersByPage(page, limit)
      }
    },
    created () {
      //  组建的一个生命钩子
      //  当组建被创建渲染出来之后会自动来调用这个钩子函数
      //  在钩子函数内部最好不要写太多的逻辑
      //  如果需要,最好把逻辑都疯长在 methods 中
      //  $route 中的 params 可以用来获取动态路径参数
      //  $route 中的 query 可以用来获查询字符串参数
      console.log(this.$route.query)
      const pageSize = (this.$route.query.limit && Number.parseInt(this.$route.query.limit)) || 5
      const page = (this.$route.query.page && Number.parseInt(this.$route.query.page)) || 1
      this.currentPage = page
      this.pageSize = pageSize
      this.getUsersByPage(page, pageSize)
    },
    methods: {
      getUsersByPage (page, pageSize = 5) {
        axios.get(`/api/users?_page=${page}&_limit=${pageSize}`)
          .then(res => {
            // 在分页请求的 API 中 服务端会把总记录数放到响应头的 x-total-count 中
            // 然后将 data 中的totalCount 改为真实的数据
            // 然后组件自己计算页码
            this.totalCount = Number.parseInt(res.headers['x-total-count'])
            this.users = res.data
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      },
      removeById (id) {
        if (window.confirm('are you sure:')) {
          axios.delete(`/api/users/${id}`)
            .then((page, pageSize) => {
              router.push(`/users?page=${page}&limit=${this.pageSize}`)
            })
            .catch(err => {
              console.log(err)
            })
        }
      },
      handleSizeChange (pageSize) {
        this.currentPage = 1
        router.push(`/users?page=1&limit=${pageSize}`)
      },
      handleCurrentChange (page) {
        router.push(`/users?page=${page}&limit=${this.pageSize}`)
      }
    }
  }
</script>
<style>
  .outer {
    zoom: 1;
  }
  /*==for IE6/7 Maxthon2==*/

  .outer:after {
    clear: both;
    content: '.';
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
  }

  .choose {}

  .head {
    background-color: #fff;
    height: 40px;
    /*padding: 0 10px;*/
    margin-bottom: 20px;
  }

  .middle {
    padding: 10px;
    background-color: #fff;
    margin-bottom: 20px;
  }

  .content {
    padding: 10px;
    background-color: #fff;
  }

  div.el-date-editor.el-input {
    width: 90px;
  }

  .now {
    color: #7FCE95;
    border-bottom: 1px solid #7FCE95;
  }

  .tas {
    height: 40px;
    line-height: 40px;
    width: 100px;
    padding: 0 10px;
  }

  .middle ul {
    padding: 0;
  }

  .middle li {

    list-style: none;
    float: left;
    margin: 0 10px;
  }
</style>
