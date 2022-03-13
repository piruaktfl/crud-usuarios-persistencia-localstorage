import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: JSON.parse(localStorage.getItem('users')) || [],
    modal: false,
    modalEdit: false,
    modalDetail: false,
    indexUser: null
  },
  getters: {
    users: (state) => state.users,
    modal: (state) => state.modal,
    modalEdit: (state) => state.modalEdit,
    modalDetail: (state) => state.modalDetail,
    indexUser: (state) => state.indexUser
  },
  mutations: {
    addUser (state, payload) {
      state.users.push({ ...state.users, ...payload })
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    removeUser (state) {
      state.users.splice(state.indexUser, 1)
      localStorage.setItem('users', JSON.stringify(state.users))
      // window.location.reload()
    },
    editUser (state, payload) {
      state.users[state.indexUser] = payload
      localStorage.setItem('users', JSON.stringify(state.users))
      // window.location.reload()
    },
    openCloseModal (state, payload) {
      state.modal = payload
    },
    openCloseModalEdit (state, payload) {
      state.modalEdit = payload
      if (!state.modalEdit) {
        window.location.reload()
      }
    },
    openCloseModalDetail (state, payload) {
      state.modalDetail = payload
    },
    addIndexUser (state, payload) {
      state.indexUser = payload
    }
  },
  actions: {
    addUser (context, payload) {
      context.commit('addUser', payload)
    },
    removeUser (context) {
      context.commit('removeUser')
    },
    editUser (context, payload) {
      context.commit('editUser', payload)
    }
  },
  modules: {
  }
})
