let page = window.location.href;
if(page == "https://smartfix.unit-t.eu/interventions?" || page == "https://smartfix.unit-t.eu/interventions"){
    //script waits 5 seconds, then runs all this code
    setTimeout(() => {
        //add buttons to navbar in dayplanning to go to entity viewer and stock overview
        const header = document.querySelector("#kt_header_menu");
        const navbar = header.querySelector(".menu-nav");

        //stockbutton
        const stockli = document.createElement("li")
        stockli.className = "menu-item"
        const stockBtn = document.createElement("btn");
        stockli.appendChild(stockBtn);
        stockBtn.textContent = "Warehouse Overview"
        stockBtn.className= "btn-primary btn"

        //entity viewer button
        const entityViewerli = document.createElement("li")
        entityViewerli.className = "menu-item"
        const entityViewerBtn = document.createElement("btn");
        entityViewerli.appendChild(entityViewerBtn);
        entityViewerBtn.textContent = "Entity Viewer"
        entityViewerBtn.className= "btn-primary btn"


        navbar.appendChild(stockli);
        navbar.appendChild(entityViewerli);

        stockBtn.addEventListener("click", function(){
            window.open("https://webclient.unit-t.eu/warehouses/overview/?sopReferrer=interventions&sopLang=en_US", "_self")
        })
        entityViewerli.addEventListener("click", function(){
            window.open("https://smartfix.unit-t.eu/tasks?", "_self")
        })

        console.log(navbar);
    },500)
    setTimeout(() => {
        //selecting ul where 4 buttons are located
        const BtnUL = document.querySelector(".extra-info-tab-buttons.nav.nav-flushed");
        
        //selecting all buttons inside array
        const btnQuerySelector = BtnUL.querySelectorAll("li");
        
        //add a listitem to the UL for SPOT
        const spotLI = document.createElement("li");
        spotLI.className = "nav-item";
        spotLI.role = "presentation";
        spotLI.innerHTML = '<button type="button" id="extra-info-tabs-tab-5" role="tab" data-rr-ui-event-key="5" aria-controls="extra-info-tabs-tabpane-5" aria-selected="true" class="nav-link active"><button class="btn extra-info-active-tab d-flex align-items-center" id="intervention-tab" style="transition: transform 0.25s ease 0s;"><span class="mx-2">SPOT</span></button></button>'
        //add a listitem to the UL for ANTS
        const antsli = document.createElement("li");
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
            const url = "https://spot.prd.apps.telenet.be/care/customer/";
            const taskgroupidElement = document.querySelector(".flex-item.dayplanning-chip.dayplanning-taskgroup-name.badge.bg-none");
            const taskgroupID = taskgroupidElement.textContent;
            const klantnr = taskgroupID.split("_")[1];
            window.open(url + klantnr, "_blank")
        }
        function antsbtn(){
            const url = "http://ants.inet.telenet.be/tools/modems/modemtest#modem=";
            const taskgroupidElement = document.querySelector(".flex-item.dayplanning-chip.dayplanning-taskgroup-name.badge.bg-none");
            const taskgroupID = taskgroupidElement.textContent;
            const klantnr = taskgroupID.split("_")[1];
            window.open(url + klantnr, "_blank")
        }

        // if Business Tech is enabled in options:
        chrome.storage.sync.get("businesstech", (data) => {
            if (data.businesstech) {
                const taakTitel = document.querySelector(".dayplanning-project-name");
                const taakSpan = taakTitel.querySelector("span");

                // check if first task is a TB Repair task >>> true ? show c@fe button
                if(taakSpan.textContent.trim() === "TB Repair Integration"){
                    const cafeurl = "https://cafe.prd.apps.telenet.be/afe/be/telenet/afe/installationandrepair/FTLogon.jsp"

                    const cafeli = document.createElement("li");

                    cafeli.className = "nav-item";
                    cafeli.role ="presentation";
                    cafeli.innerHTML = '<button type="button" id="extra-info-tabs-tab-5" role="tab" data-rr-ui-event-key="5" aria-controls="extra-info-tabs-tabpane-5" aria-selected="false" class="nav-link"><button class="btn extra-info-active-tab d-flex align-items-center" id="intervention-tab" style="transition: transform 0.25s ease 0s;"><i class="fa fa-coffee" style="color: white;"></i><span class="mx-2">C@fe</span></button></button>'
                    cafeli.id = "C@fe";

                    cafeli.addEventListener("click",  cafebtn)
                    function cafebtn() {
                        window.open(cafeurl, "_blank")
                    }


                    BtnUL.appendChild(cafeli);
                    // afterwards checks if first task is a private appointment >> true ? show Salesforce button
                    const subtype = document.querySelector(".flex-item.dayplanning-chip.dayplanning-professional-appointment.badge.bg-none");
                    if(subtype.textContent === "Professional Appointment"){
                        const salesforceurl = "https://telenet.lightning.force.com/lightning/page/home"
                        const salesforceLI = document.createElement("li");
                        salesforceLI.className = "nav-item";
                        salesforceLI.role ="presentation";
                        salesforceLI.innerHTML = '<button type="button" id="extra-info-tabs-tab-5" role="tab" data-rr-ui-event-key="5" aria-controls="extra-info-tabs-tabpane-5" aria-selected="false" class="nav-link"><button class="btn extra-info-active-tab d-flex align-items-center" id="intervention-tab" style="transition: transform 0.25s ease 0s;"><i class="fa fa-cloud" style="color: white;"></i><span class="mx-2">SalesForce</span></button></button>'
                        salesforceLI.id = "Salesforce";
                        BtnUL.appendChild(salesforceLI);
                        salesforceLI.addEventListener("click", salesforcebtn)
                        function salesforcebtn() {
                            window.open(salesforceurl, "_blank")
                        }
                    }

                }
            }
        })

    }, 5000);
}

