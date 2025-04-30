        // Function to scroll to the corresponding heading div block based on the clicked image
        function scrollToTarget(targetName) {
            // Get the target block by its ID using the passed text name
            const target = document.getElementById('section-' + targetName);

            // Scroll to the target element with smooth behavior
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }