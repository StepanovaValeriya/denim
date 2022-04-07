<template>
  <div>
    <main class="page">
      <Card></Card>
      <Similar></Similar>
    </main>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import Similar from '../components/Similar.vue';
export default {
  name: 'productCard',
  components: { Card, Similar },
};
</script>
