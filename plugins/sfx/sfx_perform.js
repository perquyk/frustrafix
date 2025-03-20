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

}