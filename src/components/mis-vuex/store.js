
const UserStore = {
    namespaced: true,
    state: {
        rows: [],
        curPage: 1,
        pageSize: 5,
        total: 0,
    },
    getters: {
        maxPage(state){
            return Math.ceil( state.total / state.pageSize );
        }
    },
    mutations: {
        getEmpsByPage(state, payload){
            Object.assign(state, payload);
        },
        setCurPage(state, payload){
            state.curPage = payload.curPage
        },
        setPageSize(state, payload){
            state.pageSize = payload.pageSize
        },
    },
    actions: {
        async getEmpsByPageAsync(context){
            const { curPage, pageSize } = context.state;
            const result = await fetch("/api/users/getUsers?page="+curPage+"&rows="+pageSize, {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            })
            .then(function(response) {
                return response.json();
            })
            context.commit("getEmpsByPage", result)
        },
    }
}

export default UserStore;