export default {
  state: {
    profile: {
      name: 'Иван',
      surname: 'Иванов',
      phone: '+7 355 667 34 67',
      email: 'test@test.ru',
      password: '11111'
    },

    card: {
      number: '3455 5467 3455 6578 7688',
      owner: 'IVAN PETROV',
      date: '10/16',
      cvc: 333
    },

    requisites: {
      inn: '3455 5467 3455 6578 ',
      kpp: '3455 5467 3455 6578 ',
      name: 'ООО РОГА И КОПЫТА',
      address: 'test address',
      bankReqs: '3455 5467 3455 6578'
    },

    contracts: [
      {
        id: 'contract1',
        title: 'Договор на мобильный маркетинг',
        status: 'Не подписан'
      },
      {
        id: 'contract2',
        title: 'Договор на мобильный маркетинг',
        status: 'Подписан'
      },
      {
        id: 'contract3',
        title: 'Договор на мобильный маркетинг',
        status: 'Подписан'
      }
    ],

    otherDocs: [
      {
        title: 'Какой то документ который можно просмотреть'
      },
      {
        title: 'Какой то документ который можно просмотреть'
      },
      {
        title: 'Какой то документ который можно просмотреть'
      }
    ]
  },

  mutations: {
    changeProfileState(state, payload) {
      state.profile[payload.target] = payload.data
    },

    changeCardState(state, payload) {
      state.card = payload
    },

    changeReqsState(state, payload) {
      state.requisites = payload
      console.log(state.requisites)
    },

    changeContractStatus(state, id) {
      state.contracts.find(item => item.id === id).status = 'Подписан'
    }
  },

  actions: {
    async changeProfile({commit}, payload) {
      try {
        commit('changeProfileState', payload)
      } catch (error) {
        console.log(error)
      }
    },

    async changeCard({commit}, payload) {
      try {
        commit('changeCardState', payload)
      } catch (error) {
        console.log(error)
      }
    },

    async changeReqs({commit}, payload) {
      try {
        commit('changeReqsState', payload)
      } catch (error) {
        console.log(error)
      }
    },

    async changeStatus({commit}, id) {
      try {
        commit('changeContractStatus', id)
      } catch (error) {
        console.log(error)
      }
    }
  },

  getters: {
    getFullName(state) {
      return state.profile.name + ' ' + state.profile.surname
    },

    getProfile(state) {
      return state.profile
    },

    getCard(state) {
      return state.card
    },

    getReqs(state) {
      return state.requisites
    },

    getContracts(state) {
      return state.contracts
    },

    getOtherDocs(state) {
      return state.otherDocs
    }
  }
}
