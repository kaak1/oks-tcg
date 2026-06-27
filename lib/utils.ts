export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function scrollToSection(id: string) {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
}
