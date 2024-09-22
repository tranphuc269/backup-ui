<template>
  <main id="Home-page">
    <dead-letter-table/>
  </main>
</template>

<script>
import DeadLetterTable from "../components/DeadLetterTable.vue";

export default {
  components: {
    DeadLetterTable,
  },
};
</script>
