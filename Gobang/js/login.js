const account = Vue.createApp({
  data() {
    return {
      isValid: true,
      isInvalid: false
    }
  }
}).mount('#account')

const password = Vue.createApp({
  data() {
    return {
      isValid: true,
      isInvalid: false
    }
  }
}).mount('#password')