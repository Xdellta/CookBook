<template>
  <recipePreview :type="recipes" />
</template>

<script>
  import recipePreview from '../components/recipePreview.vue'
  import dataRecipe from '../assets/data/data-recipe.json'

  export default {
    components: {
      recipePreview
    },

    data() {
      return {
        recipes: dataRecipe
      }
    }
  }
</script>