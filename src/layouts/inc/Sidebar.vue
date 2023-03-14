<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">

      <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="/adminlte/dist/img/user2-160x160.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block">Admin Hotel</a>
          </div>
        </div>

        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <input
              class="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <nav class="mt-2">
            <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <nav-item icon="fas fa-home" link="/home">
                Home
            </nav-item>
            <nav-item icon="fas fa-info-circle" link="/about">
                About
            </nav-item>
            <nav-item icon="fas fa-solid fa-bed" link="/kamar">
                Kamar
            </nav-item>
            <nav-item icon="fas fa-solid fa-building" link="/tipekamar">
                Tipe Kamar
              </nav-item>
              <nav-item icon="fas fa-solid fa-user" link="/user">
                User
              </nav-item>
            </ul>
        </nav>
      </div>
    </aside>
</template>

<script>
import NavItem from "./NavItem" 

export default {
    components:{
        NavItem
    }
}
</script>