<template>
  <table class="phones" :class="className" cellspacing="0">
    <tr class="phones__header">
      <th><span>Имя</span></th>
      <th><span>Номер телефона</span></th>
      <th></th>
      <th><span>Оператор</span></th>
      <th><span>День рождения</span></th>
      <th><span>Действия</span></th>
    </tr>

    <tr v-for="(phone, index) in phones" :key="index">
      <td><p>{{phone.name}}</p></td>
      <td><p>{{phone.num}}</p></td>
      <td>
        <div class="phones__socs">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.27811 9.12061L6.01345 12.8433C6.39211 12.8433 6.55611 12.6806 6.75278 12.4853L8.52811 10.7886L12.2068 13.4826C12.8814 13.8586 13.3568 13.6606 13.5388 12.8619L15.9534 1.54728L15.9541 1.54661C16.1681 0.549278 15.5934 0.159278 14.9361 0.403945L0.742785 5.83794C-0.225881 6.21394 -0.211215 6.75394 0.578118 6.99861L4.20678 8.12727L12.6354 2.85328C13.0321 2.59061 13.3928 2.73594 13.0961 2.99861L6.27811 9.12061Z" :fill="getSvgColor(phone.socs.telega)"/>
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M11.6714 9.53795L11.6654 9.58795C10.1994 8.85728 10.0461 8.75995 9.85675 9.04395C9.72542 9.24062 9.34275 9.68662 9.22742 9.81862C9.11075 9.94862 8.99475 9.95862 8.79676 9.86862C8.59676 9.76862 7.95476 9.55862 7.19476 8.87862C6.60276 8.34862 6.20542 7.69862 6.08809 7.49862C5.89276 7.16128 6.30142 7.11328 6.67342 6.40928C6.74009 6.26928 6.70609 6.15928 6.65676 6.05995C6.60676 5.95995 6.20876 4.97995 6.04209 4.58928C5.88209 4.19995 5.71742 4.24928 5.59409 4.24928C5.21009 4.21595 4.92942 4.22128 4.68209 4.47862C3.60609 5.66128 3.87743 6.88128 4.79809 8.17862C6.60742 10.5466 7.57142 10.9826 9.33409 11.588C9.81009 11.7393 10.2441 11.718 10.5874 11.6686C10.9701 11.608 11.7654 11.188 11.9314 10.718C12.1014 10.248 12.1014 9.85795 12.0514 9.76795C12.0021 9.67795 11.8714 9.62795 11.6714 9.53795Z" :fill="getSvgColor(phone.socs.whatsapp)"/>
            <path d="M13.68 2.29938C8.554 -2.65595 0.0706666 0.938043 0.0673333 7.92871C0.0673333 9.32604 0.433333 10.6887 1.13067 11.892L0 16L4.22333 14.8987C9.49333 17.7454 15.9973 13.9654 16 7.93271C16 5.81537 15.1733 3.82271 13.67 2.32538L13.68 2.29938ZM14.668 7.91071C14.664 12.9994 9.078 16.1774 4.66 13.58L4.42 13.4374L1.92 14.0874L2.59 11.6574L2.43067 11.4074C-0.318667 7.03071 2.84 1.31071 8.048 1.31071C9.81733 1.31071 11.478 2.00071 12.7287 3.25071C13.9787 4.49004 14.668 6.15071 14.668 7.91071Z" :fill="getSvgColor(phone.socs.whatsapp)"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M15.4367 9.26202C15.9141 5.24402 15.2074 2.70735 13.9327 1.56002L13.9334 1.55935C11.8761 -0.399984 4.92805 -0.689984 2.46672 1.64735C1.36139 2.79069 0.972053 4.46869 0.929386 6.54602C0.88672 8.62402 0.836053 12.5167 4.46339 13.5727H4.46672L4.46339 15.1854C4.46339 15.1854 4.43872 15.8387 4.85605 15.97C5.33339 16.1247 5.54939 15.8214 7.03405 14.048C9.51672 14.2634 11.4234 13.77 11.6401 13.698C12.1414 13.53 14.9781 13.1547 15.4367 9.26202ZM7.27872 12.9134C7.27872 12.9134 5.70739 14.8727 5.21872 15.3814C5.05872 15.5467 4.88339 15.5314 4.88605 15.2034C4.88605 14.988 4.89805 12.526 4.89805 12.526C1.82272 11.6447 2.00405 8.33002 2.03739 6.59602C2.07072 4.86135 2.38805 3.44069 3.32405 2.48402C5.48339 0.45935 11.5747 0.912017 13.1267 2.37068C15.0241 4.05269 14.3487 8.80469 14.3527 8.96669C13.9627 12.216 11.6641 12.422 11.2414 12.5627C11.0607 12.6227 9.38406 13.054 7.27872 12.9134Z" :fill="getSvgColor(phone.socs.viber)"/>
            <path d="M8.14807 2.86475C7.8914 2.86475 7.8914 3.26475 8.14807 3.26808C10.1394 3.28341 11.7794 4.67141 11.7974 7.21741C11.7974 7.48608 12.1907 7.48275 12.1874 7.21408H12.1867C12.1654 4.47075 10.3747 2.88008 8.14807 2.86475Z" :fill="getSvgColor(phone.socs.viber)"/>
            <path d="M10.7675 6.79536C10.7615 7.0607 11.1541 7.07336 11.1575 6.8047C11.1901 5.29203 10.2575 4.04602 8.50479 3.91469C8.24812 3.89602 8.22146 4.29936 8.47746 4.31802C9.99746 4.43336 10.7981 5.47069 10.7675 6.79536Z" :fill="getSvgColor(phone.socs.viber)"/>
            <path d="M10.3473 8.5159C10.018 8.32524 9.68266 8.4439 9.54399 8.63124L9.25399 9.00657C9.10665 9.19724 8.83132 9.1719 8.83132 9.1719C6.82198 8.64057 6.28465 6.5379 6.28465 6.5379C6.28465 6.5379 6.25998 6.25324 6.44398 6.10057L6.80665 5.80057C6.98798 5.65657 7.10265 5.30991 6.91798 4.96924C6.42465 4.07791 6.09332 3.77057 5.92465 3.53457C5.74732 3.31257 5.48065 3.26257 5.20331 3.41257H5.19731C4.62065 3.74991 3.98931 4.38124 4.19131 5.03124C4.53598 5.71657 5.16931 7.90124 7.18798 9.5519C8.13665 10.3326 9.63799 11.1326 10.2753 11.3172L10.2813 11.3266C10.9093 11.5359 11.52 10.8799 11.846 10.2859V10.2812C11.9907 9.9939 11.9427 9.7219 11.7313 9.5439C11.3567 9.17857 10.7913 8.77524 10.3473 8.5159Z" :fill="getSvgColor(phone.socs.viber)"/>
            <path d="M8.7794 5.40278C9.42006 5.44012 9.73072 5.77479 9.76406 6.46212C9.77606 6.73079 10.1661 6.71212 10.1541 6.44345C10.1114 5.54612 9.64339 5.04612 8.80073 4.99945C8.54406 4.98412 8.52006 5.38745 8.7794 5.40278Z" :fill="getSvgColor(phone.socs.viber)"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </div>

      </td>
      <td><p>{{phone.operator}}</p></td>
      <td><p>{{phone.birthDate}}</p></td>
      <td>
        <div class="phones__actions">
          <Button v-if="inBases" btnText="В базы рассылок" btnSvg="arrow" wrapperClass="button-wrapper--text button-wrapper--download" />
          <Button v-if="toCreate" btnText="Создать рассылку" btnSvg="rocket" wrapperClass="button-wrapper--text" />
          <Button v-if="inBlackList" btnText="В черный список" btnSvg="arrow" wrapperClass="button-wrapper--text button-wrapper--error" />
          <Button v-if="toRemove" btnText="Удалить" btnSvg="plus" wrapperClass="button-wrapper--text button-wrapper--error" />
          <Button v-if="toRestore" btnText="Восстановить" btnSvg="arrow" wrapperClass="button-wrapper--text button-wrapper--download" />
        </div>
      </td>
    </tr>
  </table>
