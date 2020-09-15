export default {
  state: {
    balance: 134700,
    credit: 132400,

    events: [
      {
        date: 1395015323892,
        sum: 20000,
        text: 'Пополение баланса личного кабинета картой'
      },
      {
        date: 1335015323892,
        sum: -20000,
        text: 'Осуществление SMS рассылки от 21.04.2020'
      },
      {
        date: 1325015323892,
        sum: 1440,
        text: 'Пополение баланса личного кабинета картой'
      },
      {
        date: 1295015323892,
        sum: -22220,
        text: 'Осуществление SMS рассылки от 21.04.2020'
      },
      {
        date: 1385015323892,
        sum: 19990,
        text: 'Пополение баланса личного кабинета картой'
      },
      {
        date: 1325015323892,
        sum: -1000,
        text: 'Осуществление SMS рассылки от 21.04.2020'
      }
    ],

    docs: [
      {
        date: 1385015323892,
        title: 'Счет от 21.04.2020 на предоставление чего то там'
      },
      {
        date: 1381015323892,
        title: 'Счет от 21.04.2020 на предоставление чего то там'
      },
      {
        date: 1382015323892,
        title: 'Счет от 21.04.2020 на предоставление чего то там'
      },
      {
        date: 1375015323892,
        title: 'Счет от 21.04.2020 на предоставление чего то там'
      },
      {
        date: 1384015323892,
        title: 'Счет от 21.04.2020 на предоставление чего то там'
      }
    ]
  },

  mutations: {
    changeEventsState(state, payload) {
      state.balance += payload.sum
      state.events.unshift(payload)
    }
  },

  actions: {
    async changeBalance({commit}, payload) {
      try {
        commit('changeEventsState', payload)
      } catch (error) {
        console.log(error)
      }
    }
  },

  getters: {
    getBalanceValue(state) {
      return state.balance
    },

    getCreditValue(state) {
      return state.credit
    },

    getHistoryEvents(state) {
      state.events.sort((a, b) => b.date - a.date)
      return state.events
    },

    getHistoryDocs(state) {
      state.docs.sort((a, b) => b.date - a.date)
      return state.docs
    }
  }
}
