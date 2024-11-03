console.log("ts running..");




// Select elements by their IDs and class names
const sidebarToggle = document.getElementById("sidebarToggle") as HTMLElement;
const navbar = document.querySelector(".navbar") as HTMLElement;

// Function to handle the sidebar toggle
function toggleSidebar(): void {
    if (navbar) {
        navbar.classList.toggle("active"); // Toggle the 'active' class to show/hide sidebar
    }
}

// Check if the sidebarToggle element exists to avoid any TypeScript null errors
if (sidebarToggle) {
    sidebarToggle.addEventListener("click", toggleSidebar);
}
