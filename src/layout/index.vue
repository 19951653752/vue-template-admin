<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar
  },
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
