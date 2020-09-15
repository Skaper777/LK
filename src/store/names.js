class Name {
  constructor(id, title) {
    this.id = id
    this.title = title
  }
}

export default {
  state: {
    names: [
      {
        id: 'name412',
        title: 'Burger',
        operators: {
          megafon: 'Модерация',
          beeline: '500 р.',
          tele2: '800 р.',
          mts: 'Отклонено',
          others: 'Отклонено'
        }
      },
      {
        id: 'name41',
        title: 'king',
        operators: {
          megafon: 'Модерация',
          beeline: '500 р.',
          tele2: '800 р.',
          mts: 'Отклонено',
          others: 'Отклонено'
        }
      },
      {
        id: 'name12',
        title: 'Bk',
        operators: {
          megafon: 'Модерация',
          beeline: '500 р.',
          tele2: '800 р.',
          mts: 'Отклонено',
          others: 'Отклонено'
        }
      },
      {
        id: 'name4122',
        title: 'Bg',
        operators: {
          megafon: 'Модерация',
          beeline: '500 р.',
          tele2: '800 р.',
          mts: 'Отклонено',
          others: 'Отклонено'
        }
      },
      {
        id: 'nam2',
        title: '041',
        operators: {
          megafon: 'Модерация',
          beeline: '500 р.',
          tele2: '800 р.',
          mts: 'Отклонено',
          others: 'Отклонено'
        }
      }
    ]
  },

  mutations: {
    addNameState(state, payload) {
      state.names.unshift(payload)
    },

    deleteNameState(state, payload) {
      const target = state.names.findIndex(name => name.id === payload)
      state.names.splice(target, 1)
    }
  },

  actions: {
    async addName({commit}, payload) {
      try {
        const newName = new Name(payload.id, payload.title)
        commit('addNameState', {
          id: newName.id,
          title: newName.title,
          operators: {
            megafon: 'Модерация',
            beeline: 'Модерация',
            tele2: 'Модерация',
            mts: 'Модерация',
            others: 'Модерация'
          }
        })
      } catch(err) {
        console.log(err)
      }
    },

    async deleteName({commit}, payload) {
      commit('deleteNameState', payload)
    }
  },

  getters: {
    getNames(state) {
      return state.names
    },

    getFirstNames(state) {
      const ar = state.names.slice()
      return ar.slice(0, 3)
    }
  }
}
