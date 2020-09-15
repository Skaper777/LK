export const getIcon = {
  methods: {
    getIcon(title) {
      if (title === "Отправлено") return "sent";
      else if (title === "Доставлено") return "fact";
      else if (title === "Тёплые") return "warm";
      else if (title === "В работе") return "inWork";
      else if (title === "Продажа") return "sale";
    }
  }
}
