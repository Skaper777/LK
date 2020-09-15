class AutoMailing {
  constructor(id, title, condition, events) {
    this.id = id
    this.title = title,
    this.condition = condition,
    this.events = events
  }
}

export default {
  state: {
    autoMailings: [
      {
        id: 1,
        title: "Доотправка через мессаджеры",
        condition: "SMS не доставлено",
        events: [
          {
            delay: "Через 2 часа",
            name: "Доотправлять через мессаджеры"
          }
        ]
      },
      {
        id: 2,
        title: "Добивка теплых клиентов",
        condition: "Оставлена заявка на посадочной странице",
        events: [
          {
            delay: "Сразу",
            name: "Отправить SMS с текстом ..."
          },
          {
            delay: "Через 1 день",
            name: "Отправить SMS с текстом ..."
          },
          {
            delay: "Через 1 день",
            name: "Отправить SMS с текстом ..."
          }
        ]
      },
      {
        id: 3,
        title: "Поздравление с днем рождения",
        condition: "У контакта из “вся база” день рождения",
        events: [
          {
            delay: "Через 9 часов",
            name: "Доотправлять через мессаджеры"
          }
        ]
      }
    ]
  },

  mutations: {
    addAutoMailingState(state, payload) {
      state.autoMailings.unshift(payload)
    },

    editAutoMailingState(state, payload) {
      const index = state.autoMailings.findIndex(mail => mail.id === payload.id)
      state.autoMailings.splice(index, 1, payload)
    },

    deleteAutoMailingState(state, payload) {
      state.autoMailings.splice(payload, 1)
    }
  },

  actions: {
    async addAutoMailing({commit}, payload) {
      try {
        const newMailing = new AutoMailing(payload.id, payload.title, payload.condition, payload.events)
        commit('addAutoMailingState', {...newMailing})
      } catch(err) {
        console.log(err)
      }
    },

    async editAutoMailing({commit}, payload) {
      commit('editAutoMailingState', payload)
    },

    async deleteAutoMailing({commit}, payload) {
      commit('deleteAutoMailingState', payload.i)
    }
  },

  getters: {
    getAutoMailings(state) {
      return state.autoMailings
    },

    getAutoMailing(state) {
      return id => {
        return state.autoMailings.find(mailing => mailing.id === id)
      }
    }
  }
}
