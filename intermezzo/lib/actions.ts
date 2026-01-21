
export const scrollToId = (id: string, offset = 0) => {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
};


export const triggerContact = (mode: "email" | "phone", value: string) => {
  if (typeof window === "undefined") return;
  
  // Clean the value - remove any existing protocol prefixes
  const cleanValue = value.replace(/^(mailto:|tel:|callto:)/i, "").trim();
  
  const url = mode === "email" 
    ? `mailto:${cleanValue}` 
    : `tel:${cleanValue.replace(/\s+/g, "")}`;
  
  // Use window.open as fallback, or create an anchor element
  try {
    window.location.href = url;
  } catch (error) {
    // Fallback: create a temporary anchor element
    const link = document.createElement("a");
    link.href = url;
    link.click();
  }
};
