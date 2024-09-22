<template>
  <div class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-1/2">
      <h2 class="text-xl font-bold mb-4">Document Details</h2>
      <div class="mb-4">
        <strong>Document Name:</strong> {{ document.documentName }}
      </div>
      <div class="mb-4">
        <strong>Path:</strong> <a :href="document.path" class="text-blue-500 hover:underline">{{ document.path }}</a>
      </div>
      <div class="mb-4">
        <strong>Adjustment Rate:</strong> {{ document.adjustmentRate }}%
      </div>

      <!-- Buttons -->
      <div class="mt-6 flex justify-end">
        <button @click="$emit('close')" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
