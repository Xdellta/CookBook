import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoriteView from '../views/FavoriteView.vue'
import MeRecipeView from '../views/MeRecipeView.vue'
import RecipeView from '../views/RecipeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Favorite',
      name: 'favorite',
      component: FavoriteView
    },
    {
      path: '/MeRecipe',
      name: 'merecipe',
      component: MeRecipeView
    },
    {
      path: '/Recipe/:id',
      name: 'recipe',
      component: RecipeView
    }
  ]
})

export default router
