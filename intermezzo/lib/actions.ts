
export const scrollToId = (id: string, offset = 0) => {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
};


export const triggerContact = (mode: "email" | "phone", value: string) => {
  if (typeof window === "undefined") return;
  window.location.href =
    mode === "email" ? `mailto:${value}` : `tel:${value.replace(/\s+/g, "")}`;
};
