<template>
  <q-page padding>
    <!-- content -->
    <h1>LOGIN PAGE</h1>
    <q-btn label="Go To Admin" color="pink" to='/admin/dashboard' />
    <q-btn label="Go To Report" color="green" @click="$router.push('admin/report/' + reportNo)"/>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
