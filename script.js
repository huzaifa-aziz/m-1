console.log("ts running..");
// Select elements by their IDs and class names
var sidebarToggle = document.getElementById("sidebarToggle");
var navbar = document.querySelector(".navbar");
// Function to handle the sidebar toggle
function toggleSidebar() {
    if (navbar) {
        navbar.classList.toggle("active"); // Toggle the 'active' class to show/hide sidebar
    }
}
// Check if the sidebarToggle element exists to avoid any TypeScript null errors
if (sidebarToggle) {
    sidebarToggle.addEventListener("click", toggleSidebar);
}
