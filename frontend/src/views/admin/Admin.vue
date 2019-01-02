<template>
  <div class="columns">
    <aside class="menu column is-narrow">
      <p class="menu-label">
        Administracja
      </p>
      <ul class="menu-list">
        <li><router-link to="/admin/machines" active-class="is-active">Maszyny</router-link></li>
        <li><router-link to="/admin/users" active-class="is-active">Użytkownicy</router-link></li>
      </ul>
    </aside>
    <div class="column">
      <router-view/>
    </div>
  </div>
</template>

