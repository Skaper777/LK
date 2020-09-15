export const getClass = {
  methods: {
    getClass(title) {
      if (title === 'Отправлено') return 'mailing-block__sent'
      else if (title === 'Доставлено') return 'mailing-block__fact'
      else if (title === 'Тёплые') return 'mailing-block__warm'
      else if (title === 'В работе') return 'mailing-block__inwork'
      else if (title === 'Продажа') return 'mailing-block__sale'
    }
  }
}
