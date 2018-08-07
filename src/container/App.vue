<template>
    <el-container>
      <el-header>
        <TopMenu/>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
</template>

<script>
export default {
    data(){
        return {
       
        }
    },
    created(){

    },
    name:"App",
    methods: {

    }
}
</script>
<style>
  .el-header {
    padding: 0;
  }
</style>


