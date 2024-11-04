var sfx = "webclient.unit-t.eu";
if(document.location.host == sfx){

    //console.log(chrome.storage.sync.get(level));
    console.log("smartfix openend.");
    console.log("injecting menu items to sidebar");
    
    sidebar();
    console.log("current technician level: " + techlevel())
    function techlevel(){
        var level;
        let tech = document.querySelector(".username").textContent.trim();
        if(tech == "Kenny Perquy"){
            var level = 10;
            
        }else if(tech.slice(-1) == ")"){
            var level = 2;
        } else{
            var level = 1;
        }
        return level
    }
    function sidebar(){
        
        var sidebarnav = document.querySelector(".page-sidebar-menu");
        var klantnrVar = getKlantnr();
        var nodeVar = getNode();
        var buttonsArray = sidebarnav.querySelectorAll("li");
        //debug array-tester
        
        
        //remove unused buttons
        var helpbtn = buttonsArray[18];
        var betabtn = buttonsArray[16];
        var wishbtn = buttonsArray[15];
        var summbtn = buttonsArray[14];
        var WHbtn = buttonsArray[11];
        var planbtn = buttonsArray[9];
        var optabtn = buttonsArray[8];
        var otvbtn = buttonsArray[5];

        var homebtn = buttonsArray[1];

        //insert bookmark links

        //submenu divider
        var subDivider = document.createElement("hr");
        subDivider.style.margin = "2px";
        subDivider.style.borderTop = "2px solid #595858";

        
        //hive
        var hivebtn = document.createElement("li");
        hivebtn.innerHTML = "<a href='https://comm.unit-t.eu' target='_blank'><i class='fa fa-question' style='color: orange;'></i><span class='title'> Hive </span><span class='arrow'></span>"

        //create submenu for hive
        var hiveul = document.createElement("ul");
        hiveul.className = "sub-menu";

        //define submenu for hive bookmark
        var modempolicy = document.createElement("li");
        modempolicy.innerHTML = "<a href='https://comm.unit-t.eu/thehive/article/modem-policy/' target='_blank'><span class='title'>Modem Policy</span></a>";
        var internetspecs = document.createElement("li");
        internetspecs.innerHTML = "<a href='https://comm.unit-t.eu/thehive/article/internet-specificaties/' target='_blank'><span class='title'>Internet Specificaties</span></a>";
        var CMT = document.createElement("li");
        CMT.innerHTML = "<a href='https://comm.unit-t.eu/' target='_blank'><span class='title'>HIVE</span></a>"
        //append submenu hive
        hivebtn.appendChild(hiveul);
        hiveul.appendChild(CMT);
        hiveul.appendChild(subDivider);
        hiveul.appendChild(modempolicy);
        hiveul.appendChild(internetspecs);


        //ants
        var antsBtn = document.createElement("li");
        antsBtn.innerHTML = "<a href='javascript:;'><i class='fa fa-signal' style='color: #e46262;'></i><span class='title'> Ants </span><span class='arrow'></span>";
        
        //create submenu for ants
        var antsul = document.createElement("ul");
        antsul.className = "sub-menu";
        
        
        //define submenu options ants
        var antsmodemli = document.createElement("li");
        antsmodemli.innerHTML = "<a href='http://ants.inet.telenet.be/tools/modems/modemtest#modem=" + klantnrVar + "' target='_blank'><span class='title'>Modem Test</span></a>";

        var antsstreetli = document.createElement("li");
        antsstreetli.innerHTML = "<a href='http://ants.inet.telenet.be/tools/nodes/livenodeping#node-input=" + nodeVar + "' target='_blank'><span class='title'>Live Node Ping</span></a>";

        var adressnodeli = document.createElement("li");
        adressnodeli.innerHTML = "<a href='http://ants.inet.telenet.be/docs/nodes/address' target='_blank'><span class='title'>Address >> Node</span></a>";

        var searchccapli = document.createElement("li");
        searchccapli.innerHTML = "<a href='http://ants.inet.telenet.be/docs/nodes/relation' target='_blank'><span class='title'>CCAP Lookup</span></a>";
        
        //antsbookmarks appends
        antsBtn.appendChild(antsul);
        antsul.appendChild(antsmodemli);
        antsul.appendChild(antsstreetli);
        antsul.appendChild(subDivider);
        antsul.appendChild(adressnodeli);
        antsul.appendChild(searchccapli);

        
        //spot
        var spotBtn = document.createElement("li");
        spotBtn.innerHTML = "<a href='javascript:;'><i class='fas fa-band-aid' style='color: #ffc800;'></i><span class='title'> Spot </span><span class='arrow'></span>";

        //create submenu options spot
        var spotul = document.createElement("ul");
        spotul.className = "sub-menu";

        //define submenu options spot
        var spotcc = document.createElement("li");
        spotcc.innerHTML = "<a href='https://spot.prd.apps.telenet.be/care/customer/" + klantnrVar + "' target='_blank'><span class='title'>Customer Care</span></a>";

        var spotnc = document.createElement("li");
        spotnc.innerHTML = "<a href='https://spot.prd.apps.telenet.be/care/network/"+nodeVar+"' target='_blank'><span class='title'>Node Care</span></a>";

        //spotbookmarks appends
        spotBtn.appendChild(spotul);
        spotul.appendChild(spotcc);
        spotul.appendChild(spotnc);
        
        //probleemmelder/mijn meldingen buttons
        var probleemBtn = document.createElement("li");
        probleemBtn.innerHTML = "<a href='javascript:;'><i class='fas fa-exclamation' style='color: red;'></i><span class='title'> Probleem </span><span class='arrow'></span>"

        //probleem submenu create
        var probleemul = document.createElement("ul");
        probleemul.className = "sub-menu";

        //define submenu for probleem
        var pmli = document.createElement("li");
        pmli.innerHTML = "<a href='https://portalft.prd.apps.telenet.be/content/pmelder.php' target='_blank'><span class='title'>Probleem Melder</span></a>";
        var mmli = document.createElement("li");
        mmli.innerHTML = "<a href='https://portalft.prd.apps.telenet.be/content/subpages/TechPmc/TConsole.php' target='_blank'><span class='title'>Mijn Meldingen</span></a>";
        
        //probleemmelder appends
        probleemBtn.appendChild(probleemul);
        probleemul.appendChild(pmli);
        probleemul.appendChild(mmli);
        

        //salesforce
        var sfbtn = document.createElement("li");
        sfbtn.innerHTML = "<a href='javascript:;'><i class='fa fa-cloud' style='color: #24bee0;'></i><span class='title'> Salesforce </span><span class='arrow'></span>"

        //salesforce dropdown
        var sful = document.createElement("ul");
        sful.className = "sub-menu";

        //saleforce sub-items
        var recupli = document.createElement("li");
        recupli.innerHTML = "<a href='https://telenet.lightning.force.com/lightning/o/TB_WO_WorkOrderLineItem__c/list?filterName=00B2p000009tCxPEAU' target='_blank'><span class='title'>Recups</span></a>"

        var wolili = document.createElement("li");
        wolili.innerHTML = "<a href='https://telenet.lightning.force.com/lightning/o/TB_WO_WorkOrderLineItem__c/list?filterName=00B2p00000BTGUsEAP' target='_blank'><span class='title'>Assigned To Me</span></a>"

        //submenu appends
        sfbtn.appendChild(sful);
        sful.appendChild(recupli);

        //materiaalshop >> nested in Warehouse
        var matshop = document.createElement("li");
        matshop.innerHTML = "<a href='http://sa-logistics.inet.telenet.be/' target='_blank'><i class='fas fa-shopping-cart' style='color: green;'></i><span class='title'> Materiaalshop </span></span>"

        var KennyStock = document.createElement("li");
        KennyStock.innerHTML = "<a href='https://docs.google.com/spreadsheets/d/1achhzRGaAPYLUWnj8EmhKy96Iy0hxO7Dnp_7V10FHQ8/edit#gid=1188592896' target='_blank'><i class='fas fa-file-excel' style='color: #63e6be;'></i><span class='title'> Stock File </span></span>"

        //b2b menu
        var b2bbtn = document.createElement("li");
        b2bbtn.innerHTML = "<a href='javascript:;'><i class='fas fa-briefcase' style='color: yellow;'></i><span class='title'> B2B Bookmarks </span><span class='arrow'></span>"

        //b2b submenu
        var b2bul = document.createElement("ul");
        b2bul.className = "sub-menu";

        //b2b sub-menu options
        //cafe links
        var Fcafe = document.createElement("li");
        Fcafe.innerHTML = "<a href='https://cafe.prd.apps.telenet.be/afe/be.telenet.afe.login.CAFELogin' target='_blank'><i class='fas fa-coffee' style='color: #86aaea;'></i><span class='title'> C@fe </span></span>"
        var WFM = document.createElement("li");
        WFM.innerHTML = "<a href='https://cafe.prd.apps.telenet.be/wfm/be/telenet/wfm/VWebMain.jsp' target='_blank'><i class='fas fa-coffee' style='color: #86aaea;'></i><span class='title'> WFM </span></span>"
        var NINAS = document.createElement("li");
        NINAS.innerHTML = "<a href='https://cafe.prd.apps.telenet.be/ninas/be/telenet/ninas/mainFrameSet.jsp' target='_blank'><i class='fas fa-coffee' style='color: #86aaea;'></i><span class='title'> NINAS </span></span>"

        var b2bplan = document.createElement("li");
        b2bplan.innerHTML = "<a href='https://unittjfs.sharepoint.com/:x:/r/sites/B2BPlanningForecast/_layouts/15/Doc.aspx?sourcedoc=%7BAF10DF5E-C2F3-4B27-A9D8-AD4D21BEE124%7D&file=planning%202024(live).xlsx&action=default&mobileredirect=true&wdOrigin=OUTLOOK-METAOS.FILEBROWSER.FILES-HOME' target='_blank'><i class='fas fa-file-excel' style='color: #63e6be;'></i><span class='title'> B2B-Planning </span></span>"

        var catsap = document.createElement("li");
        catsap.innerHTML = "<a href='https://comm.unit-t.eu/thehive/article/ftth-stappenplan-installatie/' target='_blank'><i class='fas fa-info-circle' style='color: #bfbfc0;'></i><span class='title'> FTTH: Stappenplan</span></span>"

        
        //b2b submenu appends
        b2bbtn.appendChild(b2bul);
        b2bul.appendChild(Fcafe);
        b2bul.appendChild(WFM);
        b2bul.appendChild(NINAS);
        b2bul.appendChild(b2bplan);
        b2bul.appendChild(subDivider);
        b2bul.appendChild(catsap);


        //level check, then append needed buttons
        switch(techlevel()){
            case 10: 
                addLevel1();
                addLevel2();
                addLevel10();
            case 1:
                //level1 = inhome
                addLevel1();
                break;
            case 2:
                //level2 = b2b
                addLevel1();
                addLevel2();
                break;
        }

        function addLevel1(){
            //all level 1 (inhome) buttons
            sidebarnav.appendChild(antsBtn);
            sidebarnav.appendChild(spotBtn);
            sidebarnav.appendChild(hivebtn);
            sidebarnav.appendChild(probleemBtn);
            
            //tijdelijk tot ik een fix gevonden heb:
            addLevel2();

            //sidebarnav.appendChild(matshop);
            WHbtn.querySelector(".sub-menu").appendChild(matshop);
        }
        function addLevel2(){
            //all level2 (b2b) buttons, level1 is also added in front
            sidebarnav.appendChild(sfbtn);
            sidebarnav.appendChild(b2bbtn);
            
        }
        function addLevel10(){
            //Level 10 = Kenny.. want die moet alles kunnen natuurlijk
            sful.appendChild(wolili);
            WHbtn.querySelector(".sub-menu").appendChild(KennyStock);
            
            
        }

        function getKlantnr(){
            var klantnr;
            if(document.querySelector(".ticket-name-data") !== null){
                var klantnr = document.querySelector(".ticket-name-data").querySelector("span").innerText.substring(0, document.querySelector(".ticket-name-data").querySelector("span").innerText.indexOf(' '));
            }else if(document.getElementById("telenet-cust-details-cont") !== null){
                var klantnr = document.getElementById("telenet-cust-details-cont").querySelector(".cust-details-portlet-body").querySelector(".row").querySelector(".col-sm-12").querySelector("div").querySelector(".table.table-striped").querySelector("tbody").querySelector("tr").querySelector("td").innerText;
            }else{
                var klantnr = "";
            }          
            return klantnr;
        }
        function getNode(){
            var page = document.title;
            var nodeSelect;
            var node = "";
            
            /*switch(page){
                case "WC: Perform":
                    while(nodeSelect == null){
                        var nodeSelect = document.querySelector("#node");
                    }
                    if(nodeSelect !== null){
                        var node = document.querySelector("#node").textContent;
                    }
                    break;
                default:
                    node = "";
                    break
                }*/
            return node;
            
        }
    }
}
