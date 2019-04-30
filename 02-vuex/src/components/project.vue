<template>
  <div id="overview">
    <el-row :gutter="20">
      <el-col :span="8">
        <section class="left">
          <section class="summary">
            <!-- 纵览 -->
            <el-row :gutter="20">
              <el-col :span="12"><div class="box"></div></el-col>
              <el-col :span="12"><div class="box"></div></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12"><div class="box"></div></el-col>
              <el-col :span="12"><div class="box"></div></el-col>
            </el-row>
          </section>
          <section class="nodes">
            <!-- 节点 -->
          </section>
          <section class="total-process">
            <!-- 处理事物总数 -->
          </section>
        </section>
      </el-col>
      <el-col :span="10">
        <section class="middle">
          <!-- 中间部分 -->
        </section>
      </el-col>
      <el-col :span="6">
        <section class="right">
          <!-- 右侧部分 -->
        </section>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
  .box {
    background-color: pink;
    height: 130px;
    margin-bottom: 20px;
  }
  .container .content-container {
    padding: 20px;
    padding-right: 0;
    section {
      height: 100px;
      background-color:red;
    }
  }
</style>
