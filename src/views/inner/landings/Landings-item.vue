<template>
  <main>
    <section class="landing-item">
      <div class="container">
        <Button @func="$router.push('.')" btnText="Назад" btnSvg="arrow" class="landing-item__back" wrapperClass="button-wrapper--text" />
        <div class="landing-item__wrapper">
          <h2>Лендинг для WA рассылок</h2>
          <div class="mobile">
            <div class="mobile__wrapper">
              <div>
                <div class="mobile__image">
                  <svg
                    width="224"
                    height="154"
                    viewBox="0 0 224 154"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M205.46 0.133057H18.5487C8.31885 0.133057 0 8.44917 0 18.6911V135.33C0 145.56 8.31885 153.867 18.5487 153.867H205.459C215.689 153.867 223.999 145.56 223.999 135.33V18.6911C224 8.44917 215.69 0.133057 205.46 0.133057ZM136.051 27.7325C145.944 27.7325 153.966 35.756 153.966 45.6482C153.966 55.5405 145.943 63.564 136.051 63.564C126.155 63.564 118.135 55.5405 118.135 45.6482C118.135 35.756 126.155 27.7325 136.051 27.7325ZM169.643 136.721H111.998H56.922C51.9739 136.721 49.7703 133.141 52.0008 128.725L82.7476 67.8253C84.9754 63.4092 89.2213 63.015 92.2281 66.9441L123.145 107.348C126.152 111.277 131.407 111.612 134.886 108.091L142.449 100.432C145.925 96.9113 151.046 97.3472 153.882 101.399L173.468 129.375C176.299 133.434 174.591 136.721 169.643 136.721Z"
                      fill="#C4C4C4"
                    />
                  </svg>
                </div>
                <div class="mobile__titles">
                  <h3>{{landing.title}}</h3>
                  <h4>{{landing.subtitle}}</h4>
                </div>
                <div class="mobile__inputs">
                  <Input
                    v-for="(input, index) in landing.inputs"
                    :key="index"
                    :plchldr="input"
                    :onlyRead="true"
                  />
                </div>
              </div>
              <div class="mobile__button">
                <input :style="`background: ${landing.btn.color}`" type="text" :placeholder="landing.btn.text" readonly>
              </div>
            </div>
          </div>

          <div class="landing-item__actions">
            <Button @func="removeLanding" btnText="Удалить" btnSvg="plus" wrapperClass="button-wrapper--text button-wrapper--error" />
            <Button @func="copyLanding" btnText="Дублировать" btnSvg="copy" wrapperClass="button-wrapper--text" />
            <Button @func="editLanding" btnText="Редактировать" btnSvg="edit" wrapperClass="button-wrapper--text" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";

export default {
  name: "Landings-item",
  props: ["id"],
  components: {
    Button,
    Input
  },

  data() {
    return {
      landing: {}
    }
  },

  beforeMount() {
    this.landing = this.$store.getters.getLanding(this.id);
  },

  methods: {
    editLanding() {
      this.$router.push({
        path: `edit/${this.id}`
      })
    },

    copyLanding() {
      this.$store.dispatch('addLanding', this.landing)
      .then(() => {
        this.$router.push('.')
      })
    },

    removeLanding() {
      this.$store.dispatch('deleteLanding', this.landing)
      .then(() => {
        this.$router.push('.')
      })
    }
  },

  mounted() {
    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
};
</script>

<style lang="sass" scoped>
.landing-item
  padding-top: 40px

  .container
    position: relative

  &__back
    position: absolute
    left: 150px
    top: 20px

  &__wrapper
    width: 610px
    margin: 0 auto
    background: $modal-bg
    padding: 23px 36px 43px 36px
    box-shadow: 0px 25px 54px #000000
    border-radius: 10px

    h2
      margin-bottom: 40px

    .mobile
      margin: 0 auto
      margin-bottom: 40px

  &__actions
    width: 350px
    margin: 0 auto
    display: flex
    justify-content: space-between


// WHITE

.white
  .landing-item
    &__wrapper
      background: white
      box-shadow: 0px 12px 46px rgba(74, 30, 30, 0.16)


</style>
