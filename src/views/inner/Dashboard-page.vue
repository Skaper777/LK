<template>
  <main class="dashboard">
    <div class="container">
      <Balance/>

      <Stats/>

      <div class="dashboard__past-mailing">
        <header>
          <h2>Прошедшие рассылки</h2>
          <Button @func="$router.push('mailing/all')" btnText="Все рассылки" btnSvg="dots" wrapperClass="button-wrapper--narrow" />
        </header>
        <ul>
          <li v-for="mailing in pastMailings" :key="mailing.id">
            <PastMailing
              :mailing="mailing"
            />
          </li>
        </ul>
      </div>

      <div class="dashboard__blocks">
        <div class="dashboard__blocks-item dashboard__blocks-left">
          <header>
            <h2>Предстоящие рассылки</h2>
          </header>
          <ul>
            <li v-for="mail in futureMailings" :key="mail.id">
              <FutureMailing :mailing="mail" :compact="true" />
            </li>
          </ul>
        </div>
        <div class="dashboard__blocks-item dashboard__blocks-right">
          <header>
            <h2>История пополнений и списаний</h2>
            <Button @func="$router.push('finance')" btnText="Все операции" btnSvg="dots" wrapperClass="button-wrapper--narrow" />
          </header>
          <ul>
            <li v-for="(event, index) in events" :key="index">
              <History :event="event" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Balance from '@/components/finance/Balance'
import Button from '@/components/forms/Button'
import PastMailing from "@/components/mailing/Past-mailing";
import FutureMailing from "@/components/mailing/Future-mailing";
import History from "@/components/finance/History-item";
import Stats from "@/components/dashboard/Stats";

export default {
  name: 'Dashboard',
  components: {
    Balance,
    Button,
    PastMailing,
    FutureMailing,
    History,
    Stats
  },

  computed: {
    pastMailings() {
      return this.$store.getters.getPastMailings.slice(0, 2)
    },

    futureMailings() {
      return this.$store.getters.getFutureMailings;
    },

    events() {
      return this.$store.getters.getHistoryEvents;
    }
  },

  mounted() {
    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
}
</script>

<style lang="sass" scoped>
.dashboard
  header
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 15px

    @media(max-width: 1024px)
      flex-wrap: wrap

    .button-wrapper
      margin-left: 20px

      @media(max-width: 1024px)
        margin-left: 0

  &__past-mailing
    margin-bottom: 45px

    @media(max-width: 1024px)
      display: none

    h2
      @media(max-width: 1280px)
        font-size: 16px

  &__blocks
    display: flex
    justify-content: space-between

    @media(max-width: 1240px)
      flex-wrap: wrap

    &-item
      width: 49%

      @media(max-width: 1240px)
        width: 100%

      h2
        @media(max-width: 1280px)
          font-size: 16px

    &-left
      @media(max-width: 1024px)
        display: none

      header
        margin-bottom: 30px

</style>
