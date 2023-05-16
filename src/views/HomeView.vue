<template>
  <div class="container">
    <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
      <div class="recipe__header">
        <h1>{{ recipe.name }}</h1>
        <span class="level" :class="{ 'hard': recipe.level === 'Trudne', 'medium': recipe.level === 'Średnie', 'easy': recipe.level === 'Łatwe' }">{{ recipe.level }}</span>
      </div>

      <p>{{ recipe.description }}</p>

      <div class="nutrients">
        <div class="nutrients__item kcal">KCAL: {{ recipe.calories }}</div>
        <div class="nutrients__item prot">PROT: {{ recipe.protein }}g</div>
        <div class="nutrients__item fats">FATS: {{ recipe.fat }}g</div>
        <div class="nutrients__item carbs">CARBS: {{ recipe.carbohydrates }}g</div>
      </div>

      <div class="recipe__footer">
        <div class="time">
          <IconCalender class="IconCalender" />
          15.05.2023 - 15:30
        </div>

        <IconHeart class="IconHeart" />
      </div>
    </div>
  </div>
</template>

<script>
  import dataRecipe from '../assets/data/data-recipe.json'

  import IconCalender from '../assets/icons/IconCalender.vue'
  import IconHeart from '../assets/icons/IconHeart.vue'
  import IconHeart2 from '../assets/icons/IconHeart2.vue'

  export default {
    components: {
      IconCalender,
      IconHeart,
      IconHeart2
    },

    data() {
      return {
        recipes: dataRecipe
      }
    }
  }
</script>

<style type="scss" scoped>
  .container {
    height: max-content;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 40px 3%;
    gap: 40px;
    overflow-y: auto;
  }

  /* recipe */
  .recipe {
    width: 410px;
    height: 240px;
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 15px;
    background-color: var(--color-contrast2);
  }

  .recipe:hover {
    cursor: pointer;
    box-shadow: 0 0 0 3px var(--color-lightGray);
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
  }

  /* header */
  .recipe__header {
    display: flex;
    justify-content: space-between;
    align-content: center;
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

  /* nutrients */
  .nutrients {
    display: flex;
    align-items: center;
    gap: 12px;
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

  /* footer */
  .recipe__footer {
    display: flex;
    justify-content: space-between;
  }

  .time {
    display: flex;
    align-items: center;
    color: var(--color-darkGray);
  }

  .IconCalender {
    height: max-content;
    width: 24px;
    fill: var(--color-darkGray);
    margin-right: 10px;
    margin-top: -2px;
  }

  .IconHeart {
    fill: var(--color-darkGray);
  }

  .IconHeart:hover {
    transform: scale(1.04);
    fill: red;
  }
</style>