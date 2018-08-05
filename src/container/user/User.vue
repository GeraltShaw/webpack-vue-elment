<template>
    <el-table
        :data="userList"
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
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "user",
  methods: {},
  mounted() {
    this.$store.dispatch({
      type: "user/getUserListAsync"
    });
  },
  computed: {
    ...mapState("user", ["userList"])
  },
};
</script>

