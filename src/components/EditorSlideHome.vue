<template>
<v-container>
  <v-card
    class="mx-auto"
    max-width="700"
    max-height="180"
  >
  <v-form>
    <v-row>
    <v-col cols="4">
    <v-img
    contain
      class="white--text align-center justify-center elevation-2"
      height="150px"
      src="https://www.kelea.es/ETG_wp-content/uploads/2020/09/metodologia-scrum-agile.jpg"
    >
    </v-img>
    </v-col>
    <v-col cols="8">
     <v-text-field class="mx-4 ml-10">
        <template v-slot:label>
         introduce el <strong>Url</strong> Aqui <v-icon style="vertical-align: middle">
            mdi-file-find
          </v-icon>
        </template>
      </v-text-field>
    <v-file-input
    multiple
    label="Imagen"
    class="mx-4"
  ></v-file-input>
          <div class="mx-3 justify-end" style="display: flex; justify-content: flex-end;">
            <v-btn
              color="error"
              fab
              dark
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn
              color="primary"
              fab
              dark
            >
              <v-icon>mdi-content-save</v-icon>
            </v-btn>
          </div>
          
    </v-col>
    </v-row>
  </v-form>
  </v-card>
</v-container>
</template>
