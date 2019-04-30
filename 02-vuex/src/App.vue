<template>
  <div id="app">
    <el-container>
      <el-aside width="300px">
        <router-link to="/table" tag="li">1. 导出表格</router-link>
        <router-link to="/editor" tag="li">2. 富文本编辑</router-link>
        <router-link to="/copy" tag="li">4. 复制Copy</router-link>
        <router-link to="/form" tag="li">5. Form表单组件</router-link>
        <router-link to="/vuex" tag="li">6. Vuex的使用</router-link>
        <router-link to="/layout" tag="li">7.布局</router-link>
        <router-link to="/echart" tag="li">echart世界地图</router-link>
        <router-link to="/circle" tag="li">Echart圆环</router-link>
        <router-link to="/line" tag="li">折线图</router-link>
        <router-link to="/project" tag="li">项目布局</router-link>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "./assets/css/base.css";
</style>
