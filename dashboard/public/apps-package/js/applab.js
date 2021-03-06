require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({50:[function(require,module,exports){
(function (global){
var appMain = require('../appMain');
window.Applab = require('./applab');
if (typeof global !== 'undefined') {
  global.Applab = window.Applab;
}
var blocks = require('./blocks');
var levels = require('./levels');
var skins = require('./skins');

window.applabMain = function(options) {
  options.skinsModule = skins;
  options.blocksModule = blocks;
  appMain(window.Applab, levels, options);
};


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../appMain":5,"./applab":15,"./blocks":20,"./levels":48,"./skins":52}],52:[function(require,module,exports){
/**
 * Load Skin for Applab.
 */

var skinsBase = require('../skins');

var CONFIGS = {
  applab: {
  }
};

exports.load = function(assetUrl, id) {
  var skin = skinsBase.load(assetUrl, id);
  var config = CONFIGS[skin.id];

  return skin;
};


},{"../skins":253}],48:[function(require,module,exports){
/*jshint multistr: true */

var msg = require('./locale');
var utils = require('../utils');
var blockUtils = require('../block_utils');
var tb = blockUtils.createToolbox;
var blockOfType = blockUtils.blockOfType;
var createCategory = blockUtils.createCategory;

/*
 * Configuration for all levels.
 */
var levels = module.exports = {};

levels.simple = {
  'requiredBlocks': [
  ],
  'scale': {
    'snapRadius': 2
  },
  'freePlay': true,
  'toolbox':
      tb('<block type="applab_container" inline="true"> \
        <value name="ID"><block type="text"><title name="TEXT">id</title></block></value> \
        <value name="HTML"><block type="text"><title name="TEXT">html</title></block></value></block>'),
  'startBlocks':
   '<block type="when_run" deletable="false" x="20" y="20"></block>'
};

levels.custom = {
  'freePlay': true,
  'editCode': true,
  'sliderSpeed': 0.95,
  'appWidth': 320,
  'appHeight': 480,
  'codeFunctions': {
    // UI Controls
    "onEvent": null,
    "button": null,
    "textInput": null,
    "textLabel": null,
    "dropdown": null,
    "getText": null,
    "setText": null,
    "checkbox": null,
    "radioButton": null,
    "getChecked": null,
    "setChecked": null,
    "image": null,
    "getImageURL": null,
    "setImageURL": null,
    "playSound": null,
    "showElement": null,
    "hideElement": null,
    "deleteElement": null,
    "setPosition": null,
    "write": null,
    "getXPosition": null,
    "getYPosition": null,

    // Canvas
    "createCanvas": null,
    "setActiveCanvas": null,
    "line": null,
    "circle": null,
    "rect": null,
    "setStrokeWidth": null,
    "setStrokeColor": null,
    "setFillColor": null,
    "drawImage": null,
    "getImageData": null,
    "putImageData": null,
    "clearCanvas": null,
    "getRed": null,
    "getGreen": null,
    "getBlue": null,
    "getAlpha": null,
    "setRed": null,
    "setGreen": null,
    "setBlue": null,
    "setAlpha": null,
    "setRGB": null,

    // Data
    "startWebRequest": null,
    "setKeyValue": null,
    "getKeyValue": null,
    "createRecord": null,
    "readRecords": null,
    "updateRecord": null,
    "deleteRecord": null,
    "getUserId": null,

    // Turtle
    "moveForward": null,
    "moveBackward": null,
    "move": null,
    "moveTo": null,
    "dot": null,
    "turnRight": null,
    "turnLeft": null,
    "turnTo": null,
    "arcRight": null,
    "arcLeft": null,
    "getX": null,
    "getY": null,
    "getDirection": null,
    "penUp": null,
    "penDown": null,
    "penWidth": null,
    "penColor": null,
    "penRGB": null,
    "show": null,
    "hide": null,
    "speed" : null,

    // Control
    "forLoop_i_0_4": null,
    "ifBlock": null,
    "ifElseBlock": null,
    "whileBlock": null,
    "setTimeout": null,
    "clearTimeout": null,
    "setInterval": null,
    "clearInterval": null,
    "getTime": null,

    // Math
    "addOperator": null,
    "subtractOperator": null,
    "multiplyOperator": null,
    "divideOperator": null,
    "equalityOperator": null,
    "inequalityOperator": null,
    "greaterThanOperator": null,
    "lessThanOperator": null,
    "andOperator": null,
    "orOperator": null,
    "notOperator": null,
    "randomNumber_max": null,
    "randomNumber_min_max": null,
    "mathRound": null,
    "mathAbs": null,
    "mathMax": null,
    "mathMin": null,

    // Variables
    "declareAssign_x": null,
    "assign_x": null,
    "declareAssign_x_prompt": null,
    "console.log": null,
    "declareAssign_str_hello_world": null,
    "substring": null,
    "indexOf": null,
    "length": null,
    "toUpperCase": null,
    "toLowerCase": null,
    "declareAssign_list_abde": null,
    "listLength": null,
    "insertItem": null,
    "appendItem": null,
    "removeItem": null,

    // Functions
    "functionParams_none": null,
    "functionParams_n": null,
    "callMyFunction": null,
    "callMyFunction_n": null,
    "return": null,
  },
};

levels.ec_simple = utils.extend(levels.custom, {
});

// Functions in Advanced category currently disabled in all levels:
/*
 "imageUploadButton": null,
 "container": null,
 "innerHTML": null,
 "setStyle": null,
 "getAttribute": null,
 "setAttribute": null,
 "setParent": null,
*/

levels.full_sandbox =  {
  'scrollbars' : true,
  'requiredBlocks': [
  ],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': [
    'leftButton',
    'rightButton',
    'downButton',
    'upButton'
  ],
  'minWorkspaceHeight': 1400,
  'freePlay': true,
  'toolbox':
    tb(createCategory(
        msg.catActions(),
        '<block type="applab_createHtmlBlock" inline="true"> \
          <value name="ID"><block type="text"><title name="TEXT">id</title></block></value> \
          <value name="HTML"><block type="text"><title name="TEXT">html</title></block></value></block>') +
       createCategory(msg.catControl(),
                        blockOfType('controls_whileUntil') +
                       '<block type="controls_for"> \
                          <value name="FROM"> \
                            <block type="math_number"> \
                              <title name="NUM">1</title> \
                            </block> \
                          </value> \
                          <value name="TO"> \
                            <block type="math_number"> \
                              <title name="NUM">10</title> \
                            </block> \
                          </value> \
                          <value name="BY"> \
                            <block type="math_number"> \
                              <title name="NUM">1</title> \
                            </block> \
                          </value> \
                        </block>' +
                        blockOfType('controls_flow_statements')) +
       createCategory(msg.catLogic(),
                        blockOfType('controls_if') +
                        blockOfType('logic_compare') +
                        blockOfType('logic_operation') +
                        blockOfType('logic_negate') +
                        blockOfType('logic_boolean')) +
       createCategory(msg.catMath(),
                        blockOfType('math_number') +
                       '<block type="math_change"> \
                          <value name="DELTA"> \
                            <block type="math_number"> \
                              <title name="NUM">1</title> \
                            </block> \
                          </value> \
                        </block>' +
                       '<block type="math_random_int"> \
                          <value name="FROM"> \
                            <block type="math_number"> \
                              <title name="NUM">1</title> \
                            </block> \
                          </value> \
                          <value name="TO"> \
                            <block type="math_number"> \
                              <title name="NUM">100</title> \
                            </block> \
                          </value> \
                        </block>' +
                        blockOfType('math_arithmetic')) +
       createCategory(msg.catText(),
                        blockOfType('text') +
                        blockOfType('text_join') +
                       '<block type="text_append"> \
                          <value name="TEXT"> \
                            <block type="text"></block> \
                          </value> \
                        </block>') +
       createCategory(msg.catVariables(), '', 'VARIABLE') +
       createCategory(msg.catProcedures(), '', 'PROCEDURE')),
  'startBlocks':
   '<block type="when_run" deletable="false" x="20" y="20"></block>'
};


},{"../block_utils":63,"../utils":301,"./locale":49}],15:[function(require,module,exports){
/**
 * CodeOrgApp: Applab
 *
 * Copyright 2014-2015 Code.org
 *
 */
/* global $ */
/* global dashboard */

'use strict';
require('./acemode/mode-javascript_codeorg');
var studioApp = require('../StudioApp').singleton;
var commonMsg = require('../locale');
var applabMsg = require('./locale');
var skins = require('../skins');
var codegen = require('../codegen');
var api = require('./api');
var apiBlockly = require('./apiBlockly');
var dontMarshalApi = require('./dontMarshalApi');
var blocks = require('./blocks');
var page = require('../templates/page.html.ejs');
var dom = require('../dom');
var parseXmlElement = require('../xml').parseElement;
var utils = require('../utils');
var dropletUtils = require('../dropletUtils');
var dropletConfig = require('./dropletConfig');
var Slider = require('../slider');
var AppStorage = require('./appStorage');
var constants = require('../constants');
var KeyCodes = constants.KeyCodes;
var _ = utils.getLodash();
// var Hammer = utils.getHammer();
var apiTimeoutList = require('../timeoutList');
var annotationList = require('./acemode/annotationList');
var designMode = require('./designMode');
var applabTurtle = require('./applabTurtle');
var applabCommands = require('./commands');

var vsprintf = require('./sprintf').vsprintf;

var ResultType = studioApp.ResultType;
var TestResults = studioApp.TestResults;

/**
 * Create a namespace for the application.
 */
var Applab = module.exports;



var errorHandler = require('./errorHandler');
var outputApplabConsole = errorHandler.outputApplabConsole;
var outputError = errorHandler.outputError;
var ErrorLevel = errorHandler.ErrorLevel;

var level;
var skin;

//TODO: Make configurable.
studioApp.setCheckForEmptyBlocks(true);

var MAX_INTERPRETER_STEPS_PER_TICK = 10000;

// Default Scalings
Applab.scale = {
  'snapRadius': 1,
  'stepSpeed': 0
};

var twitterOptions = {
  text: applabMsg.shareApplabTwitter(),
  hashtag: "ApplabCode"
};

var StepType = {
  RUN:  0,
  IN:   1,
  OVER: 2,
  OUT:  3,
};

var MIN_DEBUG_AREA_HEIGHT = 70;
var MAX_DEBUG_AREA_HEIGHT = 400;

// The typical width of the visualization area (indepdendent of appWidth)
var vizAppWidth = 400;
// The default values for appWidth and appHeight (if not specified in the level)
var defaultAppWidth = 400;
var defaultAppHeight = 400;

function loadLevel() {
  Applab.timeoutFailureTick = level.timeoutFailureTick || Infinity;
  Applab.minWorkspaceHeight = level.minWorkspaceHeight;
  Applab.softButtons_ = level.softButtons || {};
  Applab.appWidth = level.appWidth || defaultAppWidth;
  Applab.appHeight = level.appHeight || defaultAppHeight;

  // Override scalars.
  for (var key in level.scale) {
    Applab.scale[key] = level.scale[key];
  }
}

//
// Adjust a media height rule (if needed). This is called by adjustAppSizeStyles
// for all media rules. We look for a specific set of rules that should be in
// the stylesheet and swap out the defaultHeightRules with the newHeightRules
//

function adjustMediaHeightRule(mediaList, defaultHeightRules, newHeightRules) {
  // The media rules we are looking for always have two components. The first
  // component is for screen width, which we ignore. The second is for screen
  // height, which we want to modify:
  if (mediaList.length === 2) {
    var lastHeightRuleIndex = defaultHeightRules.length - 1;
    for (var i = 0; i <= lastHeightRuleIndex; i++) {
      if (-1 !== mediaList.item(1).indexOf("(min-height: " +
          (defaultHeightRules[i] + 1) + "px)")) {
        if (i === 0) {
          // Matched the first rule (no max height)
          mediaList.mediaText = mediaList.item(0) +
              ", screen and (min-height: " + (newHeightRules[i] + 1) + "px)";
        } else {
          // Matched one of the middle rules with a min and a max height
          mediaList.mediaText = mediaList.item(0) +
              ", screen and (min-height: " + (newHeightRules[i] + 1) + "px)" +
              " and (max-height: " + newHeightRules[i - 1] + "px)";
        }
        break;
      } else if (mediaList.item(1) === "screen and (max-height: " +
                 defaultHeightRules[lastHeightRuleIndex] + "px)") {
        // Matched the last rule (no min height)
        mediaList.mediaText = mediaList.item(0) +
            ", screen and (max-height: " +
            newHeightRules[lastHeightRuleIndex] + "px)";
        break;
      }
    }
  }
}

//
// The visualization area adjusts its size using a series of CSS rules that are
// tuned to make adjustments assuming a 400x400 visualization. Since applab
// allows its visualization size to be set on a per-level basis, the function
// below modifies the CSS rules to account for the per-level coordinates
//
// It also adjusts the height rules based on the adjusted visualization size
// and the offset where the app has been embedded in the page
//
// The visualization column will remain at 400 pixels wide in the max-width
// case and scale downward from there. The visualization height will be set
// to preserve the proper aspect ratio with respect to the current width.
//
// The divApplab coordinate space will be Applab.appWidth by Applab.appHeight.
// The scale values are then adjusted such that the max-width case may result
// in a scaled-up version of divApplab and the min-width case will typically
// result in a scaled-down version of divApplab.
//
// @returns {Array.<number>} Array of scale factors which will be used
//     on the applab app area at the following screen widths, respectively:
//     1151px+; 1101-1150px; 1051-1100px; 1001-1050px; 0-1000px.
//

function adjustAppSizeStyles(container) {
  var vizScale = 1;
  // We assume these are listed in this order:
  var defaultScaleFactors = [ 1.0, 0.875, 0.75, 0.625, 0.5 ];
  var scaleFactors = defaultScaleFactors.slice(0);
  if (vizAppWidth !== Applab.appWidth) {
    vizScale = vizAppWidth / Applab.appWidth;
    for (var ind = 0; ind < scaleFactors.length; ind++) {
      scaleFactors[ind] *= vizScale;
    }
  }
  var vizAppHeight = Applab.appHeight * vizScale;

  // Compute new height rules:
  // (1) defaults are scaleFactors * defaultAppHeight + 200 (belowViz estimate)
  // (2) we adjust the height rules to take into account where the codeApp
  // div is anchored on the page. If this changes after this function is called,
  // the media rules for height are no longer valid.
  // (3) we assume that there is nothing below codeApp on the page that also
  // needs to be included in the height rules
  // (4) there is no 5th height rule in the array because the 5th rule in the
  // stylesheet has no minimum specified. It just uses the max-height from the
  // 4th item in the array.
  var defaultHeightRules = [ 600, 550, 500, 450 ];
  var newHeightRules = defaultHeightRules.slice(0);
  for (var z = 0; z < newHeightRules.length; z++) {
    newHeightRules[z] += container.offsetTop +
        (vizAppHeight - defaultAppHeight) * defaultScaleFactors[z];
  }

  var ss = document.styleSheets;
  for (var i = 0; i < ss.length; i++) {
    if (ss[i].href && (ss[i].href.indexOf('applab.css') !== -1)) {
      // We found our applab specific stylesheet:
      var rules = ss[i].cssRules || ss[i].rules;
      var changedRules = 0;
      var curScaleIndex = 0;
      // Change the width/height plus a set of rules for each scale factor:
      var totalRules = 1 + scaleFactors.length;
      for (var j = 0; j < rules.length && changedRules < totalRules; j++) {
        var childRules = rules[j].cssRules || rules[j].rules;
        if (rules[j].selectorText === "div#visualization") {
          // set the 'normal' width/height for the visualization itself
          rules[j].style.cssText = "height: " + vizAppHeight +
                                   "px; width: " + vizAppWidth + "px;";
          changedRules++;
        } else if (rules[j].media && childRules) {
          adjustMediaHeightRule(rules[j].media, defaultHeightRules, newHeightRules);

          // NOTE: selectorText can appear in two different forms when styles and IDs
          // are both present. IE places the styles before the IDs, so we match both forms:
          var changedChildRules = 0;
          var scale = scaleFactors[curScaleIndex];
          for (var k = 0; k < childRules.length && changedChildRules < 8; k++) {
            if (childRules[k].selectorText === "div#visualization.responsive" ||
                childRules[k].selectorText === "div.responsive#visualization") {
              // For this scale factor...
              // set the max-height and max-width for the visualization
              childRules[k].style.cssText = "max-height: " +
                  Applab.appHeight * scale + "px; max-width: " +
                  Applab.appWidth * scale + "px;";
              changedChildRules++;
            } else if (childRules[k].selectorText === "div#visualizationColumn.responsive" ||
                       childRules[k].selectorText === "div.responsive#visualizationColumn") {
              // set the max-width for the parent visualizationColumn
              childRules[k].style.cssText = "max-width: " +
                  Applab.appWidth * scale + "px;";
              changedChildRules++;
            } else if (childRules[k].selectorText === "div#visualizationColumn.responsive.with_padding" ||
                       childRules[k].selectorText === "div.with_padding.responsive#visualizationColumn") {
              // set the max-width for the parent visualizationColumn (with_padding)
              childRules[k].style.cssText = "max-width: " +
                  (Applab.appWidth * scale + 2) + "px;";
              changedChildRules++;
            } else if (childRules[k].selectorText === "div#codeWorkspace") {
              // set the left for the codeWorkspace
              childRules[k].style.cssText = "left: " +
                  Applab.appWidth * scale + "px;";
              changedChildRules++;
            } else if (childRules[k].selectorText === "div#visualizationResizeBar") {
              // set the left for the visualizationResizeBar
              childRules[k].style.cssText = "left: " +
                  Applab.appWidth * scale + "px;";
              changedChildRules++;
            } else if (childRules[k].selectorText === "html[dir='rtl'] div#codeWorkspace") {
              // set the right for the codeWorkspace (RTL mode)
              childRules[k].style.cssText = "right: " +
                  Applab.appWidth * scale + "px;";
              changedChildRules++;
            } else if (childRules[k].selectorText === "html[dir='rtl'] div#visualizationResizeBar") {
              // set the right for the visualizationResizeBar (RTL mode)
              childRules[k].style.cssText = "right: " +
                  Applab.appWidth * scale + "px;";
              changedChildRules++;
            } else if (childRules[k].selectorText === "div#visualization.responsive > *" ||
                       childRules[k].selectorText === "div.responsive#visualization > *") {
              // and set the scale factor for all children of the visualization
              // (importantly, the divApplab element)
              childRules[k].style.cssText = "-webkit-transform: scale(" + scale +
                  ");-ms-transform: scale(" + scale +
                  ");transform: scale(" + scale + ");";
              changedChildRules++;
            }
          }
          if (changedChildRules) {
            curScaleIndex++;
            changedRules++;
          }
        }
      }
      // After processing the applab.css, stop looking for stylesheets:
      break;
    }
  }
}

var drawDiv = function () {
  var divApplab = document.getElementById('divApplab');
  divApplab.style.width = Applab.appWidth + "px";
  divApplab.style.height = Applab.appHeight + "px";
};

Applab.stepSpeedFromSliderSpeed = function (sliderSpeed) {
  return 300 * Math.pow(1 - sliderSpeed, 2);
};

function getCurrentTickLength() {
  var stepSpeed = Applab.scale.stepSpeed;
  if (Applab.speedSlider) {
    stepSpeed = Applab.stepSpeedFromSliderSpeed(Applab.speedSlider.getValue());
  }
  return stepSpeed;
}

function queueOnTick() {
  window.setTimeout(Applab.onTick, getCurrentTickLength());
}

function onDebugInputKeyDown(e) {
  if (e.keyCode == KeyCodes.ENTER) {
    var input = e.target.textContent;
    e.target.textContent = '';
    outputApplabConsole('> ' + input);
    if (Applab.interpreter) {
      var currentScope = Applab.interpreter.getScope();
      var evalInterpreter = new window.Interpreter(input);
      // Set console scope to the current scope of the running program

      // NOTE: we are being a little tricky here (we are re-running
      // part of the Interpreter constructor with a different interpreter's
      // scope)
      evalInterpreter.populateScope_(evalInterpreter.ast, currentScope);
      evalInterpreter.stateStack = [{
          node: evalInterpreter.ast,
          scope: currentScope,
          thisExpression: currentScope
      }];
      // Copy these properties directly into the evalInterpreter so the .isa()
      // method behaves as expected
      ['ARRAY', 'BOOLEAN', 'DATE', 'FUNCTION', 'NUMBER', 'OBJECT', 'STRING',
        'UNDEFINED'].forEach(
        function (prop) {
          evalInterpreter[prop] = Applab.interpreter[prop];
        });
      try {
        evalInterpreter.run();
        outputApplabConsole('< ' + String(evalInterpreter.value));
      }
      catch (err) {
        outputApplabConsole('< ' + String(err));
      }
    } else {
      outputApplabConsole('< (not running)');
    }
  }
}

function selectEditorRowCol(row, col) {
  if (studioApp.editor.currentlyUsingBlocks) {
    var style = {color: '#FFFF22'};
    studioApp.editor.clearLineMarks();
    studioApp.editor.markLine(row, style);
  } else {
    var selection = studioApp.editor.aceEditor.getSelection();
    var range = selection.getRange();

    range.start.row = row;
    range.start.column = col;
    range.end.row = row;
    range.end.column = col + 1;

    // setting with the backwards parameter set to true - this prevents horizontal
    // scrolling to the right
    selection.setSelectionRange(range, true);
  }
}

function handleExecutionError(err, lineNumber) {
  if (!lineNumber && err instanceof SyntaxError) {
    // syntax errors came before execution (during parsing), so we need
    // to determine the proper line number by looking at the exception
    lineNumber = err.loc.line - Applab.userCodeLineOffset;
    // Now select this location in the editor, since we know we didn't hit
    // this while executing (in which case, it would already have been selected)
    selectEditorRowCol(lineNumber - 1, err.loc.column);
  }
  if (!lineNumber && Applab.interpreter) {
    lineNumber = 1 + codegen.getNearestUserCodeLine(Applab.interpreter,
                                                    Applab.cumulativeLength,
                                                    Applab.userCodeStartOffset,
                                                    Applab.userCodeLength);
  }
  outputError(String(err), ErrorLevel.ERROR, lineNumber);
  Applab.executionError = err;

  // Call onPuzzleComplete() here if we want to create levels that end
  // automatically without requiring a press of the Finish button:
}

Applab.getCode = function () {
  return studioApp.editor.getValue();
};

Applab.getHtml = function () {
  return Applab.levelHtml;
};

Applab.onTick = function() {
  if (!Applab.running) {
    return;
  }

  Applab.tickCount++;
  queueOnTick();

  if (Applab.interpreter) {
    Applab.executeInterpreter();
  } else {
    Applab.executeNativeJS();
  }

  if (checkFinished()) {
    Applab.onPuzzleComplete();
  }
};

Applab.executeNativeJS = function () {
  if (Applab.tickCount === 1) {
    try { Applab.whenRunFunc(studioApp, apiBlockly, Applab.Globals); } catch (e) { }
  }
};

function safeStepInterpreter() {
  try {
    Applab.interpreter.step();
  } catch (err) {
    return err;
  }
}

Applab.executeInterpreter = function (runUntilCallbackReturn) {
  Applab.runUntilCallbackReturn = runUntilCallbackReturn;
  if (runUntilCallbackReturn) {
    delete Applab.lastCallbackRetVal;
  }
  Applab.seenEmptyGetCallbackDuringExecution = false;
  Applab.seenReturnFromCallbackDuringExecution = false;

  var atInitialBreakpoint = Applab.paused &&
                            Applab.nextStep === StepType.IN &&
                            Applab.tickCount === 1;
  var atMaxSpeed = getCurrentTickLength() === 0;

  if (Applab.paused) {
    switch (Applab.nextStep) {
      case StepType.RUN:
        // Bail out here if in a break state (paused), but make sure that we still
        // have the next tick queued first, so we can resume after un-pausing):
        return;
      case StepType.OUT:
        // If we haven't yet set stepOutToStackDepth, work backwards through the
        // history of callExpressionSeenAtDepth until we find the one we want to
        // step out to - and store that in stepOutToStackDepth:
        if (Applab.interpreter && typeof Applab.stepOutToStackDepth === 'undefined') {
          Applab.stepOutToStackDepth = 0;
          for (var i = Applab.maxValidCallExpressionDepth; i > 0; i--) {
            if (Applab.callExpressionSeenAtDepth[i]) {
              Applab.stepOutToStackDepth = i;
              break;
            }
          }
        }
        break;
    }
  }

  var doneUserLine = false;
  var reachedBreak = false;
  var unwindingAfterStep = false;
  var inUserCode;
  var userCodeRow;
  var session = studioApp.editor.aceEditor.getSession();

  // In each tick, we will step the interpreter multiple times in a tight
  // loop as long as we are interpreting code that the user can't see
  // (function aliases at the beginning, getCallback event loop at the end)
  for (var stepsThisTick = 0;
       (stepsThisTick < MAX_INTERPRETER_STEPS_PER_TICK) || unwindingAfterStep;
       stepsThisTick++) {
    // Re-check this because the speed may have changed...
    atMaxSpeed = getCurrentTickLength() === 0;
    // NOTE: when running with no source visible or at max speed, we
    // call a simple function to just get the line number, otherwise we call a
    // function that also selects the code:
    var selectCodeFunc = (studioApp.hideSource || (atMaxSpeed && !Applab.paused)) ?
            codegen.getUserCodeLine :
            codegen.selectCurrentCode;

    if ((reachedBreak && !unwindingAfterStep) ||
        (doneUserLine && !unwindingAfterStep && !atMaxSpeed) ||
        Applab.seenEmptyGetCallbackDuringExecution ||
        (runUntilCallbackReturn && Applab.seenReturnFromCallbackDuringExecution)) {
      // stop stepping the interpreter and wait until the next tick once we:
      // (1) reached a breakpoint and are done unwinding OR
      // (2) completed a line of user code and are are done unwinding
      //     (while not running atMaxSpeed) OR
      // (3) have seen an empty event queue in nativeGetCallback (no events) OR
      // (4) have seen a nativeSetCallbackRetVal call in runUntilCallbackReturn mode
      break;
    }
    userCodeRow = selectCodeFunc(Applab.interpreter,
                                 Applab.cumulativeLength,
                                 Applab.userCodeStartOffset,
                                 Applab.userCodeLength,
                                 studioApp.editor);
    inUserCode = (-1 !== userCodeRow);
    // Check to see if we've arrived at a new breakpoint:
    //  (1) should be in user code
    //  (2) should never happen while unwinding
    //  (3) requires either
    //   (a) atInitialBreakpoint OR
    //   (b) isAceBreakpointRow() AND not still at the same line number where
    //       we have already stopped from the last step/breakpoint
    if (inUserCode && !unwindingAfterStep &&
        (atInitialBreakpoint ||
         (userCodeRow !== Applab.stoppedAtBreakpointRow &&
          codegen.isAceBreakpointRow(session, userCodeRow)))) {
      // Yes, arrived at a new breakpoint:
      if (Applab.paused) {
        // Overwrite the nextStep value. (If we hit a breakpoint during a step
        // out or step over, this will cancel that step operation early)
        Applab.nextStep = StepType.RUN;
        Applab.updatePauseUIState();
      } else {
        Applab.onPauseContinueButton();
      }
      // Store some properties about where we stopped:
      Applab.stoppedAtBreakpointRow = userCodeRow;
      Applab.stoppedAtBreakpointStackDepth = Applab.interpreter.stateStack.length;

      // Mark reachedBreak to stop stepping, and start unwinding if needed:
      reachedBreak = true;
      unwindingAfterStep = codegen.isNextStepSafeWhileUnwinding(Applab.interpreter);
      continue;
    }
    // If we've moved past the place of the last breakpoint hit without being
    // deeper in the stack, we will discard the stoppedAtBreakpoint properties:
    if (inUserCode &&
        userCodeRow !== Applab.stoppedAtBreakpointRow &&
        Applab.interpreter.stateStack.length <= Applab.stoppedAtBreakpointStackDepth) {
      delete Applab.stoppedAtBreakpointRow;
      delete Applab.stoppedAtBreakpointStackDepth;
    }
    // If we're unwinding, continue to update the stoppedAtBreakpoint properties
    // to ensure that we have the right properties stored when the unwind completes:
    if (inUserCode && unwindingAfterStep) {
      Applab.stoppedAtBreakpointRow = userCodeRow;
      Applab.stoppedAtBreakpointStackDepth = Applab.interpreter.stateStack.length;
    }
    var err = safeStepInterpreter();
    if (!err) {
      doneUserLine = doneUserLine ||
        (inUserCode && Applab.interpreter.stateStack[0] && Applab.interpreter.stateStack[0].done);

      var stackDepth = Applab.interpreter.stateStack.length;
      // Remember the stack depths of call expressions (so we can implement 'step out')

      // Truncate any history of call expressions seen deeper than our current stack position:
      for (var depth = stackDepth + 1;
            depth <= Applab.maxValidCallExpressionDepth;
            depth++) {
        Applab.callExpressionSeenAtDepth[depth] = false;
      }
      Applab.maxValidCallExpressionDepth = stackDepth;

      if (inUserCode && Applab.interpreter.stateStack[0].node.type === "CallExpression") {
        // Store that we've seen a call expression at this depth in callExpressionSeenAtDepth:
        Applab.callExpressionSeenAtDepth[stackDepth] = true;
      }

      if (Applab.paused) {
        // Store the first call expression stack depth seen while in this step operation:
        if (inUserCode && Applab.interpreter.stateStack[0].node.type === "CallExpression") {
          if (typeof Applab.firstCallStackDepthThisStep === 'undefined') {
            Applab.firstCallStackDepthThisStep = stackDepth;
          }
        }
        // If we've arrived at a BlockStatement or SwitchStatement, set doneUserLine even
        // though the the stateStack doesn't have "done" set, so that stepping in the
        // debugger makes sense (otherwise we'll skip over the beginning of these nodes):
        var nodeType = Applab.interpreter.stateStack[0].node.type;
        doneUserLine = doneUserLine ||
          (inUserCode && (nodeType === "BlockStatement" || nodeType === "SwitchStatement"));

        // For the step in case, we want to stop the interpreter as soon as we enter the callee:
        if (!doneUserLine &&
            inUserCode &&
            Applab.nextStep === StepType.IN &&
            stackDepth > Applab.firstCallStackDepthThisStep) {
          reachedBreak = true;
        }
        // After the interpreter says a node is "done" (meaning it is time to stop), we will
        // advance a little further to the start of the next statement. We achieve this by
        // continuing to set unwindingAfterStep to true to keep the loop going:
        if (doneUserLine || reachedBreak) {
          var wasUnwinding = unwindingAfterStep;
          // step() additional times if we know it to be safe to get us to the next statement:
          unwindingAfterStep = codegen.isNextStepSafeWhileUnwinding(Applab.interpreter);
          if (wasUnwinding && !unwindingAfterStep) {
            // done unwinding.. select code that is next to execute:
            userCodeRow = selectCodeFunc(Applab.interpreter,
                                         Applab.cumulativeLength,
                                         Applab.userCodeStartOffset,
                                         Applab.userCodeLength,
                                         studioApp.editor);
            inUserCode = (-1 !== userCodeRow);
            if (!inUserCode) {
              // not in user code, so keep unwinding after all...
              unwindingAfterStep = true;
            }
          }
        }

        if ((reachedBreak || doneUserLine) && !unwindingAfterStep) {
          if (Applab.nextStep === StepType.OUT &&
              stackDepth > Applab.stepOutToStackDepth) {
            // trying to step out, but we didn't get out yet... continue on.
          } else if (Applab.nextStep === StepType.OVER &&
              typeof Applab.firstCallStackDepthThisStep !== 'undefined' &&
              stackDepth > Applab.firstCallStackDepthThisStep) {
            // trying to step over, and we're in deeper inside a function call... continue next onTick
          } else {
            // Our step operation is complete, reset nextStep to StepType.RUN to
            // return to a normal 'break' state:
            Applab.nextStep = StepType.RUN;
            Applab.updatePauseUIState();
            if (inUserCode) {
              // Store some properties about where we stopped:
              Applab.stoppedAtBreakpointRow = userCodeRow;
              Applab.stoppedAtBreakpointStackDepth = stackDepth;
            }
            delete Applab.stepOutToStackDepth;
            delete Applab.firstCallStackDepthThisStep;
            document.getElementById('spinner').style.visibility = 'hidden';
            break;
          }
        }
      }
    } else {
      handleExecutionError(err, inUserCode ? (userCodeRow + 1) : undefined);
      return;
    }
  }
  if (reachedBreak && atMaxSpeed) {
    // If we were running atMaxSpeed and just reached a breakpoint, the
    // code may not be selected in the editor, so do it now:
    codegen.selectCurrentCode(Applab.interpreter,
                              Applab.cumulativeLength,
                              Applab.userCodeStartOffset,
                              Applab.userCodeLength,
                              studioApp.editor);
  }
};

/**
 * Initialize Blockly and Applab for read-only (blocks feedback).
 * Called on iframe load for read-only.
 */
Applab.initReadonly = function(config) {
  // Do some minimal level loading so that
  // we can ensure that the blocks are appropriately modified for this level
  skin = config.skin;
  level = config.level;
  loadLevel();

  // Applab.initMinimal();

  studioApp.initReadonly(config);
};

/**
 * Initialize Blockly and the Applab app.  Called on page load.
 */
Applab.init = function(config) {
  // replace studioApp methods with our own
  studioApp.reset = this.reset.bind(this);
  studioApp.runButtonClick = this.runButtonClick.bind(this);

  Applab.clearEventHandlersKillTickLoop();
  skin = config.skin;
  level = config.level;
  Applab.user = {
    applabUserId: config.applabUserId,
    isAdmin: (config.isAdmin === true)
  };

  loadLevel();

  if (studioApp.hideSource) {
    // always run at max speed if source is hidden
    config.level.sliderSpeed = 1.0;
  }

  // If we are in mobile sharing mode, allow the viewport to handle scaling
  // and override our default width target in vizAppWidth with the actual width
  if (dom.isMobile() && config.hideSource) {
    vizAppWidth = Applab.appWidth;
  }

  adjustAppSizeStyles(document.getElementById(config.containerId));

  var showSlider = !config.hideSource && config.level.editCode;
  var showDebugButtons = !config.hideSource && config.level.editCode;
  var showDebugConsole = !config.hideSource && config.level.editCode;
  var firstControlsRow = require('./controls.html.ejs')({
    assetUrl: studioApp.assetUrl,
    showSlider: showSlider,
    finishButton: !level.isProjectLevel
  });
  var extraControlsRow = require('./extraControlRows.html.ejs')({
    assetUrl: studioApp.assetUrl,
    debugButtons: showDebugButtons,
    debugConsole: showDebugConsole
  });

  config.html = page({
    assetUrl: studioApp.assetUrl,
    data: {
      localeDirection: studioApp.localeDirection(),
      visualization: require('./visualization.html.ejs')(),
      controls: firstControlsRow,
      extraControlRows: extraControlsRow,
      blockUsed: undefined,
      idealBlockNumber: undefined,
      editCode: level.editCode,
      blockCounterClass: 'block-counter-default',
      pinWorkspaceToBottom: true,
      // TODO (brent) - seems a little gross that we've made this part of a
      // template shared across all apps
      hasDesignMode: Applab.user.isAdmin
    }
  });

  config.loadAudio = function() {
    studioApp.loadAudio(skin.winSound, 'win');
    studioApp.loadAudio(skin.failureSound, 'failure');
  };

  config.afterInject = function() {
    if (studioApp.isUsingBlockly()) {
      /**
       * The richness of block colours, regardless of the hue.
       * MOOC blocks should be brighter (target audience is younger).
       * Must be in the range of 0 (inclusive) to 1 (exclusive).
       * Blockly's default is 0.45.
       */
      Blockly.HSV_SATURATION = 0.6;

      Blockly.SNAP_RADIUS *= Applab.scale.snapRadius;
    }
    drawDiv();
  };

  config.afterEditorReady = function() {
    // Set up an event handler to create breakpoints when clicking in the
    // ace gutter:
    var aceEditor = studioApp.editor.aceEditor;
    if (aceEditor) {
      aceEditor.on("guttermousedown", function(e) {
        var target = e.domEvent.target;
        if (target.className.indexOf("ace_gutter-cell") == -1) {
          return;
        }
        var row = e.getDocumentPosition().row;
        var bps = e.editor.session.getBreakpoints();
        if (bps[row]) {
          e.editor.session.clearBreakpoint(row);
        } else {
          e.editor.session.setBreakpoint(row);
        }
        e.stop();
      });
    }

    if (studioApp.share) {
      // automatically run in share mode:
      window.setTimeout(Applab.runButtonClick.bind(studioApp), 0);
    }
  };

  // arrangeStartBlocks(config);

  config.twitter = twitterOptions;

  // hide makeYourOwn on the share page
  config.makeYourOwn = false;

  config.varsInGlobals = true;
  config.noButtonsBelowOnMobileShare = true;

  config.dropletConfig = dropletConfig;
  config.pinWorkspaceToBottom = true;

  config.vizAspectRatio = Applab.appWidth / Applab.appHeight;
  config.nativeVizWidth = Applab.appWidth;

  // Since the app width may not be 400, set this value in the config to
  // ensure that the viewport is set up properly for scaling it up/down
  config.mobileNoPaddingShareWidth = config.level.appWidth;

  // Applab.initMinimal();

  Applab.levelHtml = level.levelHtml || "";

  studioApp.init(config);

  var viz = document.getElementById('visualization');
  var vizCol = document.getElementById('visualizationColumn');

  if (!config.noPadding) {
    viz.className += " with_padding";
    vizCol.className += " with_padding";
  }

  if (config.embed || config.hideSource) {
    // no responsive styles active in embed or hideSource mode, so set sizes:
    viz.style.width = Applab.appWidth + 'px';
    viz.style.height = Applab.appHeight + 'px';
    // Use offsetWidth of viz so we can include any possible border width:
    vizCol.style.maxWidth = viz.offsetWidth + 'px';
  }

  if (level.editCode) {
    // Initialize the slider.
    var slider = document.getElementById('applab-slider');
    if (slider) {
      Applab.speedSlider = new Slider(10, 27, 130, slider);

      // Change default speed (eg Speed up levels that have lots of steps).
      if (config.level.sliderSpeed) {
        Applab.speedSlider.setValue(config.level.sliderSpeed);
      }
    }
    var debugInput = document.getElementById('debug-input');
    if (debugInput) {
      debugInput.addEventListener('keydown', onDebugInputKeyDown);
    }
  }

  var debugResizeBar = document.getElementById('debugResizeBar');
  if (debugResizeBar) {
    dom.addMouseDownTouchEvent(debugResizeBar,
                               Applab.onMouseDownDebugResizeBar);
    // Can't use dom.addMouseUpTouchEvent() because it will preventDefault on
    // all touchend events on the page, breaking click events...
    document.body.addEventListener('mouseup', Applab.onMouseUpDebugResizeBar);
    var mouseUpTouchEventName = dom.getTouchEventName('mouseup');
    if (mouseUpTouchEventName) {
      document.body.addEventListener(mouseUpTouchEventName,
                                     Applab.onMouseUpDebugResizeBar);
    }
  }

  var finishButton = document.getElementById('finishButton');
  if (finishButton) {
    dom.addClickTouchEvent(finishButton, Applab.onPuzzleComplete);
  }

  if (level.editCode) {
    var pauseButton = document.getElementById('pauseButton');
    var continueButton = document.getElementById('continueButton');
    var stepInButton = document.getElementById('stepInButton');
    var stepOverButton = document.getElementById('stepOverButton');
    var stepOutButton = document.getElementById('stepOutButton');
    if (pauseButton && continueButton && stepInButton && stepOverButton && stepOutButton) {
      dom.addClickTouchEvent(pauseButton, Applab.onPauseContinueButton);
      dom.addClickTouchEvent(continueButton, Applab.onPauseContinueButton);
      dom.addClickTouchEvent(stepInButton, Applab.onStepInButton);
      dom.addClickTouchEvent(stepOverButton, Applab.onStepOverButton);
      dom.addClickTouchEvent(stepOutButton, Applab.onStepOutButton);
    }
    var viewDataButton = document.getElementById('viewDataButton');
    if (viewDataButton) {
      // Simulate a run button click, to load the channel id.
      var viewDataClick = studioApp.runButtonClickWrapper.bind(
          studioApp, Applab.onViewData);
      var throttledViewDataClick = _.debounce(viewDataClick, 250, true);
      dom.addClickTouchEvent(viewDataButton, throttledViewDataClick);
    }

    designMode.renderDesignModeBox();

    // TODO(dave): make DesignModeHeaders and DesignModeBox share a
    // parent component.
    designMode.configureDesignModeHeaders();

    designMode.configureDesignToggleRow();

    // Start out in regular mode. Eventually likely want this to be a level setting
    designMode.toggleDesignMode(false);

    var designModeClear = document.getElementById('designModeClear');
    if (designModeClear) {
      dom.addClickTouchEvent(designModeClear, designMode.onClear);
    }

    designMode.configureDragAndDrop();
  }
};

Applab.onMouseDownDebugResizeBar = function (event) {
  // When we see a mouse down in the resize bar, start tracking mouse moves:

  if (event.srcElement.id === 'debugResizeBar') {
    Applab.draggingDebugResizeBar = true;
    document.body.addEventListener('mousemove', Applab.onMouseMoveDebugResizeBar);
    Applab.mouseMoveTouchEventName = dom.getTouchEventName('mousemove');
    if (Applab.mouseMoveTouchEventName) {
      document.body.addEventListener(Applab.mouseMoveTouchEventName,
                                     Applab.onMouseMoveDebugResizeBar);
    }

    event.preventDefault();
  }
};

/**
*  Handle mouse moves while dragging the debug resize bar.
*/
Applab.onMouseMoveDebugResizeBar = function (event) {
  var debugResizeBar = document.getElementById('debugResizeBar');
  var codeApp = document.getElementById('codeApp');
  var codeTextbox = document.getElementById('codeTextbox');
  var debugArea = document.getElementById('debug-area');

  var rect = debugResizeBar.getBoundingClientRect();
  var offset = (parseInt(window.getComputedStyle(codeApp).bottom, 10) || 0) -
               rect.height / 2;
  var newDbgHeight = Math.max(MIN_DEBUG_AREA_HEIGHT,
                       Math.min(MAX_DEBUG_AREA_HEIGHT,
                                (window.innerHeight - event.pageY) - offset));

  codeTextbox.style.bottom = newDbgHeight + 'px';
  debugArea.style.height = newDbgHeight + 'px';

  // Prevent the codeTextbox from being shrunk too small vertically
  // (half for code, half for debug-area, minus half toolbar height + 1px border)
  //
  // (we would do this in CSS, but for precedence rules to work properly, if
  //  we explicitly set bottom/height styles on the elements above, we need to
  //  do the same for these styles as well)

  codeTextbox.style.minHeight = 'calc(50% - 21px)';
  debugArea.style.maxHeight = 'calc(50% - 21px)';

  // Fire resize so blockly and droplet handle this type of resize properly:
  utils.fireResizeEvent();
};

Applab.onMouseUpDebugResizeBar = function (event) {
  // If we have been tracking mouse moves, remove the handler now:
  if (Applab.draggingDebugResizeBar) {
    document.body.removeEventListener('mousemove', Applab.onMouseMoveDebugResizeBar);
    if (Applab.mouseMoveTouchEventName) {
      document.body.removeEventListener(Applab.mouseMoveTouchEventName,
                                        Applab.onMouseMoveDebugResizeBar);
    }
    Applab.draggingDebugResizeBar = false;
  }
};

/**
 * Clear the event handlers and stop the onTick timer.
 */
Applab.clearEventHandlersKillTickLoop = function() {
  Applab.whenRunFunc = null;
  Applab.running = false;
  Applab.tickCount = 0;

  var spinner = document.getElementById('spinner');
  if (spinner) {
    spinner.style.visibility = 'hidden';
  }

  var pauseButton = document.getElementById('pauseButton');
  var continueButton = document.getElementById('continueButton');
  var stepInButton = document.getElementById('stepInButton');
  var stepOverButton = document.getElementById('stepOverButton');
  var stepOutButton = document.getElementById('stepOutButton');
  if (pauseButton && continueButton && stepInButton && stepOverButton && stepOutButton) {
    pauseButton.style.display = "inline-block";
    pauseButton.disabled = true;
    continueButton.style.display = "none";
    stepInButton.disabled = true;
    stepOverButton.disabled = true;
    stepOutButton.disabled = true;
  }
};

Applab.isRunning = function () {
  return $('#resetButton').is(':visible');
};

/**
 * Reset the app to the start position and kill any pending animation tasks.
 * @param {boolean} first True if an opening animation is to be played.
 */
Applab.reset = function(first) {
  var i;
  Applab.clearEventHandlersKillTickLoop();

  // Soft buttons
  var softButtonCount = 0;
  for (i = 0; i < Applab.softButtons_.length; i++) {
    document.getElementById(Applab.softButtons_[i]).style.display = 'inline';
    softButtonCount++;
  }
  if (softButtonCount) {
    var softButtonsCell = document.getElementById('soft-buttons');
    softButtonsCell.className = 'soft-buttons-' + softButtonCount;
  }

  // Reset configurable variables
  delete Applab.activeCanvas;
  Applab.turtle = {};
  Applab.turtle.heading = 0;
  Applab.turtle.x = Applab.appWidth / 2;
  Applab.turtle.y = Applab.appHeight / 2;
  apiTimeoutList.clearTimeouts();
  apiTimeoutList.clearIntervals();

  var divApplab = document.getElementById('divApplab');

  while (divApplab.firstChild) {
    divApplab.removeChild(divApplab.firstChild);
  }

  // Clone and replace divApplab (this removes all attached event listeners):
  var newDivApplab = divApplab.cloneNode(true);
  divApplab.parentNode.replaceChild(newDivApplab, divApplab);

  if (level.showTurtleBeforeRun) {
    applabTurtle.turtleSetVisibility(true);
  }

  var allowDragging = Applab.isInDesignMode() && !Applab.isRunning();
  designMode.parseFromLevelHtml(newDivApplab, allowDragging);
  if (Applab.isInDesignMode()) {
    designMode.clearProperties();
    designMode.resetElementTray(allowDragging);
  }

  newDivApplab.addEventListener('click', designMode.onDivApplabClick);

  // Reset goal successState:
  if (level.goal) {
    level.goal.successState = {};
  }

  if (level.editCode) {
    Applab.paused = false;
    Applab.nextStep = StepType.RUN;
    delete Applab.stepOutToStackDepth;
    delete Applab.firstCallStackDepthThisStep;
    delete Applab.stoppedAtBreakpointRow;
    delete Applab.stoppedAtBreakpointStackDepth;
    Applab.maxValidCallExpressionDepth = 0;
    Applab.callExpressionSeenAtDepth = [];
    // Reset the pause button:
    var pauseButton = document.getElementById('pauseButton');
    var continueButton = document.getElementById('continueButton');
    var stepInButton = document.getElementById('stepInButton');
    var stepOverButton = document.getElementById('stepOverButton');
    var stepOutButton = document.getElementById('stepOutButton');
    if (pauseButton && continueButton && stepInButton && stepOverButton && stepOutButton) {
      pauseButton.style.display = "inline-block";
      pauseButton.disabled = true;
      continueButton.style.display = "none";
      stepInButton.disabled = false;
      stepOverButton.disabled = true;
      stepOutButton.disabled = true;
    }
    var spinner = document.getElementById('spinner');
    if (spinner) {
      spinner.style.visibility = 'hidden';
    }
    var debugOutput = document.getElementById('debug-output');
    if (debugOutput) {
      debugOutput.textContent = '';
    }
    var debugInput = document.getElementById('debug-input');
    if (debugInput) {
      debugInput.textContent = '';
    }
  }

  // Reset the Globals object used to contain program variables:
  Applab.Globals = {};
  Applab.eventQueue = [];
  Applab.executionError = null;
  Applab.interpreter = null;
};

// TODO(dave): remove once channel id is passed in appOptions.
/**
 * If channel id has not yet been loaded, delays calling of the callback
 * until the saveProject response comes back. Otherwise, calls the callback
 * directly.
 * @param callback {Function}
 */
studioApp.runButtonClickWrapper = function (callback) {
  // Behave like other apps when not editing a project or channel id is present.
  if (window.dashboard && (!dashboard.project.isEditing ||
      (dashboard.project.current && dashboard.project.current.id))) {
    $(window).trigger('run_button_pressed');
    callback();
  } else {
    $(window).trigger('run_button_pressed', callback);
  }
};

/**
 * Click the run button.  Start the program.
 */
// XXX This is the only method used by the templates!
Applab.runButtonClick = function() {
  var runButton = document.getElementById('runButton');
  var resetButton = document.getElementById('resetButton');
  // Ensure that Reset button is at least as wide as Run button.
  if (!resetButton.style.minWidth) {
    resetButton.style.minWidth = runButton.offsetWidth + 'px';
  }
  studioApp.toggleRunReset('reset');
  if (studioApp.isUsingBlockly()) {
    Blockly.mainBlockSpace.traceOn(true);
  }
  studioApp.reset(false);
  studioApp.attempts++;
  Applab.execute();

  // Enable the Finish button if is present:
  var shareCell = document.getElementById('share-cell');
  if (shareCell) {
    shareCell.className = 'share-cell-enabled';
  }
};

/**
 * App specific displayFeedback function that calls into
 * studioApp.displayFeedback when appropriate
 */
var displayFeedback = function() {
  if (!Applab.waitingForReport) {
    studioApp.displayFeedback({
      app: 'applab', //XXX
      skin: skin.id,
      feedbackType: Applab.testResults,
      response: Applab.response,
      level: level,
      showingSharing: level.freePlay,
      feedbackImage: Applab.feedbackImage,
      twitter: twitterOptions,
      // allow users to save freeplay levels to their gallery (impressive non-freeplay levels are autosaved)
      saveToGalleryUrl: level.freePlay && Applab.response && Applab.response.save_to_gallery_url,
      appStrings: {
        reinfFeedbackMsg: applabMsg.reinfFeedbackMsg(),
        sharingText: applabMsg.shareGame()
      }
    });
  }
};

/**
 * Function to be called when the service report call is complete
 * @param {object} JSON response (if available)
 */
Applab.onReportComplete = function(response) {
  Applab.response = response;
  Applab.waitingForReport = false;
  displayFeedback();
};

//
// Generates code with user-generated function definitions and evals that code
// so these can be called from event handlers. This should be called for each
// block type that defines functions.
//

var defineProcedures = function (blockType) {
  var code = Blockly.Generator.blockSpaceToCode('JavaScript', blockType);
  // TODO: handle editCode JS interpreter
  try { codegen.evalWith(code, {
                         studioApp: studioApp,
                         Applab: apiBlockly,
                         Globals: Applab.Globals } ); } catch (e) { }
};

/**
 * A miniature runtime in the interpreted world calls this function repeatedly
 * to check to see if it should invoke any callbacks from within the
 * interpreted world. If the eventQueue is not empty, we will return an object
 * that contains an interpreted callback function (stored in "fn") and,
 * optionally, callback arguments (stored in "arguments")
 */
var nativeGetCallback = function () {
  var retVal = Applab.eventQueue.shift();
  if (typeof retVal === "undefined") {
    Applab.seenEmptyGetCallbackDuringExecution = true;
  }
  return retVal;
};

var nativeSetCallbackRetVal = function (retVal) {
  if (Applab.eventQueue.length === 0) {
    // If nothing else is in the event queue, then store this return value
    // away so it can be returned in the native event handler
    Applab.seenReturnFromCallbackDuringExecution = true;
    Applab.lastCallbackRetVal = retVal;
  }
  // Provide warnings to the user if this function has been called with a
  // meaningful return value while we are no longer in the native event handler

  // TODO (cpirich): Check to see if the DOM event object was modified
  // (preventDefault(), stopPropagation(), returnValue) and provide a similar
  // warning since these won't work as expected unless running atMaxSpeed
  if (!Applab.runUntilCallbackReturn &&
      typeof Applab.lastCallbackRetVal !== 'undefined') {
    outputApplabConsole("Function passed to onEvent() has taken too long - the return value was ignored.");
    if (getCurrentTickLength() !== 0) {
      outputApplabConsole("  (try moving the speed slider to its maximum value)");
    }
  }
};

var consoleApi = {};

consoleApi.log = function() {
  var nativeArgs = [];
  for (var i = 0; i < arguments.length; i++) {
    nativeArgs[i] = codegen.marshalInterpreterToNative(Applab.interpreter,
                                                       arguments[i]);
  }
  var output = '';
  var firstArg = nativeArgs[0];
  if (typeof firstArg === 'string' || firstArg instanceof String) {
    output = vsprintf(firstArg, nativeArgs.slice(1));
  } else {
    for (i = 0; i < nativeArgs.length; i++) {
      output += nativeArgs[i].toString();
      if (i < nativeArgs.length - 1) {
        output += '\n';
      }
    }
  }
  outputApplabConsole(output);
};

function populateNonMarshalledFunctions(interpreter, scope, parent) {
  for (var i = 0; i < dropletConfig.blocks.length; i++) {
    var block = dropletConfig.blocks[i];
    if (block.dontMarshal) {
      var func = parent[block.func];
      // 4th param is false to indicate: don't marshal params
      var wrapper = codegen.makeNativeMemberFunction({
          interpreter: interpreter,
          nativeFunc: func,
          nativeParentObj: parent,
          dontMarshal: true
      });
      interpreter.setProperty(scope,
                              block.func,
                              interpreter.createNativeFunction(wrapper));
    }
  }
}

/**
 * Execute the app
 */
Applab.execute = function() {
  Applab.result = ResultType.UNSET;
  Applab.testResults = TestResults.NO_TESTS_RUN;
  Applab.waitingForReport = false;
  Applab.response = null;
  var i;

  studioApp.reset(false);

  // Set event handlers and start the onTick timer

  var codeWhenRun;
  if (level.editCode) {
    codeWhenRun = studioApp.editor.getValue();
    Applab.userCodeStartOffset = 0;
    Applab.userCodeLineOffset = 0;
    Applab.userCodeLength = codeWhenRun.length;
    // Append our mini-runtime after the user's code. This will spin and process
    // callback functions:
    codeWhenRun += '\nwhile (true) { var obj = getCallback(); ' +
      'if (obj) { var ret = obj.fn.apply(null, obj.arguments ? obj.arguments : null);' +
                 'setCallbackRetVal(ret); }}';
    var session = studioApp.editor.aceEditor.getSession();
    annotationList.attachToSession(session);
    Applab.cumulativeLength = codegen.aceCalculateCumulativeLength(session);
  } else {
    // Define any top-level procedures the user may have created
    // (must be after reset(), which resets the Applab.Globals namespace)
    defineProcedures('procedures_defreturn');
    defineProcedures('procedures_defnoreturn');

    var blocks = Blockly.mainBlockSpace.getTopBlocks();
    for (var x = 0; blocks[x]; x++) {
      var block = blocks[x];
      if (block.type === 'when_run') {
        codeWhenRun = Blockly.Generator.blocksToCode('JavaScript', [ block ]);
        break;
      }
    }
  }
  if (codeWhenRun) {
    if (level.editCode) {
      // Use JS interpreter on editCode levels
      var initFunc = function(interpreter, scope) {
        codegen.initJSInterpreter(interpreter,
                                  dropletConfig.blocks,
                                  scope,
                                  { console: consoleApi });

        populateNonMarshalledFunctions(interpreter, scope, dontMarshalApi);

        // Only allow five levels of depth when marshalling the return value
        // since we will occasionally return DOM Event objects which contain
        // properties that recurse over and over...
        var wrapper = codegen.makeNativeMemberFunction({
            interpreter: interpreter,
            nativeFunc: nativeGetCallback,
            maxDepth: 5
        });
        interpreter.setProperty(scope,
                                'getCallback',
                                interpreter.createNativeFunction(wrapper));

        wrapper = codegen.makeNativeMemberFunction({
            interpreter: interpreter,
            nativeFunc: nativeSetCallbackRetVal,
        });
        interpreter.setProperty(scope,
                                'setCallbackRetVal',
                                interpreter.createNativeFunction(wrapper));
      };
      try {
        Applab.interpreter = new window.Interpreter(codeWhenRun, initFunc);
      }
      catch(err) {
        handleExecutionError(err);
      }
    } else {
      Applab.whenRunFunc = codegen.functionFromCode(codeWhenRun, {
                                          StudioApp: studioApp,
                                          Applab: apiBlockly,
                                          Globals: Applab.Globals } );
    }
  }

  if (level.editCode) {
    var pauseButton = document.getElementById('pauseButton');
    var continueButton = document.getElementById('continueButton');
    var stepInButton = document.getElementById('stepInButton');
    var stepOverButton = document.getElementById('stepOverButton');
    var stepOutButton = document.getElementById('stepOutButton');
    if (pauseButton && continueButton && stepInButton && stepOverButton && stepOutButton) {
      pauseButton.style.display = "inline-block";
      pauseButton.disabled = false;
      continueButton.style.display = "none";
      stepInButton.disabled = true;
      stepOverButton.disabled = true;
      stepOutButton.disabled = true;
    }
    var spinner = document.getElementById('spinner');
    if (spinner) {
      spinner.style.visibility = 'visible';
    }
  }

  // Set focus on divApplab so key events can be handled right from the start
  // without requiring the user to adjust focus:
  var divApplab = document.getElementById('divApplab');
  divApplab.focus();

  Applab.running = true;
  queueOnTick();
};

Applab.onPauseContinueButton = function() {
  if (Applab.running) {
    // We have code and are either running or paused
    if (Applab.paused && Applab.nextStep === StepType.RUN) {
      Applab.paused = false;
    } else {
      Applab.paused = true;
      Applab.nextStep = StepType.RUN;
    }
    Applab.updatePauseUIState();
    var stepInButton = document.getElementById('stepInButton');
    var stepOverButton = document.getElementById('stepOverButton');
    var stepOutButton = document.getElementById('stepOutButton');
    stepInButton.disabled = !Applab.paused;
    stepOverButton.disabled = !Applab.paused;
    stepOutButton.disabled = !Applab.paused;
  }
};

Applab.updatePauseUIState = function() {
  var pauseButton = document.getElementById('pauseButton');
  var continueButton = document.getElementById('continueButton');
  var spinner = document.getElementById('spinner');

  if (pauseButton && continueButton && spinner) {
    if (Applab.paused && Applab.nextStep === StepType.RUN) {
      pauseButton.style.display = "none";
      continueButton.style.display = "inline-block";
      spinner.style.visibility = 'hidden';
    } else {
      pauseButton.style.display = "inline-block";
      continueButton.style.display = "none";
      spinner.style.visibility = 'visible';
    }
  }
};

Applab.onStepOverButton = function() {
  if (Applab.running) {
    Applab.paused = true;
    Applab.nextStep = StepType.OVER;
    Applab.updatePauseUIState();
  }
};

Applab.onStepInButton = function() {
  if (!Applab.running) {
    Applab.runButtonClick();
    Applab.onPauseContinueButton();
  }
  Applab.paused = true;
  Applab.nextStep = StepType.IN;
  Applab.updatePauseUIState();
};

Applab.onStepOutButton = function() {
  if (Applab.running) {
    Applab.paused = true;
    Applab.nextStep = StepType.OUT;
    Applab.updatePauseUIState();
  }
};

Applab.feedbackImage = '';
Applab.encodedFeedbackImage = '';

Applab.onViewData = function() {
  window.open(
    '//' + getPegasusHost() + '/edit-csp-app/' + AppStorage.getChannelId(),
    '_blank');
};

Applab.onDesignModeButton = function() {
  designMode.toggleDesignMode(true);
  studioApp.resetButtonClick();
};

Applab.onCodeModeButton = function() {
  designMode.toggleDesignMode(false);
};

Applab.onPuzzleComplete = function() {
  // Submit all results as success / freePlay
  Applab.result = ResultType.SUCCESS;
  Applab.testResults = TestResults.FREE_PLAY;

  // Stop everything on screen
  Applab.clearEventHandlersKillTickLoop();

  var program;

  if (level.editCode) {
    // If we want to "normalize" the JavaScript to avoid proliferation of nearly
    // identical versions of the code on the service, we could do either of these:

    // do an acorn.parse and then use escodegen to generate back a "clean" version
    // or minify (uglifyjs) and that or js-beautify to restore a "clean" version

    program = studioApp.editor.getValue();
  } else {
    var xml = Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace);
    program = Blockly.Xml.domToText(xml);
  }

  Applab.waitingForReport = true;

  var sendReport = function() {
    studioApp.report({
      app: 'applab',
      level: level.id,
      result: Applab.result === ResultType.SUCCESS,
      testResult: Applab.testResults,
      program: encodeURIComponent(program),
      image: Applab.encodedFeedbackImage,
      onComplete: Applab.onReportComplete
    });
  };

  if (typeof document.getElementById('divApplab').toDataURL === 'undefined') { // don't try it if function is not defined
    sendReport();
  } else {
    document.getElementById('divApplab').toDataURL("image/png", {
      callback: function(pngDataUrl) {
        Applab.feedbackImage = pngDataUrl;
        Applab.encodedFeedbackImage = encodeURIComponent(Applab.feedbackImage.split(',')[1]);

        sendReport();
      }
    });
  }
};

Applab.executeCmd = function (id, name, opts) {
  var cmd = {
    'id': id,
    'name': name,
    'opts': opts
  };
  return Applab.callCmd(cmd);
};

//
// Execute an API command
//

Applab.callCmd = function (cmd) {
  var retVal = false;
  if (applabCommands[cmd.name] instanceof Function) {
    studioApp.highlight(cmd.id);
    retVal = applabCommands[cmd.name](cmd.opts);
  }
  return retVal;
};
/*
var onWaitComplete = function (opts) {
  if (!opts.complete) {
    if (opts.waitCallback) {
      opts.waitCallback();
    }
    opts.complete = true;
  }
};

Studio.wait = function (opts) {
  if (!opts.started) {
    opts.started = true;

    // opts.value is the number of milliseconds to wait - or 'click' which means
    // "wait for click"
    if ('click' === opts.value) {
      opts.waitForClick = true;
    } else {
      opts.waitTimeout = window.setTimeout(
        delegate(this, onWaitComplete, opts),
        opts.value);
    }
  }

  return opts.complete;
};
*/

Applab.timedOut = function() {
  return Applab.tickCount > Applab.timeoutFailureTick;
};

var checkFinished = function () {
  // if we have a succcess condition and have accomplished it, we're done and successful
  if (level.goal && level.goal.successCondition && level.goal.successCondition()) {
    Applab.result = ResultType.SUCCESS;
    return true;
  }

  // if we have a failure condition, and it's been reached, we're done and failed
  if (level.goal && level.goal.failureCondition && level.goal.failureCondition()) {
    Applab.result = ResultType.FAILURE;
    return true;
  }

  /*
  if (Applab.allGoalsVisited()) {
    Applab.result = ResultType.SUCCESS;
    return true;
  }
  */

  if (Applab.timedOut()) {
    Applab.result = ResultType.FAILURE;
    return true;
  }

  return false;
};

// TODO(dave): move this logic to dashboard.
var getPegasusHost = function() {
  switch (window.location.hostname) {
    case 'studio.code.org':
    case 'learn.code.org':
      return 'code.org';
    default:
      var name = window.location.hostname.split('.')[0];
      switch(name) {
        case 'localhost':
          return 'localhost.code.org:3000';
        case 'development':
        case 'staging':
        case 'test':
        case 'levelbuilder':
          return name + '.code.org';
        case 'staging-studio':
          return 'staging.code.org';
        case 'test-studio':
          return 'test.code.org';
        case 'levelbuilder-studio':
          return 'levelbuilder.code.org';
        default:
          return null;
      }
  }
};

Applab.isInDesignMode = function () {
  return $('#designModeBox').is(':visible');
};


},{"../StudioApp":4,"../codegen":93,"../constants":95,"../dom":96,"../dropletUtils":97,"../locale":138,"../skins":253,"../slider":254,"../templates/page.html.ejs":279,"../timeoutList":285,"../utils":301,"../xml":302,"./acemode/annotationList":9,"./acemode/mode-javascript_codeorg":11,"./api":12,"./apiBlockly":13,"./appStorage":14,"./applabTurtle":16,"./blocks":20,"./commands":22,"./controls.html.ejs":23,"./designMode":41,"./dontMarshalApi":43,"./dropletConfig":44,"./errorHandler":45,"./extraControlRows.html.ejs":46,"./locale":49,"./sprintf":53,"./visualization.html.ejs":54}],54:[function(require,module,exports){
module.exports= (function() {
  var t = function anonymous(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<div id="divApplab" tabindex="1">\n</div>\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());
},{"ejs":472}],53:[function(require,module,exports){
/*jshint asi:true */
/*jshint -W064 */

//
// Extracted from https://github.com/alexei/sprintf.js
//
// Copyright (c) 2007-2014, Alexandru Marasteanu <hello [at) alexei (dot] ro>
// All rights reserved.
//
// Current as of 10/30/14
// commit c3ac006aff511dda804589af8f5b3c0d5da5afb1
//

var re = {
    not_string: /[^s]/,
    number: /[dief]/,
    text: /^[^\x25]+/,
    modulo: /^\x25{2}/,
    placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fiosuxX])/,
    key: /^([a-z_][a-z_\d]*)/i,
    key_access: /^\.([a-z_][a-z_\d]*)/i,
    index_access: /^\[(\d+)\]/,
    sign: /^[\+\-]/
}

function sprintf() {
    var key = arguments[0], cache = sprintf.cache
    if (!(cache[key] && cache.hasOwnProperty(key))) {
        cache[key] = sprintf.parse(key)
    }
    return sprintf.format.call(null, cache[key], arguments)
}

sprintf.format = function(parse_tree, argv) {
    var cursor = 1, tree_length = parse_tree.length, node_type = "", arg, output = [], i, k, match, pad, pad_character, pad_length, is_positive = true, sign = ""
    for (i = 0; i < tree_length; i++) {
        node_type = get_type(parse_tree[i])
        if (node_type === "string") {
            output[output.length] = parse_tree[i]
        }
        else if (node_type === "array") {
            match = parse_tree[i] // convenience purposes only
            if (match[2]) { // keyword argument
                arg = argv[cursor]
                for (k = 0; k < match[2].length; k++) {
                    if (!arg.hasOwnProperty(match[2][k])) {
                        throw new Error(sprintf("[sprintf] property '%s' does not exist", match[2][k]))
                    }
                    arg = arg[match[2][k]]
                }
            }
            else if (match[1]) { // positional argument (explicit)
                arg = argv[match[1]]
            }
            else { // positional argument (implicit)
                arg = argv[cursor++]
            }

            if (get_type(arg) == "function") {
                arg = arg()
            }

            if (re.not_string.test(match[8]) && (get_type(arg) != "number" && isNaN(arg))) {
                throw new TypeError(sprintf("[sprintf] expecting number but found %s", get_type(arg)))
            }

            if (re.number.test(match[8])) {
                is_positive = arg >= 0
            }

            switch (match[8]) {
                case "b":
                    arg = arg.toString(2)
                break
                case "c":
                    arg = String.fromCharCode(arg)
                break
                case "d":
                case "i":
                    arg = parseInt(arg, 10)
                break
                case "e":
                    arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential()
                break
                case "f":
                    arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg)
                break
                case "o":
                    arg = arg.toString(8)
                break
                case "s":
                    arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg)
                break
                case "u":
                    arg = arg >>> 0
                break
                case "x":
                    arg = arg.toString(16)
                break
                case "X":
                    arg = arg.toString(16).toUpperCase()
                break
            }
            if (re.number.test(match[8]) && (!is_positive || match[3])) {
                sign = is_positive ? "+" : "-"
                arg = arg.toString().replace(re.sign, "")
            }
            else {
                sign = ""
            }
            pad_character = match[4] ? match[4] === "0" ? "0" : match[4].charAt(1) : " "
            pad_length = match[6] - (sign + arg).length
            pad = match[6] ? (pad_length > 0 ? str_repeat(pad_character, pad_length) : "") : ""
            output[output.length] = match[5] ? sign + arg + pad : (pad_character === "0" ? sign + pad + arg : pad + sign + arg)
        }
    }
    return output.join("")
}

sprintf.cache = {}

sprintf.parse = function(fmt) {
    var _fmt = fmt, match = [], parse_tree = [], arg_names = 0
    while (_fmt) {
        if ((match = re.text.exec(_fmt)) !== null) {
            parse_tree[parse_tree.length] = match[0]
        }
        else if ((match = re.modulo.exec(_fmt)) !== null) {
            parse_tree[parse_tree.length] = "%"
        }
        else if ((match = re.placeholder.exec(_fmt)) !== null) {
            if (match[2]) {
                arg_names |= 1
                var field_list = [], replacement_field = match[2], field_match = []
                if ((field_match = re.key.exec(replacement_field)) !== null) {
                    field_list[field_list.length] = field_match[1]
                    while ((replacement_field = replacement_field.substring(field_match[0].length)) !== "") {
                        if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                            field_list[field_list.length] = field_match[1]
                        }
                        else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                            field_list[field_list.length] = field_match[1]
                        }
                        else {
                            throw new SyntaxError("[sprintf] failed to parse named argument key")
                        }
                    }
                }
                else {
                    throw new SyntaxError("[sprintf] failed to parse named argument key")
                }
                match[2] = field_list
            }
            else {
                arg_names |= 2
            }
            if (arg_names === 3) {
                throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported")
            }
            parse_tree[parse_tree.length] = match
        }
        else {
            throw new SyntaxError("[sprintf] unexpected placeholder")
        }
        _fmt = _fmt.substring(match[0].length)
    }
    return parse_tree
}

