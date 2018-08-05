
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "filters",
  data() {
    return {
      showTypes: ["All", "Completed", "Active"],
    }
  },
  render(createElement){
    const listEl = this.showTypes.map((item) => {
      if(item == this.type){
        return <span style={{"color": "red"}}>{item}</span>
      }else{
        return <a href="#" onClick={()=>{
            this.handleClick(item)
        }}>{item}</a>
      }
    });
    return <div class="type-filters">
            <span>Show:</span>
            <span>{listEl}</span>
            <span>{this.completedTotal}/{this.total}</span>
        </div>
  },
  computed: {
    ...mapState("todoList", ["type"]),
    ...mapGetters("todoList", ["total", "completedTotal"]),
  },
  methods: {
    handleClick(type) {
      this.$store.commit("todoList/setShowType", {
        type
      })
    },
  }
}
</script>
