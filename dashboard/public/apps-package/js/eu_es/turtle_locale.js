var turtle_locale = {lc:{"ar":function(n){
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
v:function(d,k){turtle_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){turtle_locale.c(d,k);return d[k] in p?p[d[k]]:(k=turtle_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){turtle_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).turtle_locale = {
"blocksUsed":function(d){return "Erabilitako blokeak: %1"},
"branches":function(d){return "branches"},
"catColour":function(d){return "Kolorea"},
"catControl":function(d){return "Itzuliak"},
"catMath":function(d){return "Matematika"},
"catProcedures":function(d){return "Funtzioak"},
"catTurtle":function(d){return "Ekintzak"},
"catVariables":function(d){return "Aldagaiak"},
"catLogic":function(d){return "Logika"},
"colourTooltip":function(d){return "Arkatzaren kolorea aldatzen du."},
"createACircle":function(d){return "create a circle"},
"createSnowflakeSquare":function(d){return "create a snowflake of type square"},
"createSnowflakeParallelogram":function(d){return "create a snowflake of type parallelogram"},
"createSnowflakeLine":function(d){return "create a snowflake of type line"},
"createSnowflakeSpiral":function(d){return "create a snowflake of type spiral"},
"createSnowflakeFlower":function(d){return "create a snowflake of type flower"},
"createSnowflakeFractal":function(d){return "create a snowflake of type fractal"},
"createSnowflakeRandom":function(d){return "create a snowflake of type random"},
"createASnowflakeBranch":function(d){return "create a snowflake branch"},
"degrees":function(d){return "Graduak"},
"depth":function(d){return "depth"},
"dots":function(d){return "Pixelak"},
"drawASquare":function(d){return "Marraztu karratua"},
"drawATriangle":function(d){return "Marraztu triangelua"},
"drawACircle":function(d){return "Marraztu zirkulua"},
"drawAFlower":function(d){return "draw a flower"},
"drawAHexagon":function(d){return "draw a hexagon"},
"drawAHouse":function(d){return "Marraztu etxea"},
"drawAPlanet":function(d){return "draw a planet"},
"drawARhombus":function(d){return "draw a rhombus"},
"drawARobot":function(d){return "draw a robot"},
"drawARocket":function(d){return "draw a rocket"},
"drawASnowflake":function(d){return "draw a snowflake"},
"drawASnowman":function(d){return "Marraztu elurgizona"},
"drawAStar":function(d){return "draw a star"},
"drawATree":function(d){return "Marraztu zuhaitza"},
"drawUpperWave":function(d){return "draw upper wave"},
"drawLowerWave":function(d){return "draw lower wave"},
"drawStamp":function(d){return "draw stamp"},
"heightParameter":function(d){return "Altuera"},
"hideTurtle":function(d){return "Izkutatu artista"},
"jump":function(d){return "salto egin"},
"jumpBackward":function(d){return "Salto egin atzera"},
"jumpForward":function(d){return "Salto egin aurrera"},
"jumpTooltip":function(d){return "Artista mugitzen du inongo aztarnarik utzi gabe."},
"jumpEastTooltip":function(d){return "Mugitu artista ekialdera aztarnarik utzi gabe."},
"jumpNorthTooltip":function(d){return "Mugitu artista iparraldera aztarnarik utzi gabe."},
"jumpSouthTooltip":function(d){return "Mugitu artista hegoaldera aztarnarik utzi gabe."},
"jumpWestTooltip":function(d){return "Mugitu artista mendebaldera aztarnarik utzi gabe."},
"lengthFeedback":function(d){return "You got it right except for the lengths to move."},
"lengthParameter":function(d){return "luzera"},
"loopVariable":function(d){return "kontagailua"},
"moveBackward":function(d){return "mugitu atzera"},
"moveEastTooltip":function(d){return "Artista ekialdera mugitzen du."},
"moveForward":function(d){return "mugitu aurrera"},
"moveForwardTooltip":function(d){return "Artista aurrera mugitzen du."},
"moveNorthTooltip":function(d){return "Artista iparraldera mugitzen du."},
"moveSouthTooltip":function(d){return "Artista hegoaldera mugitzen du."},
"moveWestTooltip":function(d){return "Artista mendebaldera mugitzen du."},
"moveTooltip":function(d){return "Artista atzera edo aurrera mugitzen du zehaztutako kopuruan."},
"notBlackColour":function(d){return "Beltza ez den beste kolore bat aukeratu behar duzu puzle hontarako."},
"numBlocksNeeded":function(d){return "Puzlea %1 blokerekin ebatz daiteke. Zuk %2 erabili dituzu."},
"penDown":function(d){return "Arkatza behera"},
"penTooltip":function(d){return "Arkatza igo edo jeisten du, marrazten hasi edo bukatzkeo."},
"penUp":function(d){return "Arkatza gora"},
"reinfFeedbackMsg":function(d){return "Here is your drawing! Keep working on it or continue to the next puzzle."},
"setColour":function(d){return "Ezarri kolorea"},
"setPattern":function(d){return "set pattern"},
"setWidth":function(d){return "Ezarri zabalera"},
"shareDrawing":function(d){return "Elkarbanatu zure marrazkia:"},
"showMe":function(d){return "Erakutsi niri"},
"showTurtle":function(d){return "erakutsi artista"},
"sizeParameter":function(d){return "size"},
"step":function(d){return "step"},
"tooFewColours":function(d){return "Gutxienez %1 kolore ezberdin erabili behar dituzu puzle. Bakarrik %2 erabili dituzu."},
"turnLeft":function(d){return "Biratu ezkerrera"},
"turnRight":function(d){return "Biratu eskubira"},
"turnRightTooltip":function(d){return "Artista eskubira biratzen du zehaztutako angeluan."},
"turnTooltip":function(d){return "Artista ezkerrera biratzen du zehaztutako angeluan."},
"turtleVisibilityTooltip":function(d){return "Artista ikuskor edo ikustezin bihurtzen du."},
"widthTooltip":function(d){return "Arkatzaren lodiera aldatzen du."},
"wrongColour":function(d){return "Zure irudia kolore okerrekoa da. Puzle hontarako %1 behar du izan."}};