var vsprintf = function(fmt, argv, _argv) {
    _argv = (argv || []).slice(0)
    _argv.splice(0, 0, fmt)
    return sprintf.apply(null, _argv)
}

/**
 * helpers
 */
function get_type(variable) {
    return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase()
}

function str_repeat(input, multiplier) {
    return Array(multiplier + 1).join(input)
}

module.exports = {
  vsprintf: vsprintf
};


},{}],46:[function(require,module,exports){
module.exports= (function() {
  var t = function anonymous(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('');1; var msg = require('../locale') ; buf.push('\n');2; var applabMsg = require('./locale') ; buf.push('\n\n<div id="debug-area">\n  ');5; if (debugButtons) { ; buf.push('\n  <div id="debugResizeBar">\n    <div id="slider-cell">\n      <svg id="applab-slider"\n           xmlns="http://www.w3.org/2000/svg"\n           xmlns:svg="http://www.w3.org/2000/svg"\n           xmlns:xlink="http://www.w3.org/1999/xlink"\n           version="1.1"\n           width="150"\n           height="38">\n          <!-- Slow icon. -->\n          <clipPath id="slowClipPath">\n            <rect width=26 height=12 x=5 y=6 />\n          </clipPath>\n          <image xlink:href="', escape((19,  assetUrl('media/applab/turtle_icons.png') )), '" height=42 width=84 x=-21 y=-18\n              clip-path="url(#slowClipPath)" />\n          <!-- Fast icon. -->\n          <clipPath id="fastClipPath">\n            <rect width=26 height=16 x=120 y=2 />\n          </clipPath>\n          <image xlink:href="', escape((25,  assetUrl('media/applab/turtle_icons.png') )), '" height=42 width=84 x=120 y=-19\n              clip-path="url(#fastClipPath)" />\n      </svg>\n    </div>\n    <img id="spinner" style="visibility: hidden;" src="', escape((29,  assetUrl('media/applab/spinner-big.gif') )), '" height=16 width=16>\n\n    <div id="debug-buttons">\n      <button id="pauseButton" class="debugger_button">\n        <img src="', escape((33,  assetUrl('media/1x1.gif') )), '" class="pause-btn icon21">\n        ', escape((34,  applabMsg.pause() )), '\n      </button>\n      <button id="continueButton" class="debugger_button">\n        <img src="', escape((37,  assetUrl('media/1x1.gif') )), '" class="continue-btn icon21">\n        ', escape((38,  applabMsg.continue() )), '\n      </button>\n      <button id="stepInButton" class="debugger_button">\n        <img src="', escape((41,  assetUrl('media/1x1.gif') )), '" class="step-in-btn icon21">\n        ', escape((42,  applabMsg.stepIn() )), '\n      </button>\n      <button id="stepOverButton" class="debugger_button">\n        <img src="', escape((45,  assetUrl('media/1x1.gif') )), '" class="step-over-btn icon21">\n        ', escape((46,  applabMsg.stepOver() )), '\n      </button>\n      <button id="stepOutButton" class="debugger_button">\n        <img src="', escape((49,  assetUrl('media/1x1.gif') )), '" class="step-out-btn icon21">\n        ', escape((50,  applabMsg.stepOut() )), '\n      </button>\n      <button id="viewDataButton" class="debugger_button">\n        ', escape((53,  applabMsg.viewData() )), '\n      </button>\n    </div>\n  </div>\n  ');57; } ; buf.push('\n\n  ');59; if (debugConsole) { ; buf.push('\n  <div id="debug-console" class="debug-console">\n    <div id="debug-output" class="debug-output"></div>\n    <span class="debug-input-prompt">\n      &gt;\n    </span>\n    <div contenteditable spellcheck="false" id="debug-input" class="debug-input"></div>\n  </div>\n  ');67; } ; buf.push('\n</div>\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());
},{"../locale":138,"./locale":49,"ejs":472}],43:[function(require,module,exports){
var Applab = require('./applab');

// APIs designed specifically to run on interpreter data structures without marshalling
// (valuable for performance or to support in/out parameters)
//
// dropletConfig for each of these APIs should be marked with dontMarshal:true

// Array functions

var getInt = function(obj, def) {
  // Return an integer, or the default.
  var n = obj ? Math.floor(obj.toNumber()) : def;
  if (isNaN(n)) {
    n = def;
  }
  return n;
};

exports.insertItem = function (array, index, item) {
  index = getInt(index, 0);
  if (index < 0) {
    index = Math.max(array.length + index, 0);
  } else {
    index = Math.min(index, array.length);
  }
  // Insert item.
  for (var i = array.length - 1; i >= index; i--) {
    array.properties[i + 1] = array.properties[i];
  }
  array.length += 1;
  array.properties[index] = item;
};

exports.removeItem = function (array, index) {
  index = getInt(index, 0);
  if (index < 0) {
    index = Math.max(array.length + index, 0);
  }
  // Remove by shifting items after index downward.
  for (var i = index; i < array.length - 1; i++) {
    array.properties[i] = array.properties[i + 1];
  }
  if (index < array.length) {
    delete array.properties[array.length - 1];
    array.length -= 1;
  }
};

exports.appendItem = function (array, item) {
  array.properties[array.length] = item;
  array.length++;
  return Applab.interpreter.createPrimitive(array.length);
};

// ImageData RGB helper functions

// TODO: more parameter validation (data array type, length), error output

exports.getRed = function (imageData, x, y) {
  if (imageData.properties.data && imageData.properties.width) {
    var pixelOffset = y * imageData.properties.width * 4 + x * 4;
    return imageData.properties.data.properties[pixelOffset].toNumber();
  }
};
exports.getGreen = function (imageData, x, y) {
  if (imageData.properties.data && imageData.properties.width) {
    var pixelOffset = y * imageData.properties.width * 4 + x * 4;
    return imageData.properties.data.properties[pixelOffset + 1].toNumber();
  }
};
exports.getBlue = function (imageData, x, y) {
  if (imageData.properties.data && imageData.properties.width) {
    var pixelOffset = y * imageData.properties.width * 4 + x * 4;
    return imageData.properties.data.properties[pixelOffset + 2].toNumber();
  }
};
exports.getAlpha = function (imageData, x, y) {
  if (imageData.properties.data && imageData.properties.width) {
    var pixelOffset = y * imageData.properties.width * 4 + x * 4;
    return imageData.properties.data.properties[pixelOffset + 3].toNumber();
  }
};

exports.setRed = function (imageData, x, y, value) {
  if (imageData.properties.data && imageData.properties.width) {
    var pixelOffset = y * imageData.properties.width * 4 + x * 4;
    imageData.properties.data.properties[pixelOffset] = value;
  }
};
exports.setGreen = function (imageData, x, y, value) {
  if (imageData.properties.data && imageData.properties.width) {
    var pixelOffset = y * imageData.properties.width * 4 + x * 4;
    imageData.properties.data.properties[pixelOffset + 1] = value;
  }
};
exports.setBlue = function (imageData, x, y, value) {
  if (imageData.properties.data && imageData.properties.width) {
    var pixelOffset = y * imageData.properties.width * 4 + x * 4;
    imageData.properties.data.properties[pixelOffset + 2] = value;
  }
};
exports.setAlpha = function (imageData, x, y, value) {
  if (imageData.properties.data && imageData.properties.width) {
    var pixelOffset = y * imageData.properties.width * 4 + x * 4;
    imageData.properties.data.properties[pixelOffset + 3] = value;
  }
};
exports.setRGB = function (imageData, x, y, r, g, b, a) {
  if (imageData.properties.data && imageData.properties.width) {
    var pixelOffset = y * imageData.properties.width * 4 + x * 4;
    imageData.properties.data.properties[pixelOffset] = r;
    imageData.properties.data.properties[pixelOffset + 1] = g;
    imageData.properties.data.properties[pixelOffset + 2] = b;
    imageData.properties.data.properties[pixelOffset + 3] =
      (typeof a === 'undefined') ? Applab.interpreter.createPrimitive(255) : a;
  }
};


},{"./applab":15}],23:[function(require,module,exports){
module.exports= (function() {
  var t = function anonymous(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('');1; var msg = require('../locale') ; buf.push('\n');2; // Comment so this file is not identical to studio/controls.html.ejs 
; buf.push('\n\n<div id="soft-buttons" class="soft-buttons-none">\n  <button id="leftButton" class="arrow">\n    <img src="', escape((6,  assetUrl('media/1x1.gif') )), '" class="left-btn icon21">\n  </button>\n  <button id="rightButton" class="arrow">\n    <img src="', escape((9,  assetUrl('media/1x1.gif') )), '" class="right-btn icon21">\n  </button>\n  <button id="upButton" class="arrow">\n    <img src="', escape((12,  assetUrl('media/1x1.gif') )), '" class="up-btn icon21">\n  </button>\n  <button id="downButton" class="arrow">\n    <img src="', escape((15,  assetUrl('media/1x1.gif') )), '" class="down-btn icon21">\n  </button>\n</div>\n\n');19; if (finishButton) { ; buf.push('\n  <div id="share-cell" class="share-cell-none">\n    <button id="finishButton" class="share">\n      <img src="', escape((22,  assetUrl('media/1x1.gif') )), '">', escape((22,  msg.finish() )), '\n    </button>\n  </div>\n');25; } ; buf.push('\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());
},{"../locale":138,"ejs":472}],20:[function(require,module,exports){
/**
 * CodeOrgApp: Applab
 *
 * Copyright 2014-2015 Code.org
 *
 */
'use strict';

var msg = require('./locale');
var commonMsg = require('../locale');
var codegen = require('../codegen');
var utils = require('../utils');
var _ = utils.getLodash();

var RANDOM_VALUE = 'random';
var HIDDEN_VALUE = '"hidden"';
var CLICK_VALUE = '"click"';
var VISIBLE_VALUE = '"visible"';

var generateSetterCode = function (opts) {
  var value = opts.ctx.getTitleValue('VALUE');
  if (value === RANDOM_VALUE) {
    var possibleValues =
      _(opts.ctx.VALUES)
        .map(function (item) { return item[1]; })
        .without(RANDOM_VALUE, HIDDEN_VALUE, CLICK_VALUE);
    value = 'Applab.randomFromArray([' + possibleValues + '])';
  }

  return 'Applab.' + opts.name + '(\'block_id_' + opts.ctx.id + '\', ' +
    (opts.extraParams ? opts.extraParams + ', ' : '') + value + ');\n';
};

// Install extensions to Blockly's language and JavaScript generator.
exports.install = function(blockly, blockInstallOptions) {
  var skin = blockInstallOptions.skin;
  var isK1 = blockInstallOptions.isK1;
  var generator = blockly.Generator.get('JavaScript');
  blockly.JavaScript = generator;

  generator.applab_eventHandlerPrologue = function() {
    return '\n';
  };

  installContainer(blockly, generator, blockInstallOptions);
};

function installContainer(blockly, generator, blockInstallOptions) {
  blockly.Blocks.applab_container = {
    helpUrl: '',
    init: function() {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput().appendTitle(msg.container());
      this.appendValueInput('ID');
      this.appendValueInput('HTML');
      this.setPreviousStatement(true);
      this.setInputsInline(true);
      this.setNextStatement(true);
      this.setTooltip(msg.containerTooltip());
    }
  };

  generator.applab_container = function() {
    var idParam = Blockly.JavaScript.valueToCode(this, 'ID',
        Blockly.JavaScript.ORDER_NONE) || '';
    var htmlParam = Blockly.JavaScript.valueToCode(this, 'HTML',
        Blockly.JavaScript.ORDER_NONE) || '';
    return 'Applab.container(\'block_id_' + this.id +
               '\', ' + idParam + ', ' + htmlParam + ');\n';
  };
}


},{"../codegen":93,"../locale":138,"../utils":301,"./locale":49}],16:[function(require,module,exports){
var studioApp = require('../StudioApp').singleton;
var applabCommands = require('./commands');

var applabTurtle = module.exports;

// These offset are used to ensure that the turtle image is centered over
// its x,y coordinates. The image is currently 48x48, rendered at 24x24.
var TURTLE_WIDTH = 24;
var TURTLE_HEIGHT = 24;
var TURTLE_ROTATION_OFFSET = -45;

applabTurtle.getTurtleContext = function () {
  var canvas = document.getElementById('turtleCanvas');

  if (!canvas) {
    // If there is not yet a turtleCanvas, create it:
    applabCommands.createCanvas({ 'elementId': 'turtleCanvas', 'turtleCanvas': true });
    canvas = document.getElementById('turtleCanvas');

    // And create the turtle (defaults to visible):
    Applab.turtle.visible = true;
    var divApplab = document.getElementById('divApplab');
    var turtleImage = document.createElement("img");
    turtleImage.src = studioApp.assetUrl('media/applab/723-location-arrow-toolbar-48px-centered.png');
    turtleImage.id = 'turtleImage';
    applabTurtle.updateTurtleImage(turtleImage);
    turtleImage.ondragstart = function () { return false; };
    divApplab.appendChild(turtleImage);
  }

  return canvas.getContext("2d");
};

applabTurtle.updateTurtleImage = function (turtleImage) {
  if (!turtleImage) {
    turtleImage = document.getElementById('turtleImage');
  }
  turtleImage.style.left = (Applab.turtle.x - TURTLE_WIDTH / 2) + 'px';
  turtleImage.style.top = (Applab.turtle.y - TURTLE_HEIGHT / 2) + 'px';
  var heading = Applab.turtle.heading + TURTLE_ROTATION_OFFSET;
  var transform = 'rotate(' + heading + 'deg)';
  turtleImage.style.transform = transform;
  turtleImage.style.msTransform = transform;
  turtleImage.style.webkitTransform = transform;
};

applabTurtle.turtleSetVisibility = function (visible) {
  // call this first to ensure there is a turtle (in case this is the first API)
  applabTurtle.getTurtleContext();
  var turtleImage = document.getElementById('turtleImage');
  turtleImage.style.visibility = visible ? 'visible' : 'hidden';
};



},{"../StudioApp":4,"./commands":22}],22:[function(require,module,exports){
var studioApp = require('../StudioApp').singleton;
var AppStorage = require('./appStorage');
var apiTimeoutList = require('../timeoutList');
var RGBColor = require('./rgbcolor.js');
var codegen = require('../codegen');
var keyEvent = require('./keyEvent');

var errorHandler = require('./errorHandler');
var outputApplabConsole = errorHandler.outputApplabConsole;
var outputError = errorHandler.outputError;
var ErrorLevel = errorHandler.ErrorLevel;
var applabTurtle = require('./applabTurtle');

var OPTIONAL = true;

var applabCommands = module.exports;

/**
 * @param value
 * @returns {boolean} true if value is a string, number, boolean, undefined or null.
 *     returns false for other values, including instances of Number or String.
 */
function isPrimitiveType(value) {
  switch (typeof value) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'undefined':
      return true;
    case 'object':
      return (value === null);
    default:
      return false;
  }
}

function apiValidateType(opts, funcName, varName, varValue, expectedType, opt) {
  var validatedTypeKey = 'validated_type_' + varName;
  if (typeof opts[validatedTypeKey] === 'undefined') {
    var properType;
    if (expectedType === 'color') {
      // Special handling for colors, must be a string and a valid RGBColor:
      properType = (typeof varValue === 'string');
      if (properType) {
        var color = new RGBColor(varValue);
        properType = color.ok;
      }
    } else if (expectedType === 'uistring') {
      properType = (typeof varValue === 'string') ||
                   (typeof varValue === 'number') ||
                   (typeof varValue === 'boolean');
    } else if (expectedType === 'function') {
      // Special handling for functions, it must be an interpreter function:
      properType = (typeof varValue === 'object') && (varValue.type === 'function');
    } else if (expectedType === 'number') {
      properType = (typeof varValue === 'number' ||
                    (typeof varValue === 'string' && !isNaN(varValue)));
    } else if (expectedType === 'primitive') {
      properType = isPrimitiveType(varValue);
      if (!properType) {
        // Ensure a descriptive error message is displayed.
        expectedType = 'string, number, boolean, undefined or null';
      }
    } else if (expectedType === 'array') {
      properType = Array.isArray(varValue);
    } else {
      properType = (typeof varValue === expectedType);
    }
    properType = properType || (opt === OPTIONAL && (typeof varValue === 'undefined'));
    if (!properType) {
      var line = 1 + codegen.getNearestUserCodeLine(Applab.interpreter,
                                                    Applab.cumulativeLength,
                                                    Applab.userCodeStartOffset,
                                                    Applab.userCodeLength);
      var errorString = funcName + "() " + varName + " parameter value (" +
        varValue + ") is not a " + expectedType + ".";
      outputError(errorString, ErrorLevel.WARNING, line);
    }
    opts[validatedTypeKey] = properType;
  }
}

function apiValidateTypeAndRange(opts, funcName, varName, varValue,
                                 expectedType, minValue, maxValue, opt) {
  var validatedTypeKey = 'validated_type_' + varName;
  var validatedRangeKey = 'validated_range_' + varName;
  apiValidateType(opts, funcName, varName, varValue, expectedType, opt);
  if (opts[validatedTypeKey] && typeof opts[validatedRangeKey] === 'undefined') {
    var inRange = (typeof minValue === 'undefined') || (varValue >= minValue);
    if (inRange) {
      inRange = (typeof maxValue === 'undefined') || (varValue <= maxValue);
    }
    inRange = inRange || (opt === OPTIONAL && (typeof varValue === 'undefined'));
    if (!inRange) {
      var line = 1 + codegen.getNearestUserCodeLine(Applab.interpreter,
                                                    Applab.cumulativeLength,
                                                    Applab.userCodeStartOffset,
                                                    Applab.userCodeLength);
      var errorString = funcName + "() " + varName + " parameter value (" +
        varValue + ") is not in the expected range.";
      outputError(errorString, ErrorLevel.WARNING, line);
    }
    opts[validatedRangeKey] = inRange;
  }
}

function apiValidateActiveCanvas(opts, funcName) {
  var validatedActiveCanvasKey = 'validated_active_canvas';
  if (!opts || typeof opts[validatedActiveCanvasKey] === 'undefined') {
    var activeCanvas = Boolean(Applab.activeCanvas);
    if (!activeCanvas) {
      var line = 1 + codegen.getNearestUserCodeLine(Applab.interpreter,
                                                    Applab.cumulativeLength,
                                                    Applab.userCodeStartOffset,
                                                    Applab.userCodeLength);
      var errorString = funcName + "() called without an active canvas. Call " +
        "createCanvas() first.";
      outputError(errorString, ErrorLevel.WARNING, line);
    }
    if (opts) {
      opts[validatedActiveCanvasKey] = activeCanvas;
    }
  }
}

function apiValidateDomIdExistence(divApplab, opts, funcName, varName, id, shouldExist) {
  var validatedTypeKey = 'validated_type_' + varName;
  var validatedDomKey = 'validated_id_' + varName;
  apiValidateType(opts, funcName, varName, id, 'string');
  if (opts[validatedTypeKey] && typeof opts[validatedDomKey] === 'undefined') {
    var element = document.getElementById(id);
    var exists = Boolean(element && divApplab.contains(element));
    var valid = exists == shouldExist;
    if (!valid) {
      var line = 1 + codegen.getNearestUserCodeLine(Applab.interpreter,
                                                    Applab.cumulativeLength,
                                                    Applab.userCodeStartOffset,
                                                    Applab.userCodeLength);
      var errorString = funcName + "() " + varName +
        " parameter refers to an id (" +id + ") which " +
        (exists ? "already exists." : "does not exist.");
      outputError(errorString, ErrorLevel.WARNING, line);
    }
    opts[validatedDomKey] = valid;
  }
}

applabCommands.container = function (opts) {
  var divApplab = document.getElementById('divApplab');

  var newDiv = document.createElement("div");
  if (typeof opts.elementId !== "undefined") {
    newDiv.id = opts.elementId;
  }
  newDiv.innerHTML = opts.html;

  return Boolean(divApplab.appendChild(newDiv));
};

applabCommands.write = function (opts) {
  apiValidateType(opts, 'write', 'text', opts.html, 'uistring');
  return applabCommands.container(opts);
};

applabCommands.button = function (opts) {
  var divApplab = document.getElementById('divApplab');

  // PARAMNAME: button: id vs. buttonId
  apiValidateDomIdExistence(divApplab, opts, 'button', 'id', opts.elementId, false);
  apiValidateType(opts, 'button', 'text', opts.text, 'uistring');

  var newButton = document.createElement("button");
  var textNode = document.createTextNode(opts.text);
  newButton.id = opts.elementId;

  return Boolean(newButton.appendChild(textNode) &&
                 divApplab.appendChild(newButton));
};

applabCommands.image = function (opts) {
  apiValidateType(opts, 'image', 'id', opts.elementId, 'string');
  apiValidateType(opts, 'image', 'url', opts.src, 'string');

  var divApplab = document.getElementById('divApplab');

  var newImage = document.createElement("img");
  newImage.src = opts.src;
  newImage.id = opts.elementId;

  return Boolean(divApplab.appendChild(newImage));
};

applabCommands.imageUploadButton = function (opts) {
  var divApplab = document.getElementById('divApplab');

  // To avoid showing the ugly fileupload input element, we create a label
  // element with an img-upload class that will ensure it looks like a button
  var newLabel = document.createElement("label");
  var textNode = document.createTextNode(opts.text);
  newLabel.id = opts.elementId;
  newLabel.className = 'img-upload';

  // We then create an offscreen input element and make it a child of the new
  // label element
  var newInput = document.createElement("input");
  newInput.type = "file";
  newInput.accept = "image/*";
  newInput.capture = "camera";
  newInput.style.position = "absolute";
  newInput.style.left = "-9999px";

  return Boolean(newLabel.appendChild(newInput) &&
                 newLabel.appendChild(textNode) &&
                 divApplab.appendChild(newLabel));
};



applabCommands.show = function (opts) {
  applabTurtle.turtleSetVisibility(true);
};

applabCommands.hide = function (opts) {
  applabTurtle.turtleSetVisibility(false);
};

applabCommands.moveTo = function (opts) {
  apiValidateType(opts, 'moveTo', 'x', opts.x, 'number');
  apiValidateType(opts, 'moveTo', 'y', opts.y, 'number');
  var ctx = applabTurtle.getTurtleContext();
  if (ctx) {
    ctx.beginPath();
    ctx.moveTo(Applab.turtle.x, Applab.turtle.y);
    Applab.turtle.x = opts.x;
    Applab.turtle.y = opts.y;
    ctx.lineTo(Applab.turtle.x, Applab.turtle.y);
    ctx.stroke();
    applabTurtle.updateTurtleImage();
  }
};

applabCommands.move = function (opts) {
  apiValidateType(opts, 'move', 'x', opts.x, 'number');
  apiValidateType(opts, 'move', 'y', opts.y, 'number');
  opts.x += Applab.turtle.x;
  opts.y += Applab.turtle.y;
  applabCommands.moveTo(opts);
};

applabCommands.moveForward = function (opts) {
  apiValidateType(opts, 'moveForward', 'pixels', opts.distance, 'number', OPTIONAL);
  var newOpts = {};
  var distance = 25;
  if (typeof opts.distance !== 'undefined') {
    distance = opts.distance;
  }
  newOpts.x = Applab.turtle.x +
    distance * Math.sin(2 * Math.PI * Applab.turtle.heading / 360);
  newOpts.y = Applab.turtle.y -
    distance * Math.cos(2 * Math.PI * Applab.turtle.heading / 360);
  applabCommands.moveTo(newOpts);
};

applabCommands.moveBackward = function (opts) {
  apiValidateType(opts, 'moveBackward', 'pixels', opts.distance, 'number', OPTIONAL);
  var distance = -25;
  if (typeof opts.distance !== 'undefined') {
    distance = -opts.distance;
  }
  applabCommands.moveForward({'distance': distance });
};

applabCommands.turnRight = function (opts) {
  apiValidateType(opts, 'turnRight', 'angle', opts.degrees, 'number', OPTIONAL);
  // call this first to ensure there is a turtle (in case this is the first API)
  applabTurtle.getTurtleContext();

  var degrees = 90;
  if (typeof opts.degrees !== 'undefined') {
    degrees = opts.degrees;
  }

  Applab.turtle.heading += degrees;
  Applab.turtle.heading = (Applab.turtle.heading + 360) % 360;
  applabTurtle.updateTurtleImage();
};

applabCommands.turnLeft = function (opts) {
  apiValidateType(opts, 'turnLeft', 'angle', opts.degrees, 'number', OPTIONAL);
  var degrees = -90;
  if (typeof opts.degrees !== 'undefined') {
    degrees = -opts.degrees;
  }
  Applab.turnRight({'degrees': degrees });
};

applabCommands.turnTo = function (opts) {
  apiValidateType(opts, 'turnTo', 'angle', opts.direction, 'number');
  var degrees = opts.direction - Applab.turtle.heading;
  Applab.turnRight({'degrees': degrees });
};

// Turn along an arc with a specified radius (by default, turn clockwise, so
// the center of the arc is 90 degrees clockwise of the current heading)
// if opts.counterclockwise, the center point is 90 degrees counterclockwise

applabCommands.arcRight = function (opts) {
  apiValidateType(opts, 'arcRight', 'angle', opts.degrees, 'number');
  apiValidateType(opts, 'arcRight', 'radius', opts.radius, 'number');

  // call this first to ensure there is a turtle (in case this is the first API)
  var centerAngle = opts.counterclockwise ? -90 : 90;
  var clockwiseDegrees = opts.counterclockwise ? -opts.degrees : opts.degrees;
  var ctx = applabTurtle.getTurtleContext();
  if (ctx) {
    var centerX = Applab.turtle.x +
      opts.radius * Math.sin(2 * Math.PI * (Applab.turtle.heading + centerAngle) / 360);
    var centerY = Applab.turtle.y -
      opts.radius * Math.cos(2 * Math.PI * (Applab.turtle.heading + centerAngle) / 360);

    var startAngle =
      2 * Math.PI * (Applab.turtle.heading + (opts.counterclockwise ? 0 : 180)) / 360;
    var endAngle = startAngle + (2 * Math.PI * clockwiseDegrees / 360);

    ctx.beginPath();
    ctx.arc(centerX, centerY, opts.radius, startAngle, endAngle, opts.counterclockwise);
    ctx.stroke();

    Applab.turtle.heading = (Applab.turtle.heading + clockwiseDegrees + 360) % 360;
    var xMovement = opts.radius * Math.cos(2 * Math.PI * Applab.turtle.heading / 360);
    var yMovement = opts.radius * Math.sin(2 * Math.PI * Applab.turtle.heading / 360);
    Applab.turtle.x = centerX + (opts.counterclockwise ? xMovement : -xMovement);
    Applab.turtle.y = centerY + (opts.counterclockwise ? yMovement : -yMovement);
    applabTurtle.updateTurtleImage();
  }
};

applabCommands.arcLeft = function (opts) {
  apiValidateType(opts, 'arcLeft', 'angle', opts.degrees, 'number');
  apiValidateType(opts, 'arcLeft', 'radius', opts.radius, 'number');

  opts.counterclockwise = true;
  applabCommands.arcRight(opts);
};

applabCommands.getX = function (opts) {
  var ctx = applabTurtle.getTurtleContext();
  return Applab.turtle.x;
};

applabCommands.getY = function (opts) {
  var ctx = applabTurtle.getTurtleContext();
  return Applab.turtle.y;
};

applabCommands.getDirection = function (opts) {
  var ctx = applabTurtle.getTurtleContext();
  return Applab.turtle.heading;
};

applabCommands.dot = function (opts) {
  apiValidateTypeAndRange(opts, 'dot', 'radius', opts.radius, 'number', 0.0001);
  var ctx = applabTurtle.getTurtleContext();
  if (ctx && opts.radius > 0) {
    ctx.beginPath();
    if (Applab.turtle.penUpColor) {
      // If the pen is up and the color has been changed, use that color:
      ctx.strokeStyle = Applab.turtle.penUpColor;
    }
    var savedLineWidth = ctx.lineWidth;
    ctx.lineWidth = 1;
    ctx.arc(Applab.turtle.x, Applab.turtle.y, opts.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    if (Applab.turtle.penUpColor) {
      // If the pen is up, reset strokeStyle back to transparent:
      ctx.strokeStyle = "rgba(255, 255, 255, 0)";
    }
    ctx.lineWidth = savedLineWidth;
    return true;
  }

};

applabCommands.penUp = function (opts) {
  var ctx = applabTurtle.getTurtleContext();
  if (ctx) {
    if (ctx.strokeStyle !== "rgba(255, 255, 255, 0)") {
      Applab.turtle.penUpColor = ctx.strokeStyle;
      ctx.strokeStyle = "rgba(255, 255, 255, 0)";
    }
  }
};

applabCommands.penDown = function (opts) {
  var ctx = applabTurtle.getTurtleContext();
  if (ctx && Applab.turtle.penUpColor) {
    ctx.strokeStyle = Applab.turtle.penUpColor;
    delete Applab.turtle.penUpColor;
  }
};

applabCommands.penWidth = function (opts) {
  apiValidateTypeAndRange(opts, 'penWidth', 'width', opts.width, 'number', 0.0001);
  var ctx = applabTurtle.getTurtleContext();
  if (ctx) {
    ctx.lineWidth = opts.width;
  }
};

applabCommands.penColorInternal = function (rgbstring) {
  var ctx = applabTurtle.getTurtleContext();
  if (ctx) {
    if (Applab.turtle.penUpColor) {
      // pen is currently up, store this color for pen down
      Applab.turtle.penUpColor = rgbstring;
    } else {
      ctx.strokeStyle = rgbstring;
    }
    ctx.fillStyle = rgbstring;
  }
};

applabCommands.penColor = function (opts) {
  apiValidateType(opts, 'penColor', 'color', opts.color, 'color');
  applabCommands.penColorInternal(opts.color);
};

applabCommands.penRGB = function (opts) {
  // PARAMNAME: penRGB: red vs. r
  // PARAMNAME: penRGB: green vs. g
  // PARAMNAME: penRGB: blue vs. b
  apiValidateTypeAndRange(opts, 'penRGB', 'r', opts.r, 'number', 0, 255);
  apiValidateTypeAndRange(opts, 'penRGB', 'g', opts.g, 'number', 0, 255);
  apiValidateTypeAndRange(opts, 'penRGB', 'b', opts.b, 'number', 0, 255);
  apiValidateTypeAndRange(opts, 'penRGB', 'a', opts.a, 'number', 0, 1, OPTIONAL);
  var alpha = (typeof opts.a === 'undefined') ? 1 : opts.a;
  var rgbstring = "rgba(" + opts.r + "," + opts.g + "," + opts.b + "," + alpha + ")";
  applabCommands.penColorInternal(rgbstring);
};

applabCommands.speed = function (opts) {
  // DOCBUG: range is 0-100, not 1-100
  apiValidateTypeAndRange(opts, 'speed', 'value', opts.percent, 'number', 0, 100);
  if (opts.percent >= 0 && opts.percent <= 100) {
    var sliderSpeed = opts.percent / 100;
    if (Applab.speedSlider) {
      Applab.speedSlider.setValue(sliderSpeed);
    }
    Applab.scale.stepSpeed = Applab.stepSpeedFromSliderSpeed(sliderSpeed);
  }
};

applabCommands.createCanvas = function (opts) {
  var divApplab = document.getElementById('divApplab');
  // PARAMNAME: createCanvas: id vs. canvasId
  apiValidateDomIdExistence(divApplab, opts, 'createCanvas', 'canvasId', opts.elementId, false);
  apiValidateType(opts, 'createCanvas', 'width', width, 'number', OPTIONAL);
  apiValidateType(opts, 'createCanvas', 'height', height, 'number', OPTIONAL);

  var newElement = document.createElement("canvas");
  var ctx = newElement.getContext("2d");
  if (newElement && ctx) {
    newElement.id = opts.elementId;
    // default width/height if params are missing
    var width = opts.width || Applab.appWidth;
    var height = opts.height || Applab.appHeight;
    newElement.width = width;
    newElement.height = height;
    newElement.style.width = width + 'px';
    newElement.style.height = height + 'px';
    if (!opts.turtleCanvas) {
      // set transparent fill by default (unless it is the turtle canvas):
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
    }
    ctx.lineCap = "round";

    if (!Applab.activeCanvas && !opts.turtleCanvas) {
      // If there is no active canvas and this isn't the turtleCanvas,
      // we'll make this the active canvas for subsequent API calls:
      Applab.activeCanvas = newElement;
    }

    return Boolean(divApplab.appendChild(newElement));
  }
  return false;
};

applabCommands.setActiveCanvas = function (opts) {
  var divApplab = document.getElementById('divApplab');
  // PARAMNAME: setActiveCanvas: id vs. canvasId
  apiValidateDomIdExistence(divApplab, opts, 'setActiveCanvas', 'canvasId', opts.elementId, true);
  var canvas = document.getElementById(opts.elementId);
  if (divApplab.contains(canvas)) {
    Applab.activeCanvas = canvas;
    return true;
  }
  return false;
};

applabCommands.line = function (opts) {
  apiValidateActiveCanvas(opts, 'line');
  apiValidateType(opts, 'line', 'x1', opts.x1, 'number');
  apiValidateType(opts, 'line', 'x2', opts.x2, 'number');
  apiValidateType(opts, 'line', 'y1', opts.y1, 'number');
  apiValidateType(opts, 'line', 'y2', opts.y2, 'number');
  var ctx = Applab.activeCanvas && Applab.activeCanvas.getContext("2d");
  if (ctx) {
    ctx.beginPath();
    ctx.moveTo(opts.x1, opts.y1);
    ctx.lineTo(opts.x2, opts.y2);
    ctx.stroke();
    return true;
  }
  return false;
};

applabCommands.circle = function (opts) {
  apiValidateActiveCanvas(opts, 'circle');
  // PARAMNAME: circle: centerX vs. x
  // PARAMNAME: circle: centerY vs. y
  apiValidateType(opts, 'circle', 'centerX', opts.x, 'number');
  apiValidateType(opts, 'circle', 'centerY', opts.y, 'number');
  apiValidateType(opts, 'circle', 'radius', opts.radius, 'number');
  var ctx = Applab.activeCanvas && Applab.activeCanvas.getContext("2d");
  if (ctx) {
    ctx.beginPath();
    ctx.arc(opts.x, opts.y, opts.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    return true;
  }
  return false;
};

applabCommands.rect = function (opts) {
  apiValidateActiveCanvas(opts, 'rect');
  // PARAMNAME: rect: upperLeftX vs. x
  // PARAMNAME: rect: upperLeftY vs. y
  apiValidateType(opts, 'rect', 'upperLeftX', opts.x, 'number');
  apiValidateType(opts, 'rect', 'upperLeftY', opts.y, 'number');
  apiValidateType(opts, 'rect', 'width', opts.width, 'number');
  apiValidateType(opts, 'rect', 'height', opts.height, 'number');
  var ctx = Applab.activeCanvas && Applab.activeCanvas.getContext("2d");
  if (ctx) {
    ctx.beginPath();
    ctx.rect(opts.x, opts.y, opts.width, opts.height);
    ctx.fill();
    ctx.stroke();
    return true;
  }
  return false;
};

applabCommands.setStrokeWidth = function (opts) {
  apiValidateActiveCanvas(opts, 'setStrokeWidth');
  apiValidateTypeAndRange(opts, 'setStrokeWidth', 'width', opts.width, 'number', 0.0001);
  var ctx = Applab.activeCanvas && Applab.activeCanvas.getContext("2d");
  if (ctx) {
    ctx.lineWidth = opts.width;
    return true;
  }
  return false;
};

applabCommands.setStrokeColor = function (opts) {
  apiValidateActiveCanvas(opts, 'setStrokeColor');
  apiValidateType(opts, 'setStrokeColor', 'color', opts.color, 'color');
  var ctx = Applab.activeCanvas && Applab.activeCanvas.getContext("2d");
  if (ctx) {
    ctx.strokeStyle = String(opts.color);
    return true;
  }
  return false;
};

applabCommands.setFillColor = function (opts) {
  apiValidateActiveCanvas(opts, 'setFillColor');
  apiValidateType(opts, 'setFillColor', 'color', opts.color, 'color');
  var ctx = Applab.activeCanvas && Applab.activeCanvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = String(opts.color);
    return true;
  }
  return false;
};

applabCommands.clearCanvas = function (opts) {
  apiValidateActiveCanvas(opts, 'clearCanvas');
  var ctx = Applab.activeCanvas && Applab.activeCanvas.getContext("2d");
  if (ctx) {
    ctx.clearRect(0,
                  0,
                  Applab.activeCanvas.width,
                  Applab.activeCanvas.height);
    return true;
  }
  return false;
};

applabCommands.drawImage = function (opts) {
  var divApplab = document.getElementById('divApplab');
  // PARAMNAME: drawImage: imageId vs. id
  apiValidateActiveCanvas(opts, 'drawImage');
  apiValidateDomIdExistence(divApplab, opts, 'drawImage', 'id', opts.imageId, true);
  apiValidateType(opts, 'drawImage', 'x', opts.x, 'number');
  apiValidateType(opts, 'drawImage', 'y', opts.y, 'number');
  var image = document.getElementById(opts.imageId);
  var ctx = Applab.activeCanvas && Applab.activeCanvas.getContext("2d");
  if (ctx && divApplab.contains(image)) {
    var xScale, yScale;
    xScale = yScale = 1;
    if (typeof opts.width !== 'undefined') {
      apiValidateType(opts, 'drawImage', 'width', opts.width, 'number');
      xScale = xScale * (opts.width / image.width);
    }
    if (typeof opts.height !== 'undefined') {
      apiValidateType(opts, 'drawImage', 'height', opts.height, 'number');
      yScale = yScale * (opts.height / image.height);
    }
    ctx.save();
    ctx.setTransform(xScale, 0, 0, yScale, opts.x, opts.y);
    ctx.drawImage(image, 0, 0);
    ctx.restore();
    return true;
  }
  return false;
};

applabCommands.getImageData = function (opts) {
  apiValidateActiveCanvas(opts, 'getImageData');
  // PARAMNAME: getImageData: all params + doc bugs
  apiValidateType(opts, 'getImageData', 'x', opts.x, 'number');
  apiValidateType(opts, 'getImageData', 'y', opts.y, 'number');
  apiValidateType(opts, 'getImageData', 'width', opts.width, 'number');
  apiValidateType(opts, 'getImageData', 'height', opts.height, 'number');
  var ctx = Applab.activeCanvas && Applab.activeCanvas.getContext("2d");
  if (ctx) {
    return ctx.getImageData(opts.x, opts.y, opts.width, opts.height);
  }
};

applabCommands.putImageData = function (opts) {
  apiValidateActiveCanvas(opts, 'putImageData');
  // PARAMNAME: putImageData: imageData vs. imgData
  // PARAMNAME: putImageData: startX vs. x
  // PARAMNAME: putImageData: startY vs. y
  apiValidateType(opts, 'putImageData', 'imgData', opts.imageData, 'object');
  apiValidateType(opts, 'putImageData', 'x', opts.x, 'number');
  apiValidateType(opts, 'putImageData', 'y', opts.y, 'number');
  var ctx = Applab.activeCanvas && Applab.activeCanvas.getContext("2d");
  if (ctx) {
    // Create tmpImageData and initialize it because opts.imageData is not
    // going to be a real ImageData object if it came from the interpreter
    var tmpImageData = ctx.createImageData(opts.imageData.width,
                                           opts.imageData.height);
    tmpImageData.data.set(opts.imageData.data);
    return ctx.putImageData(tmpImageData, opts.x, opts.y);
  }
};

applabCommands.textInput = function (opts) {
  var divApplab = document.getElementById('divApplab');
  // PARAMNAME: textInput: id vs. inputId
  apiValidateDomIdExistence(divApplab, opts, 'textInput', 'id', opts.elementId, false);
  apiValidateType(opts, 'textInput', 'text', opts.text, 'uistring');

  var newInput = document.createElement("input");
  newInput.value = opts.text;
  newInput.id = opts.elementId;

  return Boolean(divApplab.appendChild(newInput));
};

applabCommands.textLabel = function (opts) {
  var divApplab = document.getElementById('divApplab');
  // PARAMNAME: textLabel: id vs. labelId
  apiValidateDomIdExistence(divApplab, opts, 'textLabel', 'id', opts.elementId, false);
  apiValidateType(opts, 'textLabel', 'text', opts.text, 'uistring');
  if (typeof opts.forId !== 'undefined') {
    apiValidateDomIdExistence(divApplab, opts, 'textLabel', 'forId', opts.forId, true);
  }

  var newLabel = document.createElement("label");
  var textNode = document.createTextNode(opts.text);
  newLabel.id = opts.elementId;
  var forElement = document.getElementById(opts.forId);
  if (forElement && divApplab.contains(forElement)) {
    newLabel.setAttribute('for', opts.forId);
  }

  return Boolean(newLabel.appendChild(textNode) &&
                 divApplab.appendChild(newLabel));
};

applabCommands.checkbox = function (opts) {
  var divApplab = document.getElementById('divApplab');
  // PARAMNAME: checkbox: id vs. checkboxId
  apiValidateDomIdExistence(divApplab, opts, 'checkbox', 'id', opts.elementId, false);
  // apiValidateType(opts, 'checkbox', 'checked', opts.checked, 'boolean');

  var newCheckbox = document.createElement("input");
  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.checked = opts.checked;
  newCheckbox.id = opts.elementId;

  return Boolean(divApplab.appendChild(newCheckbox));
};

applabCommands.radioButton = function (opts) {
  var divApplab = document.getElementById('divApplab');
  apiValidateDomIdExistence(divApplab, opts, 'radioButton', 'id', opts.elementId, false);
  // apiValidateType(opts, 'radioButton', 'checked', opts.checked, 'boolean');
  apiValidateType(opts, 'radioButton', 'group', opts.name, 'string', OPTIONAL);

  var newRadio = document.createElement("input");
  newRadio.setAttribute("type", "radio");
  newRadio.name = opts.name;
  newRadio.checked = opts.checked;
  newRadio.id = opts.elementId;

  return Boolean(divApplab.appendChild(newRadio));
};

applabCommands.dropdown = function (opts) {
  var divApplab = document.getElementById('divApplab');
  // PARAMNAME: dropdown: id vs. dropdownId
  apiValidateDomIdExistence(divApplab, opts, 'dropdown', 'id', opts.elementId, false);

  var newSelect = document.createElement("select");

  if (opts.optionsArray) {
    for (var i = 0; i < opts.optionsArray.length; i++) {
      var option = document.createElement("option");
      apiValidateType(opts, 'dropdown', 'option_' + (i + 1), opts.optionsArray[i], 'uistring');
      option.text = opts.optionsArray[i];
      newSelect.add(option);
    }
  }
  newSelect.id = opts.elementId;

  return Boolean(divApplab.appendChild(newSelect));
};

applabCommands.getAttribute = function (opts) {
  var divApplab = document.getElementById('divApplab');
  var element = document.getElementById(opts.elementId);
  var attribute = String(opts.attribute);
  return divApplab.contains(element) ? element[attribute] : false;
};

// Whitelist of HTML Element attributes which can be modified, to
// prevent DOM manipulation which would violate the sandbox.
var MUTABLE_ATTRIBUTES = ['innerHTML', 'scrollTop'];

applabCommands.setAttribute = function (opts) {
  var divApplab = document.getElementById('divApplab');
  var element = document.getElementById(opts.elementId);
  var attribute = String(opts.attribute);
  if (divApplab.contains(element) &&
      MUTABLE_ATTRIBUTES.indexOf(attribute) !== -1) {
    element[attribute] = opts.value;
    return true;
  }
  return false;
};

applabCommands.getText = function (opts) {
  var divApplab = document.getElementById('divApplab');
  apiValidateDomIdExistence(divApplab, opts, 'getText', 'id', opts.elementId, true);

  var element = document.getElementById(opts.elementId);
  if (divApplab.contains(element)) {
    if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
      return String(element.value);
    } else if (element.tagName === 'IMG') {
      return String(element.alt);
    } else {
      return element.innerText;
    }
  }
  return false;
};

applabCommands.setText = function (opts) {
  var divApplab = document.getElementById('divApplab');
  apiValidateDomIdExistence(divApplab, opts, 'setText', 'id', opts.elementId, true);
  apiValidateType(opts, 'setText', 'text', opts.text, 'uistring');

  var element = document.getElementById(opts.elementId);
  if (divApplab.contains(element)) {
    if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
      element.value = opts.text;
    } else if (element.tagName === 'IMG') {
      element.alt = opts.text;
    } else {
      element.innerText = opts.text;
    }
    return true;
  }
  return false;
};

applabCommands.getChecked = function (opts) {
  var divApplab = document.getElementById('divApplab');
  apiValidateDomIdExistence(divApplab, opts, 'getChecked', 'id', opts.elementId, true);

  var element = document.getElementById(opts.elementId);
  if (divApplab.contains(element) && element.tagName === 'INPUT') {
    return element.checked;
  }
  return false;
};

applabCommands.setChecked = function (opts) {
  var divApplab = document.getElementById('divApplab');
  apiValidateDomIdExistence(divApplab, opts, 'setChecked', 'id', opts.elementId, true);
  // apiValidateType(opts, 'setChecked', 'checked', opts.checked, 'boolean');

  var element = document.getElementById(opts.elementId);
  if (divApplab.contains(element) && element.tagName === 'INPUT') {
    element.checked = opts.checked;
    return true;
  }
  return false;
};

applabCommands.getImageURL = function (opts) {
  var divApplab = document.getElementById('divApplab');
  // PARAMNAME: getImageURL: id vs. imageId
  apiValidateDomIdExistence(divApplab, opts, 'getImageURL', 'id', opts.elementId, true);

  var element = document.getElementById(opts.elementId);
  if (divApplab.contains(element)) {
    // We return a URL if it is an IMG element or our special img-upload label
    if (element.tagName === 'IMG') {
      return element.src;
    } else if (element.tagName === 'LABEL' && element.className === 'img-upload') {
      var fileObj = element.children[0].files[0];
      if (fileObj) {
        return window.URL.createObjectURL(fileObj);
      }
    }
  }
};

applabCommands.setImageURL = function (opts) {
  var divApplab = document.getElementById('divApplab');
  apiValidateDomIdExistence(divApplab, opts, 'setImageURL', 'id', opts.elementId, true);
  apiValidateType(opts, 'setImageURL', 'url', opts.src, 'string');

  var element = document.getElementById(opts.elementId);
  if (divApplab.contains(element) && element.tagName === 'IMG') {
    element.src = opts.src;
    return true;
  }
  return false;
};

applabCommands.playSound = function (opts) {
  apiValidateType(opts, 'playSound', 'url', opts.url, 'string');

  if (studioApp.cdoSounds) {
    studioApp.cdoSounds.playURL(opts.url,
                               {volume: 1.0,
                                forceHTML5: true,
                                allowHTML5Mobile: true
    });
  }
};

applabCommands.innerHTML = function (opts) {
  var divApplab = document.getElementById('divApplab');
  var div = document.getElementById(opts.elementId);
  if (divApplab.contains(div)) {
    div.innerHTML = opts.html;
    return true;
  }
  return false;
};

applabCommands.deleteElement = function (opts) {
  var divApplab = document.getElementById('divApplab');
  apiValidateDomIdExistence(divApplab, opts, 'deleteElement', 'id', opts.elementId, true);

  var div = document.getElementById(opts.elementId);
  if (divApplab.contains(div)) {
    // Special check to see if the active canvas is being deleted
    if (div == Applab.activeCanvas || div.contains(Applab.activeCanvas)) {
      delete Applab.activeCanvas;
    }
    return Boolean(div.parentElement.removeChild(div));
  }
  return false;
};

applabCommands.showElement = function (opts) {
  var divApplab = document.getElementById('divApplab');
  apiValidateDomIdExistence(divApplab, opts, 'showElement', 'id', opts.elementId, true);

  var div = document.getElementById(opts.elementId);
  if (divApplab.contains(div)) {
    div.style.visibility = 'visible';
    return true;
  }
  return false;
};

applabCommands.hideElement = function (opts) {
  var divApplab = document.getElementById('divApplab');
  apiValidateDomIdExistence(divApplab, opts, 'hideElement', 'id', opts.elementId, true);

  var div = document.getElementById(opts.elementId);
  if (divApplab.contains(div)) {
    div.style.visibility = 'hidden';
    return true;
  }
  return false;
};

applabCommands.setStyle = function (opts) {
  var divApplab = document.getElementById('divApplab');
  var div = document.getElementById(opts.elementId);
  if (divApplab.contains(div)) {
    div.style.cssText += opts.style;
    return true;
  }
  return false;
};

applabCommands.setParent = function (opts) {
  var divApplab = document.getElementById('divApplab');
  var div = document.getElementById(opts.elementId);
  var divNewParent = document.getElementById(opts.parentId);
  if (divApplab.contains(div) && divApplab.contains(divNewParent)) {
    return Boolean(div.parentElement.removeChild(div) &&
                   divNewParent.appendChild(div));
  }
  return false;
};

applabCommands.setPosition = function (opts) {
  var divApplab = document.getElementById('divApplab');
  apiValidateDomIdExistence(divApplab, opts, 'setPosition', 'id', opts.elementId, true);
  apiValidateType(opts, 'setPosition', 'x', opts.left, 'number');
  apiValidateType(opts, 'setPosition', 'y', opts.top, 'number');

  var el = document.getElementById(opts.elementId);
  if (divApplab.contains(el)) {
    el.style.position = 'absolute';
    el.style.left = opts.left + 'px';
    el.style.top = opts.top + 'px';
    var setWidthHeight = false;
    // don't set width/height if
    // (1) both parameters are undefined AND
    // (2) width/height already specified OR IMG element with width/height attributes
    if ((el.style.width.length > 0 && el.style.height.length > 0) ||
        (el.tagName === 'IMG' && el.width > 0 && el.height > 0)) {
        if (typeof opts.width !== 'undefined' || typeof opts.height !== 'undefined') {
            setWidthHeight = true;
        }
    } else {
        setWidthHeight = true;
    }
    if (setWidthHeight) {
        apiValidateType(opts, 'setPosition', 'width', opts.width, 'number');
        apiValidateType(opts, 'setPosition', 'height', opts.height, 'number');
        el.style.width = opts.width + 'px';
        el.style.height = opts.height + 'px';
    }
    return true;
  }
  return false;
};

applabCommands.getXPosition = function (opts) {
  var divApplab = document.getElementById('divApplab');
  apiValidateDomIdExistence(divApplab, opts, 'getXPosition', 'id', opts.elementId, true);

  var div = document.getElementById(opts.elementId);
  if (divApplab.contains(div)) {
    var x = div.offsetLeft;
    while (div !== divApplab) {
      div = div.offsetParent;
      x += div.offsetLeft;
    }
    return x;
  }
  return 0;
};

applabCommands.getYPosition = function (opts) {
  var divApplab = document.getElementById('divApplab');
  apiValidateDomIdExistence(divApplab, opts, 'getYPosition', 'id', opts.elementId, true);

  var div = document.getElementById(opts.elementId);
  if (divApplab.contains(div)) {
    var y = div.offsetTop;
    while (div !== divApplab) {
      div = div.offsetParent;
      y += div.offsetTop;
    }
    return y;
  }
  return 0;
};

applabCommands.onEventFired = function (opts, e) {
  if (typeof e != 'undefined') {
    var div = document.getElementById('divApplab');
    var xScale = div.getBoundingClientRect().width / div.offsetWidth;
    var yScale = div.getBoundingClientRect().height / div.offsetHeight;
    var xOffset = 0;
    var yOffset = 0;
    while (div) {
      xOffset += div.offsetLeft;
      yOffset += div.offsetTop;
      div = div.offsetParent;
    }

    var applabEvent = {};
    // Pass these properties through to applabEvent:
    ['altKey', 'button', 'charCode', 'ctrlKey', 'keyCode', 'keyIdentifier',
      'keyLocation', 'location', 'metaKey', 'movementX', 'movementY', 'offsetX',
      'offsetY', 'repeat', 'shiftKey', 'type', 'which'].forEach(
      function (prop) {
        if (typeof e[prop] !== 'undefined') {
          applabEvent[prop] = e[prop];
        }
      });
    // Convert x coordinates and then pass through to applabEvent:
    ['clientX', 'pageX', 'x'].forEach(
      function (prop) {
        if (typeof e[prop] !== 'undefined') {
          applabEvent[prop] = (e[prop] - xOffset) / xScale;
        }
      });
    // Convert y coordinates and then pass through to applabEvent:
    ['clientY', 'pageY', 'y'].forEach(
      function (prop) {
        if (typeof e[prop] !== 'undefined') {
          applabEvent[prop] = (e[prop] - yOffset) / yScale;
        }
      });
    // Replace DOM elements with IDs and then add them to applabEvent:
    ['fromElement', 'srcElement', 'currentTarget', 'relatedTarget', 'target',
      'toElement'].forEach(
      function (prop) {
        if (e[prop]) {
          applabEvent[prop + "Id"] = e[prop].id;
        }
      });
    // Attempt to populate key property (not yet supported in Chrome/Safari):
    //
    // keyup/down has no charCode and can be translated with the keyEvent[] map
    // keypress can use charCode
    //
    var keyProp = e.charCode ? String.fromCharCode(e.charCode) : keyEvent[e.keyCode];
    if (typeof keyProp !== 'undefined') {
      applabEvent.key = keyProp;
    }

    // Push a function call on the queue with an array of arguments consisting
    // of the applabEvent parameter (and any extraArgs originally supplied)
    Applab.eventQueue.push({
      'fn': opts.func,
      'arguments': [applabEvent].concat(opts.extraArgs)
    });
  } else {
    Applab.eventQueue.push({'fn': opts.func});
  }
  if (Applab.interpreter) {
    // Execute the interpreter and if a return value is sent back from the
    // interpreter's event handler, pass that back in the native world

    // NOTE: the interpreter will not execute forever, if the event handler
    // takes too long, executeInterpreter() will return and the native side
    // will just see 'undefined' as the return value. The rest of the interpreter
    // event handler will run in the next onTick(), but the return value will
    // no longer have any effect.
    Applab.executeInterpreter(true);
    return Applab.lastCallbackRetVal;
  }
};

applabCommands.onEvent = function (opts) {
  var divApplab = document.getElementById('divApplab');
  // Special case the id of 'body' to mean the app's container (divApplab)
  // TODO (cpirich): apply this logic more broadly (setStyle, etc.)
  if (opts.elementId === 'body') {
    opts.elementId = 'divApplab';
  } else {
    apiValidateDomIdExistence(divApplab, opts, 'onEvent', 'id', opts.elementId, true);
  }
  apiValidateType(opts, 'onEvent', 'type', opts.eventName, 'string');
  // PARAMNAME: onEvent: callback vs. callbackFunction
  apiValidateType(opts, 'onEvent', 'callback', opts.func, 'function');
  var domElement = document.getElementById(opts.elementId);
  if (divApplab.contains(domElement)) {
    switch (opts.eventName) {
      /*
      Check for a specific set of Hammer v1 event names (full set below) and if
      we find a match, instantiate Hammer on that element

      TODO (cpirich): review the following:
      * whether using Hammer v1 events is the right choice
      * choose the specific list of events
      * consider instantiating Hammer just once per-element or on divApplab
      * review use of preventDefault

      case 'hold':
      case 'tap':
      case 'doubletap':
      case 'swipe':
      case 'swipeup':
      case 'swipedown':
      case 'swipeleft':
      case 'swiperight':
      case 'rotate':
      case 'release':
      case 'gesture':
      case 'pinch':
      case 'pinchin':
      case 'pinchout':
        var hammerElement = new Hammer(divApplab, { 'preventDefault': true });
        hammerElement.on(opts.eventName,
                         applabCommands.onEventFired.bind(this, opts));
        break;
      */
      case 'click':
      case 'change':
      case 'keyup':
      case 'mousemove':
      case 'dblclick':
      case 'mousedown':
      case 'mouseup':
      case 'mouseover':
      case 'mouseout':
      case 'keydown':
      case 'keypress':
      case 'input':
        // For now, we're not tracking how many of these we add and we don't allow
        // the user to detach the handler. We detach all listeners by cloning the
        // divApplab DOM node inside of reset()
        domElement.addEventListener(
            opts.eventName,
            applabCommands.onEventFired.bind(this, opts));
        break;
      default:
        return false;
    }
    return true;
  }
  return false;
};

applabCommands.onHttpRequestEvent = function (opts) {
  // Ensure that this event was requested by the same instance of the interpreter
  // that is currently active before proceeding...
  if (opts.interpreter === Applab.interpreter) {
    if (this.readyState === 4) {
      Applab.eventQueue.push({
        'fn': opts.func,
        'arguments': [
          Number(this.status),
          String(this.getResponseHeader('content-type')),
          String(this.responseText)]
      });
    }
  }
};

applabCommands.startWebRequest = function (opts) {
  apiValidateType(opts, 'startWebRequest', 'url', opts.url, 'string');
  apiValidateType(opts, 'startWebRequest', 'callback', opts.func, 'function');
  opts.interpreter = Applab.interpreter;
  var req = new XMLHttpRequest();
  req.onreadystatechange = applabCommands.onHttpRequestEvent.bind(req, opts);
  req.open('GET', opts.url, true);
  req.send();
};

applabCommands.onTimerFired = function (opts) {
  // ensure that this event came from the active interpreter instance:
  Applab.eventQueue.push({
    'fn': opts.func
  });
  // NOTE: the interpreter will not execute forever, if the event handler
  // takes too long, executeInterpreter() will return and the rest of the
  // user's code will execute in the next onTick()
  Applab.executeInterpreter(true);
};

applabCommands.setTimeout = function (opts) {
  // PARAMNAME: setTimeout: callback vs. function
  // PARAMNAME: setTimeout: ms vs. milliseconds
  apiValidateType(opts, 'setTimeout', 'callback', opts.func, 'function');
  apiValidateType(opts, 'setTimeout', 'milliseconds', opts.milliseconds, 'number');

  return apiTimeoutList.setTimeout(applabCommands.onTimerFired.bind(this, opts), opts.milliseconds);
};

applabCommands.clearTimeout = function (opts) {
  apiValidateType(opts, 'clearTimeout', 'timeout', opts.timeoutId, 'number');
  // NOTE: we do not currently check to see if this is a timer created by
  // our applabCommands.setTimeout() function
  apiTimeoutList.clearTimeout(opts.timeoutId);
};

applabCommands.setInterval = function (opts) {
  // PARAMNAME: setInterval: callback vs. function
  // PARAMNAME: setInterval: ms vs. milliseconds
  apiValidateType(opts, 'setInterval', 'callback', opts.func, 'function');
  apiValidateType(opts, 'setInterval', 'milliseconds', opts.milliseconds, 'number');

  return apiTimeoutList.setInterval(applabCommands.onTimerFired.bind(this, opts), opts.milliseconds);
};

applabCommands.clearInterval = function (opts) {
  apiValidateType(opts, 'clearInterval', 'interval', opts.intervalId, 'number');
  // NOTE: we do not currently check to see if this is a timer created by
  // our applabCommands.setInterval() function
  apiTimeoutList.clearInterval(opts.intervalId);
};

applabCommands.createRecord = function (opts) {
  // PARAMNAME: createRecord: table vs. tableName
  // PARAMNAME: createRecord: callback vs. callbackFunction
  apiValidateType(opts, 'createRecord', 'table', opts.table, 'string');
  apiValidateType(opts, 'createRecord', 'record', opts.record, 'object');
  apiValidateType(opts, 'createRecord', 'record.id', opts.record.id, 'undefined');
  apiValidateType(opts, 'createRecord', 'callback', opts.onSuccess, 'function', OPTIONAL);
  apiValidateType(opts, 'createRecord', 'onError', opts.onError, 'function', OPTIONAL);
  opts.interpreter = Applab.interpreter;
  var onSuccess = applabCommands.handleCreateRecord.bind(this, opts);
  var onError = errorHandler.handleError.bind(this, opts);
  AppStorage.createRecord(opts.table, opts.record, onSuccess, onError);
};

applabCommands.handleCreateRecord = function(opts, record) {
  // Ensure that this event was requested by the same instance of the interpreter
  // that is currently active before proceeding...
  if (opts.onSuccess && opts.interpreter === Applab.interpreter) {
    Applab.eventQueue.push({
      'fn': opts.onSuccess,
      'arguments': [record]
    });
  }
};

applabCommands.getKeyValue = function(opts) {
  // PARAMNAME: getKeyValue: callback vs. callbackFunction
  apiValidateType(opts, 'getKeyValue', 'key', opts.key, 'string');
  apiValidateType(opts, 'getKeyValue', 'callback', opts.onSuccess, 'function');
  apiValidateType(opts, 'getKeyValue', 'onError', opts.onError, 'function', OPTIONAL);
  opts.interpreter = Applab.interpreter;
  var onSuccess = applabCommands.handleReadValue.bind(this, opts);
  var onError = errorHandler.handleError.bind(this, opts);
  AppStorage.getKeyValue(opts.key, onSuccess, onError);
};

applabCommands.handleReadValue = function(opts, value) {
  // Ensure that this event was requested by the same instance of the interpreter
  // that is currently active before proceeding...
  if (opts.onSuccess && opts.interpreter === Applab.interpreter) {
    Applab.eventQueue.push({
      'fn': opts.onSuccess,
      'arguments': [value]
    });
  }
};

applabCommands.setKeyValue = function(opts) {
  // PARAMNAME: setKeyValue: callback vs. callbackFunction
  apiValidateType(opts, 'setKeyValue', 'key', opts.key, 'string');
  apiValidateType(opts, 'setKeyValue', 'value', opts.value, 'primitive');
  apiValidateType(opts, 'setKeyValue', 'callback', opts.onSuccess, 'function', OPTIONAL);
  apiValidateType(opts, 'setKeyValue', 'onError', opts.onError, 'function', OPTIONAL);
  opts.interpreter = Applab.interpreter;
  var onSuccess = applabCommands.handleSetKeyValue.bind(this, opts);
  var onError = errorHandler.handleError.bind(this, opts);
  AppStorage.setKeyValue(opts.key, opts.value, onSuccess, onError);
};

applabCommands.handleSetKeyValue = function(opts) {
  // Ensure that this event was requested by the same instance of the interpreter
  // that is currently active before proceeding...
  if (opts.onSuccess && opts.interpreter === Applab.interpreter) {
    Applab.eventQueue.push({
      'fn': opts.onSuccess,
      'arguments': []
    });
  }
};

applabCommands.readRecords = function (opts) {
  // PARAMNAME: readRecords: table vs. tableName
  // PARAMNAME: readRecords: callback vs. callbackFunction
  // PARAMNAME: readRecords: terms vs. searchTerms
  apiValidateType(opts, 'readRecords', 'table', opts.table, 'string');
  apiValidateType(opts, 'readRecords', 'searchTerms', opts.searchParams, 'object');
  apiValidateType(opts, 'readRecords', 'callback', opts.onSuccess, 'function');
  apiValidateType(opts, 'readRecords', 'onError', opts.onError, 'function', OPTIONAL);
  opts.interpreter = Applab.interpreter;
  var onSuccess = applabCommands.handleReadRecords.bind(this, opts);
  var onError = errorHandler.handleError.bind(this, opts);
  AppStorage.readRecords(opts.table, opts.searchParams, onSuccess, onError);
};

applabCommands.handleReadRecords = function(opts, records) {
  // Ensure that this event was requested by the same instance of the interpreter
  // that is currently active before proceeding...
  if (opts.onSuccess && opts.interpreter === Applab.interpreter) {
    Applab.eventQueue.push({
      'fn': opts.onSuccess,
      'arguments': [records]
    });
  }
};

applabCommands.updateRecord = function (opts) {
  // PARAMNAME: updateRecord: table vs. tableName
  // PARAMNAME: updateRecord: callback vs. callbackFunction
  apiValidateType(opts, 'updateRecord', 'table', opts.table, 'string');
  apiValidateType(opts, 'updateRecord', 'record', opts.record, 'object');
  apiValidateTypeAndRange(opts, 'updateRecord', 'record.id', opts.record.id, 'number', 1, Infinity);
  apiValidateType(opts, 'updateRecord', 'callback', opts.onSuccess, 'function', OPTIONAL);
  apiValidateType(opts, 'updateRecord', 'onError', opts.onError, 'function', OPTIONAL);
  opts.interpreter = Applab.interpreter;
  var onSuccess = applabCommands.handleUpdateRecord.bind(this, opts);
  var onError = errorHandler.handleError.bind(this, opts);
  AppStorage.updateRecord(opts.table, opts.record, onSuccess, onError);
};

applabCommands.handleUpdateRecord = function(opts, record) {
  // Ensure that this event was requested by the same instance of the interpreter
  // that is currently active before proceeding...
  if (opts.onSuccess && opts.interpreter === Applab.interpreter) {
    Applab.eventQueue.push({
      'fn': opts.onSuccess,
      'arguments': [record]
    });
  }
};

applabCommands.deleteRecord = function (opts) {
  // PARAMNAME: deleteRecord: table vs. tableName
  // PARAMNAME: deleteRecord: callback vs. callbackFunction
  apiValidateType(opts, 'deleteRecord', 'table', opts.table, 'string');
  apiValidateType(opts, 'deleteRecord', 'record', opts.record, 'object');
  apiValidateTypeAndRange(opts, 'deleteRecord', 'record.id', opts.record.id, 'number', 1, Infinity);
  apiValidateType(opts, 'deleteRecord', 'callback', opts.onSuccess, 'function', OPTIONAL);
  apiValidateType(opts, 'deleteRecord', 'onError', opts.onError, 'function', OPTIONAL);
  opts.interpreter = Applab.interpreter;
  var onSuccess = applabCommands.handleDeleteRecord.bind(this, opts);
  var onError = errorHandler.handleError.bind(this, opts);
  AppStorage.deleteRecord(opts.table, opts.record, onSuccess, onError);
};

applabCommands.handleDeleteRecord = function(opts) {
  // Ensure that this event was requested by the same instance of the interpreter
  // that is currently active before proceeding...
  if (opts.onSuccess && opts.interpreter === Applab.interpreter) {
    Applab.eventQueue.push({
      'fn': opts.onSuccess,
      'arguments': []
    });
  }
};

applabCommands.getUserId = function (opts) {
  if (!Applab.user.applabUserId) {
    throw new Error("User ID failed to load.");
  }
  return Applab.user.applabUserId;
};


},{"../StudioApp":4,"../codegen":93,"../timeoutList":285,"./appStorage":14,"./applabTurtle":16,"./errorHandler":45,"./keyEvent":47,"./rgbcolor.js":51}],51:[function(require,module,exports){
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
 * @license Use it if you like it
 */

 // hex regular expressions updated to require [0-9a-f] (cpirich)
 // channels declared as local variable to avoid conflicts (cpirich)
 // cleanup jshint errors (cpirich)
 // add rgba support (davidsbailey)
 
module.exports = function(color_string)
{
    this.ok = false;

    // strip any leading #
    if (color_string.charAt(0) == '#') { // remove # if any
        color_string = color_string.substr(1,6);
    }

    color_string = color_string.replace(/ /g,'');
    color_string = color_string.toLowerCase();

    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred : 'cd5c5c',
        indigo : '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    for (var key in simple_colors) {
        if (color_string == key) {
            color_string = simple_colors[key];
        }
    }
    // emd of simple type-in colors

    // array of color definition objects
    var color_defs = [
        {
            re: /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
            example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
            process: function (bits){
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3])
                ];
            }
        },
        {
          re: /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*((?:\d+(?:\.\d+)?)|(?:\.\d+))\s*\)$/,
          example: ['rgba(123, 234, 45, .33)', 'rgba(255,234,245,1)'],
          process: function (bits){
            return [
              parseInt(bits[1]),
              parseInt(bits[2]),
              parseInt(bits[3]),
              parseInt(bits[4])
            ];
          }
        },
        {
            re: /^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/,
            example: ['#00ff00', '336699'],
            process: function (bits){
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        },
        {
            re: /^([0-9a-f]{1})([0-9a-f]{1})([0-9a-f]{1})$/,
            example: ['#fb0', 'f0f'],
            process: function (bits){
                return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16)
                ];
            }
        }
    ];

    // search through the definitions to find a match
    for (var i = 0; i < color_defs.length; i++) {
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            var channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            this.a = channels[3];
            this.ok = true;
        }

    }

    // validate/cleanup values
    this.r = (this.r < 0 || isNaN(this.r)) ? 0 : ((this.r > 255) ? 255 : this.r);
    this.g = (this.g < 0 || isNaN(this.g)) ? 0 : ((this.g > 255) ? 255 : this.g);
    this.b = (this.b < 0 || isNaN(this.b)) ? 0 : ((this.b > 255) ? 255 : this.b);
    this.a = (this.a < 0) ? 0 : ((this.a > 1 || isNaN(this.a)) ? 1 : this.a);

    // some getters
    this.toRGB = function () {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    };
    this.toRGBA = function () {
      return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.a + ')';
    };
    this.toHex = function () {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) { r = '0' + r; }
        if (g.length == 1) { g = '0' + g; }
        if (b.length == 1) { b = '0' + b; }
        return '#' + r + g + b;
    };
};


},{}],47:[function(require,module,exports){
// Table provided by https://www.jabcreations.com/blog/polyfill-for-event.key

module.exports = {
  '65':'a',
  '66':'b',
  '67':'c',
  '68':'d',
  '69':'e',
  '70':'f',
  '71':'g',
  '72':'h',
  '73':'i',
  '74':'j',
  '75':'k',
  '76':'l',
  '77':'m',
  '78':'n',
  '79':'o',
  '80':'p',
  '81':'q',
  '82':'r',
  '83':'s',
  '84':'t',
  '85':'u',
  '86':'v',
  '87':'w',
  '88':'x',
  '89':'y',
  '90':'z',
  '8':'Backspace',
  '9':'Tab',
  '13':'Enter',
  '16':'Shift',
  '17':'Control',
  '18':'Alt',
  '20':'CapsLock',
  '27':'Esc',
  '32':' ',
  '33':'PageUp',
  '34':'PageDown',
  '35':'End',
  '36':'Home',
  '37':'Left',
  '38':'Up',
  '39':'Right',
  '40':'Down',
  '45':'Insert',
  '46':'Del',
  '48':'0',
  '49':'1',
  '50':'2',
  '51':'3',
  '52':'4',
  '53':'5',
  '54':'6',
  '55':'7',
  '56':'8',
  '57':'9',
  '91':'OS',
  '92':'OS',
  '93':'Menu',
  '96':'0',
  '97':'1',
  '98':'2',
  '99':'3',
  '100':'4',
  '101':'5',
  '102':'6',
  '103':'7',
  '104':'8',
  '105':'9',
  '106':'*',
  '107':'+',
  '109':'-',
  '110':'.',
  '111':'/',
  '112':'F1',
  '113':'F2',
  '114':'F3',
  '115':'F4',
  '116':'F5',
  '117':'F6',
  '118':'F7',
  '119':'F8',
  '120':'F9',
  '121':'F10',
  '122':'F11',
  '123':'F12',
  '144':'NumLock',
  '145':'ScrollLock',
  '186':':',
  '187':'=',
  '188':',',
  '189':'-',
  '190':'.',
  '191':'/',
  '192':'`',
  '219':'[',
  '220':'\\',
  '221':']',
  '222':'\''
 };


},{}],45:[function(require,module,exports){
var annotationList = require('./acemode/annotationList');

var ErrorLevel = {
  WARNING: 'WARNING',
  ERROR: 'ERROR'
};

function outputApplabConsole(output) {
  // first pass through to the real browser console log if available:
  if (console.log) {
    console.log(output);
  }
  // then put it in the applab console visible to the user:
  var debugOutput = document.getElementById('debug-output');
  if (debugOutput) {
    if (debugOutput.textContent.length > 0) {
      debugOutput.textContent += '\n' + output;
    } else {
      debugOutput.textContent = output;
    }
    debugOutput.scrollTop = debugOutput.scrollHeight;
  }
}

/**
 * Output error to console and gutter as appropriate
 * @param {string} warning Text for warning
 * @param {ErrorLevel} level
 * @param {number} lineNum One indexed line number
 */
function outputError(warning, level, lineNum) {
  var text = level + ': ';
  if (lineNum !== undefined) {
    text += 'Line: ' + lineNum + ': ';
  }
  text += warning;
  outputApplabConsole(text);
  if (lineNum !== undefined) {
    annotationList.addRuntimeAnnotation(level, lineNum, warning);
  }
}

function handleError(opts, message) {
  // Ensure that this event was requested by the same instance of the interpreter
  // that is currently active before proceeding...
  if (opts.onError && opts.interpreter === Applab.interpreter) {
    Applab.eventQueue.push({
      'fn': opts.onError,
      'arguments': [message]
    });
  } else {
    outputApplabConsole(message);
  }
}


module.exports = {
  ErrorLevel: ErrorLevel,
  outputApplabConsole: outputApplabConsole,
  outputError: outputError,
  handleError: handleError
};


},{"./acemode/annotationList":9}],14:[function(require,module,exports){
'use strict';

/* global dashboard */

/**
 * Namespace for app storage.
 */
var AppStorage = module.exports;

// TODO(dave): remove once all applab data levels are associated with
// a project.
AppStorage.tempChannelId =
    window.location.hostname.split('.')[0] === 'localhost' ?
        "SmwVmYVl1V5UCCw1Ec6Dtw==" : "DvTw9X3pDcyDyil44S6qbw==";

AppStorage.getChannelId = function() {
  // TODO(dave): pull channel id directly from appOptions once available.
  var id = dashboard && dashboard.project.current && dashboard.project.current.id;
  return id || AppStorage.tempChannelId;
};

/**
 * Reads the value associated with the key, accessible to all users of the app.
 * @param {string} key The name of the key.
 * @param {function(Object)} onSuccess Function to call on success with the
       value retrieved from storage.
 * @param {function(string)} onError Function to call on error with error msg.
 */
AppStorage.getKeyValue = function(key, onSuccess, onError) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = handleGetKeyValue.bind(req, onSuccess, onError);
  var url = '/v3/shared-properties/' + AppStorage.getChannelId() + '/' + key;
  req.open('GET', url, true);
  req.send();
};

var handleGetKeyValue = function(onSuccess, onError) {
  var done = XMLHttpRequest.DONE || 4;
  if (this.readyState !== done) {
    return;
  }
  if (this.status === 404) {
    onSuccess(undefined);
    return;
  }
  if (this.status < 200 || this.status >= 300) {
    onError('error reading value: unexpected http status ' + this.status);
    return;
  }
  var value = JSON.parse(this.responseText);
  onSuccess(value);
};

/**
 * Saves the value associated with the key, accessible to all users of the app.
 * @param {string} key The name of the key.
 * @param {Object} value The value to associate with the key.
 * @param {function()} onSuccess Function to call on success.
 * @param {function(string)} onError Function to call on error with error msg.
 */
AppStorage.setKeyValue = function(key, value, onSuccess, onError) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = handleSetKeyValue.bind(req, onSuccess, onError);
  var url = '/v3/shared-properties/' + AppStorage.getChannelId() + '/' + key;
  req.open('POST', url, true);
  req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  req.send(JSON.stringify(value));
};

