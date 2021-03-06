/* jshint
 funcscope: true,
 newcap: true,
 nonew: true,
 shadow: false,
 unused: true,

 maxlen: 90,
 maxstatements: 200
 */
'use strict';

var jQuerySvgElement = require('./netsimUtils').jQuerySvgElement;
var tweens = require('./tweens');

/**
 * A VizElement is an object that  has a representation in the network
 * visualization.  Its role is to maintain that visual representation.
 * A VizElement has helpers for positioning, scaling and tweening.
 * Every VizElement has a root element which is a <g> tag, an SVG "group"
 * that contains the other components that will actually draw.
 *
 * @constructor
 */
var NetSimVizElement = module.exports =  function () {
  /**
   * @type {number}
   */
  this.posX = 0;

  /**
   * @type {number}
   */
  this.posY = 0;

  /**
   * @type {number}
   */
  this.scale = 1;

  /**
   * @type {boolean}
   */
  this.isForeground = false;

  /**
   * Root SVG <g> (group) element for this object.
   * @type {jQuery}
   * @private
   */
  this.rootGroup_ = jQuerySvgElement('g');

  /**
   * Set of tweens we should currently be running on this node.
   * Processed by tick()
   * @type {Array.<exports.TweenValueTo>}
   * @private
   */
  this.tweens_ = [];

  /**
   * @type {boolean}
   * @private
   */
  this.isDead_ = false;
};

/**
 * @returns {jQuery} wrapper around root <g> element
 */
NetSimVizElement.prototype.getRoot = function () {
  return this.rootGroup_;
};

/**
 * Begins the process of destroying this VizElement.  Once started, this
 * process cannot be stopped.
 * This method can be overridden to trigger an "on-death" animation.
 */
NetSimVizElement.prototype.kill = function () {
  this.isDead_ = true;
};

/**
 * @returns {boolean} whether this entity is done with its death animation
 *          and is ready to be cleaned up by the visualization manager.
 *          The default implementation here returns TRUE as soon as kill()
 *          is called and all animations are completed.
 */
NetSimVizElement.prototype.isDead = function () {
  return this.isDead_ && this.tweens_.length === 0;
};

/**
 * @returns {boolean} whether this entity is playing its final animation
 *          and will be ready to be cleaned up by the visualization manager
 *          soon.
 */
NetSimVizElement.prototype.isDying = function () {
  return this.isDead_ && this.tweens_.length > 0;
};

/**
 * Update all of the tweens currently running on this VizElement (which will
 * probably modify its properties) and then remove any tweens that are completed
 * from the list.
 * @param {RunLoop.Clock} clock
 */
NetSimVizElement.prototype.tick = function (clock) {
  this.tweens_.forEach(function (tween) {
    tween.tick(clock);
  });
  this.tweens_ = this.tweens_.filter(function (tween) {
    return !tween.isFinished;
  });
};

/**
 * Update the root group's properties to reflect our current position
 * and scale.
 */
NetSimVizElement.prototype.render = function () {
  // TODO (bbuchanan): Use a dirty flag to only update the DOM when it's
  //                   out of date.
  var transform = 'translate(' + this.posX + ' ' + this.posY + ')' +
      ' scale(' + this.scale + ')';
  this.rootGroup_.attr('transform', transform);
};

/**
 * @param {boolean} isForeground
 */
NetSimVizElement.prototype.onDepthChange = function (isForeground) {
  this.isForeground = isForeground;
};

/**
 * Throw away all existing tweens on this object.
 */
NetSimVizElement.prototype.stopAllAnimation = function () {
  this.tweens_.length = 0;
};

/**
 * Stops any existing motion animation and begins an animated motion to the
 * given coordinates.  Note: This animates the VizElement's root group.
 * @param {number} newX given in SVG points
 * @param {number} newY given in SVG points
 * @param {number} [duration=600] in milliseconds
 * @param {TweenFunction} [tweenFunction=linear]
 */
NetSimVizElement.prototype.tweenToPosition = function (newX, newY, duration,
    tweenFunction) {
  // Remove any existing tweens controlling posX or posY
  this.removeAllTweensOnProperties(['posX', 'posY']);

  // Add two new tweens, one for each axis
  if (duration > 0) {
    this.tweens_.push(new tweens.TweenValueTo(this, 'posX', newX, duration,
        tweenFunction));
    this.tweens_.push(new tweens.TweenValueTo(this, 'posY', newY, duration,
        tweenFunction));
  } else {
    this.posX = newX;
    this.posY = newY;
  }

};

/**
 * Alias for calling tweenToPosition with a zero duration
 * @param {number} newX given in SVG points
 * @param {number} newY given in SVG points
 */
NetSimVizElement.prototype.snapToPosition = function (newX, newY) {
  this.tweenToPosition(newX, newY, 0);
};

/**
 * Stops any existing animation of the entity's scale and begins an animated
 * change to the given target scale value.  Note: this animates the VizElement's
 * root group.
 * @param {number} newScale where 1.0 is 100% (unscaled)
 * @param {number} [duration=600] in milliseconds
 * @param {TweenFunction} [tweenFunction=linear]
 */
NetSimVizElement.prototype.tweenToScale = function (newScale, duration,
    tweenFunction) {
  // Remove existing scale tweens
  this.removeAllTweensOnProperty('scale');

  // On nonzero duration, add tween to target scale.  Otherwise just set it.
  if (duration > 0) {
    this.tweens_.push(new tweens.TweenValueTo(this, 'scale', newScale, duration,
        tweenFunction));
  } else {
    this.scale = newScale;
  }
};

NetSimVizElement.prototype.doAfterDelay = function (delay, callback) {
  if (delay > 0) {
    this.tweens_.push(new tweens.DoAfterDelay(this, delay, callback));
  } else {
    callback();
  }
};

/**
 * Remove (stop) all active tweens that control the given property on this
 * visualization entity.
 * @param {string} propertyName
 */
NetSimVizElement.prototype.removeAllTweensOnProperty = function (propertyName) {
  this.removeAllTweensOnProperties([propertyName]);
};

/**
 * Remove (stop) all active tweens that control any of the given properties
 * on this visualization entity.
 * @param {string[]} propertyNames
 */
NetSimVizElement.prototype.removeAllTweensOnProperties = function (propertyNames) {
  this.tweens_ = this.tweens_.filter(function (tween) {
    var targetsThisEntity = tween.target === this;
    var isRemovableProperty = propertyNames.some(function (name) {
      return tween.propertyName === name;
    });

    // Invert for filter() because we want to keep everything BUT the matched
    // properties
    return !(targetsThisEntity && isRemovableProperty);
  }, this);
};

/**
 * Alias for calling tweenToScale with a zero duration.
 * @param {number} newScale where 1.0 is 100% (unscaled)
 */
NetSimVizElement.prototype.snapToScale = function (newScale) {
  this.tweenToScale(newScale, 0);
};