</template>

<script>

import Button from '../forms/Button'

export default {
  name: 'Phones',
  props: ['phones', 'className', 'toCreate', 'inBases', 'inBlackList', 'toRemove', 'toRestore'],
  components: {
    Button
  },
  methods: {
    getSvgColor(soc) {
      if (app.classList.contains('zm')) {
        if (soc) return '#82C198'
        else return '#444745'
      } else if (app.classList.contains('sd')) {
        if (soc) return '#3F8DF6'
        else return '#CFDDEA'
      } else if (app.classList.contains('sp')) {
        if (soc) return '#DF2E2E'
        else return '#D7D1D1'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.phones
  width: 100%

  th
    span
      font-weight: 400
      font-size: 12px
      color: $text-blur

  th:first-of-type,
  td:first-of-type
    padding: 11px 0 11px 20px

  th:last-of-type,
  td:last-of-type
    padding: 11px 20px 11px 0

  tr:nth-child(even)
    background: $modal-bg

  &--light
    tr:nth-child(even)
      background: #313131

  &__header
    text-align: left

  &__socs
    width: 70px
    display: flex
    align-items: center
    justify-content: space-between

  &__actions
    max-width: 330px
    display: flex
    justify-content: space-between
    align-items: center


// White

.white
  .phones
    th
      span
        color: $white-text-blur

// SP

.sp
  .phones
    tr:nth-child(even)
      background: $sp-card-bg


// SD

.sd
  .phones
    tr:nth-child(even)
      background: white

</style>