var handleSetKeyValue = function(onSuccess, onError) {
  var done = XMLHttpRequest.DONE || 4;
  if (this.readyState !== done) {
    return;
  }
  if (this.status < 200 || this.status >= 300) {
    onError('error writing value: unexpected http status ' + this.status);
    return;
  }
  onSuccess();
};

/**
 * Creates a new record in the specified table, accessible to all users.
 * @param {string} tableName The name of the table to read from.
 * @param {Object} record Object containing other properties to store
 *     on the record.
 * @param {function(Object)} onSuccess Function to call with the new record.
 * @param {function(string)} onError Function to call with an error message
 *    in case of failure.
 */
AppStorage.createRecord = function(tableName, record, onSuccess, onError) {
  if (!tableName) {
    onError('error creating record: missing required parameter "tableName"');
    return;
  }
  if (record.id) {
    onError('error creating record: record must not have an "id" property');
    return;
  }
  var req = new XMLHttpRequest();
  req.onreadystatechange = handleCreateRecord.bind(req, onSuccess, onError);
  var url = '/v3/shared-tables/' + AppStorage.getChannelId() + '/' + tableName;
  req.open('POST', url, true);
  req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  req.send(JSON.stringify(record));
};

var handleCreateRecord = function(onSuccess, onError) {
  var done = XMLHttpRequest.DONE || 4;
  if (this.readyState !== done) {
    return;
  }
  if (this.status < 200 || this.status >= 300) {
    onError('error creating record: unexpected http status ' + this.status);
    return;
  }
  var record = JSON.parse(this.responseText);
  onSuccess(record);
};

