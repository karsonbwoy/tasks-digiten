const trustedOrigin = "null" // When messagge is sent from a local file, the origin is "null".

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener(
        "message",
        (event) => {
            if (event.origin !== trustedOrigin) {
                return;
            }
            const subscriptionMessage = document.querySelector(
                ".subscription-message"
            );
            subscriptionMessage.textContent = "You have subscribed!";
        }
    );

});