import { useEffect } from "react";

const useObserver = ({
  selector,
  sectionSelector,
  classToAddOnEnter,
  classToAddOnExit,
  root = null,
  rootMargin = "0px",
  threshold = 0.4,
}) => {
  useEffect(() => {
    const $changeNav = document.querySelector(selector);
    const $sectionElements = document.querySelectorAll(sectionSelector);

    if (!$changeNav || !$sectionElements.length) return;

    const observerOptions = {
      root,
      rootMargin,
      threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $changeNav.classList.add(classToAddOnEnter);
          $changeNav.classList.remove(classToAddOnExit);
        } else {
          $changeNav.classList.add(classToAddOnExit);
          $changeNav.classList.remove(classToAddOnEnter);
        }
      });
    }, observerOptions);

    $sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [
    selector,
    sectionSelector,
    classToAddOnEnter,
    classToAddOnExit,
    root,
    rootMargin,
    threshold,
  ]);
};

export default useObserver;
