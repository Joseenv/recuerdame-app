<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const links = [
    { name: 'Inicia sesión', route: { name: 'loginView' } },
    { name: 'Regístrate', route: { name: 'signUpView' } }
];
</script>

<template>
    <header class="header">
        <nav class="navbar">
            <div class="navbar__logo" @click="router.push({name: 'homeView'})">
                <img src="../../../assets/logo-img.svg" alt="Logo de Recuerdame" class="logo__img">
                <span class="logo__title">Recuérdame</span>
            </div>
            <ul class="navbar__menu">
                <li class="menu__item" v-for="link in links" :key="link.id">
                    <router-link class="menu__link" :to="link.route"> {{ link.name }} </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.header {
    background-color: #fff;
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 6rem;
}
.navbar {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    padding: 0 8px;
}
.navbar__logo {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.logo__img {
    width: 16px;
    margin-right: 4px;
}
.logo__title {
    color: #58968B;
    font-size: 16px;
    font-weight: 700;
}
.navbar__menu {
    display: flex;
    gap: 16px;    
}
.menu__item {
    list-style: none;
}
.menu__link {
    color: #303135;
    font-size: 12px;
    text-decoration: none;
    font-weight: 500;
}
.menu__item:last-child .menu__link {
    background: #FFBF5C;
    color: #fff;
    padding: 8px 12px;
    border-radius: 5px;
}
@media(min-width: 767px) {
    .navbar {
        padding: 0 24px;
    }
    .navbar__menu {
        gap: 32px;    
    }
}
@media(min-width: 1023px) {
    .logo__img {
        width: 20px;
        margin-right: 8px;
    }
    .logo__title {
        font-size: 20px;
    }
    .navbar {
        padding: 0 24px;
    }
    .menu__link {
        font-size: 14px;
    }

}
</style>