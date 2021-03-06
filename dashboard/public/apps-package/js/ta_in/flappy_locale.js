var flappy_locale = {lc:{"ar":function(n){
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
v:function(d,k){flappy_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){flappy_locale.c(d,k);return d[k] in p?p[d[k]]:(k=flappy_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){flappy_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).flappy_locale = {
"continue":function(d){return "தொடர்க"},
"doCode":function(d){return "செய்க"},
"elseCode":function(d){return "அல்லது"},
"endGame":function(d){return "விளையாட்டை முடிவுசெய்"},
"endGameTooltip":function(d){return "Ends the game."},
"finalLevel":function(d){return "வாழ்த்துக்கள்! நீங்கள் இறுதிப் புதிரை முடித்துவிட்டீர்கள்."},
"flap":function(d){return "flap"},
"flapRandom":function(d){return "flap a random amount"},
"flapVerySmall":function(d){return "flap a very small amount"},
"flapSmall":function(d){return "flap a small amount"},
"flapNormal":function(d){return "flap a normal amount"},
"flapLarge":function(d){return "flap a large amount"},
"flapVeryLarge":function(d){return "flap a very large amount"},
"flapTooltip":function(d){return "Fly Flappy upwards."},
"flappySpecificFail":function(d){return "Your code looks good - it will flap with each click. But you need to click many times to flap to the target."},
"incrementPlayerScore":function(d){return "score a point"},
"incrementPlayerScoreTooltip":function(d){return "தற்போதைய ஆட்டக்காரர் மதிப்பெண்ணில் ஒரு புள்ளி சேர்க்க."},
"nextLevel":function(d){return "வாழ்த்துக்கள்! நீங்கள் இந்த புதிர் தீர்த்துவிட்டீர்கள்."},
"no":function(d){return "இல்லை"},
"numBlocksNeeded":function(d){return "இந்த புதிரை  %1 தொகுதிகள் கொண்டு தீர்க்க முடியும்."},
"playSoundRandom":function(d){return "play random sound"},
"playSoundBounce":function(d){return "play bounce sound"},
"playSoundCrunch":function(d){return "play crunch sound"},
"playSoundDie":function(d){return "play sad sound"},
"playSoundHit":function(d){return "play smash sound"},
"playSoundPoint":function(d){return "play point sound"},
"playSoundSwoosh":function(d){return "play swoosh sound"},
"playSoundWing":function(d){return "play wing sound"},
"playSoundJet":function(d){return "play jet sound"},
"playSoundCrash":function(d){return "play crash sound"},
"playSoundJingle":function(d){return "play jingle sound"},
"playSoundSplash":function(d){return "play splash sound"},
"playSoundLaser":function(d){return "play laser sound"},
"playSoundTooltip":function(d){return "Play the chosen sound."},
"reinfFeedbackMsg":function(d){return "You can press the \"Try again\" button to go back to playing your game."},
"scoreText":function(d){return "Score: "+flappy_locale.v(d,"playerScore")},
"setBackground":function(d){return "set scene"},
"setBackgroundRandom":function(d){return "set scene Random"},
"setBackgroundFlappy":function(d){return "set scene City (day)"},
"setBackgroundNight":function(d){return "set scene City (night)"},
"setBackgroundSciFi":function(d){return "set scene Sci-Fi"},
"setBackgroundUnderwater":function(d){return "set scene Underwater"},
"setBackgroundCave":function(d){return "set scene Cave"},
"setBackgroundSanta":function(d){return "set scene Santa"},
"setBackgroundTooltip":function(d){return "பின்னணி படத்தை அமைக்கஉம்"},
"setGapRandom":function(d){return "ஒரு சீரற்ற இடைவெளி அமைக்கஉம்"},
"setGapVerySmall":function(d){return "ஒரு மிக சிறிய இடைவெளி அமைக்கஉம்"},
"setGapSmall":function(d){return "ஒரு சிறிய இடைவெளி அமைக்கஉம்"},
"setGapNormal":function(d){return "ஒரு சாதாரண இடைவெளி அமைக்கஉம்"},
"setGapLarge":function(d){return "ஒரு பெரிய இடைவெளி அமைக்கஉம்"},
"setGapVeryLarge":function(d){return "ஒரு மிக பெரிய இடைவெளி அமைக்கஉம்"},
"setGapHeightTooltip":function(d){return "Sets the vertical gap in an obstacle"},
"setGravityRandom":function(d){return "set gravity random"},
"setGravityVeryLow":function(d){return "set gravity very low"},
"setGravityLow":function(d){return "set gravity low"},
"setGravityNormal":function(d){return "set gravity normal"},
"setGravityHigh":function(d){return "set gravity high"},
"setGravityVeryHigh":function(d){return "set gravity very high"},
"setGravityTooltip":function(d){return "Sets the level's gravity"},
"setGround":function(d){return "set ground"},
"setGroundRandom":function(d){return "set ground Random"},
"setGroundFlappy":function(d){return "set ground Ground"},
"setGroundSciFi":function(d){return "set ground Sci-Fi"},
"setGroundUnderwater":function(d){return "set ground Underwater"},
"setGroundCave":function(d){return "set ground Cave"},
"setGroundSanta":function(d){return "set ground Santa"},
"setGroundLava":function(d){return "set ground Lava"},
"setGroundTooltip":function(d){return "Sets the ground image"},
"setObstacle":function(d){return "set obstacle"},
"setObstacleRandom":function(d){return "set obstacle Random"},
"setObstacleFlappy":function(d){return "set obstacle Pipe"},
"setObstacleSciFi":function(d){return "set obstacle Sci-Fi"},
"setObstacleUnderwater":function(d){return "set obstacle Plant"},
"setObstacleCave":function(d){return "set obstacle Cave"},
"setObstacleSanta":function(d){return "set obstacle Chimney"},
"setObstacleLaser":function(d){return "set obstacle Laser"},
"setObstacleTooltip":function(d){return "Sets the obstacle image"},
"setPlayer":function(d){return "set player"},
"setPlayerRandom":function(d){return "set player Random"},
"setPlayerFlappy":function(d){return "set player Yellow Bird"},
"setPlayerRedBird":function(d){return "set player Red Bird"},
"setPlayerSciFi":function(d){return "set player Spaceship"},
"setPlayerUnderwater":function(d){return "set player Fish"},
"setPlayerCave":function(d){return "set player Bat"},
"setPlayerSanta":function(d){return "set player Santa"},
"setPlayerShark":function(d){return "set player Shark"},
"setPlayerEaster":function(d){return "set player Easter Bunny"},
"setPlayerBatman":function(d){return "set player Bat guy"},
"setPlayerSubmarine":function(d){return "set player Submarine"},
"setPlayerUnicorn":function(d){return "set player Unicorn"},
"setPlayerFairy":function(d){return "set player Fairy"},
"setPlayerSuperman":function(d){return "set player Flappyman"},
"setPlayerTurkey":function(d){return "set player Turkey"},
"setPlayerTooltip":function(d){return "Sets the player image"},
"setScore":function(d){return "set score"},
"setScoreTooltip":function(d){return "Sets the player's score"},
"setSpeed":function(d){return "set speed"},
"setSpeedTooltip":function(d){return "Sets the level's speed"},
"shareFlappyTwitter":function(d){return "Check out the Flappy game I made. I wrote it myself with @codeorg"},
"shareGame":function(d){return "Share your game:"},
"soundRandom":function(d){return "தொடர்பின்றி எடுக்கப்பட்ட"},
"soundBounce":function(d){return "bounce"},
"soundCrunch":function(d){return "crunch"},
"soundDie":function(d){return "sad"},
"soundHit":function(d){return "smash"},
"soundPoint":function(d){return "point"},
"soundSwoosh":function(d){return "swoosh"},
"soundWing":function(d){return "wing"},
"soundJet":function(d){return "jet"},
"soundCrash":function(d){return "crash"},
"soundJingle":function(d){return "jingle"},
"soundSplash":function(d){return "splash"},
"soundLaser":function(d){return "laser"},
"speedRandom":function(d){return "set speed random"},
"speedVerySlow":function(d){return "set speed very slow"},
"speedSlow":function(d){return "set speed slow"},
"speedNormal":function(d){return "set speed normal"},
"speedFast":function(d){return "set speed fast"},
"speedVeryFast":function(d){return "set speed very fast"},
"whenClick":function(d){return "when click"},
"whenClickTooltip":function(d){return "Execute the actions below when a click event occurs."},
"whenCollideGround":function(d){return "when hit the ground"},
"whenCollideGroundTooltip":function(d){return "Execute the actions below when Flappy hits the ground."},
"whenCollideObstacle":function(d){return "when hit an obstacle"},
"whenCollideObstacleTooltip":function(d){return "Execute the actions below when Flappy hits an obstacle."},
"whenEnterObstacle":function(d){return "when pass obstacle"},
"whenEnterObstacleTooltip":function(d){return "Flappy தடங்களை எதிர் கொள்ளும் போது,கீழே கொடுக்கப்பட்டுள்ள செயல்களை செய்து முடிக்கவும்."},
"whenRunButtonClick":function(d){return "விளையாட்டு தொடங்கும் போது"},
"whenRunButtonClickTooltip":function(d){return "விளையாட்டு தொடங்கும் போது, கீழே கொடுக்கப்பட்டுள்ள செயல்களை செய்து முடிக்கவும்."},
"yes":function(d){return "ஆம்"}};