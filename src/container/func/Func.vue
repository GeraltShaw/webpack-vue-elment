
<template>
  <div>
    <el-button type="primary" @click="handleClick">抽屉组件</el-button>
    <drawer v-bind:visible="this.drawerVisible" :onCancel="onCancel" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import drawer from "../../components/common/Drawer.vue";
export default {
  name: "func",
  data() {
    return {};
  },
  created() {},
  methods: {
    handleClick() {
      this.$store.commit("common/setDrawerVisible", {
        drawerVisible: true
      });
    },
    onCancel() {
      this.$store.commit("common/setDrawerVisible", {
        drawerVisible: false
      });
    }
  },
  computed: {
    ...mapState("common", ["drawerVisible"])
  }
};
</script>