/**
 * Reads records which match the searchParams specified by the user,
 * and passes them to onSuccess.
 * @param {string} tableName The name of the table to read from.
 * @param {string} searchParams.id Optional id of record to read.
 * @param {Object} searchParams Other search criteria. Only records
 *     whose contents match all criteria will be returned.
 * @param {function(Array)} onSuccess Function to call with an array of record
       objects.
 * @param {function(string)} onError Function to call with an error message
 *     in case of failure.
 */
AppStorage.readRecords = function(tableName, searchParams, onSuccess, onError) {
  if (!tableName) {
    onError('error reading records: missing required parameter "tableName"');
    return;
  }
  var req = new XMLHttpRequest();
  req.onreadystatechange = handleReadRecords.bind(req,
      searchParams, onSuccess, onError);
  var url = '/v3/shared-tables/' + AppStorage.getChannelId() + '/' + tableName;
  req.open('GET', url, true);
  req.send();
  
};

var handleReadRecords = function(searchParams, onSuccess, onError) {
  var done = XMLHttpRequest.DONE || 4;
  if (this.readyState !== done) {
    return;
  }
  if (this.status < 200 || this.status >= 300) {
    onError('error reading records: unexpected http status ' + this.status);
    return;
  }
  var records = JSON.parse(this.responseText);
  records = records.filter(function(record) {
    for (var prop in searchParams) {
      if (record[prop] !== searchParams[prop]) {
        return false;
      }
    }
    return true;
  });
  onSuccess(records);
};

