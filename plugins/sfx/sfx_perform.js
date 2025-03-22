removeShells();
changeButtons();


function removeShells(){
    for (var i = 0; i < 5; i++){
        setTimeout(() => {
            if($("#timer")){
                $("#timer").remove();
            }
            if($("#sh_btn_header_spot")){
                $("#sh_btn_header_spot").remove();
            }
            if($("#sh_btn_header_ants")){
                $("#sh_btn_header_ants").remove();
            }
            if($("div[style='width:2px;height:45px;border-right:4px solid white;float:left;margin-left:10px;']")){
                $("div[style='width:2px;height:45px;border-right:4px solid white;float:left;margin-left:10px;']").remove();
            }
                   
        }, 1000);
    }
}

function changeButtons(){
    $("#save-in-between").html('<i class="fa fa-save" style="font-size: 17px"></i>');
    $("#go-to-probleemmelder").attr("class", "btn red");
    $("#go-to-probleemmelder").text("PM");
    $("#go-to-mijntelenet").attr("class", "btn yellow");
    $("#go-to-mijntelenet").text("MyTLN");
}

function addCustomerButtons() {
    const antsURL = "http://ants.inet.telenet.be/tools/modems/modemtest#modem=";
    const streetURL = "http://ants.inet.telenet.be/tools/nodes/livenodeping#node-input=";
    const spotURL = "https://spot.prd.apps.telenet.be/care/customer/";
    const nodeURL = "https://spot.prd.apps.telenet.be/care/network/";
    
    const injectTarget = $(".nav.navbar-nav");
    

    function navbarPrimaryButton(btnName, label){
        const btnDiv = $("<div>").attr("style", "float: left;");
        const btn = $("<button>").attr("class", "btn btn-dark").text(label).id(btnName);
        btnDiv.append(btn);
        return btnDiv;
    }
    function navbarSecondaryButton(btnName, label){

    }
}