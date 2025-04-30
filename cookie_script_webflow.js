<script>
document.addEventListener("DOMContentLoaded", function () {
    function getCookie(name) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    function setCookie(name, value, days) {
        let expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration in days
        document.cookie = name + "=" + value + ";expires=" + expires.toUTCString() + ";path=/"; // 'path=/' makes it available site-wide
    }

    if (!getCookie("cookieConsent")) {
        let consentBanner = document.createElement("div");
        consentBanner.innerHTML = `
            <div id="cookie-banner" style="position:fixed;bottom:10px;left:50%;transform:translateX(-50%);
                background:#222;color:#fff;padding:15px 20px;border-radius:8px;box-shadow:0px 4px 10px rgba(0,0,0,0.2);
                z-index:1000;display:flex;align-items:center;gap:10px;">
                <span>We use cookies to enhance your experience. By continuing, you accept our <a href="/privacy-policy" style="color:#fff;text-decoration:underline;">privacy policy</a>.</span>
                <button id="accept-cookies" style="background:#4CAF50;color:#fff;border:none;padding:8px 15px;border-radius:5px;cursor:pointer;">Accept</button>
            </div>
        `;
        document.body.appendChild(consentBanner);

        document.getElementById("accept-cookies").addEventListener("click", function () {
            setCookie("cookieConsent", "true", 365); // Store cookie for 1 year
            document.getElementById("cookie-banner").remove();
        });
    }
});
</script>
