class Domen {
  constructor(id, title) {
    this.id = id
    this.title = title
  }
}

export default {
  state: {
    domens: [
      {
        id: 'domen3333',
        title: 'Burgerking.com'
      },
      {
        id: 'domen42323',
        title: 'Burgerking.com'
      },
      {
        id: 'domen41113',
        title: 'Burgerking.com'
      }
    ]
  },

  mutations: {
    addDomenState(state, payload) {
      state.domens.unshift(payload)
    },

    editDomenState(state, payload) {
      const index = state.domens.findIndex(mail => mail.id === payload.id)
      state.domens.splice(index, 1, payload)
    }
  },

  actions: {
    async addDomen({commit}, payload) {
      try {
        const newDomen = new Domen(payload.id, payload.title)
        commit('addDomenState', {...newDomen})
      } catch (error) {
        console.log(error)
      }
    },

    async editDomen({commit}, payload) {
      commit('editDomenState', payload)
    }
  },

  getters: {
    getDomens(state) {
      return state.domens
    }
  }
}
