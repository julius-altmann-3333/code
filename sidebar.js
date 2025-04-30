const sections = document.querySelectorAll("section");
    const labels = document.querySelectorAll("#sidebar p");

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / totalHeight) * 100;
      document.getElementById("vertical-progress").style.height = progress + "%";

      // Highlight logic
      let current = "";
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = index;
        }
      });

      labels.forEach((label, index) => {
        label.classList.toggle("active", index === current);
      });
    });