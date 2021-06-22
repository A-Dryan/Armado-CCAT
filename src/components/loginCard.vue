<template>
    <v-container 
    style="width: 50vw;
            height: 100vh;
           display: flex"
    justify="center"
    align="center">
    <v-row align="center" justify="center">
       <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
    <v-card ref="form" class="elevation-10">
        <v-img
              src="../assets/logo.png"
              height="300"
              contain
            ></v-img>
            <v-card-title class="text-h6">
              LOGIN
            </v-card-title>
        <v-card-text>
             <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Username"
            required
          ></v-text-field>
              <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
            class="mb-3"
          ></v-text-field>
           <v-btn
           block
            class="mr-4"
            @click="submit"
            color="primary"
            to="/modHome">
             Sign in
            </v-btn>
        </v-card-text>
    </v-card>
       </v-col>
    </v-row>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
  }
</script>