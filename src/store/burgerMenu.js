export default {
    actions: {},
    mutations: {
        BURGER_STATUS_BTN(state, payload) {
            state.burgerMenu = payload
        }
    },
    state: {
        burgerMenu: false
    },
    getters: {
        STATUS_MENU_BURGER: (state)=> {
            return state.burgerMenu
        }
    },
}