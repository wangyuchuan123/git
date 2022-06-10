import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        number: '5',
        city: '郑州',
        all: '10',
        list: []
    },
    getters: {
        badScore(state) {
            return state.list.filter((item) => item < 70);
        }
    },
    mutations: {
        change(state, payload) {
            state.number = payload
        },

        fails(state, list) {
            state.list = list
        },
        cityss(state, num) {
            state.city = num
        },
        al(state, a) {
            state.all = a
        }
    },
    actions: {
        change(ctx, payload) {
            ctx.commit('change', payload)
        },
        fail(ctx) {
            setTimeout(() => {
                let list = [22, 55, 99, 88, 77, 58, 25]
                ctx.commit('fails', list)

            }, 2000);
        },
        citys(ctx) {
            setTimeout(() => {
                let num = '上海';
                ctx.commit('cityss', num)
            }, 2000);
        },
        // al(ctx, a) {
        //     ctx.commit('')
        // }

    },
    modules: {}
})