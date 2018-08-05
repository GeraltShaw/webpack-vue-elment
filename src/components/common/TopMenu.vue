<script>
import { topMenus } from "../../utils/menuConfig.js";
export default {
  name: "TopMenu",
  data() {
    return {
      topMenus: [...topMenus]
    };
  },
  render(createElement) {
    const topMenus = this.topMenus.map((item, index) => {
      return <el-menu-item index={index.toString()}>{item.name}</el-menu-item>;
    });
    return (
      <el-menu
        mode="horizontal"
        onSelect={this.handleSelect}
        default-active="0"
      >
        {topMenus}
      </el-menu>
    );
  },
  created() {},
  methods: {
    handleSelect(key) {
      this.$router.push({
        path: this.topMenus[key].path
      });
    }
  }
};
</script>
