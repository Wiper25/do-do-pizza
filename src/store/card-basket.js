export default {
    actions: {
    },
    mutations: {
        OPEN_MODEL: (state,payload) => {
            state.status_model = payload
        },
        OBJ_MODEL_BASKET: (state,payload) => {
            state.card.push(payload)
        },
        CLEAR_MODEL_BASKET: (state, payload) => {
            state.card = payload
        }
    },
    state: {
        status_model: false,
        card:[]
    },
    getters: {
        OPEN(state) {
            return state.status_model
        },
        CARD_BASKET: (state) => {
            return state.card
          },
    },
}