if(document.title === "WC: Perform"){
    const todoPortletBody = document.querySelector("[id^='element-chosen-products-for']");
    console.log(todoPortletBody)
    const productsToBeInstalled = todoPortletBody.innerHTML.trim().split("<br>");
    const newAr = []

    productsToBeInstalled.forEach((product, index) => {
        switch(product){
            case "1 x [BSCM0102] Basic Communication":
                product = "1 x [BSCM0102] Phone Pro 2 Go"
                break;
            case "1x [SMCM0104] Smart Communication":
                product = "1 x [SMCM0104] Voice Pro Multi"
            default:
                break;
        }
        newAr.push(product)
    })
    todoPortletBody.innerText = makeString()

    function makeString() {
        let str = "";
        for(let i = 0; i < newAr.length; i++) {
            str += newAr[i] + '\n'
        }
        return str
    }
}