<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="mb-6">
      <h1 class="text-2xl font-bold">OCR Document Quality Management</h1>
    </div>

    <!-- Filters -->
    <div class="flex space-x-4 mb-6">
      <div class="w-1/3">
        <label class="block mb-2">Profile Type:</label>
        <select v-model="selectedProfileType" class="border border-gray-300 p-2 rounded w-full">
          <option v-for="profile in profileTypes" :key="profile.id" :value="profile.id">{{ profile.name }}</option>
        </select>
      </div>

      <div class="w-1/3">
        <label class="block mb-2">Document Type:</label>
        <select v-model="selectedDocumentType" class="border border-gray-300 p-2 rounded w-full">
          <option v-for="document in documentTypes" :key="document.id" :value="document.id">{{ document.name }}</option>
        </select>
      </div>

      <div class="w-1/3">
        <label class="block mb-2">Adjustment Rate From (%):</label>
        <input type="number" v-model="adjustmentRateFrom" class="border border-gray-300 p-2 rounded w-full" min="0"
               max="100"/>
      </div>
    </div>

    <!-- Document Table -->
    <table class="min-w-full bg-white rounded-lg shadow-md">
      <thead class="bg-gray-50">
      <tr>
        <th class="p-3 text-sm font-semibold text-left text-gray-600">Document ID</th>
        <th class="p-3 text-sm font-semibold text-left text-gray-600">Profile ID</th>
        <th class="p-3 text-sm font-semibold text-left text-gray-600">Document Name</th>
        <th class="p-3 text-sm font-semibold text-left text-gray-600">Path</th>
        <th class="p-3 text-sm font-semibold text-left text-gray-600">Adjustment Rate (%)</th>
        <th class="p-3 text-sm font-semibold text-left text-gray-600">Actions</th>
      </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      <tr v-for="(item, index) in filteredDocuments" :key="index">
        <td class="p-3 text-sm text-gray-700">{{ item.documentId }}</td>
        <td class="p-3 text-sm text-gray-700">{{ item.profileId }}</td>
        <td class="p-3 text-sm text-gray-700">{{ item.documentName }}</td>
        <td class="p-3 text-sm text-gray-700">{{ item.path }}</td>
        <td class="p-3 text-sm text-gray-700">{{ item.adjustmentRate }}</td>
        <td class="p-3 text-sm text-gray-700">
          <button @click="viewDetails(item)" class="text-blue-500 hover:underline">View Details</button>
          <button @click="downloadFile(item)" class="text-blue-500 hover:underline ml-4">Download</button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- Document Detail Modal -->
    <OcrDocumentDetail v-if="selectedDocument" :document="selectedDocument" @close="closeDetails"/>
  </div>
</template>

<script>
import OcrDocumentDetail from './OcrDocumentDetail.vue';

export default {
  data() {
    return {
      selectedProfileType: null,
      selectedDocumentType: null,
      adjustmentRateFrom: 0,  // New filter for adjustment rate
      profileTypes: [
        {id: 1, name: 'Type A'},
        {id: 2, name: 'Type B'},
        // Thêm profile types khác
      ],
      documentTypes: [
        {id: 1, name: 'Passport'},
        {id: 2, name: 'ID Card'},
        // Thêm document types khác
      ],
      documents: [
        {
          documentId: 'D1',
          profileId: 'P1',
          documentName: 'Passport',
          path: '/documents/passport.pdf',
          adjustmentRate: 95,
        },
        {
          documentId: 'D2',
          profileId: 'P1',
          documentName: 'ID Card',
          path: '/documents/id_card.pdf',
          adjustmentRate: 92,
        },
        // Thêm dữ liệu demo
      ],
      selectedDocument: null,
    };
  },
  components: {
    OcrDocumentDetail,
  },
  computed: {
    filteredDocuments() {
      return this.documents.filter(
          (doc) =>
              (!this.selectedProfileType || doc.profileId === this.selectedProfileType) &&
              (!this.selectedDocumentType || doc.documentName === this.documentTypes.find((d) => d.id === this.selectedDocumentType)?.name) &&
              (doc.adjustmentRate >= this.adjustmentRateFrom) // Filter by adjustment rate
      );
    },
  },
  methods: {
    viewDetails(document) {
      this.selectedDocument = document;
    },
    closeDetails() {
      this.selectedDocument = null;
    },
    downloadFile(document) {
      // Logic tải xuống file
      console.log('Downloading file:', document.path);
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
