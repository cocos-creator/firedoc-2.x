
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.


### File: `tests/input/charts/EllipseGroup.js`

```js
/**
 * Abstract class for creating groups of diamonds with the same styles and dimensions.
 *
 * @module graphics
 * @class EllipseGroup
 * @constructor
 */
 EllipseGroup = function(cfg)
 {
    EllipseGroup.superclass.constructor.apply(this, arguments);
 };
    
 EllipseGroup.NAME = "diamondGroup";

 Y.extend(EllipseGroup, Y.ShapeGroup, {    
    /**
     * Updates the diamond.
     *
     * @method _draw
     * @private
     */
    drawShape: function(cfg)
    {
        this.drawEllipse(cfg.x, cfg.y, cfg.width, cfg.height);
    }
 });
    
EllipseGroup.ATTRS = Y.ShapeGroup.ATTRS;
Y.EllipseGroup = EllipseGroup;

```
