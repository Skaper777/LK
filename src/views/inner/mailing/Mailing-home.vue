<template>
  <main>

    <div class="mailing-page container">
      <Tabs :tabs="tabs" />
      <transition name="fade" mode="out-in">
        <div class="mailing-page__create" v-if="tabs[0].show" key="left">
          <div class="mailing-page__create-left">
            <Banner />
            <Form/>
          </div>
          <div class="mailing-page__create-right">
            <LastMailings />
          </div>
        </div>

        <div class="mailing-page__auto" v-else key="right">
          <AutoMailings />
        </div>
      </transition>
    </div>

  </main>
</template>

<script>
import Tabs from "@/components/page-chunks/Tabs";
import Banner from "@/components/page-chunks/Banner";
import LastMailings from "@/components/mailing/Last-mailings";
import Form from "@/components/mailing/Mailing-form";
import AutoMailings from "@/components/auto-mailing/Auto-mailings";

export default {
  name: "Mailing-page",
  components: {
    Tabs,
    Banner,
    LastMailings,
    Form,
    AutoMailings
  },

  data() {
    return {
      tabs: [
        {
          name: "Создать рассылку",
          show: true
        },
        {
          name: "Авто рассылки",
          show: false
        }
      ]
    };
  },

  mounted() {
    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
};
</script>

<style lang="sass" scoped>
.mailing-page
  padding-top: 20px

  @media(max-width: 1240px)
    padding-top: 0

  &__create
    display: grid
    grid-template-columns: 3fr 1fr
    grid-column-gap: 50px
    margin-top: 30px

    @media(max-width: 1410px)
      grid-column-gap: 30px

    @media(max-width: 1240px)
      display: flex
      margin-top: 0

    &-left
      .banner
        margin-bottom: 40px

        @media(max-width: 1240px)
          display: none

    &-right
      @media(max-width: 1240px)
        display: none

  .tabs
    @media(max-width: 1240px)
      display: none

</style>
