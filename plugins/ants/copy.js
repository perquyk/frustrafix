chrome.storage.sync.get("antscopy", (data) => {
  if (data.antscopy) {
    setTimeout(() => {
      antscopy();
    }, 1000);
  }
});

function antscopy() {
  const eventTarget = document.querySelector("h1");
  eventTarget.addEventListener("click", () => {
    copyTest(generateTestData());
  });
}

function generateTestData() {
  //all tabs
  const statusTab = document.getElementById("tab-status");
  const cmTab = document.getElementById("tab-cm");
  const hgwTab = document.getElementById("tab-hgw");
  const dsTab = document.getElementById("tab-ds");
  const usTab = document.getElementById("tab-us");
  const configTab = document.getElementById("tab-config");
  const cmtsTab = document.getElementById("tab-cmts");
  const ofdmTab = document.getElementById("tab-ofdm");
  const ofdmaTab = document.getElementById("tab-ofdma");

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

  //Declare all test data vars
  testData = {
    mac: cmTab.querySelectorAll("td")[0].innerText,
    model: cmTab.querySelectorAll("td")[2].innerText,
    node: statusTab.querySelectorAll("td")[1].innerText,
    cmts: cmtsTab.querySelectorAll("td")[0].innerText,
    product: configTab.querySelectorAll("td")[11].innerText,
    software: configTab.querySelectorAll("td")[4].innerText,
    ipv4lan: cmTab.querySelectorAll("td")[1].innerText,
    ipv4wan: !hgwTab ? "undefined" : hgwTab.querySelectorAll("td")[1].innerText,
    ipv6wan: !hgwTab ? "undefined" : hgwTab.querySelectorAll("td")[3].innerText,
    DSfreq: getDSfreq(),
    RX: getRX(),
    dssnr: getdssnr(),
    ofdmfreq: getOfdmFreq(),
    ofdmpower: getOfdmPower(),
    USfreq: getUSfreq(),
    TX: getTX(),
    ussnr: getussnr(),
    ofdmaPower: getOfdmaPower(),
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
Power: ${testData.ofdmaPower}`;
}

function copyTest(data) {
  const textArea = document.createElement("textarea");
  textArea.value = data;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  console.log("Copied to clipboard");
  copyFeedback();
}

function copyFeedback() {
  const h1 = document.querySelector("h1");
  const feedback = document.createElement("h2");
  feedback.innerText = "📋🐜";
  h1.prepend(feedback);
  setTimeout(() => {
    feedback.remove();
  }, 1500);
}
