//checks if options is checked, if enabled, call function, if not enabeled, do nothing. pretty simple.
var antpage = document.URL;
if(antpage.substring(0,50) === "http://ants.inet.telenet.be/tools/modems/modemtest"){
chrome.storage.sync.get('antscopy', (data) => {
    if (data.antscopy) {
      modemtest();
    }else{
        console.log("antscopy has been disabled in options. To use the Antscopy functionality from frustrafix, please go to options and enable the switch.")
    }
  });


function modemtest(){
    console.log("modemtest has been opened.");
    //declare modem input field and checks if it's loaded. runs functions when loaded.
    var modeminput = document.getElementById('modem');
    modeminput.onload = modemtestLoaded();

    //functions that runs functions when modeminput has loaded in.
    function modemtestLoaded(){
        console.log("modeminput has been loaded")
        boxCheck();
        emptyCheck();
        
    }
    //starts modemtest automatically when modeminput has something filled in. 
    function emptyCheck(){
        console.log("Function emptyCheck started");
        console.log(modeminput.value);
        console.log(modeminput.value === "");
        if(modeminput.value === ""){
            console.log("modeminput is empty");
        } else {
            console.log("modem input is not empty as the value is " + modeminput.value);
            console.log("starting modem test automatically as the input is not empty :D");
            document.getElementById('start-test').click();
        }
    }
    //checks all boxes on pageload
    function boxCheck(){
        console.log("boxCheck() has been started.");
        console.log("checking all boxes before starting modemtest")
        var options = document.getElementById('options');
        console.log(options);
        var boxes = options.querySelectorAll('input');
        var box1 = boxes[0];
        var box2 = boxes[1];
        var box3 = boxes[2];
        var box4 = boxes[3];
        var box5 = boxes[4];
        var box6 = boxes[5];
        var box7 = boxes[6];
        //checkign all boxes in background
        box1.checked = "checked";
        box2.checked = "checked";
        box3.checked = "checked";
        box4.checked = "checked";
        box5.checked = "checked";
        box6.checked = "checked";
        box7.checked = "checked";
        //checking all boxes in foreground (visually)
        var labels = options.querySelectorAll('label');
        var label1 = labels[0];
        var label2 = labels[1];
        var label3 = labels[2];
        var label4 = labels[3];
        var label5 = labels[4];
        var label6 = labels[5];
        var label7 = labels[6];
        label1.className = "toggle-button toggle-check ui-button ui-widget ui-state-default ui-button-text-only ui-state-active";
        label2.className = "toggle-button toggle-check ui-button ui-widget ui-state-default ui-button-text-only ui-state-active";
        label3.className = "toggle-button toggle-check ui-button ui-widget ui-state-default ui-button-text-only ui-state-active";
        label4.className = "toggle-button toggle-check ui-button ui-widget ui-state-default ui-button-text-only ui-state-active";
        label5.className = "toggle-button toggle-check ui-button ui-widget ui-state-default ui-button-text-only ui-state-active";
        label6.className = "toggle-button toggle-check ui-button ui-widget ui-state-default ui-button-text-only ui-state-active";
        label7.className = "toggle-button toggle-check ui-button ui-widget ui-state-default ui-button-text-only ui-state-active";

    }
    //set trigger location for copy button
    var h1 = document.querySelector('h1');
    console.log(h1);
    h1.addEventListener("click", copyhttp);

    function copytest() {
        console.log("copy trigger has been clicked.");
        var output = testData();
        console.log(output);
    }
    function copyText(){
        console.log("copy trigger has been clicked!")
        var outputText = testData();
        navigator.clipboard.writeText(outputText).then(() => {
            console.log('Form data copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
    function copyhttp(){
        console.log("copy clicked.");
        const textArea = document.createElement("textarea");
        textArea.value = testData();
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
        } catch (err) {
          console.error('Unable to copy to clipboard', err);
        }
        document.body.removeChild(textArea);
        window.scrollTo(0,0);
        copyFeedback();
    }
    function copyFeedback(){
        var h1 = document.querySelector('h1');
        console.log("adding copy feedback.");
        var feedback = document.createElement("h2");
        feedback.style.color = "red";
        feedback.innerText = "🐜📋"
        h1.appendChild(feedback);
        sleep(1000).then(() => feedback.remove());
    }
    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function testData() {
        var outputText = "";
        //var for each div of tab
        var statusTab = document.getElementById('tab-status');
        var cmTab = document.getElementById('tab-cm');
        var mtaTab = document.getElementById('tab-mta');
        var hgwTab = document.getElementById('tab-hgw');
        var wifiTab = document.getElementById('tab-wifi');
        var cpeTab = document.getElementById('tab-host');
        var dsTab = document.getElementById('tab-ds');
        var usTab = document.getElementById('tab-us');
        var configTab = document.getElementById('tab-config');
        var cmtsTab = document.getElementById('tab-cmts');
        var ofdmTab = document.getElementById('tab-ofdm');
        var ofdmaTab = document.getElementById('tab-ofdma');
        //var Tab = document.getElementById('tab-');
        function getDSfreq(){
            var freq = "";
            var tr = dsTab.querySelectorAll('tr')[0];
            var td = tr.querySelectorAll('td');
            td.forEach(td => {
                if(td.innerText === null){}
                else{
                freq += td.innerText;
                freq += "   ";
                }
            });
            return freq;
        }   
        function getRX(){
            var RX = "  ";
            var tr = dsTab.querySelectorAll('tr')[2];
            var td = tr.querySelectorAll('td');
            td.forEach(td => {
                if(td.innerText === null){}
                else{
                RX += td.innerText;
                RX += "   ";
                }
            })
            return RX;
        }
        function getdssnr(){
            var dssnr = "";
            var tr = dsTab.querySelectorAll('tr')[3];
            var td = tr.querySelectorAll('td');
            td.forEach(td => {
                if(td.innerText === null){}
                else{
                    dssnr += td.innerText;
                    dssnr += "   ";
                }
            });
            return dssnr;
        }
        function getOfdmFreq(){
            var output = "";
            if(ofdmTab === null){}
            else{
                var tr = ofdmTab.querySelectorAll('tr')[2];
                var td = tr.querySelectorAll('td');
                td.forEach(td => {
                    if(td === null){}
                    else{
                        output += td.innerText;
                        output += "   ";
                    }
                });
            return output;    
            }
        }
        function getOfdmPower(){
            var output = "";
            if(ofdmTab === null){}
            else{
                var tr = ofdmTab.querySelectorAll('tr')[3];
                var td = tr.querySelectorAll('td');
                td.forEach(td => {
                    if(td === null){}
                    else{
                        output += td.innerText;
                        output += "   ";
                    }
                });
            return output;    
            }
        }
        function getUSfreq(){
            var freq = "";
            var tr = usTab.querySelectorAll('tr')[0];
            var td = tr.querySelectorAll('td');
            td.forEach(td => {
                if(td.innerText === null){}
                else{
                freq += td.innerText;
                freq += "   ";
                }
            });
            return freq;
        }
        function getTX(){
            var TX = "  ";
            var tr = usTab.querySelectorAll('tr')[3];
            var td = tr.querySelectorAll('td');
            td.forEach(td => {
                if(td.innerText === null){}
                else{
                TX += td.innerText;
                TX += "   ";
                }
            })
            return TX;
        }
        function getussnr(){
            var ussnr = "";
            var tr = usTab.querySelectorAll('tr')[4];
            var td = tr.querySelectorAll('td');
            td.forEach(td => {
                if(td.innerText === null){}
                else{
                    ussnr += td.innerText;
                    ussnr += "   ";
                }
            });
            return ussnr;
        }
        function getOfdmaPower(){
            var output = "";
            if(ofdmaTab === null){}
            else{
                var tr = ofdmaTab.querySelectorAll('tr')[0];
                var td = tr.querySelectorAll('td');
                td.forEach(td => {
                    if(td === null){}
                    else{
                        output += td.innerText;
                        output += "   ";
                    }
                });
            return output;    
            }
        }
        function getipv4wan(){
            var vlan = false;
            console.log(document.getElementById('tab-status').querySelectorAll('tr')[17].querySelector('th').innerText);
            if(document.getElementById('tab-status').querySelectorAll('tr')[17].querySelector('th').innerText === "VLAN"){
                vlan = true;
               
            }
            console.log(vlan);
            if(vlan === true){
                var ipv4wan = "";
            }else{
                var ipv4wan = hgwTab.querySelectorAll('td')[1].innerText;
            }
            return ipv4wan;
        }
        function getipv6wan(){
            var vlan = false;
            if(document.getElementById('tab-status').querySelectorAll('tr')[17].querySelector('th').innerText === "VLAN"){
                var ipv6wan = "";
            }else{
                var ipv6wan = hgwTab.querySelectorAll('td')[3].innerText;
            }
            return ipv6wan;
        }

        const testData = {
            mac : cmTab.querySelectorAll('td')[0].innerText,
            model : cmTab.querySelectorAll('td')[2].innerText,
            node : statusTab.querySelectorAll('td')[1].innerText,
            cmts : cmtsTab.querySelectorAll('td')[0].innerText,
            software : configTab.querySelectorAll('td')[4].innerText,
            ipv4lan : cmTab.querySelectorAll('td')[1].innerText,
            ipv4wan : getipv4wan(),
            ipv6wan : getipv6wan(),
            DSfreq : getDSfreq(),
            RX : getRX(),
            dssnr : getdssnr(),
            ofdmfreq : getOfdmFreq(),
            ofdmpower : getOfdmPower(),
            USfreq : getUSfreq(),
            TX : getTX(),
            ussnr : getussnr(),
            ofdmaPower : getOfdmaPower()
        
        }

        var outputText = `INFO
===========
Mac-address: ${testData.mac} ( ${testData.model} )
Node: ${testData.node}
CMTS: ${testData.cmts}
Software: ${testData.software}
WAN IPv4(private): ${testData.ipv4lan}
WAN IPv4(public): ${testData.ipv4wan}
WAN IPv6(public): ${testData.ipv6wan}

DS
==========
Freq: ${testData.DSfreq}
RX: ${testData.RX}
SNR: ${testData.dssnr}

OFDM:
Freq: ${testData.ofdmfreq}
Power: ${testData.ofdmpower}

US
========
Freq: ${testData.USfreq}
TX: ${testData.TX}
SNR: ${testData.ussnr}

OFDMA:
Power: ${testData.ofdmaPower}
        `
    return outputText;
    }
};

}