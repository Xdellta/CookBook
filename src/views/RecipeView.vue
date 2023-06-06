<template>
  <div class="container">
    <header v-for="recipe in filteredRecipe" :key="recipe.id">
      <h1 class="title">
        {{ recipe.name }}
        <IconHeart v-if="!isFavorite(recipe.id)" class="IconHeart" @click="addFavorites(recipe.id)" />
        <IconHeart2 v-else class="IconHeart favorite" @click="removeFavorites(recipe.id)" />
      </h1>

      <span class="level" :class="{ 'hard': recipe.level === 'Trudne', 'medium': recipe.level === 'Średnie', 'easy': recipe.level === 'Łatwe' }">{{ recipe.level }}</span>
    
      <div class="nutrients">
        <div class="nutrients__item kcal">KCAL: {{ recipe.calories }}</div>
        <div class="nutrients__item prot">PROT: {{ recipe.protein }}g</div>
        <div class="nutrients__item fats">FATS: {{ recipe.fat }}g</div>
        <div class="nutrients__item carbs">CARBS: {{ recipe.carbohydrates }}g</div>
      </div>

      <p class="description">{{ recipe.description }}</p>
    </header>

    <main>
      <div class="instruction">
        <h1 class="instruction__title">Instrukcja</h1>
        <div class="instruction__item" v-for="(instruction, index) in filteredRecipe[0].instruction" :key="index">
          {{ instruction }}
        </div>
      </div>

      <div class="ingredients">
        <div class="ingredients__item" v-for="recipe in filteredRecipe[0].ingredients" :key="recipe.id">
          <span class="bold">{{ recipe.name }}</span>
          <span>{{ recipe.quantity }}</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import dataRecipe from '../assets/data/data-recipe.json';
  import dataFavorite from '../assets/data/data-me.json'

  import IconHeart from '../assets/icons/IconHeart.vue'
  import IconHeart2 from '../assets/icons/IconHeart2.vue'

  export default {
    components: {
      IconHeart,
      IconHeart2
    },

    data() {
      const routerID = parseInt(this.$route.params.id);
      const filteredRecipe = dataRecipe.filter(recipe => recipe.id === routerID);
      
      return {
        favorite: dataFavorite.favorite,
        filteredRecipe: filteredRecipe
      }
    },

    methods: {
      isFavorite(recipeID) {
        return this.favorite.some(item => item.id === recipeID);
      },

      addFavorites(recipeID) {
        if (!this.isFavorite(recipeID)) {
          this.favorite.push({ id: recipeID });
        }
      },

      removeFavorites(recipeID) {
        const index = this.favorite.findIndex(item => item.id === recipeID);
        if (index !== -1) {
          this.favorite.splice(index, 1);
        }
      }
    }
  }
</script>

<style type="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    padding: 30px 3%;
  }

  /* Header */
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 65px;
  }

  .title {
    display: flex;
    align-items: center;
    font-size: 28px;
  }

  .IconHeart {
    fill: var(--color-darkGray);
    margin-left: 15px;
  }

  .IconHeart:hover {
    transform: scale(1.04);
    fill: red;
    cursor: pointer;
  }
  
  .favorite {
    fill: red;
  }

  .level {
    width: max-content;
    height: max-content;
    padding: 3px 10px;
    font-weight: bold;
    border-radius: 8px;
    font-size: 14px;
  }

  .hard {
    color: red;
    background-color: rgba(255, 0, 0, 0.350);
  }

  .medium {
    color: orange;
    background-color: rgba(255, 166, 0, 0.350);
  }

  .easy {
    color: #57FF72;
    background-color: hsla(130, 100%, 67%, 0.350);
  }

  .nutrients {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 15px;
  }

  .nutrients__item {
    width: max-content;
    height: max-content;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 8px;
  }

  .kcal {
    background-color: #60C9FF;
  }

  .prot {
    background-color: #ff7048;
  }

  .fats {
    background-color: #57FF72;
  }

  .carbs {
    background-color: #FFDA00;
  }

  .description {
    margin-top: 20px;
  }

  /* Main */
  main {
    display: flex;
    justify-content: space-between;
  }

  /* Instruction */
  .instruction {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 44%;
    gap: 20px;
    background-color: var(--color-background2);
    padding: 20px 25px;
    border-radius: 12px;
  }

  .instruction__title {
    font-size: 25px;
    border-bottom: 1px solid var(--color-contrast1);
    padding-bottom: 5px;
  }

  .instruction__item {
    margin-left: 15px;
  }

  /* Ingredients */
  .ingredients {
    height: 100%;
    width: 47%;
    display: flex;
    flex-direction: column;
  }

  .ingredients__item {
    width: 100%;
    height: 65px;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dotted var(--color-contrast1);
  }

  .bold {
    font-weight: bold;
  }
</style>