/**
 * Updates a record in a table, accessible to all users.
 * @param {string} tableName The name of the table to update.
 * @param {string} record.id The id of the row to update.
 * @param {Object} record Object containing other properites to update
 *     on the record.
 * @param {function()} onSuccess Function to call on success.
 * @param {function(string)} onError Function to call with an error message
 *    in case of failure.
 */
AppStorage.updateRecord = function(tableName, record, onSuccess, onError) {
  if (!tableName) {
    onError('error updating record: missing required parameter "tableName"');
    return;
  }
  var recordId = record.id;
  if (!recordId) {
    onError('error updating record: missing required property "id"');
    return;
  }
  var req = new XMLHttpRequest();
  req.onreadystatechange = handleUpdateRecord.bind(req, tableName, record, onSuccess, onError);
  var url = '/v3/shared-tables/' + AppStorage.getChannelId() + '/' +
      tableName + '/' + recordId;
  req.open('POST', url, true);
  req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  req.send(JSON.stringify(record));
};

var handleUpdateRecord = function(tableName, record, onSuccess, onError) {
  var done = XMLHttpRequest.DONE || 4;
  if (this.readyState !== done) {
    return;
  }
  if (this.status === 404) {
    onError('error updating record: could not find record id ' + record.id +
            ' in table ' + tableName);
    return;
  }
  if (this.status < 200 || this.status >= 300) {
    onError('error updating record: unexpected http status ' + this.status);
    return;
  }
  onSuccess(record);
};

