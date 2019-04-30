/*
  功能: 复制粘贴
  1. cnpm install clipboard --save

 */
<template>
  <div class="copy">
    <!-- <i class="iconfont icon-xiala" style="color: red; font-size:80px;"></i> -->
    <el-table :data="tableData" style="width: 100%" @row-click="evenyRow" @cell-mouse-enter="test" highlight-current-row>
      <el-table-column prop="date" label="日期" sortable width="180" type="index"></el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
      <el-table-column class="address" prop="address" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button data-clipboard-target=".address" class="btn" size="mini" @click="handleEdit(scope.row.address)" type="success" >复制</el-button>
          {{ scope.row.address }} | 
          {{ scope.$index }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    test() {
      console.log(1)
    },
    evenyRow(row,rowIndex) {
      console.log(row,rowIndex)
      this.$message({
        type: 'success',
        message: '点击了一整行'
      })
    },
    // 1. 使用浏览器的exeCommand()复制功能
    handleEdit(data) {
      let url = data;
      let oInput = document.createElement('input');
      oInput.value = url;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象;
      console.log(oInput.value)
      document.execCommand("Copy"); // 执行浏览器复制命令
      this.$message({
        message: '已成功复制到剪切板',
        type: 'success'
      });
      oInput.remove()
    }

    // 2. 使用clipboard.js
    // handleEdit (data) {
    //   var clipboard = new Clipboard('.btn') // 初始化 按钮的DOM
    //   clipboard.on('success', e => {
    //     console.log(e)
    //     console.log(e.text)
    //     // 释放内存
    //     clipboard.distroy()
    //   })
    //   clipboard.on('error', e => {
    //     console.log('error')
    //     console.log(e)
    //     // 释放内存
    //     clipboard.distroy()
    //   })
    // }
  }
}
</script>

<style>
.el-table__body tr.current-row>td {
  background-color: red !important;
}

/* 
  点击当前行的事件  @cell-mouse-enter="test"
  点击设置当前行的颜色 highlight-current-row   
 */
</style>
