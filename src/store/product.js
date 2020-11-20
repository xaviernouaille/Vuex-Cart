const state = () => ({
    items: '',
    bestSeller: '',
    item: ''
})

const mutations = {
    setBestSeller(state, payload) {
        state.bestSeller = payload
    },
    setProducts(state, payload) {
        state.items = payload
    },
    setOneProduct(state, payload) {
        state.item = payload
    }
}

const actions = {
    getBestSeller({ commit }) {
        // axios request
        const bestSeller = [
            { id: 'f1esfse', title: 'Item 1', text: 'bbb', cost: 20 },
            { id: 'fjksfjke14', title: 'Item 2', text: 'Ceci est le contenu', cost: 40 },
            { id: 'oaps412', title: 'Item 3', text: 'Ceci est le contenu', cost: 60 }
        ]
        commit('setBestSeller', bestSeller)
    },
    getAllProducts({ commit }) {
        // axios request
        const items = [
            { id: 'f1esfse', title: 'Blabla', text: 'bbb', cost: 20 },
            { id: 'fjksfjke14', title: 'Le title', text: 'Ceci est le contenu', cost: 40 }
        ]
        commit('setProducts', items)
    },
    getProduct({ commit }, payload) {
        // axios request
        console.log(payload)
        const item = { id: 'fjksfjke14', title: 'Le title', text: 'Ceci est le contenu', cost: 40 }

        commit('setOneProduct', item)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}