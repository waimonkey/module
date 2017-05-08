<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="container-fluid">
      <div class="row">
        <AppSidebar></AppSidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AppHeader from './components/commen/AppHeader.vue'
  import AppSidebar from './components/commen/AppSidebar.vue'
  export default {
    name: 'app',
    components: {
      AppHeader,
      AppSidebar
    }
  }
</script>
<style>

</style>
