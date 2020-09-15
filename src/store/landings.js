class Landing {
  constructor(id, name, title, subtitle, inputs, image, btn, iconColor, success) {
    this.id = id
    this.name = name
    this.title = title
    this.subtitle = subtitle
    this.inputs = inputs
    this.btn = btn
    this.image = image
    this.iconColor = iconColor
    this.success = success
  }
}

export default {
  state: {
    landings: [
      {
        id: 'land1',
        conversion: 20,
        name: 'Лендинг для WA рассылок',
        title: 'Лендинг для WA рассылок',
        subtitle: 'Лендинг для WA рассылок',
        inputs: ['name', 'email'],
        btn: {
          text: 'Надпись на кнопке',
          color: '#496EB7'
        },
        image: null,
        success: {
          title: 'Благодарим за заявку',
          text: 'Ваша заявка отправлена. В ближайшее время с Вами свяжется наш менеджер'
        },
        iconColor: '#90B04C',
        transitions: 4567,
        requests: 432,
      },
      {
        id: 'land2',
        conversion: 12,
        name: 'Лендинг для telegram рассылок',
        title: 'Лендинг для telegram рассылок',
        subtitle: 'Лендинг для telegram рассылок',
        inputs: ['name'],
        btn: {
          text: 'Надпись на кнопке',
          color: '#EF3E33'
        },
        image: null,
        success: {
          title: 'Благодарим за заявку',
          text: 'Ваша заявка отправлена. В ближайшее время с Вами свяжется наш менеджер'
        },
        iconColor: '#EF3E33',
        transitions: 4567,
        requests: 432,
      },
      {
        id: 'land3',
        conversion: 8,
        name: 'Лендинг для WA рассылок',
        title: 'Лендинг для WA рассылок',
        subtitle: 'Лендинг для WA рассылок',
        inputs: ['email'],
        btn: {
          text: 'Надпись на кнопке',
          color: '#EFC633'
        },
        image: null,
        success: {
          title: 'Благодарим за заявку',
          text: 'Ваша заявка отправлена. В ближайшее время с Вами свяжется наш менеджер'
        },
        iconColor: '#EFC633',
        transitions: 4567,
        requests: 432,
      },
      {
        id: 'land4',
        conversion: 4,
        name: 'Лендинг для WA рассылок',
        title: 'Лендинг для WA рассылок',
        subtitle: 'Лендинг для WA рассылок',
        inputs: ['name', 'email'],
        btn: {
          text: 'Надпись на кнопке',
          color: '#496EB7'
        },
        image: null,
        success: {
          title: 'Благодарим за заявку',
          text: 'Ваша заявка отправлена. В ближайшее время с Вами свяжется наш менеджер'
        },
        iconColor: '#90B04C',
        transitions: 4567,
        requests: 432,
      },
      {
        id: 'land5',
        conversion: 4,
        name: 'Лендинг для рассылок',
        title: 'Лендинг для рассылок',
        subtitle: 'Лендинг для рассылок',
        inputs: ['name', 'email'],
        btn: {
          text: 'Надпись на кнопке',
          color: '#496EB7'
        },
        image: null,
        success: {
          title: 'Благодарим за заявку',
          text: 'Ваша заявка отправлена. В ближайшее время с Вами свяжется наш менеджер'
        },
        iconColor: '#90B04C',
        transitions: 4567,
        requests: 432,
      }
    ],

    landingsRecycle: [
      {
        id: 'land41',
        conversion: 1,
        name: 'Лендинг',
        title: 'Лендинг для рассылок',
        subtitle: 'Лендинг для рассылок',
        inputs: ['name'],
        btn: {
          text: 'Надпись на кнопке',
          color: '#EFC633'
        },
        image: null,
        success: {
          title: 'Благодарим за заявку',
          text: 'Ваша заявка отправлена. В ближайшее время с Вами свяжется наш менеджер'
        },
        iconColor: '#EFC633',
        transitions: 4567,
        requests: 432,
      },
      {
        id: 'land55',
        conversion: 50,
        name: 'Лендинг для рассылок',
        title: 'Лендинг для рассылок',
        subtitle: 'Лендинг для рассылок',
        inputs: ['name', 'email'],
        btn: {
          text: 'Надпись на кнопке',
          color: '#496EB7'
        },
        image: null,
        success: {
          title: 'Благодарим за заявку',
          text: 'Ваша заявка отправлена. В ближайшее время с Вами свяжется наш менеджер'
        },
        iconColor: '#90B04C',
        transitions: 4567,
        requests: 432,
      }
    ]
  },

  mutations: {
    addLandingsState(state, payload) {
      state.landings.unshift(payload)
    },

    editLandingState(state, payload) {
      const index = state.landings.findIndex(landing => landing.id === payload)
      state.landings.splice(index, 1, payload)
    },

    deleteLandingState(state, payload) {
      const target = state.landings.findIndex(landing => landing.id === payload.id)
      state.landings.splice(target, 1)
      state.landingsRecycle.unshift(payload)
    },

    recoverLandingState(state, payload) {
      const index = state.landingsRecycle.findIndex(landing => landing.id === payload)
      const target = state.landingsRecycle.find(landing => landing.id === payload)
      state.landingsRecycle.splice(index, 1)
      state.landings.unshift(target)
    }
  },

  actions: {
    async addLanding({commit}, payload) {
      try {
        const newLanding = new Landing(payload.id, payload.name, payload.title, payload.subtitle, payload.inputs, payload.image, payload.btn, payload.iconColor, payload.success)
        commit('addLandingsState', {...newLanding})
      } catch(err) {
        console.log(err)
      }
    },

    async editLanding({commit}, payload) {
      commit('editLandingState', payload)
    },

    async deleteLanding({commit}, payload) {
      commit('deleteLandingState', payload)
    },

    async recoverLanding({commit}, payload) {
      commit('recoverLandingState', payload)
    },
  },

  getters: {
    getLandings(state) {
      return state.landings
    },

    getLanding(state) {
      return id => {
        return state.landings.find(land => land.id === id)
      }
    },

    getLandingsRecycle(state) {
      return state.landingsRecycle
    }
  }
}
