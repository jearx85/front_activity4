<script>

</script>

<template>

<nav class="navbar navbar-expand-lg" id="nav">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to = '/login' class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to = '/register' class="nav-link">Registro</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>
    <routerView></routerView>
</div>

</template>

<style scoped>
  #nav{
    background-color: #2596be;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
  }
</style>