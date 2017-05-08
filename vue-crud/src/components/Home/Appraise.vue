<template class="outer">
  <div class="choose outer">
    <!-- <h2 class="sub-header">用户管理</h2> -->
    <div class="head outer">
      <div class="now tas">事后评估
        <span>X</span></div>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col :span="9"><div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix " style="height:10px;">
              <div >
              <i class="el-icon-information"style="font-size:18px; color:#666;"></i>
              <span style="color:#5DB976; font-size:18px;">警情点详情</span>
              <span style="float: right; color:#666" >X</span>
              </div>
            </div>

            <table class="text item">
              <tr>
                <td>警情编号:</td>
                <td class="pull-right">20136495501</td>
              </tr>
              <tr>
                <td>位置:</td>
                <td class="pull-right">今山西路18号</td>
              </tr>
              <tr>
                <td>警情描述:</td>
                <td class="pull-right">由于管道不通导致小区路面积水</td>
              </tr>
              <tr>
                <td>最大积水深度:</td>
                <td class="pull-right">20cm</td>
              </tr>
              <tr>
                <td>积水面积:</td>
                <td class="pull-right">400M2</td>
              </tr>
              <tr>
                <td>接警时间:</td>
                <td class="pull-right">2013-07-17 24:00</td>
              </tr>
              <tr>
                <td>处理完成时间:</td>
                <td class="pull-right">2014-05-07 12:18</td>
              </tr>
              <tr>
                <td>积水原因:</td>
                <td></td>
              </tr>
              <tr>
                <td>现场处理措施:</td>
                <td class="pull-right">临时增加水泵抽排</td>
              </tr>
              <tr>
                <td>防讯队及物资:</td>
                <td></td>
              </tr>
              <tr>
                <td>后续整治内容:</td>
                <td class="pull-right">完善未贯通的管道</td>
              </tr>
               <tr>
                <td>责任人:</td>
                <td></td>
              </tr>
               <tr>
                <td>审核人:</td>
                <td class="pull-right"></td>
              </tr>
               <tr>
                <td class="">截止时间:</td>
                <td class="pull-right">2013-10-28</td>
              </tr>
            </table>
          </el-card>
        </div>
        </el-col>
        <el-col :span="15" :offset="0"><div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix" style="height:10px;">
              <span style="color:#5DB976; font-size:18px;">积水点分析</span>
              <span style="float: right; color:#666" >X</span>
            </div>
            <div  class="text item">

            </div>
          </el-card>
        </div>
        </el-col>
         <el-col :span="15" :offset="0"><div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix" style="height:10px;">
              <span style="color:#5DB976; font-size:18px;">防汛物资及选择</span>
            </div>
            <div  class="text item">
              <el-row :gutter="20">
                <el-col :span="12"><div class="grid-content bg-purple">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix" style="height:10px;">
                      <span style="line-height: 16px; color:#5DB976; font-size:14px; ">防讯队</span>
                    </div>
                    <div  class="text item">
                      <el-table
                        :data="tableData2"
                        style="width: 100%;"
                        :row-class-name="tableRowClassName">
                        <el-table-column
                          prop="date"
                          label="防讯队"
                          width=180>
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="详情"
                          width=65>
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-card>
                </div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix" style="height:10px;">
                      <span style="line-height: 10px; color:#5DB976; font-size:14px;">防汛物资</span>
                    </div>
                    <div class="text item">
                      <el-table
                        :data="tableData"
                        style="width: 100%"
                        :row-class-name="tableRowClassName">
                        <el-table-column
                          prop="date"
                          label="名称"
                          width="50">
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="总量"
                          width="50">
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="分配量"
                          width="50">
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="消耗量"
                          width="50">
                        </el-table-column>
                          <el-table-column
                          prop="name"
                          label="删除"
                          width="50">
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-card>
                </div></el-col>
              </el-row>
            </div>
          </el-card>
        </div>
        </el-col>
      </el-row>

    </div>

  </div>
</template>
<script>
export default {
  methods: {
    tableRowClassName (row, index) {
      if (index === 1) {
        return 'info-row'
      } else if (index === 3) {
        return 'positive-row'
      }
      return ''
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  },
  data () {
    return {
      tableData2: [{
        date: '2014年防汛预案.doc',
        name: ''
      }, {
        date: '关于下发《镇江市城区防汛排涝》',
        name: ''
      }, {
        date: '2015年防汛预案.doc',
        name: ''
      }, {
        date: '2016年防汛预案.doc',
        name: ''
      }],
      tableData: [{

      }],
      tableData3: [{
        name: '王小虎'
      }, {
        name: '王小虎'
      }, {
        name: '王小虎'
      }, {
        name: '王小虎'
      }, {
        name: '王小虎'
      }, {
        name: '王小虎'
      }, {
        name: '王小虎'
      }],
      multipleSelection: []
    }
  }
}
</script>
<style>
</style>
