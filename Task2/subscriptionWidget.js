const successMessage = document.querySelector(".success-message");

function handleSubmit(event) {
    event.preventDefault();
    window.top.postMessage("subscribed", "*");
    successMessage.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("subscriptionForm");
    form.addEventListener("submit", (e) => handleSubmit(e));
});