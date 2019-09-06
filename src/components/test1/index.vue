<template>
	<div class="indexPage">
    <div class="indexMain_Index">
      <div class="hideBar">
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary" @click.stop="add">+1</el-button>
        <el-button type="success" @click.stop="reduce" >-1</el-button> 
        <el-button type="info" @click.stop="add1000">+1000</el-button>
        <el-button type="info" @click.stop="reduce1000">-1000</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <div>{{count}}</div>
      </div>
		</div>
	</div>
</template>
<script src="./index.js"></script>
<style scoped="scoped" src="./index.less" lang="less">
</style>