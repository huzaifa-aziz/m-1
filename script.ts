console.log("ts running..");




const sidebarToggle = document.getElementById("sidebarToggle") as HTMLElement;
const navbar = document.querySelector(".navbar") as HTMLElement;

function toggleSidebar(): void {
    if (navbar) {
        navbar.classList.toggle("active"); 
    }
}

if (sidebarToggle) {
    sidebarToggle.addEventListener("click", toggleSidebar);
}
