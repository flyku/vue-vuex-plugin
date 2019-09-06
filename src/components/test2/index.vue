<template>
	<div class="indexPage">
    <div class="indexMain_Index">
    <header>
      <el-menu
      :default-active="activePath"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="white"
      text-color="rgb(51,51,51)"
      active-text-color="rgb(34,136,254)">
        <el-menu-item index="/test3/index">测试第二层路由1</el-menu-item>  
        <el-menu-item index="/test4/index">测试第二层路由2</el-menu-item>
      </el-menu>
    </header>
    <div class="indexMain_Index">
        <router-view />
		</div>
	</div>
	</div>
</template>
<script src="./index.js"></script>
<style scoped="scoped" src="./index.less" lang="less">
</style>