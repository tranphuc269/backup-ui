<template>
  <main id="Home-page">
    <backup-component
        title="S3 Backup"
        :items-per-page="itemsPerPageS3"
        :current-page="currentPageS3"
        :backup-data="dataS3"
    />
    <backup-component
        title="PostgreSQL Backup"
        :items-per-page="itemsPerPagePostgre"
        :current-page="currentPagePostgre"
        :backup-data="dataPostgreSQL"
    />
    <backup-component
        title="Mongo Backup"
        :items-per-page="itemsPerPageMongo"
        :current-page="currentPageMongo"
        :backup-data="dataMongo"
    />
  </main>
</template>

<script>
import BackupComponent from "../components/BackupComponent.vue";

export default {
  components: {
    BackupComponent,
  },
  data() {
    return {
      currentPagePostgre: 1,
      itemsPerPagePostgre: 5,
      currentPageS3: 1,
      itemsPerPageS3: 5,
      currentPageMongo: 1,
      itemsPerPageMongo: 5,
      dataPostgreSQL: [
        {
          name: 'postgresql_02012018.zip',
          dumpStatus: 'Success',
          putStatus: 'Fail',
          startDumpAt: '02-01-2018 06:07:59',
          endDumpAt: '02-01-2018 06:07:59',
          startPutAt: '02-01-2018 06:07:59',
          endPutAt: '02-01-2018 06:07:59'
        },
      ],
      dataS3: [
        {
          name: 'postgresql_02012018.zip',
          dumpStatus: 'Success',
          putStatus: 'Fail',
          startDumpAt: '02-01-2018 06:07:59',
          endDumpAt: '02-01-2018 06:07:59',
          startPutAt: '02-01-2018 06:07:59',
          endPutAt: '02-01-2018 06:07:59'
        },
      ],
      dataMongo: [
        {
          name: 'postgresql_02012018.zip',
          dumpStatus: 'Success',
          putStatus: 'Fail',
          startDumpAt: '02-01-2018 06:07:59',
          endDumpAt: '02-01-2018 06:07:59',
          startPutAt: '02-01-2018 06:07:59',
          endPutAt: '02-01-2018 06:07:59'
        },
      ],
    };
  },
};
</script>
