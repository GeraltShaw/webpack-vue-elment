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
      return <el-menu-item index={item.key}>{item.name}</el-menu-item>;
    });
    return (
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        mode="horizontal"
        router={true}
        default-active={this.$route.fullPath.split('/')[1]}
      >
        {topMenus}
      </el-menu>
    );
  },
};
</script>
