<template>
  <div class="home">
    <p>Counter: {{$store.state.counter}}</p>
    <CgmButton title="Click me!" @buttonClicked="updateCounter()"/>

    <CounterHistory ref="counterHistory"/>
  </div>
</template>

<script>

import CgmButton from '@/components/CgmButton.vue'
import CounterHistory from '@/components/CounterHistory.vue'


// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    CgmButton,
    CounterHistory
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    updateCounter() {
      this.$store.commit("increment");
    }
  }
}
</script>
