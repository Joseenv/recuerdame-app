<template>
    <form action="submit" class="signup__form" method="post">
        <div class="form__item">
            <label for="user" class="item__label">Usuario <span class="label__obligatory">*</span></label>
            <input class="item__input" name="user" type="text" id="user" placeholder="Tu usuario">
        </div>
        <div class="form__item">
            <label for="password" class="item__label">Contraseña <span class="label__obligatory">*</span></label>
            <input class="item__input" name="password" type="password" id="password" placeholder="Tu contraseña">
        </div>
        <button type="submit" id="btnSubmit" class="form__btn">Continuar</button>
    </form>
</template>

<style scoped>
.signup__form {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
}
.form__item {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}
.item__label {
    color: #58968B;
    font-size: 14px;
    font-weight: 500;
}
.label__obligatory {
    color: #FF9B00;
}
.item__input {
    color: rgba(51, 57, 65, 0.8);
    background-color: #F4F4F4;
    border-radius: 5px;
    border: none;
    font-size: 12px;
    height: 4rem;
    padding-left: 16px;
    width: 100%;

}
.item__input:focus{
    outline: 1px solid #FFBF5C;
}
.form__btn {
    color: #fff;
    background-color: #58968B;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    height: 4rem;
    width: 100%;
    cursor: pointer;
}
</style>