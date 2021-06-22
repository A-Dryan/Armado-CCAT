<template>
<v-img
src="../assets/fondo.jpg"
height="100vh">
 <loginCard/>
</v-img>
</template>

<script>
  import loginCard from '../components/loginCard'

  export default {
    name: 'Login',

     components: {
      loginCard,
    },
  }
</script>
