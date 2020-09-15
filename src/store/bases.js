class Base {
  constructor(id, title, numbers) {
    this.id = id
    this.title = title
    this.numbers = numbers
  }
}

export default {
  state: {
    bases: [
      {
        id: 'base0',
        rating: 5,
        title: 'Название базы',
        numbers: [
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: false,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: true,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: true,
              whatsapp: true,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: true,
              whatsapp: false,
              viber: true
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
        ]
      },
      {
        id: 'base1',
        title: 'Название базы',
        rating: 4,
        numbers: [
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: true,
              whatsapp: true,
              viber: true
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: false,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: false,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: true,
              whatsapp: false,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
        ]
      },
      {
        id: 'base2',
        title: 'Название базы',
        rating: 3,
        numbers: [
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: true,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: true,
              whatsapp: false,
              viber: true
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: false,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: false,
              viber: true
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
        ]
      },
      {
        id: 'base3',
        title: 'Название базы',
        rating: 2,
        numbers: [
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: false,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: false,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: false,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: false,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
        ]
      },
      {
        id: 'base4',
        title: 'Название базы',
        rating: 1,
        numbers: [
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: false,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: true,
              whatsapp: false,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: false,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
          {
            name: 'Александр',
            num: '+7 922 999 99 99',
            socs: {
              telega: false,
              whatsapp: false,
              viber: false
            },
            operator: 'Мегафон',
            birthDate: '20.07.1990'
          },
        ]
      }
    ],

    blackList: {
      bases: [
        {
          id: 'baseBlack0',
          rating: 5,
          title: 'Название базы',
          numbers: [
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: true,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: true,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: false,
                viber: true
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
          ]
        },
        {
          id: 'baseBlack1',
          title: 'Название базы',
          rating: 4,
          numbers: [
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: true,
                viber: true
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
          ]
        },
        {
          id: 'baseBlack2',
          title: 'Название базы',
          rating: 3,
          numbers: [
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: true,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: false,
                viber: true
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: true
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
          ]
        },
        {
          id: 'baseBlack3',
          title: 'Название базы',
          rating: 2,
          numbers: [
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
          ]
        },
        {
          id: 'baseBlack4',
          title: 'Название базы',
          rating: 1,
          numbers: [
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
          ]
        }
      ],
      phones: [
        {
          name: 'Александр',
          num: '+7 922 999 99 99',
          socs: {
            telega: false,
            whatsapp: true,
            viber: false
          },
          operator: 'Мегафон',
          birthDate: '20.07.1990'
        },
        {
          name: 'Александр',
          num: '+7 922 999 99 99',
          socs: {
            telega: true,
            whatsapp: false,
            viber: false
          },
          operator: 'Мегафон',
          birthDate: '20.07.1990'
        },
        {
          name: 'Александр',
          num: '+7 922 999 99 99',
          socs: {
            telega: false,
            whatsapp: false,
            viber: true
          },
          operator: 'Мегафон',
          birthDate: '20.07.1990'
        },
        {
          name: 'Александр',
          num: '+7 922 999 99 99',
          socs: {
            telega: false,
            whatsapp: false,
            viber: false
          },
          operator: 'Мегафон',
          birthDate: '20.07.1990'
        },
        {
          name: 'Александр',
          num: '+7 922 999 99 99',
          socs: {
            telega: true,
            whatsapp: false,
            viber: false
          },
          operator: 'Мегафон',
          birthDate: '20.07.1990'
        },
        {
          name: 'Александр',
          num: '+7 922 999 99 99',
          socs: {
            telega: false,
            whatsapp: false,
            viber: true
          },
          operator: 'Мегафон',
          birthDate: '20.07.1990'
        },
      ]
    },

    recycle: {
      bases: [
        {
          id: 'baseBlack0',
          rating: 5,
          title: 'Название базы',
          numbers: [
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: true,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: true,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: false,
                viber: true
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
          ]
        },
        {
          id: 'baseBlack1',
          title: 'Название базы',
          rating: 4,
          numbers: [
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: true,
                viber: true
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
          ]
        },
        {
          id: 'baseBlack2',
          title: 'Название базы',
          rating: 3,
          numbers: [
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: true,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: false,
                viber: true
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: true
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
          ]
        },
        {
          id: 'baseBlack3',
          title: 'Название базы',
          rating: 2,
          numbers: [
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
          ]
        },
        {
          id: 'baseBlack4',
          title: 'Название базы',
          rating: 1,
          numbers: [
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
          ]
        }
      ],
      phones: [
        {
          name: 'Александр',
          num: '+7 922 999 99 99',
          socs: {
            telega: false,
            whatsapp: true,
            viber: false
          },
          operator: 'Мегафон',
          birthDate: '20.07.1990'
        },
        {
          name: 'Александр',
          num: '+7 922 999 99 99',
          socs: {
            telega: true,
            whatsapp: false,
            viber: false
          },
          operator: 'Мегафон',
          birthDate: '20.07.1990'
        },
        {
          name: 'Александр',
          num: '+7 922 999 99 99',
          socs: {
            telega: false,
            whatsapp: false,
            viber: true
          },
          operator: 'Мегафон',
          birthDate: '20.07.1990'
        },
        {
          name: 'Александр',
          num: '+7 922 999 99 99',
          socs: {
            telega: false,
            whatsapp: false,
            viber: false
          },
          operator: 'Мегафон',
          birthDate: '20.07.1990'
        },
        {
          name: 'Александр',
          num: '+7 922 999 99 99',
          socs: {
            telega: true,
            whatsapp: false,
            viber: false
          },
          operator: 'Мегафон',
          birthDate: '20.07.1990'
        },
        {
          name: 'Александр',
          num: '+7 922 999 99 99',
          socs: {
            telega: false,
            whatsapp: false,
            viber: true
          },
          operator: 'Мегафон',
          birthDate: '20.07.1990'
        },
      ]
    }
  },

  mutations: {
    addBaseState(state, payload) {
      state.bases.unshift(payload)
    }
  },

  actions: {
    async addBase({commit}, payload) {
      try {
        const newBase = new Base(payload.id, payload.title)
        commit('addBaseState', {
          id: newBase.id,
          title: newBase.title,
          numbers: [
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: false,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: false,
                whatsapp: true,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: true,
                viber: false
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
            {
              name: 'Александр',
              num: '+7 922 999 99 99',
              socs: {
                telega: true,
                whatsapp: false,
                viber: true
              },
              operator: 'Мегафон',
              birthDate: '20.07.1990'
            },
          ]
        })
      } catch (error) {
        console.log(error)
      }
    }
  },

  getters: {
    getBases(state) {
      return state.bases
    },

    getBase(state) {
      return id => state.bases.find(base => base.id === id)
    },

    getBlackBases(state) {
      return state.blackList.bases
    },

    getFirstBases(state) {
      const ar = state.bases.slice()
      return ar.slice(0, 3)
    },

    getFirstBlackBases(state) {
      const ar = state.blackList.bases.slice()
      return ar.slice(0, 3)
    },

    getPhones(state) {
      return state.blackList.phones
    },

    getRecycleBases(state) {
      return state.recycle.bases
    },

    getRecyclePhones(state) {
      return state.recycle.phones
    },
  }
}
