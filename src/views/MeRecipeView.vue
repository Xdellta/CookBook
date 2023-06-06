<template>
  <recipePreview :type="favoriteRecipes" />
</template>

<script>
  import recipePreview from '../components/recipePreview.vue'
  import dataRecipe from '../assets/data/data-recipe.json'
  import dataMe from '../assets/data/data-me.json'

  export default {
    components: {
      recipePreview
    },

    data() {
      return {
        favoriteRecipes: dataRecipe.filter(recipe => dataMe.meRecipes.map(item => item.id).includes(recipe.id))
      }
    }
  }
</script>