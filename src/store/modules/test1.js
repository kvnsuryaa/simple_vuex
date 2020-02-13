/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from "axios"

const state = {
    text: 'With Vuex',
    github: []
}

const mutations = {
    SET_GITHUB: (state, payload) => {
        state.github = payload
    },
    SET_TEXT: (state, payload) => {
        state.text = payload
    }
}

const actions = {
    GET_DATA_GITHUB: async ({commit, dispatch}, api) => {
        return await axios.get(api).then((res) => {
            commit('SET_GITHUB', res.data)
            return res
        })
    },
    SET_NEW_TEXT: ({commit, dispatch}) => {
        return commit('SET_TEXT', "New Text Vuex")
    }
}

const getters = {
    github: state => state.github,
    text: state => state.text
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}