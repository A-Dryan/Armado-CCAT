<template>
    <v-navigation-drawer
      absolute
      permanent
      left
      class="elevation-10"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="../assets/logo.png">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>C C A T</v-list-item-title>
            <v-list-item-subtitle>Centro Cultural Avanzada Tecnologica</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :href="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn
      color="red"
      style="color: #fff"
      to="/"
      block>
          Logout
      </v-btn>
    </v-navigation-drawer>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home-city', link: '#'},
          { title: 'Nosotros', icon: 'mdi-account', link: '#'},
          { title: 'Miembros', icon: 'mdi-account-group-outline', link: '#'},
          { title: 'Proyectos', icon: 'mdi-book-open-outline', link: '#'},
          { title: 'Direccion/Gerencia', icon: 'mdi-briefcase-account-outline', link: '#'},
          { title: 'Proximos Eventos', icon: 'mdi-calendar-star', link: '/addEventos'},
          { title: 'Productos', icon: 'mdi-cart-arrow-down', link: '#'},
        ],
      }
    },
  }
</script>