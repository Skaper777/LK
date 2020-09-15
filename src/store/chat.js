class Msg {
  constructor(id, type, text, time) {
    this.ticketId = id
    this.type = type
    this.text = text
    this.time = time
  }
}

export default {
  state: {
    manager: {
      name: 'Дмитрий Крыжопольский',
      phone: '+7 325 567 67 78',
      email: 'test@test.ru'
    },

    tickets: [
      {
        id: '#345345',
        title: 'Название тикета службы поддержки',
        messages: [
          {
            type: 'income',
            text: 'Рейтинг строиться на базе информации по многим параметрам',
            time: '18:14'
          },
          {
            type: 'outcome',
            text: 'Рейтинг строиться на базе информации по многим параметрам',
            time: '19:20'
          }
        ]
      },
      {
        id: '#345346',
        title: 'Название тикета службы поддержки',
        messages: [
          {
            type: 'income',
            text: 'Рейтинг строиться на базе информации по многим параметрам',
            time: '18:14'
          },
          {
            type: 'outcome',
            text: 'Рейтинг строиться на базе информации по многим параметрам',
            time: '19:20'
          }
        ]
      },
      {
        id: '#345347',
        title: 'Название тикета службы поддержки',
        messages: [
          {
            type: 'income',
            text: 'Рейтинг строиться на базе информации по многим параметрам',
            time: '18:14'
          },
          {
            type: 'outcome',
            text: 'Рейтинг строиться на базе информации по многим параметрам',
            time: '19:20'
          }
        ]
      }
    ]
  },

  mutations: {
    addMessageState(state, payload) {
      const ticket = state.tickets.find(item => item.id === payload.ticketId)
      ticket.messages.push(payload)
    }
  },

  actions: {
    async addMessage({commit}, payload) {
      try {
        const msg = new Msg(payload.id, payload.type, payload.text, payload.time)
        commit('addMessageState', {...msg})
      } catch (error) {
        console.log(error)
      }
    }
  },

  getters: {
    getManager(state) {
      return state.manager
    },

    getTickets(state) {
      return state.tickets
    },

    getTicket(state) {
      return id => {
        return state.tickets.find(tick => tick.id === id)
      }
    }
  }
}
