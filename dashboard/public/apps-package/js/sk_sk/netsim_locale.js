var netsim_locale = {lc:{"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"gl":function(n){return n===1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"mr":function(n){return n===1?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){netsim_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){netsim_locale.c(d,k);return d[k] in p?p[d[k]]:(k=netsim_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){netsim_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).netsim_locale = {
"a_and_b":function(d){return "A / B"},
"addPacket":function(d){return "Pridať balík"},
"addRouter":function(d){return "Pridať rúter"},
"appendCountToTitle":function(d){return netsim_locale.v(d,"title")+" ("+netsim_locale.v(d,"count")+")"},
"ascii":function(d){return "ASCII"},
"autoDnsUsageMessage":function(d){return "Automatické použitie DNS uzla DNS: GET hostname [hostname [hostname...]]"},
"binary":function(d){return "Binary"},
"bitCounter":function(d){return netsim_locale.v(d,"x")+"/"+netsim_locale.v(d,"y")+" bitov"},
"bits":function(d){return "Bity"},
"buttonAccept":function(d){return "Accept"},
"buttonCancel":function(d){return "Zrušiť"},
"buttonJoin":function(d){return "Join"},
"clear":function(d){return "Vyčisti"},
"collapse":function(d){return "Zbaliť"},
"connect":function(d){return "Pripojiť"},
"connected":function(d){return "Pripojené"},
"connectedToNodeName":function(d){return "Connected to "+netsim_locale.v(d,"nodeName")},
"connectingToNodeName":function(d){return "Connecting to "+netsim_locale.v(d,"nodeName")},
"connectToANode":function(d){return "Pripojenie ku uzlu"},
"connectToAPeer":function(d){return "Connect to a Peer"},
"connectToARouter":function(d){return "Connect to a Router"},
"decimal":function(d){return "Desatinné"},
"defaultNodeName":function(d){return "[New Node]"},
"disconnected":function(d){return "Odpojené"},
"dns":function(d){return "DNS"},
"dnsMode":function(d){return "Režim DNS"},
"dnsMode_AUTOMATIC":function(d){return "Automatické"},
"dnsMode_MANUAL":function(d){return "Manuál"},
"dnsMode_NONE":function(d){return "Žiadne"},
"dropdownPickOne":function(d){return "--VYBERTE SI--"},
"encoding":function(d){return "Kódovanie"},
"expand":function(d){return "Rozbaliť"},
"from":function(d){return "Od"},
"hex":function(d){return "Hex"},
"hexadecimal":function(d){return "Šestnástková"},
"incomingConnectionRequests":function(d){return "Prichádzajúce žiadosti o spojenie"},
"infinity":function(d){return "Nekonečno"},
"instructions":function(d){return "Instructions"},
"joinSection":function(d){return "Pripojiť sekciu"},
"lobby":function(d){return "Lobby"},
"lobbyInstructionsForPeers":function(d){return "Find your partner in the list to the right and click the 'Join' button next to their name to create an outgoing connection request."},
"lobbyInstructionsForRouters":function(d){return "Click the 'Join' button next to any router to be added to the router. Create a new router to join by clicking the 'Add Router' button."},
"lobbyInstructionsGeneral":function(d){return "Connect with a router or a peer to begin using the simulator."},
"lobbyIsEmpty":function(d){return "Nikto tu teraz nie je."},
"lobbyStatusWaitingForOther":function(d){return netsim_locale.v(d,"spinner")+" Waiting for "+netsim_locale.v(d,"otherName")+" to connect... ("+netsim_locale.v(d,"otherStatus")+")"},
"lobbyStatusWaitingForYou":function(d){return "Waiting for you..."},
"logStatus_dropped":function(d){return "Signál sa prerušil"},
"logStatus_success":function(d){return "Pripojené"},
"markAsRead":function(d){return "Označiť ako prečítané"},
"message":function(d){return "Správa"},
"myDevice":function(d){return "Moje zariadenie"},
"myName":function(d){return "Moje meno"},
"myPrivateNetwork":function(d){return "Moje súkromná sieť"},
"mySection":function(d){return "Moja časť"},
"number":function(d){return "Číslo"},
"numBitsPerPacket":function(d){return netsim_locale.v(d,"x")+" bitov na jeden paket"},
"numBitsPerChunk":function(d){return netsim_locale.v(d,"numBits")+" bitov v jednom segmente"},
"notConnected":function(d){return "Not connected"},
"onBeforeUnloadWarning":function(d){return "You will be disconnected from the simulation."},
"outgoingConnectionRequests":function(d){return "Odchádzajúce žiadosti na pripojenie"},
"_of_":function(d){return " z "},
"packet":function(d){return "Paket"},
"packetInfo":function(d){return "Informácie o pakete"},
"pickASection":function(d){return "Vyber sekciu"},
"readWire":function(d){return "Read Wire"},
"receiveBits":function(d){return "Prijmi bity"},
"receivedMessageLog":function(d){return "Received Message Log"},
"removePacket":function(d){return "Odstrániť paket"},
"router":function(d){return "Rúter"},
"routerStatus":function(d){return "Connected to "+netsim_locale.v(d,"connectedClients")+".  Room for "+netsim_locale.v(d,"remainingSpace")+" more."},
"routerStatusFull":function(d){return "Connected to "+netsim_locale.v(d,"connectedClients")+". No more room."},
"routerStatusNoConnections":function(d){return "Nobody connected yet.  Connect up to "+netsim_locale.v(d,"maximumClients")+" people."},
"routerTab_bandwidth":function(d){return "Šírka pásma"},
"routerTab_memory":function(d){return "Memory"},
"routerTab_stats":function(d){return "Stats"},
"routerX":function(d){return "Router "+netsim_locale.v(d,"x")},
"send":function(d){return "Send"},
"sendAMessage":function(d){return "Send a Message"},
"sendBits":function(d){return "Send Bits"},
"sentBitsLog":function(d){return "Sent Bits Log"},
"sentMessageLog":function(d){return "Sent Message Log"},
"setName":function(d){return "Set Name"},
"setWire":function(d){return "Set Wire"},
"setWireToValue":function(d){return "Set Wire to "+netsim_locale.v(d,"value")},
"shareThisNetwork":function(d){return "Share this network"},
"size":function(d){return "Size"},
"status":function(d){return "Status"},
"to":function(d){return "To"},
"unknownNode":function(d){return "Unknown Node"},
"unlimited":function(d){return "Unlimited"},
"waitingForNodeToConnect":function(d){return "Waiting for "+netsim_locale.v(d,"node")+" to connect..."},
"workspaceHeader":function(d){return "Internet Simulator"},
"xOfYPackets":function(d){return netsim_locale.v(d,"x")+" of "+netsim_locale.v(d,"y")},
"xSecondPerPulse":function(d){return netsim_locale.v(d,"x")+" second per pulse"},
"xSecondsPerPulse":function(d){return netsim_locale.v(d,"x")+" seconds per pulse"},
"x_Gbps":function(d){return netsim_locale.v(d,"x")+"Gbps"},
"x_Mbps":function(d){return netsim_locale.v(d,"x")+"Mbps"},
"x_Kbps":function(d){return netsim_locale.v(d,"x")+"Kbps"},
"x_bps":function(d){return netsim_locale.v(d,"x")+"bps"},
"x_GBytes":function(d){return netsim_locale.v(d,"x")+"GB"},
"x_MBytes":function(d){return netsim_locale.v(d,"x")+"MB"},
"x_KBytes":function(d){return netsim_locale.v(d,"x")+"KB"},
"x_Bytes":function(d){return netsim_locale.v(d,"x")+"B"},
"x_bits":function(d){return netsim_locale.v(d,"x")+"b"}};