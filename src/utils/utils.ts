export const scrollToSection = (
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  target: string
): void => {
  e.preventDefault();
  const targetElement = document.querySelector(target) as HTMLElement | null;
  if (targetElement) {
    const offsetTop = targetElement.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};
