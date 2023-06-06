<template>
  <header>
    <h1>Przegląd przepisów</h1>

    <div class="personalData">
      <span class="nick">{{ this.me.firstName +' '+ this.me.lastName }}</span>
      <button class="logout-btn">WYLOGUJ</button>
      <img :src="this.me.avatar" :alt="this.me.firstName +' '+ this.me.lastName" class="avatar">
    </div>

    <form class="searchSection">
      <IconSearch class="search-btn" />
      <input type="text" placeholder="Wyszukaj przepis" class="input" v-on:input="filterData">
    </form>
  </header>
</template>

<script>
  import dataMe from "../assets/data/data-me.json"
  import dataRecipe from "../assets/data/data-recipe.json"

  import IconSearch from "../assets/icons/IconSearch.vue"

  export default {
    data() {
      return {
        me: dataMe,
        dataRecipe: dataRecipe,
        originalRecipes: []
      }
    },
    
    components: {
      IconSearch
    },

    methods: {
      filterData(event) {
        const keyword = event.target.value.toLowerCase().trim()

        this.dataRecipe = this.originalRecipes.filter(recipe => {
          return recipe.Name.toLowerCase().includes(keyword)
        })
      }
    }
  }
</script>

<style type="scss" scoped>
  header {
    margin-top: 1%;
    padding: 0 0 0 1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    font-size: 25px;
    margin-left: 2%;
  }

  .personalData {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 12px;
    align-self: center;
    margin-right: 2%;
  }

  .nick {
    grid-row: 1 / span 1;
    font-weight: bold;
    font-size: 18px;
  }

  .logout-btn {
    width: max-content;
    height: max-content;
    background-color: #00000000;
    border: none;
    grid-row: 2 / span 1;
    justify-self: right;
    font-size: 14px;
  }

  .logout-btn:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  .avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    grid-row: 1 / 3;
  }

  /* Search section */
  .searchSection {
    width: 100%;
    height: 58px;
    padding: 0 2%;
    margin-top: 10px;
    border-top: 1px solid var(--color-darkGray);
    border-bottom: 1px solid var(--color-darkGray);
    display: flex;
    align-items: center;
  }

  .search-btn {
    width: 27px;
    height: max-content;
    fill: var(--color-contrast1);
  }

  input {
    width: 100%;
    height: 80%;
    background-color: #00000000;
    border: none;
    font-size: 18px;
    margin-left: 10px;
    outline: none;
  }
</style>