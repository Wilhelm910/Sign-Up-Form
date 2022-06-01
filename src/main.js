document.addEventListener("DOMContentLoaded", () => {

function onChange() {
    const password = document.querySelector("input[name=user_password]");
    const confirm = document.querySelector("input[user_confirm_password]");

    if (password.value === confirm.value) {
        confirm.setCustomValidity("");
    } else {
        confirm.setCustomValidity("Passwords do not match")
    }

}    
onChange();
})