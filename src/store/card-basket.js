export default {
    actions: {},
    mutations: {
        OPEN_MODEL: (state,payload) => {
            state.status_model = payload
        },
        OPEN_BASKET: (state,payload) => {
            state.status_basket = payload
        },
        OBJ_MODEL_BASKET: (state,payload) => {
            state.card.push(payload)
        },
        CLEAR_MODEL_BASKET: (state, payload) => {
            state.card = payload
        },
        ADD_PRODUCT_BASKET(state,payload) {
            state.basket.push(payload)
        }
    },
    state: {
        status_model: false,
        status_basket: false,
        card: [],
        basket: []
    },
    getters: {
        OPEN_MODEL(state) {
            return state.status_model
        },
        OPEN_BASKET(state) {
            return state.status_basket
        },
        CARD_BASKET: (state) => {
            return state.card
        },
        ADD_BASKET: (state) => {
            return state.basket
        },
        
    },
}