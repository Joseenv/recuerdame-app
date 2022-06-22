<script setup>
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';

const SignUpForm = defineAsyncComponent( () => import('../components/SignUpForm.vue') )
const router = useRouter()
</script>

<template>
    <section class="signup">
        <article class="signup__container">
            <img src="../../../assets/signup-img.svg" alt="Sign Up image" class="signup__img">
            <div class="signup__headers">
                <h2 class="headers__title">¿Se trata de tu primera visita?</h2>
                <p class="headers__description">Crea una cuenta para continuar</p>
            </div>
            <SignUpForm/>
            <p class="signup__footer">¿Ya tienes una cuenta? 
                <span class="footer__link" @click="router.push({name: 'loginView'})">Inicia sesión</span>
            </p>
        </article>
    </section>
</template>

<style scoped>
.signup {
    width: 100%;
}
.signup__container {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: 100%;
    margin: 32px auto;
    max-width: 1440px;
    padding: 0 16px;
    width: 100%;
}
.signup__img {
    margin-top: 24px;
    width: 32rem;
    object-fit: cover;
}
.signup__headers {
    width: 100%;
    text-align: left;
}
.headers__title {
    font-size: 2rem;
    color: #1F1F1F;
}
.headers__description {
    color: #303135;
    font-size: 14px;
}
.signup__footer {
    color: #303135;
    font-size: 12px;
}
.footer__link {
    color: #FF9B00;
    font-weight: 500;
    cursor: pointer;
}
</style>