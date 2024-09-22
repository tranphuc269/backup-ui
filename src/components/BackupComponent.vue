<template>
  <main id="Home-page">
    <div class="p-5 bg-gray-100">
      <div class="flex justify-between items-center mb-2">
        <h1 class="text-xl">{{ title }}</h1>
        <button @click="openDialog" class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700">
          Create Backup
        </button>
      </div>

      <div class="md:block">
        <table class="w-full">
          <thead class="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
            <th class="w-32 text-sm font-semibold tracking-wide text-left">Name</th>
            <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Dump Status</th>
            <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Put Status</th>
            <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Start Dump At</th>
            <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">End Dump At</th>
            <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Start Put At</th>
            <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">End Put At</th>
          </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
          <tr v-for="(item, index) in paginatedData" :key="index" class="bg-white">
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <a href="#" class="font-bold text-blue-500 hover:underline">{{ index + 1 }}</a>
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ item.name }}</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                <span
                    class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50"
                    v-if="item.dumpStatus === 'Success'">Success</span>
              <span
                  class="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50"
                  v-else>Fail</span>
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                <span
                    class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50"
                    v-if="item.putStatus === 'Success'">Success</span>
              <span
                  class="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50"
                  v-else>Fail</span>
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ item.startDumpAt }}</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ item.endDumpAt }}</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ item.startPutAt }}</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ item.endPutAt }}</td>
          </tr>
          </tbody>
        </table>

        <!-- Pagination Component -->
        <div class="mt-5 flex justify-end" style="margin-top: 20px;">
          <pagination
              :total-pages="totalPages"
              :current-page="currentPage"
              @page-changed="onPageChange"
          />
        </div>

      </div>

      <CreateBackupDialog
          v-if="isDialogOpen"
          :isDialogOpen="isDialogOpen"
          @close="closeDialog"
          @submit="handleBackupSubmit"
      />
    </div>
  </main>
</template>


<script>


import Pagination from "./Pagination.vue";
import CreateBackupDialog from "./CreateBackupDialog.vue";

export default {

  props: {
    title: {
      type: String,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
    backupData : {
      type: Object,
    }
  },
  data() {
    return {
      isDialogOpen: false,
    };
  },
  components: {
    CreateBackupDialog,
    Pagination,
  },
  computed: {
    totalPages() {
      return Math.ceil(this.backupData.length / this.itemsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.backupData.slice(start, end);
    },
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
    openDialog() {
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
    },
    handleBackupSubmit(backupData) {
      console.log('Backup Data Submitted:', backupData);
    }
  },
};
</script>