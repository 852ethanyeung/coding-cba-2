// When the user clicks on the button, toggle between hiding and showing the dropdown content //
function togglePrimaryDropdown() {
    var dropdown = document.getElementById("primaryNavDropdown");
    dropdown.classList.toggle("show-primary-nav-dropdown")
}

function toggleSecondaryDropdown() {
    var dropdown = document.getElementById("secondaryNavDropdown");
    dropdown.classList.toggle("show-secondary-nav-dropdown")
}
// Close the dropdown if the user clicks outside of it //
window.onclick = function (event) {
    var primaryTarget = event.target.matches("#primaryNavDropdownButton");
    var secondaryTarget = event.target.matches("#secondaryNavDropdownButton");

    var openDropdown = document.getElementById("primaryNavDropdown");
    if (openDropdown.classList.contains("show-primary-nav-dropdown")) {
        openDropdown.classList.remove("show-primary-nav-dropdown");
    }

    var openDropdown = document.getElementById("secondaryNavDropdown");
    if (openDropdown.classList.contains("show-secondary-nav-dropdown")) {
        openDropdown.classList.remove("show-secondary-nav-dropdown");
    }

    if (primaryTarget) {
        var openDropdown = document.getElementById("primaryNavDropdown");
        openDropdown.classList.add("show-primary-nav-dropdown");
    } else if (secondaryTarget) {
        var openDropdown = document.getElementById("secondaryNavDropdown");
        openDropdown.classList.add("show-secondary-nav-dropdown");
    }
}

function viewportChanges() {
    var viewportWidthREM = window.innerWidth / 16;
    if (viewportWidthREM >= 70) {
        var openDropdown = document.getElementById("primaryNavDropdown");
        if (openDropdown.classList.contains("show-primary-nav-dropdown")) {
            openDropdown.classList.remove("show-primary-nav-dropdown");
        }
        var openDropdown = document.getElementById("secondaryNavDropdown");
        if (openDropdown.classList.contains("show-secondary-nav-dropdown")) {
            openDropdown.classList.remove("show-secondary-nav-dropdown");
        }
    }
}

window.addEventListener("resize", viewportChanges);