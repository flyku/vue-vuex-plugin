<template>
	<div class="indexPage">
    <header>
      <div class="index_logo">
        <img src="../../assets/indexImg/logo.png" alt="">
      </div>
      <el-menu
      :default-active="activePath"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="white"
      text-color="rgb(51,51,51)"
      active-text-color="rgb(34,136,254)">
        <el-menu-item index="/test1">主页</el-menu-item>  
        <el-menu-item index="/test2/index">测试页</el-menu-item>
      </el-menu>	
    </header>
    <div class="indexMain_Index">
        <router-view />
		</div>

	</div>
</template>
<script src="./index.js"></script>
<style scoped="scoped" src="./index.less" lang="less">
</style>