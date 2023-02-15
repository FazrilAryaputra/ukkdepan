<template>
  <div class="wrapper">
    <navbar />
  <sidebar />
    <div class="content-wrapper">
       <router-view />
    </div>

    <footer class="main-footer">
      <strong
        >Copyright &copy; 2023
        <a href="https://adminlte.io">Masfaz</a>.</strong
      >
      Original Iki
    </footer>

    <aside class="control-sidebar control-sidebar-dark"></aside>
  </div>
</template>

<script>
import Navbar from "./inc/Navbar.vue"
import Sidebar from "./inc/Sidebar.vue"
export default {
    components: {
     Navbar, Sidebar
  }
}
</script>