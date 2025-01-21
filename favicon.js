chrome.storage.sync.get("favicon", (data) => {
        if (data.favicon) {
            changeFavicon();
        } else {
            console.log("favicon not enabled.");
        }
    })



function changeFavicon() {
    const site = document.location.host;
    if(site === 'webclient.unit-t.eu' || 'smartfix.unit-t.eu'){
        const head = document.head

        const icon = document.createElement("link");
        icon.href = "https://cdn-icons-png.flaticon.com/512/9459/9459152.png";
        icon.rel = "icon";
        icon.type = "image/x-icon";


        const links = document.querySelectorAll("link");
        links.forEach(link => {
            if(link.type==="image/x-icon"){link.remove()};
            if(link.rel==="icon" ){link.remove()};
        })
        head.prepend(icon);



        console.log(head);
    }
}