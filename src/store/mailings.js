class Mailing {
  constructor(id, date, title, total, operators, totalPrice, message) {
    this.id = id
    this.date = date
    this.title = title
    this.total = total
    this.operators = operators
    this.totalPrice = totalPrice
    this.message = message
  }
}

export default {
  state: {
    mailings: [
      {
        id: 'mail01',
        status: 'На очереди',
        date: 1995015323892,
        title: "Рассылка SMS/Multi SMS",
        total: 7567,
        message: '',
        operators: [{
            title: 'Мегафон',
            method: {
              name: 'Брендовое имя отправителя',
              price: 2.35
            }
          },
          {
            title: 'Мтс',
            method: {
              name: 'Брендовое имя отправителя',
              price: 2.5
            }
          },
          {
            title: 'Tele2',
            method: {
              name: 'Брендовое имя отправителя',
              price: 1.15
            }
          },
          {
            title: 'Билайн',
            method: {
              name: 'Брендовое имя отправителя',
              price: 0.1
            }
          },
          {
            title: 'Другие',
            method: {
              name: 'Брендовое имя отправителя',
              price: 2.3
            }
          }
        ],
        stats: [{
            title: 'Отправлено'
          },
          {
            title: 'Доставлено'
          }
        ]
      },
      {
        id: 'mail001',
        status: 'На очереди',
        date: 1995015323892,
        title: "Рассылка SMS/Multi SMS",
        total: 7567,
        message: '',
        operators: [{
            title: 'Мегафон',
            method: {
              name: 'Брендовое имя отправителя',
              price: 2.35
            }
          },
          {
            title: 'Мтс',
            method: {
              name: 'Брендовое имя отправителя',
              price: 2.5
            }
          },
          {
            title: 'Tele2',
            method: {
              name: 'Брендовое имя отправителя',
              price: 1.15
            }
          },
          {
            title: 'Билайн',
            method: {
              name: 'Брендовое имя отправителя',
              price: 0.1
            }
          },
          {
            title: 'Другие',
            method: {
              name: 'Брендовое имя отправителя',
              price: 2.3
            }
          }
        ],
        stats: [
          {
            title: 'Отправлено',
          },
          {
            title: 'Доставлено'
          },
          {
            title: 'Тёплые'
          },
          {
            title: 'В работе'
          },
          {
            title: 'Продажа'
          }
        ]
      },
      {
        id: 'mail02',
        status: 'На очереди',
        date: 1959035323892,
        title: "Рассылка Turbo SMS",
        total: 7567,
        message: '',
        operators: [{
            title: 'Мегафон',
            method: {
              name: 'Брендовое имя отправителя',
              price: 2.35
            }
          },
          {
            title: 'Мтс',
            method: {
              name: 'Брендовое имя отправителя',
              price: 2.5
            }
          },
          {
            title: 'Tele2',
            method: {
              name: 'Брендовое имя отправителя',
              price: 1.15
            }
          },
          {
            title: 'Билайн',
            method: {
              name: 'Брендовое имя отправителя',
              price: 0.1
            }
          },
          {
            title: 'Другие',
            method: {
              name: 'Брендовое имя отправителя',
              price: 2.3
            },

          }
        ],
        stats: [{
            title: 'Отправлено'
          },
          {
            title: 'Доставлено'
          }
        ]
      },
      {
        id: 'mail03',
        status: 'Завершена',
        date: Date.now(),
        title: "Рассылка Teelgram",
        total: 9567,
        stats: [{
            title: 'Отправлено',
            msgs: '7000'
          },
          {
            title: 'Доставлено',
            msgs: '3567'
          }
        ]
      },
      {
        id: 'mail04',
        status: 'Идёт',
        date: Date.now(),
        title: "Рассылка Multi SMS",
        total: 7967,
        stats: [{
            title: 'Отправлено',
            msgs: '6000'
          },
          {
            title: 'Доставлено',
            msgs: '4547'
          }
        ]
      },
      {
        id: 'mail05',
        status: 'Идёт',
        date: Date.now(),
        title: "Рассылка Viber",
        total: 5567,
        stats: [{
            title: 'Отправлено',
            msgs: '5000'
          },
          {
            title: 'Доставлено',
            msgs: '4167'
          }
        ]
      },
      {
        id: 'mail06',
        status: 'Проведена',
        date: 1495015323892,
        title: "Рассылка SMS/Multi SMS",
        rating: 4,
        total: 5567,
        stats: [{
            title: 'Отправлено',
            msgs: '5000'
          },
          {
            title: 'Доставлено',
            msgs: '4167'
          },
          {
            title: 'Тёплые',
            msgs: '3000'
          }
        ]
      },
      {
        id: 'mail07',
        status: 'Проведена',
        date: 1495015323892,
        title: "Рассылка SMS",
        rating: 5,
        total: 6000,
        stats: [{
            title: 'Отправлено',
            msgs: '5500'
          },
          {
            title: 'Доставлено',
            msgs: '3167'
          },
          {
            title: 'Тёплые',
            msgs: '3000'
          },
          {
            title: 'В работе',
            msgs: '2500'
          }
        ]
      },
      {
        id: 'mail08',
        status: 'Проведена',
        date: 1455015323892,
        title: "Рассылка SMS",
        rating: 2,
        total: 10000,
        stats: [
          {
            title: 'Отправлено',
            msgs: '7500'
          },
          {
            title: 'Доставлено',
            msgs: '5167'
          },
          {
            title: 'Тёплые',
            msgs: '5000'
          },
          {
            title: 'В работе',
            msgs: '4500'
          },
          {
            title: 'Продажа',
            msgs: '3500'
          }
        ]
      },
      {
        id: 'mail09',
        status: 'Проведена',
        date: 1395015323892,
        title: "Рассылка мессаджеры",
        rating: 3,
        total: 12000,
        stats: [{
            title: 'Отправлено',
            msgs: '8500'
          },
          {
            title: 'Доставлено',
            msgs: '7167'
          },
          {
            title: 'Тёплые',
            msgs: '6000'
          },
          {
            title: 'В работе',
            msgs: '5500'
          },
          {
            title: 'Продажа',
            msgs: '4500'
          }
        ]
      }
    ]
  },

  mutations: {
    addMailingState(state, payload) {
      state.mailings.unshift(payload)
    }
  },

  actions: {
    async addMailing({
      commit
    }, payload) {
      try {
        const newMailing = new Mailing(payload.id, payload.date, payload.title, payload.bases, payload.operators, payload.totalPrice, payload.message)
        commit('addMailingState', {
          id: newMailing.id,
          date: newMailing.date,
          title: newMailing.title,
          total: newMailing.bases,
          status: 'На очереди',
          operators: newMailing.operators,
          totalPrice: newMailing.totalPrice,
          message: newMailing.message,
          stats: [{
              title: 'Отправлено'
            },
            {
              title: 'Доставлено'
            }
          ]
        })
      } catch (err) {
        console.log(err)
      }
    },
  },

  getters: {
    getPastMailings(state) {
      return state.mailings.filter(mail => mail.status === 'Проведена').sort((a, b) => b.date - a.date)
    },

    getFutureMailings(state) {
      return state.mailings.filter(mail => mail.status === 'На очереди').sort((a, b) => a.date - b.date)
    },

    getCurrentMailings(state) {
      return state.mailings.filter(mail => mail.status === 'Идёт').sort((a, b) => a.date - b.date)
    },

    getComplitedMailings(state) {
      return state.mailings.filter(mail => mail.status === 'Завершена').sort((a, b) => a.date - b.date)
    },

    getMailing(state) {
      return id => state.mailings.find(mail => mail.id === id)
    },

    getMailingStatInfo(state) {
      return (id, title) => {
        const targ = state.mailings.find(mail => mail.id === id)
        return targ.stats.find(stat => stat.title === title)
      }
    }
  }
}
