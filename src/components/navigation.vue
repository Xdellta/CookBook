<template>
  <nav>
    <h1>
      <IconCookie class="logo" />CookBook
    </h1>

    <RouterLink to="home" class="newRecipe-btn">+ Nowy przepis</RouterLink>

    <div class="links">
      <RouterLink to="home" class="link">
        <IconHome class="icon" /> Przegląd
      </RouterLink>

      <RouterLink to="home" class="link">
        <IconHeart class="icon" /> Ulubione
      </RouterLink>
      
      <RouterLink to="home" class="link">
        <IconRecipe class="icon" /> Moje przepisy
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
  import IconCookie from '../assets/icons/IconCookie.vue'
  import IconHome from '../assets/icons/IconHome.vue'
  import IconHeart from '../assets/icons/IconHeart.vue'
  import IconRecipe from '../assets/icons/IconRecipe.vue'

  const components = {
    IconCookie,
    IconHome,
    IconHeart,
    IconRecipe
  }
</script>

<style type="scss" scoped>
  nav {
    position: fixed;
    top: 2%;
    left: 0;
    width: 290px;
    height: 96%;
    display: flex;
    flex-direction: column;
    padding: 15px 35px;
    border-right: 1px solid var(--color-darkGray);
  }

  /* Logo */
  h1 {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  .logo {
    width: max-content;
    height: 35px;
    margin-right: 8px;
    fill: #AA7A47;
  }

  /* Button */
  .newRecipe-btn {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: var(--color-main);
    margin-top: 6vh;
    color: var(--color-contrast1);
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
  }

  .newRecipe-btn:hover {
    cursor: pointer;
    opacity: 0.85;
  }

  /* Links */
  .links {
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    gap: 15px;
  }

  .link {
    width: 100%;
    height: 44px;
    color: var(--color-contrast1);
    padding: 0 15px;
    border-radius: 6px;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 17px;
  }

  .link:hover {
    background-color: var(--color-background2);
  }

  .icon {
    width: 25px;
    height: max-content;
    margin-right: 10px;
  }
</style>