document.addEventListener("DOMContentLoaded", () => {
  fetch("loader.html")
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML("beforeend", html);

      const loader = document.getElementById("page-loader");

      // کلیک لە لینکەکان
      document.querySelectorAll("a[href]").forEach(link => {
        link.addEventListener("click", e => {
          const href = link.getAttribute("href");

          if (!href.startsWith("چاوەروانبە....") && !href.startsWith("http")) {
            e.preventDefault();
            loader.classList.add("active");

            setTimeout(() => {
              window.location.href = href;
            }, 700);
          }
        });
      });

      // کاتێک پەیج باربوو
      window.addEventListener("load", () => {
        loader.classList.remove("active");
      });
    });
});
