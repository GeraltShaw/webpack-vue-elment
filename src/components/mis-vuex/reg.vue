<template>
    <el-row>
        <el-col :span="6"><div style='height:1px'></div></el-col>
        <el-col :span="12">
            <h1>注册页面</h1>
            <el-form label-width="100px">
                <el-form-item
                    label="账号"
                    :rules="[
                        { required: true, message: '账号不能为空', trigger: 'blur' }
                    ]"
                >
                    <el-input suffix-icon="el-icon-edit-outline" @input="inputUserName" ></el-input>
                </el-form-item>
                <el-form-item
                     label="密码"
                    :rules="{
                        required: true, message: '密码不能为空', trigger: 'blur'
                    }"
                >
                    <el-input suffix-icon="el-icon-view" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="reg">注册</el-button>
                    <el-button @click="back">返回</el-button>                    
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="6"><div style='height:1px'></div></el-col>
    </el-row>
</template>

<script>
export default {
    name:"reg",
    data(){
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        reg() {
            this.$message({
                message: '注册成功',
                type: 'success',
                duration: 1200,
                onClose: () => {
                    this.$router.push({
                        name: "Login",
                        params: {
                            username: this.username
                        }
                    })
                }
            });
        },
        back(){
            this.$router.push({
                path: `/`
            })
        },
        inputUserName(value){
            this.username = value;
        }
    }
}
</script>
