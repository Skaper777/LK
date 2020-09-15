export const getColor = {
  methods: {
    getColor(rating) {
      if (rating === 1) return '#EF3E33'
      else if (rating === 2) return '#EFC633'
      else if (rating === 3) return '#90B04C'
      else if (rating === 4) return '#7EB483'
      else if (rating === 5) return '#439D4C'
      else return '#444745'
    }
  }
}