/**
 * Deletes a record from the specified table.
 * @param {string} tableName The name of the table to delete from.
 * @param {string} record.id The id of the record to delete.
 * @param {Object} record Object whose other properties are ignored.
 * @param {function()} onSuccess Function to call on success.
 * @param {function(string)} onError Function to call with an error message
 *    in case of failure.
 */
AppStorage.deleteRecord = function(tableName, record, onSuccess, onError) {
  if (!tableName) {
    onError('error deleting record: missing required parameter "tableName"');
    return;
  }
  var recordId = record.id;
  if (!recordId) {
    onError('error deleting record: missing required property "id"');
    return;
  }
  var req = new XMLHttpRequest();
  req.onreadystatechange = handleDeleteRecord.bind(req, tableName, record, onSuccess, onError);
  var url = '/v3/shared-tables/' + AppStorage.getChannelId() + '/' +
      tableName + '/' + recordId + '/delete';
  req.open('POST', url, true);
  req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  req.send(JSON.stringify(record));
};

var handleDeleteRecord = function(tableName, record, onSuccess, onError) {
  var done = XMLHttpRequest.DONE || 4;
  if (this.readyState !== done) {
    return;
  }
  if (this.status === 404) {
    onError('error deleting record: could not find record id ' + record.id +
        ' in table ' + tableName);
    return;
  }
  if (this.status < 200 || this.status >= 300) {
    onError('error deleting record: unexpected http status ' + this.status);
    return;
  }
  onSuccess();
};


},{}],13:[function(require,module,exports){

exports.randomFromArray = function (values) {
  var key = Math.floor(Math.random() * values.length);
  return values[key];
};

// APIs needed for blockly (must include blockId) (keep in sync with api.js):

exports.container = function (blockId, elementId, html) {
  return Applab.executeCmd(blockId,
                          'container',
                          {'elementId': elementId,
                           'html': html });
};

exports.write = function (blockId, html) {
  return Applab.executeCmd(blockId,
                          'write',
                          {'html': html });
};

exports.innerHTML = function (blockId, elementId, html) {
  return Applab.executeCmd(blockId,
                          'innerHTML',
                          {'elementId': elementId,
                           'html': html });
};

exports.deleteElement = function (blockId, elementId) {
  return Applab.executeCmd(blockId,
                          'deleteElement',
                          {'elementId': elementId });
};

exports.showElement = function (blockId, elementId) {
  return Applab.executeCmd(blockId,
                          'showElement',
                          {'elementId': elementId });
};

exports.hideElement = function (blockId, elementId) {
  return Applab.executeCmd(blockId,
                          'hideElement',
                          {'elementId': elementId });
};

exports.button = function (blockId, elementId, text) {
  return Applab.executeCmd(blockId,
                          'button',
                          {'elementId': elementId,
                           'text': text });
};

exports.image = function (blockId, elementId, src) {
  return Applab.executeCmd(blockId,
                          'image',
                          {'elementId': elementId,
                           'src': src });
};

exports.setPosition = function (blockId, elementId, left, top, width, height) {
  return Applab.executeCmd(blockId,
                          'setPosition',
                          {'elementId': elementId,
                           'left': left,
                           'top': top,
                           'width': width,
                           'height': height });
};

exports.getXPosition = function (blockId, elementId) {
  return Applab.executeCmd(blockId,
                          'getXPosition',
                          {'elementId': elementId });
};

exports.getYPosition = function (blockId, elementId) {
  return Applab.executeCmd(blockId,
                          'getYPosition',
                          {'elementId': elementId });
};

exports.createCanvas = function (blockId, elementId, width, height) {
  return Applab.executeCmd(blockId,
                          'createCanvas',
                          {'elementId': elementId,
                           'width': width,
                           'height': height });
};

exports.setActiveCanvas = function (blockId, elementId) {
  return Applab.executeCmd(blockId,
                          'setActiveCanvas',
                          {'elementId': elementId  });
};

exports.line = function (blockId, x1, y1, x2, y2) {
  return Applab.executeCmd(blockId,
                          'line',
                          {'x1': x1,
                           'y1': y1,
                           'x2': x2,
                           'y2': y2 });
};

exports.circle = function (blockId, x, y, radius) {
  return Applab.executeCmd(blockId,
                          'circle',
                          {'x': x,
                           'y': y,
                           'radius': radius });
};

exports.rect = function (blockId, x, y, width, height) {
  return Applab.executeCmd(blockId,
                          'rect',
                          {'x': x,
                           'y': y,
                           'width': width,
                           'height': height });
};

exports.setStrokeWidth = function (blockId, width) {
  return Applab.executeCmd(blockId,
                          'setStrokeWidth',
                          {'width': width });
};

exports.setStrokeColor = function (blockId, color) {
  return Applab.executeCmd(blockId,
                          'setStrokeColor',
                          {'color': color });
};

exports.setFillColor = function (blockId, color) {
  return Applab.executeCmd(blockId,
                          'setFillColor',
                          {'color': color });
};

exports.clearCanvas = function (blockId) {
  return Applab.executeCmd(blockId, 'clearCanvas');
};

exports.drawImage = function (blockId, imageId, x, y, width, height) {
  return Applab.executeCmd(blockId,
                          'drawImage',
                          {'imageId': imageId,
                           'x': x,
                           'y': y,
                           'width': width,
                           'height': height });
};

exports.getImageData = function (blockId, x, y, width, height) {
  return Applab.executeCmd(blockId,
                          'getImageData',
                          {'x': x,
                           'y': y,
                           'width': width,
                           'height': height });
};

exports.putImageData = function (blockId, imageData, x, y) {
  return Applab.executeCmd(blockId,
                          'putImageData',
                          {'imageData': imageData,
                           'x': x,
                           'y': y });
};

exports.textInput = function (blockId, elementId, text) {
  return Applab.executeCmd(blockId,
                          'textInput',
                          {'elementId': elementId,
                           'text': text });
};

exports.textLabel = function (blockId, elementId, text, forId) {
  return Applab.executeCmd(blockId,
                          'textLabel',
                          {'elementId': elementId,
                           'text': text,
                           'forId': forId });
};

exports.checkbox = function (blockId, elementId, checked) {
  return Applab.executeCmd(blockId,
                          'checkbox',
                          {'elementId': elementId,
                           'checked': checked });
};

exports.radioButton = function (blockId, elementId, checked, name) {
  return Applab.executeCmd(blockId,
                          'radioButton',
                          {'elementId': elementId,
                           'checked': checked,
                           'name': name });
};

exports.getChecked = function (blockId, elementId) {
  return Applab.executeCmd(blockId,
                          'getChecked',
                          {'elementId': elementId });
};

exports.setChecked = function (blockId, elementId, checked) {
  return Applab.executeCmd(blockId,
                          'setChecked',
                          {'elementId': elementId,
                           'checked': checked });
};

exports.dropdown = function (blockId, elementId) {
  var optionsArray = Array.prototype.slice.call(arguments, 2);
  return Applab.executeCmd(blockId,
                          'dropdown',
                          {'elementId': elementId,
                           'optionsArray': optionsArray });
};

exports.getAttribute = function(blockId, elementId, attribute) {
  return Applab.executeCmd(blockId,
                           'getAttribute',
                           {elementId: elementId,
                            attribute: attribute});
};

exports.setAttribute = function(blockId, elementId, attribute, value) {
  return Applab.executeCmd(blockId,
                           'setAttribute',
                           {elementId: elementId,
                            attribute: attribute,
                            value: value});
};

exports.getText = function (blockId, elementId) {
  return Applab.executeCmd(blockId,
                          'getText',
                          {'elementId': elementId });
};

exports.setText = function (blockId, elementId, text) {
  return Applab.executeCmd(blockId,
                          'setText',
                          {'elementId': elementId,
                           'text': text });
};

exports.getImageURL = function (blockId, elementId) {
  return Applab.executeCmd(blockId,
                          'getImageURL',
                          {'elementId': elementId });
};

exports.setImageURL = function (blockId, elementId, src) {
  return Applab.executeCmd(blockId,
                          'setImageURL',
                          {'elementId': elementId,
                           'src': src });
};

exports.imageUploadButton = function (blockId, elementId, text) {
  return Applab.executeCmd(blockId,
                           'imageUploadButton',
                           {'elementId': elementId,
                            'text': text });
};

exports.setParent = function (blockId, elementId, parentId) {
  return Applab.executeCmd(blockId,
                          'setParent',
                          {'elementId': elementId,
                           'parentId': parentId });
};

exports.setStyle = function (blockId, elementId, style) {
  return Applab.executeCmd(blockId,
                           'setStyle',
                           {'elementId': elementId,
                           'style': style });
};

exports.onEvent = function (blockId, elementId, eventName, func) {
  var extraArgs = Array.prototype.slice.call(arguments).slice(4);
  return Applab.executeCmd(blockId,
                          'onEvent',
                          {'elementId': elementId,
                           'eventName': eventName,
                           'func': func,
                           'extraArgs': extraArgs});
};

exports.startWebRequest = function (blockId, url, func) {
  return Applab.executeCmd(blockId,
                          'startWebRequest',
                          {'url': url,
                           'func': func });
};

exports.setTimeout = function (blockId, func, milliseconds) {
  return Applab.executeCmd(blockId,
                          'setTimeout',
                          {'func': func,
                           'milliseconds': milliseconds });
};

exports.clearTimeout = function (blockId, timeoutId) {
  return Applab.executeCmd(blockId,
                           'clearTimeout',
                           {'timeoutId': timeoutId });
};

exports.setInterval = function (blockId, func, milliseconds) {
  return Applab.executeCmd(blockId,
                          'setInterval',
                          {'func': func,
                           'milliseconds': milliseconds });
};

exports.clearInterval = function (blockId, intervalId) {
  return Applab.executeCmd(blockId,
                           'clearInterval',
                           {'intervalId': intervalId });
};

exports.playSound = function (blockId, url) {
  return Applab.executeCmd(blockId,
                          'playSound',
                          {'url': url});
};

exports.getKeyValue = function(blockId, key, onSuccess, onError) {
  return Applab.executeCmd(blockId,
                           'getKeyValue',
                           {'key':key,
                            'onSuccess': onSuccess,
                            'onError': onError});
};

exports.setKeyValue = function(blockId, key, value, onSuccess, onError) {
  return Applab.executeCmd(blockId,
                           'setKeyValue',
                           {'key':key,
                            'value': value,
                            'onSuccess': onSuccess,
                            'onError': onError});
};

exports.createRecord = function (blockId, table, record, onSuccess, onError) {
  return Applab.executeCmd(blockId,
                          'createRecord',
                          {'table': table,
                           'record': record,
                           'onSuccess': onSuccess,
                           'onError': onError});
};

exports.readRecords = function (blockId, table, searchParams, onSuccess, onError) {
  return Applab.executeCmd(blockId,
                          'readRecords',
                          {'table': table,
                           'searchParams': searchParams,
                           'onSuccess': onSuccess,
                           'onError': onError});
};

exports.updateRecord = function (blockId, table, record, onSuccess, onError) {
  return Applab.executeCmd(blockId,
                          'updateRecord',
                          {'table': table,
                           'record': record,
                           'onSuccess': onSuccess,
                           'onError': onError});
};

exports.deleteRecord = function (blockId, table, record, onSuccess, onError) {
  return Applab.executeCmd(blockId,
                          'deleteRecord',
                          {'table': table,
                           'record': record,
                           'onSuccess': onSuccess,
                           'onError': onError});
};

exports.getUserId = function (blockId) {
  return Applab.executeCmd(blockId,
                          'getUserId',
                          {});
};

exports.moveForward = function (blockId, distance) {
  return Applab.executeCmd(blockId,
                          'moveForward',
                          {'distance': distance });
};

exports.moveBackward = function (blockId, distance) {
  return Applab.executeCmd(blockId,
                          'moveBackward',
                          {'distance': distance });
};

exports.move = function (blockId, x, y) {
  return Applab.executeCmd(blockId,
                          'move',
                          {'x': x,
                           'y': y });
};

exports.moveTo = function (blockId, x, y) {
  return Applab.executeCmd(blockId,
                          'moveTo',
                          {'x': x,
                           'y': y });
};

exports.turnRight = function (blockId, degrees) {
  return Applab.executeCmd(blockId,
                          'turnRight',
                          {'degrees': degrees });
};

exports.turnLeft = function (blockId, degrees) {
  return Applab.executeCmd(blockId,
                          'turnLeft',
                          {'degrees': degrees });
};

exports.turnTo = function (blockId, direction) {
  return Applab.executeCmd(blockId,
                           'turnTo',
                           {'direction': direction });
};

exports.arcRight = function (blockId, degrees, radius) {
  return Applab.executeCmd(blockId,
                           'arcRight',
                           {'degrees': degrees,
                            'radius': radius });
};

exports.arcLeft = function (blockId, degrees, radius) {
  return Applab.executeCmd(blockId,
                           'arcLeft',
                           {'degrees': degrees,
                            'radius': radius });
};

exports.dot = function (blockId, radius) {
  return Applab.executeCmd(blockId,
                           'dot',
                           {'radius': radius });
};

exports.getX = function (blockId) {
  return Applab.executeCmd(blockId, 'getX');
};

exports.getY = function (blockId) {
  return Applab.executeCmd(blockId, 'getY');
};

exports.getDirection = function (blockId) {
  return Applab.executeCmd(blockId, 'getDirection');
};

exports.penUp = function (blockId) {
  return Applab.executeCmd(blockId, 'penUp');
};

exports.penDown = function (blockId) {
  return Applab.executeCmd(blockId, 'penDown');
};

exports.show = function (blockId) {
  return Applab.executeCmd(blockId, 'show');
};

exports.hide = function (blockId) {
  return Applab.executeCmd(blockId, 'hide');
};

exports.speed = function (blockId, percent) {
  return Applab.executeCmd(blockId,
                           'speed',
                           {'percent': percent});
};

exports.penWidth = function (blockId, width) {
  return Applab.executeCmd(blockId,
                          'penWidth',
                          {'width': width });
};

exports.penColor = function (blockId, color) {
  return Applab.executeCmd(blockId,
                          'penColor',
                          {'color': color });
};

exports.penRGB = function (blockId, r, g, b, a) {
  return Applab.executeCmd(blockId,
                          'penRGB',
                          {'r': r,
                           'g': g,
                           'b': b,
                           'a': a });
};

exports.insertItem = function (blockId, array, index, item) {
  return Applab.executeCmd(blockId,
                          'insertItem',
                          {'array': array,
                           'index': index,
                           'item': item });
};

exports.appendItem = function (blockId, array, item) {
  return Applab.executeCmd(blockId,
                          'appendItem',
                          {'array': array,
                           'item': item });
};

exports.removeItem = function (blockId, array, index) {
  return Applab.executeCmd(blockId,
                          'removeItem',
                          {'array': array,
                           'index': index });
};



},{}],11:[function(require,module,exports){
/* global ace */

var dropletConfig = require('../dropletConfig');
var dropletUtils = require('../../dropletUtils');
var annotationList = require('./annotationList');

// define ourselves for ace, so that it knows where to get us
ace.define("ace/mode/javascript_codeorg",["require","exports","module","ace/lib/oop","ace/mode/javascript","ace/mode/javascript_highlight_rules","ace/worker/worker_client","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/config","ace/lib/net"], function(acerequire, exports, module) {

var oop = acerequire("ace/lib/oop");
var JavaScriptMode = acerequire("ace/mode/javascript").Mode;
var JavaScriptHighlightRules = acerequire("ace/mode/javascript_highlight_rules").JavaScriptHighlightRules;
var WorkerClient = acerequire("../worker/worker_client").WorkerClient;
var MatchingBraceOutdent = acerequire("./matching_brace_outdent").MatchingBraceOutdent;
var CstyleBehaviour = acerequire("./behaviour/cstyle").CstyleBehaviour;
var CStyleFoldMode = acerequire("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = JavaScriptHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = new CstyleBehaviour();
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, JavaScriptMode);

(function() {

  // A set of keywords we don't want to autocomplete
  var excludedKeywords = [
    'ArrayBuffer',
    'Collator',
    'EvalError',
    'Float32Array',
    'Float64Array',
    'Intl',
    'Int16Array',
    'Int32Array',
    'Int8Array',
    'Iterator',
    'NumberFormat',
    'Object',
    'QName',
    'RangeError',
    'ReferenceError',
    'StopIteration',
    'SyntaxError',
    'TypeError',
    'Uint16Array',
    'Uint32Array',
    'Uint8Array',
    'Uint8ClampedArra',
    'URIError'
  ];

  // Manually create our highlight rules so that we can modify it
  this.$highlightRules = new JavaScriptHighlightRules();

  excludedKeywords.forEach(function (keywordToRemove) {
    var keywordIndex = this.$highlightRules.$keywordList.indexOf(keywordToRemove);
    if (keywordIndex > 0) {
      this.$highlightRules.$keywordList.splice(keywordIndex);
    }
  }, this);

  this.createWorker = function(session) {
    var worker = new WorkerClient(["ace"], "ace/mode/javascript_worker", "JavaScriptWorker");
    worker.attachToDocument(session.getDocument());
    var newOptions = {
      unused: true,
      undef: true,
      predef: {
      }
    };
    // Mark all of our blocks as predefined so that linter doesnt complain about
    // using undefined variables
    dropletUtils.getAllAvailableDropletBlocks(dropletConfig).forEach(function (block) {
      newOptions.predef[block.func] = false;
    });

    annotationList.attachToSession(session);

    worker.send("changeOptions", [newOptions]);

    worker.on("jslint", annotationList.setJSLintAnnotations);

    worker.on("terminate", function() {
      session.clearAnnotations();
    });

    return worker;
  };

  this.cleanup = function () {
    annotationList.detachFromSession();
  };
}).call(Mode.prototype);

exports.Mode = Mode;
});


},{"../../dropletUtils":97,"../dropletConfig":44,"./annotationList":9}],44:[function(require,module,exports){
var api = require('./api');

var COLOR_LIGHT_GREEN = '#D3E965';
var COLOR_BLUE = '#19C3E1';
var COLOR_RED = '#F78183';
var COLOR_CYAN = '#4DD0E1';
var COLOR_YELLOW = '#FFF176';

module.exports.blocks = [
  {'func': 'onEvent', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id','type','callback'], 'params': ['"id"', '"click"', "function(event) {\n  \n}"], 'dropdown': { 1: [ '"click"', '"change"', '"keyup"', '"keydown"', '"keypress"', '"mousemove"', '"mousedown"', '"mouseup"', '"mouseover"', '"mouseout"', '"input"' ] } },
  {'func': 'button', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id','text'], 'params': ['"id"', '"text"'] },
  {'func': 'textInput', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id','text'], 'params': ['"id"', '"text"'] },
  {'func': 'textLabel', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id','text','forId'], 'params': ['"id"', '"text"'] },
  {'func': 'dropdown', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id','option1','etc'], 'params': ['"id"', '"option1"', '"etc"'] },
  {'func': 'getText', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id'], 'params': ['"id"'], 'type': 'value' },
  {'func': 'setText', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id','text'], 'params': ['"id"', '"text"'] },
  {'func': 'checkbox', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id','checked'], 'params': ['"id"', "false"], 'dropdown': { 1: [ "true", "false" ] } },
  {'func': 'radioButton', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id','checked'], 'params': ['"id"', "false", '"group"'], 'dropdown': { 1: [ "true", "false" ] } },
  {'func': 'getChecked', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id'], 'params': ['"id"'], 'type': 'value' },
  {'func': 'setChecked', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id','checked'], 'params': ['"id"', "true"], 'dropdown': { 1: [ "true", "false" ] } },
  {'func': 'image', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id','url'], 'params': ['"id"', '"http://code.org/images/logo.png"'] },
  {'func': 'getImageURL', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id'], 'params': ['"id"'], 'type': 'value' },
  {'func': 'setImageURL', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id','url'], 'params': ['"id"', '"http://code.org/images/logo.png"'] },
  {'func': 'playSound', 'parent': api, 'category': 'UI controls', 'paletteParams': ['url'], 'params': ['"http://soundbible.com/mp3/neck_snap-Vladimir-719669812.mp3"'] },
  {'func': 'showElement', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id'], 'params': ['"id"'] },
  {'func': 'hideElement', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id'], 'params': ['"id"'] },
  {'func': 'deleteElement', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id'], 'params': ['"id"'] },
  {'func': 'setPosition', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id','x','y','width','height'], 'params': ['"id"', "0", "0", "100", "100"] },
  {'func': 'write', 'parent': api, 'category': 'UI controls', 'paletteParams': ['text'], 'params': ['"text"'] },
  {'func': 'getXPosition', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id'], 'params': ['"id"'], 'type': 'value' },
  {'func': 'getYPosition', 'parent': api, 'category': 'UI controls', 'paletteParams': ['id'], 'params': ['"id"'], 'type': 'value' },

  {'func': 'createCanvas', 'parent': api, 'category': 'Canvas', 'paletteParams': ['id','width','height'], 'params': ['"id"', "320", "480"] },
  {'func': 'setActiveCanvas', 'parent': api, 'category': 'Canvas', 'paletteParams': ['id'], 'params': ['"id"'] },
  {'func': 'line', 'parent': api, 'category': 'Canvas', 'paletteParams': ['x1','y1','x2','y2'], 'params': ["0", "0", "160", "240"] },
  {'func': 'circle', 'parent': api, 'category': 'Canvas', 'paletteParams': ['x','y','radius'], 'params': ["160", "240", "100"] },
  {'func': 'rect', 'parent': api, 'category': 'Canvas', 'paletteParams': ['x','y','width','height'], 'params': ["80", "120", "160", "240"] },
  {'func': 'setStrokeWidth', 'parent': api, 'category': 'Canvas', 'paletteParams': ['width'], 'params': ["3"] },
  {'func': 'setStrokeColor', 'parent': api, 'category': 'Canvas', 'paletteParams': ['color'], 'params': ['"red"'], 'dropdown': { 0: [ '"red"', '"rgb(255,0,0)"', '"rgba(255,0,0,0.5)"', '"#FF0000"' ] } },
  {'func': 'setFillColor', 'parent': api, 'category': 'Canvas', 'paletteParams': ['color'], 'params': ['"yellow"'], 'dropdown': { 0: [ '"yellow"', '"rgb(255,255,0)"', '"rgba(255,255,0,0.5)"', '"#FFFF00"' ] } },
  {'func': 'drawImage', 'parent': api, 'category': 'Canvas', 'paletteParams': ['id','x','y'], 'params': ['"id"', "0", "0"] },
  {'func': 'getImageData', 'parent': api, 'category': 'Canvas', 'paletteParams': ['x','y','width','height'], 'params': ["0", "0", "320", "480"], 'type': 'value' },
  {'func': 'putImageData', 'parent': api, 'category': 'Canvas', 'paletteParams': ['imgData','x','y'], 'params': ["imgData", "0", "0"] },
  {'func': 'clearCanvas', 'parent': api, 'category': 'Canvas', },
  {'func': 'getRed', 'category': 'Canvas', 'paletteParams': ['imgData','x','y'], 'params': ["imgData", "0", "0"], 'type': 'value', 'dontMarshal': true },
  {'func': 'getGreen', 'category': 'Canvas', 'paletteParams': ['imgData','x','y'], 'params': ["imgData", "0", "0"], 'type': 'value', 'dontMarshal': true },
  {'func': 'getBlue', 'category': 'Canvas', 'paletteParams': ['imgData','x','y'], 'params': ["imgData", "0", "0"], 'type': 'value', 'dontMarshal': true },
  {'func': 'getAlpha', 'category': 'Canvas', 'paletteParams': ['imgData','x','y'], 'params': ["imgData", "0", "0"], 'type': 'value', 'dontMarshal': true },
  {'func': 'setRed', 'category': 'Canvas', 'paletteParams': ['imgData','x','y','r'], 'params': ["imgData", "0", "0", "255"], 'dontMarshal': true },
  {'func': 'setGreen', 'category': 'Canvas', 'paletteParams': ['imgData','x','y','g'], 'params': ["imgData", "0", "0", "255"], 'dontMarshal': true },
  {'func': 'setBlue', 'category': 'Canvas', 'paletteParams': ['imgData','x','y','b'], 'params': ["imgData", "0", "0", "255"], 'dontMarshal': true },
  {'func': 'setAlpha', 'category': 'Canvas', 'paletteParams': ['imgData','x','y','a'], 'params': ["imgData", "0", "0", "255"], 'dontMarshal': true },
  {'func': 'setRGB', 'category': 'Canvas', 'paletteParams': ['imgData','x','y','r','g','b'], 'params': ["imgData", "0", "0", "255", "255", "255"], 'dontMarshal': true },

  {'func': 'startWebRequest', 'parent': api, 'category': 'Data', 'paletteParams': ['url','callback'], 'params': ['"http://api.openweathermap.org/data/2.5/weather?q=London,uk"', "function(status, type, content) {\n  \n}"] },
  {'func': 'setKeyValue', 'parent': api, 'category': 'Data', 'paletteParams': ['key','value','callback'], 'params': ['"key"', '"value"', "function () {\n  \n}"] },
  {'func': 'getKeyValue', 'parent': api, 'category': 'Data', 'paletteParams': ['key','callback'], 'params': ['"key"', "function (value) {\n  \n}"] },
  {'func': 'createRecord', 'parent': api, 'category': 'Data', 'paletteParams': ['table','record','callback'], 'params': ['"mytable"', "{name:'Alice'}", "function(record) {\n  \n}"] },
  {'func': 'readRecords', 'parent': api, 'category': 'Data', 'paletteParams': ['table','terms','callback'], 'params': ['"mytable"', "{}", "function(records) {\n  for (var i =0; i < records.length; i++) {\n    textLabel('id', records[i].id + ': ' + records[i].name);\n  }\n}"] },
  {'func': 'updateRecord', 'parent': api, 'category': 'Data', 'paletteParams': ['table','record','callback'], 'params': ['"mytable"', "{id:1, name:'Bob'}", "function(record) {\n  \n}"] },
  {'func': 'deleteRecord', 'parent': api, 'category': 'Data', 'paletteParams': ['table','record','callback'], 'params': ['"mytable"', "{id:1}", "function() {\n  \n}"] },
  {'func': 'getUserId', 'parent': api, 'category': 'Data', type: 'value' },

  {'func': 'moveForward', 'parent': api, 'category': 'Turtle', 'paletteParams': ['pixels'], 'params': ["25"], 'dropdown': { 0: [ "25", "50", "100", "200" ] } },
  {'func': 'moveBackward', 'parent': api, 'category': 'Turtle', 'paletteParams': ['pixels'], 'params': ["25"], 'dropdown': { 0: [ "25", "50", "100", "200" ] } },
  {'func': 'move', 'parent': api, 'category': 'Turtle', 'paletteParams': ['x','y'], 'params': ["25", "25"], 'dropdown': { 0: [ "25", "50", "100", "200" ], 1: [ "25", "50", "100", "200" ] } },
  {'func': 'moveTo', 'parent': api, 'category': 'Turtle', 'paletteParams': ['x','y'], 'params': ["0", "0"] },
  {'func': 'dot', 'parent': api, 'category': 'Turtle', 'paletteParams': ['radius'], 'params': ["5"], 'dropdown': { 0: [ "1", "5", "10" ] } },
  {'func': 'turnRight', 'parent': api, 'category': 'Turtle', 'paletteParams': ['angle'], 'params': ["90"], 'dropdown': { 0: [ "30", "45", "60", "90" ] } },
  {'func': 'turnLeft', 'parent': api, 'category': 'Turtle', 'paletteParams': ['angle'], 'params': ["90"], 'dropdown': { 0: [ "30", "45", "60", "90" ] } },
  {'func': 'turnTo', 'parent': api, 'category': 'Turtle', 'paletteParams': ['angle'], 'params': ["0"], 'dropdown': { 0: [ "0", "90", "180", "270" ] } },
  {'func': 'arcRight', 'parent': api, 'category': 'Turtle', 'paletteParams': ['angle','radius'], 'params': ["90", "25"], 'dropdown': { 0: [ "30", "45", "60", "90" ], 1: [ "25", "50", "100", "200" ] } },
  {'func': 'arcLeft', 'parent': api, 'category': 'Turtle', 'paletteParams': ['angle','radius'], 'params': ["90", "25"], 'dropdown': { 0: [ "30", "45", "60", "90" ], 1: [ "25", "50", "100", "200" ] } },
  {'func': 'getX', 'parent': api, 'category': 'Turtle', 'type': 'value' },
  {'func': 'getY', 'parent': api, 'category': 'Turtle', 'type': 'value' },
  {'func': 'getDirection', 'parent': api, 'category': 'Turtle', 'type': 'value' },
  {'func': 'penUp', 'parent': api, 'category': 'Turtle' },
  {'func': 'penDown', 'parent': api, 'category': 'Turtle' },
  {'func': 'penWidth', 'parent': api, 'category': 'Turtle', 'paletteParams': ['width'], 'params': ["3"], 'dropdown': { 0: [ "1", "3", "5" ] } },
  {'func': 'penColor', 'parent': api, 'category': 'Turtle', 'paletteParams': ['color'], 'params': ['"red"'], 'dropdown': { 0: [ '"red"', '"rgb(255,0,0)"', '"rgba(255,0,0,0.5)"', '"#FF0000"' ] } },
  {'func': 'penRGB', 'parent': api, 'category': 'Turtle', 'paletteParams': ['r','g','b'], 'params': ["120", "180", "200"] },
  {'func': 'show', 'parent': api, 'category': 'Turtle' },
  {'func': 'hide', 'parent': api, 'category': 'Turtle' },
  {'func': 'speed', 'parent': api, 'category': 'Turtle', 'paletteParams': ['value'], 'params': ["50"], 'dropdown': { 0: [ "25", "50", "75", "100" ] } },

  {'func': 'setTimeout', 'parent': api, 'category': 'Control', 'type': 'either', 'paletteParams': ['callback','ms'], 'params': ["function() {\n  \n}", "1000"] },
  {'func': 'clearTimeout', 'parent': api, 'category': 'Control', 'paletteParams': ['__'], 'params': ["__"] },
  {'func': 'setInterval', 'parent': api, 'category': 'Control', 'type': 'either', 'paletteParams': ['callback','ms'], 'params': ["function() {\n  \n}", "1000"] },
  {'func': 'clearInterval', 'parent': api, 'category': 'Control', 'paletteParams': ['__'], 'params': ["__"] },

  {'func': 'console.log', 'category': 'Variables', 'paletteParams': ['message'], 'params': ['"message"'] },
  {'func': 'declareAssign_str_hello_world', 'block': 'var str = "Hello World";', 'category': 'Variables', 'noAutocomplete': true },
  {'func': 'substring', 'blockPrefix': 'str.substring', 'category': 'Variables', 'paletteParams': ['start','end'], 'params': ["6", "11"], 'modeOptionName': '*.substring' },
  {'func': 'indexOf', 'blockPrefix': 'str.indexOf', 'category': 'Variables', 'paletteParams': ['searchValue'], 'params': ['"World"'], 'modeOptionName': '*.indexOf' },
  {'func': 'length', 'block': 'str.length', 'category': 'Variables', 'modeOptionName': '*.length' },
  {'func': 'toUpperCase', 'blockPrefix': 'str.toUpperCase', 'category': 'Variables', 'modeOptionName': '*.toUpperCase' },
  {'func': 'toLowerCase', 'blockPrefix': 'str.toLowerCase', 'category': 'Variables', 'modeOptionName': '*.toLowerCase' },
  {'func': 'declareAssign_list_abde', 'block': 'var list = ["a", "b", "d", "e"];', 'category': 'Variables', 'noAutocomplete': true },
  {'func': 'listLength', 'block': 'list.length', 'category': 'Variables', 'noAutocomplete': true },
  {'func': 'insertItem', 'category': 'Variables', 'paletteParams': ['list','index','item'], 'params': ["list", "2", '"c"'], 'dontMarshal': true },
  {'func': 'appendItem', 'category': 'Variables', 'paletteParams': ['list','item'], 'params': ["list", '"f"'], 'dontMarshal': true },
  {'func': 'removeItem', 'category': 'Variables', 'paletteParams': ['list','index'], 'params': ["list", "0"], 'dontMarshal': true },

  {'func': 'imageUploadButton', 'parent': api, 'category': 'Advanced', 'params': ['"id"', '"text"'] },
  {'func': 'container', 'parent': api, 'category': 'Advanced', 'params': ['"id"', '"html"'] },
  {'func': 'innerHTML', 'parent': api, 'category': 'Advanced', 'params': ['"id"', '"html"'] },
  {'func': 'setParent', 'parent': api, 'category': 'Advanced', 'params': ['"id"', '"parentId"'] },
  {'func': 'setStyle', 'parent': api, 'category': 'Advanced', 'params': ['"id"', '"color:red;"'] },
  {'func': 'getAttribute', 'parent': api, 'category': 'Advanced', 'params': ['"id"', '"scrollHeight"'], 'type': 'value' },
  {'func': 'setAttribute', 'parent': api, 'category': 'Advanced', 'params': ['"id"', '"scrollHeight"', "200"]},
];

module.exports.categories = {
  'UI controls': {
    'color': 'yellow',
    'rgb': COLOR_YELLOW,
    'blocks': []
  },
  'Canvas': {
    'color': 'red',
    'rgb': COLOR_RED,
    'blocks': []
  },
  'Data': {
    'color': 'lightgreen',
    'rgb': COLOR_LIGHT_GREEN,
    'blocks': []
  },
  'Turtle': {
    'color': 'cyan',
    'rgb': COLOR_CYAN,
    'blocks': []
  },
  'Advanced': {
    'color': 'blue',
    'rgb': COLOR_BLUE,
    'blocks': []
  },
};


},{"./api":12}],12:[function(require,module,exports){
// APIs needed for droplet (keep in sync with apiBlockly.js):

exports.container = function (elementId, html) {
  return Applab.executeCmd(null,
                          'container',
                          {'elementId': elementId,
                           'html': html });
};

exports.write = function (html) {
  return Applab.executeCmd(null,
                          'write',
                          {'html': html });
};

exports.innerHTML = function (elementId, html) {
  return Applab.executeCmd(null,
                          'innerHTML',
                          {'elementId': elementId,
                           'html': html });
};

exports.deleteElement = function (elementId) {
  return Applab.executeCmd(null,
                          'deleteElement',
                          {'elementId': elementId });
};

exports.showElement = function (elementId) {
  return Applab.executeCmd(null,
                          'showElement',
                          {'elementId': elementId });
};

exports.hideElement = function (elementId) {
  return Applab.executeCmd(null,
                          'hideElement',
                          {'elementId': elementId });
};

exports.button = function (elementId, text) {
  return Applab.executeCmd(null,
                          'button',
                          {'elementId': elementId,
                           'text': text });
};

exports.image = function (elementId, src) {
  return Applab.executeCmd(null,
                          'image',
                          {'elementId': elementId,
                           'src': src });
};

exports.setPosition = function (elementId, left, top, width, height) {
  return Applab.executeCmd(null,
                          'setPosition',
                          {'elementId': elementId,
                           'left': left,
                           'top': top,
                           'width': width,
                           'height': height });
};

exports.getXPosition = function (elementId) {
  return Applab.executeCmd(null,
                          'getXPosition',
                          {'elementId': elementId });
};

exports.getYPosition = function (elementId) {
  return Applab.executeCmd(null,
                          'getYPosition',
                          {'elementId': elementId });
};

exports.createCanvas = function (elementId, width, height) {
  return Applab.executeCmd(null,
                          'createCanvas',
                          {'elementId': elementId,
                           'width': width,
                           'height': height });
};

exports.setActiveCanvas = function (elementId) {
  return Applab.executeCmd(null,
                          'setActiveCanvas',
                          {'elementId': elementId  });
};

exports.line = function (x1, y1, x2, y2) {
  return Applab.executeCmd(null,
                          'line',
                          {'x1': x1,
                           'y1': y1,
                           'x2': x2,
                           'y2': y2 });
};

exports.circle = function (x, y, radius) {
  return Applab.executeCmd(null,
                          'circle',
                          {'x': x,
                           'y': y,
                           'radius': radius });
};

exports.rect = function (x, y, width, height) {
  return Applab.executeCmd(null,
                          'rect',
                          {'x': x,
                           'y': y,
                           'width': width,
                           'height': height });
};

exports.setStrokeWidth = function (width) {
  return Applab.executeCmd(null,
                          'setStrokeWidth',
                          {'width': width });
};

exports.setStrokeColor = function (color) {
  return Applab.executeCmd(null,
                          'setStrokeColor',
                          {'color': color });
};

exports.setFillColor = function (color) {
  return Applab.executeCmd(null,
                          'setFillColor',
                          {'color': color });
};

exports.clearCanvas = function () {
  return Applab.executeCmd(null, 'clearCanvas');
};

exports.drawImage = function (imageId, x, y, width, height) {
  return Applab.executeCmd(null,
                          'drawImage',
                          {'imageId': imageId,
                           'x': x,
                           'y': y,
                           'width': width,
                           'height': height });
};

exports.getImageData = function (x, y, width, height) {
  return Applab.executeCmd(null,
                          'getImageData',
                          {'x': x,
                           'y': y,
                           'width': width,
                           'height': height });
};

exports.putImageData = function (imageData, x, y) {
  return Applab.executeCmd(null,
                          'putImageData',
                          {'imageData': imageData,
                           'x': x,
                           'y': y });
};

exports.textInput = function (elementId, text) {
  return Applab.executeCmd(null,
                          'textInput',
                          {'elementId': elementId,
                           'text': text });
};

exports.textLabel = function (elementId, text, forId) {
  return Applab.executeCmd(null,
                          'textLabel',
                          {'elementId': elementId,
                           'text': text,
                           'forId': forId });
};

exports.checkbox = function (elementId, checked) {
  return Applab.executeCmd(null,
                          'checkbox',
                          {'elementId': elementId,
                           'checked': checked });
};

exports.radioButton = function (elementId, checked, name) {
  return Applab.executeCmd(null,
                          'radioButton',
                          {'elementId': elementId,
                           'checked': checked,
                           'name': name });
};

exports.getChecked = function (elementId) {
  return Applab.executeCmd(null,
                          'getChecked',
                          {'elementId': elementId });
};

exports.setChecked = function (elementId, checked) {
  return Applab.executeCmd(null,
                          'setChecked',
                          {'elementId': elementId,
                           'checked': checked });
};

exports.dropdown = function (elementId) {
  var optionsArray = Array.prototype.slice.call(arguments, 1);
  return Applab.executeCmd(null,
                          'dropdown',
                          {'elementId': elementId,
                           'optionsArray': optionsArray });
};

exports.getAttribute = function(elementId, attribute) {
  return Applab.executeCmd(null,
                           'getAttribute',
                           {elementId: elementId,
                            attribute: attribute});
};

exports.setAttribute = function(elementId, attribute, value) {
  return Applab.executeCmd(null,
                           'setAttribute',
                           {elementId: elementId,
                            attribute: attribute,
                            value: value});
};

exports.getText = function (elementId) {
  return Applab.executeCmd(null,
                          'getText',
                          {'elementId': elementId });
};

exports.setText = function (elementId, text) {
  return Applab.executeCmd(null,
                          'setText',
                          {'elementId': elementId,
                           'text': text });
};

exports.getImageURL = function (elementId) {
  return Applab.executeCmd(null,
                          'getImageURL',
                          {'elementId': elementId });
};

exports.setImageURL = function (elementId, src) {
  return Applab.executeCmd(null,
                          'setImageURL',
                          {'elementId': elementId,
                           'src': src });
};

exports.imageUploadButton = function (elementId, text) {
  return Applab.executeCmd(null,
                           'imageUploadButton',
                           {'elementId': elementId,
                            'text': text });
};

exports.setParent = function (elementId, parentId) {
  return Applab.executeCmd(null,
                          'setParent',
                          {'elementId': elementId,
                           'parentId': parentId });
};

exports.setStyle = function (elementId, style) {
  return Applab.executeCmd(null,
                           'setStyle',
                           {'elementId': elementId,
                           'style': style });
};

exports.onEvent = function (elementId, eventName, func) {
  var extraArgs = Array.prototype.slice.call(arguments).slice(3);
  return Applab.executeCmd(null,
                          'onEvent',
                          {'elementId': elementId,
                           'eventName': eventName,
                           'func': func,
                           'extraArgs': extraArgs});
};

exports.startWebRequest = function (url, func) {
  return Applab.executeCmd(null,
                          'startWebRequest',
                          {'url': url,
                           'func': func });
};

exports.setTimeout = function (func, milliseconds) {
  return Applab.executeCmd(null,
                          'setTimeout',
                          {'func': func,
                           'milliseconds': milliseconds });
};

exports.clearTimeout = function (timeoutId) {
  return Applab.executeCmd(null,
                           'clearTimeout',
                           {'timeoutId': timeoutId });
};

exports.setInterval = function (func, milliseconds) {
  return Applab.executeCmd(null,
                          'setInterval',
                          {'func': func,
                           'milliseconds': milliseconds });
};

exports.clearInterval = function (intervalId) {
  return Applab.executeCmd(null,
                           'clearInterval',
                           {'intervalId': intervalId });
};

exports.playSound = function (url) {
  return Applab.executeCmd(null,
                          'playSound',
                          {'url': url});
};

exports.getKeyValue = function(key, onSuccess, onError) {
  return Applab.executeCmd(null,
                           'getKeyValue',
                           {'key':key,
                            'onSuccess': onSuccess,
                            'onError': onError});
};

exports.setKeyValue = function(key, value, onSuccess, onError) {
  return Applab.executeCmd(null,
                           'setKeyValue',
                           {'key':key,
                            'value': value,
                            'onSuccess': onSuccess,
                            'onError': onError});
};

exports.createRecord = function (table, record, onSuccess, onError) {
  return Applab.executeCmd(null,
                          'createRecord',
                          {'table': table,
                           'record': record,
                           'onSuccess': onSuccess,
                           'onError': onError});
};

exports.readRecords = function (table, searchParams, onSuccess, onError) {
  return Applab.executeCmd(null,
                          'readRecords',
                          {'table': table,
                           'searchParams': searchParams,
                           'onSuccess': onSuccess,
                           'onError': onError});
};

exports.updateRecord = function (table, record, onSuccess, onError) {
  return Applab.executeCmd(null,
                          'updateRecord',
                          {'table': table,
                           'record': record,
                           'onSuccess': onSuccess,
                           'onError': onError});
};

exports.deleteRecord = function (table, record, onSuccess, onError) {
  return Applab.executeCmd(null,
                          'deleteRecord',
                          {'table': table,
                           'record': record,
                           'onSuccess': onSuccess,
                           'onError': onError});
};

exports.getUserId = function () {
  return Applab.executeCmd(null,
                          'getUserId',
                          {});
};

exports.moveForward = function (distance) {
  return Applab.executeCmd(null,
                          'moveForward',
                          {'distance': distance });
};

exports.moveBackward = function (distance) {
  return Applab.executeCmd(null,
                          'moveBackward',
                          {'distance': distance });
};

exports.move = function (x, y) {
  return Applab.executeCmd(null,
                          'move',
                          {'x': x,
                           'y': y });
};

exports.moveTo = function (x, y) {
  return Applab.executeCmd(null,
                          'moveTo',
                          {'x': x,
                           'y': y });
};

exports.turnRight = function (degrees) {
  return Applab.executeCmd(null,
                          'turnRight',
                          {'degrees': degrees });
};

exports.turnLeft = function (degrees) {
  return Applab.executeCmd(null,
                          'turnLeft',
                          {'degrees': degrees });
};

exports.turnTo = function (direction) {
  return Applab.executeCmd(null,
                           'turnTo',
                           {'direction': direction });
};

exports.arcRight = function (degrees, radius) {
  return Applab.executeCmd(null,
                           'arcRight',
                           {'degrees': degrees,
                            'radius': radius });
};

exports.arcLeft = function (degrees, radius) {
  return Applab.executeCmd(null,
                           'arcLeft',
                           {'degrees': degrees,
                            'radius': radius });
};

exports.dot = function (radius) {
  return Applab.executeCmd(null,
                           'dot',
                           {'radius': radius });
};

exports.getX = function () {
  return Applab.executeCmd(null, 'getX');
};

exports.getY = function () {
  return Applab.executeCmd(null, 'getY');
};

exports.getDirection = function () {
  return Applab.executeCmd(null, 'getDirection');
};

exports.penUp = function () {
  return Applab.executeCmd(null, 'penUp');
};

exports.penDown = function () {
  return Applab.executeCmd(null, 'penDown');
};

exports.show = function () {
  return Applab.executeCmd(null, 'show');
};

exports.hide = function () {
  return Applab.executeCmd(null, 'hide');
};

exports.speed = function (percent) {
  return Applab.executeCmd(null,
                           'speed',
                           {'percent': percent});
};

exports.penWidth = function (width) {
  return Applab.executeCmd(null,
                          'penWidth',
                          {'width': width });
};

exports.penColor = function (color) {
  return Applab.executeCmd(null,
                          'penColor',
                          {'color': color });
};

exports.penRGB = function (r, g, b, a) {
  return Applab.executeCmd(null,
                          'penRGB',
                          {'r': r,
                           'g': g,
                           'b': b,
                           'a': a });
};

exports.insertItem = function (array, index, item) {
  return Applab.executeCmd(null,
                          'insertItem',
                          {'array': array,
                           'index': index,
                           'item': item });
};

exports.appendItem = function (array, item) {
  return Applab.executeCmd(null,
                          'appendItem',
                          {'array': array,
                           'item': item });
};

exports.removeItem = function (array, index) {
  return Applab.executeCmd(null,
                          'removeItem',
                          {'array': array,
                           'index': index });
};



},{}],9:[function(require,module,exports){
var errorMapper = require('./errorMapper');

var annotations = [];
var aceSession;

/**
 * Update gutter with our annotation list
 * @private
 */
function updateGutter() {
  if (!aceSession) {
    return;
  }
  aceSession.setAnnotations(annotations);
}

/**
 * Object for tracking annotations placed in gutter. General design is as
 * follows:
 * When jslint runs (i.e. code changes) display just jslint errors
 * When code runs, display jslint errors and runtime errors. Runtime errors will
 * go away the next time jstlint gets run (when code changes)
 */
module.exports = {
  detachFromSession: function () {
    aceSession = null;
  },
  
  attachToSession: function (session) {
    if (aceSession && session !== aceSession) {
      throw new Error('Already attached to ace session');
    }
    aceSession = session;
  },

  setJSLintAnnotations: function (jslintResults) {
    errorMapper.processResults(jslintResults);
    // clone annotations in case anyone else has a reference to data
    annotations = jslintResults.data.slice();
    updateGutter();
  },

  /**
   * @param {string} level
   * @param {number} lineNumber One index line number
   * @param {string} text Error string
   */
  addRuntimeAnnotation: function (level, lineNumber, text) {
    var annotation = {
      row: lineNumber - 1,
      col: 0,
      raw: text,
      text: text,
      type: level.toLowerCase()
    };
    annotations.push(annotation);
    updateGutter();
  },
};


},{"./errorMapper":10}],10:[function(require,module,exports){
var errorMap = [
  {
    original: /Assignment in conditional expression/,
    replacement: "For conditionals, use the comparison operator (===) to check if two things are equal."
  },
  {
    original: /(.*)\sis defined but never used./,
    replacement: "$1 is defined, but it's not called in your program."
  },
  {
    original: /(.*)\sis not defined./,
    replacement: "$1 hasn't been declared yet."
  }
];

/**
 * Takes the results of a JSLint pass, and modifies the error text according to
 * our mapping. Note this makes changes in place to the passed in results
 * object.
 */
module.exports.processResults = function (results) {
  results.data.forEach(function (item) {
    if (item.type === 'info') {
      item.type = 'warning';
    }

    errorMap.forEach(function (errorMapping) {
      if (!errorMapping.original.test(item.text)) {
        return;
      }

      item.text = item.text.replace(errorMapping.original, errorMapping.replacement);
    });
  });
};


},{}]},{},[50]);
