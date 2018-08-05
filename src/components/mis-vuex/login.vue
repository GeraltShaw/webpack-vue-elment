<template>
    <el-row>
        <el-col :span="6"><div style='height:1px'></div></el-col>
        <el-col :span="12">
            <h1>登录页面</h1>
            <el-form label-width="100px">
                <el-form-item label="账号" >
                    <el-input suffix-icon="el-icon-edit-outline" v-model="username"></el-input>
                </el-form-item>
                <el-form-item label="密码" >
                    <el-input suffix-icon="el-icon-view" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="log">登录</el-button>
                    <el-button @click="reg">注册</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="6"><div style='height:1px'></div></el-col>
    </el-row>
</template>

<script>
export default {
    data(){
        return {
            username: "",
        }
    },
    created(){
        this.username = this.$route.params.username;
    },
    name:"login",
    methods: {
        log() {
            this.$message({
                message: '登陆成功',
                type: 'success',
                duration: 1200,
                onClose: () => {
                    this.$router.push({
                        path: `/info`
                    })
                }
            });
        },
        reg(){
            this.$router.push({
                path: `/reg`
            })
        },
    }
}
</script>

