export const scrollToSection = (sectionId: string) => {
  const navbarHeight = 76;
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  }
};
