<template>
  <div>
    <el-table
    :data="userList.slice((currentPage-1)*pageSize, currentPage*pageSize)"
    border
    style="width: 100%">
      <el-table-column
      prop="name"
      label="日期">
      </el-table-column>
      <el-table-column
      prop="password"
      label="密码">
      </el-table-column>
      <el-table-column
      prop="address"
      label="地址">
      </el-table-column>
      <el-table-column
      prop="email"
      label="邮箱">
      </el-table-column>
    </el-table>
    <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="userList.length">
    </el-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "user",
  data() {
    return {
      currentPage: 1,
      pageSize: 10
    };
  },
  methods: {
    handleSizeChange: function(size) {
      this.pageSize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    }
  },
  mounted() {
    this.$store.dispatch({
      type: "user/getUserListAsync"
    });
  },
  computed: {
    ...mapState("user", ["userList"])
  }
};
</script>
<style>
  .el-pagination {
    text-align: right;
  }
</style>


