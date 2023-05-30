const accordion = () => {
  const accordionWrappers = document.querySelectorAll(".accordions");

  accordionWrappers.forEach(wrapper => {
    // if wrapper "class='accordion' data-accordion-only-one='true'" then we close every accordion and open only one
    const accordionOnlyOne = wrapper.dataset.accordionOnlyOne;
    const accordions = wrapper.querySelectorAll(".accordion");

    const accordionInitOpen = wrapper.querySelectorAll(".accordion--open");
    const btns = wrapper.querySelectorAll(".accordion__btn");

    // Close Accordion
    const closeAccordion = (accordion, accordionContent) => {
      // remove active class
      accordion.classList.remove("accordion--open");
      // set maxHeight for 0
      accordionContent.style.maxHeight = 0;
    };

    // Close every accordion in this wrapper
    const closeEveryAccordion = accordions => {
      accordions.forEach(accordion => {
        const accordionContent = accordion.querySelector(".accordion__content");
        closeAccordion(accordion, accordionContent);
      });
    };

    const openAccordion = (accordion, accordionContent) => {
      accordion.classList.add("accordion--open");
      accordionContent.style.maxHeight = `${
        accordionContent.scrollHeight * 1
      }px`;
    };

    // Open/Close accordion
    const toggleAccordion = (accordion, accordionContent) => {
      // if accordion now open we close it
      if (accordion.classList.contains("accordion--open")) {
        closeAccordion(accordion, accordionContent);
        return;
      }

      // open accordion
      openAccordion(accordion, accordionContent);
    };

    btns.forEach(btn => {
      btn.addEventListener("click", e => {
        const accordion = e.target.closest(".accordion");
        const accordionContent = accordion.querySelector(".accordion__content");

        // If = true then we close every accordion and open only one
        if (accordionOnlyOne) {
          closeEveryAccordion(accordions);
        }

        toggleAccordion(accordion, accordionContent);
      });
    });

    // Init Open
    accordionInitOpen.forEach(accordion => {
      const accordionContent = accordion.querySelector(".accordion__content");
      openAccordion(accordion, accordionContent);
    });
  });
};
window.addEventListener("load", accordion);
