<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Dead Letter Topics Management</h1>
      <button class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700">
        Refresh
      </button>
    </div>

    <table class="min-w-full bg-white rounded-lg shadow-md">
      <thead class="bg-gray-50">
      <tr>
        <th class="p-3 text-sm font-semibold text-left text-gray-600">ID</th>
        <th class="p-3 text-sm font-semibold text-left text-gray-600">Message</th>
        <th class="p-3 text-sm font-semibold text-left text-gray-600">Topic</th>
        <th class="p-3 text-sm font-semibold text-left text-gray-600">Type</th>
        <th class="p-3 text-sm font-semibold text-left text-gray-600">Stacktrace</th>
        <th class="p-3 text-sm font-semibold text-left text-gray-600">Details</th>
      </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      <tr v-for="(item, index) in deadLetterTopics" :key="index">
        <td class="p-3 text-sm text-gray-700">{{ item.id }}</td>
        <td class="p-3 text-sm text-gray-700 truncate" style="max-width: 150px;">{{ item.message }}</td>
        <td class="p-3 text-sm text-gray-700">{{ item.topic }}</td>
        <td class="p-3 text-sm text-gray-700">{{ item.type }}</td>
        <td class="p-3 text-sm text-gray-700 truncate" style="max-width: 200px;">{{ item.stacktrace }}</td>
        <td class="p-3 text-sm text-gray-700">
          <button @click="showDetails(item)" class="text-blue-500 hover:underline">View</button>
          <button @click="showDetails(item)" class="text-blue-500 hover:underline mx-3">View</button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- Modal to show message details -->
    <div v-if="selectedMessage" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-6 w-1/2">
        <h2 class="text-xl font-bold mb-4">Message Details</h2>
        <pre class="bg-gray-100 p-4 rounded-lg mb-4">{{ selectedMessage }}</pre>
        <div class="flex justify-end">
          <button @click="closeDetails" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deadLetterTopics: [
        {
          id: 1,
          message: 'Error processing payment',
          topic: 'payment-failed',
          type: 'error',
          stacktrace: 'Stacktrace here...',
        },
        {
          id: 2,
          message: 'Failed to send email',
          topic: 'email-failed',
          type: 'error',
          stacktrace: 'Stacktrace for email failure...',
        },
        // Thêm dữ liệu demo ở đây
      ],
      selectedMessage: null,
    };
  },
  methods: {
    showDetails(item) {
      this.selectedMessage = item.message;
    },
    closeDetails() {
      this.selectedMessage = null;
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
