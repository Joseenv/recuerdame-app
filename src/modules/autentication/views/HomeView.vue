<template>
    <section class="home">
        <article class="home__container">
            <img src="../../../assets/home-img.svg" alt="Hero img" class="home__img">
            <span class="home__title">
                ¡Que no se te escapen las ideas!
            </span>
            <p class="home__paragraph">
                Guarda esos chispasos de creatividad en notas personalizadas y accede a ellas de una manera rápida y sencilla.
            </p>
            <router-link :to=" {name: 'loginView'} " class="home__btn">
                Empezar ahora
            </router-link>
        </article>
    </section>
</template>

<style scoped>
.home {
    background-color: #fff;
    height: calc(100vh - 6rem);
    overflow: hidden;
    width: 100%;
}
.home__container {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    padding: 0 16px;
}
.home__img{
    width: 32rem;
    object-fit: cover;
}
.home__title{
    color: #58968B;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    margin: 1.6rem 0;
}
.home__paragraph{
    color: #303135;
    font-size: 14px;
    text-align: justify;
    font-weight: 400;
    margin-bottom: 3.2rem;
}
.home__btn{
    background-color: #58968B;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 5px;
}

</style>