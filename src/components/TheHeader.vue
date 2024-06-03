<template>
  <header class="header-wrapper">
    <div class="main_container">
      <div class="header-content">
        <RouterLink to="/">
          <img
            src="/img/icons/logos/mlabs-logo.png"
            alt="Logo"
            class="header-logo"
          />
        </RouterLink>
        <nav class="header-navbar">
          <RouterLink to="/agendamento">Agendamento</RouterLink>
          <RouterLink to="/lista-de-agendamentos"
            >Lista de Agendamentos</RouterLink
          >
        </nav>
        <div class="profile-wrapper">
          <div class="profile-image">
            <img src="/img/fotos/profile.png" alt="Anselmo Carlos" />
          </div>
          <p class="profile-name">Anselmo Carlos</p>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header-wrapper {
  top: 0;
  position: fixed;
  width: -webkit-fill-available;
  padding: 0px 40px;
  background-color: $white-100;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-logo {
      width: 100px;
    }

    .header-navbar {
      padding: 30px;
      display: flex;
      gap: 10px;

      @media screen and (max-width: 768px) {
        display: none;
      }

      a {
        font-weight: 400;
        color: $gray-100;
        text-decoration: none;

        &.router-link-exact-active {
          color: $orange-100;
          font-weight: 600;
        }
      }
    }

    .profile-wrapper {
      display: flex;
      gap: 10px;
      align-items: center;

      .profile-image {
        width: 40px;
        height: 40px;
        border-radius: 50%;

        img {
          width: 100%;
          object-fit: cover;
        }
      }

      .profile-name {
        font-weight: 500;
        color: $black-100;
      }
    }
  }
}
</style>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      count: 0,
    };
  },
};
</script>
