<template>
    <div>
        <el-table
        :data="rows"
        :stripe="isStripe"
        border
        style="width: 100%">
            <el-table-column
                prop="_id"
                label="编号">
            </el-table-column>
            <el-table-column
                prop="username"
                label="账号">
            </el-table-column>
            <el-table-column
                prop="password"
                label="密码">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="curPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import lodash from "lodash";
export default {
    name: "emp",
    data(){
        return {
            isStripe: true,
        }
    },
    computed: {
        ...mapState("mis", [ "rows", "curPage", "pageSize", "total" ]),
        ...mapGetters("mis", [ "maxPage" ]),
    },
    watch: {
        curPage(value){
            this.getEmpsByPageAsync();
        },
        pageSize(value){
             this.getEmpsByPageAsync();
        }
    },
    created() {
        this.$store.dispatch({
            type: "mis/getEmpsByPageAsync"
        })
    },
    methods: {
        getEmpsByPageAsync: _.debounce(function(){
                this.$store.dispatch({
                    type: "mis/getEmpsByPageAsync"
                })
        }, 500),
        handleSizeChange(value){
            this.$store.commit("mis/setPageSize", {
                pageSize : value
            })
        },
        handleCurrentChange(value){
            this.$store.commit("mis/setCurPage", {
                curPage : value
            })
        },
        handleEdit(row){
            console.log(row);
        },
        handleDelete(row){
            console.log(row)
        },
        handleClick(type){
            switch(type){
                case "first":
                    this.$store.commit("mis/setCurPage", {
                        curPage : 1
                    })
                    break;
                case "last":
                    this.$store.commit("mis/setCurPage", {
                        curPage : this.maxPage
                    })
                    break;
                case "next":
                    if(this.curPage < this.maxPage){
                        this.$store.commit("mis/setCurPage", {
                            curPage : this.curPage + 1
                        })
                    }
                    break;    
                case "prev":
                    if(this.curPage > 1){
                        this.$store.commit("mis/setCurPage", {
                            curPage : this.curPage - 1
                        })
                    }
                    break;
            }
        }
    }
}
</script>

