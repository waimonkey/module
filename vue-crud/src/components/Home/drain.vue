<template class="outer">
  <div class="choose outer">
    <!-- <h2 class="sub-header">用户管理</h2> -->
    <div class="head outer">
      <div class="now tas">排水户
        <span>X</span></div>
    </div>
    <div class='middle outer'>
     <el-form :inline="true" :model="formInline" class="demo-form-inline" >
        <el-form-item label="查询名称:">
          <el-input v-model="formInline.user" placeholder="请输入项目或地块名称关键字"></el-input>
        </el-form-item>
        <el-form-item label="项目状态:">
          <el-select v-model="value" placeholder="全部">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
         </el-form-item>
         <br>
        <el-form-item label="接入污水厂:">
          <el-select v-model="value" placeholder="全部">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目开工时间:">
           <div class="block">
              <!-- <span class="demonstration">默认</span> -->
              <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
            </div>
        </el-form-item>
        <el-form-item label="至">
           <div class="block">
              <!-- <span class="demonstration">默认</span> -->
              <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
            </div>
        </el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>

      </el-form>
    </div>
    <div class="table-responsive content outer">
      <!-- <router-link class = 'btn btn-success pull-right' to='/users/add'>添加任务</router-link> -->
      <table class="table table-striped en">
        <thead>
          <tr>
            <th>序号</th>
            <th>单位名称</th>
            <th>项目名称</th>
            <th>项目编号</th>
            <th>申请日期</th>
            <th>地址</th>
            <th>项目状态</th>
            <th>接入道路</th>
            <th>接入污水厂</th>
            <th>入网告书编号</th>
            <th>档案</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='drain in drains'>
            <td>{{drain.id}}</td>
            <td>{{drain.unitName}}</td>
            <td>{{drain.projectName}}</td>
            <td>{{drain.projectNum}}</td>
            <td>{{drain.aplicationgDate}}</td>
            <td>{{drain.address}}</td>
            <td>{{drain.projectStatue}}</td>
            <td>{{drain.role}}</td>
            <td>{{drain.sewage}}</td>
            <td>{{drain.number}}</td>
            <td>{{drain.file}}</td>
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
export default {
  data () {
    return {
      drains: [],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      formInline: {
        user: '',
        region: ''
      }
    }
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
      axios.get(`/api/drains?_page=${page}&_limit=${pageSize}`)
        .then(res => {
          // 在分页请求的 API 中 服务端会把总记录数放到响应头的 x-total-count 中
          // 然后将 data 中的totalCount 改为真实的数据
          // 然后组件自己计算页码
          this.totalCount = Number.parseInt(res.headers['x-total-count'])
          this.drains = res.data
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSubmit () {
      console.log('submit!')
    },
    handleSizeChange (pageSize) {
      this.currentPage = 1
      router.push(`/drains?page=1&limit=${pageSize}`)
    },
    handleCurrentChange (page) {
      router.push(`/drains?page=${page}&limit=${this.pageSize}`)
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
    /*margin-bottom: 20px;*/
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
