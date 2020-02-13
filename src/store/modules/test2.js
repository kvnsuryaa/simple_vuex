/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from "axios"

const state = {
    msg1: 'No Message',
    msg2: 'Without Dispatch'
}

const mutations = {
    SET_TEXT1: (state, payload) => {
        state.msg1 = payload
    },
    SET_TEXT2: (state, payload) => {
        state.msg2 = payload
    }
}

const actions = {
    SET_NEW_TEXT1: ({commit, dispatch}) => {
        return commit('SET_TEXT1', "This Message 1")
    },
    SET_NEW_TEXT2: ({commit, dispatch}) => {
        return commit('SET_TEXT2', "With Dispatch")
    }
}

const getters = {
    msg1: state => state.msg1,
    msg2: state => state.msg2
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}