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
"a_and_b":function(d){return "A/B"},
"addPacket":function(d){return "Añadir Paquete"},
"addRouter":function(d){return "Añadir Router"},
"appendCountToTitle":function(d){return netsim_locale.v(d,"title")+" ("+netsim_locale.v(d,"count")+")"},
"ascii":function(d){return "ASCII"},
"autoDnsUsageMessage":function(d){return "Uso de nodo DNS automático: GET hostname [hostname [hostname...]]"},
"binary":function(d){return "Binario"},
"bitCounter":function(d){return netsim_locale.v(d,"x")+"/"+netsim_locale.v(d,"y")+" bits"},
"bits":function(d){return "Bits"},
"buttonAccept":function(d){return "Aceptar"},
"buttonCancel":function(d){return "Cancelar"},
"buttonJoin":function(d){return "Unirse"},
"clear":function(d){return "Eliminar"},
"collapse":function(d){return "Contraer"},
"connect":function(d){return "Conectar"},
"connected":function(d){return "Conectado"},
"connectedToNodeName":function(d){return "Conectado a "+netsim_locale.v(d,"nodeName")},
"connectingToNodeName":function(d){return "Connecting to "+netsim_locale.v(d,"nodeName")},
"connectToANode":function(d){return "Conectar a un nodo"},
"connectToAPeer":function(d){return "Connect to a Peer"},
"connectToARouter":function(d){return "Connect to a Router"},
"decimal":function(d){return "Decimal"},
"defaultNodeName":function(d){return "[New Node]"},
"disconnected":function(d){return "Desconectado"},
"dns":function(d){return "DNS"},
"dnsMode":function(d){return "Modo DNS"},
"dnsMode_AUTOMATIC":function(d){return "Automático"},
"dnsMode_MANUAL":function(d){return "Manual"},
"dnsMode_NONE":function(d){return "Ninguno"},
"dropdownPickOne":function(d){return "--ELEGIR UNO--"},
"encoding":function(d){return "Codificación "},
"expand":function(d){return "Expandir 	"},
"from":function(d){return "De"},
"hex":function(d){return "Hex"},
"hexadecimal":function(d){return "Hexadecimal"},
"incomingConnectionRequests":function(d){return "Solicitud de conexión entrante"},
"infinity":function(d){return "Infinito"},
"instructions":function(d){return "Instrucciones"},
"joinSection":function(d){return "Unir a sección"},
"lobby":function(d){return "Lobby"},
"lobbyInstructionsForPeers":function(d){return "Find your partner in the list to the right and click the 'Join' button next to their name to create an outgoing connection request."},
"lobbyInstructionsForRouters":function(d){return "Click the 'Join' button next to any router to be added to the router. Create a new router to join by clicking the 'Add Router' button."},
"lobbyInstructionsGeneral":function(d){return "Connect with a router or a peer to begin using the simulator."},
"lobbyIsEmpty":function(d){return "Nadie todavía está aquí."},
"lobbyStatusWaitingForOther":function(d){return netsim_locale.v(d,"spinner")+" Waiting for "+netsim_locale.v(d,"otherName")+" to connect... ("+netsim_locale.v(d,"otherStatus")+")"},
"lobbyStatusWaitingForYou":function(d){return "Waiting for you..."},
"logStatus_dropped":function(d){return "Cancelado"},
"logStatus_success":function(d){return "Satisfactorio"},
"markAsRead":function(d){return "Marcar como leído"},
"message":function(d){return "Mensaje"},
"myDevice":function(d){return "Mi dispositivo"},
"myName":function(d){return "Mi nombre"},
"myPrivateNetwork":function(d){return "Mi red privada"},
"mySection":function(d){return "Mi sección"},
"number":function(d){return "Número"},
"numBitsPerPacket":function(d){return netsim_locale.v(d,"x")+" bits por paquete"},
"numBitsPerChunk":function(d){return netsim_locale.v(d,"numBits")+" bits por trozo"},
"notConnected":function(d){return "Not connected"},
"onBeforeUnloadWarning":function(d){return "You will be disconnected from the simulation."},
"outgoingConnectionRequests":function(d){return "Outgoing connection requests"},
"_of_":function(d){return " de "},
"packet":function(d){return "Paquete"},
"packetInfo":function(d){return "Información de Paquete"},
"pickASection":function(d){return "Elige una sección"},
"readWire":function(d){return "Read Wire"},
"receiveBits":function(d){return "Recibir Bits"},
"receivedMessageLog":function(d){return "Registro de mensaje recibido"},
"removePacket":function(d){return "Eliminar Paquete"},
"router":function(d){return "Enrutador"},
"routerStatus":function(d){return "Connected to "+netsim_locale.v(d,"connectedClients")+".  Room for "+netsim_locale.v(d,"remainingSpace")+" more."},
"routerStatusFull":function(d){return "Connected to "+netsim_locale.v(d,"connectedClients")+". No more room."},
"routerStatusNoConnections":function(d){return "Nobody connected yet.  Connect up to "+netsim_locale.v(d,"maximumClients")+" people."},
"routerTab_bandwidth":function(d){return "Ancho de banda"},
"routerTab_memory":function(d){return "Memoria"},
"routerTab_stats":function(d){return "Estadísticas"},
"routerX":function(d){return "Enrutador "+netsim_locale.v(d,"x")},
"send":function(d){return "Enviar"},
"sendAMessage":function(d){return "Enviar un mensaje"},
"sendBits":function(d){return "Enviar Bits"},
"sentBitsLog":function(d){return "Sent Bits Log"},
"sentMessageLog":function(d){return "Registro de mensaje enviado"},
"setName":function(d){return "establecer nombre"},
"setWire":function(d){return "establecer cable"},
"setWireToValue":function(d){return "establecer cable a "+netsim_locale.v(d,"value")},
"shareThisNetwork":function(d){return "Compartir esta red"},
"size":function(d){return "Tamaño"},
"status":function(d){return "Estatus"},
"to":function(d){return "Para"},
"unknownNode":function(d){return "Unknown Node"},
"unlimited":function(d){return "Ilimitado"},
"waitingForNodeToConnect":function(d){return "Esperando un "+netsim_locale.v(d,"node")+" para conectar..."},
"workspaceHeader":function(d){return "Simulador de internet"},
"xOfYPackets":function(d){return netsim_locale.v(d,"x")+" de "+netsim_locale.v(d,"y")},
"xSecondPerPulse":function(d){return netsim_locale.v(d,"x")+" segundos por pulso"},
"xSecondsPerPulse":function(d){return netsim_locale.v(d,"x")+" segundos por pulso"},
"x_Gbps":function(d){return netsim_locale.v(d,"x")+"Gbps"},
"x_Mbps":function(d){return netsim_locale.v(d,"x")+"Mbps"},
"x_Kbps":function(d){return netsim_locale.v(d,"x")+"Kilobit por segundo"},
"x_bps":function(d){return netsim_locale.v(d,"x")+"bps"},
"x_GBytes":function(d){return netsim_locale.v(d,"x")+"GB"},
"x_MBytes":function(d){return netsim_locale.v(d,"x")+"MB"},
"x_KBytes":function(d){return netsim_locale.v(d,"x")+"KiloByte"},
"x_Bytes":function(d){return netsim_locale.v(d,"x")+"B"},
"x_bits":function(d){return netsim_locale.v(d,"x")+"b"}};