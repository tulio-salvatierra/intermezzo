
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
  
  // Create a temporary anchor element and click it
  // This is more reliable than window.location.href or window.open
  const link = document.createElement("a");
  link.href = url;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  
  // Clean up after a short delay
  setTimeout(() => {
    document.body.removeChild(link);
  }, 100);
};
