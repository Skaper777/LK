<template>
  <main>
    <section class="all-mailings">
      <div class="container">
        <header>
          <Button
            btnText="На экран рассылок"
            @func="closeMailings"
            btnSvg="arrow"
            wrapperClass="button-wrapper--text"
          />
          <h1>Все рассылки</h1>
        </header>
        <div class="all-mailings__future" v-if="futureMailingsList">
          <h2>Новые рассылки</h2>
          <FutureMailing
            v-for="(mailing, index) in futureMailingsList"
            :key="index"
            :mailing="mailing"
          />
        </div>
        <div class="all-mailings__past" v-if="pastMailingsList">
          <h2>Прошедшие рассылки</h2>
          <PastMailing
            v-for="(mailing, index) in pastMailings"
            :key="index"
            :mailing="mailing"
          />
        </div>
        <Button v-if="pastMailingsList.length > 3" @func="togglePastList" :btnText="this.allPastList ? 'Свернуть' : 'Показать еще'" wrapperClass="button-wrapper--no-svg" />
      </div>
    </section>
  </main>
</template>

<script>
import Button from "@/components/forms/Button";
import PastMailing from "@/components/mailing/Past-mailing";
import FutureMailing from "@/components/mailing/Future-mailing";

export default {
  name: 'All-mailings',
  components: {
    Button,
    PastMailing,
    FutureMailing
  },

  data() {
    return {
      allPastList: false,
      pastMailings: this.$store.getters.getPastMailings.slice(0, 3)
    }
  },

  computed: {
    pastMailingsList() {
      return this.$store.getters.getPastMailings
    },

    futureMailingsList() {
      return this.$store.getters.getFutureMailings
    }
  },

  methods: {
    closeMailings() {
      this.$router.push('.')
    },

    togglePastList() {
      this.allPastList = !this.allPastList
      if(this.allPastList) this.pastMailings = this.pastMailingsList
      else this.pastMailings = this.pastMailingsList.slice(0, 3)
    }
  },

  mounted() {
    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
}
</script>

<style lang="sass" scoped>
.all-mailings
  padding-top: 20px

  header
    display: flex
    align-items: center
    margin-bottom: 25px

    h1
      margin-left: 20px

  h2
    margin-bottom: 10px

  &__future
    margin-bottom: 30px

  &__past
    margin-bottom: 20px

</style>
