function dropFunction() {
    document.getElementById("dropID").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropBtn')) {
        // get theDropStuff
        let dropdowns = document.getElementsByClassName("theDropStuff");

        // run through the one position that dropdowns will have and add or remove the show function
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}