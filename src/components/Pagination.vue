<template>
  <div class="flex items-center space-x-1">
    <!-- Previous Button -->
    <button
        class="px-3 py-1 text-gray-500 bg-gray-200 rounded-md"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
    >
      &laquo;
    </button>

    <!-- Page Numbers -->
    <button
        v-for="page in paginationRange"
        :key="page"
        class="px-3 py-1"
        :class="{
        'bg-purple-500 text-white rounded-md': page === currentPage,
        'bg-gray-200 text-gray-700 rounded-md': page !== currentPage,
      }"
        @click="changePage(page)"
        v-if="page !== '...'"
    >
      {{ page }}
    </button>

    <!-- Ellipsis -->
    <span
        v-for="page in paginationRange"
        :key="'ellipsis' + page"
        v-if="page === '...'"
        class="px-3 py-1"
    >
      {{ page }}
    </span>

    <!-- Next Button -->
    <button
        class="px-3 py-1 text-gray-500 bg-gray-200 rounded-md"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
    >
      &raquo;
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    paginationRange() {
      const totalNumbers = 5;
      const totalBlocks = totalNumbers + 2;

      if (this.totalPages > totalBlocks) {
        const startPage = Math.max(2, this.currentPage - 1);
        const endPage = Math.min(this.totalPages - 1, this.currentPage + 1);

        let pages = [];
        for (let i = startPage; i <= endPage; i++) {
          pages.push(i);
        }

        if (startPage > 2) {
          pages.unshift('...');
        }

        if (endPage < this.totalPages - 1) {
          pages.push('...');
        }

        pages.unshift(1);
        pages.push(this.totalPages);
        return pages;
      }

      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },
  },
  methods: {
    changePage(page) {
      if (page !== this.currentPage && page !== '...') {
        this.$emit('page-changed', page);
      }
    },
  },
};
</script>

<style scoped>
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
