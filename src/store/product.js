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
            { id: '015ef5', title: 'BestSeller 1', text: 'Ceci est le descriptif', cost: 20, img: 'https://www.yonis-shop.com/159882/ordinateur-portable-windows-10-netbook-141-pouces-quad-core-20-ghz.jpg' },
            { id: 'd5qd1', title: 'BestSeller 2', text: 'Ceci est le descriptif', cost: 40, img: 'https://images-na.ssl-images-amazon.com/images/I/61dhuVvizEL._AC_SL1500_.jpg' },
            { id: '1d26fef', title: 'BestSeller 3', text: 'Ceci est le descriptif', cost: 60, img: 'https://www.monexpertinfo.com/wp-content/uploads/2019/06/ecran-noir-pc-1-600x320.jpg' }
        ]
        commit('setBestSeller', bestSeller)
    },
    getAllProducts({ commit }) {
        // axios request
        const items = [
            { id: '015ef5', title: 'BestSeller 1', text: 'Ceci est le descriptif', cost: 20, img: 'https://www.yonis-shop.com/159882/ordinateur-portable-windows-10-netbook-141-pouces-quad-core-20-ghz.jpg' },
            { id: 'd5qd1', title: 'BestSeller 2', text: 'Ceci est le descriptif', cost: 40, img: 'https://images-na.ssl-images-amazon.com/images/I/61dhuVvizEL._AC_SL1500_.jpg' },
            { id: '1d26fef', title: 'BestSeller 3', text: 'Ceci est le descriptif', cost: 60, img: 'https://www.monexpertinfo.com/wp-content/uploads/2019/06/ecran-noir-pc-1-600x320.jpg' },
            { id: 'lk2il01j', title: 'Blabla', text: 'bbb', cost: 20, img: 'https://images-na.ssl-images-amazon.com/images/I/41a-jjTImBL._AC_SX425_.jpg' },
            { id: '2wa2s1', title: 'Le title', text: 'Ceci est le descriptif', cost: 40, img: 'https://static.fnac-static.com/multimedia/Images/FR/NR/71/81/bd/12419441/1540-1/tsp20200812134214/ASUS-S330FA-EY213T-I5-8265U-8G-512G-13-3FHD.jpg' }
        ]
        commit('setProducts', items)
    },
    getProduct({ commit }, payload) {
        // axios request
        console.log(payload)
        const item = { id: '015ef5', title: 'BestSeller 1', text: 'Ceci est le descriptif', cost: 40, img: 'https://www.yonis-shop.com/159882/ordinateur-portable-windows-10-netbook-141-pouces-quad-core-20-ghz.jpg' }

        commit('setOneProduct', item)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}