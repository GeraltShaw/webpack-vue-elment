<template>
    <el-row>
        <el-col :span="6">
            <el-menu
            :router="isRouter"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>MIS管理系统</span>
                    </template>
                    <el-menu-item index="1-1" route="/info/emp">员工列表</el-menu-item>         
                </el-submenu>
                <el-menu-item index="2" route="/info/count">
                    <i class="el-icon-menu"></i>
                    <span slot="title">计数器</span>
                </el-menu-item>
                <el-menu-item index="3" route="/info/todoList">
                    <i class="el-icon-setting"></i>
                    <span slot="title">待办事项管理</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="2"><div style="height:1px"></div></el-col>
        <el-col :span="16">
            <router-view></router-view>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name:"info",
    data() {
        return {
            isRouter: true
        }
    }
}
</script>
