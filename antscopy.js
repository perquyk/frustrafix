//checks if options is checked, if enabled, call function, if not enabled, do nothing. pretty simple.
var antpage = document.URL;
if (
  antpage.substring(0, 50) ===
  "http://ants.inet.telenet.be/tools/modems/modemtest"
) {
  chrome.storage.sync.get("antscopy", (data) => {
    if (data.antscopy) {
      console.log("option: OK")
      modemtest();
    }
  });

  function modemtest() {
    // Declare modem input field and checks if it has finished loading. Runs functions when loaded.
    const modeminput = document.getElementById("modem");
    modeminput.onload = modemtestLoaded();

    //functions that runs functions when modeminput has loaded in.
    function modemtestLoaded() {
      boxCheck();
      emptyCheck();
      return null;
    }
    //starts modemtest automatically when modeminput has something filled in.
    function emptyCheck() {
      console.log(modeminput.value);
      if (modeminput.value === "") {
      } else {
        console.log("modeminput not empty")
        document.getElementById("start-test").click();
      }
    }

    //checks all boxes on pageload
    function boxCheck() {
      const options = document.getElementById("options");
      const boxes = options.querySelectorAll("input");
      boxes.forEach(function (box) {
        box.checked = "checked";
      })
      const labels = options.querySelectorAll("label");
      labels.forEach(function (label) {
        label.className = "toggle-button toggle-check ui-button ui-widget ui-state-default ui-button-text-only ui-state-active";
      })
    }
    //set trigger location for copy button
    const h1 = document.querySelector("h1");
    h1.addEventListener("click", copyhttp)

    function copyhttp() {
      const textArea = document.createElement("textarea");
      textArea.value = testData();
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Unable to copy to clipboard", err);
      }
      document.body.removeChild(textArea);
      window.scrollTo(0, 0);
      copyFeedback();
    }
    function copyFeedback() {
      const h1 = document.querySelector("h1");
      const feedback = document.createElement("h2");
      feedback.innerText = "🐜📋"
      //feedback.innerText = "🐜📋";
      h1.appendChild(feedback);
      sleep(1000).then(() => {
        feedback.remove();
      });
    }
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    function testData() {

      //var for each div of tab
      const statusTab = document.getElementById("tab-status");
      const cmTab = document.getElementById("tab-cm");
      const hgwTab = document.getElementById("tab-hgw");
      const dsTab = document.getElementById("tab-ds");
      const usTab = document.getElementById("tab-us");
      const configTab = document.getElementById("tab-config");
      const cmtsTab = document.getElementById("tab-cmts");
      const ofdmTab = document.getElementById("tab-ofdm");
      const ofdmaTab = document.getElementById("tab-ofdma");
      //var Tab = document.getElementById('tab-');
      function getDSfreq() {
        var freq = "";
        var tr = dsTab.querySelectorAll("tr")[0];
        var td = tr.querySelectorAll("td");
        td.forEach((td) => {
          if (td.innerText === null) {
          } else {
            freq += td.innerText;
            freq += "   ";
          }
        });
        return freq;
      }
      function getRX() {
        var RX = "  ";
        var tr = dsTab.querySelectorAll("tr")[2];
        var td = tr.querySelectorAll("td");
        td.forEach((td) => {
          if (td.innerText === null) {
          } else {
            RX += td.innerText;
            RX += "   ";
          }
        });
        return RX;
      }
      function getdssnr() {
        var dssnr = "";
        var tr = dsTab.querySelectorAll("tr")[3];
        var td = tr.querySelectorAll("td");
        td.forEach((td) => {
          if (td.innerText === null) {
          } else {
            dssnr += td.innerText;
            dssnr += "   ";
          }
        });
        return dssnr;
      }
      function getOfdmFreq() {
        var output = "";
        if (ofdmTab === null) {
        } else {
          var tr = ofdmTab.querySelectorAll("tr")[2];
          var td = tr.querySelectorAll("td");
          td.forEach((td) => {
            if (td === null) {
            } else {
              output += td.innerText;
              output += "   ";
            }
          });
          return output;
        }
      }
      function getOfdmPower() {
        var output = "";
        if (ofdmTab === null) {
        } else {
          var tr = ofdmTab.querySelectorAll("tr")[3];
          var td = tr.querySelectorAll("td");
          td.forEach((td) => {
            if (td === null) {
            } else {
              output += td.innerText;
              output += "   ";
            }
          });
          return output;
        }
      }
      function getUSfreq() {
        var freq = "";
        var tr = usTab.querySelectorAll("tr")[0];
        var td = tr.querySelectorAll("td");
        td.forEach((td) => {
          if (td.innerText === null) {
          } else {
            freq += td.innerText;
            freq += "   ";
          }
        });
        return freq;
      }
      function getTX() {
        var TX = "  ";
        var tr = usTab.querySelectorAll("tr")[3];
        var td = tr.querySelectorAll("td");
        td.forEach((td) => {
          if (td.innerText === null) {
          } else {
            TX += td.innerText;
            TX += "   ";
          }
        });
        return TX;
      }
      function getussnr() {
        var ussnr = "";
        var tr = usTab.querySelectorAll("tr")[4];
        var td = tr.querySelectorAll("td");
        td.forEach((td) => {
          if (td.innerText === null) {
          } else {
            ussnr += td.innerText;
            ussnr += "   ";
          }
        });
        return ussnr;
      }
      function getOfdmaPower() {
        var output = "";
        if (ofdmaTab === null) {
        } else {
          var tr = ofdmaTab.querySelectorAll("tr")[0];
          var td = tr.querySelectorAll("td");
          td.forEach((td) => {
            if (td === null) {
            } else {
              output += td.innerText;
              output += "   ";
            }
          });
          return output;
        }
      }
      function getipv4wan(){
        return !hgwTab ? "undefined" : hgwTab.querySelectorAll("td")[1].innerText;
      }
      function getipv6wan() {
        return !hgwTab ? "undefined" : hgwTab.querySelectorAll("td")[3].innerText;
      }
      function getProduct(){
        return configTab.querySelectorAll("td")[11].innerText;
      }




      const testData = {
        mac: cmTab.querySelectorAll("td")[0].innerText,
        model: cmTab.querySelectorAll("td")[2].innerText,
        node: statusTab.querySelectorAll("td")[1].innerText,
        cmts: cmtsTab.querySelectorAll("td")[0].innerText,
        software: configTab.querySelectorAll("td")[4].innerText,
        ipv4lan: cmTab.querySelectorAll("td")[1].innerText,
        ipv4wan: getipv4wan(),
        ipv6wan: getipv6wan(),
        DSfreq: getDSfreq(),
        RX: getRX(),
        dssnr: getdssnr(),
        ofdmfreq: getOfdmFreq(),
        ofdmpower: getOfdmPower(),
        USfreq: getUSfreq(),
        TX: getTX(),
        ussnr: getussnr(),
        ofdmaPower: getOfdmaPower(),
        product: getProduct(),
      };

      return `INFO
===========
Mac-address: ${testData.mac} ( ${testData.model} )
Node: ${testData.node}
CMTS: ${testData.cmts}
Product: ${testData.product}
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
        `;
    }
  }
}
