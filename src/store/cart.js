const state = () => ({
    items: []
})

const getters = {
    count(state) {
        return state.items.length
    },
    totalCost(state) {
        let total = 0
        state.items.forEach(item => total += item.cost * item.qty)
        return total
    },
    totalCount(state) {
        let total = 0
        state.items.forEach(item => total += item.qty)
        return total
    }
}

const mutations = {
    setItems(state, payload) {
        const found = state.items.find(item => item.id === payload.id)
        if (found) {
            found.qty++
            state.items.splice(state.items.indexOf(found), 1)
            state.items.unshift(found)
        } else {
            payload.qty = 1
            state.items.unshift(payload)
        }
    },
    decrementQty(state, payload) {
        const found = state.items.find(item => item.id === payload.id)
        if (found) {
            found.qty--
            state.items.splice(state.items.indexOf(found), 1)
            state.items.unshift(found)
        }
    },
    removeToCart(state, payload) {
        const index = state.items.findIndex(items => items.id == payload)
        state.items.splice(index, 1)

    }
}

const actions = {
    addToCart({ commit }, item) {
        commit('setItems', item)
    },
    decrementQty({ commit }, item) {
        commit('decrementQty', item)
    },
    removeToCart({ commit }, items) {
        commit('removeToCart', items)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}