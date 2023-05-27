const accordion = () => {
  const accordionBtns = document.querySelectorAll(".accordion__btn");
  const accorionInitOpen = document.querySelectorAll(".accordion--init-open");

  accordionBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      const parent = e.target.closest(".accordion");
      const content = parent.querySelector(".accordion__content");

      if (parent.classList.contains("accordion--open")) {
        parent.classList.remove("accordion--open");
        content.style.maxHeight = 0;
        return;
      }
      parent.classList.add("accordion--open");
      content.style.maxHeight = `${content.scrollHeight * 2}px`;
    });
  });

  accorionInitOpen.forEach(accordionOpen => {
    accordionOpen.querySelector(".accordion__btn").click();
    accordionOpen.classList.remove("accordion--init-open");
  });
};
window.addEventListener("load", accordion);
