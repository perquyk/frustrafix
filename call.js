let page = window.location.href;
if(page == "https://smartfix.unit-t.eu/interventions?" || page == "https://smartfix.unit-t.eu/interventions"){
    //script waits 5 seconds, then runs all this code
    setTimeout(() => {
        gmapsBtn();
        //selecting ul where 4 buttons are located
        var BtnUL = document.querySelector(".extra-info-tab-buttons.nav.nav-flushed");
        console.log(BtnUL);
        
        //selecting all buttons inside array
        var btnQuerySelector = BtnUL.querySelectorAll("li");
        console.log(btnQuerySelector);

        //defining each li as a var
        var remarkLI = btnQuerySelector[0];
        var contactLI = btnQuerySelector[1];
        var productLI = btnQuerySelector[2];
        var moreinfoLI = btnQuerySelector[3];
        
        //add a listitem to the UL for SPOT
        var spotLI = document.createElement("li");
        spotLI.className = "nav-item";
        spotLI.role = "presention";
        spotLI.innerHTML = '<button type="button" id="extra-info-tabs-tab-5" role="tab" data-rr-ui-event-key="5" aria-controls="extra-info-tabs-tabpane-5" aria-selected="true" class="nav-link active"><button class="btn extra-info-active-tab d-flex align-items-center" id="intervention-tab" style="transition: transform 0.25s ease 0s;"><span class="mx-2">SPOT</span></button></button>'
        //add a listitem to the UL for ANTS
        var antsli = document.createElement("li");
        antsli.className = "nav-item";
        antsli.role ="presentation";
        antsli.innerHTML = '<button type="button" id="extra-info-tabs-tab-5" role="tab" data-rr-ui-event-key="5" aria-controls="extra-info-tabs-tabpane-5" aria-selected="true" class="nav-link active"><button class="btn extra-info-active-tab d-flex align-items-center" id="intervention-tab" style="transition: transform 0.25s ease 0s;"><span class="mx-2">Modem Test</span></button></button>'
        antsli.id = "antsbtn";
        BtnUL.appendChild(spotLI);
        BtnUL.appendChild(antsli);

        //maps
        var mapli = document.createElement('li');
        mapli.className = "nav-item";
        mapli.role = "presentation";
        mapli.innerHTML = '<button type="button" id="extra-info-tabs-tab-5" role="tab" data-rr-ui-event-key="5" aria-controls="extra-info-tabs-tabpane-5" aria-selected="true" class="nav-link active"><button class="btn extra-info-active-tab d-flex align-items-center" id="intervention-tab" style="transition: transform 0.25s ease 0s;"><span class="mx-2">Google Maps</span></button></button>';
        mapli.id = "mapbtn";
        BtnUL.appendChild(mapli);

        //eventlisteners for added buttons
        spotLI.querySelector("button").firstChild.addEventListener("click", spotbtn);
        document.getElementById("antsbtn").addEventListener("click", antsbtn);
        document.getAnimations("mapli").addEventListener("click", gmapsBtn);


        //functions for added buttons
        function spotbtn(){
            var url = "https://spot.prd.apps.telenet.be/care/customer/";
            var taskgroupidElement = document.querySelector(".flex-item.dayplanning-chip.dayplanning-taskgroup-name.badge.bg-none");
            var taskgroupID = taskgroupidElement.textContent;
            var klantnr = taskgroupID.split("_")[1];
            console.log("klantnummer: " + klantnr);
            window.open(url + klantnr, "_blank")
        }

        function antsbtn(){
            var url = "http://ants.inet.telenet.be/tools/modems/modemtest#modem=";
            var taskgroupidElement = document.querySelector(".flex-item.dayplanning-chip.dayplanning-taskgroup-name.badge.bg-none");
            var taskgroupID = taskgroupidElement.textContent;
            var klantnr = taskgroupID.split("_")[1];
            console.log("klantnummer: " + klantnr);
            window.open(url + klantnr, "_blank")
        }


        function gmapsBtn(){
            var address = document.querySelector("address");
            console.log(address);
            

        }
    }, 5000);
}

