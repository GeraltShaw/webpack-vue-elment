import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const todoListStore = {
    namespaced: true,
    state: {
        todoList: [{
            id: 0,
            text: "HTML",
            completed: false
          }, {
            id: 1,
            text: "CSS",
            completed: true
          }, {
            id: 2,
            text: "JavaScript",
            completed: false
          }],
        id: 3,
        type: "All",
    },
    getters: {
        filterList: (state) => {
            switch (state.type) {
                case "All":
                    return state.todoList;
                case "Completed":
                    return state.todoList.filter(item => item.completed)
                case "Active":
                    return state.todoList.filter(item => !item.completed)
            }
        },
        total: (state) => {
            return state.todoList.length
        },
        completedTotal: (state) => {
            return state.todoList.filter(item => item.completed).length
        }
    },
    mutations: {
        addTodo(state, payload) {
            state.todoList.push({
                id: state.id++,
                text: payload.text,
                completed: false
            })
        },
        setShowType(state, payload) {
            state.type = payload.type;
        },
        completedTodo(state, payload) {
            state.todoList.some((item) => {
                if (item.id === (~~payload.id)) {
                    item.completed = !item.completed
                    return
                }
            })
        },
    }
}
export default todoListStore;