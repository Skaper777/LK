<template>
  <div class="name-form popup" v-if="show">
    <div class="popup__blur" @click="closePopup"></div>
    <div class="popup__wrapper popup__wrapper--small">
      <div class="popup__close" @click="closePopup"></div>
      <h2>Добавление имени отправителя</h2>
      <div class="name-form__steps steps">
        <p>{{step}} шаг из 3</p>
        <div class="name-form__dots dots">
          <span
            class="dots__dot"
            v-for="(i, index) of 3"
            :key="index"
            :class="index < step ? 'dots__dot--active' : false"
          ></span>
        </div>
      </div>

      <!--1 step-->
      <div class="name-form__step name-form__step--first" v-show="step === 1">
        <div class="name-form__block">
          <h3>Укажите имя отправителя</h3>
          <p>Укажите имя отправителя, которое бы вы хотели использовать для рассылок</p>
          <Input plchldr="Имя отправителя" v-model="name.title" />
        </div>
        <div class="name-form__block">
          <h3>Выберете тариф</h3>
          <div class="name-form__tabs channels-tabs">
            <input type="radio" name="channels" value="SMS" id="nameCommon" />
            <label for="nameCommon">Общий</label>
            <input type="radio" name="channels" value="Whatsapp" id="nameAd" />
            <label for="nameAd">Профи: Рекламный</label>
            <input type="radio" name="channels" value="Voice" id="nameService" />
            <label for="nameService">Профи: Сервисный</label>
          </div>
          <p>Тариф общий подходит для отправки каких то там сообщений и имеет какие то там ограничения. Если Вам это не подходит выберете другой тариф</p>
        </div>
      </div>

      <!--2 step-->
      <div class="name-form__step" v-show="step === 2">
        <div class="name-form__block">
          <h3>Заключение договора</h3>
          <p>
            Для заключения договора необходимо ввести реквизиты юридического лица, за которым будет закреплено новое имя отправителя
          </p>
          <div class="select-wrapper">
            <multiselect
              class="select"
              :show-labels="false"
              v-model="name.entity"
              placeholder="Наименование юридического лица"
              :options="entities">
            </multiselect>
          </div>
          <div class="name-form__inputs">
            <Input plchldr="ИНН" v-model="name.inn" wrapperClass="input-wrapper--half" />
            <Input plchldr="ОГРН" v-model="name.ogrn" wrapperClass="input-wrapper--half" />
            <Input plchldr="КПП" v-model="name.kpp" wrapperClass="input-wrapper--half" />
            <Input plchldr="БИК" v-model="name.bik" wrapperClass="input-wrapper--half" />
            <Input plchldr="Банковские реквизиты" v-model="name.details" />
            <Input plchldr="Юридический адрес" v-model="name.address" />
          </div>
        </div>
      </div>

      <!--3 step-->
      <div class="name-form__step" v-show="step === 3">
        <div class="name-form__block">
          <h3>Прикрепите необходимые документы</h3>
          <p>Для подтверждения перед операторами права использования выбранного Вами имени отправителя понадобятся следующие документы:</p>
          <div class="name-form__attaches">
            <div class="name-form__attach">
              <Button btnText="Прикрепить {название документа}" btnSvg="plus" wrapperClass="button-wrapper--narrow" />
              <span>что за документ, зачем нужен</span>
            </div>
            <div class="name-form__attach">
              <Button btnText="Прикрепить {название документа}" btnSvg="plus" wrapperClass="button-wrapper--narrow" />
              <span>что за документ, зачем нужен</span>
            </div>
            <div class="name-form__attach">
              <Button btnText="Прикрепить {название документа}" btnSvg="plus" wrapperClass="button-wrapper--narrow" />
              <span>что за документ, зачем нужен</span>
            </div>
          </div>
        </div>
      </div>

      <div class="name-form__buttons">
        <Button v-if="step > 1" btnText="Назад" btnSvg="arrow" wrapperClass="button-wrapper--text" />
        <Button v-if="step < 3" btnText="Продолжить" @func="stepPlus" btnSvg="arrow" />
        <Button v-else btnText="Отправить на модерацию" @func="saveName" wrapperClass="button-wrapper--no-svg button-wrapper--green" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../forms/Input";
import Button from "../forms/Button";

export default {
  name: "Name-form",
  components: {
    Input,
    Button
  },
  data() {
    return {
      show: false,
      step: 1,

      entities: [
        'var1',
        'var2',
        'var3'
      ],

      nameEmpty: {},

      name: {
        id: '',
        title: '',
        entity: '',
        inn: '',
        ogrn: '',
        kpp: '',
        bik: '',
        details: '',
        address: '',
      }
    };
  },

  methods: {
    closePopup() {
      this.show = false;
    },

    stepPlus() {
      this.step++
    },

    saveName() {
      if (!this.name.id) this.name.id = 'name' + Math.random().toString(36).substr(2, 9)

      this.$store.dispatch('addName', this.name)
        .then(() => {
          this.step = 1
          this.name = this.nameEmpty
          this.closePopup()
        })
    }
  },

  mounted() {
    this.$eventHub.$on("openNamePopup", () => {
      this.show = true;
    });
  }
};
</script>

<style lang="sass" scoped>
.name-form
  .popup__wrapper
    h2
      margin-bottom: 23px

    h3
      font-size: 16px
      font-weight: 500
      margin-bottom: 12px

  .button-wrapper--text
    margin-right: 20px

  .select-wrapper
    margin-top: 20px
    align-self: flex-start

  .select-wrapper,
  .input-wrapper
    margin-bottom: 20px

  &__steps
    width: 145px

  &__step
    &--first
      .input-wrapper
        width: 424px

  &__inputs
    display: flex
    justify-content: space-between
    flex-wrap: wrap

  &__attaches
    margin-top: 20px

  &__attach
    margin-bottom: 10px

    .button-wrapper
      margin-right: 17px

    span
      color: $text-blur
      font-size: 12px

  &__block
    display: flex
    flex-direction: column
    margin-bottom: 40px

    p
      margin-bottom: 10px

  &__tabs
      margin-bottom: 20px

</style>
