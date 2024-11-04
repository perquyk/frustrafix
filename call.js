let page = window.location.href;
if(page == "https://smartfix.unit-t.eu/interventions?" || page == "https://smartfix.unit-t.eu/interventions"){
    //script waits 5 seconds, then runs all this code
    setTimeout(() => {
        addInfo();
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

        //eventlisteners for added buttons
        spotLI.querySelector("button").firstChild.addEventListener("click", spotbtn);
        document.getElementById("antsbtn").addEventListener("click", antsbtn);


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

        function addInfo(){
            var div = document.querySelector(".dayplanning-chip.dayplanning-meeting-type.dayplanning-br.badge.rounded-pill.bg-none").parentNode;
            var TS = document.createElement("span");
            TS.className = "dayplanning-chip dayplanning-br badge rounded-pill";
            TS.style.background = checkTScolor();
            TS.innerText = checkTS();
            div.appendChild(TS);
        }

        function checkTS(){
            var TS = document.querySelector(".timeslot");
            if(TS == null){
                var TS = "";
            }else{
                var TS = TS.innerText; 
            }
            return TS;
        }
        function checkTScolor(){
            var TS = checkTS();
            var TScolor;
            switch(TS){
                case 'Day': 
                    var TScolor = "#b77eff";
                case 'Morning':
                    var TScolor = "#d4deff";
                case 'Noon':
                    var TScolor = "#d3d3d3";
                case 'Afternoon':
                    var TScolor = "#ffe1a7";
                case 'Evening':
                    var TScolor = "#ffb67a"
            }
            return TScolor
        }
    }, 5000);
}

