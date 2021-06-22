<template>
<v-row style="height: 100%; width: 100%">
  <v-col cols="3">
   <MenuInterface/>
  </v-col>
  <v-col cols="9" class="mt-4">
  <v-container>
    <v-card class="my-5 mx-auto" width="700">
        <div class="my-2 mx-7"  style="display: flex; justify-content: flex-end; align-items: center">
           <div :class="`text-center`">
        Add Slide
      </div>
            <v-btn
              color="green"
              fab
              small
              dark
              class="mx-2"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
    </v-card>
  <EditorSlideHome/>
  </v-container>
<v-container>
   <v-card class="my-5 mx-auto" width="700">
        <div class="my-2 mx-7"  style="display: flex; justify-content: flex-end; align-items: center">
           <div :class="`text-center`">
        Add Sponsor
      </div>
            <v-btn
              color="green"
              fab
              small
              dark
              class="mx-2"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
    </v-card>
    <EditorSponsorHome/>
</v-container>
  </v-col>
</v-row>
</template>

<script>
  import MenuInterface from '../components/MenuInterface'
  import EditorSlideHome from '../components/EditorSlideHome'
  import EditorSponsorHome from '../components/EditorSponsorHome'

  export default {
    name: 'modHome',

     components: {
      MenuInterface,
      EditorSlideHome,
      EditorSponsorHome,
    },
  }
</script>
