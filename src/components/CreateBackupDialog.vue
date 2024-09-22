<template>
  <div v-if="isDialogOpen" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-1/2">
      <h2 class="text-lg font-bold mb-4">Create Backup</h2>
      <div>
        <!-- Backup Type Selection -->
        <label class="block mb-2">Backup Type:</label>
        <select v-model="backupType" class="border border-gray-300 p-2 rounded w-full">
          <option value="specificDate">Specific Date</option>
          <option value="range">Range of Dates</option>
        </select>
      </div>

      <!-- Show Date Picker if 'Specific Date' is selected -->
      <div v-if="backupType === 'specificDate'" class="mt-4">
        <label class="block mb-2">Select Date:</label>
        <input type="date" v-model="selectedDate" class="border border-gray-300 p-2 rounded w-full" />
      </div>

      <!-- Show Range Picker if 'Range of Dates' is selected -->
      <div v-if="backupType === 'range'" class="mt-4">
        <label class="block mb-2">Select Date Range:</label>
        <div class="flex justify-between space-x-4">
          <input type="date" v-model="startDate" class="border border-gray-300 p-2 rounded w-full" />
          <input type="date" v-model="endDate" class="border border-gray-300 p-2 rounded w-full" />
        </div>
      </div>

      <!-- Buttons -->
      <div class="mt-6 flex justify-end">
        <button @click="closeDialog" class="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700">
          Cancel
        </button>
        <button @click="submitBackup" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDialogOpen: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      backupType: 'specificDate',
      selectedDate: '',
      startDate: '',
      endDate: ''
    };
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    submitBackup() {
      const backupData = {
        type: this.backupType,
        date: this.selectedDate,
        range: {
          start: this.startDate,
          end: this.endDate,
        }
      };
      this.$emit('submit', backupData);
      this.closeDialog();
    }
  }
};
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
