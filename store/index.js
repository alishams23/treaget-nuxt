export const state = () => ({
    isAuthenticated: false,
    token: '',
    username: '',
    user: null,
    ServiceProvider: null,

})

export const mutations = {
    onStart(state) {
        let token = localStorage.getItem("token")
        if (token) {
            state.isAuthenticated = true
            state.token = token
            let username = localStorage.getItem("username")
            state.username = username
        } else {
            state.isAuthenticated = false,
                state.token = ''
            state.username = ''
        }
    },
    login(state, data) {
        if (data.token) {
            state.isAuthenticated = true
            state.token = data.token
            state.username = data.username
            localStorage.setItem("token", data.token)
            localStorage.setItem("username", data.username)
        } else {
            state.isAuthenticated = false
            state.token = ''

            localStorage.removeItem("token")
        }
    },
    logout(state) {
        state.isAuthenticated = false
        state.token = ''
        state.username = ''

        state.user = null
        state.ServiceProvider = null
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        this.app.router.push("/t/login")
    },
    getUser(state, data) {
        state.user = data
        state.ServiceProvider = data.ServiceProvider
    },
    checkLogin(state) {
        if (state.isAuthenticated == false) {
            this.app.router.push("/t/login")
        }
    }
}