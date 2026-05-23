const year = document.querySelector("#year");
const filters = document.querySelectorAll(".filter");
const publications = document.querySelectorAll(".publication");
const emailLinks = document.querySelectorAll(".email-link");

year.textContent = new Date().getFullYear();

emailLinks.forEach((link) => {
  const address = `${link.dataset.user}@${link.dataset.domain}`;
  link.textContent = address;
  link.href = `mailto:${address}`;
});

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const type = filter.dataset.filter;

    filters.forEach((button) => button.classList.remove("active"));
    filter.classList.add("active");

    publications.forEach((publication) => {
      const shouldShow = type === "all" || publication.dataset.type === type;
      publication.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
