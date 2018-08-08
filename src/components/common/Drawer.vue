<style scoped>
@import "./Drawer.css";
</style>
<script>
import { mapState } from "vuex";
export default {
  name: "drawer",
  data() {
    return {
      index: 0
    };
  },
  created() {
    console.log(this.drawerVisible);
  },
  render(createElement) {
    return (
      <div class="drawer" id="drawer">
        <div
          class="drawer-layer"
          style={{
            display: this.drawerVisible ? "block" : "none",
            zIndex: 1055 - 15 * (this.index - 1) + 1
          }}
          onClick={this.onCancel}
        />
        <div
          class="drawer-container"
          style={{
            transform: this.drawerVisible ? "translateX(0)" : "translateX(10rem)",
            right: `${this.index - 1}rem`,
            zIndex: 1070 - 15 * (this.index - 1) + 1
          }}
        >
          {this.$attrs.header ? (
            <div class="drawer-header">
              <span class="drawer-header-title">{this.$attrs.header}</span>
              <Icon
                class="drawer-header-close gray"
                type="close"
                onClick={this.onCancel}
              />
            </div>
          ) : null}
          <div
            class="drawer-content"
            style={{ top: this.$attrs.header ? ".54rem" : 0 }}
          >
            <div>抽屉组件</div>
            <div>{this.drawerVisible}</div>
          </div>
        </div>
      </div>
    );
  },
  props: ["onCancel"],
  computed: {
    ...mapState("common", ["drawerVisible"])
  }
};
</script>

