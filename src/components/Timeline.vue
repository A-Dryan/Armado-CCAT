<template>
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
          Lorem ipsum
        </h2>
        <div>
          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  export default {
    name: 'Timeline',
    data: () => ({
      years: [
        {
          color: 'cyan',
          year: '2000',
        },
        {
          color: 'green',
          year: '2005',
        },
        {
          color: 'pink',
          year: '2010',
        },
        {
          color: 'amber',
          year: '2015',
        },
        {
          color: 'orange',
          year: '2020',
        },
      ],
    }),
  }
</script>