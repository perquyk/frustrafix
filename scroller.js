var sfx = "webclient.unit-t.eu";
if(document.location.host == sfx){
    if(document.title == "WC: Perform"){
    //klantinfo
    var loc_klantinfo = document.querySelector(".portlet-body.clearfix.cust-details-portlet-body")
    var klantinfo = document.createElement("button");
    klantinfo.style.position = "fixed";
    klantinfo.style.bottom = "0px";
    klantinfo.style.left = "0px";
    klantinfo.style.padding = "10px";
    klantinfo.style.backgroundColor = "blue";
    klantinfo.style.color = "white";
    klantinfo.style.border = "none";
    klantinfo.style.borderRadius = "5px";
    klantinfo.style.cursor = "pointer";
    klantinfo.style.zIndex = "100000";
    klantinfo.id = "klantinfoo";
    klantinfo.innerText = "Customer Details";
    document.body.appendChild(klantinfo);
    klantinfo.addEventListener("click", scroll_klantinfo)
    function scroll_klantinfo(){
        loc_klantinfo.scrollIntoView();
        }
    //ordertasks
    var loc_order = document.querySelector(".portlet-body.clearfix.provision-portlet-body")
    var order = document.createElement("button");
    order.style.position = "fixed";
    order.style.bottom = "0px";
    order.style.left = "127px";
    order.style.padding = "10px";
    order.style.backgroundColor = "blue";
    order.style.color = "white";
    order.style.border = "none";
    order.style.borderRadius = "5px";
    order.style.cursor = "pointer";
    order.style.zIndex = "100000";
    order.id = "order-tasks";
    order.innerText = "Order Task";
    document.body.appendChild(order);
    order.addEventListener("click", scroll_order)
    function scroll_order(){
        loc_order.scrollIntoView();
        }
    //prov
    var loc_prov = document.querySelector(".fa.fa-calendar");
    var prov = document.createElement("button");
    prov.style.position = "fixed";
    prov.style.bottom = "0px";
    prov.style.left = "215px";
    prov.style.padding = "10px";
    prov.style.backgroundColor = "blue";
    prov.style.color = "white";
    prov.style.border = "none";
    prov.style.borderRadius = "5px";
    prov.style.cursor = "pointer";
    prov.style.zIndex = "100000";
    prov.id = "prov";
    prov.innerText = "Provisionering";
    document.body.appendChild(prov);
    prov.addEventListener("click", scroll_prov)
    function scroll_prov(){
        loc_prov.scrollIntoView();
        }

    //sap
    var loc_sap = document.querySelector(".portlet-body.clearfix.sap-details-portlet-body");
    var sap = document.createElement("button");
    sap.style.position = "fixed";
    sap.style.bottom = "0px";
    sap.style.left = "323px";
    sap.style.padding = "10px";
    sap.style.backgroundColor = "blue";
    sap.style.color = "white";
    sap.style.border = "none";
    sap.style.borderRadius = "5px";
    sap.style.cursor = "pointer";
    sap.style.zIndex = "100000";
    sap.id = "sap";
    sap.innerText = "Sap Details";
    document.body.appendChild(sap);
    sap.addEventListener("click", scroll_sap)
    function scroll_sap(){
        loc_sap.scrollIntoView();
        }
    //mat
    var loc_mat = document.querySelector("#table_products");
    var mat = document.createElement("button");
    mat.style.position = "fixed";
    mat.style.bottom = "0px";
    mat.style.left = "414px";
    mat.style.padding = "10px";
    mat.style.backgroundColor = "blue";
    mat.style.color = "white";
    mat.style.border = "none";
    mat.style.borderRadius = "5px";
    mat.style.cursor = "pointer";
    mat.style.zIndex = "100000";
    mat.id = "mat";
    mat.innerText = "Materialen";
    document.body.appendChild(mat);
    mat.addEventListener("click", scroll_mat)
    function scroll_mat(){
        loc_mat.scrollIntoView();
        }
    //afmelden
    var loc_afm = document.querySelector(".fa.fa-list-alt");
    var afm = document.createElement("button");
    afm.style.position = "fixed";
    afm.style.bottom = "0px";
    afm.style.left = "500px";
    afm.style.padding = "10px";
    afm.style.backgroundColor = "blue";
    afm.style.color = "white";
    afm.style.border = "none";
    afm.style.borderRadius = "5px";
    afm.style.cursor = "pointer";
    afm.style.zIndex = "100000";
    afm.id = "mat";
    afm.innerText = "Afmelden";
    document.body.appendChild(afm);
    afm.addEventListener("click", scroll_afm)
    function scroll_afm(){
        loc_afm.scrollIntoView();
        }



    }


}