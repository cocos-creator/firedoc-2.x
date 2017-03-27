/**
 * @module tags
 * @main tags
 */

module.exports =

[
  
  /**
   * @property {Boolean} async - Custom events can fire the listeners in a setTimeout
   */
  "async",
  
  /**
   * @property {String} author - Author best for projects and modules, but can be used anywhere // multi
   */
  "author",
  
  /**
   * @property {String} attribute - YUI attributes -- get/set with change notification, etc
   */
  "attribute",
  
  /**
   * @property {Boolean} beta - Module maturity identifier
   */
  "beta",

  /**
   * @property {Boolean} broadcast - for Events
   */
  "broadcast",
  
  /**
   * @property {Boolean} bubbles - Custom events that bubbles
   */
  "bubbles",
  
  /**
   * @property {String} callback - Callback definitions
   * @example
   * ```
   * \@callback Example
   * \@param {Error} err - The error
   * \@param {Result} res - The result
   * ```
   */
  "callback",

  /**
   * @property {String} category - Modules can be in multiple categories
   */
  "category",

  /**
   * @property {Boolean} chainable - Methods that return the host object
   */
  "chainable",

  /**
   * @property {String} class - The pesudo class
   */
  "class",

  /**
   * @property {Boolean} conditional - Conditional module
   */
  "conditional",

  /**
   * @property {String} config - A config param (not an attribute, so no change events)
   */
  "config",

  /**
   * @property {Boolean} const - Not standardized yet, converts to final property
   */
  "const",

  /**
   * @property {String} constructs - Factory methods (not yet used)
   */
  "constructs",

  /**
   * @property {Boolean} constructor - This is a constructor function for class
   */
  "constructor",

  /**
   * @property {String} contributor - like [@author](firedoc.tags)
   */
  "contributor",

  /**
   * @property {Boolean} default - Property/Attribute default value
   */
  "default",

  /**
   * @property {Boolean} deprecated - Please specify what to use instead
   */
  "deprecated",

  /**
   * @property {String} description - Can also be free text at the beginning of a comment is
   */
  "description",

  /**
   * @property {Boolean} YUI custom event can have a dom-like event facade
   */
  "emitfacade",

  /**
   * @property {String} enum - Pseudo enum
   */
  "enum",

  /**
   * @property {String} event - YUI custom event
   */
  "event",

  /**
   * @property {Boolean} evil - Uses eval
   */
  "evil",

  /**
   * @property {String} extension - This is an extension for [entity]
   */
  "extension",

  /**
   * @property {String} extensionfor - This is an extension for [entity]
   */
  "extensionfor",

  /**
   * @property {String} extension_for - This is an extension for [entity]
   */
  "extension_for",

  /**
   * @property {String} example - 0..n code snippets.  snippets can also be embedded in the desc
   */
  "example",

  /**
   * @property {Boolean} experimental - Module maturity identifier
   */
  "experimental",

  /**
   * @property {String} extends - Pseudo inheritance
   */
  "extends",

  /**
   * @property {String} file - Filename (used by the parser)
   */
  "file",

  /**
   * @property {String} final - Not meant to be changed
   */
  "final",

  /**
   * @property {Boolean} fireonce - YUI custom event config allows
   */
  "fireonce",

  /**
   * @property {String} for - Used to change class context
   */
  "for",

  /**
   * @property {Boolean} global - Declare your globals
   */
  "global",

  /**
   * @property {String} icon - Project icon(s)
   */
  "icon",

  /**
   * @property {String} in - Indicates module this lives in (obsolete now)
   */
  "in",

  /**
   * @property {String} initonly - Attribute writeonce value
   */
  "initonly",

  /**
   * @property {String} injects - Injects {HTML|script|CSS}
   */
  "injects",

  /**
   * @property {String} knownissue - 0..n known issues for your consumption
   */
  "knownissue",

  /**
   * @property {Number} line - Line number for the comment block (used by the parser)
   */
  "line",

  /**
   * @property {String} method - A method
   */
  "method",

  /**
   * @property {String} module - YUI module name
   */
  "module",

  /**
   * @property {String} main - Description for the module
   */
  "main",

  /**
   * @property {String} optional - For optional attributes
   */
  "optional",
  
  /**
   * @property {String} required - For required attributes
   */
  "required",
  
  /**
   * @property {String} param - function parameters
   */
  "param",

  /**
   * @property {String} plugin - this is a plugin for [entityl]
   */
  "plugin",

  /**
   * @property {Boolean} preventable - YUI custom events can be preventable ala DOM events
   */
  "preventable",

  /**
   * @property {Boolean} private - the private member
   */
  "private",

  /**
   * @property {Boolean} hide - hide in navigation list
   */

  "hide",

  /**
   * @property {String} process - instance runtime
   */
  'process',

  /**
   * @property {String} project - Project definition, one per source tree allowed
   */
  "project",

  /**
   * @property {String} logo - Project logo
   */
  'logo',

  /**
   * @property {String} property - A regular-ole property
   */
  "property",

  /**
   * @property {Boolean} protected - Access
   */
  "protected",

  /**
   * @property {Boolean} public - Access
   */
  "public",

  /**
   * @property {Boolean} queuable - Queuable event
   */
  "queuable",

  /**
   * @property {String} requires - YUI module requirements
   */
  "requires",

  /**
   * @property {String} return - Returns is converted to this
   */
  "return",

  /**
   * @property {String} see - 0..n things to look at
   */
  "see",

  /**
   * @property {Date} since - When it was introduced
   */
  "since",

  /**
   * @property {Boolean} static - Static member under class
   */
  "static",

  /**
   * @property {String} submodule - YUI submodule
   */
  "submodule",

  /**
   * @property {String} throws - {execption type} description
   */
  "throws",

  /**
   * @property {String} title - this should be something for the project description
   */
  "title",

  /**
   * @property {Array} todo - 0..n things to revisit eventually (hopefully)
   */
  "todo",

  /**
   * @property {String} type - The var type
   */
  "type",

  /**
   * @property {String} url - Project urls
   */
  "url",

  /**
   * @property {Array} uses - 0..n compents mixed (usually, via augment) into the prototype
   */
  "uses",

  /**
   * @property {String} value - The value of a constant
   */
  "value",

  /**
   * @property {String} writeonce - YUI attribute config
   */
  "writeonce"

];