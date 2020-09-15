export const getPercents = {
  methods: {
    getPercents(total, fact) {
      return Math.round(fact / total * 100)
    }
  }
}
