// Animation for table rows
document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll("table tbody tr");
    
    rows.forEach((row, index) => {
      setTimeout(() => {
        row.style.opacity = 1;
        row.style.transform = "translateY(0)";
      }, index * 200); // Delay animation
    });
  });
  
  // Smooth Scroll for Links
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("href").startsWith("#")) {
        event.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  
