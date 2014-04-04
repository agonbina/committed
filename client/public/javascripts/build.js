/******/ (function(modules) { // webpackBootstrap
/******/ 	
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/ 		
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/ 		
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 		
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 		
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/ 	
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1),
	    Backbone = __webpack_require__(6),
	    Parse = __webpack_require__(5).Parse,
	    User = __webpack_require__(2);

	/**
	 * Helper: set history fragment
	 * @param route
	 * @param options
	 */

	CommittedApp.navigate = function (route, options) {
	    options || (options = {});
	    Backbone.history.navigate(route, options);
	};

	/**
	 * Helper: get current history fragment
	 */

	CommittedApp.getCurrentRoute = function () {
	    return Backbone.history.fragment;
	};

	/**
	 * App regions
	 */

	CommittedApp.addRegions({
	    mainRegion: '#main-region'
	});

	/**
	 * Initialize Parse
	 */

	CommittedApp.addInitializer(function () {
	    Parse.initialize("BM7C5y6YaGzi31m1zoy2FiORwlqm7hPAeuj6Hrmz", "HytjMDhS0rOMTY0jY9Fi8J7x4fBGGim4ddrXMEkm");
	});

	/**
	 * Start the sub-apps needed at runtime
	 */

	CommittedApp.addInitializer(function () {
	    var AuthenticationApp = __webpack_require__(3),
	        ProjectsApp = __webpack_require__(4);

	    AuthenticationApp.start();
	    ProjectsApp.start();
	});

	CommittedApp.on('initialize:after', function () {
	    if (Backbone.history) {
	        Backbone.history.start();

	        if (CommittedApp.getCurrentRoute() === '') {
	            CommittedApp.trigger('projects:list');
	        }
	    }
	});

	CommittedApp.start();




/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var Marionette = __webpack_require__(12);
	var Backbone = __webpack_require__(6);
	var CommittedApp = new Marionette.Application();

	// Configure the reqres handlers in one place
	__webpack_require__(7)(CommittedApp.reqres);

	// Attach the global app events
	__webpack_require__(8)(CommittedApp);

	// Load any configurations/extensions of Backbone and Marionette
	//require('./config/marionette/router');

	__webpack_require__(13);
	__webpack_require__(18);
	__webpack_require__(14);
	_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

	module.exports = CommittedApp;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var CommittedApp = __webpack_require__(1),
	    Parse = __webpack_require__(5).Parse;

	CommittedApp.module('Entities', function (Entities, CommittedApp, Backbone, Marionette, $, _) {
	    Entities.User = Parse.User.extend({
	        validation: {
	            email: {
	                required: true,
	                pattern: 'email',
	                msg: 'No e-mail, no fun :)'
	            },
	            password: {
	                required: true,
	                msg: 'Come on, no password? :('
	            }
	        }
	    });

	    module.exports = Entities.User;
	});



/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1);

	/**
	 * AuthApp module
	 */

	CommittedApp.module('AuthApp', function (AuthApp, CommittedApp, Backbone, Marionette, $, _) {

	    AuthApp.startWithParent = false;

	    AuthApp.onBeforeStart = function () {
	        __webpack_require__(9);
	    };

	    AuthApp.onStart = function () {
	        console.log('starting AuthApp');
	    };

	    AuthApp.onStop = function () {
	        console.log('stopping AuthApp');
	    };

	    module.exports = AuthApp;
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1);

	/**
	 * ProjectsApp module
	 */

	CommittedApp.module('ProjectsApp', function (ProjectsApp, CommittedApp, Backbone, Marionette, $, _) {

	    ProjectsApp.startWithParent = false;

	    ProjectsApp.onBeforeStart = function () {
	        __webpack_require__(10);
	    };

	    ProjectsApp.onStart = function () {
	        console.log('starting ProjectsApp');
	    };

	    ProjectsApp.onStop = function () {
	        console.log('stopping ProjectsApp');
	    };

	    module.exports = ProjectsApp;
	});



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, _) {/*!
	 * Parse JavaScript SDK
	 * Version: 1.2.17
	 * Built: Fri Feb 21 2014 17:32:23
	 * http://parse.com
	 *
	 * Copyright 2014 Parse, Inc.
	 * The Parse JavaScript SDK is freely distributable under the MIT license.
	 *
	 */

	/*global _: false, $: false, localStorage: false, process: true,
	 XMLHttpRequest: false, XDomainRequest: false, exports: false,
	 require: false */
	(function (root) {
	    root.Parse = root.Parse || {};
	    /**
	     * Contains all Parse API classes and functions.
	     * @name Parse
	     * @namespace
	     *
	     * Contains all Parse API classes and functions.
	     */
	    var Parse = root.Parse;

	    // **************************************************
	    // Modified to use browser XMLHttpRequest instead of npm module
	    // Also uses browser localStorage instead of the npm module
	    // **************************************************
	    if (true) {
	        if (typeof(localStorage) !== "undefined") {
	            Parse.localStorage = localStorage;
	        }
	        if (typeof(XMLHttpRequest) !== "undefined") {
	            Parse.XMLHttpRequest = XMLHttpRequest;
	        }

	        Parse._ = __webpack_require__(11);
	        Parse.$ = __webpack_require__(15);

	        exports.Parse = Parse;
	    }
	    // **************************************************

	    // Helpers
	    // -------

	    // Shared empty constructor function to aid in prototype-chain creation.
	    var EmptyConstructor = function () {
	    };


	    // Helper function to correctly set up the prototype chain, for subclasses.
	    // Similar to `goog.inherits`, but uses a hash of prototype properties and
	    // class properties to be extended.
	    var inherits = function (parent, protoProps, staticProps) {
	        var child;

	        // The constructor function for the new subclass is either defined by you
	        // (the "constructor" property in your `extend` definition), or defaulted
	        // by us to simply call the parent's constructor.
	        if (protoProps && protoProps.hasOwnProperty('constructor')) {
	            child = protoProps.constructor;
	        } else {
	            /** @ignore */
	            child = function () {
	                parent.apply(this, arguments);
	            };
	        }

	        // Inherit class (static) properties from parent.
	        Parse._.extend(child, parent);

	        // Set the prototype chain to inherit from `parent`, without calling
	        // `parent`'s constructor function.
	        EmptyConstructor.prototype = parent.prototype;
	        child.prototype = new EmptyConstructor();

	        // Add prototype properties (instance properties) to the subclass,
	        // if supplied.
	        if (protoProps) {
	            Parse._.extend(child.prototype, protoProps);
	        }

	        // Add static properties to the constructor function, if supplied.
	        if (staticProps) {
	            Parse._.extend(child, staticProps);
	        }

	        // Correctly set child's `prototype.constructor`.
	        child.prototype.constructor = child;

	        // Set a convenience property in case the parent's prototype is
	        // needed later.
	        child.__super__ = parent.prototype;

	        return child;
	    };

	    // Set the server for Parse to talk to.
	    Parse.serverURL = "https://api.parse.com";

	    // Check whether we are running in Node.js.
	    if (typeof(process) !== "undefined" &&
	        process.versions &&
	        process.versions.node) {
	        Parse._isNode = true;
	    }

	    /**
	     * Call this method first to set up your authentication tokens for Parse.
	     * You can get your keys from the Data Browser on parse.com.
	     * @param {String} applicationId Your Parse Application ID.
	     * @param {String} javaScriptKey Your Parse JavaScript Key.
	     * @param {String} masterKey (optional) Your Parse Master Key. (Node.js only!)
	     */
	    Parse.initialize = function (applicationId, javaScriptKey, masterKey) {
	        if (masterKey) {
	            throw "Parse.initialize() was passed a Master Key, which is only " +
	                "allowed from within Node.js.";
	        }
	        Parse._initialize(applicationId, javaScriptKey);
	    };

	    /**
	     * Call this method first to set up master authentication tokens for Parse.
	     * This method is for Parse's own private use.
	     * @param {String} applicationId Your Parse Application ID.
	     * @param {String} javaScriptKey Your Parse JavaScript Key.
	     * @param {String} masterKey Your Parse Master Key.
	     */
	    Parse._initialize = function (applicationId, javaScriptKey, masterKey) {
	        Parse.applicationId = applicationId;
	        Parse.javaScriptKey = javaScriptKey;
	        Parse.masterKey = masterKey;
	        Parse._useMasterKey = false;
	    };

	    // If we're running in node.js, allow using the master key.
	    if (Parse._isNode) {
	        Parse.initialize = Parse._initialize;

	        Parse.Cloud = Parse.Cloud || {};
	        /**
	         * Switches the Parse SDK to using the Master key.  The Master key grants
	         * priveleged access to the data in Parse and can be used to bypass ACLs and
	         * other restrictions that are applied to the client SDKs.
	         * <p><strong><em>Available in Cloud Code and Node.js only.</em></strong>
	         * </p>
	         */
	        Parse.Cloud.useMasterKey = function () {
	            Parse._useMasterKey = true;
	        };
	    }

	    /**
	     * Returns prefix for localStorage keys used by this instance of Parse.
	     * @param {String} path The relative suffix to append to it.
	     *     null or undefined is treated as the empty string.
	     * @return {String} The full key name.
	     */
	    Parse._getParsePath = function (path) {
	        if (!Parse.applicationId) {
	            throw "You need to call Parse.initialize before using Parse.";
	        }
	        if (!path) {
	            path = "";
	        }
	        if (!Parse._.isString(path)) {
	            throw "Tried to get a localStorage path that wasn't a String.";
	        }
	        if (path[0] === "/") {
	            path = path.substring(1);
	        }
	        return "Parse/" + Parse.applicationId + "/" + path;
	    };

	    /**
	     * Returns the unique string for this app on this machine.
	     * Gets reset when localStorage is cleared.
	     */
	    Parse._installationId = null;
	    Parse._getInstallationId = function () {
	        // See if it's cached in RAM.
	        if (Parse._installationId) {
	            return Parse._installationId;
	        }

	        // Try to get it from localStorage.
	        var path = Parse._getParsePath("installationId");
	        Parse._installationId = Parse.localStorage.getItem(path);

	        if (!Parse._installationId || Parse._installationId === "") {
	            // It wasn't in localStorage, so create a new one.
	            var hexOctet = function () {
	                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	            };
	            Parse._installationId = (
	                hexOctet() + hexOctet() + "-" +
	                    hexOctet() + "-" +
	                    hexOctet() + "-" +
	                    hexOctet() + "-" +
	                    hexOctet() + hexOctet() + hexOctet());
	            Parse.localStorage.setItem(path, Parse._installationId);
	        }

	        return Parse._installationId;
	    };

	    Parse._parseDate = function (iso8601) {
	        var regexp = new RegExp(
	            "^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})" + "T" +
	                "([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})" +
	                "(.([0-9]+))?" + "Z$");
	        var match = regexp.exec(iso8601);
	        if (!match) {
	            return null;
	        }

	        var year = match[1] || 0;
	        var month = (match[2] || 1) - 1;
	        var day = match[3] || 0;
	        var hour = match[4] || 0;
	        var minute = match[5] || 0;
	        var second = match[6] || 0;
	        var milli = match[8] || 0;

	        return new Date(Date.UTC(year, month, day, hour, minute, second, milli));
	    };

	    Parse._ajaxIE8 = function (method, url, data) {
	        var promise = new Parse.Promise();
	        var xdr = new XDomainRequest();
	        xdr.onload = function () {
	            var response;
	            try {
	                response = JSON.parse(xdr.responseText);
	            } catch (e) {
	                promise.reject(e);
	            }
	            if (response) {
	                promise.resolve(response);
	            }
	        };
	        xdr.onerror = xdr.ontimeout = function () {
	            // Let's fake a real error message.
	            var fakeResponse = {
	                responseText: JSON.stringify({
	                    code: Parse.Error.X_DOMAIN_REQUEST,
	                    error: "IE's XDomainRequest does not supply error info."
	                })
	            };
	            promise.reject(fakeResponse);
	        };
	        xdr.onprogress = function () {
	        };
	        xdr.open(method, url);
	        xdr.send(data);
	        return promise;
	    };

	    Parse._useXDomainRequest = function () {
	        if (typeof(XDomainRequest) !== "undefined") {
	            // We're in IE 8+.
	            if ('withCredentials' in new XMLHttpRequest()) {
	                // We're in IE 10+.
	                return false;
	            }
	            return true;
	        }
	        return false;
	    };


	    Parse._ajax = function (method, url, data, success, error) {
	        var options = {
	            success: success,
	            error: error
	        };

	        if (Parse._useXDomainRequest()) {
	            return Parse._ajaxIE8(method, url, data)._thenRunCallbacks(options);
	        }

	        var promise = new Parse.Promise();
	        var handled = false;

	        var xhr = new Parse.XMLHttpRequest();
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState === 4) {
	                if (handled) {
	                    return;
	                }
	                handled = true;

	                if (xhr.status >= 200 && xhr.status < 300) {
	                    var response;
	                    try {
	                        response = JSON.parse(xhr.responseText);
	                    } catch (e) {
	                        promise.reject(e);
	                    }
	                    if (response) {
	                        promise.resolve(response, xhr.status, xhr);
	                    }
	                } else {
	                    promise.reject(xhr);
	                }
	            }
	        };
	        xhr.open(method, url, true);
	        xhr.setRequestHeader("Content-Type", "text/plain");  // avoid pre-flight.
	        if (Parse._isNode) {
	            // Add a special user agent just for request from node.js.
	            xhr.setRequestHeader("User-Agent",
	                "Parse/" + Parse.VERSION +
	                    " (NodeJS " + process.versions.node + ")");
	        }
	        xhr.send(data);
	        return promise._thenRunCallbacks(options);
	    };

	    // A self-propagating extend function.
	    Parse._extend = function (protoProps, classProps) {
	        var child = inherits(this, protoProps, classProps);
	        child.extend = this.extend;
	        return child;
	    };

	    /**
	     * Options:
	     *   route: is classes, users, login, etc.
	     *   objectId: null if there is no associated objectId.
	     *   method: the http method for the REST API.
	     *   dataObject: the payload as an object, or null if there is none.
	     *   useMasterKey: overrides whether to use the master key if set.
	     * @ignore
	     */
	    Parse._request = function (options) {
	        var route = options.route;
	        var className = options.className;
	        var objectId = options.objectId;
	        var method = options.method;
	        var useMasterKey = options.useMasterKey;
	        var sessionToken = options.sessionToken;
	        var dataObject = options.data;

	        if (!Parse.applicationId) {
	            throw "You must specify your applicationId using Parse.initialize.";
	        }

	        if (!Parse.javaScriptKey && !Parse.masterKey) {
	            throw "You must specify a key using Parse.initialize.";
	        }


	        if (!sessionToken) {
	            // Use the current user session token if none was provided.
	            var currentUser = Parse.User.current();
	            if (currentUser && currentUser._sessionToken) {
	                sessionToken = currentUser._sessionToken;
	            }
	        }


	        if (route !== "batch" &&
	            route !== "classes" &&
	            route !== "events" &&
	            route !== "files" &&
	            route !== "functions" &&
	            route !== "login" &&
	            route !== "push" &&
	            route !== "requestPasswordReset" &&
	            route !== "rest_verify_analytics" &&
	            route !== "users" &&
	            route !== "jobs") {
	            throw "Bad route: '" + route + "'.";
	        }

	        var url = Parse.serverURL;
	        if (url.charAt(url.length - 1) !== "/") {
	            url += "/";
	        }
	        url += "1/" + route;
	        if (className) {
	            url += "/" + className;
	        }
	        if (objectId) {
	            url += "/" + objectId;
	        }

	        dataObject = Parse._.clone(dataObject || {});
	        if (method !== "POST") {
	            dataObject._method = method;
	            method = "POST";
	        }

	        if (Parse._.isUndefined(useMasterKey)) {
	            useMasterKey = Parse._useMasterKey;
	        }

	        dataObject._ApplicationId = Parse.applicationId;
	        if (!useMasterKey) {
	            dataObject._JavaScriptKey = Parse.javaScriptKey;
	        } else {
	            dataObject._MasterKey = Parse.masterKey;
	        }

	        dataObject._ClientVersion = Parse.VERSION;
	        dataObject._InstallationId = Parse._getInstallationId();
	        if (sessionToken) {
	            dataObject._SessionToken = sessionToken;
	        }
	        var data = JSON.stringify(dataObject);

	        return Parse._ajax(method, url, data).then(null, function (response) {
	            // Transform the error into an instance of Parse.Error by trying to parse
	            // the error string as JSON.
	            var error;
	            if (response && response.responseText) {
	                try {
	                    var errorJSON = JSON.parse(response.responseText);
	                    error = new Parse.Error(errorJSON.code, errorJSON.error);
	                } catch (e) {
	                    // If we fail to parse the error text, that's okay.
	                    error = new Parse.Error(
	                        Parse.Error.INVALID_JSON,
	                        "Received an error with invalid JSON from Parse: " +
	                            response.responseText);
	                }
	            } else {
	                error = new Parse.Error(
	                    Parse.Error.CONNECTION_FAILED,
	                    "XMLHttpRequest failed: " + JSON.stringify(response));
	            }
	            // By explicitly returning a rejected Promise, this will work with
	            // either jQuery or Promises/A semantics.
	            return Parse.Promise.error(error);
	        });
	    };

	    // Helper function to get a value from a Backbone object as a property
	    // or as a function.
	    Parse._getValue = function (object, prop) {
	        if (!(object && object[prop])) {
	            return null;
	        }
	        return Parse._.isFunction(object[prop]) ? object[prop]() : object[prop];
	    };

	    /**
	     * Converts a value in a Parse Object into the appropriate representation.
	     * This is the JS equivalent of Java's Parse.maybeReferenceAndEncode(Object)
	     * if seenObjects is falsey. Otherwise any Parse.Objects not in
	     * seenObjects will be fully embedded rather than encoded
	     * as a pointer.  This array will be used to prevent going into an infinite
	     * loop because we have circular references.  If seenObjects
	     * is set, then none of the Parse Objects that are serialized can be dirty.
	     */
	    Parse._encode = function (value, seenObjects, disallowObjects) {
	        var _ = Parse._;
	        if (value instanceof Parse.Object) {
	            if (disallowObjects) {
	                throw "Parse.Objects not allowed here";
	            }
	            if (!seenObjects || _.include(seenObjects, value) || !value._hasData) {
	                return value._toPointer();
	            }
	            if (!value.dirty()) {
	                seenObjects = seenObjects.concat(value);
	                return Parse._encode(value._toFullJSON(seenObjects),
	                    seenObjects,
	                    disallowObjects);
	            }
	            throw "Tried to save an object with a pointer to a new, unsaved object.";
	        }
	        if (value instanceof Parse.ACL) {
	            return value.toJSON();
	        }
	        if (_.isDate(value)) {
	            return { "__type": "Date", "iso": value.toJSON() };
	        }
	        if (value instanceof Parse.GeoPoint) {
	            return value.toJSON();
	        }
	        if (_.isArray(value)) {
	            return _.map(value, function (x) {
	                return Parse._encode(x, seenObjects, disallowObjects);
	            });
	        }
	        if (_.isRegExp(value)) {
	            return value.source;
	        }
	        if (value instanceof Parse.Relation) {
	            return value.toJSON();
	        }
	        if (value instanceof Parse.Op) {
	            return value.toJSON();
	        }
	        if (value instanceof Parse.File) {
	            if (!value.url()) {
	                throw "Tried to save an object containing an unsaved file.";
	            }
	            return {
	                __type: "File",
	                name: value.name(),
	                url: value.url()
	            };
	        }
	        if (_.isObject(value)) {
	            var output = {};
	            Parse._objectEach(value, function (v, k) {
	                output[k] = Parse._encode(v, seenObjects, disallowObjects);
	            });
	            return output;
	        }
	        return value;
	    };

	    /**
	     * The inverse function of Parse._encode.
	     * TODO: make decode not mutate value.
	     */
	    Parse._decode = function (key, value) {
	        var _ = Parse._;
	        if (!_.isObject(value)) {
	            return value;
	        }
	        if (_.isArray(value)) {
	            Parse._arrayEach(value, function (v, k) {
	                value[k] = Parse._decode(k, v);
	            });
	            return value;
	        }
	        if (value instanceof Parse.Object) {
	            return value;
	        }
	        if (value instanceof Parse.File) {
	            return value;
	        }
	        if (value instanceof Parse.Op) {
	            return value;
	        }
	        if (value.__op) {
	            return Parse.Op._decode(value);
	        }
	        if (value.__type === "Pointer") {
	            var pointer = Parse.Object._create(value.className);
	            pointer._finishFetch({ objectId: value.objectId }, false);
	            return pointer;
	        }
	        if (value.__type === "Object") {
	            // It's an Object included in a query result.
	            var className = value.className;
	            delete value.__type;
	            delete value.className;
	            var object = Parse.Object._create(className);
	            object._finishFetch(value, true);
	            return object;
	        }
	        if (value.__type === "Date") {
	            return Parse._parseDate(value.iso);
	        }
	        if (value.__type === "GeoPoint") {
	            return new Parse.GeoPoint({
	                latitude: value.latitude,
	                longitude: value.longitude
	            });
	        }
	        if (key === "ACL") {
	            if (value instanceof Parse.ACL) {
	                return value;
	            }
	            return new Parse.ACL(value);
	        }
	        if (value.__type === "Relation") {
	            var relation = new Parse.Relation(null, key);
	            relation.targetClassName = value.className;
	            return relation;
	        }
	        if (value.__type === "File") {
	            var file = new Parse.File(value.name);
	            file._url = value.url;
	            return file;
	        }
	        Parse._objectEach(value, function (v, k) {
	            value[k] = Parse._decode(k, v);
	        });
	        return value;
	    };

	    Parse._arrayEach = Parse._.each;

	    /**
	     * Does a deep traversal of every item in object, calling func on every one.
	     * @param {Object} object The object or array to traverse deeply.
	     * @param {Function} func The function to call for every item. It will
	     *     be passed the item as an argument. If it returns a truthy value, that
	     *     value will replace the item in its parent container.
	     * @returns {} the result of calling func on the top-level object itself.
	     */
	    Parse._traverse = function (object, func, seen) {
	        if (object instanceof Parse.Object) {
	            seen = seen || [];
	            if (Parse._.indexOf(seen, object) >= 0) {
	                // We've already visited this object in this call.
	                return;
	            }
	            seen.push(object);
	            Parse._traverse(object.attributes, func, seen);
	            return func(object);
	        }
	        if (object instanceof Parse.Relation || object instanceof Parse.File) {
	            // Nothing needs to be done, but we don't want to recurse into the
	            // object's parent infinitely, so we catch this case.
	            return func(object);
	        }
	        if (Parse._.isArray(object)) {
	            Parse._.each(object, function (child, index) {
	                var newChild = Parse._traverse(child, func, seen);
	                if (newChild) {
	                    object[index] = newChild;
	                }
	            });
	            return func(object);
	        }
	        if (Parse._.isObject(object)) {
	            Parse._each(object, function (child, key) {
	                var newChild = Parse._traverse(child, func, seen);
	                if (newChild) {
	                    object[key] = newChild;
	                }
	            });
	            return func(object);
	        }
	        return func(object);
	    };

	    /**
	     * This is like _.each, except:
	     * * it doesn't work for so-called array-like objects,
	     * * it does work for dictionaries with a "length" attribute.
	     */
	    Parse._objectEach = Parse._each = function (obj, callback) {
	        var _ = Parse._;
	        if (_.isObject(obj)) {
	            _.each(_.keys(obj), function (key) {
	                callback(obj[key], key);
	            });
	        } else {
	            _.each(obj, callback);
	        }
	    };

	    // Helper function to check null or undefined.
	    Parse._isNullOrUndefined = function (x) {
	        return Parse._.isNull(x) || Parse._.isUndefined(x);
	    };
	}(this));

	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * @namespace Provides an interface to Parse's logging and analytics backend.
	     */
	    Parse.Analytics = Parse.Analytics || {};

	    _.extend(Parse.Analytics, /** @lends Parse.Analytics */ {
	        /**
	         * Tracks the occurrence of a custom event with additional dimensions.
	         * Parse will store a data point at the time of invocation with the given
	         * event name.
	         *
	         * Dimensions will allow segmentation of the occurrences of this custom
	         * event. Keys and values should be {@code String}s, and will throw
	         * otherwise.
	         *
	         * To track a user signup along with additional metadata, consider the
	         * following:
	         * <pre>
	         * var dimensions = {
	     *  gender: 'm',
	     *  source: 'web',
	     *  dayType: 'weekend'
	     * };
	         * Parse.Analytics.track('signup', dimensions);
	         * </pre>
	         *
	         * There is a default limit of 4 dimensions per event tracked.
	         *
	         * @param {String} name The name of the custom event to report to Parse as
	         * having happened.
	         * @param {Object} dimensions The dictionary of information by which to
	         * segment this event.
	         * @return {Parse.Promise} A promise that is resolved when the round-trip
	         * to the server completes.
	         */
	        track: function (name, dimensions) {
	            name = name || '';
	            name = name.replace(/^\s*/, '');
	            name = name.replace(/\s*$/, '');
	            if (name.length === 0) {
	                throw 'A name for the custom event must be provided';
	            }

	            _.each(dimensions, function (val, key) {
	                if (!_.isString(key) || !_.isString(val)) {
	                    throw 'track() dimensions expects keys and values of type "string".';
	                }
	            });

	            return Parse._request({
	                route: 'events',
	                className: name,
	                method: 'POST',
	                data: { dimensions: dimensions }
	            });
	        }
	    });
	}(this));

	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * Constructs a new Parse.Error object with the given code and message.
	     * @param {Number} code An error code constant from <code>Parse.Error</code>.
	     * @param {String} message A detailed description of the error.
	     * @class
	     *
	     * <p>Class used for all objects passed to error callbacks.</p>
	     */
	    Parse.Error = function (code, message) {
	        this.code = code;
	        this.message = message;
	    };

	    _.extend(Parse.Error, /** @lends Parse.Error */ {
	        /**
	         * Error code indicating some error other than those enumerated here.
	         * @constant
	         */
	        OTHER_CAUSE: -1,

	        /**
	         * Error code indicating that something has gone wrong with the server.
	         * If you get this error code, it is Parse's fault. Contact us at
	         * https://parse.com/help
	         * @constant
	         */
	        INTERNAL_SERVER_ERROR: 1,

	        /**
	         * Error code indicating the connection to the Parse servers failed.
	         * @constant
	         */
	        CONNECTION_FAILED: 100,

	        /**
	         * Error code indicating the specified object doesn't exist.
	         * @constant
	         */
	        OBJECT_NOT_FOUND: 101,

	        /**
	         * Error code indicating you tried to query with a datatype that doesn't
	         * support it, like exact matching an array or object.
	         * @constant
	         */
	        INVALID_QUERY: 102,

	        /**
	         * Error code indicating a missing or invalid classname. Classnames are
	         * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
	         * only valid characters.
	         * @constant
	         */
	        INVALID_CLASS_NAME: 103,

	        /**
	         * Error code indicating an unspecified object id.
	         * @constant
	         */
	        MISSING_OBJECT_ID: 104,

	        /**
	         * Error code indicating an invalid key name. Keys are case-sensitive. They
	         * must start with a letter, and a-zA-Z0-9_ are the only valid characters.
	         * @constant
	         */
	        INVALID_KEY_NAME: 105,

	        /**
	         * Error code indicating a malformed pointer. You should not see this unless
	         * you have been mucking about changing internal Parse code.
	         * @constant
	         */
	        INVALID_POINTER: 106,

	        /**
	         * Error code indicating that badly formed JSON was received upstream. This
	         * either indicates you have done something unusual with modifying how
	         * things encode to JSON, or the network is failing badly.
	         * @constant
	         */
	        INVALID_JSON: 107,

	        /**
	         * Error code indicating that the feature you tried to access is only
	         * available internally for testing purposes.
	         * @constant
	         */
	        COMMAND_UNAVAILABLE: 108,

	        /**
	         * You must call Parse.initialize before using the Parse library.
	         * @constant
	         */
	        NOT_INITIALIZED: 109,

	        /**
	         * Error code indicating that a field was set to an inconsistent type.
	         * @constant
	         */
	        INCORRECT_TYPE: 111,

	        /**
	         * Error code indicating an invalid channel name. A channel name is either
	         * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
	         * characters and starts with a letter.
	         * @constant
	         */
	        INVALID_CHANNEL_NAME: 112,

	        /**
	         * Error code indicating that push is misconfigured.
	         * @constant
	         */
	        PUSH_MISCONFIGURED: 115,

	        /**
	         * Error code indicating that the object is too large.
	         * @constant
	         */
	        OBJECT_TOO_LARGE: 116,

	        /**
	         * Error code indicating that the operation isn't allowed for clients.
	         * @constant
	         */
	        OPERATION_FORBIDDEN: 119,

	        /**
	         * Error code indicating the result was not found in the cache.
	         * @constant
	         */
	        CACHE_MISS: 120,

	        /**
	         * Error code indicating that an invalid key was used in a nested
	         * JSONObject.
	         * @constant
	         */
	        INVALID_NESTED_KEY: 121,

	        /**
	         * Error code indicating that an invalid filename was used for ParseFile.
	         * A valid file name contains only a-zA-Z0-9_. characters and is between 1
	         * and 128 characters.
	         * @constant
	         */
	        INVALID_FILE_NAME: 122,

	        /**
	         * Error code indicating an invalid ACL was provided.
	         * @constant
	         */
	        INVALID_ACL: 123,

	        /**
	         * Error code indicating that the request timed out on the server. Typically
	         * this indicates that the request is too expensive to run.
	         * @constant
	         */
	        TIMEOUT: 124,

	        /**
	         * Error code indicating that the email address was invalid.
	         * @constant
	         */
	        INVALID_EMAIL_ADDRESS: 125,

	        /**
	         * Error code indicating a missing content type.
	         * @constant
	         */
	        MISSING_CONTENT_TYPE: 126,

	        /**
	         * Error code indicating a missing content length.
	         * @constant
	         */
	        MISSING_CONTENT_LENGTH: 127,

	        /**
	         * Error code indicating an invalid content length.
	         * @constant
	         */
	        INVALID_CONTENT_LENGTH: 128,

	        /**
	         * Error code indicating a file that was too large.
	         * @constant
	         */
	        FILE_TOO_LARGE: 129,

	        /**
	         * Error code indicating an error saving a file.
	         * @constant
	         */
	        FILE_SAVE_ERROR: 130,

	        /**
	         * Error code indicating an error deleting a file.
	         * @constant
	         */
	        FILE_DELETE_ERROR: 153,

	        /**
	         * Error code indicating that a unique field was given a value that is
	         * already taken.
	         * @constant
	         */
	        DUPLICATE_VALUE: 137,

	        /**
	         * Error code indicating that a role's name is invalid.
	         * @constant
	         */
	        INVALID_ROLE_NAME: 139,

	        /**
	         * Error code indicating that an application quota was exceeded.  Upgrade to
	         * resolve.
	         * @constant
	         */
	        EXCEEDED_QUOTA: 140,

	        /**
	         * Error code indicating that a Cloud Code script failed.
	         * @constant
	         */
	        SCRIPT_FAILED: 141,

	        /**
	         * Error code indicating that a Cloud Code validation failed.
	         * @constant
	         */
	        VALIDATION_ERROR: 142,

	        /**
	         * Error code indicating that invalid image data was provided.
	         * @constant
	         */
	        INVALID_IMAGE_DATA: 150,

	        /**
	         * Error code indicating an unsaved file.
	         * @constant
	         */
	        UNSAVED_FILE_ERROR: 151,

	        /**
	         * Error code indicating an invalid push time.
	         */
	        INVALID_PUSH_TIME_ERROR: 152,

	        /**
	         * Error code indicating that the username is missing or empty.
	         * @constant
	         */
	        USERNAME_MISSING: 200,

	        /**
	         * Error code indicating that the password is missing or empty.
	         * @constant
	         */
	        PASSWORD_MISSING: 201,

	        /**
	         * Error code indicating that the username has already been taken.
	         * @constant
	         */
	        USERNAME_TAKEN: 202,

	        /**
	         * Error code indicating that the email has already been taken.
	         * @constant
	         */
	        EMAIL_TAKEN: 203,

	        /**
	         * Error code indicating that the email is missing, but must be specified.
	         * @constant
	         */
	        EMAIL_MISSING: 204,

	        /**
	         * Error code indicating that a user with the specified email was not found.
	         * @constant
	         */
	        EMAIL_NOT_FOUND: 205,

	        /**
	         * Error code indicating that a user object without a valid session could
	         * not be altered.
	         * @constant
	         */
	        SESSION_MISSING: 206,

	        /**
	         * Error code indicating that a user can only be created through signup.
	         * @constant
	         */
	        MUST_CREATE_USER_THROUGH_SIGNUP: 207,

	        /**
	         * Error code indicating that an an account being linked is already linked
	         * to another user.
	         * @constant
	         */
	        ACCOUNT_ALREADY_LINKED: 208,

	        /**
	         * Error code indicating that a user cannot be linked to an account because
	         * that account's id could not be found.
	         * @constant
	         */
	        LINKED_ID_MISSING: 250,

	        /**
	         * Error code indicating that a user with a linked (e.g. Facebook) account
	         * has an invalid session.
	         * @constant
	         */
	        INVALID_LINKED_SESSION: 251,

	        /**
	         * Error code indicating that a service being linked (e.g. Facebook or
	         * Twitter) is unsupported.
	         * @constant
	         */
	        UNSUPPORTED_SERVICE: 252,

	        /**
	         * Error code indicating that there were multiple errors. Aggregate errors
	         * have an "errors" property, which is an array of error objects with more
	         * detail about each error that occurred.
	         * @constant
	         */
	        AGGREGATE_ERROR: 600,

	        /**
	         * Error code indicating the client was unable to read an input file.
	         * @constant
	         */
	        FILE_READ_ERROR: 601,

	        /**
	         * Error code indicating a real error code is unavailable because
	         * we had to use an XDomainRequest object to allow CORS requests in
	         * Internet Explorer, which strips the body from HTTP responses that have
	         * a non-2XX status code.
	         * @constant
	         */
	        X_DOMAIN_REQUEST: 602
	    });

	}(this));

	/*global _: false */
	(function () {
	    var root = this;
	    var Parse = (root.Parse || (root.Parse = {}));
	    var eventSplitter = /\s+/;
	    var slice = Array.prototype.slice;

	    /**
	     * @class
	     *
	     * <p>Parse.Events is a fork of Backbone's Events module, provided for your
	     * convenience.</p>
	     *
	     * <p>A module that can be mixed in to any object in order to provide
	     * it with custom events. You may bind callback functions to an event
	     * with `on`, or remove these functions with `off`.
	     * Triggering an event fires all callbacks in the order that `on` was
	     * called.
	     *
	     * <pre>
	     *     var object = {};
	     *     _.extend(object, Parse.Events);
	     *     object.on('expand', function(){ alert('expanded'); });
	     *     object.trigger('expand');</pre></p>
	     *
	     * <p>For more information, see the
	     * <a href="http://documentcloud.github.com/backbone/#Events">Backbone
	     * documentation</a>.</p>
	     */
	    Parse.Events = {
	        /**
	         * Bind one or more space separated events, `events`, to a `callback`
	         * function. Passing `"all"` will bind the callback to all events fired.
	         */
	        on: function (events, callback, context) {

	            var calls, event, node, tail, list;
	            if (!callback) {
	                return this;
	            }
	            events = events.split(eventSplitter);
	            calls = this._callbacks || (this._callbacks = {});

	            // Create an immutable callback list, allowing traversal during
	            // modification.  The tail is an empty object that will always be used
	            // as the next node.
	            event = events.shift();
	            while (event) {
	                list = calls[event];
	                node = list ? list.tail : {};
	                node.next = tail = {};
	                node.context = context;
	                node.callback = callback;
	                calls[event] = {tail: tail, next: list ? list.next : node};
	                event = events.shift();
	            }

	            return this;
	        },

	        /**
	         * Remove one or many callbacks. If `context` is null, removes all callbacks
	         * with that function. If `callback` is null, removes all callbacks for the
	         * event. If `events` is null, removes all bound callbacks for all events.
	         */
	        off: function (events, callback, context) {
	            var event, calls, node, tail, cb, ctx;

	            // No events, or removing *all* events.
	            if (!(calls = this._callbacks)) {
	                return;
	            }
	            if (!(events || callback || context)) {
	                delete this._callbacks;
	                return this;
	            }

	            // Loop through the listed events and contexts, splicing them out of the
	            // linked list of callbacks if appropriate.
	            events = events ? events.split(eventSplitter) : _.keys(calls);
	            event = events.shift();
	            while (event) {
	                node = calls[event];
	                delete calls[event];
	                if (!node || !(callback || context)) {
	                    continue;
	                }
	                // Create a new list, omitting the indicated callbacks.
	                tail = node.tail;
	                node = node.next;
	                while (node !== tail) {
	                    cb = node.callback;
	                    ctx = node.context;
	                    if ((callback && cb !== callback) || (context && ctx !== context)) {
	                        this.on(event, cb, ctx);
	                    }
	                    node = node.next;
	                }
	                event = events.shift();
	            }

	            return this;
	        },

	        /**
	         * Trigger one or many events, firing all bound callbacks. Callbacks are
	         * passed the same arguments as `trigger` is, apart from the event name
	         * (unless you're listening on `"all"`, which will cause your callback to
	         * receive the true name of the event as the first argument).
	         */
	        trigger: function (events) {
	            var event, node, calls, tail, args, all, rest;
	            if (!(calls = this._callbacks)) {
	                return this;
	            }
	            all = calls.all;
	            events = events.split(eventSplitter);
	            rest = slice.call(arguments, 1);

	            // For each event, walk through the linked list of callbacks twice,
	            // first to trigger the event, then to trigger any `"all"` callbacks.
	            event = events.shift();
	            while (event) {
	                node = calls[event];
	                if (node) {
	                    tail = node.tail;
	                    while ((node = node.next) !== tail) {
	                        node.callback.apply(node.context || this, rest);
	                    }
	                }
	                node = all;
	                if (node) {
	                    tail = node.tail;
	                    args = [event].concat(rest);
	                    while ((node = node.next) !== tail) {
	                        node.callback.apply(node.context || this, args);
	                    }
	                }
	                event = events.shift();
	            }

	            return this;
	        }
	    };

	    /**
	     * @function
	     */
	    Parse.Events.bind = Parse.Events.on;

	    /**
	     * @function
	     */
	    Parse.Events.unbind = Parse.Events.off;
	}.call(this));


	/*global navigator: false */
	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * Creates a new GeoPoint with any of the following forms:<br>
	     *   <pre>
	     *   new GeoPoint(otherGeoPoint)
	     *   new GeoPoint(30, 30)
	     *   new GeoPoint([30, 30])
	     *   new GeoPoint({latitude: 30, longitude: 30})
	     *   new GeoPoint()  // defaults to (0, 0)
	     *   </pre>
	     * @class
	     *
	     * <p>Represents a latitude / longitude point that may be associated
	     * with a key in a ParseObject or used as a reference point for geo queries.
	     * This allows proximity-based queries on the key.</p>
	     *
	     * <p>Only one key in a class may contain a GeoPoint.</p>
	     *
	     * <p>Example:<pre>
	     *   var point = new Parse.GeoPoint(30.0, -20.0);
	     *   var object = new Parse.Object("PlaceObject");
	     *   object.set("location", point);
	     *   object.save();</pre></p>
	     */
	    Parse.GeoPoint = function (arg1, arg2) {
	        if (_.isArray(arg1)) {
	            Parse.GeoPoint._validate(arg1[0], arg1[1]);
	            this.latitude = arg1[0];
	            this.longitude = arg1[1];
	        } else if (_.isObject(arg1)) {
	            Parse.GeoPoint._validate(arg1.latitude, arg1.longitude);
	            this.latitude = arg1.latitude;
	            this.longitude = arg1.longitude;
	        } else if (_.isNumber(arg1) && _.isNumber(arg2)) {
	            Parse.GeoPoint._validate(arg1, arg2);
	            this.latitude = arg1;
	            this.longitude = arg2;
	        } else {
	            this.latitude = 0;
	            this.longitude = 0;
	        }

	        // Add properties so that anyone using Webkit or Mozilla will get an error
	        // if they try to set values that are out of bounds.
	        var self = this;
	        if (this.__defineGetter__ && this.__defineSetter__) {
	            // Use _latitude and _longitude to actually store the values, and add
	            // getters and setters for latitude and longitude.
	            this._latitude = this.latitude;
	            this._longitude = this.longitude;
	            this.__defineGetter__("latitude", function () {
	                return self._latitude;
	            });
	            this.__defineGetter__("longitude", function () {
	                return self._longitude;
	            });
	            this.__defineSetter__("latitude", function (val) {
	                Parse.GeoPoint._validate(val, self.longitude);
	                self._latitude = val;
	            });
	            this.__defineSetter__("longitude", function (val) {
	                Parse.GeoPoint._validate(self.latitude, val);
	                self._longitude = val;
	            });
	        }
	    };

	    /**
	     * @lends Parse.GeoPoint.prototype
	     * @property {float} latitude North-south portion of the coordinate, in range
	     *   [-90, 90].  Throws an exception if set out of range in a modern browser.
	     * @property {float} longitude East-west portion of the coordinate, in range
	     *   [-180, 180].  Throws if set out of range in a modern browser.
	     */

	    /**
	     * Throws an exception if the given lat-long is out of bounds.
	     */
	    Parse.GeoPoint._validate = function (latitude, longitude) {
	        if (latitude < -90.0) {
	            throw "Parse.GeoPoint latitude " + latitude + " < -90.0.";
	        }
	        if (latitude > 90.0) {
	            throw "Parse.GeoPoint latitude " + latitude + " > 90.0.";
	        }
	        if (longitude < -180.0) {
	            throw "Parse.GeoPoint longitude " + longitude + " < -180.0.";
	        }
	        if (longitude > 180.0) {
	            throw "Parse.GeoPoint longitude " + longitude + " > 180.0.";
	        }
	    };

	    /**
	     * Creates a GeoPoint with the user's current location, if available.
	     * Calls options.success with a new GeoPoint instance or calls options.error.
	     * @param {Object} options An object with success and error callbacks.
	     */
	    Parse.GeoPoint.current = function (options) {
	        var promise = new Parse.Promise();
	        navigator.geolocation.getCurrentPosition(function (location) {
	            promise.resolve(new Parse.GeoPoint({
	                latitude: location.coords.latitude,
	                longitude: location.coords.longitude
	            }));

	        }, function (error) {
	            promise.reject(error);
	        });

	        return promise._thenRunCallbacks(options);
	    };

	    Parse.GeoPoint.prototype = {
	        /**
	         * Returns a JSON representation of the GeoPoint, suitable for Parse.
	         * @return {Object}
	         */
	        toJSON: function () {
	            Parse.GeoPoint._validate(this.latitude, this.longitude);
	            return {
	                "__type": "GeoPoint",
	                latitude: this.latitude,
	                longitude: this.longitude
	            };
	        },

	        /**
	         * Returns the distance from this GeoPoint to another in radians.
	         * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	         * @return {Number}
	         */
	        radiansTo: function (point) {
	            var d2r = Math.PI / 180.0;
	            var lat1rad = this.latitude * d2r;
	            var long1rad = this.longitude * d2r;
	            var lat2rad = point.latitude * d2r;
	            var long2rad = point.longitude * d2r;
	            var deltaLat = lat1rad - lat2rad;
	            var deltaLong = long1rad - long2rad;
	            var sinDeltaLatDiv2 = Math.sin(deltaLat / 2);
	            var sinDeltaLongDiv2 = Math.sin(deltaLong / 2);
	            // Square of half the straight line chord distance between both points.
	            var a = ((sinDeltaLatDiv2 * sinDeltaLatDiv2) +
	                (Math.cos(lat1rad) * Math.cos(lat2rad) *
	                    sinDeltaLongDiv2 * sinDeltaLongDiv2));
	            a = Math.min(1.0, a);
	            return 2 * Math.asin(Math.sqrt(a));
	        },

	        /**
	         * Returns the distance from this GeoPoint to another in kilometers.
	         * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	         * @return {Number}
	         */
	        kilometersTo: function (point) {
	            return this.radiansTo(point) * 6371.0;
	        },

	        /**
	         * Returns the distance from this GeoPoint to another in miles.
	         * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	         * @return {Number}
	         */
	        milesTo: function (point) {
	            return this.radiansTo(point) * 3958.8;
	        }
	    };
	}(this));

	/*global navigator: false */
	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    var PUBLIC_KEY = "*";

	    /**
	     * Creates a new ACL.
	     * If no argument is given, the ACL has no permissions for anyone.
	     * If the argument is a Parse.User, the ACL will have read and write
	     *   permission for only that user.
	     * If the argument is any other JSON object, that object will be interpretted
	     *   as a serialized ACL created with toJSON().
	     * @see Parse.Object#setACL
	     * @class
	     *
	     * <p>An ACL, or Access Control List can be added to any
	     * <code>Parse.Object</code> to restrict access to only a subset of users
	     * of your application.</p>
	     */
	    Parse.ACL = function (arg1) {
	        var self = this;
	        self.permissionsById = {};
	        if (_.isObject(arg1)) {
	            if (arg1 instanceof Parse.User) {
	                self.setReadAccess(arg1, true);
	                self.setWriteAccess(arg1, true);
	            } else {
	                if (_.isFunction(arg1)) {
	                    throw "Parse.ACL() called with a function.  Did you forget ()?";
	                }
	                Parse._objectEach(arg1, function (accessList, userId) {
	                    if (!_.isString(userId)) {
	                        throw "Tried to create an ACL with an invalid userId.";
	                    }
	                    self.permissionsById[userId] = {};
	                    Parse._objectEach(accessList, function (allowed, permission) {
	                        if (permission !== "read" && permission !== "write") {
	                            throw "Tried to create an ACL with an invalid permission type.";
	                        }
	                        if (!_.isBoolean(allowed)) {
	                            throw "Tried to create an ACL with an invalid permission value.";
	                        }
	                        self.permissionsById[userId][permission] = allowed;
	                    });
	                });
	            }
	        }
	    };

	    /**
	     * Returns a JSON-encoded version of the ACL.
	     * @return {Object}
	     */
	    Parse.ACL.prototype.toJSON = function () {
	        return _.clone(this.permissionsById);
	    };

	    Parse.ACL.prototype._setAccess = function (accessType, userId, allowed) {
	        if (userId instanceof Parse.User) {
	            userId = userId.id;
	        } else if (userId instanceof Parse.Role) {
	            userId = "role:" + userId.getName();
	        }
	        if (!_.isString(userId)) {
	            throw "userId must be a string.";
	        }
	        if (!_.isBoolean(allowed)) {
	            throw "allowed must be either true or false.";
	        }
	        var permissions = this.permissionsById[userId];
	        if (!permissions) {
	            if (!allowed) {
	                // The user already doesn't have this permission, so no action needed.
	                return;
	            } else {
	                permissions = {};
	                this.permissionsById[userId] = permissions;
	            }
	        }

	        if (allowed) {
	            this.permissionsById[userId][accessType] = true;
	        } else {
	            delete permissions[accessType];
	            if (_.isEmpty(permissions)) {
	                delete permissions[userId];
	            }
	        }
	    };

	    Parse.ACL.prototype._getAccess = function (accessType, userId) {
	        if (userId instanceof Parse.User) {
	            userId = userId.id;
	        } else if (userId instanceof Parse.Role) {
	            userId = "role:" + userId.getName();
	        }
	        var permissions = this.permissionsById[userId];
	        if (!permissions) {
	            return false;
	        }
	        return permissions[accessType] ? true : false;
	    };

	    /**
	     * Set whether the given user is allowed to read this object.
	     * @param userId An instance of Parse.User or its objectId.
	     * @param {Boolean} allowed Whether that user should have read access.
	     */
	    Parse.ACL.prototype.setReadAccess = function (userId, allowed) {
	        this._setAccess("read", userId, allowed);
	    };

	    /**
	     * Get whether the given user id is *explicitly* allowed to read this object.
	     * Even if this returns false, the user may still be able to access it if
	     * getPublicReadAccess returns true or a role that the user belongs to has
	     * write access.
	     * @param userId An instance of Parse.User or its objectId, or a Parse.Role.
	     * @return {Boolean}
	     */
	    Parse.ACL.prototype.getReadAccess = function (userId) {
	        return this._getAccess("read", userId);
	    };

	    /**
	     * Set whether the given user id is allowed to write this object.
	     * @param userId An instance of Parse.User or its objectId, or a Parse.Role..
	     * @param {Boolean} allowed Whether that user should have write access.
	     */
	    Parse.ACL.prototype.setWriteAccess = function (userId, allowed) {
	        this._setAccess("write", userId, allowed);
	    };

	    /**
	     * Get whether the given user id is *explicitly* allowed to write this object.
	     * Even if this returns false, the user may still be able to write it if
	     * getPublicWriteAccess returns true or a role that the user belongs to has
	     * write access.
	     * @param userId An instance of Parse.User or its objectId, or a Parse.Role.
	     * @return {Boolean}
	     */
	    Parse.ACL.prototype.getWriteAccess = function (userId) {
	        return this._getAccess("write", userId);
	    };

	    /**
	     * Set whether the public is allowed to read this object.
	     * @param {Boolean} allowed
	     */
	    Parse.ACL.prototype.setPublicReadAccess = function (allowed) {
	        this.setReadAccess(PUBLIC_KEY, allowed);
	    };

	    /**
	     * Get whether the public is allowed to read this object.
	     * @return {Boolean}
	     */
	    Parse.ACL.prototype.getPublicReadAccess = function () {
	        return this.getReadAccess(PUBLIC_KEY);
	    };

	    /**
	     * Set whether the public is allowed to write this object.
	     * @param {Boolean} allowed
	     */
	    Parse.ACL.prototype.setPublicWriteAccess = function (allowed) {
	        this.setWriteAccess(PUBLIC_KEY, allowed);
	    };

	    /**
	     * Get whether the public is allowed to write this object.
	     * @return {Boolean}
	     */
	    Parse.ACL.prototype.getPublicWriteAccess = function () {
	        return this.getWriteAccess(PUBLIC_KEY);
	    };

	    /**
	     * Get whether users belonging to the given role are allowed
	     * to read this object. Even if this returns false, the role may
	     * still be able to write it if a parent role has read access.
	     *
	     * @param role The name of the role, or a Parse.Role object.
	     * @return {Boolean} true if the role has read access. false otherwise.
	     * @throws {String} If role is neither a Parse.Role nor a String.
	     */
	    Parse.ACL.prototype.getRoleReadAccess = function (role) {
	        if (role instanceof Parse.Role) {
	            // Normalize to the String name
	            role = role.getName();
	        }
	        if (_.isString(role)) {
	            return this.getReadAccess("role:" + role);
	        }
	        throw "role must be a Parse.Role or a String";
	    };

	    /**
	     * Get whether users belonging to the given role are allowed
	     * to write this object. Even if this returns false, the role may
	     * still be able to write it if a parent role has write access.
	     *
	     * @param role The name of the role, or a Parse.Role object.
	     * @return {Boolean} true if the role has write access. false otherwise.
	     * @throws {String} If role is neither a Parse.Role nor a String.
	     */
	    Parse.ACL.prototype.getRoleWriteAccess = function (role) {
	        if (role instanceof Parse.Role) {
	            // Normalize to the String name
	            role = role.getName();
	        }
	        if (_.isString(role)) {
	            return this.getWriteAccess("role:" + role);
	        }
	        throw "role must be a Parse.Role or a String";
	    };

	    /**
	     * Set whether users belonging to the given role are allowed
	     * to read this object.
	     *
	     * @param role The name of the role, or a Parse.Role object.
	     * @param {Boolean} allowed Whether the given role can read this object.
	     * @throws {String} If role is neither a Parse.Role nor a String.
	     */
	    Parse.ACL.prototype.setRoleReadAccess = function (role, allowed) {
	        if (role instanceof Parse.Role) {
	            // Normalize to the String name
	            role = role.getName();
	        }
	        if (_.isString(role)) {
	            this.setReadAccess("role:" + role, allowed);
	            return;
	        }
	        throw "role must be a Parse.Role or a String";
	    };

	    /**
	     * Set whether users belonging to the given role are allowed
	     * to write this object.
	     *
	     * @param role The name of the role, or a Parse.Role object.
	     * @param {Boolean} allowed Whether the given role can write this object.
	     * @throws {String} If role is neither a Parse.Role nor a String.
	     */
	    Parse.ACL.prototype.setRoleWriteAccess = function (role, allowed) {
	        if (role instanceof Parse.Role) {
	            // Normalize to the String name
	            role = role.getName();
	        }
	        if (_.isString(role)) {
	            this.setWriteAccess("role:" + role, allowed);
	            return;
	        }
	        throw "role must be a Parse.Role or a String";
	    };

	}(this));

	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * @class
	     * A Parse.Op is an atomic operation that can be applied to a field in a
	     * Parse.Object. For example, calling <code>object.set("foo", "bar")</code>
	     * is an example of a Parse.Op.Set. Calling <code>object.unset("foo")</code>
	     * is a Parse.Op.Unset. These operations are stored in a Parse.Object and
	     * sent to the server as part of <code>object.save()</code> operations.
	     * Instances of Parse.Op should be immutable.
	     *
	     * You should not create subclasses of Parse.Op or instantiate Parse.Op
	     * directly.
	     */
	    Parse.Op = function () {
	        this._initialize.apply(this, arguments);
	    };

	    Parse.Op.prototype = {
	        _initialize: function () {
	        }
	    };

	    _.extend(Parse.Op, {
	        /**
	         * To create a new Op, call Parse.Op._extend();
	         */
	        _extend: Parse._extend,

	        // A map of __op string to decoder function.
	        _opDecoderMap: {},

	        /**
	         * Registers a function to convert a json object with an __op field into an
	         * instance of a subclass of Parse.Op.
	         */
	        _registerDecoder: function (opName, decoder) {
	            Parse.Op._opDecoderMap[opName] = decoder;
	        },

	        /**
	         * Converts a json object into an instance of a subclass of Parse.Op.
	         */
	        _decode: function (json) {
	            var decoder = Parse.Op._opDecoderMap[json.__op];
	            if (decoder) {
	                return decoder(json);
	            } else {
	                return undefined;
	            }
	        }
	    });

	    /*
	     * Add a handler for Batch ops.
	     */
	    Parse.Op._registerDecoder("Batch", function (json) {
	        var op = null;
	        Parse._arrayEach(json.ops, function (nextOp) {
	            nextOp = Parse.Op._decode(nextOp);
	            op = nextOp._mergeWithPrevious(op);
	        });
	        return op;
	    });

	    /**
	     * @class
	     * A Set operation indicates that either the field was changed using
	     * Parse.Object.set, or it is a mutable container that was detected as being
	     * changed.
	     */
	    Parse.Op.Set = Parse.Op._extend(/** @lends Parse.Op.Set.prototype */ {
	        _initialize: function (value) {
	            this._value = value;
	        },

	        /**
	         * Returns the new value of this field after the set.
	         */
	        value: function () {
	            return this._value;
	        },

	        /**
	         * Returns a JSON version of the operation suitable for sending to Parse.
	         * @return {Object}
	         */
	        toJSON: function () {
	            return Parse._encode(this.value());
	        },

	        _mergeWithPrevious: function (previous) {
	            return this;
	        },

	        _estimate: function (oldValue) {
	            return this.value();
	        }
	    });

	    /**
	     * A sentinel value that is returned by Parse.Op.Unset._estimate to
	     * indicate the field should be deleted. Basically, if you find _UNSET as a
	     * value in your object, you should remove that key.
	     */
	    Parse.Op._UNSET = {};

	    /**
	     * @class
	     * An Unset operation indicates that this field has been deleted from the
	     * object.
	     */
	    Parse.Op.Unset = Parse.Op._extend(/** @lends Parse.Op.Unset.prototype */ {
	        /**
	         * Returns a JSON version of the operation suitable for sending to Parse.
	         * @return {Object}
	         */
	        toJSON: function () {
	            return { __op: "Delete" };
	        },

	        _mergeWithPrevious: function (previous) {
	            return this;
	        },

	        _estimate: function (oldValue) {
	            return Parse.Op._UNSET;
	        }
	    });

	    Parse.Op._registerDecoder("Delete", function (json) {
	        return new Parse.Op.Unset();
	    });

	    /**
	     * @class
	     * An Increment is an atomic operation where the numeric value for the field
	     * will be increased by a given amount.
	     */
	    Parse.Op.Increment = Parse.Op._extend(
	        /** @lends Parse.Op.Increment.prototype */ {

	            _initialize: function (amount) {
	                this._amount = amount;
	            },

	            /**
	             * Returns the amount to increment by.
	             * @return {Number} the amount to increment by.
	             */
	            amount: function () {
	                return this._amount;
	            },

	            /**
	             * Returns a JSON version of the operation suitable for sending to Parse.
	             * @return {Object}
	             */
	            toJSON: function () {
	                return { __op: "Increment", amount: this._amount };
	            },

	            _mergeWithPrevious: function (previous) {
	                if (!previous) {
	                    return this;
	                } else if (previous instanceof Parse.Op.Unset) {
	                    return new Parse.Op.Set(this.amount());
	                } else if (previous instanceof Parse.Op.Set) {
	                    return new Parse.Op.Set(previous.value() + this.amount());
	                } else if (previous instanceof Parse.Op.Increment) {
	                    return new Parse.Op.Increment(this.amount() + previous.amount());
	                } else {
	                    throw "Op is invalid after previous op.";
	                }
	            },

	            _estimate: function (oldValue) {
	                if (!oldValue) {
	                    return this.amount();
	                }
	                return oldValue + this.amount();
	            }
	        });

	    Parse.Op._registerDecoder("Increment", function (json) {
	        return new Parse.Op.Increment(json.amount);
	    });

	    /**
	     * @class
	     * Add is an atomic operation where the given objects will be appended to the
	     * array that is stored in this field.
	     */
	    Parse.Op.Add = Parse.Op._extend(/** @lends Parse.Op.Add.prototype */ {
	        _initialize: function (objects) {
	            this._objects = objects;
	        },

	        /**
	         * Returns the objects to be added to the array.
	         * @return {Array} The objects to be added to the array.
	         */
	        objects: function () {
	            return this._objects;
	        },

	        /**
	         * Returns a JSON version of the operation suitable for sending to Parse.
	         * @return {Object}
	         */
	        toJSON: function () {
	            return { __op: "Add", objects: Parse._encode(this.objects()) };
	        },

	        _mergeWithPrevious: function (previous) {
	            if (!previous) {
	                return this;
	            } else if (previous instanceof Parse.Op.Unset) {
	                return new Parse.Op.Set(this.objects());
	            } else if (previous instanceof Parse.Op.Set) {
	                return new Parse.Op.Set(this._estimate(previous.value()));
	            } else if (previous instanceof Parse.Op.Add) {
	                return new Parse.Op.Add(previous.objects().concat(this.objects()));
	            } else {
	                throw "Op is invalid after previous op.";
	            }
	        },

	        _estimate: function (oldValue) {
	            if (!oldValue) {
	                return _.clone(this.objects());
	            } else {
	                return oldValue.concat(this.objects());
	            }
	        }
	    });

	    Parse.Op._registerDecoder("Add", function (json) {
	        return new Parse.Op.Add(Parse._decode(undefined, json.objects));
	    });

	    /**
	     * @class
	     * AddUnique is an atomic operation where the given items will be appended to
	     * the array that is stored in this field only if they were not already
	     * present in the array.
	     */
	    Parse.Op.AddUnique = Parse.Op._extend(
	        /** @lends Parse.Op.AddUnique.prototype */ {

	            _initialize: function (objects) {
	                this._objects = _.uniq(objects);
	            },

	            /**
	             * Returns the objects to be added to the array.
	             * @return {Array} The objects to be added to the array.
	             */
	            objects: function () {
	                return this._objects;
	            },

	            /**
	             * Returns a JSON version of the operation suitable for sending to Parse.
	             * @return {Object}
	             */
	            toJSON: function () {
	                return { __op: "AddUnique", objects: Parse._encode(this.objects()) };
	            },

	            _mergeWithPrevious: function (previous) {
	                if (!previous) {
	                    return this;
	                } else if (previous instanceof Parse.Op.Unset) {
	                    return new Parse.Op.Set(this.objects());
	                } else if (previous instanceof Parse.Op.Set) {
	                    return new Parse.Op.Set(this._estimate(previous.value()));
	                } else if (previous instanceof Parse.Op.AddUnique) {
	                    return new Parse.Op.AddUnique(this._estimate(previous.objects()));
	                } else {
	                    throw "Op is invalid after previous op.";
	                }
	            },

	            _estimate: function (oldValue) {
	                if (!oldValue) {
	                    return _.clone(this.objects());
	                } else {
	                    // We can't just take the _.uniq(_.union(...)) of oldValue and
	                    // this.objects, because the uniqueness may not apply to oldValue
	                    // (especially if the oldValue was set via .set())
	                    var newValue = _.clone(oldValue);
	                    Parse._arrayEach(this.objects(), function (obj) {
	                        if (obj instanceof Parse.Object && obj.id) {
	                            var matchingObj = _.find(newValue, function (anObj) {
	                                return (anObj instanceof Parse.Object) && (anObj.id === obj.id);
	                            });
	                            if (!matchingObj) {
	                                newValue.push(obj);
	                            } else {
	                                var index = _.indexOf(newValue, matchingObj);
	                                newValue[index] = obj;
	                            }
	                        } else if (!_.contains(newValue, obj)) {
	                            newValue.push(obj);
	                        }
	                    });
	                    return newValue;
	                }
	            }
	        });

	    Parse.Op._registerDecoder("AddUnique", function (json) {
	        return new Parse.Op.AddUnique(Parse._decode(undefined, json.objects));
	    });

	    /**
	     * @class
	     * Remove is an atomic operation where the given objects will be removed from
	     * the array that is stored in this field.
	     */
	    Parse.Op.Remove = Parse.Op._extend(/** @lends Parse.Op.Remove.prototype */ {
	        _initialize: function (objects) {
	            this._objects = _.uniq(objects);
	        },

	        /**
	         * Returns the objects to be removed from the array.
	         * @return {Array} The objects to be removed from the array.
	         */
	        objects: function () {
	            return this._objects;
	        },

	        /**
	         * Returns a JSON version of the operation suitable for sending to Parse.
	         * @return {Object}
	         */
	        toJSON: function () {
	            return { __op: "Remove", objects: Parse._encode(this.objects()) };
	        },

	        _mergeWithPrevious: function (previous) {
	            if (!previous) {
	                return this;
	            } else if (previous instanceof Parse.Op.Unset) {
	                return previous;
	            } else if (previous instanceof Parse.Op.Set) {
	                return new Parse.Op.Set(this._estimate(previous.value()));
	            } else if (previous instanceof Parse.Op.Remove) {
	                return new Parse.Op.Remove(_.union(previous.objects(), this.objects()));
	            } else {
	                throw "Op is invalid after previous op.";
	            }
	        },

	        _estimate: function (oldValue) {
	            if (!oldValue) {
	                return [];
	            } else {
	                var newValue = _.difference(oldValue, this.objects());
	                // If there are saved Parse Objects being removed, also remove them.
	                Parse._arrayEach(this.objects(), function (obj) {
	                    if (obj instanceof Parse.Object && obj.id) {
	                        newValue = _.reject(newValue, function (other) {
	                            return (other instanceof Parse.Object) && (other.id === obj.id);
	                        });
	                    }
	                });
	                return newValue;
	            }
	        }
	    });

	    Parse.Op._registerDecoder("Remove", function (json) {
	        return new Parse.Op.Remove(Parse._decode(undefined, json.objects));
	    });

	    /**
	     * @class
	     * A Relation operation indicates that the field is an instance of
	     * Parse.Relation, and objects are being added to, or removed from, that
	     * relation.
	     */
	    Parse.Op.Relation = Parse.Op._extend(
	        /** @lends Parse.Op.Relation.prototype */ {

	            _initialize: function (adds, removes) {
	                this._targetClassName = null;

	                var self = this;

	                var pointerToId = function (object) {
	                    if (object instanceof Parse.Object) {
	                        if (!object.id) {
	                            throw "You can't add an unsaved Parse.Object to a relation.";
	                        }
	                        if (!self._targetClassName) {
	                            self._targetClassName = object.className;
	                        }
	                        if (self._targetClassName !== object.className) {
	                            throw "Tried to create a Parse.Relation with 2 different types: " +
	                                self._targetClassName + " and " + object.className + ".";
	                        }
	                        return object.id;
	                    }
	                    return object;
	                };

	                this.relationsToAdd = _.uniq(_.map(adds, pointerToId));
	                this.relationsToRemove = _.uniq(_.map(removes, pointerToId));
	            },

	            /**
	             * Returns an array of unfetched Parse.Object that are being added to the
	             * relation.
	             * @return {Array}
	             */
	            added: function () {
	                var self = this;
	                return _.map(this.relationsToAdd, function (objectId) {
	                    var object = Parse.Object._create(self._targetClassName);
	                    object.id = objectId;
	                    return object;
	                });
	            },

	            /**
	             * Returns an array of unfetched Parse.Object that are being removed from
	             * the relation.
	             * @return {Array}
	             */
	            removed: function () {
	                var self = this;
	                return _.map(this.relationsToRemove, function (objectId) {
	                    var object = Parse.Object._create(self._targetClassName);
	                    object.id = objectId;
	                    return object;
	                });
	            },

	            /**
	             * Returns a JSON version of the operation suitable for sending to Parse.
	             * @return {Object}
	             */
	            toJSON: function () {
	                var adds = null;
	                var removes = null;
	                var self = this;
	                var idToPointer = function (id) {
	                    return { __type: 'Pointer',
	                        className: self._targetClassName,
	                        objectId: id };
	                };
	                var pointers = null;
	                if (this.relationsToAdd.length > 0) {
	                    pointers = _.map(this.relationsToAdd, idToPointer);
	                    adds = { "__op": "AddRelation", "objects": pointers };
	                }

	                if (this.relationsToRemove.length > 0) {
	                    pointers = _.map(this.relationsToRemove, idToPointer);
	                    removes = { "__op": "RemoveRelation", "objects": pointers };
	                }

	                if (adds && removes) {
	                    return { "__op": "Batch", "ops": [adds, removes]};
	                }

	                return adds || removes || {};
	            },

	            _mergeWithPrevious: function (previous) {
	                if (!previous) {
	                    return this;
	                } else if (previous instanceof Parse.Op.Unset) {
	                    throw "You can't modify a relation after deleting it.";
	                } else if (previous instanceof Parse.Op.Relation) {
	                    if (previous._targetClassName &&
	                        previous._targetClassName !== this._targetClassName) {
	                        throw "Related object must be of class " + previous._targetClassName +
	                            ", but " + this._targetClassName + " was passed in.";
	                    }
	                    var newAdd = _.union(_.difference(previous.relationsToAdd,
	                        this.relationsToRemove),
	                        this.relationsToAdd);
	                    var newRemove = _.union(_.difference(previous.relationsToRemove,
	                        this.relationsToAdd),
	                        this.relationsToRemove);

	                    var newRelation = new Parse.Op.Relation(newAdd, newRemove);
	                    newRelation._targetClassName = this._targetClassName;
	                    return newRelation;
	                } else {
	                    throw "Op is invalid after previous op.";
	                }
	            },

	            _estimate: function (oldValue, object, key) {
	                if (!oldValue) {
	                    var relation = new Parse.Relation(object, key);
	                    relation.targetClassName = this._targetClassName;
	                } else if (oldValue instanceof Parse.Relation) {
	                    if (this._targetClassName) {
	                        if (oldValue.targetClassName) {
	                            if (oldValue.targetClassName !== this._targetClassName) {
	                                throw "Related object must be a " + oldValue.targetClassName +
	                                    ", but a " + this._targetClassName + " was passed in.";
	                            }
	                        } else {
	                            oldValue.targetClassName = this._targetClassName;
	                        }
	                    }
	                    return oldValue;
	                } else {
	                    throw "Op is invalid after previous op.";
	                }
	            }
	        });

	    Parse.Op._registerDecoder("AddRelation", function (json) {
	        return new Parse.Op.Relation(Parse._decode(undefined, json.objects), []);
	    });
	    Parse.Op._registerDecoder("RemoveRelation", function (json) {
	        return new Parse.Op.Relation([], Parse._decode(undefined, json.objects));
	    });

	}(this));

	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * Creates a new Relation for the given parent object and key. This
	     * constructor should rarely be used directly, but rather created by
	     * Parse.Object.relation.
	     * @param {Parse.Object} parent The parent of this relation.
	     * @param {String} key The key for this relation on the parent.
	     * @see Parse.Object#relation
	     * @class
	     *
	     * <p>
	     * A class that is used to access all of the children of a many-to-many
	     * relationship.  Each instance of Parse.Relation is associated with a
	     * particular parent object and key.
	     * </p>
	     */
	    Parse.Relation = function (parent, key) {
	        this.parent = parent;
	        this.key = key;
	        this.targetClassName = null;
	    };

	    Parse.Relation.prototype = {
	        /**
	         * Makes sure that this relation has the right parent and key.
	         */
	        _ensureParentAndKey: function (parent, key) {
	            this.parent = this.parent || parent;
	            this.key = this.key || key;
	            if (this.parent !== parent) {
	                throw "Internal Error. Relation retrieved from two different Objects.";
	            }
	            if (this.key !== key) {
	                throw "Internal Error. Relation retrieved from two different keys.";
	            }
	        },

	        /**
	         * Adds a Parse.Object or an array of Parse.Objects to the relation.
	         * @param {} objects The item or items to add.
	         */
	        add: function (objects) {
	            if (!_.isArray(objects)) {
	                objects = [objects];
	            }

	            var change = new Parse.Op.Relation(objects, []);
	            this.parent.set(this.key, change);
	            this.targetClassName = change._targetClassName;
	        },

	        /**
	         * Removes a Parse.Object or an array of Parse.Objects from this relation.
	         * @param {} objects The item or items to remove.
	         */
	        remove: function (objects) {
	            if (!_.isArray(objects)) {
	                objects = [objects];
	            }

	            var change = new Parse.Op.Relation([], objects);
	            this.parent.set(this.key, change);
	            this.targetClassName = change._targetClassName;
	        },

	        /**
	         * Returns a JSON version of the object suitable for saving to disk.
	         * @return {Object}
	         */
	        toJSON: function () {
	            return { "__type": "Relation", "className": this.targetClassName };
	        },

	        /**
	         * Returns a Parse.Query that is limited to objects in this
	         * relation.
	         * @return {Parse.Query}
	         */
	        query: function () {
	            var targetClass;
	            var query;
	            if (!this.targetClassName) {
	                targetClass = Parse.Object._getSubclass(this.parent.className);
	                query = new Parse.Query(targetClass);
	                query._extraOptions.redirectClassNameForKey = this.key;
	            } else {
	                targetClass = Parse.Object._getSubclass(this.targetClassName);
	                query = new Parse.Query(targetClass);
	            }
	            query._addCondition("$relatedTo", "object", this.parent._toPointer());
	            query._addCondition("$relatedTo", "key", this.key);

	            return query;
	        }
	    };
	}(this));

	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * A Promise is returned by async methods as a hook to provide callbacks to be
	     * called when the async task is fulfilled.
	     *
	     * <p>Typical usage would be like:<pre>
	     *    query.find().then(function(results) {
	   *      results[0].set("foo", "bar");
	   *      return results[0].saveAsync();
	   *    }).then(function(result) {
	   *      console.log("Updated " + result.id);
	   *    });
	     * </pre></p>
	     *
	     * @see Parse.Promise.prototype.then
	     * @class
	     */
	    Parse.Promise = function () {
	        this._resolved = false;
	        this._rejected = false;
	        this._resolvedCallbacks = [];
	        this._rejectedCallbacks = [];
	    };

	    _.extend(Parse.Promise, /** @lends Parse.Promise */ {

	        /**
	         * Returns true iff the given object fulfils the Promise interface.
	         * @return {Boolean}
	         */
	        is: function (promise) {
	            return promise && promise.then && _.isFunction(promise.then);
	        },

	        /**
	         * Returns a new promise that is resolved with a given value.
	         * @return {Parse.Promise} the new promise.
	         */
	        as: function () {
	            var promise = new Parse.Promise();
	            promise.resolve.apply(promise, arguments);
	            return promise;
	        },

	        /**
	         * Returns a new promise that is rejected with a given error.
	         * @return {Parse.Promise} the new promise.
	         */
	        error: function () {
	            var promise = new Parse.Promise();
	            promise.reject.apply(promise, arguments);
	            return promise;
	        },

	        /**
	         * Returns a new promise that is fulfilled when all of the input promises
	         * are resolved. If any promise in the list fails, then the returned promise
	         * will fail with the last error. If they all succeed, then the returned
	         * promise will succeed, with the results being the results of all the input
	         * promises. For example: <pre>
	         *   var p1 = Parse.Promise.as(1);
	         *   var p2 = Parse.Promise.as(2);
	         *   var p3 = Parse.Promise.as(3);
	         *
	         *   Parse.Promise.when(p1, p2, p3).then(function(r1, r2, r3) {
	     *     console.log(r1);  // prints 1
	     *     console.log(r2);  // prints 2
	     *     console.log(r3);  // prints 3
	     *   });</pre>
	         *
	         * The input promises can also be specified as an array: <pre>
	         *   var promises = [p1, p2, p3];
	         *   Parse.Promise.when(promises).then(function(r1, r2, r3) {
	     *     console.log(r1);  // prints 1
	     *     console.log(r2);  // prints 2
	     *     console.log(r3);  // prints 3
	     *   });
	         * </pre>
	         * @param {Array} promises a list of promises to wait for.
	         * @return {Parse.Promise} the new promise.
	         */
	        when: function (promises) {
	            // Allow passing in Promises as separate arguments instead of an Array.
	            var objects;
	            if (promises && Parse._isNullOrUndefined(promises.length)) {
	                objects = arguments;
	            } else {
	                objects = promises;
	            }

	            var total = objects.length;
	            var hadError = false;
	            var results = [];
	            var errors = [];
	            results.length = objects.length;
	            errors.length = objects.length;

	            if (total === 0) {
	                return Parse.Promise.as.apply(this, results);
	            }

	            var promise = new Parse.Promise();

	            var resolveOne = function () {
	                total = total - 1;
	                if (total === 0) {
	                    if (hadError) {
	                        promise.reject(errors);
	                    } else {
	                        promise.resolve.apply(promise, results);
	                    }
	                }
	            };

	            Parse._arrayEach(objects, function (object, i) {
	                if (Parse.Promise.is(object)) {
	                    object.then(function (result) {
	                        results[i] = result;
	                        resolveOne();
	                    }, function (error) {
	                        errors[i] = error;
	                        hadError = true;
	                        resolveOne();
	                    });
	                } else {
	                    results[i] = object;
	                    resolveOne();
	                }
	            });

	            return promise;
	        },

	        /**
	         * Runs the given asyncFunction repeatedly, as long as the predicate
	         * function returns a truthy value. Stops repeating if asyncFunction returns
	         * a rejected promise.
	         * @param {Function} predicate should return false when ready to stop.
	         * @param {Function} asyncFunction should return a Promise.
	         */
	        _continueWhile: function (predicate, asyncFunction) {
	            if (predicate()) {
	                return asyncFunction().then(function () {
	                    return Parse.Promise._continueWhile(predicate, asyncFunction);
	                });
	            }
	            return Parse.Promise.as();
	        }
	    });

	    _.extend(Parse.Promise.prototype, /** @lends Parse.Promise.prototype */ {

	        /**
	         * Marks this promise as fulfilled, firing any callbacks waiting on it.
	         * @param {Object} result the result to pass to the callbacks.
	         */
	        resolve: function (result) {
	            if (this._resolved || this._rejected) {
	                throw "A promise was resolved even though it had already been " +
	                    (this._resolved ? "resolved" : "rejected") + ".";
	            }
	            this._resolved = true;
	            this._result = arguments;
	            var results = arguments;
	            Parse._arrayEach(this._resolvedCallbacks, function (resolvedCallback) {
	                resolvedCallback.apply(this, results);
	            });
	            this._resolvedCallbacks = [];
	            this._rejectedCallbacks = [];
	        },

	        /**
	         * Marks this promise as fulfilled, firing any callbacks waiting on it.
	         * @param {Object} error the error to pass to the callbacks.
	         */
	        reject: function (error) {
	            if (this._resolved || this._rejected) {
	                throw "A promise was rejected even though it had already been " +
	                    (this._resolved ? "resolved" : "rejected") + ".";
	            }
	            this._rejected = true;
	            this._error = error;
	            Parse._arrayEach(this._rejectedCallbacks, function (rejectedCallback) {
	                rejectedCallback(error);
	            });
	            this._resolvedCallbacks = [];
	            this._rejectedCallbacks = [];
	        },

	        /**
	         * Adds callbacks to be called when this promise is fulfilled. Returns a new
	         * Promise that will be fulfilled when the callback is complete. It allows
	         * chaining. If the callback itself returns a Promise, then the one returned
	         * by "then" will not be fulfilled until that one returned by the callback
	         * is fulfilled.
	         * @param {Function} resolvedCallback Function that is called when this
	         * Promise is resolved. Once the callback is complete, then the Promise
	         * returned by "then" will also be fulfilled.
	         * @param {Function} rejectedCallback Function that is called when this
	         * Promise is rejected with an error. Once the callback is complete, then
	         * the promise returned by "then" with be resolved successfully. If
	         * rejectedCallback is null, or it returns a rejected Promise, then the
	         * Promise returned by "then" will be rejected with that error.
	         * @return {Parse.Promise} A new Promise that will be fulfilled after this
	         * Promise is fulfilled and either callback has completed. If the callback
	         * returned a Promise, then this Promise will not be fulfilled until that
	         * one is.
	         */
	        then: function (resolvedCallback, rejectedCallback) {
	            var promise = new Parse.Promise();

	            var wrappedResolvedCallback = function () {
	                var result = arguments;
	                if (resolvedCallback) {
	                    result = [resolvedCallback.apply(this, result)];
	                }
	                if (result.length === 1 && Parse.Promise.is(result[0])) {
	                    result[0].then(function () {
	                        promise.resolve.apply(promise, arguments);
	                    }, function (error) {
	                        promise.reject(error);
	                    });
	                } else {
	                    promise.resolve.apply(promise, result);
	                }
	            };

	            var wrappedRejectedCallback = function (error) {
	                var result = [];
	                if (rejectedCallback) {
	                    result = [rejectedCallback(error)];
	                    if (result.length === 1 && Parse.Promise.is(result[0])) {
	                        result[0].then(function () {
	                            promise.resolve.apply(promise, arguments);
	                        }, function (error) {
	                            promise.reject(error);
	                        });
	                    } else {
	                        // A Promises/A+ compliant implementation would call:
	                        // promise.resolve.apply(promise, result);
	                        promise.reject(result[0]);
	                    }
	                } else {
	                    promise.reject(error);
	                }
	            };

	            if (this._resolved) {
	                wrappedResolvedCallback.apply(this, this._result);
	            } else if (this._rejected) {
	                wrappedRejectedCallback(this._error);
	            } else {
	                this._resolvedCallbacks.push(wrappedResolvedCallback);
	                this._rejectedCallbacks.push(wrappedRejectedCallback);
	            }

	            return promise;
	        },

	        /**
	         * Add handlers to be called when the promise
	         * is either resolved or rejected
	         */
	        always: function (callback) {
	            return this.then(callback, callback);
	        },

	        /**
	         * Add handlers to be called when the Promise object is resolved
	         */
	        done: function (callback) {
	            return this.then(callback);
	        },

	        /**
	         * Add handlers to be called when the Promise object is rejected
	         */
	        fail: function (callback) {
	            return this.then(null, callback);
	        },

	        /**
	         * Run the given callbacks after this promise is fulfilled.
	         * @param optionsOrCallback {} A Backbone-style options callback, or a
	         * callback function. If this is an options object and contains a "model"
	         * attributes, that will be passed to error callbacks as the first argument.
	         * @param model {} If truthy, this will be passed as the first result of
	         * error callbacks. This is for Backbone-compatability.
	         * @return {Parse.Promise} A promise that will be resolved after the
	         * callbacks are run, with the same result as this.
	         */
	        _thenRunCallbacks: function (optionsOrCallback, model) {
	            var options;
	            if (_.isFunction(optionsOrCallback)) {
	                var callback = optionsOrCallback;
	                options = {
	                    success: function (result) {
	                        callback(result, null);
	                    },
	                    error: function (error) {
	                        callback(null, error);
	                    }
	                };
	            } else {
	                options = _.clone(optionsOrCallback);
	            }
	            options = options || {};

	            return this.then(function (result) {
	                if (options.success) {
	                    options.success.apply(this, arguments);
	                } else if (model) {
	                    // When there's no callback, a sync event should be triggered.
	                    model.trigger('sync', model, result, options);
	                }
	                return Parse.Promise.as.apply(Parse.Promise, arguments);
	            }, function (error) {
	                if (options.error) {
	                    if (!_.isUndefined(model)) {
	                        options.error(model, error);
	                    } else {
	                        options.error(error);
	                    }
	                } else if (model) {
	                    // When there's no error callback, an error event should be triggered.
	                    model.trigger('error', model, error, options);
	                }
	                // By explicitly returning a rejected Promise, this will work with
	                // either jQuery or Promises/A semantics.
	                return Parse.Promise.error(error);
	            });
	        },

	        /**
	         * Adds a callback function that should be called regardless of whether
	         * this promise failed or succeeded. The callback will be given either the
	         * array of results for its first argument, or the error as its second,
	         * depending on whether this Promise was rejected or resolved. Returns a
	         * new Promise, like "then" would.
	         * @param {Function} continuation the callback.
	         */
	        _continueWith: function (continuation) {
	            return this.then(function () {
	                return continuation(arguments, null);
	            }, function (error) {
	                return continuation(null, error);
	            });
	        }

	    });

	}(this));

	/*jshint bitwise:false *//*global FileReader: true, File: true */
	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    var b64Digit = function (number) {
	        if (number < 26) {
	            return String.fromCharCode(65 + number);
	        }
	        if (number < 52) {
	            return String.fromCharCode(97 + (number - 26));
	        }
	        if (number < 62) {
	            return String.fromCharCode(48 + (number - 52));
	        }
	        if (number === 62) {
	            return "+";
	        }
	        if (number === 63) {
	            return "/";
	        }
	        throw "Tried to encode large digit " + number + " in base64.";
	    };

	    var encodeBase64 = function (array) {
	        var chunks = [];
	        chunks.length = Math.ceil(array.length / 3);
	        _.times(chunks.length, function (i) {
	            var b1 = array[i * 3];
	            var b2 = array[i * 3 + 1] || 0;
	            var b3 = array[i * 3 + 2] || 0;

	            var has2 = (i * 3 + 1) < array.length;
	            var has3 = (i * 3 + 2) < array.length;

	            chunks[i] = [
	                b64Digit((b1 >> 2) & 0x3F),
	                b64Digit(((b1 << 4) & 0x30) | ((b2 >> 4) & 0x0F)),
	                has2 ? b64Digit(((b2 << 2) & 0x3C) | ((b3 >> 6) & 0x03)) : "=",
	                has3 ? b64Digit(b3 & 0x3F) : "="
	            ].join("");
	        });
	        return chunks.join("");
	    };


	    // A list of file extensions to mime types as found here:
	    // http://stackoverflow.com/questions/58510/using-net-how-can-you-find-the-
	    //     mime-type-of-a-file-based-on-the-file-signature
	    var mimeTypes = {
	        ai: "application/postscript",
	        aif: "audio/x-aiff",
	        aifc: "audio/x-aiff",
	        aiff: "audio/x-aiff",
	        asc: "text/plain",
	        atom: "application/atom+xml",
	        au: "audio/basic",
	        avi: "video/x-msvideo",
	        bcpio: "application/x-bcpio",
	        bin: "application/octet-stream",
	        bmp: "image/bmp",
	        cdf: "application/x-netcdf",
	        cgm: "image/cgm",
	        "class": "application/octet-stream",
	        cpio: "application/x-cpio",
	        cpt: "application/mac-compactpro",
	        csh: "application/x-csh",
	        css: "text/css",
	        dcr: "application/x-director",
	        dif: "video/x-dv",
	        dir: "application/x-director",
	        djv: "image/vnd.djvu",
	        djvu: "image/vnd.djvu",
	        dll: "application/octet-stream",
	        dmg: "application/octet-stream",
	        dms: "application/octet-stream",
	        doc: "application/msword",
	        docx: "application/vnd.openxmlformats-officedocument.wordprocessingml." +
	            "document",
	        dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml." +
	            "template",
	        docm: "application/vnd.ms-word.document.macroEnabled.12",
	        dotm: "application/vnd.ms-word.template.macroEnabled.12",
	        dtd: "application/xml-dtd",
	        dv: "video/x-dv",
	        dvi: "application/x-dvi",
	        dxr: "application/x-director",
	        eps: "application/postscript",
	        etx: "text/x-setext",
	        exe: "application/octet-stream",
	        ez: "application/andrew-inset",
	        gif: "image/gif",
	        gram: "application/srgs",
	        grxml: "application/srgs+xml",
	        gtar: "application/x-gtar",
	        hdf: "application/x-hdf",
	        hqx: "application/mac-binhex40",
	        htm: "text/html",
	        html: "text/html",
	        ice: "x-conference/x-cooltalk",
	        ico: "image/x-icon",
	        ics: "text/calendar",
	        ief: "image/ief",
	        ifb: "text/calendar",
	        iges: "model/iges",
	        igs: "model/iges",
	        jnlp: "application/x-java-jnlp-file",
	        jp2: "image/jp2",
	        jpe: "image/jpeg",
	        jpeg: "image/jpeg",
	        jpg: "image/jpeg",
	        js: "application/x-javascript",
	        kar: "audio/midi",
	        latex: "application/x-latex",
	        lha: "application/octet-stream",
	        lzh: "application/octet-stream",
	        m3u: "audio/x-mpegurl",
	        m4a: "audio/mp4a-latm",
	        m4b: "audio/mp4a-latm",
	        m4p: "audio/mp4a-latm",
	        m4u: "video/vnd.mpegurl",
	        m4v: "video/x-m4v",
	        mac: "image/x-macpaint",
	        man: "application/x-troff-man",
	        mathml: "application/mathml+xml",
	        me: "application/x-troff-me",
	        mesh: "model/mesh",
	        mid: "audio/midi",
	        midi: "audio/midi",
	        mif: "application/vnd.mif",
	        mov: "video/quicktime",
	        movie: "video/x-sgi-movie",
	        mp2: "audio/mpeg",
	        mp3: "audio/mpeg",
	        mp4: "video/mp4",
	        mpe: "video/mpeg",
	        mpeg: "video/mpeg",
	        mpg: "video/mpeg",
	        mpga: "audio/mpeg",
	        ms: "application/x-troff-ms",
	        msh: "model/mesh",
	        mxu: "video/vnd.mpegurl",
	        nc: "application/x-netcdf",
	        oda: "application/oda",
	        ogg: "application/ogg",
	        pbm: "image/x-portable-bitmap",
	        pct: "image/pict",
	        pdb: "chemical/x-pdb",
	        pdf: "application/pdf",
	        pgm: "image/x-portable-graymap",
	        pgn: "application/x-chess-pgn",
	        pic: "image/pict",
	        pict: "image/pict",
	        png: "image/png",
	        pnm: "image/x-portable-anymap",
	        pnt: "image/x-macpaint",
	        pntg: "image/x-macpaint",
	        ppm: "image/x-portable-pixmap",
	        ppt: "application/vnd.ms-powerpoint",
	        pptx: "application/vnd.openxmlformats-officedocument.presentationml." +
	            "presentation",
	        potx: "application/vnd.openxmlformats-officedocument.presentationml." +
	            "template",
	        ppsx: "application/vnd.openxmlformats-officedocument.presentationml." +
	            "slideshow",
	        ppam: "application/vnd.ms-powerpoint.addin.macroEnabled.12",
	        pptm: "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
	        potm: "application/vnd.ms-powerpoint.template.macroEnabled.12",
	        ppsm: "application/vnd.ms-powerpoint.slideshow.macroEnabled.12",
	        ps: "application/postscript",
	        qt: "video/quicktime",
	        qti: "image/x-quicktime",
	        qtif: "image/x-quicktime",
	        ra: "audio/x-pn-realaudio",
	        ram: "audio/x-pn-realaudio",
	        ras: "image/x-cmu-raster",
	        rdf: "application/rdf+xml",
	        rgb: "image/x-rgb",
	        rm: "application/vnd.rn-realmedia",
	        roff: "application/x-troff",
	        rtf: "text/rtf",
	        rtx: "text/richtext",
	        sgm: "text/sgml",
	        sgml: "text/sgml",
	        sh: "application/x-sh",
	        shar: "application/x-shar",
	        silo: "model/mesh",
	        sit: "application/x-stuffit",
	        skd: "application/x-koan",
	        skm: "application/x-koan",
	        skp: "application/x-koan",
	        skt: "application/x-koan",
	        smi: "application/smil",
	        smil: "application/smil",
	        snd: "audio/basic",
	        so: "application/octet-stream",
	        spl: "application/x-futuresplash",
	        src: "application/x-wais-source",
	        sv4cpio: "application/x-sv4cpio",
	        sv4crc: "application/x-sv4crc",
	        svg: "image/svg+xml",
	        swf: "application/x-shockwave-flash",
	        t: "application/x-troff",
	        tar: "application/x-tar",
	        tcl: "application/x-tcl",
	        tex: "application/x-tex",
	        texi: "application/x-texinfo",
	        texinfo: "application/x-texinfo",
	        tif: "image/tiff",
	        tiff: "image/tiff",
	        tr: "application/x-troff",
	        tsv: "text/tab-separated-values",
	        txt: "text/plain",
	        ustar: "application/x-ustar",
	        vcd: "application/x-cdlink",
	        vrml: "model/vrml",
	        vxml: "application/voicexml+xml",
	        wav: "audio/x-wav",
	        wbmp: "image/vnd.wap.wbmp",
	        wbmxl: "application/vnd.wap.wbxml",
	        wml: "text/vnd.wap.wml",
	        wmlc: "application/vnd.wap.wmlc",
	        wmls: "text/vnd.wap.wmlscript",
	        wmlsc: "application/vnd.wap.wmlscriptc",
	        wrl: "model/vrml",
	        xbm: "image/x-xbitmap",
	        xht: "application/xhtml+xml",
	        xhtml: "application/xhtml+xml",
	        xls: "application/vnd.ms-excel",
	        xml: "application/xml",
	        xpm: "image/x-xpixmap",
	        xsl: "application/xml",
	        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	        xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml." +
	            "template",
	        xlsm: "application/vnd.ms-excel.sheet.macroEnabled.12",
	        xltm: "application/vnd.ms-excel.template.macroEnabled.12",
	        xlam: "application/vnd.ms-excel.addin.macroEnabled.12",
	        xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
	        xslt: "application/xslt+xml",
	        xul: "application/vnd.mozilla.xul+xml",
	        xwd: "image/x-xwindowdump",
	        xyz: "chemical/x-xyz",
	        zip: "application/zip"
	    };

	    /**
	     * Reads a File using a FileReader.
	     * @param file {File} the File to read.
	     * @param type {String} (optional) the mimetype to override with.
	     * @return {Parse.Promise} A Promise that will be fulfilled with a
	     *     base64-encoded string of the data and its mime type.
	     */
	    var readAsync = function (file, type) {
	        var promise = new Parse.Promise();

	        if (typeof(FileReader) === "undefined") {
	            return Parse.Promise.error(new Parse.Error(
	                Parse.Error.FILE_READ_ERROR,
	                "Attempted to use a FileReader on an unsupported browser."));
	        }

	        var reader = new FileReader();
	        reader.onloadend = function () {
	            if (reader.readyState !== 2) {
	                promise.reject(new Parse.Error(
	                    Parse.Error.FILE_READ_ERROR,
	                    "Error reading file."));
	                return;
	            }

	            var dataURL = reader.result;
	            var matches = /^data:([^;]*);base64,(.*)$/.exec(dataURL);
	            if (!matches) {
	                promise.reject(new Parse.Error(
	                    Parse.ERROR.FILE_READ_ERROR,
	                    "Unable to interpret data URL: " + dataURL));
	                return;
	            }

	            promise.resolve(matches[2], type || matches[1]);
	        };
	        reader.readAsDataURL(file);
	        return promise;
	    };

	    /**
	     * A Parse.File is a local representation of a file that is saved to the Parse
	     * cloud.
	     * @class
	     * @param name {String} The file's name. This will be prefixed by a unique
	     *     value once the file has finished saving. The file name must begin with
	     *     an alphanumeric character, and consist of alphanumeric characters,
	     *     periods, spaces, underscores, or dashes.
	     * @param data {Array} The data for the file, as either:
	     *     1. an Array of byte value Numbers, or
	     *     2. an Object like { base64: "..." } with a base64-encoded String.
	     *     3. a File object selected with a file upload control. (3) only works
	     *        in Firefox 3.6+, Safari 6.0.2+, Chrome 7+, and IE 10+.
	     *        For example:<pre>
	     * var fileUploadControl = $("#profilePhotoFileUpload")[0];
	     * if (fileUploadControl.files.length > 0) {
	   *   var file = fileUploadControl.files[0];
	   *   var name = "photo.jpg";
	   *   var parseFile = new Parse.File(name, file);
	   *   parseFile.save().then(function() {
	   *     // The file has been saved to Parse.
	   *   }, function(error) {
	   *     // The file either could not be read, or could not be saved to Parse.
	   *   });
	   * }</pre>
	     * @param type {String} Optional Content-Type header to use for the file. If
	     *     this is omitted, the content type will be inferred from the name's
	     *     extension.
	     */
	    Parse.File = function (name, data, type) {
	        this._name = name;

	        // Guess the content type from the extension if we need to.
	        var extension = /\.([^.]*)$/.exec(name);
	        if (extension) {
	            extension = extension[1].toLowerCase();
	        }
	        var guessedType = type || mimeTypes[extension] || "text/plain";

	        if (_.isArray(data)) {
	            this._source = Parse.Promise.as(encodeBase64(data), guessedType);
	        } else if (data && data.base64) {
	            // if it contains data uri, extract based64 and the type out of it.
	            /*jslint maxlen: 1000*/
	            var dataUriRegexp = /^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,(\S+)/;
	            /*jslint maxlen: 80*/

	            var matches = dataUriRegexp.exec(data.base64);
	            if (matches && matches.length > 0) {
	                // if data URI with charset, there will have 4 matches.
	                this._source = Parse.Promise.as(
	                    (matches.length === 4 ? matches[3] : matches[2]), matches[1]
	                );
	            } else {
	                this._source = Parse.Promise.as(data.base64, guessedType);
	            }
	        } else if (typeof(File) !== "undefined" && data instanceof File) {
	            this._source = readAsync(data, type);
	        } else if (_.isString(data)) {
	            throw "Creating a Parse.File from a String is not yet supported.";
	        }
	    };

	    Parse.File.prototype = {

	        /**
	         * Gets the name of the file. Before save is called, this is the filename
	         * given by the user. After save is called, that name gets prefixed with a
	         * unique identifier.
	         */
	        name: function () {
	            return this._name;
	        },

	        /**
	         * Gets the url of the file. It is only available after you save the file or
	         * after you get the file from a Parse.Object.
	         * @return {String}
	         */
	        url: function () {
	            return this._url;
	        },

	        /**
	         * Saves the file to the Parse cloud.
	         * @param {Object} options A Backbone-style options object.
	         * @return {Parse.Promise} Promise that is resolved when the save finishes.
	         */
	        save: function (options) {
	            options = options || {};

	            var self = this;
	            if (!self._previousSave) {
	                self._previousSave = self._source.then(function (base64, type) {
	                    var data = {
	                        base64: base64,
	                        _ContentType: type
	                    };
	                    return Parse._request({
	                        route: "files",
	                        className: self._name,
	                        method: 'POST',
	                        data: data,
	                        useMasterKey: options.useMasterKey
	                    });

	                }).then(function (response) {
	                        self._name = response.name;
	                        self._url = response.url;
	                        return self;
	                    });
	            }
	            return self._previousSave._thenRunCallbacks(options);
	        }
	    };

	}(this));

	// Parse.Object is analogous to the Java ParseObject.
	// It also implements the same interface as a Backbone model.

	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * Creates a new model with defined attributes. A client id (cid) is
	     * automatically generated and assigned for you.
	     *
	     * <p>You won't normally call this method directly.  It is recommended that
	     * you use a subclass of <code>Parse.Object</code> instead, created by calling
	     * <code>extend</code>.</p>
	     *
	     * <p>However, if you don't want to use a subclass, or aren't sure which
	     * subclass is appropriate, you can use this form:<pre>
	     *     var object = new Parse.Object("ClassName");
	     * </pre>
	     * That is basically equivalent to:<pre>
	     *     var MyClass = Parse.Object.extend("ClassName");
	     *     var object = new MyClass();
	     * </pre></p>
	     *
	     * @param {Object} attributes The initial set of data to store in the object.
	     * @param {Object} options A set of Backbone-like options for creating the
	     *     object.  The only option currently supported is "collection".
	     * @see Parse.Object.extend
	     *
	     * @class
	     *
	     * <p>The fundamental unit of Parse data, which implements the Backbone Model
	     * interface.</p>
	     */
	    Parse.Object = function (attributes, options) {
	        // Allow new Parse.Object("ClassName") as a shortcut to _create.
	        if (_.isString(attributes)) {
	            return Parse.Object._create.apply(this, arguments);
	        }

	        attributes = attributes || {};
	        if (options && options.parse) {
	            attributes = this.parse(attributes);
	        }
	        var defaults = Parse._getValue(this, 'defaults');
	        if (defaults) {
	            attributes = _.extend({}, defaults, attributes);
	        }
	        if (options && options.collection) {
	            this.collection = options.collection;
	        }

	        this._serverData = {};  // The last known data for this object from cloud.
	        this._opSetQueue = [
	            {}
	        ];  // List of sets of changes to the data.
	        this.attributes = {};  // The best estimate of this's current data.

	        this._hashedJSON = {};  // Hash of values of containers at last save.
	        this._escapedAttributes = {};
	        this.cid = _.uniqueId('c');
	        this.changed = {};
	        this._silent = {};
	        this._pending = {};
	        if (!this.set(attributes, {silent: true})) {
	            throw new Error("Can't create an invalid Parse.Object");
	        }
	        this.changed = {};
	        this._silent = {};
	        this._pending = {};
	        this._hasData = true;
	        this._previousAttributes = _.clone(this.attributes);
	        this.initialize.apply(this, arguments);
	    };

	    /**
	     * @lends Parse.Object.prototype
	     * @property {String} id The objectId of the Parse Object.
	     */

	    /**
	     * Saves the given list of Parse.Object.
	     * If any error is encountered, stops and calls the error handler.
	     *
	     * <pre>
	     *   Parse.Object.saveAll([object1, object2, ...], {
	   *     success: function(list) {
	   *       // All the objects were saved.
	   *     },
	   *     error: function(error) {
	   *       // An error occurred while saving one of the objects.
	   *     },
	   *   });
	     * </pre>
	     *
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     * </ul>
	     */
	    Parse.Object.saveAll = function (list, options) {
	        options = options || {};
	        return Parse.Object._deepSaveAsync(list, {
	            useMasterKey: options.useMasterKey
	        })._thenRunCallbacks(options);
	    };

	    /**
	     * Destroy the given list of models on the server if it was already persisted.
	     * Optimistically removes each model from its collection, if it has one.
	     * If `wait: true` is passed, waits for the server to respond before removal.
	     *
	     * <p>Unlike saveAll, if an error occurs while deleting an individual model,
	     * this method will continue trying to delete the rest of the models if
	     * possible, except in the case of a fatal error like a connection error.
	     *
	     * <p>In particular, the Parse.Error object returned in the case of error may
	     * be one of two types:
	     *
	     * <ul>
	     *   <li>A Parse.Error.AGGREGATE_ERROR. This object's "errors" property is an
	     *       array of other Parse.Error objects. Each error object in this array
	     *       has an "object" property that references the object that could not be
	     *       deleted (for instance, because that object could not be found).</li>
	     *   <li>A non-aggregate Parse.Error. This indicates a serious error that
	     *       caused the delete operation to be aborted partway through (for
	     *       instance, a connection failure in the middle of the delete).</li>
	     * </ul>
	     *
	     * <pre>
	     *   Parse.Object.destroyAll([object1, object2, ...], {
	   *     success: function() {
	   *       // All the objects were deleted.
	   *     },
	   *     error: function(error) {
	   *       // An error occurred while deleting one or more of the objects.
	   *       // If this is an aggregate error, then we can inspect each error
	   *       // object individually to determine the reason why a particular
	   *       // object was not deleted.
	   *       if (error.code == Parse.Error.AGGREGATE_ERROR) {
	   *         for (var i = 0; i < error.errors.length; i++) {
	   *           console.log("Couldn't delete " + error.errors[i].object.id + 
	   *             "due to " + error.errors[i].message);
	   *         }
	   *       } else {
	   *         console.log("Delete aborted because of " + error.message);
	   *       }
	   *     },
	   *   });
	     * </pre>
	     *
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     * </ul>
	     */
	    Parse.Object.destroyAll = function (list, options) {
	        options = options || {};

	        var triggerDestroy = function (object) {
	            object.trigger('destroy', object, object.collection, options);
	        };

	        var errors = [];
	        var destroyBatch = function (batch) {
	            var promise = Parse.Promise.as();

	            if (batch.length > 0) {
	                promise = promise.then(function () {
	                    return Parse._request({
	                        route: "batch",
	                        method: "POST",
	                        useMasterKey: options.useMasterKey,
	                        data: {
	                            requests: _.map(batch, function (object) {
	                                return {
	                                    method: "DELETE",
	                                    path: "/1/classes/" + object.className + "/" + object.id
	                                };
	                            })
	                        }
	                    });
	                }).then(function (responses, status, xhr) {
	                        Parse._arrayEach(batch, function (object, i) {
	                            if (responses[i].success && options.wait) {
	                                triggerDestroy(object);
	                            } else if (responses[i].error) {
	                                var error = new Parse.Error(responses[i].error.code,
	                                    responses[i].error.error);
	                                error.object = object;

	                                errors.push(error);
	                            }
	                        });
	                    });
	            }

	            return promise;
	        };

	        var promise = Parse.Promise.as();
	        var batch = [];
	        Parse._arrayEach(list, function (object, i) {
	            if (!object.id || !options.wait) {
	                triggerDestroy(object);
	            }

	            if (object.id) {
	                batch.push(object);
	            }

	            if (batch.length === 20 || i + 1 === list.length) {
	                var thisBatch = batch;
	                batch = [];

	                promise = promise.then(function () {
	                    return destroyBatch(thisBatch);
	                });
	            }
	        });

	        return promise.then(function () {
	            if (errors.length === 0) {
	                return true;
	            } else {
	                var error = new Parse.Error(Parse.Error.AGGREGATE_ERROR,
	                    "Error deleting an object in destroyAll");
	                error.errors = errors;

	                return Parse.Promise.error(error);
	            }
	        })._thenRunCallbacks(options);
	    };

	    /**
	     * Fetches the given list of Parse.Object.
	     * If any error is encountered, stops and calls the error handler.
	     *
	     * <pre>
	     *   Parse.Object.fetchAll([object1, object2, ...], {
	   *     success: function(list) {
	   *       // All the objects were fetched.
	   *     },
	   *     error: function(error) {
	   *       // An error occurred while fetching one of the objects.
	   *     },
	   *   });
	     * </pre>
	     *
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     * </ul>
	     */
	    Parse.Object.fetchAll = function (list, options) {
	        return Parse.Object._fetchAll(
	            list,
	            true
	        )._thenRunCallbacks(options);
	    };

	    /**
	     * Fetches the given list of Parse.Object if needed.
	     * If any error is encountered, stops and calls the error handler.
	     *
	     * <pre>
	     *   Parse.Object.fetchAllIfNeeded([object1, ...], {
	   *     success: function(list) {
	   *       // Objects were fetched and updated.
	   *     },
	   *     error: function(error) {
	   *       // An error occurred while fetching one of the objects.
	   *     },
	   *   });
	     * </pre>
	     *
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     * </ul>
	     */
	    Parse.Object.fetchAllIfNeeded = function (list, options) {
	        return Parse.Object._fetchAll(
	            list,
	            false
	        )._thenRunCallbacks(options);
	    };

	    // Attach all inheritable methods to the Parse.Object prototype.
	    _.extend(Parse.Object.prototype, Parse.Events,
	        /** @lends Parse.Object.prototype */ {
	            _existed: false,

	            /**
	             * Initialize is an empty function by default. Override it with your own
	             * initialization logic.
	             */
	            initialize: function () {
	            },

	            /**
	             * Returns a JSON version of the object suitable for saving to Parse.
	             * @return {Object}
	             */
	            toJSON: function () {
	                var json = this._toFullJSON();
	                Parse._arrayEach(["__type", "className"],
	                    function (key) {
	                        delete json[key];
	                    });
	                return json;
	            },

	            _toFullJSON: function (seenObjects) {
	                var json = _.clone(this.attributes);
	                Parse._objectEach(json, function (val, key) {
	                    json[key] = Parse._encode(val, seenObjects);
	                });
	                Parse._objectEach(this._operations, function (val, key) {
	                    json[key] = val;
	                });

	                if (_.has(this, "id")) {
	                    json.objectId = this.id;
	                }
	                if (_.has(this, "createdAt")) {
	                    if (_.isDate(this.createdAt)) {
	                        json.createdAt = this.createdAt.toJSON();
	                    } else {
	                        json.createdAt = this.createdAt;
	                    }
	                }

	                if (_.has(this, "updatedAt")) {
	                    if (_.isDate(this.updatedAt)) {
	                        json.updatedAt = this.updatedAt.toJSON();
	                    } else {
	                        json.updatedAt = this.updatedAt;
	                    }
	                }
	                json.__type = "Object";
	                json.className = this.className;
	                return json;
	            },

	            /**
	             * Updates _hashedJSON to reflect the current state of this object.
	             * Adds any changed hash values to the set of pending changes.
	             */
	            _refreshCache: function () {
	                var self = this;
	                if (self._refreshingCache) {
	                    return;
	                }
	                self._refreshingCache = true;
	                Parse._objectEach(this.attributes, function (value, key) {
	                    if (value instanceof Parse.Object) {
	                        value._refreshCache();
	                    } else if (_.isObject(value)) {
	                        if (self._resetCacheForKey(key)) {
	                            self.set(key, new Parse.Op.Set(value), { silent: true });
	                        }
	                    }
	                });
	                delete self._refreshingCache;
	            },

	            /**
	             * Returns true if this object has been modified since its last
	             * save/refresh.  If an attribute is specified, it returns true only if that
	             * particular attribute has been modified since the last save/refresh.
	             * @param {String} attr An attribute name (optional).
	             * @return {Boolean}
	             */
	            dirty: function (attr) {
	                this._refreshCache();

	                var currentChanges = _.last(this._opSetQueue);

	                if (attr) {
	                    return (currentChanges[attr] ? true : false);
	                }
	                if (!this.id) {
	                    return true;
	                }
	                if (_.keys(currentChanges).length > 0) {
	                    return true;
	                }
	                return false;
	            },

	            /**
	             * Returns an array of keys that have been modified since last save/refresh
	             * @return {Array of string}
	             */
	            dirtyKeys: function () {
	                return _.keys(_.last(this._opSetQueue));
	            },

	            /**
	             * Gets a Pointer referencing this Object.
	             */
	            _toPointer: function () {
	                if (!this.id) {
	                    throw new Error("Can't serialize an unsaved Parse.Object");
	                }
	                return { __type: "Pointer",
	                    className: this.className,
	                    objectId: this.id };
	            },

	            /**
	             * Gets the value of an attribute.
	             * @param {String} attr The string name of an attribute.
	             */
	            get: function (attr) {
	                return this.attributes[attr];
	            },

	            /**
	             * Gets a relation on the given class for the attribute.
	             * @param String attr The attribute to get the relation for.
	             */
	            relation: function (attr) {
	                var value = this.get(attr);
	                if (value) {
	                    if (!(value instanceof Parse.Relation)) {
	                        throw "Called relation() on non-relation field " + attr;
	                    }
	                    value._ensureParentAndKey(this, attr);
	                    return value;
	                } else {
	                    return new Parse.Relation(this, attr);
	                }
	            },

	            /**
	             * Gets the HTML-escaped value of an attribute.
	             */
	            escape: function (attr) {
	                var html = this._escapedAttributes[attr];
	                if (html) {
	                    return html;
	                }
	                var val = this.attributes[attr];
	                var escaped;
	                if (Parse._isNullOrUndefined(val)) {
	                    escaped = '';
	                } else {
	                    escaped = _.escape(val.toString());
	                }
	                this._escapedAttributes[attr] = escaped;
	                return escaped;
	            },

	            /**
	             * Returns <code>true</code> if the attribute contains a value that is not
	             * null or undefined.
	             * @param {String} attr The string name of the attribute.
	             * @return {Boolean}
	             */
	            has: function (attr) {
	                return !Parse._isNullOrUndefined(this.attributes[attr]);
	            },

	            /**
	             * Pulls "special" fields like objectId, createdAt, etc. out of attrs
	             * and puts them on "this" directly.  Removes them from attrs.
	             * @param attrs - A dictionary with the data for this Parse.Object.
	             */
	            _mergeMagicFields: function (attrs) {
	                // Check for changes of magic fields.
	                var model = this;
	                var specialFields = ["id", "objectId", "createdAt", "updatedAt"];
	                Parse._arrayEach(specialFields, function (attr) {
	                    if (attrs[attr]) {
	                        if (attr === "objectId") {
	                            model.id = attrs[attr];
	                        } else if ((attr === "createdAt" || attr === "updatedAt") && !_.isDate(attrs[attr])) {
	                            model[attr] = Parse._parseDate(attrs[attr]);
	                        } else {
	                            model[attr] = attrs[attr];
	                        }
	                        delete attrs[attr];
	                    }
	                });
	            },

	            /**
	             * Copies the given serverData to "this", refreshes attributes, and
	             * clears pending changes;
	             */
	            _copyServerData: function (serverData) {
	                // Copy server data
	                var tempServerData = {};
	                Parse._objectEach(serverData, function (value, key) {
	                    tempServerData[key] = Parse._decode(key, value);
	                });
	                this._serverData = tempServerData;

	                // Refresh the attributes.
	                this._rebuildAllEstimatedData();


	                // Clear out any changes the user might have made previously.
	                this._refreshCache();
	                this._opSetQueue = [
	                    {}
	                ];

	                // Refresh the attributes again.
	                this._rebuildAllEstimatedData();
	            },

	            /**
	             * Merges another object's attributes into this object.
	             */
	            _mergeFromObject: function (other) {
	                if (!other) {
	                    return;
	                }

	                // This does the inverse of _mergeMagicFields.
	                this.id = other.id;
	                this.createdAt = other.createdAt;
	                this.updatedAt = other.updatedAt;

	                this._copyServerData(other._serverData);

	                this._hasData = true;
	            },

	            /**
	             * Returns the json to be sent to the server.
	             */
	            _startSave: function () {
	                this._opSetQueue.push({});
	            },

	            /**
	             * Called when a save fails because of an error. Any changes that were part
	             * of the save need to be merged with changes made after the save. This
	             * might throw an exception is you do conflicting operations. For example,
	             * if you do:
	             *   object.set("foo", "bar");
	             *   object.set("invalid field name", "baz");
	             *   object.save();
	             *   object.increment("foo");
	             * then this will throw when the save fails and the client tries to merge
	             * "bar" with the +1.
	             */
	            _cancelSave: function () {
	                var self = this;
	                var failedChanges = _.first(this._opSetQueue);
	                this._opSetQueue = _.rest(this._opSetQueue);
	                var nextChanges = _.first(this._opSetQueue);
	                Parse._objectEach(failedChanges, function (op, key) {
	                    var op1 = failedChanges[key];
	                    var op2 = nextChanges[key];
	                    if (op1 && op2) {
	                        nextChanges[key] = op2._mergeWithPrevious(op1);
	                    } else if (op1) {
	                        nextChanges[key] = op1;
	                    }
	                });
	                this._saving = this._saving - 1;
	            },

	            /**
	             * Called when a save completes successfully. This merges the changes that
	             * were saved into the known server data, and overrides it with any data
	             * sent directly from the server.
	             */
	            _finishSave: function (serverData) {
	                // Grab a copy of any object referenced by this object. These instances
	                // may have already been fetched, and we don't want to lose their data.
	                // Note that doing it like this means we will unify separate copies of the
	                // same object, but that's a risk we have to take.
	                var fetchedObjects = {};
	                Parse._traverse(this.attributes, function (object) {
	                    if (object instanceof Parse.Object && object.id && object._hasData) {
	                        fetchedObjects[object.id] = object;
	                    }
	                });

	                var savedChanges = _.first(this._opSetQueue);
	                this._opSetQueue = _.rest(this._opSetQueue);
	                this._applyOpSet(savedChanges, this._serverData);
	                this._mergeMagicFields(serverData);
	                var self = this;
	                Parse._objectEach(serverData, function (value, key) {
	                    self._serverData[key] = Parse._decode(key, value);

	                    // Look for any objects that might have become unfetched and fix them
	                    // by replacing their values with the previously observed values.
	                    var fetched = Parse._traverse(self._serverData[key], function (object) {
	                        if (object instanceof Parse.Object && fetchedObjects[object.id]) {
	                            return fetchedObjects[object.id];
	                        }
	                    });
	                    if (fetched) {
	                        self._serverData[key] = fetched;
	                    }
	                });
	                this._rebuildAllEstimatedData();
	                this._saving = this._saving - 1;
	            },

	            /**
	             * Called when a fetch or login is complete to set the known server data to
	             * the given object.
	             */
	            _finishFetch: function (serverData, hasData) {

	                this._opSetQueue = [
	                    {}
	                ];

	                // Bring in all the new server data.
	                this._mergeMagicFields(serverData);
	                this._copyServerData(serverData);

	                this._hasData = hasData;
	            },

	            /**
	             * Applies the set of Parse.Op in opSet to the object target.
	             */
	            _applyOpSet: function (opSet, target) {
	                var self = this;
	                Parse._objectEach(opSet, function (change, key) {
	                    target[key] = change._estimate(target[key], self, key);
	                    if (target[key] === Parse.Op._UNSET) {
	                        delete target[key];
	                    }
	                });
	            },

	            /**
	             * Replaces the cached value for key with the current value.
	             * Returns true if the new value is different than the old value.
	             */
	            _resetCacheForKey: function (key) {
	                var value = this.attributes[key];
	                if (_.isObject(value) && !(value instanceof Parse.Object) && !(value instanceof Parse.File)) {
	                    value = value.toJSON ? value.toJSON() : value;
	                    var json = JSON.stringify(value);
	                    if (this._hashedJSON[key] !== json) {
	                        this._hashedJSON[key] = json;
	                        return true;
	                    }
	                }
	                return false;
	            },

	            /**
	             * Populates attributes[key] by starting with the last known data from the
	             * server, and applying all of the local changes that have been made to that
	             * key since then.
	             */
	            _rebuildEstimatedDataForKey: function (key) {
	                var self = this;
	                delete this.attributes[key];
	                if (this._serverData[key]) {
	                    this.attributes[key] = this._serverData[key];
	                }
	                Parse._arrayEach(this._opSetQueue, function (opSet) {
	                    var op = opSet[key];
	                    if (op) {
	                        self.attributes[key] = op._estimate(self.attributes[key], self, key);
	                        if (self.attributes[key] === Parse.Op._UNSET) {
	                            delete self.attributes[key];
	                        } else {
	                            self._resetCacheForKey(key);
	                        }
	                    }
	                });
	            },

	            /**
	             * Populates attributes by starting with the last known data from the
	             * server, and applying all of the local changes that have been made since
	             * then.
	             */
	            _rebuildAllEstimatedData: function () {
	                var self = this;

	                var previousAttributes = _.clone(this.attributes);

	                this.attributes = _.clone(this._serverData);
	                Parse._arrayEach(this._opSetQueue, function (opSet) {
	                    self._applyOpSet(opSet, self.attributes);
	                    Parse._objectEach(opSet, function (op, key) {
	                        self._resetCacheForKey(key);
	                    });
	                });

	                // Trigger change events for anything that changed because of the fetch.
	                Parse._objectEach(previousAttributes, function (oldValue, key) {
	                    if (self.attributes[key] !== oldValue) {
	                        self.trigger('change:' + key, self, self.attributes[key], {});
	                    }
	                });
	                Parse._objectEach(this.attributes, function (newValue, key) {
	                    if (!_.has(previousAttributes, key)) {
	                        self.trigger('change:' + key, self, newValue, {});
	                    }
	                });
	            },

	            /**
	             * Sets a hash of model attributes on the object, firing
	             * <code>"change"</code> unless you choose to silence it.
	             *
	             * <p>You can call it with an object containing keys and values, or with one
	             * key and value.  For example:<pre>
	             *   gameTurn.set({
	     *     player: player1,
	     *     diceRoll: 2
	     *   }, {
	     *     error: function(gameTurnAgain, error) {
	     *       // The set failed validation.
	     *     }
	     *   });
	             *
	             *   game.set("currentPlayer", player2, {
	     *     error: function(gameTurnAgain, error) {
	     *       // The set failed validation.
	     *     }
	     *   });
	             *
	             *   game.set("finished", true);</pre></p>
	             *
	             * @param {String} key The key to set.
	             * @param {} value The value to give it.
	             * @param {Object} options A set of Backbone-like options for the set.
	             *     The only supported options are <code>silent</code>,
	             *     <code>error</code>, and <code>promise</code>.
	             * @return {Boolean} true if the set succeeded.
	             * @see Parse.Object#validate
	             * @see Parse.Error
	             */
	            set: function (key, value, options) {
	                var attrs, attr;
	                if (_.isObject(key) || Parse._isNullOrUndefined(key)) {
	                    attrs = key;
	                    Parse._objectEach(attrs, function (v, k) {
	                        attrs[k] = Parse._decode(k, v);
	                    });
	                    options = value;
	                } else {
	                    attrs = {};
	                    attrs[key] = Parse._decode(key, value);
	                }

	                // Extract attributes and options.
	                options = options || {};
	                if (!attrs) {
	                    return this;
	                }
	                if (attrs instanceof Parse.Object) {
	                    attrs = attrs.attributes;
	                }

	                // If the unset option is used, every attribute should be a Unset.
	                if (options.unset) {
	                    Parse._objectEach(attrs, function (unused_value, key) {
	                        attrs[key] = new Parse.Op.Unset();
	                    });
	                }

	                // Apply all the attributes to get the estimated values.
	                var dataToValidate = _.clone(attrs);
	                var self = this;
	                Parse._objectEach(dataToValidate, function (value, key) {
	                    if (value instanceof Parse.Op) {
	                        dataToValidate[key] = value._estimate(self.attributes[key],
	                            self, key);
	                        if (dataToValidate[key] === Parse.Op._UNSET) {
	                            delete dataToValidate[key];
	                        }
	                    }
	                });

	                // Run validation.
	                if (!this._validate(attrs, options)) {
	                    return false;
	                }

	                this._mergeMagicFields(attrs);

	                options.changes = {};
	                var escaped = this._escapedAttributes;
	                var prev = this._previousAttributes || {};

	                // Update attributes.
	                Parse._arrayEach(_.keys(attrs), function (attr) {
	                    var val = attrs[attr];

	                    // If this is a relation object we need to set the parent correctly,
	                    // since the location where it was parsed does not have access to
	                    // this object.
	                    if (val instanceof Parse.Relation) {
	                        val.parent = self;
	                    }

	                    if (!(val instanceof Parse.Op)) {
	                        val = new Parse.Op.Set(val);
	                    }

	                    // See if this change will actually have any effect.
	                    var isRealChange = true;
	                    if (val instanceof Parse.Op.Set &&
	                        _.isEqual(self.attributes[attr], val.value)) {
	                        isRealChange = false;
	                    }

	                    if (isRealChange) {
	                        delete escaped[attr];
	                        if (options.silent) {
	                            self._silent[attr] = true;
	                        } else {
	                            options.changes[attr] = true;
	                        }
	                    }

	                    var currentChanges = _.last(self._opSetQueue);
	                    currentChanges[attr] = val._mergeWithPrevious(currentChanges[attr]);
	                    self._rebuildEstimatedDataForKey(attr);

	                    if (isRealChange) {
	                        self.changed[attr] = self.attributes[attr];
	                        if (!options.silent) {
	                            self._pending[attr] = true;
	                        }
	                    } else {
	                        delete self.changed[attr];
	                        delete self._pending[attr];
	                    }
	                });

	                if (!options.silent) {
	                    this.change(options);
	                }
	                return this;
	            },

	            /**
	             * Remove an attribute from the model, firing <code>"change"</code> unless
	             * you choose to silence it. This is a noop if the attribute doesn't
	             * exist.
	             */
	            unset: function (attr, options) {
	                options = options || {};
	                options.unset = true;
	                return this.set(attr, null, options);
	            },

	            /**
	             * Atomically increments the value of the given attribute the next time the
	             * object is saved. If no amount is specified, 1 is used by default.
	             *
	             * @param attr {String} The key.
	             * @param amount {Number} The amount to increment by.
	             */
	            increment: function (attr, amount) {
	                if (_.isUndefined(amount) || _.isNull(amount)) {
	                    amount = 1;
	                }
	                return this.set(attr, new Parse.Op.Increment(amount));
	            },

	            /**
	             * Atomically add an object to the end of the array associated with a given
	             * key.
	             * @param attr {String} The key.
	             * @param item {} The item to add.
	             */
	            add: function (attr, item) {
	                return this.set(attr, new Parse.Op.Add([item]));
	            },

	            /**
	             * Atomically add an object to the array associated with a given key, only
	             * if it is not already present in the array. The position of the insert is
	             * not guaranteed.
	             *
	             * @param attr {String} The key.
	             * @param item {} The object to add.
	             */
	            addUnique: function (attr, item) {
	                return this.set(attr, new Parse.Op.AddUnique([item]));
	            },

	            /**
	             * Atomically remove all instances of an object from the array associated
	             * with a given key.
	             *
	             * @param attr {String} The key.
	             * @param item {} The object to remove.
	             */
	            remove: function (attr, item) {
	                return this.set(attr, new Parse.Op.Remove([item]));
	            },

	            /**
	             * Returns an instance of a subclass of Parse.Op describing what kind of
	             * modification has been performed on this field since the last time it was
	             * saved. For example, after calling object.increment("x"), calling
	             * object.op("x") would return an instance of Parse.Op.Increment.
	             *
	             * @param attr {String} The key.
	             * @returns {Parse.Op} The operation, or undefined if none.
	             */
	            op: function (attr) {
	                return _.last(this._opSetQueue)[attr];
	            },

	            /**
	             * Clear all attributes on the model, firing <code>"change"</code> unless
	             * you choose to silence it.
	             */
	            clear: function (options) {
	                options = options || {};
	                options.unset = true;
	                var keysToClear = _.extend(this.attributes, this._operations);
	                return this.set(keysToClear, options);
	            },

	            /**
	             * Returns a JSON-encoded set of operations to be sent with the next save
	             * request.
	             */
	            _getSaveJSON: function () {
	                var json = _.clone(_.first(this._opSetQueue));
	                Parse._objectEach(json, function (op, key) {
	                    json[key] = op.toJSON();
	                });
	                return json;
	            },

	            /**
	             * Returns true if this object can be serialized for saving.
	             */
	            _canBeSerialized: function () {
	                return Parse.Object._canBeSerializedAsValue(this.attributes);
	            },

	            /**
	             * Fetch the model from the server. If the server's representation of the
	             * model differs from its current attributes, they will be overriden,
	             * triggering a <code>"change"</code> event.
	             *
	             * @param {Object} options A Backbone-style callback object.
	             * Valid options are:<ul>
	             *   <li>success: A Backbone-style success callback.
	             *   <li>error: An Backbone-style error callback.
	             *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	             *     be used for this request.
	             * </ul>
	             * @return {Parse.Promise} A promise that is fulfilled when the fetch
	             *     completes.
	             */
	            fetch: function (options) {
	                var self = this;
	                options = options || {};
	                var request = Parse._request({
	                    method: 'GET',
	                    route: "classes",
	                    className: this.className,
	                    objectId: this.id,
	                    useMasterKey: options.useMasterKey
	                });
	                return request.then(function (response, status, xhr) {
	                    self._finishFetch(self.parse(response, status, xhr), true);
	                    return self;
	                })._thenRunCallbacks(options, this);
	            },

	            /**
	             * Set a hash of model attributes, and save the model to the server.
	             * updatedAt will be updated when the request returns.
	             * You can either call it as:<pre>
	             *   object.save();</pre>
	             * or<pre>
	             *   object.save(null, options);</pre>
	             * or<pre>
	             *   object.save(attrs, options);</pre>
	             * or<pre>
	             *   object.save(key, value, options);</pre>
	             *
	             * For example, <pre>
	             *   gameTurn.save({
	     *     player: "Jake Cutter",
	     *     diceRoll: 2
	     *   }, {
	     *     success: function(gameTurnAgain) {
	     *       // The save was successful.
	     *     },
	     *     error: function(gameTurnAgain, error) {
	     *       // The save failed.  Error is an instance of Parse.Error.
	     *     }
	     *   });</pre>
	             * or with promises:<pre>
	             *   gameTurn.save({
	     *     player: "Jake Cutter",
	     *     diceRoll: 2
	     *   }).then(function(gameTurnAgain) {
	     *     // The save was successful.
	     *   }, function(error) {
	     *     // The save failed.  Error is an instance of Parse.Error.
	     *   });</pre>
	             *
	             * @param {Object} options A Backbone-style callback object.
	             * Valid options are:<ul>
	             *   <li>wait: Set to true to wait for the server to confirm a successful
	             *   save before modifying the attributes on the object.
	             *   <li>silent: Set to true to avoid firing the `set` event.
	             *   <li>success: A Backbone-style success callback.
	             *   <li>error: An Backbone-style error callback.
	             *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	             *     be used for this request.
	             * </ul>
	             * @return {Parse.Promise} A promise that is fulfilled when the save
	             *     completes.
	             * @see Parse.Error
	             */
	            save: function (arg1, arg2, arg3) {
	                var i, attrs, current, options, saved;
	                if (_.isObject(arg1) || Parse._isNullOrUndefined(arg1)) {
	                    attrs = arg1;
	                    options = arg2;
	                } else {
	                    attrs = {};
	                    attrs[arg1] = arg2;
	                    options = arg3;
	                }

	                // Make save({ success: function() {} }) work.
	                if (!options && attrs) {
	                    var extra_keys = _.reject(attrs, function (value, key) {
	                        return _.include(["success", "error", "wait"], key);
	                    });
	                    if (extra_keys.length === 0) {
	                        var all_functions = true;
	                        if (_.has(attrs, "success") && !_.isFunction(attrs.success)) {
	                            all_functions = false;
	                        }
	                        if (_.has(attrs, "error") && !_.isFunction(attrs.error)) {
	                            all_functions = false;
	                        }
	                        if (all_functions) {
	                            // This attrs object looks like it's really an options object,
	                            // and there's no other options object, so let's just use it.
	                            return this.save(null, attrs);
	                        }
	                    }
	                }

	                options = _.clone(options) || {};
	                if (options.wait) {
	                    current = _.clone(this.attributes);
	                }

	                var setOptions = _.clone(options) || {};
	                if (setOptions.wait) {
	                    setOptions.silent = true;
	                }
	                var setError;
	                setOptions.error = function (model, error) {
	                    setError = error;
	                };
	                if (attrs && !this.set(attrs, setOptions)) {
	                    return Parse.Promise.error(setError)._thenRunCallbacks(options, this);
	                }

	                var model = this;

	                // If there is any unsaved child, save it first.
	                model._refreshCache();


	                var unsavedChildren = [];
	                var unsavedFiles = [];
	                Parse.Object._findUnsavedChildren(model.attributes,
	                    unsavedChildren,
	                    unsavedFiles);
	                if (unsavedChildren.length + unsavedFiles.length > 0) {
	                    return Parse.Object._deepSaveAsync(this.attributes, {
	                        useMasterKey: options.useMasterKey
	                    }).then(function () {
	                            return model.save(null, options);
	                        }, function (error) {
	                            return Parse.Promise.error(error)._thenRunCallbacks(options, model);
	                        });
	                }

	                this._startSave();
	                this._saving = (this._saving || 0) + 1;

	                this._allPreviousSaves = this._allPreviousSaves || Parse.Promise.as();
	                this._allPreviousSaves = this._allPreviousSaves._continueWith(function () {
	                    var method = model.id ? 'PUT' : 'POST';

	                    var json = model._getSaveJSON();

	                    var route = "classes";
	                    var className = model.className;
	                    if (model.className === "_User" && !model.id) {
	                        // Special-case user sign-up.
	                        route = "users";
	                        className = null;
	                    }
	                    var request = Parse._request({
	                        route: route,
	                        className: className,
	                        objectId: model.id,
	                        method: method,
	                        useMasterKey: options.useMasterKey,
	                        data: json
	                    });

	                    request = request.then(function (resp, status, xhr) {
	                        var serverAttrs = model.parse(resp, status, xhr);
	                        if (options.wait) {
	                            serverAttrs = _.extend(attrs || {}, serverAttrs);
	                        }
	                        model._finishSave(serverAttrs);
	                        if (options.wait) {
	                            model.set(current, setOptions);
	                        }
	                        return model;

	                    },function (error) {
	                        model._cancelSave();
	                        return Parse.Promise.error(error);

	                    })._thenRunCallbacks(options, model);

	                    return request;
	                });
	                return this._allPreviousSaves;
	            },

	            /**
	             * Destroy this model on the server if it was already persisted.
	             * Optimistically removes the model from its collection, if it has one.
	             * If `wait: true` is passed, waits for the server to respond
	             * before removal.
	             *
	             * @param {Object} options A Backbone-style callback object.
	             * Valid options are:<ul>
	             *   <li>wait: Set to true to wait for the server to confirm successful
	             *   deletion of the object before triggering the `destroy` event.
	             *   <li>success: A Backbone-style success callback
	             *   <li>error: An Backbone-style error callback.
	             *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	             *     be used for this request.
	             * </ul>
	             * @return {Parse.Promise} A promise that is fulfilled when the destroy
	             *     completes.
	             */
	            destroy: function (options) {
	                options = options || {};
	                var model = this;

	                var triggerDestroy = function () {
	                    model.trigger('destroy', model, model.collection, options);
	                };

	                if (!this.id) {
	                    return triggerDestroy();
	                }

	                if (!options.wait) {
	                    triggerDestroy();
	                }

	                var request = Parse._request({
	                    route: "classes",
	                    className: this.className,
	                    objectId: this.id,
	                    method: 'DELETE',
	                    useMasterKey: options.useMasterKey
	                });
	                return request.then(function () {
	                    if (options.wait) {
	                        triggerDestroy();
	                    }
	                    return model;
	                })._thenRunCallbacks(options, this);
	            },

	            /**
	             * Converts a response into the hash of attributes to be set on the model.
	             * @ignore
	             */
	            parse: function (resp, status, xhr) {
	                var output = _.clone(resp);
	                _(["createdAt", "updatedAt"]).each(function (key) {
	                    if (output[key]) {
	                        output[key] = Parse._parseDate(output[key]);
	                    }
	                });
	                if (!output.updatedAt) {
	                    output.updatedAt = output.createdAt;
	                }
	                if (status) {
	                    this._existed = (status !== 201);
	                }
	                return output;
	            },

	            /**
	             * Creates a new model with identical attributes to this one.
	             * @return {Parse.Object}
	             */
	            clone: function () {
	                return new this.constructor(this.attributes);
	            },

	            /**
	             * Returns true if this object has never been saved to Parse.
	             * @return {Boolean}
	             */
	            isNew: function () {
	                return !this.id;
	            },

	            /**
	             * Call this method to manually fire a `"change"` event for this model and
	             * a `"change:attribute"` event for each changed attribute.
	             * Calling this will cause all objects observing the model to update.
	             */
	            change: function (options) {
	                options = options || {};
	                var changing = this._changing;
	                this._changing = true;

	                // Silent changes become pending changes.
	                var self = this;
	                Parse._objectEach(this._silent, function (attr) {
	                    self._pending[attr] = true;
	                });

	                // Silent changes are triggered.
	                var changes = _.extend({}, options.changes, this._silent);
	                this._silent = {};
	                Parse._objectEach(changes, function (unused_value, attr) {
	                    self.trigger('change:' + attr, self, self.get(attr), options);
	                });
	                if (changing) {
	                    return this;
	                }

	                // This is to get around lint not letting us make a function in a loop.
	                var deleteChanged = function (value, attr) {
	                    if (!self._pending[attr] && !self._silent[attr]) {
	                        delete self.changed[attr];
	                    }
	                };

	                // Continue firing `"change"` events while there are pending changes.
	                while (!_.isEmpty(this._pending)) {
	                    this._pending = {};
	                    this.trigger('change', this, options);
	                    // Pending and silent changes still remain.
	                    Parse._objectEach(this.changed, deleteChanged);
	                    self._previousAttributes = _.clone(this.attributes);
	                }

	                this._changing = false;
	                return this;
	            },

	            /**
	             * Returns true if this object was created by the Parse server when the
	             * object might have already been there (e.g. in the case of a Facebook
	             * login)
	             */
	            existed: function () {
	                return this._existed;
	            },

	            /**
	             * Determine if the model has changed since the last <code>"change"</code>
	             * event.  If you specify an attribute name, determine if that attribute
	             * has changed.
	             * @param {String} attr Optional attribute name
	             * @return {Boolean}
	             */
	            hasChanged: function (attr) {
	                if (!arguments.length) {
	                    return !_.isEmpty(this.changed);
	                }
	                return this.changed && _.has(this.changed, attr);
	            },

	            /**
	             * Returns an object containing all the attributes that have changed, or
	             * false if there are no changed attributes. Useful for determining what
	             * parts of a view need to be updated and/or what attributes need to be
	             * persisted to the server. Unset attributes will be set to undefined.
	             * You can also pass an attributes object to diff against the model,
	             * determining if there *would be* a change.
	             */
	            changedAttributes: function (diff) {
	                if (!diff) {
	                    return this.hasChanged() ? _.clone(this.changed) : false;
	                }
	                var changed = {};
	                var old = this._previousAttributes;
	                Parse._objectEach(diff, function (diffVal, attr) {
	                    if (!_.isEqual(old[attr], diffVal)) {
	                        changed[attr] = diffVal;
	                    }
	                });
	                return changed;
	            },

	            /**
	             * Gets the previous value of an attribute, recorded at the time the last
	             * <code>"change"</code> event was fired.
	             * @param {String} attr Name of the attribute to get.
	             */
	            previous: function (attr) {
	                if (!arguments.length || !this._previousAttributes) {
	                    return null;
	                }
	                return this._previousAttributes[attr];
	            },

	            /**
	             * Gets all of the attributes of the model at the time of the previous
	             * <code>"change"</code> event.
	             * @return {Object}
	             */
	            previousAttributes: function () {
	                return _.clone(this._previousAttributes);
	            },

	            /**
	             * Checks if the model is currently in a valid state. It's only possible to
	             * get into an *invalid* state if you're using silent changes.
	             * @return {Boolean}
	             */
	            isValid: function () {
	                return !this.validate(this.attributes);
	            },

	            /**
	             * You should not call this function directly unless you subclass
	             * <code>Parse.Object</code>, in which case you can override this method
	             * to provide additional validation on <code>set</code> and
	             * <code>save</code>.  Your implementation should return
	             *
	             * @param {Object} attrs The current data to validate.
	             * @param {Object} options A Backbone-like options object.
	             * @return {} False if the data is valid.  An error object otherwise.
	             * @see Parse.Object#set
	             */
	            validate: function (attrs, options) {
	                if (_.has(attrs, "ACL") && !(attrs.ACL instanceof Parse.ACL)) {
	                    return new Parse.Error(Parse.Error.OTHER_CAUSE,
	                        "ACL must be a Parse.ACL.");
	                }
	                var correct = true;
	                Parse._objectEach(attrs, function (unused_value, key) {
	                    if (!(/^[A-Za-z][0-9A-Za-z_]*$/).test(key)) {
	                        correct = false;
	                    }
	                });
	                if (!correct) {
	                    return new Parse.Error(Parse.Error.INVALID_KEY_NAME);
	                }
	                return false;
	            },

	            /**
	             * Run validation against a set of incoming attributes, returning `true`
	             * if all is well. If a specific `error` callback has been passed,
	             * call that instead of firing the general `"error"` event.
	             */
	            _validate: function (attrs, options) {
	                if (options.silent || !this.validate) {
	                    return true;
	                }
	                attrs = _.extend({}, this.attributes, attrs);
	                var error = this.validate(attrs, options);
	                if (!error) {
	                    return true;
	                }
	                if (options && options.error) {
	                    options.error(this, error, options);
	                } else {
	                    this.trigger('error', this, error, options);
	                }
	                return false;
	            },

	            /**
	             * Returns the ACL for this object.
	             * @returns {Parse.ACL} An instance of Parse.ACL.
	             * @see Parse.Object#get
	             */
	            getACL: function () {
	                return this.get("ACL");
	            },

	            /**
	             * Sets the ACL to be used for this object.
	             * @param {Parse.ACL} acl An instance of Parse.ACL.
	             * @param {Object} options Optional Backbone-like options object to be
	             *     passed in to set.
	             * @return {Boolean} Whether the set passed validation.
	             * @see Parse.Object#set
	             */
	            setACL: function (acl, options) {
	                return this.set("ACL", acl, options);
	            }

	        });

	    /**
	     * Returns the appropriate subclass for making new instances of the given
	     * className string.
	     */
	    Parse.Object._getSubclass = function (className) {
	        if (!_.isString(className)) {
	            throw "Parse.Object._getSubclass requires a string argument.";
	        }
	        var ObjectClass = Parse.Object._classMap[className];
	        if (!ObjectClass) {
	            ObjectClass = Parse.Object.extend(className);
	            Parse.Object._classMap[className] = ObjectClass;
	        }
	        return ObjectClass;
	    };

	    /**
	     * Creates an instance of a subclass of Parse.Object for the given classname.
	     */
	    Parse.Object._create = function (className, attributes, options) {
	        var ObjectClass = Parse.Object._getSubclass(className);
	        return new ObjectClass(attributes, options);
	    };

	    /**
	     * Returns a list of object ids given a list of objects.
	     */
	    Parse.Object._toObjectIdArray = function (list, omitObjectsWithData) {
	        if (list.length === 0) {
	            return Parse.Promise.as(list);
	        }

	        var error;
	        var className = list[0].className;
	        var objectIds = [];
	        for (var i = 0; i < list.length; i++) {
	            var object = list[i];
	            if (className !== object.className) {
	                error = new Parse.Error(Parse.Error.INVALID_CLASS_NAME,
	                    "All objects should be of the same class");
	                return Parse.Promise.error(error);
	            } else if (!object.id) {
	                error = new Parse.Error(Parse.Error.MISSING_OBJECT_ID,
	                    "All objects must have an ID");
	                return Parse.Promise.error(error);
	            } else if (omitObjectsWithData && object._hasData) {
	                continue;
	            }
	            objectIds.push(object.id);
	        }

	        return Parse.Promise.as(objectIds);
	    };

	    /**
	     * Updates a list of objects with fetched results.
	     */
	    Parse.Object._updateWithFetchedResults = function (list, fetched, forceFetch) {
	        var fetchedObjectsById = {};
	        Parse._arrayEach(fetched, function (object, i) {
	            fetchedObjectsById[object.id] = object;
	        });

	        for (var i = 0; i < list.length; i++) {
	            var object = list[i];
	            var fetchedObject = fetchedObjectsById[object.id];
	            if (!fetchedObject && forceFetch) {
	                var error = new Parse.Error(Parse.Error.OBJECT_NOT_FOUND,
	                    "All objects must exist on the server");
	                return Parse.Promise.error(error);
	            }

	            object._mergeFromObject(fetchedObject);
	        }

	        return Parse.Promise.as(list);
	    };

	    /**
	     * Fetches the objects given in list.  The forceFetch option will fetch all
	     * objects if true and ignore objects with data if false.
	     */
	    Parse.Object._fetchAll = function (list, forceFetch) {
	        if (list.length === 0) {
	            return Parse.Promise.as(list);
	        }

	        var omitObjectsWithData = !forceFetch;
	        return Parse.Object._toObjectIdArray(
	                list,
	                omitObjectsWithData
	            ).then(function (objectIds) {
	                var className = list[0].className;
	                var query = new Parse.Query(className);
	                query.containedIn("objectId", objectIds);
	                query.limit = objectIds.length;
	                return query.find();
	            }).then(function (results) {
	                return Parse.Object._updateWithFetchedResults(
	                    list,
	                    results,
	                    forceFetch
	                );
	            });
	    };

	    // Set up a map of className to class so that we can create new instances of
	    // Parse Objects from JSON automatically.
	    Parse.Object._classMap = {};

	    Parse.Object._extend = Parse._extend;

	    /**
	     * Creates a new subclass of Parse.Object for the given Parse class name.
	     *
	     * <p>Every extension of a Parse class will inherit from the most recent
	     * previous extension of that class. When a Parse.Object is automatically
	     * created by parsing JSON, it will use the most recent extension of that
	     * class.</p>
	     *
	     * <p>You should call either:<pre>
	     *     var MyClass = Parse.Object.extend("MyClass", {
	   *         <i>Instance methods</i>,
	   *         initialize: function(attrs, options) {
	   *             this.someInstanceProperty = [],
	   *             <i>Other instance properties</i>
	   *         }
	   *     }, {
	   *         <i>Class properties</i>
	   *     });</pre>
	     * or, for Backbone compatibility:<pre>
	     *     var MyClass = Parse.Object.extend({
	   *         className: "MyClass",
	   *         <i>Instance methods</i>,
	   *         initialize: function(attrs, options) {
	   *             this.someInstanceProperty = [],
	   *             <i>Other instance properties</i>
	   *         }
	   *     }, {
	   *         <i>Class properties</i>
	   *     });</pre></p>
	     *
	     * @param {String} className The name of the Parse class backing this model.
	     * @param {Object} protoProps Instance properties to add to instances of the
	     *     class returned from this method.
	     * @param {Object} classProps Class properties to add the class returned from
	     *     this method.
	     * @return {Class} A new subclass of Parse.Object.
	     */
	    Parse.Object.extend = function (className, protoProps, classProps) {
	        // Handle the case with only two args.
	        if (!_.isString(className)) {
	            if (className && _.has(className, "className")) {
	                return Parse.Object.extend(className.className, className, protoProps);
	            } else {
	                throw new Error(
	                    "Parse.Object.extend's first argument should be the className.");
	            }
	        }

	        // If someone tries to subclass "User", coerce it to the right type.
	        if (className === "User" && Parse.User._performUserRewrite) {
	            className = "_User";
	        }
	        protoProps = protoProps || {};
	        protoProps.className = className;

	        var NewClassObject = null;
	        if (_.has(Parse.Object._classMap, className)) {
	            var OldClassObject = Parse.Object._classMap[className];
	            // This new subclass has been told to extend both from "this" and from
	            // OldClassObject. This is multiple inheritance, which isn't supported.
	            // For now, let's just pick one.
	            NewClassObject = OldClassObject._extend(protoProps, classProps);
	        } else {
	            NewClassObject = this._extend(protoProps, classProps);
	        }
	        // Extending a subclass should reuse the classname automatically.
	        NewClassObject.extend = function (arg0) {
	            if (_.isString(arg0) || (arg0 && _.has(arg0, "className"))) {
	                return Parse.Object.extend.apply(NewClassObject, arguments);
	            }
	            var newArguments = [className].concat(Parse._.toArray(arguments));
	            return Parse.Object.extend.apply(NewClassObject, newArguments);
	        };
	        Parse.Object._classMap[className] = NewClassObject;
	        return NewClassObject;
	    };

	    Parse.Object._findUnsavedChildren = function (object, children, files) {
	        Parse._traverse(object, function (object) {
	            if (object instanceof Parse.Object) {
	                object._refreshCache();
	                if (object.dirty()) {
	                    children.push(object);
	                }
	                return;
	            }

	            if (object instanceof Parse.File) {
	                if (!object.url()) {
	                    files.push(object);
	                }
	                return;
	            }
	        });
	    };

	    Parse.Object._canBeSerializedAsValue = function (object) {

	        if (object instanceof Parse.Object) {
	            return !!object.id;
	        }
	        if (object instanceof Parse.File) {
	            // Don't recurse indefinitely into files.
	            return true;
	        }

	        var canBeSerializedAsValue = true;

	        if (_.isArray(object)) {
	            Parse._arrayEach(object, function (child) {
	                if (!Parse.Object._canBeSerializedAsValue(child)) {
	                    canBeSerializedAsValue = false;
	                }
	            });
	        } else if (_.isObject(object)) {
	            Parse._objectEach(object, function (child) {
	                if (!Parse.Object._canBeSerializedAsValue(child)) {
	                    canBeSerializedAsValue = false;
	                }
	            });
	        }
	        return canBeSerializedAsValue;
	    };

	    /**
	     * @param {Object} object The root object.
	     * @param {Object} options: The only valid option is useMasterKey.
	     */
	    Parse.Object._deepSaveAsync = function (object, options) {
	        var unsavedChildren = [];
	        var unsavedFiles = [];
	        Parse.Object._findUnsavedChildren(object, unsavedChildren, unsavedFiles);

	        var promise = Parse.Promise.as();
	        _.each(unsavedFiles, function (file) {
	            promise = promise.then(function () {
	                return file.save(options);
	            });
	        });

	        var objects = _.uniq(unsavedChildren);
	        var remaining = _.uniq(objects);

	        return promise.then(function () {
	            return Parse.Promise._continueWhile(function () {
	                return remaining.length > 0;
	            }, function () {

	                // Gather up all the objects that can be saved in this batch.
	                var batch = [];
	                var newRemaining = [];
	                Parse._arrayEach(remaining, function (object) {
	                    // Limit batches to 20 objects.
	                    if (batch.length > 20) {
	                        newRemaining.push(object);
	                        return;
	                    }

	                    if (object._canBeSerialized()) {
	                        batch.push(object);
	                    } else {
	                        newRemaining.push(object);
	                    }
	                });
	                remaining = newRemaining;

	                // If we can't save any objects, there must be a circular reference.
	                if (batch.length === 0) {
	                    return Parse.Promise.error(
	                        new Parse.Error(Parse.Error.OTHER_CAUSE,
	                            "Tried to save a batch with a cycle."));
	                }

	                // Reserve a spot in every object's save queue.
	                var readyToStart = Parse.Promise.when(_.map(batch, function (object) {
	                    return object._allPreviousSaves || Parse.Promise.as();
	                }));
	                var batchFinished = new Parse.Promise();
	                Parse._arrayEach(batch, function (object) {
	                    object._allPreviousSaves = batchFinished;
	                });

	                // Save a single batch, whether previous saves succeeded or failed.
	                return readyToStart._continueWith(function () {
	                    return Parse._request({
	                        route: "batch",
	                        method: "POST",
	                        useMasterKey: options.useMasterKey,
	                        data: {
	                            requests: _.map(batch, function (object) {
	                                var json = object._getSaveJSON();
	                                var method = "POST";

	                                var path = "/1/classes/" + object.className;
	                                if (object.id) {
	                                    path = path + "/" + object.id;
	                                    method = "PUT";
	                                }

	                                object._startSave();

	                                return {
	                                    method: method,
	                                    path: path,
	                                    body: json
	                                };
	                            })
	                        }
	                    }).then(function (response, status, xhr) {
	                            var error;
	                            Parse._arrayEach(batch, function (object, i) {
	                                if (response[i].success) {
	                                    object._finishSave(
	                                        object.parse(response[i].success, status, xhr));
	                                } else {
	                                    error = error || response[i].error;
	                                    object._cancelSave();
	                                }
	                            });
	                            if (error) {
	                                return Parse.Promise.error(
	                                    new Parse.Error(error.code, error.error));
	                            }

	                        }).then(function (results) {
	                            batchFinished.resolve(results);
	                            return results;
	                        }, function (error) {
	                            batchFinished.reject(error);
	                            return Parse.Promise.error(error);
	                        });
	                });
	            });
	        }).then(function () {
	                return object;
	            });
	    };

	}(this));

	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * Represents a Role on the Parse server. Roles represent groupings of
	     * Users for the purposes of granting permissions (e.g. specifying an ACL
	     * for an Object). Roles are specified by their sets of child users and
	     * child roles, all of which are granted any permissions that the parent
	     * role has.
	     *
	     * <p>Roles must have a name (which cannot be changed after creation of the
	     * role), and must specify an ACL.</p>
	     * @class
	     * A Parse.Role is a local representation of a role persisted to the Parse
	     * cloud.
	     */
	    Parse.Role = Parse.Object.extend("_Role", /** @lends Parse.Role.prototype */ {
	        // Instance Methods

	        /**
	         * Constructs a new ParseRole with the given name and ACL.
	         *
	         * @param {String} name The name of the Role to create.
	         * @param {Parse.ACL} acl The ACL for this role. Roles must have an ACL.
	         */
	        constructor: function (name, acl) {
	            if (_.isString(name) && (acl instanceof Parse.ACL)) {
	                Parse.Object.prototype.constructor.call(this, null, null);
	                this.setName(name);
	                this.setACL(acl);
	            } else {
	                Parse.Object.prototype.constructor.call(this, name, acl);
	            }
	        },

	        /**
	         * Gets the name of the role.  You can alternatively call role.get("name")
	         *
	         * @return {String} the name of the role.
	         */
	        getName: function () {
	            return this.get("name");
	        },

	        /**
	         * Sets the name for a role. This value must be set before the role has
	         * been saved to the server, and cannot be set once the role has been
	         * saved.
	         *
	         * <p>
	         *   A role's name can only contain alphanumeric characters, _, -, and
	         *   spaces.
	         * </p>
	         *
	         * <p>This is equivalent to calling role.set("name", name)</p>
	         *
	         * @param {String} name The name of the role.
	         * @param {Object} options Standard options object with success and error
	         *     callbacks.
	         */
	        setName: function (name, options) {
	            return this.set("name", name, options);
	        },

	        /**
	         * Gets the Parse.Relation for the Parse.Users that are direct
	         * children of this role. These users are granted any privileges that this
	         * role has been granted (e.g. read or write access through ACLs). You can
	         * add or remove users from the role through this relation.
	         *
	         * <p>This is equivalent to calling role.relation("users")</p>
	         *
	         * @return {Parse.Relation} the relation for the users belonging to this
	         *     role.
	         */
	        getUsers: function () {
	            return this.relation("users");
	        },

	        /**
	         * Gets the Parse.Relation for the Parse.Roles that are direct
	         * children of this role. These roles' users are granted any privileges that
	         * this role has been granted (e.g. read or write access through ACLs). You
	         * can add or remove child roles from this role through this relation.
	         *
	         * <p>This is equivalent to calling role.relation("roles")</p>
	         *
	         * @return {Parse.Relation} the relation for the roles belonging to this
	         *     role.
	         */
	        getRoles: function () {
	            return this.relation("roles");
	        },

	        /**
	         * @ignore
	         */
	        validate: function (attrs, options) {
	            if ("name" in attrs && attrs.name !== this.getName()) {
	                var newName = attrs.name;
	                if (this.id && this.id !== attrs.objectId) {
	                    // Check to see if the objectId being set matches this.id.
	                    // This happens during a fetch -- the id is set before calling fetch.
	                    // Let the name be set in this case.
	                    return new Parse.Error(Parse.Error.OTHER_CAUSE,
	                        "A role's name can only be set before it has been saved.");
	                }
	                if (!_.isString(newName)) {
	                    return new Parse.Error(Parse.Error.OTHER_CAUSE,
	                        "A role's name must be a String.");
	                }
	                if (!(/^[0-9a-zA-Z\-_ ]+$/).test(newName)) {
	                    return new Parse.Error(Parse.Error.OTHER_CAUSE,
	                        "A role's name can only contain alphanumeric characters, _," +
	                            " -, and spaces.");
	                }
	            }
	            if (Parse.Object.prototype.validate) {
	                return Parse.Object.prototype.validate.call(this, attrs, options);
	            }
	            return false;
	        }
	    });
	}(this));


	/*global _: false */
	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * Creates a new instance with the given models and options.  Typically, you
	     * will not call this method directly, but will instead make a subclass using
	     * <code>Parse.Collection.extend</code>.
	     *
	     * @param {Array} models An array of instances of <code>Parse.Object</code>.
	     *
	     * @param {Object} options An optional object with Backbone-style options.
	     * Valid options are:<ul>
	     *   <li>model: The Parse.Object subclass that this collection contains.
	     *   <li>query: An instance of Parse.Query to use when fetching items.
	     *   <li>comparator: A string property name or function to sort by.
	     * </ul>
	     *
	     * @see Parse.Collection.extend
	     *
	     * @class
	     *
	     * <p>Provides a standard collection class for our sets of models, ordered
	     * or unordered.  For more information, see the
	     * <a href="http://documentcloud.github.com/backbone/#Collection">Backbone
	     * documentation</a>.</p>
	     */
	    Parse.Collection = function (models, options) {
	        options = options || {};
	        if (options.comparator) {
	            this.comparator = options.comparator;
	        }
	        if (options.model) {
	            this.model = options.model;
	        }
	        if (options.query) {
	            this.query = options.query;
	        }
	        this._reset();
	        this.initialize.apply(this, arguments);
	        if (models) {
	            this.reset(models, {silent: true, parse: options.parse});
	        }
	    };

	    // Define the Collection's inheritable methods.
	    _.extend(Parse.Collection.prototype, Parse.Events,
	        /** @lends Parse.Collection.prototype */ {

	            // The default model for a collection is just a Parse.Object.
	            // This should be overridden in most cases.

	            model: Parse.Object,

	            /**
	             * Initialize is an empty function by default. Override it with your own
	             * initialization logic.
	             */
	            initialize: function () {
	            },

	            /**
	             * The JSON representation of a Collection is an array of the
	             * models' attributes.
	             */
	            toJSON: function () {
	                return this.map(function (model) {
	                    return model.toJSON();
	                });
	            },

	            /**
	             * Add a model, or list of models to the set. Pass **silent** to avoid
	             * firing the `add` event for every new model.
	             *
	             * @param {Array} models An array of instances of <code>Parse.Object</code>.
	             *
	             * @param {Object} options An optional object with Backbone-style options.
	             * Valid options are:<ul>
	             *   <li>at: The index at which to add the models.
	             *   <li>silent: Set to true to avoid firing the `add` event for every new
	             *   model.
	             * </ul>
	             */
	            add: function (models, options) {
	                var i, index, length, model, cid, id, cids = {}, ids = {};
	                options = options || {};
	                models = _.isArray(models) ? models.slice() : [models];

	                // Begin by turning bare objects into model references, and preventing
	                // invalid models or duplicate models from being added.
	                for (i = 0, length = models.length; i < length; i++) {
	                    models[i] = this._prepareModel(models[i], options);
	                    model = models[i];
	                    if (!model) {
	                        throw new Error("Can't add an invalid model to a collection");
	                    }
	                    cid = model.cid;
	                    if (cids[cid] || this._byCid[cid]) {
	                        throw new Error("Duplicate cid: can't add the same model " +
	                            "to a collection twice");
	                    }
	                    id = model.id;
	                    if (!Parse._isNullOrUndefined(id) && (ids[id] || this._byId[id])) {
	                        throw new Error("Duplicate id: can't add the same model " +
	                            "to a collection twice");
	                    }
	                    ids[id] = model;
	                    cids[cid] = model;
	                }

	                // Listen to added models' events, and index models for lookup by
	                // `id` and by `cid`.
	                for (i = 0; i < length; i++) {
	                    (model = models[i]).on('all', this._onModelEvent, this);
	                    this._byCid[model.cid] = model;
	                    if (model.id) {
	                        this._byId[model.id] = model;
	                    }
	                }

	                // Insert models into the collection, re-sorting if needed, and triggering
	                // `add` events unless silenced.
	                this.length += length;
	                index = Parse._isNullOrUndefined(options.at) ?
	                    this.models.length : options.at;
	                this.models.splice.apply(this.models, [index, 0].concat(models));
	                if (this.comparator) {
	                    this.sort({silent: true});
	                }
	                if (options.silent) {
	                    return this;
	                }
	                for (i = 0, length = this.models.length; i < length; i++) {
	                    model = this.models[i];
	                    if (cids[model.cid]) {
	                        options.index = i;
	                        model.trigger('add', model, this, options);
	                    }
	                }
	                return this;
	            },

	            /**
	             * Remove a model, or a list of models from the set. Pass silent to avoid
	             * firing the <code>remove</code> event for every model removed.
	             *
	             * @param {Array} models The model or list of models to remove from the
	             *   collection.
	             * @param {Object} options An optional object with Backbone-style options.
	             * Valid options are: <ul>
	             *   <li>silent: Set to true to avoid firing the `remove` event.
	             * </ul>
	             */
	            remove: function (models, options) {
	                var i, l, index, model;
	                options = options || {};
	                models = _.isArray(models) ? models.slice() : [models];
	                for (i = 0, l = models.length; i < l; i++) {
	                    model = this.getByCid(models[i]) || this.get(models[i]);
	                    if (!model) {
	                        continue;
	                    }
	                    delete this._byId[model.id];
	                    delete this._byCid[model.cid];
	                    index = this.indexOf(model);
	                    this.models.splice(index, 1);
	                    this.length--;
	                    if (!options.silent) {
	                        options.index = index;
	                        model.trigger('remove', model, this, options);
	                    }
	                    this._removeReference(model);
	                }
	                return this;
	            },

	            /**
	             * Gets a model from the set by id.
	             * @param {String} id The Parse objectId identifying the Parse.Object to
	             * fetch from this collection.
	             */
	            get: function (id) {
	                return id && this._byId[id.id || id];
	            },

	            /**
	             * Gets a model from the set by client id.
	             * @param {} cid The Backbone collection id identifying the Parse.Object to
	             * fetch from this collection.
	             */
	            getByCid: function (cid) {
	                return cid && this._byCid[cid.cid || cid];
	            },

	            /**
	             * Gets the model at the given index.
	             *
	             * @param {Number} index The index of the model to return.
	             */
	            at: function (index) {
	                return this.models[index];
	            },

	            /**
	             * Forces the collection to re-sort itself. You don't need to call this
	             * under normal circumstances, as the set will maintain sort order as each
	             * item is added.
	             * @param {Object} options An optional object with Backbone-style options.
	             * Valid options are: <ul>
	             *   <li>silent: Set to true to avoid firing the `reset` event.
	             * </ul>
	             */
	            sort: function (options) {
	                options = options || {};
	                if (!this.comparator) {
	                    throw new Error('Cannot sort a set without a comparator');
	                }
	                var boundComparator = _.bind(this.comparator, this);
	                if (this.comparator.length === 1) {
	                    this.models = this.sortBy(boundComparator);
	                } else {
	                    this.models.sort(boundComparator);
	                }
	                if (!options.silent) {
	                    this.trigger('reset', this, options);
	                }
	                return this;
	            },

	            /**
	             * Plucks an attribute from each model in the collection.
	             * @param {String} attr The attribute to return from each model in the
	             * collection.
	             */
	            pluck: function (attr) {
	                return _.map(this.models, function (model) {
	                    return model.get(attr);
	                });
	            },

	            /**
	             * When you have more items than you want to add or remove individually,
	             * you can reset the entire set with a new list of models, without firing
	             * any `add` or `remove` events. Fires `reset` when finished.
	             *
	             * @param {Array} models The model or list of models to remove from the
	             *   collection.
	             * @param {Object} options An optional object with Backbone-style options.
	             * Valid options are: <ul>
	             *   <li>silent: Set to true to avoid firing the `reset` event.
	             * </ul>
	             */
	            reset: function (models, options) {
	                var self = this;
	                models = models || [];
	                options = options || {};
	                Parse._arrayEach(this.models, function (model) {
	                    self._removeReference(model);
	                });
	                this._reset();
	                this.add(models, {silent: true, parse: options.parse});
	                if (!options.silent) {
	                    this.trigger('reset', this, options);
	                }
	                return this;
	            },

	            /**
	             * Fetches the default set of models for this collection, resetting the
	             * collection when they arrive. If `add: true` is passed, appends the
	             * models to the collection instead of resetting.
	             *
	             * @param {Object} options An optional object with Backbone-style options.
	             * Valid options are:<ul>
	             *   <li>silent: Set to true to avoid firing `add` or `reset` events for
	             *   models fetched by this fetch.
	             *   <li>success: A Backbone-style success callback.
	             *   <li>error: An Backbone-style error callback.
	             *   <li>useMasterKey: In Cloud Code and Node only, uses the Master Key for
	             *       this request.
	             * </ul>
	             */
	            fetch: function (options) {
	                options = _.clone(options) || {};
	                if (options.parse === undefined) {
	                    options.parse = true;
	                }
	                var collection = this;
	                var query = this.query || new Parse.Query(this.model);
	                return query.find({
	                    useMasterKey: options.useMasterKey
	                }).then(function (results) {
	                        if (options.add) {
	                            collection.add(results, options);
	                        } else {
	                            collection.reset(results, options);
	                        }
	                        return collection;
	                    })._thenRunCallbacks(options, this);
	            },

	            /**
	             * Creates a new instance of a model in this collection. Add the model to
	             * the collection immediately, unless `wait: true` is passed, in which case
	             * we wait for the server to agree.
	             *
	             * @param {Parse.Object} model The new model to create and add to the
	             *   collection.
	             * @param {Object} options An optional object with Backbone-style options.
	             * Valid options are:<ul>
	             *   <li>wait: Set to true to wait for the server to confirm creation of the
	             *       model before adding it to the collection.
	             *   <li>silent: Set to true to avoid firing an `add` event.
	             *   <li>success: A Backbone-style success callback.
	             *   <li>error: An Backbone-style error callback.
	             *   <li>useMasterKey: In Cloud Code and Node only, uses the Master Key for
	             *       this request.
	             * </ul>
	             */
	            create: function (model, options) {
	                var coll = this;
	                options = options ? _.clone(options) : {};
	                model = this._prepareModel(model, options);
	                if (!model) {
	                    return false;
	                }
	                if (!options.wait) {
	                    coll.add(model, options);
	                }
	                var success = options.success;
	                options.success = function (nextModel, resp, xhr) {
	                    if (options.wait) {
	                        coll.add(nextModel, options);
	                    }
	                    if (success) {
	                        success(nextModel, resp);
	                    } else {
	                        nextModel.trigger('sync', model, resp, options);
	                    }
	                };
	                model.save(null, options);
	                return model;
	            },

	            /**
	             * Converts a response into a list of models to be added to the collection.
	             * The default implementation is just to pass it through.
	             * @ignore
	             */
	            parse: function (resp, xhr) {
	                return resp;
	            },

	            /**
	             * Proxy to _'s chain. Can't be proxied the same way the rest of the
	             * underscore methods are proxied because it relies on the underscore
	             * constructor.
	             */
	            chain: function () {
	                return _(this.models).chain();
	            },

	            /**
	             * Reset all internal state. Called when the collection is reset.
	             */
	            _reset: function (options) {
	                this.length = 0;
	                this.models = [];
	                this._byId = {};
	                this._byCid = {};
	            },

	            /**
	             * Prepare a model or hash of attributes to be added to this collection.
	             */
	            _prepareModel: function (model, options) {
	                if (!(model instanceof Parse.Object)) {
	                    var attrs = model;
	                    options.collection = this;
	                    model = new this.model(attrs, options);
	                    if (!model._validate(model.attributes, options)) {
	                        model = false;
	                    }
	                } else if (!model.collection) {
	                    model.collection = this;
	                }
	                return model;
	            },

	            /**
	             * Internal method to remove a model's ties to a collection.
	             */
	            _removeReference: function (model) {
	                if (this === model.collection) {
	                    delete model.collection;
	                }
	                model.off('all', this._onModelEvent, this);
	            },

	            /**
	             * Internal method called every time a model in the set fires an event.
	             * Sets need to update their indexes when models change ids. All other
	             * events simply proxy through. "add" and "remove" events that originate
	             * in other collections are ignored.
	             */
	            _onModelEvent: function (ev, model, collection, options) {
	                if ((ev === 'add' || ev === 'remove') && collection !== this) {
	                    return;
	                }
	                if (ev === 'destroy') {
	                    this.remove(model, options);
	                }
	                if (model && ev === 'change:objectId') {
	                    delete this._byId[model.previous("objectId")];
	                    this._byId[model.id] = model;
	                }
	                this.trigger.apply(this, arguments);
	            }

	        });

	    // Underscore methods that we want to implement on the Collection.
	    var methods = ['forEach', 'each', 'map', 'reduce', 'reduceRight', 'find',
	        'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any',
	        'include', 'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex',
	        'toArray', 'size', 'first', 'initial', 'rest', 'last', 'without', 'indexOf',
	        'shuffle', 'lastIndexOf', 'isEmpty', 'groupBy'];

	    // Mix in each Underscore method as a proxy to `Collection#models`.
	    Parse._arrayEach(methods, function (method) {
	        Parse.Collection.prototype[method] = function () {
	            return _[method].apply(_, [this.models].concat(_.toArray(arguments)));
	        };
	    });

	    /**
	     * Creates a new subclass of <code>Parse.Collection</code>.  For example,<pre>
	     *   var MyCollection = Parse.Collection.extend({
	   *     // Instance properties
	   *
	   *     model: MyClass,
	   *     query: MyQuery,
	   *
	   *     getFirst: function() {
	   *       return this.at(0);
	   *     }
	   *   }, {
	   *     // Class properties
	   *
	   *     makeOne: function() {
	   *       return new MyCollection();
	   *     }
	   *   });
	     *
	     *   var collection = new MyCollection();
	     * </pre>
	     *
	     * @function
	     * @param {Object} instanceProps Instance properties for the collection.
	     * @param {Object} classProps Class properies for the collection.
	     * @return {Class} A new subclass of <code>Parse.Collection</code>.
	     */
	    Parse.Collection.extend = Parse._extend;

	}(this));

	/*global _: false, document: false */
	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * Creating a Parse.View creates its initial element outside of the DOM,
	     * if an existing element is not provided...
	     * @class
	     *
	     * <p>A fork of Backbone.View, provided for your convenience.  If you use this
	     * class, you must also include jQuery, or another library that provides a
	     * jQuery-compatible $ function.  For more information, see the
	     * <a href="http://documentcloud.github.com/backbone/#View">Backbone
	     * documentation</a>.</p>
	     * <p><strong><em>Available in the client SDK only.</em></strong></p>
	     */
	    Parse.View = function (options) {
	        this.cid = _.uniqueId('view');
	        this._configure(options || {});
	        this._ensureElement();
	        this.initialize.apply(this, arguments);
	        this.delegateEvents();
	    };

	    // Cached regex to split keys for `delegate`.
	    var eventSplitter = /^(\S+)\s*(.*)$/;

	    // List of view options to be merged as properties.

	    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes',
	        'className', 'tagName'];

	    // Set up all inheritable **Parse.View** properties and methods.
	    _.extend(Parse.View.prototype, Parse.Events,
	        /** @lends Parse.View.prototype */ {

	            // The default `tagName` of a View's element is `"div"`.
	            tagName: 'div',

	            /**
	             * jQuery delegate for element lookup, scoped to DOM elements within the
	             * current view. This should be prefered to global lookups where possible.
	             */
	            $: function (selector) {
	                return this.$el.find(selector);
	            },

	            /**
	             * Initialize is an empty function by default. Override it with your own
	             * initialization logic.
	             */
	            initialize: function () {
	            },

	            /**
	             * The core function that your view should override, in order
	             * to populate its element (`this.el`), with the appropriate HTML. The
	             * convention is for **render** to always return `this`.
	             */
	            render: function () {
	                return this;
	            },

	            /**
	             * Remove this view from the DOM. Note that the view isn't present in the
	             * DOM by default, so calling this method may be a no-op.
	             */
	            remove: function () {
	                this.$el.remove();
	                return this;
	            },

	            /**
	             * For small amounts of DOM Elements, where a full-blown template isn't
	             * needed, use **make** to manufacture elements, one at a time.
	             * <pre>
	             *     var el = this.make('li', {'class': 'row'},
	             *                        this.model.escape('title'));</pre>
	             */
	            make: function (tagName, attributes, content) {
	                var el = document.createElement(tagName);
	                if (attributes) {
	                    Parse.$(el).attr(attributes);
	                }
	                if (content) {
	                    Parse.$(el).html(content);
	                }
	                return el;
	            },

	            /**
	             * Changes the view's element (`this.el` property), including event
	             * re-delegation.
	             */
	            setElement: function (element, delegate) {
	                this.$el = Parse.$(element);
	                this.el = this.$el[0];
	                if (delegate !== false) {
	                    this.delegateEvents();
	                }
	                return this;
	            },

	            /**
	             * Set callbacks.  <code>this.events</code> is a hash of
	             * <pre>
	             * *{"event selector": "callback"}*
	             *
	             *     {
	     *       'mousedown .title':  'edit',
	     *       'click .button':     'save'
	     *       'click .open':       function(e) { ... }
	     *     }
	             * </pre>
	             * pairs. Callbacks will be bound to the view, with `this` set properly.
	             * Uses event delegation for efficiency.
	             * Omitting the selector binds the event to `this.el`.
	             * This only works for delegate-able events: not `focus`, `blur`, and
	             * not `change`, `submit`, and `reset` in Internet Explorer.
	             */
	            delegateEvents: function (events) {
	                events = events || Parse._getValue(this, 'events');
	                if (!events) {
	                    return;
	                }
	                this.undelegateEvents();
	                var self = this;
	                Parse._objectEach(events, function (method, key) {
	                    if (!_.isFunction(method)) {
	                        method = self[events[key]];
	                    }
	                    if (!method) {
	                        throw new Error('Event "' + events[key] + '" does not exist');
	                    }
	                    var match = key.match(eventSplitter);
	                    var eventName = match[1], selector = match[2];
	                    method = _.bind(method, self);
	                    eventName += '.delegateEvents' + self.cid;
	                    if (selector === '') {
	                        self.$el.bind(eventName, method);
	                    } else {
	                        self.$el.delegate(selector, eventName, method);
	                    }
	                });
	            },

	            /**
	             * Clears all callbacks previously bound to the view with `delegateEvents`.
	             * You usually don't need to use this, but may wish to if you have multiple
	             * Backbone views attached to the same DOM element.
	             */
	            undelegateEvents: function () {
	                this.$el.unbind('.delegateEvents' + this.cid);
	            },

	            /**
	             * Performs the initial configuration of a View with a set of options.
	             * Keys with special meaning *(model, collection, id, className)*, are
	             * attached directly to the view.
	             */
	            _configure: function (options) {
	                if (this.options) {
	                    options = _.extend({}, this.options, options);
	                }
	                var self = this;
	                _.each(viewOptions, function (attr) {
	                    if (options[attr]) {
	                        self[attr] = options[attr];
	                    }
	                });
	                this.options = options;
	            },

	            /**
	             * Ensure that the View has a DOM element to render into.
	             * If `this.el` is a string, pass it through `$()`, take the first
	             * matching element, and re-assign it to `el`. Otherwise, create
	             * an element from the `id`, `className` and `tagName` properties.
	             */
	            _ensureElement: function () {
	                if (!this.el) {
	                    var attrs = Parse._getValue(this, 'attributes') || {};
	                    if (this.id) {
	                        attrs.id = this.id;
	                    }
	                    if (this.className) {
	                        attrs['class'] = this.className;
	                    }
	                    this.setElement(this.make(this.tagName, attrs), false);
	                } else {
	                    this.setElement(this.el, false);
	                }
	            }

	        });

	    /**
	     * @function
	     * @param {Object} instanceProps Instance properties for the view.
	     * @param {Object} classProps Class properies for the view.
	     * @return {Class} A new subclass of <code>Parse.View</code>.
	     */
	    Parse.View.extend = Parse._extend;

	}(this));

	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * @class
	     *
	     * <p>A Parse.User object is a local representation of a user persisted to the
	     * Parse cloud. This class is a subclass of a Parse.Object, and retains the
	     * same functionality of a Parse.Object, but also extends it with various
	     * user specific methods, like authentication, signing up, and validation of
	     * uniqueness.</p>
	     */
	    Parse.User = Parse.Object.extend("_User", /** @lends Parse.User.prototype */ {
	        // Instance Variables
	        _isCurrentUser: false,


	        // Instance Methods

	        /**
	         * Merges another object's attributes into this object.
	         */
	        _mergeFromObject: function (other) {
	            if (other.getSessionToken()) {
	                this._sessionToken = other.getSessionToken();
	            }
	            Parse.User.__super__._mergeFromObject.call(this, other);
	        },

	        /**
	         * Internal method to handle special fields in a _User response.
	         */
	        _mergeMagicFields: function (attrs) {
	            if (attrs.sessionToken) {
	                this._sessionToken = attrs.sessionToken;
	                delete attrs.sessionToken;
	            }
	            Parse.User.__super__._mergeMagicFields.call(this, attrs);
	        },

	        /**
	         * Removes null values from authData (which exist temporarily for
	         * unlinking)
	         */
	        _cleanupAuthData: function () {
	            if (!this.isCurrent()) {
	                return;
	            }
	            var authData = this.get('authData');
	            if (!authData) {
	                return;
	            }
	            Parse._objectEach(this.get('authData'), function (value, key) {
	                if (!authData[key]) {
	                    delete authData[key];
	                }
	            });
	        },

	        /**
	         * Synchronizes authData for all providers.
	         */
	        _synchronizeAllAuthData: function () {
	            var authData = this.get('authData');
	            if (!authData) {
	                return;
	            }

	            var self = this;
	            Parse._objectEach(this.get('authData'), function (value, key) {
	                self._synchronizeAuthData(key);
	            });
	        },

	        /**
	         * Synchronizes auth data for a provider (e.g. puts the access token in the
	         * right place to be used by the Facebook SDK).
	         */
	        _synchronizeAuthData: function (provider) {
	            if (!this.isCurrent()) {
	                return;
	            }
	            var authType;
	            if (_.isString(provider)) {
	                authType = provider;
	                provider = Parse.User._authProviders[authType];
	            } else {
	                authType = provider.getAuthType();
	            }
	            var authData = this.get('authData');
	            if (!authData || !provider) {
	                return;
	            }
	            var success = provider.restoreAuthentication(authData[authType]);
	            if (!success) {
	                this._unlinkFrom(provider);
	            }
	        },

	        _handleSaveResult: function (makeCurrent) {
	            // Clean up and synchronize the authData object, removing any unset values
	            if (makeCurrent) {
	                this._isCurrentUser = true;
	            }
	            this._cleanupAuthData();
	            this._synchronizeAllAuthData();
	            // Don't keep the password around.
	            delete this._serverData.password;
	            this._rebuildEstimatedDataForKey("password");
	            this._refreshCache();
	            if (makeCurrent || this.isCurrent()) {
	                Parse.User._saveCurrentUser(this);
	            }
	        },

	        /**
	         * Unlike in the Android/iOS SDKs, logInWith is unnecessary, since you can
	         * call linkWith on the user (even if it doesn't exist yet on the server).
	         */
	        _linkWith: function (provider, options) {
	            var authType;
	            if (_.isString(provider)) {
	                authType = provider;
	                provider = Parse.User._authProviders[provider];
	            } else {
	                authType = provider.getAuthType();
	            }
	            if (_.has(options, 'authData')) {
	                var authData = this.get('authData') || {};
	                authData[authType] = options.authData;
	                this.set('authData', authData);

	                // Overridden so that the user can be made the current user.
	                var newOptions = _.clone(options) || {};
	                newOptions.success = function (model) {
	                    model._handleSaveResult(true);
	                    if (options.success) {
	                        options.success.apply(this, arguments);
	                    }
	                };
	                return this.save({'authData': authData}, newOptions);
	            } else {
	                var self = this;
	                var promise = new Parse.Promise();
	                provider.authenticate({
	                    success: function (provider, result) {
	                        self._linkWith(provider, {
	                            authData: result,
	                            success: options.success,
	                            error: options.error
	                        }).then(function () {
	                                promise.resolve(self);
	                            });
	                    },
	                    error: function (provider, error) {
	                        if (options.error) {
	                            options.error(self, error);
	                        }
	                        promise.reject(error);
	                    }
	                });
	                return promise;
	            }
	        },

	        /**
	         * Unlinks a user from a service.
	         */
	        _unlinkFrom: function (provider, options) {
	            var authType;
	            if (_.isString(provider)) {
	                authType = provider;
	                provider = Parse.User._authProviders[provider];
	            } else {
	                authType = provider.getAuthType();
	            }
	            var newOptions = _.clone(options);
	            var self = this;
	            newOptions.authData = null;
	            newOptions.success = function (model) {
	                self._synchronizeAuthData(provider);
	                if (options.success) {
	                    options.success.apply(this, arguments);
	                }
	            };
	            return this._linkWith(provider, newOptions);
	        },

	        /**
	         * Checks whether a user is linked to a service.
	         */
	        _isLinked: function (provider) {
	            var authType;
	            if (_.isString(provider)) {
	                authType = provider;
	            } else {
	                authType = provider.getAuthType();
	            }
	            var authData = this.get('authData') || {};
	            return !!authData[authType];
	        },

	        /**
	         * Deauthenticates all providers.
	         */
	        _logOutWithAll: function () {
	            var authData = this.get('authData');
	            if (!authData) {
	                return;
	            }
	            var self = this;
	            Parse._objectEach(this.get('authData'), function (value, key) {
	                self._logOutWith(key);
	            });
	        },

	        /**
	         * Deauthenticates a single provider (e.g. removing access tokens from the
	         * Facebook SDK).
	         */
	        _logOutWith: function (provider) {
	            if (!this.isCurrent()) {
	                return;
	            }
	            if (_.isString(provider)) {
	                provider = Parse.User._authProviders[provider];
	            }
	            if (provider && provider.deauthenticate) {
	                provider.deauthenticate();
	            }
	        },

	        /**
	         * Signs up a new user. You should call this instead of save for
	         * new Parse.Users. This will create a new Parse.User on the server, and
	         * also persist the session on disk so that you can access the user using
	         * <code>current</code>.
	         *
	         * <p>A username and password must be set before calling signUp.</p>
	         *
	         * <p>Calls options.success or options.error on completion.</p>
	         *
	         * @param {Object} attrs Extra fields to set on the new user, or null.
	         * @param {Object} options A Backbone-style options object.
	         * @return {Parse.Promise} A promise that is fulfilled when the signup
	         *     finishes.
	         * @see Parse.User.signUp
	         */
	        signUp: function (attrs, options) {
	            var error;
	            options = options || {};

	            var username = (attrs && attrs.username) || this.get("username");
	            if (!username || (username === "")) {
	                error = new Parse.Error(
	                    Parse.Error.OTHER_CAUSE,
	                    "Cannot sign up user with an empty name.");
	                if (options && options.error) {
	                    options.error(this, error);
	                }
	                return Parse.Promise.error(error);
	            }

	            var password = (attrs && attrs.password) || this.get("password");
	            if (!password || (password === "")) {
	                error = new Parse.Error(
	                    Parse.Error.OTHER_CAUSE,
	                    "Cannot sign up user with an empty password.");
	                if (options && options.error) {
	                    options.error(this, error);
	                }
	                return Parse.Promise.error(error);
	            }

	            // Overridden so that the user can be made the current user.
	            var newOptions = _.clone(options);
	            newOptions.success = function (model) {
	                model._handleSaveResult(true);
	                if (options.success) {
	                    options.success.apply(this, arguments);
	                }
	            };
	            return this.save(attrs, newOptions);
	        },

	        /**
	         * Logs in a Parse.User. On success, this saves the session to localStorage,
	         * so you can retrieve the currently logged in user using
	         * <code>current</code>.
	         *
	         * <p>A username and password must be set before calling logIn.</p>
	         *
	         * <p>Calls options.success or options.error on completion.</p>
	         *
	         * @param {Object} options A Backbone-style options object.
	         * @see Parse.User.logIn
	         * @return {Parse.Promise} A promise that is fulfilled with the user when
	         *     the login is complete.
	         */
	        logIn: function (options) {
	            var model = this;
	            options = options || {};
	            var request = Parse._request({
	                route: "login",
	                method: "GET",
	                useMasterKey: options.useMasterKey,
	                data: this.toJSON()
	            });
	            return request.then(function (resp, status, xhr) {
	                var serverAttrs = model.parse(resp, status, xhr);
	                model._finishFetch(serverAttrs);
	                model._handleSaveResult(true);
	                return model;
	            })._thenRunCallbacks(options, this);
	        },

	        /**
	         * @see Parse.Object#save
	         */
	        save: function (arg1, arg2, arg3) {
	            var i, attrs, current, options, saved;
	            if (_.isObject(arg1) || _.isNull(arg1) || _.isUndefined(arg1)) {
	                attrs = arg1;
	                options = arg2;
	            } else {
	                attrs = {};
	                attrs[arg1] = arg2;
	                options = arg3;
	            }
	            options = options || {};

	            var newOptions = _.clone(options);
	            newOptions.success = function (model) {
	                model._handleSaveResult(false);
	                if (options.success) {
	                    options.success.apply(this, arguments);
	                }
	            };
	            return Parse.Object.prototype.save.call(this, attrs, newOptions);
	        },

	        /**
	         * @see Parse.Object#fetch
	         */
	        fetch: function (options) {
	            var newOptions = options ? _.clone(options) : {};
	            newOptions.success = function (model) {
	                model._handleSaveResult(false);
	                if (options && options.success) {
	                    options.success.apply(this, arguments);
	                }
	            };
	            return Parse.Object.prototype.fetch.call(this, newOptions);
	        },

	        /**
	         * Returns true if <code>current</code> would return this user.
	         * @see Parse.User#current
	         */
	        isCurrent: function () {
	            return this._isCurrentUser;
	        },

	        /**
	         * Returns get("username").
	         * @return {String}
	         * @see Parse.Object#get
	         */
	        getUsername: function () {
	            return this.get("username");
	        },

	        /**
	         * Calls set("username", username, options) and returns the result.
	         * @param {String} username
	         * @param {Object} options A Backbone-style options object.
	         * @return {Boolean}
	         * @see Parse.Object.set
	         */
	        setUsername: function (username, options) {
	            return this.set("username", username, options);
	        },

	        /**
	         * Calls set("password", password, options) and returns the result.
	         * @param {String} password
	         * @param {Object} options A Backbone-style options object.
	         * @return {Boolean}
	         * @see Parse.Object.set
	         */
	        setPassword: function (password, options) {
	            return this.set("password", password, options);
	        },

	        /**
	         * Returns get("email").
	         * @return {String}
	         * @see Parse.Object#get
	         */
	        getEmail: function () {
	            return this.get("email");
	        },

	        /**
	         * Calls set("email", email, options) and returns the result.
	         * @param {String} email
	         * @param {Object} options A Backbone-style options object.
	         * @return {Boolean}
	         * @see Parse.Object.set
	         */
	        setEmail: function (email, options) {
	            return this.set("email", email, options);
	        },

	        /**
	         * Checks whether this user is the current user and has been authenticated.
	         * @return (Boolean) whether this user is the current user and is logged in.
	         */
	        authenticated: function () {
	            return !!this._sessionToken &&
	                (Parse.User.current() && Parse.User.current().id === this.id);
	        },

	        /**
	         * Returns the session token for this user, if the user has been logged in,
	         * or if it is the result of a query with the master key. Otherwise, returns
	         * undefined.
	         * @return {String} the session token, or undefined
	         */
	        getSessionToken: function () {
	            return this._sessionToken;
	        }

	    }, /** @lends Parse.User */ {
	        // Class Variables

	        // The currently logged-in user.
	        _currentUser: null,

	        // Whether currentUser is known to match the serialized version on disk.
	        // This is useful for saving a localstorage check if you try to load
	        // _currentUser frequently while there is none stored.
	        _currentUserMatchesDisk: false,

	        // The localStorage key suffix that the current user is stored under.
	        _CURRENT_USER_KEY: "currentUser",

	        // The mapping of auth provider names to actual providers
	        _authProviders: {},

	        // Whether to rewrite className User to _User
	        _performUserRewrite: true,


	        // Class Methods

	        /**
	         * Signs up a new user with a username (or email) and password.
	         * This will create a new Parse.User on the server, and also persist the
	         * session in localStorage so that you can access the user using
	         * {@link #current}.
	         *
	         * <p>Calls options.success or options.error on completion.</p>
	         *
	         * @param {String} username The username (or email) to sign up with.
	         * @param {String} password The password to sign up with.
	         * @param {Object} attrs Extra fields to set on the new user.
	         * @param {Object} options A Backbone-style options object.
	         * @return {Parse.Promise} A promise that is fulfilled with the user when
	         *     the signup completes.
	         * @see Parse.User#signUp
	         */
	        signUp: function (username, password, attrs, options) {
	            attrs = attrs || {};
	            attrs.username = username;
	            attrs.password = password;
	            var user = Parse.Object._create("_User");
	            return user.signUp(attrs, options);
	        },

	        /**
	         * Logs in a user with a username (or email) and password. On success, this
	         * saves the session to disk, so you can retrieve the currently logged in
	         * user using <code>current</code>.
	         *
	         * <p>Calls options.success or options.error on completion.</p>
	         *
	         * @param {String} username The username (or email) to log in with.
	         * @param {String} password The password to log in with.
	         * @param {Object} options A Backbone-style options object.
	         * @return {Parse.Promise} A promise that is fulfilled with the user when
	         *     the login completes.
	         * @see Parse.User#logIn
	         */
	        logIn: function (username, password, options) {
	            var user = Parse.Object._create("_User");
	            user._finishFetch({ username: username, password: password });
	            return user.logIn(options);
	        },

	        /**
	         * Logs in a user with a session token. On success, this saves the session
	         * to disk, so you can retrieve the currently logged in user using
	         * <code>current</code>.
	         *
	         * <p>Calls options.success or options.error on completion.</p>
	         *
	         * @param {String} sessionToken The sessionToken to log in with.
	         * @param {Object} options A Backbone-style options object.
	         * @return {Parse.Promise} A promise that is fulfilled with the user when
	         *     the login completes.
	         */
	        become: function (sessionToken, options) {
	            options = options || {};

	            var user = Parse.Object._create("_User");
	            return Parse._request({
	                route: "users",
	                className: "me",
	                method: "GET",
	                useMasterKey: options.useMasterKey,
	                sessionToken: sessionToken
	            }).then(function (resp, status, xhr) {
	                    var serverAttrs = user.parse(resp, status, xhr);
	                    user._finishFetch(serverAttrs);
	                    user._handleSaveResult(true);
	                    return user;

	                })._thenRunCallbacks(options, user);
	        },

	        /**
	         * Logs out the currently logged in user session. This will remove the
	         * session from disk, log out of linked services, and future calls to
	         * <code>current</code> will return <code>null</code>.
	         */
	        logOut: function () {
	            if (Parse.User._currentUser !== null) {
	                Parse.User._currentUser._logOutWithAll();
	                Parse.User._currentUser._isCurrentUser = false;
	            }
	            Parse.User._currentUserMatchesDisk = true;
	            Parse.User._currentUser = null;
	            Parse.localStorage.removeItem(
	                Parse._getParsePath(Parse.User._CURRENT_USER_KEY));
	        },

	        /**
	         * Requests a password reset email to be sent to the specified email address
	         * associated with the user account. This email allows the user to securely
	         * reset their password on the Parse site.
	         *
	         * <p>Calls options.success or options.error on completion.</p>
	         *
	         * @param {String} email The email address associated with the user that
	         *     forgot their password.
	         * @param {Object} options A Backbone-style options object.
	         */
	        requestPasswordReset: function (email, options) {
	            options = options || {};
	            var request = Parse._request({
	                route: "requestPasswordReset",
	                method: "POST",
	                useMasterKey: options.useMasterKey,
	                data: { email: email }
	            });
	            return request._thenRunCallbacks(options);
	        },

	        /**
	         * Retrieves the currently logged in ParseUser with a valid session,
	         * either from memory or localStorage, if necessary.
	         * @return {Parse.Object} The currently logged in Parse.User.
	         */
	        current: function () {
	            if (Parse.User._currentUser) {
	                return Parse.User._currentUser;
	            }

	            if (Parse.User._currentUserMatchesDisk) {

	                return Parse.User._currentUser;
	            }

	            // Load the user from local storage.
	            Parse.User._currentUserMatchesDisk = true;

	            var userData = Parse.localStorage.getItem(Parse._getParsePath(
	                Parse.User._CURRENT_USER_KEY));
	            if (!userData) {

	                return null;
	            }
	            Parse.User._currentUser = Parse.Object._create("_User");
	            Parse.User._currentUser._isCurrentUser = true;

	            var json = JSON.parse(userData);
	            Parse.User._currentUser.id = json._id;
	            delete json._id;
	            Parse.User._currentUser._sessionToken = json._sessionToken;
	            delete json._sessionToken;
	            Parse.User._currentUser.set(json);

	            Parse.User._currentUser._synchronizeAllAuthData();
	            Parse.User._currentUser._refreshCache();
	            Parse.User._currentUser._opSetQueue = [
	                {}
	            ];
	            return Parse.User._currentUser;
	        },

	        /**
	         * Allow someone to define a custom User class without className
	         * being rewritten to _User. The default behavior is to rewrite
	         * User to _User for legacy reasons. This allows developers to
	         * override that behavior.
	         *
	         * @param {Boolean} isAllowed Whether or not to allow custom User class
	         */
	        allowCustomUserClass: function (isAllowed) {
	            this._performUserRewrite = !isAllowed;
	        },

	        /**
	         * Persists a user as currentUser to localStorage, and into the singleton.
	         */
	        _saveCurrentUser: function (user) {
	            if (Parse.User._currentUser !== user) {
	                Parse.User.logOut();
	            }
	            user._isCurrentUser = true;
	            Parse.User._currentUser = user;
	            Parse.User._currentUserMatchesDisk = true;

	            var json = user.toJSON();
	            json._id = user.id;
	            json._sessionToken = user._sessionToken;
	            Parse.localStorage.setItem(
	                Parse._getParsePath(Parse.User._CURRENT_USER_KEY),
	                JSON.stringify(json));
	        },

	        _registerAuthenticationProvider: function (provider) {
	            Parse.User._authProviders[provider.getAuthType()] = provider;
	            // Synchronize the current user with the auth provider.
	            if (Parse.User.current()) {
	                Parse.User.current()._synchronizeAuthData(provider.getAuthType());
	            }
	        },

	        _logInWith: function (provider, options) {
	            var user = Parse.Object._create("_User");
	            return user._linkWith(provider, options);
	        }

	    });
	}(this));


	// Parse.Query is a way to create a list of Parse.Objects.
	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * Creates a new parse Parse.Query for the given Parse.Object subclass.
	     * @param objectClass -
	     *   An instance of a subclass of Parse.Object, or a Parse className string.
	     * @class
	     *
	     * <p>Parse.Query defines a query that is used to fetch Parse.Objects. The
	     * most common use case is finding all objects that match a query through the
	     * <code>find</code> method. For example, this sample code fetches all objects
	     * of class <code>MyClass</code>. It calls a different function depending on
	     * whether the fetch succeeded or not.
	     *
	     * <pre>
	     * var query = new Parse.Query(MyClass);
	     * query.find({
	   *   success: function(results) {
	   *     // results is an array of Parse.Object.
	   *   },
	   *
	   *   error: function(error) {
	   *     // error is an instance of Parse.Error.
	   *   }
	   * });</pre></p>
	     *
	     * <p>A Parse.Query can also be used to retrieve a single object whose id is
	     * known, through the get method. For example, this sample code fetches an
	     * object of class <code>MyClass</code> and id <code>myId</code>. It calls a
	     * different function depending on whether the fetch succeeded or not.
	     *
	     * <pre>
	     * var query = new Parse.Query(MyClass);
	     * query.get(myId, {
	   *   success: function(object) {
	   *     // object is an instance of Parse.Object.
	   *   },
	   *
	   *   error: function(object, error) {
	   *     // error is an instance of Parse.Error.
	   *   }
	   * });</pre></p>
	     *
	     * <p>A Parse.Query can also be used to count the number of objects that match
	     * the query without retrieving all of those objects. For example, this
	     * sample code counts the number of objects of the class <code>MyClass</code>
	     * <pre>
	     * var query = new Parse.Query(MyClass);
	     * query.count({
	   *   success: function(number) {
	   *     // There are number instances of MyClass.
	   *   },
	   *
	   *   error: function(error) {
	   *     // error is an instance of Parse.Error.
	   *   }
	   * });</pre></p>
	     */
	    Parse.Query = function (objectClass) {
	        if (_.isString(objectClass)) {
	            objectClass = Parse.Object._getSubclass(objectClass);
	        }

	        this.objectClass = objectClass;

	        this.className = objectClass.prototype.className;

	        this._where = {};
	        this._include = [];
	        this._limit = -1; // negative limit means, do not send a limit
	        this._skip = 0;
	        this._extraOptions = {};
	    };

	    /**
	     * Constructs a Parse.Query that is the OR of the passed in queries.  For
	     * example:
	     * <pre>var compoundQuery = Parse.Query.or(query1, query2, query3);</pre>
	     *
	     * will create a compoundQuery that is an or of the query1, query2, and
	     * query3.
	     * @param {...Parse.Query} var_args The list of queries to OR.
	     * @return {Parse.Query} The query that is the OR of the passed in queries.
	     */
	    Parse.Query.or = function () {
	        var queries = _.toArray(arguments);
	        var className = null;
	        Parse._arrayEach(queries, function (q) {
	            if (_.isNull(className)) {
	                className = q.className;
	            }

	            if (className !== q.className) {
	                throw "All queries must be for the same class";
	            }
	        });
	        var query = new Parse.Query(className);
	        query._orQuery(queries);
	        return query;
	    };

	    Parse.Query.prototype = {
	        /**
	         * Constructs a Parse.Object whose id is already known by fetching data from
	         * the server.  Either options.success or options.error is called when the
	         * find completes.
	         *
	         * @param {String} objectId The id of the object to be fetched.
	         * @param {Object} options A Backbone-style options object.
	         * Valid options are:<ul>
	         *   <li>success: A Backbone-style success callback
	         *   <li>error: An Backbone-style error callback.
	         *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	         *     be used for this request.
	         * </ul>
	         */
	        get: function (objectId, options) {
	            var self = this;
	            self.equalTo('objectId', objectId);

	            var firstOptions = {};
	            if (options && _.has(options, 'useMasterKey')) {
	                firstOptions = { useMasterKey: options.useMasterKey };
	            }

	            return self.first(firstOptions).then(function (response) {
	                if (response) {
	                    return response;
	                }

	                var errorObject = new Parse.Error(Parse.Error.OBJECT_NOT_FOUND,
	                    "Object not found.");
	                return Parse.Promise.error(errorObject);

	            })._thenRunCallbacks(options, null);
	        },

	        /**
	         * Returns a JSON representation of this query.
	         * @return {Object} The JSON representation of the query.
	         */
	        toJSON: function () {
	            var params = {
	                where: this._where
	            };

	            if (this._include.length > 0) {
	                params.include = this._include.join(",");
	            }
	            if (this._select) {
	                params.keys = this._select.join(",");
	            }
	            if (this._limit >= 0) {
	                params.limit = this._limit;
	            }
	            if (this._skip > 0) {
	                params.skip = this._skip;
	            }
	            if (this._order !== undefined) {
	                params.order = this._order.join(",");
	            }

	            Parse._objectEach(this._extraOptions, function (v, k) {
	                params[k] = v;
	            });

	            return params;
	        },

	        /**
	         * Retrieves a list of ParseObjects that satisfy this query.
	         * Either options.success or options.error is called when the find
	         * completes.
	         *
	         * @param {Object} options A Backbone-style options object. Valid options
	         * are:<ul>
	         *   <li>success: Function to call when the find completes successfully.
	         *   <li>error: Function to call when the find fails.
	         *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	         *     be used for this request.
	         * </ul>
	         *
	         * @return {Parse.Promise} A promise that is resolved with the results when
	         * the query completes.
	         */
	        find: function (options) {
	            var self = this;
	            options = options || {};

	            var request = Parse._request({
	                route: "classes",
	                className: this.className,
	                method: "GET",
	                useMasterKey: options.useMasterKey,
	                data: this.toJSON()
	            });

	            return request.then(function (response) {
	                return _.map(response.results, function (json) {
	                    var obj;
	                    if (response.className) {
	                        obj = new Parse.Object(response.className);
	                    } else {
	                        obj = new self.objectClass();
	                    }
	                    obj._finishFetch(json, true);
	                    return obj;
	                });
	            })._thenRunCallbacks(options);
	        },

	        /**
	         * Counts the number of objects that match this query.
	         * Either options.success or options.error is called when the count
	         * completes.
	         *
	         * @param {Object} options A Backbone-style options object. Valid options
	         * are:<ul>
	         *   <li>success: Function to call when the count completes successfully.
	         *   <li>error: Function to call when the find fails.
	         *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	         *     be used for this request.
	         * </ul>
	         *
	         * @return {Parse.Promise} A promise that is resolved with the count when
	         * the query completes.
	         */
	        count: function (options) {
	            var self = this;
	            options = options || {};

	            var params = this.toJSON();
	            params.limit = 0;
	            params.count = 1;
	            var request = Parse._request({
	                route: "classes",
	                className: self.className,
	                method: "GET",
	                useMasterKey: options.useMasterKey,
	                data: params
	            });

	            return request.then(function (response) {
	                return response.count;
	            })._thenRunCallbacks(options);
	        },

	        /**
	         * Retrieves at most one Parse.Object that satisfies this query.
	         *
	         * Either options.success or options.error is called when it completes.
	         * success is passed the object if there is one. otherwise, undefined.
	         *
	         * @param {Object} options A Backbone-style options object. Valid options
	         * are:<ul>
	         *   <li>success: Function to call when the find completes successfully.
	         *   <li>error: Function to call when the find fails.
	         *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	         *     be used for this request.
	         * </ul>
	         *
	         * @return {Parse.Promise} A promise that is resolved with the object when
	         * the query completes.
	         */
	        first: function (options) {
	            var self = this;
	            options = options || {};

	            var params = this.toJSON();
	            params.limit = 1;
	            var request = Parse._request({
	                route: "classes",
	                className: this.className,
	                method: "GET",
	                useMasterKey: options.useMasterKey,
	                data: params
	            });

	            return request.then(function (response) {
	                return _.map(response.results, function (json) {
	                    var obj = new self.objectClass();
	                    obj._finishFetch(json, true);
	                    return obj;
	                })[0];
	            })._thenRunCallbacks(options);
	        },

	        /**
	         * Returns a new instance of Parse.Collection backed by this query.
	         * @param {Array} items An array of instances of <code>Parse.Object</code>
	         *     with which to start this Collection.
	         * @param {Object} options An optional object with Backbone-style options.
	         * Valid options are:<ul>
	         *   <li>model: The Parse.Object subclass that this collection contains.
	         *   <li>query: An instance of Parse.Query to use when fetching items.
	         *   <li>comparator: A string property name or function to sort by.
	         * </ul>
	         * @return {Parse.Collection}
	         */
	        collection: function (items, options) {
	            options = options || {};
	            return new Parse.Collection(items, _.extend(options, {
	                model: this.objectClass,
	                query: this
	            }));
	        },

	        /**
	         * Sets the number of results to skip before returning any results.
	         * This is useful for pagination.
	         * Default is to skip zero results.
	         * @param {Number} n the number of results to skip.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        skip: function (n) {
	            this._skip = n;
	            return this;
	        },

	        /**
	         * Sets the limit of the number of results to return. The default limit is
	         * 100, with a maximum of 1000 results being returned at a time.
	         * @param {Number} n the number of results to limit to.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        limit: function (n) {
	            this._limit = n;
	            return this;
	        },

	        /**
	         * Add a constraint to the query that requires a particular key's value to
	         * be equal to the provided value.
	         * @param {String} key The key to check.
	         * @param value The value that the Parse.Object must contain.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        equalTo: function (key, value) {
	            if (_.isUndefined(value)) {
	                return this.doesNotExist(key);
	            }

	            this._where[key] = Parse._encode(value);
	            return this;
	        },

	        /**
	         * Helper for condition queries
	         */
	        _addCondition: function (key, condition, value) {
	            // Check if we already have a condition
	            if (!this._where[key]) {
	                this._where[key] = {};
	            }
	            this._where[key][condition] = Parse._encode(value);
	            return this;
	        },

	        /**
	         * Add a constraint to the query that requires a particular key's value to
	         * be not equal to the provided value.
	         * @param {String} key The key to check.
	         * @param value The value that must not be equalled.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        notEqualTo: function (key, value) {
	            this._addCondition(key, "$ne", value);
	            return this;
	        },

	        /**
	         * Add a constraint to the query that requires a particular key's value to
	         * be less than the provided value.
	         * @param {String} key The key to check.
	         * @param value The value that provides an upper bound.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        lessThan: function (key, value) {
	            this._addCondition(key, "$lt", value);
	            return this;
	        },

	        /**
	         * Add a constraint to the query that requires a particular key's value to
	         * be greater than the provided value.
	         * @param {String} key The key to check.
	         * @param value The value that provides an lower bound.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        greaterThan: function (key, value) {
	            this._addCondition(key, "$gt", value);
	            return this;
	        },

	        /**
	         * Add a constraint to the query that requires a particular key's value to
	         * be less than or equal to the provided value.
	         * @param {String} key The key to check.
	         * @param value The value that provides an upper bound.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        lessThanOrEqualTo: function (key, value) {
	            this._addCondition(key, "$lte", value);
	            return this;
	        },

	        /**
	         * Add a constraint to the query that requires a particular key's value to
	         * be greater than or equal to the provided value.
	         * @param {String} key The key to check.
	         * @param value The value that provides an lower bound.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        greaterThanOrEqualTo: function (key, value) {
	            this._addCondition(key, "$gte", value);
	            return this;
	        },

	        /**
	         * Add a constraint to the query that requires a particular key's value to
	         * be contained in the provided list of values.
	         * @param {String} key The key to check.
	         * @param {Array} values The values that will match.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        containedIn: function (key, values) {
	            this._addCondition(key, "$in", values);
	            return this;
	        },

	        /**
	         * Add a constraint to the query that requires a particular key's value to
	         * not be contained in the provided list of values.
	         * @param {String} key The key to check.
	         * @param {Array} values The values that will not match.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        notContainedIn: function (key, values) {
	            this._addCondition(key, "$nin", values);
	            return this;
	        },

	        /**
	         * Add a constraint to the query that requires a particular key's value to
	         * contain each one of the provided list of values.
	         * @param {String} key The key to check.  This key's value must be an array.
	         * @param {Array} values The values that will match.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        containsAll: function (key, values) {
	            this._addCondition(key, "$all", values);
	            return this;
	        },


	        /**
	         * Add a constraint for finding objects that contain the given key.
	         * @param {String} key The key that should exist.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        exists: function (key) {
	            this._addCondition(key, "$exists", true);
	            return this;
	        },

	        /**
	         * Add a constraint for finding objects that do not contain a given key.
	         * @param {String} key The key that should not exist
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        doesNotExist: function (key) {
	            this._addCondition(key, "$exists", false);
	            return this;
	        },

	        /**
	         * Add a regular expression constraint for finding string values that match
	         * the provided regular expression.
	         * This may be slow for large datasets.
	         * @param {String} key The key that the string to match is stored in.
	         * @param {RegExp} regex The regular expression pattern to match.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        matches: function (key, regex, modifiers) {
	            this._addCondition(key, "$regex", regex);
	            if (!modifiers) {
	                modifiers = "";
	            }
	            // Javascript regex options support mig as inline options but store them 
	            // as properties of the object. We support mi & should migrate them to
	            // modifiers
	            if (regex.ignoreCase) {
	                modifiers += 'i';
	            }
	            if (regex.multiline) {
	                modifiers += 'm';
	            }

	            if (modifiers && modifiers.length) {
	                this._addCondition(key, "$options", modifiers);
	            }
	            return this;
	        },

	        /**
	         * Add a constraint that requires that a key's value matches a Parse.Query
	         * constraint.
	         * @param {String} key The key that the contains the object to match the
	         *                     query.
	         * @param {Parse.Query} query The query that should match.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        matchesQuery: function (key, query) {
	            var queryJSON = query.toJSON();
	            queryJSON.className = query.className;
	            this._addCondition(key, "$inQuery", queryJSON);
	            return this;
	        },

	        /**
	         * Add a constraint that requires that a key's value not matches a
	         * Parse.Query constraint.
	         * @param {String} key The key that the contains the object to match the
	         *                     query.
	         * @param {Parse.Query} query The query that should not match.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        doesNotMatchQuery: function (key, query) {
	            var queryJSON = query.toJSON();
	            queryJSON.className = query.className;
	            this._addCondition(key, "$notInQuery", queryJSON);
	            return this;
	        },


	        /**
	         * Add a constraint that requires that a key's value matches a value in
	         * an object returned by a different Parse.Query.
	         * @param {String} key The key that contains the value that is being
	         *                     matched.
	         * @param {String} queryKey The key in the objects returned by the query to
	         *                          match against.
	         * @param {Parse.Query} query The query to run.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        matchesKeyInQuery: function (key, queryKey, query) {
	            var queryJSON = query.toJSON();
	            queryJSON.className = query.className;
	            this._addCondition(key, "$select",
	                { key: queryKey, query: queryJSON });
	            return this;
	        },

	        /**
	         * Add a constraint that requires that a key's value not match a value in
	         * an object returned by a different Parse.Query.
	         * @param {String} key The key that contains the value that is being
	         *                     excluded.
	         * @param {String} queryKey The key in the objects returned by the query to
	         *                          match against.
	         * @param {Parse.Query} query The query to run.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        doesNotMatchKeyInQuery: function (key, queryKey, query) {
	            var queryJSON = query.toJSON();
	            queryJSON.className = query.className;
	            this._addCondition(key, "$dontSelect",
	                { key: queryKey, query: queryJSON });
	            return this;
	        },

	        /**
	         * Add constraint that at least one of the passed in queries matches.
	         * @param {Array} queries
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        _orQuery: function (queries) {
	            var queryJSON = _.map(queries, function (q) {
	                return q.toJSON().where;
	            });

	            this._where.$or = queryJSON;
	            return this;
	        },

	        /**
	         * Converts a string into a regex that matches it.
	         * Surrounding with \Q .. \E does this, we just need to escape \E's in
	         * the text separately.
	         */
	        _quote: function (s) {
	            return "\\Q" + s.replace("\\E", "\\E\\\\E\\Q") + "\\E";
	        },

	        /**
	         * Add a constraint for finding string values that contain a provided
	         * string.  This may be slow for large datasets.
	         * @param {String} key The key that the string to match is stored in.
	         * @param {String} substring The substring that the value must contain.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        contains: function (key, value) {
	            this._addCondition(key, "$regex", this._quote(value));
	            return this;
	        },

	        /**
	         * Add a constraint for finding string values that start with a provided
	         * string.  This query will use the backend index, so it will be fast even
	         * for large datasets.
	         * @param {String} key The key that the string to match is stored in.
	         * @param {String} prefix The substring that the value must start with.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        startsWith: function (key, value) {
	            this._addCondition(key, "$regex", "^" + this._quote(value));
	            return this;
	        },

	        /**
	         * Add a constraint for finding string values that end with a provided
	         * string.  This will be slow for large datasets.
	         * @param {String} key The key that the string to match is stored in.
	         * @param {String} suffix The substring that the value must end with.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        endsWith: function (key, value) {
	            this._addCondition(key, "$regex", this._quote(value) + "$");
	            return this;
	        },

	        /**
	         * Sorts the results in ascending order by the given key.
	         *
	         * @param {(String|String[]|...String} key The key to order by, which is a
	         * string of comma separated values, or an Array of keys, or multiple keys.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        ascending: function () {
	            this._order = [];
	            return this.addAscending.apply(this, arguments);
	        },

	        /**
	         * Sorts the results in ascending order by the given key,
	         * but can also add secondary sort descriptors without overwriting _order.
	         *
	         * @param {(String|String[]|...String} key The key to order by, which is a
	         * string of comma separated values, or an Array of keys, or multiple keys.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        addAscending: function (key) {
	            var self = this;
	            if (!this._order) {
	                this._order = [];
	            }
	            Parse._arrayEach(arguments, function (key) {
	                if (Array.isArray(key)) {
	                    key = key.join();
	                }
	                self._order = self._order.concat(key.replace(/\s/g, "").split(","));
	            });
	            return this;
	        },

	        /**
	         * Sorts the results in descending order by the given key.
	         *
	         * @param {(String|String[]|...String} key The key to order by, which is a
	         * string of comma separated values, or an Array of keys, or multiple keys.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        descending: function (key) {
	            this._order = [];
	            return this.addDescending.apply(this, arguments);
	        },

	        /**
	         * Sorts the results in descending order by the given key,
	         * but can also add secondary sort descriptors without overwriting _order.
	         *
	         * @param {(String|String[]|...String} key The key to order by, which is a
	         * string of comma separated values, or an Array of keys, or multiple keys.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        addDescending: function (key) {
	            var self = this;
	            if (!this._order) {
	                this._order = [];
	            }
	            Parse._arrayEach(arguments, function (key) {
	                if (Array.isArray(key)) {
	                    key = key.join();
	                }
	                self._order = self._order.concat(
	                    _.map(key.replace(/\s/g, "").split(","),
	                        function (k) {
	                            return "-" + k;
	                        }));
	            });
	            return this;
	        },

	        /**
	         * Add a proximity based constraint for finding objects with key point
	         * values near the point given.
	         * @param {String} key The key that the Parse.GeoPoint is stored in.
	         * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        near: function (key, point) {
	            if (!(point instanceof Parse.GeoPoint)) {
	                // Try to cast it to a GeoPoint, so that near("loc", [20,30]) works.
	                point = new Parse.GeoPoint(point);
	            }
	            this._addCondition(key, "$nearSphere", point);
	            return this;
	        },

	        /**
	         * Add a proximity based constraint for finding objects with key point
	         * values near the point given and within the maximum distance given.
	         * @param {String} key The key that the Parse.GeoPoint is stored in.
	         * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	         * @param {Number} maxDistance Maximum distance (in radians) of results to
	         *   return.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        withinRadians: function (key, point, distance) {
	            this.near(key, point);
	            this._addCondition(key, "$maxDistance", distance);
	            return this;
	        },

	        /**
	         * Add a proximity based constraint for finding objects with key point
	         * values near the point given and within the maximum distance given.
	         * Radius of earth used is 3958.8 miles.
	         * @param {String} key The key that the Parse.GeoPoint is stored in.
	         * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	         * @param {Number} maxDistance Maximum distance (in miles) of results to
	         *     return.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        withinMiles: function (key, point, distance) {
	            return this.withinRadians(key, point, distance / 3958.8);
	        },

	        /**
	         * Add a proximity based constraint for finding objects with key point
	         * values near the point given and within the maximum distance given.
	         * Radius of earth used is 6371.0 kilometers.
	         * @param {String} key The key that the Parse.GeoPoint is stored in.
	         * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	         * @param {Number} maxDistance Maximum distance (in kilometers) of results
	         *     to return.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        withinKilometers: function (key, point, distance) {
	            return this.withinRadians(key, point, distance / 6371.0);
	        },

	        /**
	         * Add a constraint to the query that requires a particular key's
	         * coordinates be contained within a given rectangular geographic bounding
	         * box.
	         * @param {String} key The key to be constrained.
	         * @param {Parse.GeoPoint} southwest
	         *     The lower-left inclusive corner of the box.
	         * @param {Parse.GeoPoint} northeast
	         *     The upper-right inclusive corner of the box.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        withinGeoBox: function (key, southwest, northeast) {
	            if (!(southwest instanceof Parse.GeoPoint)) {
	                southwest = new Parse.GeoPoint(southwest);
	            }
	            if (!(northeast instanceof Parse.GeoPoint)) {
	                northeast = new Parse.GeoPoint(northeast);
	            }
	            this._addCondition(key, '$within', { '$box': [southwest, northeast] });
	            return this;
	        },

	        /**
	         * Include nested Parse.Objects for the provided key.  You can use dot
	         * notation to specify which fields in the included object are also fetch.
	         * @param {String} key The name of the key to include.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        include: function () {
	            var self = this;
	            Parse._arrayEach(arguments, function (key) {
	                if (_.isArray(key)) {
	                    self._include = self._include.concat(key);
	                } else {
	                    self._include.push(key);
	                }
	            });
	            return this;
	        },

	        /**
	         * Restrict the fields of the returned Parse.Objects to include only the
	         * provided keys.  If this is called multiple times, then all of the keys
	         * specified in each of the calls will be included.
	         * @param {Array} keys The names of the keys to include.
	         * @return {Parse.Query} Returns the query, so you can chain this call.
	         */
	        select: function () {
	            var self = this;
	            this._select = this._select || [];
	            Parse._arrayEach(arguments, function (key) {
	                if (_.isArray(key)) {
	                    self._select = self._select.concat(key);
	                } else {
	                    self._select.push(key);
	                }
	            });
	            return this;
	        },

	        /**
	         * Iterates over each result of a query, calling a callback for each one. If
	         * the callback returns a promise, the iteration will not continue until
	         * that promise has been fulfilled. If the callback returns a rejected
	         * promise, then iteration will stop with that error. The items are
	         * processed in an unspecified order. The query may not have any sort order,
	         * and may not use limit or skip.
	         * @param {Function} callback Callback that will be called with each result
	         *     of the query.
	         * @param {Object} options An optional Backbone-like options object with
	         *     success and error callbacks that will be invoked once the iteration
	         *     has finished.
	         * @return {Parse.Promise} A promise that will be fulfilled once the
	         *     iteration has completed.
	         */
	        each: function (callback, options) {
	            options = options || {};

	            if (this._order || this._skip || (this._limit >= 0)) {
	                var error =
	                    "Cannot iterate on a query with sort, skip, or limit.";
	                return Parse.Promise.error(error)._thenRunCallbacks(options);
	            }

	            var promise = new Parse.Promise();

	            var query = new Parse.Query(this.objectClass);
	            // We can override the batch size from the options.
	            // This is undocumented, but useful for testing.
	            query._limit = options.batchSize || 100;
	            query._where = _.clone(this._where);
	            query._include = _.clone(this._include);

	            query.ascending('objectId');

	            var finished = false;
	            return Parse.Promise._continueWhile(function () {
	                return !finished;

	            },function () {
	                return query.find().then(function (results) {
	                    var callbacksDone = Parse.Promise.as();
	                    Parse._.each(results, function (result) {
	                        callbacksDone = callbacksDone.then(function () {
	                            return callback(result);
	                        });
	                    });

	                    return callbacksDone.then(function () {
	                        if (results.length >= query._limit) {
	                            query.greaterThan("objectId", results[results.length - 1].id);
	                        } else {
	                            finished = true;
	                        }
	                    });
	                });
	            })._thenRunCallbacks(options);
	        }
	    };

	}(this));

	/*global FB: false , console: false*/
	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    var PUBLIC_KEY = "*";

	    var initialized = false;
	    var requestedPermissions;
	    var initOptions;
	    var provider = {
	        authenticate: function (options) {
	            var self = this;
	            FB.login(function (response) {
	                if (response.authResponse) {
	                    if (options.success) {
	                        options.success(self, {
	                            id: response.authResponse.userID,
	                            access_token: response.authResponse.accessToken,
	                            expiration_date: new Date(response.authResponse.expiresIn * 1000 +
	                                (new Date()).getTime()).toJSON()
	                        });
	                    }
	                } else {
	                    if (options.error) {
	                        options.error(self, response);
	                    }
	                }
	            }, {
	                scope: requestedPermissions
	            });
	        },
	        restoreAuthentication: function (authData) {
	            if (authData) {
	                var authResponse = {
	                    userID: authData.id,
	                    accessToken: authData.access_token,
	                    expiresIn: (Parse._parseDate(authData.expiration_date).getTime() -
	                        (new Date()).getTime()) / 1000
	                };
	                var newOptions = _.clone(initOptions);
	                newOptions.authResponse = authResponse;

	                // Suppress checks for login status from the browser.
	                newOptions.status = false;

	                // If the user doesn't match the one known by the FB SDK, log out.
	                // Most of the time, the users will match -- it's only in cases where
	                // the FB SDK knows of a different user than the one being restored
	                // from a Parse User that logged in with username/password.
	                var existingResponse = FB.getAuthResponse();
	                if (existingResponse &&
	                    existingResponse.userID !== authResponse.userID) {
	                    FB.logout();
	                }

	                FB.init(newOptions);
	            }
	            return true;
	        },
	        getAuthType: function () {
	            return "facebook";
	        },
	        deauthenticate: function () {
	            this.restoreAuthentication(null);
	        }
	    };

	    /**
	     * Provides a set of utilities for using Parse with Facebook.
	     * @namespace
	     * Provides a set of utilities for using Parse with Facebook.
	     */
	    Parse.FacebookUtils = {
	        /**
	         * Initializes Parse Facebook integration.  Call this function after you
	         * have loaded the Facebook Javascript SDK with the same parameters
	         * as you would pass to<code>
	         * <a href=
	         * "https://developers.facebook.com/docs/reference/javascript/FB.init/">
	         * FB.init()</a></code>.  Parse.FacebookUtils will invoke FB.init() for you
	         * with these arguments.
	         *
	         * @param {Object} options Facebook options argument as described here:
	         *   <a href=
	         *   "https://developers.facebook.com/docs/reference/javascript/FB.init/">
	         *   FB.init()</a>. The status flag will be coerced to 'false' because it
	         *   interferes with Parse Facebook integration. Call FB.getLoginStatus()
	         *   explicitly if this behavior is required by your application.
	         */
	        init: function (options) {
	            if (typeof(FB) === 'undefined') {
	                throw "The Facebook JavaScript SDK must be loaded before calling init.";
	            }
	            initOptions = _.clone(options) || {};
	            if (initOptions.status && typeof(console) !== "undefined") {
	                var warn = console.warn || console.log || function () {
	                };
	                warn.call(console, "The 'status' flag passed into" +
	                    " FB.init, when set to true, can interfere with Parse Facebook" +
	                    " integration, so it has been suppressed. Please call" +
	                    " FB.getLoginStatus() explicitly if you require this behavior.");
	            }
	            initOptions.status = false;
	            FB.init(initOptions);
	            Parse.User._registerAuthenticationProvider(provider);
	            initialized = true;
	        },

	        /**
	         * Gets whether the user has their account linked to Facebook.
	         *
	         * @param {Parse.User} user User to check for a facebook link.
	         *     The user must be logged in on this device.
	         * @return {Boolean} <code>true</code> if the user has their account
	         *     linked to Facebook.
	         */
	        isLinked: function (user) {
	            return user._isLinked("facebook");
	        },

	        /**
	         * Logs in a user using Facebook. This method delegates to the Facebook
	         * SDK to authenticate the user, and then automatically logs in (or
	         * creates, in the case where it is a new user) a Parse.User.
	         *
	         * @param {String, Object} permissions The permissions required for Facebook
	         *    log in.  This is a comma-separated string of permissions.
	         *    Alternatively, supply a Facebook authData object as described in our
	         *    REST API docs if you want to handle getting facebook auth tokens
	         *    yourself.
	         * @param {Object} options Standard options object with success and error
	         *    callbacks.
	         */
	        logIn: function (permissions, options) {
	            if (!permissions || _.isString(permissions)) {
	                if (!initialized) {
	                    throw "You must initialize FacebookUtils before calling logIn.";
	                }
	                requestedPermissions = permissions;
	                return Parse.User._logInWith("facebook", options);
	            } else {
	                var newOptions = _.clone(options) || {};
	                newOptions.authData = permissions;
	                return Parse.User._logInWith("facebook", newOptions);
	            }
	        },

	        /**
	         * Links Facebook to an existing PFUser. This method delegates to the
	         * Facebook SDK to authenticate the user, and then automatically links
	         * the account to the Parse.User.
	         *
	         * @param {Parse.User} user User to link to Facebook. This must be the
	         *     current user.
	         * @param {String, Object} permissions The permissions required for Facebook
	         *    log in.  This is a comma-separated string of permissions.
	         *    Alternatively, supply a Facebook authData object as described in our
	         *    REST API docs if you want to handle getting facebook auth tokens
	         *    yourself.
	         * @param {Object} options Standard options object with success and error
	         *    callbacks.
	         */
	        link: function (user, permissions, options) {
	            if (!permissions || _.isString(permissions)) {
	                if (!initialized) {
	                    throw "You must initialize FacebookUtils before calling link.";
	                }
	                requestedPermissions = permissions;
	                return user._linkWith("facebook", options);
	            } else {
	                var newOptions = _.clone(options) || {};
	                newOptions.authData = permissions;
	                return user._linkWith("facebook", newOptions);
	            }
	        },

	        /**
	         * Unlinks the Parse.User from a Facebook account.
	         *
	         * @param {Parse.User} user User to unlink from Facebook. This must be the
	         *     current user.
	         * @param {Object} options Standard options object with success and error
	         *    callbacks.
	         */
	        unlink: function (user, options) {
	            if (!initialized) {
	                throw "You must initialize FacebookUtils before calling unlink.";
	            }
	            return user._unlinkFrom("facebook", options);
	        }
	    };

	}(this));

	/*global _: false, document: false, window: false, navigator: false */
	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * History serves as a global router (per frame) to handle hashchange
	     * events or pushState, match the appropriate route, and trigger
	     * callbacks. You shouldn't ever have to create one of these yourself
	     * — you should use the reference to <code>Parse.history</code>
	     * that will be created for you automatically if you make use of
	     * Routers with routes.
	     * @class
	     *
	     * <p>A fork of Backbone.History, provided for your convenience.  If you
	     * use this class, you must also include jQuery, or another library
	     * that provides a jQuery-compatible $ function.  For more information,
	     * see the <a href="http://documentcloud.github.com/backbone/#History">
	     * Backbone documentation</a>.</p>
	     * <p><strong><em>Available in the client SDK only.</em></strong></p>
	     */
	    Parse.History = function () {
	        this.handlers = [];
	        _.bindAll(this, 'checkUrl');
	    };

	    // Cached regex for cleaning leading hashes and slashes .
	    var routeStripper = /^[#\/]/;

	    // Cached regex for detecting MSIE.
	    var isExplorer = /msie [\w.]+/;

	    // Has the history handling already been started?
	    Parse.History.started = false;

	    // Set up all inheritable **Parse.History** properties and methods.
	    _.extend(Parse.History.prototype, Parse.Events,
	        /** @lends Parse.History.prototype */ {

	            // The default interval to poll for hash changes, if necessary, is
	            // twenty times a second.
	            interval: 50,

	            // Gets the true hash value. Cannot use location.hash directly due to bug
	            // in Firefox where location.hash will always be decoded.
	            getHash: function (windowOverride) {
	                var loc = windowOverride ? windowOverride.location : window.location;
	                var match = loc.href.match(/#(.*)$/);
	                return match ? match[1] : '';
	            },

	            // Get the cross-browser normalized URL fragment, either from the URL,
	            // the hash, or the override.
	            getFragment: function (fragment, forcePushState) {
	                if (Parse._isNullOrUndefined(fragment)) {
	                    if (this._hasPushState || forcePushState) {
	                        fragment = window.location.pathname;
	                        var search = window.location.search;
	                        if (search) {
	                            fragment += search;
	                        }
	                    } else {
	                        fragment = this.getHash();
	                    }
	                }
	                if (!fragment.indexOf(this.options.root)) {
	                    fragment = fragment.substr(this.options.root.length);
	                }
	                return fragment.replace(routeStripper, '');
	            },

	            /**
	             * Start the hash change handling, returning `true` if the current
	             * URL matches an existing route, and `false` otherwise.
	             */
	            start: function (options) {
	                if (Parse.History.started) {
	                    throw new Error("Parse.history has already been started");
	                }
	                Parse.History.started = true;

	                // Figure out the initial configuration. Do we need an iframe?
	                // Is pushState desired ... is it available?
	                this.options = _.extend({}, {root: '/'}, this.options, options);
	                this._wantsHashChange = this.options.hashChange !== false;
	                this._wantsPushState = !!this.options.pushState;
	                this._hasPushState = !!(this.options.pushState &&
	                    window.history &&
	                    window.history.pushState);
	                var fragment = this.getFragment();
	                var docMode = document.documentMode;
	                var oldIE = (isExplorer.exec(navigator.userAgent.toLowerCase()) &&
	                    (!docMode || docMode <= 7));

	                if (oldIE) {
	                    this.iframe = Parse.$('<iframe src="javascript:0" tabindex="-1" />')
	                        .hide().appendTo('body')[0].contentWindow;
	                    this.navigate(fragment);
	                }

	                // Depending on whether we're using pushState or hashes, and whether
	                // 'onhashchange' is supported, determine how we check the URL state.
	                if (this._hasPushState) {
	                    Parse.$(window).bind('popstate', this.checkUrl);
	                } else if (this._wantsHashChange &&
	                    ('onhashchange' in window) && !oldIE) {
	                    Parse.$(window).bind('hashchange', this.checkUrl);
	                } else if (this._wantsHashChange) {
	                    this._checkUrlInterval = window.setInterval(this.checkUrl,
	                        this.interval);
	                }

	                // Determine if we need to change the base url, for a pushState link
	                // opened by a non-pushState browser.
	                this.fragment = fragment;
	                var loc = window.location;
	                var atRoot = loc.pathname === this.options.root;

	                // If we've started off with a route from a `pushState`-enabled browser,
	                // but we're currently in a browser that doesn't support it...
	                if (this._wantsHashChange &&
	                    this._wantsPushState && !this._hasPushState && !atRoot) {
	                    this.fragment = this.getFragment(null, true);
	                    window.location.replace(this.options.root + '#' + this.fragment);
	                    // Return immediately as browser will do redirect to new url
	                    return true;

	                    // Or if we've started out with a hash-based route, but we're currently
	                    // in a browser where it could be `pushState`-based instead...
	                } else if (this._wantsPushState &&
	                    this._hasPushState &&
	                    atRoot &&
	                    loc.hash) {
	                    this.fragment = this.getHash().replace(routeStripper, '');
	                    window.history.replaceState({}, document.title,
	                        loc.protocol + '//' + loc.host + this.options.root + this.fragment);
	                }

	                if (!this.options.silent) {
	                    return this.loadUrl();
	                }
	            },

	            // Disable Parse.history, perhaps temporarily. Not useful in a real app,
	            // but possibly useful for unit testing Routers.
	            stop: function () {
	                Parse.$(window).unbind('popstate', this.checkUrl)
	                    .unbind('hashchange', this.checkUrl);
	                window.clearInterval(this._checkUrlInterval);
	                Parse.History.started = false;
	            },

	            // Add a route to be tested when the fragment changes. Routes added later
	            // may override previous routes.
	            route: function (route, callback) {
	                this.handlers.unshift({route: route, callback: callback});
	            },

	            // Checks the current URL to see if it has changed, and if it has,
	            // calls `loadUrl`, normalizing across the hidden iframe.
	            checkUrl: function (e) {
	                var current = this.getFragment();
	                if (current === this.fragment && this.iframe) {
	                    current = this.getFragment(this.getHash(this.iframe));
	                }
	                if (current === this.fragment) {
	                    return false;
	                }
	                if (this.iframe) {
	                    this.navigate(current);
	                }
	                if (!this.loadUrl()) {
	                    this.loadUrl(this.getHash());
	                }
	            },

	            // Attempt to load the current URL fragment. If a route succeeds with a
	            // match, returns `true`. If no defined routes matches the fragment,
	            // returns `false`.
	            loadUrl: function (fragmentOverride) {
	                var fragment = this.fragment = this.getFragment(fragmentOverride);
	                var matched = _.any(this.handlers, function (handler) {
	                    if (handler.route.test(fragment)) {
	                        handler.callback(fragment);
	                        return true;
	                    }
	                });
	                return matched;
	            },

	            // Save a fragment into the hash history, or replace the URL state if the
	            // 'replace' option is passed. You are responsible for properly URL-encoding
	            // the fragment in advance.
	            //
	            // The options object can contain `trigger: true` if you wish to have the
	            // route callback be fired (not usually desirable), or `replace: true`, if
	            // you wish to modify the current URL without adding an entry to the
	            // history.
	            navigate: function (fragment, options) {
	                if (!Parse.History.started) {
	                    return false;
	                }
	                if (!options || options === true) {
	                    options = {trigger: options};
	                }
	                var frag = (fragment || '').replace(routeStripper, '');
	                if (this.fragment === frag) {
	                    return;
	                }

	                // If pushState is available, we use it to set the fragment as a real URL.
	                if (this._hasPushState) {
	                    if (frag.indexOf(this.options.root) !== 0) {
	                        frag = this.options.root + frag;
	                    }
	                    this.fragment = frag;
	                    var replaceOrPush = options.replace ? 'replaceState' : 'pushState';
	                    window.history[replaceOrPush]({}, document.title, frag);

	                    // If hash changes haven't been explicitly disabled, update the hash
	                    // fragment to store history.
	                } else if (this._wantsHashChange) {
	                    this.fragment = frag;
	                    this._updateHash(window.location, frag, options.replace);
	                    if (this.iframe &&
	                        (frag !== this.getFragment(this.getHash(this.iframe)))) {
	                        // Opening and closing the iframe tricks IE7 and earlier
	                        // to push a history entry on hash-tag change.
	                        // When replace is true, we don't want this.
	                        if (!options.replace) {
	                            this.iframe.document.open().close();
	                        }
	                        this._updateHash(this.iframe.location, frag, options.replace);
	                    }

	                    // If you've told us that you explicitly don't want fallback hashchange-
	                    // based history, then `navigate` becomes a page refresh.
	                } else {
	                    window.location.assign(this.options.root + fragment);
	                }
	                if (options.trigger) {
	                    this.loadUrl(fragment);
	                }
	            },

	            // Update the hash location, either replacing the current entry, or adding
	            // a new one to the browser history.
	            _updateHash: function (location, fragment, replace) {
	                if (replace) {
	                    var s = location.toString().replace(/(javascript:|#).*$/, '');
	                    location.replace(s + '#' + fragment);
	                } else {
	                    location.hash = fragment;
	                }
	            }
	        });
	}(this));

	/*global _: false*/
	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * Routers map faux-URLs to actions, and fire events when routes are
	     * matched. Creating a new one sets its `routes` hash, if not set statically.
	     * @class
	     *
	     * <p>A fork of Backbone.Router, provided for your convenience.
	     * For more information, see the
	     * <a href="http://documentcloud.github.com/backbone/#Router">Backbone
	     * documentation</a>.</p>
	     * <p><strong><em>Available in the client SDK only.</em></strong></p>
	     */
	    Parse.Router = function (options) {
	        options = options || {};
	        if (options.routes) {
	            this.routes = options.routes;
	        }
	        this._bindRoutes();
	        this.initialize.apply(this, arguments);
	    };

	    // Cached regular expressions for matching named param parts and splatted
	    // parts of route strings.
	    var namedParam = /:\w+/g;
	    var splatParam = /\*\w+/g;
	    var escapeRegExp = /[\-\[\]{}()+?.,\\\^\$\|#\s]/g;

	    // Set up all inheritable **Parse.Router** properties and methods.
	    _.extend(Parse.Router.prototype, Parse.Events,
	        /** @lends Parse.Router.prototype */ {

	            /**
	             * Initialize is an empty function by default. Override it with your own
	             * initialization logic.
	             */
	            initialize: function () {
	            },

	            /**
	             * Manually bind a single named route to a callback. For example:
	             *
	             * <pre>this.route('search/:query/p:num', 'search', function(query, num) {
	     *       ...
	     *     });</pre>
	             */
	            route: function (route, name, callback) {
	                Parse.history = Parse.history || new Parse.History();
	                if (!_.isRegExp(route)) {
	                    route = this._routeToRegExp(route);
	                }
	                if (!callback) {
	                    callback = this[name];
	                }
	                Parse.history.route(route, _.bind(function (fragment) {
	                    var args = this._extractParameters(route, fragment);
	                    if (callback) {
	                        callback.apply(this, args);
	                    }
	                    this.trigger.apply(this, ['route:' + name].concat(args));
	                    Parse.history.trigger('route', this, name, args);
	                }, this));
	                return this;
	            },

	            /**
	             * Whenever you reach a point in your application that you'd
	             * like to save as a URL, call navigate in order to update the
	             * URL. If you wish to also call the route function, set the
	             * trigger option to true. To update the URL without creating
	             * an entry in the browser's history, set the replace option
	             * to true.
	             */
	            navigate: function (fragment, options) {
	                Parse.history.navigate(fragment, options);
	            },

	            // Bind all defined routes to `Parse.history`. We have to reverse the
	            // order of the routes here to support behavior where the most general
	            // routes can be defined at the bottom of the route map.
	            _bindRoutes: function () {
	                if (!this.routes) {
	                    return;
	                }
	                var routes = [];
	                for (var route in this.routes) {
	                    if (this.routes.hasOwnProperty(route)) {
	                        routes.unshift([route, this.routes[route]]);
	                    }
	                }
	                for (var i = 0, l = routes.length; i < l; i++) {
	                    this.route(routes[i][0], routes[i][1], this[routes[i][1]]);
	                }
	            },

	            // Convert a route string into a regular expression, suitable for matching
	            // against the current location hash.
	            _routeToRegExp: function (route) {
	                route = route.replace(escapeRegExp, '\\$&')
	                    .replace(namedParam, '([^\/]+)')
	                    .replace(splatParam, '(.*?)');
	                return new RegExp('^' + route + '$');
	            },

	            // Given a route, and a URL fragment that it matches, return the array of
	            // extracted parameters.
	            _extractParameters: function (route, fragment) {
	                return route.exec(fragment).slice(1);
	            }
	        });

	    /**
	     * @function
	     * @param {Object} instanceProps Instance properties for the router.
	     * @param {Object} classProps Class properies for the router.
	     * @return {Class} A new subclass of <code>Parse.Router</code>.
	     */
	    Parse.Router.extend = Parse._extend;
	}(this));
	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;
	    var _ = Parse._;

	    /**
	     * @namespace Contains functions for calling and declaring
	     * <a href="/docs/cloud_code_guide#functions">cloud functions</a>.
	     * <p><strong><em>
	     *   Some functions are only available from Cloud Code.
	     * </em></strong></p>
	     */
	    Parse.Cloud = Parse.Cloud || {};

	    _.extend(Parse.Cloud, /** @lends Parse.Cloud */ {
	        /**
	         * Makes a call to a cloud function.
	         * @param {String} name The function name.
	         * @param {Object} data The parameters to send to the cloud function.
	         * @param {Object} options A Backbone-style options object
	         * options.success, if set, should be a function to handle a successful
	         * call to a cloud function.  options.error should be a function that
	         * handles an error running the cloud function.  Both functions are
	         * optional.  Both functions take a single argument.
	         * @return {Parse.Promise} A promise that will be resolved with the result
	         * of the function.
	         */
	        run: function (name, data, options) {
	            options = options || {};

	            var request = Parse._request({
	                route: "functions",
	                className: name,
	                method: 'POST',
	                useMasterKey: options.useMasterKey,
	                data: Parse._encode(data, null, true)
	            });

	            return request.then(function (resp) {
	                return Parse._decode(null, resp).result;
	            })._thenRunCallbacks(options);
	        }
	    });
	}(this));

	(function (root) {
	    root.Parse = root.Parse || {};
	    var Parse = root.Parse;

	    Parse.Installation = Parse.Object.extend("_Installation");

	    /**
	     * Contains functions to deal with Push in Parse
	     * @name Parse.Push
	     * @namespace
	     */
	    Parse.Push = Parse.Push || {};

	    /**
	     * Sends a push notification.
	     * @param {Object} data -  The data of the push notification.  Valid fields
	     * are:
	     *   <ol>
	     *     <li>channels - An Array of channels to push to.</li>
	     *     <li>push_time - A Date object for when to send the push.</li>
	     *     <li>expiration_time -  A Date object for when to expire
	     *         the push.</li>
	     *     <li>expiration_interval - The seconds from now to expire the push.</li>
	     *     <li>where - A Parse.Query over Parse.Installation that is used to match
	     *         a set of installations to push to.</li>
	     *     <li>data - The data to send as part of the push</li>
	     *   <ol>
	     * @param {Object} options An object that has an optional success function,
	     * that takes no arguments and will be called on a successful push, and
	     * an error function that takes a Parse.Error and will be called if the push
	     * failed.
	     */
	    Parse.Push.send = function (data, options) {
	        options = options || {};

	        if (data.where) {
	            data.where = data.where.toJSON().where;
	        }

	        if (data.push_time) {
	            data.push_time = data.push_time.toJSON();
	        }

	        if (data.expiration_time) {
	            data.expiration_time = data.expiration_time.toJSON();
	        }

	        if (data.expiration_time && data.expiration_interval) {
	            throw "Both expiration_time and expiration_interval can't be set";
	        }

	        var request = Parse._request({
	            route: 'push',
	            method: 'POST',
	            data: data,
	            useMasterKey: options.useMasterKey
	        });
	        return request._thenRunCallbacks(options);
	    };
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19), __webpack_require__(11)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Backbone.js 1.1.2

	//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org

	(function(root, factory) {

	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(11), __webpack_require__(15), exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, $, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $);
	    }.apply(null, __WEBPACK_AMD_DEFINE_ARRAY__)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore');
	    factory(root, exports, _);

	  // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	  }

	}(this, function(root, Backbone, _, $) {

	  // Initial Setup
	  // -------------

	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;

	  // Create local references to array methods we'll want to use later.
	  var array = [];
	  var push = array.push;
	  var slice = array.slice;
	  var splice = array.splice;

	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.1.2';

	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;

	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function() {
	    root.Backbone = previousBackbone;
	    return this;
	  };

	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;

	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;

	  // Backbone.Events
	  // ---------------

	  // A module that can be mixed in to *any object* in order to provide it with
	  // custom events. You may bind with `on` or remove with `off` callback
	  // functions to an event; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {

	    // Bind an event to a `callback` function. Passing `"all"` will bind
	    // the callback to all events fired.
	    on: function(name, callback, context) {
	      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
	      this._events || (this._events = {});
	      var events = this._events[name] || (this._events[name] = []);
	      events.push({callback: callback, context: context, ctx: context || this});
	      return this;
	    },

	    // Bind an event to only be triggered a single time. After the first time
	    // the callback is invoked, it will be removed.
	    once: function(name, callback, context) {
	      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
	      var self = this;
	      var once = _.once(function() {
	        self.off(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	      return this.on(name, once, context);
	    },

	    // Remove one or many callbacks. If `context` is null, removes all
	    // callbacks with that function. If `callback` is null, removes all
	    // callbacks for the event. If `name` is null, removes all bound
	    // callbacks for all events.
	    off: function(name, callback, context) {
	      var retain, ev, events, names, i, l, j, k;
	      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
	      if (!name && !callback && !context) {
	        this._events = void 0;
	        return this;
	      }
	      names = name ? [name] : _.keys(this._events);
	      for (i = 0, l = names.length; i < l; i++) {
	        name = names[i];
	        if (events = this._events[name]) {
	          this._events[name] = retain = [];
	          if (callback || context) {
	            for (j = 0, k = events.length; j < k; j++) {
	              ev = events[j];
	              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
	                  (context && context !== ev.context)) {
	                retain.push(ev);
	              }
	            }
	          }
	          if (!retain.length) delete this._events[name];
	        }
	      }

	      return this;
	    },

	    // Trigger one or many events, firing all bound callbacks. Callbacks are
	    // passed the same arguments as `trigger` is, apart from the event name
	    // (unless you're listening on `"all"`, which will cause your callback to
	    // receive the true name of the event as the first argument).
	    trigger: function(name) {
	      if (!this._events) return this;
	      var args = slice.call(arguments, 1);
	      if (!eventsApi(this, 'trigger', name, args)) return this;
	      var events = this._events[name];
	      var allEvents = this._events.all;
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, arguments);
	      return this;
	    },

	    // Tell this object to stop listening to either specific events ... or
	    // to every object it's currently listening to.
	    stopListening: function(obj, name, callback) {
	      var listeningTo = this._listeningTo;
	      if (!listeningTo) return this;
	      var remove = !name && !callback;
	      if (!callback && typeof name === 'object') callback = this;
	      if (obj) (listeningTo = {})[obj._listenId] = obj;
	      for (var id in listeningTo) {
	        obj = listeningTo[id];
	        obj.off(name, callback, this);
	        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
	      }
	      return this;
	    }

	  };

	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;

	  // Implement fancy features of the Events API such as multiple event
	  // names `"change blur"` and jQuery-style event maps `{change: action}`
	  // in terms of the existing API.
	  var eventsApi = function(obj, action, name, rest) {
	    if (!name) return true;

	    // Handle event maps.
	    if (typeof name === 'object') {
	      for (var key in name) {
	        obj[action].apply(obj, [key, name[key]].concat(rest));
	      }
	      return false;
	    }

	    // Handle space separated event names.
	    if (eventSplitter.test(name)) {
	      var names = name.split(eventSplitter);
	      for (var i = 0, l = names.length; i < l; i++) {
	        obj[action].apply(obj, [names[i]].concat(rest));
	      }
	      return false;
	    }

	    return true;
	  };

	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };

	  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

	  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
	  // listen to an event in another object ... keeping track of what it's
	  // listening to.
	  _.each(listenMethods, function(implementation, method) {
	    Events[method] = function(obj, name, callback) {
	      var listeningTo = this._listeningTo || (this._listeningTo = {});
	      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	      listeningTo[id] = obj;
	      if (!callback && typeof name === 'object') callback = this;
	      obj[implementation](name, callback, this);
	      return this;
	    };
	  });

	  // Aliases for backwards compatibility.
	  Events.bind   = Events.on;
	  Events.unbind = Events.off;

	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);

	  // Backbone.Model
	  // --------------

	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.

	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function(attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId('c');
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };

	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {

	    // A hash of attributes whose current and previous value differ.
	    changed: null,

	    // The value returned during the last failed validation.
	    validationError: null,

	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Return a copy of the model's `attributes` object.
	    toJSON: function(options) {
	      return _.clone(this.attributes);
	    },

	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Get the value of an attribute.
	    get: function(attr) {
	      return this.attributes[attr];
	    },

	    // Get the HTML-escaped value of an attribute.
	    escape: function(attr) {
	      return _.escape(this.get(attr));
	    },

	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function(attr) {
	      return this.get(attr) != null;
	    },

	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function(key, val, options) {
	      var attr, attrs, unset, changes, silent, changing, prev, current;
	      if (key == null) return this;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      if (typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options || (options = {});

	      // Run validation.
	      if (!this._validate(attrs, options)) return false;

	      // Extract attributes and options.
	      unset           = options.unset;
	      silent          = options.silent;
	      changes         = [];
	      changing        = this._changing;
	      this._changing  = true;

	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }
	      current = this.attributes, prev = this._previousAttributes;

	      // Check for changes of `id`.
	      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

	      // For each `set` attribute, update or delete the current value.
	      for (attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          this.changed[attr] = val;
	        } else {
	          delete this.changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }

	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0, l = changes.length; i < l; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }

	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },

	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
	    },

	    // Clear all attributes on the model, firing `"change"`.
	    clear: function(options) {
	      var attrs = {};
	      for (var key in this.attributes) attrs[key] = void 0;
	      return this.set(attrs, _.extend({}, options, {unset: true}));
	    },

	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },

	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var val, changed = false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      for (var attr in diff) {
	        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
	        (changed || (changed = {}))[attr] = val;
	      }
	      return changed;
	    },

	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },

	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },

	    // Fetch the model from the server. If the server's representation of the
	    // model differs from its current attributes, they will be overridden,
	    // triggering a `"change"` event.
	    fetch: function(options) {
	      options = options ? _.clone(options) : {};
	      if (options.parse === void 0) options.parse = true;
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        if (!model.set(model.parse(resp, options), options)) return false;
	        if (success) success(model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function(key, val, options) {
	      var attrs, method, xhr, attributes = this.attributes;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      if (key == null || typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options = _.extend({validate: true}, options);

	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !options.wait) {
	        if (!this.set(attrs, options)) return false;
	      } else {
	        if (!this._validate(attrs, options)) return false;
	      }

	      // Set temporary attributes if `{wait: true}`.
	      if (attrs && options.wait) {
	        this.attributes = _.extend({}, attributes, attrs);
	      }

	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      if (options.parse === void 0) options.parse = true;
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = model.parse(resp, options);
	        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
	        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
	          return false;
	        }
	        if (success) success(model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);

	      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
	      if (method === 'patch') options.attrs = attrs;
	      xhr = this.sync(method, this, options);

	      // Restore attributes.
	      if (attrs && options.wait) this.attributes = attributes;

	      return xhr;
	    },

	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;

	      var destroy = function() {
	        model.trigger('destroy', model, model.collection, options);
	      };

	      options.success = function(resp) {
	        if (options.wait || model.isNew()) destroy();
	        if (success) success(model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };

	      if (this.isNew()) {
	        options.success();
	        return false;
	      }
	      wrapError(this, options);

	      var xhr = this.sync('delete', this, options);
	      if (!options.wait) destroy();
	      return xhr;
	    },

	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function() {
	      var base =
	        _.result(this, 'urlRoot') ||
	        _.result(this.collection, 'url') ||
	        urlError();
	      if (this.isNew()) return base;
	      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
	    },

	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new model with identical attributes to this one.
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },

	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function() {
	      return !this.has(this.idAttribute);
	    },

	    // Check if the model is currently in a valid state.
	    isValid: function(options) {
	      return this._validate({}, _.extend(options || {}, { validate: true }));
	    },

	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
	      return false;
	    }

	  });

	  // Underscore methods that we want to implement on the Model.
	  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  _.each(modelMethods, function(method) {
	    Model.prototype[method] = function() {
	      var args = slice.call(arguments);
	      args.unshift(this.attributes);
	      return _[method].apply(_, args);
	    };
	  });

	  // Backbone.Collection
	  // -------------------

	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analagous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.

	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function(models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({silent: true}, options));
	  };

	  // Default options for `Collection#set`.
	  var setOptions = {add: true, remove: true, merge: true};
	  var addOptions = {add: true, remove: false};

	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {

	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function(options) {
	      return this.map(function(model){ return model.toJSON(options); });
	    },

	    // Proxy `Backbone.sync` by default.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Add a model, or list of models to the set.
	    add: function(models, options) {
	      return this.set(models, _.extend({merge: false}, options, addOptions));
	    },

	    // Remove a model, or a list of models from the set.
	    remove: function(models, options) {
	      var singular = !_.isArray(models);
	      models = singular ? [models] : _.clone(models);
	      options || (options = {});
	      var i, l, index, model;
	      for (i = 0, l = models.length; i < l; i++) {
	        model = models[i] = this.get(models[i]);
	        if (!model) continue;
	        delete this._byId[model.id];
	        delete this._byId[model.cid];
	        index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;
	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }
	        this._removeReference(model, options);
	      }
	      return singular ? models[0] : models;
	    },

	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function(models, options) {
	      options = _.defaults({}, options, setOptions);
	      if (options.parse) models = this.parse(models, options);
	      var singular = !_.isArray(models);
	      models = singular ? (models ? [models] : []) : _.clone(models);
	      var i, l, id, model, attrs, existing, sort;
	      var at = options.at;
	      var targetModel = this.model;
	      var sortable = this.comparator && (at == null) && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
	      var toAdd = [], toRemove = [], modelMap = {};
	      var add = options.add, merge = options.merge, remove = options.remove;
	      var order = !sortable && add && remove ? [] : false;

	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      for (i = 0, l = models.length; i < l; i++) {
	        attrs = models[i] || {};
	        if (attrs instanceof Model) {
	          id = model = attrs;
	        } else {
	          id = attrs[targetModel.prototype.idAttribute || 'id'];
	        }

	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        if (existing = this.get(id)) {
	          if (remove) modelMap[existing.cid] = true;
	          if (merge) {
	            attrs = attrs === model ? model.attributes : attrs;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
	          }
	          models[i] = existing;

	        // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(attrs, options);
	          if (!model) continue;
	          toAdd.push(model);
	          this._addReference(model, options);
	        }

	        // Do not add multiple models with the same `id`.
	        model = existing || model;
	        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
	        modelMap[model.id] = true;
	      }

	      // Remove nonexistent models if appropriate.
	      if (remove) {
	        for (i = 0, l = this.length; i < l; ++i) {
	          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this.remove(toRemove, options);
	      }

	      // See if sorting is needed, update `length` and splice in new models.
	      if (toAdd.length || (order && order.length)) {
	        if (sortable) sort = true;
	        this.length += toAdd.length;
	        if (at != null) {
	          for (i = 0, l = toAdd.length; i < l; i++) {
	            this.models.splice(at + i, 0, toAdd[i]);
	          }
	        } else {
	          if (order) this.models.length = 0;
	          var orderedModels = order || toAdd;
	          for (i = 0, l = orderedModels.length; i < l; i++) {
	            this.models.push(orderedModels[i]);
	          }
	        }
	      }

	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({silent: true});

	      // Unless silenced, it's time to fire all appropriate add/sort events.
	      if (!options.silent) {
	        for (i = 0, l = toAdd.length; i < l; i++) {
	          (model = toAdd[i]).trigger('add', model, this, options);
	        }
	        if (sort || (order && order.length)) this.trigger('sort', this, options);
	      }

	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },

	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function(models, options) {
	      options || (options = {});
	      for (var i = 0, l = this.models.length; i < l; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({silent: true}, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },

	    // Add a model to the end of the collection.
	    push: function(model, options) {
	      return this.add(model, _.extend({at: this.length}, options));
	    },

	    // Remove a model from the end of the collection.
	    pop: function(options) {
	      var model = this.at(this.length - 1);
	      this.remove(model, options);
	      return model;
	    },

	    // Add a model to the beginning of the collection.
	    unshift: function(model, options) {
	      return this.add(model, _.extend({at: 0}, options));
	    },

	    // Remove a model from the beginning of the collection.
	    shift: function(options) {
	      var model = this.at(0);
	      this.remove(model, options);
	      return model;
	    },

	    // Slice out a sub-array of models from the collection.
	    slice: function() {
	      return slice.apply(this.models, arguments);
	    },

	    // Get a model from the set by id.
	    get: function(obj) {
	      if (obj == null) return void 0;
	      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
	    },

	    // Get the model at the given index.
	    at: function(index) {
	      return this.models[index];
	    },

	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function(attrs, first) {
	      if (_.isEmpty(attrs)) return first ? void 0 : [];
	      return this[first ? 'find' : 'filter'](function(model) {
	        for (var key in attrs) {
	          if (attrs[key] !== model.get(key)) return false;
	        }
	        return true;
	      });
	    },

	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function(attrs) {
	      return this.where(attrs, true);
	    },

	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function(options) {
	      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});

	      // Run sort based on type of `comparator`.
	      if (_.isString(this.comparator) || this.comparator.length === 1) {
	        this.models = this.sortBy(this.comparator, this);
	      } else {
	        this.models.sort(_.bind(this.comparator, this));
	      }

	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },

	    // Pluck an attribute from each model in the collection.
	    pluck: function(attr) {
	      return _.invoke(this.models, 'get', attr);
	    },

	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function(options) {
	      options = options ? _.clone(options) : {};
	      if (options.parse === void 0) options.parse = true;
	      var success = options.success;
	      var collection = this;
	      options.success = function(resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success(collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function(model, options) {
	      options = options ? _.clone(options) : {};
	      if (!(model = this._prepareModel(model, options))) return false;
	      if (!options.wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function(model, resp) {
	        if (options.wait) collection.add(model, options);
	        if (success) success(model, resp, options);
	      };
	      model.save(null, options);
	      return model;
	    },

	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new collection with an identical list of models as this one.
	    clone: function() {
	      return new this.constructor(this.models);
	    },

	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function() {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	    },

	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function(attrs, options) {
	      if (attrs instanceof Model) return attrs;
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },

	    // Internal method to create a model's ties to a collection.
	    _addReference: function(model, options) {
	      this._byId[model.cid] = model;
	      if (model.id != null) this._byId[model.id] = model;
	      if (!model.collection) model.collection = this;
	      model.on('all', this._onModelEvent, this);
	    },

	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function(model, options) {
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },

	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function(event, model, collection, options) {
	      if ((event === 'add' || event === 'remove') && collection !== this) return;
	      if (event === 'destroy') this.remove(model, options);
	      if (model && event === 'change:' + model.idAttribute) {
	        delete this._byId[model.previous(model.idAttribute)];
	        if (model.id != null) this._byId[model.id] = model;
	      }
	      this.trigger.apply(this, arguments);
	    }

	  });

	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
	    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
	    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
	    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
	    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
	    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  _.each(methods, function(method) {
	    Collection.prototype[method] = function() {
	      var args = slice.call(arguments);
	      args.unshift(this.models);
	      return _[method].apply(_, args);
	    };
	  });

	  // Underscore methods that take a property name as an argument.
	  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

	  // Use attributes instead of properties.
	  _.each(attributeMethods, function(method) {
	    Collection.prototype[method] = function(value, context) {
	      var iterator = _.isFunction(value) ? value : function(model) {
	        return model.get(value);
	      };
	      return _[method](this.models, iterator, context);
	    };
	  });

	  // Backbone.View
	  // -------------

	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.

	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function(options) {
	    this.cid = _.uniqueId('view');
	    options || (options = {});
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	    this.delegateEvents();
	  };

	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	  // List of view options to be merged as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {

	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',

	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function(selector) {
	      return this.$el.find(selector);
	    },

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function() {
	      return this;
	    },

	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function() {
	      this.$el.remove();
	      this.stopListening();
	      return this;
	    },

	    // Change the view's element (`this.el` property), including event
	    // re-delegation.
	    setElement: function(element, delegate) {
	      if (this.$el) this.undelegateEvents();
	      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
	      this.el = this.$el[0];
	      if (delegate !== false) this.delegateEvents();
	      return this;
	    },

	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    // This only works for delegate-able events: not `focus`, `blur`, and
	    // not `change`, `submit`, and `reset` in Internet Explorer.
	    delegateEvents: function(events) {
	      if (!(events || (events = _.result(this, 'events')))) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[events[key]];
	        if (!method) continue;

	        var match = key.match(delegateEventSplitter);
	        var eventName = match[1], selector = match[2];
	        method = _.bind(method, this);
	        eventName += '.delegateEvents' + this.cid;
	        if (selector === '') {
	          this.$el.on(eventName, method);
	        } else {
	          this.$el.on(eventName, selector, method);
	        }
	      }
	      return this;
	    },

	    // Clears all callbacks previously bound to the view with `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function() {
	      this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },

	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
	        this.setElement($el, false);
	      } else {
	        this.setElement(_.result(this, 'el'), false);
	      }
	    }

	  });

	  // Backbone.sync
	  // -------------

	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function(method, model, options) {
	    var type = methodMap[method];

	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });

	    // Default JSON-request options.
	    var params = {type: type, dataType: 'json'};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }

	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }

	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? {model: params.data} : {};
	    }

	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function(xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }

	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }

	    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
	    // that still has ActiveX enabled by default, override jQuery to use that
	    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
	    if (params.type === 'PATCH' && noXhrPatch) {
	      params.xhr = function() {
	        return new ActiveXObject("Microsoft.XMLHTTP");
	      };
	    }

	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };

	  var noXhrPatch =
	    typeof window !== 'undefined' && !!window.ActiveXObject &&
	      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch':  'PATCH',
	    'delete': 'DELETE',
	    'read':   'GET'
	  };

	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function() {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };

	  // Backbone.Router
	  // ---------------

	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function(options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function(route, name, callback) {
	      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(route, function(fragment) {
	        var args = router._extractParameters(route, fragment);
	        router.execute(callback, args);
	        router.trigger.apply(router, ['route:' + name].concat(args));
	        router.trigger('route', name, args);
	        Backbone.history.trigger('route', router, name, args);
	      });
	      return this;
	    },

	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function(callback, args) {
	      if (callback) callback.apply(this, args);
	    },

	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },

	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route, routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },

	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(optionalParam, '(?:$1)?')
	                   .replace(namedParam, function(match, optional) {
	                     return optional ? match : '([^/?]+)';
	                   })
	                   .replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },

	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function(param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }

	  });

	  // Backbone.History
	  // ----------------

	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function() {
	    this.handlers = [];
	    _.bindAll(this, 'checkUrl');

	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };

	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;

	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;

	  // Cached regex for detecting MSIE.
	  var isExplorer = /msie [\w.]+/;

	  // Cached regex for removing a trailing slash.
	  var trailingSlash = /\/$/;

	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;

	  // Has the history handling already been started?
	  History.started = false;

	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {

	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,

	    // Are we at the app root?
	    atRoot: function() {
	      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
	    },

	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },

	    // Get the cross-browser normalized URL fragment, either from the URL,
	    // the hash, or the override.
	    getFragment: function(fragment, forcePushState) {
	      if (fragment == null) {
	        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
	          fragment = decodeURI(this.location.pathname + this.location.search);
	          var root = this.root.replace(trailingSlash, '');
	          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },

	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function(options) {
	      if (History.started) throw new Error("Backbone.history has already been started");
	      History.started = true;

	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options          = _.extend({root: '/'}, this.options, options);
	      this.root             = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._wantsPushState  = !!this.options.pushState;
	      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
	      var fragment          = this.getFragment();
	      var docMode           = document.documentMode;
	      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

	      if (oldIE && this._wantsHashChange) {
	        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
	        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
	        this.navigate(fragment);
	      }

	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._hasPushState) {
	        Backbone.$(window).on('popstate', this.checkUrl);
	      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
	        Backbone.$(window).on('hashchange', this.checkUrl);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }

	      // Determine if we need to change the base url, for a pushState link
	      // opened by a non-pushState browser.
	      this.fragment = fragment;
	      var loc = this.location;

	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {

	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          this.fragment = this.getFragment(null, true);
	          this.location.replace(this.root + '#' + this.fragment);
	          // Return immediately as browser will do redirect to new url
	          return true;

	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot() && loc.hash) {
	          this.fragment = this.getHash().replace(routeStripper, '');
	          this.history.replaceState({}, document.title, this.root + this.fragment);
	        }

	      }

	      if (!this.options.silent) return this.loadUrl();
	    },

	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },

	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },

	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();
	      if (current === this.fragment && this.iframe) {
	        current = this.getFragment(this.getHash(this.iframe));
	      }
	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },

	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragment) {
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.any(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },

	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = {trigger: !!options};

	      var url = this.root + (fragment = this.getFragment(fragment || ''));

	      // Strip the hash for matching.
	      fragment = fragment.replace(pathStripper, '');

	      if (this.fragment === fragment) return;
	      this.fragment = fragment;

	      // Don't include a trailing slash on the root.
	      if (fragment === '' && url !== '/') url = url.slice(0, -1);

	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._hasPushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if(!options.replace) this.iframe.document.open().close();
	          this._updateHash(this.iframe.location, fragment, options.replace);
	        }

	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },

	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }

	  });

	  // Create the default Backbone.history.
	  Backbone.history = new History;

	  // Helpers
	  // -------

	  // Helper function to correctly set up the prototype chain, for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function(protoProps, staticProps) {
	    var parent = this;
	    var child;

	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent's constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function(){ return parent.apply(this, arguments); };
	    }

	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);

	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function.
	    var Surrogate = function(){ this.constructor = child; };
	    Surrogate.prototype = parent.prototype;
	    child.prototype = new Surrogate;

	    // Add prototype properties (instance properties) to the subclass,
	    // if supplied.
	    if (protoProps) _.extend(child.prototype, protoProps);

	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;

	    return child;
	  };

	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function() {
	    throw new Error('A "url" property or function must be specified');
	  };

	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function(model, options) {
	    var error = options.error;
	    options.error = function(resp) {
	      if (error) error(model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };

	  return Backbone;

	}));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var Parse = __webpack_require__(5).Parse;

	/**
	 * Handlers for all app events
	 */

	var Handlers = {
	    getProjectEntity: function (id) {
	        var Project = __webpack_require__(16),
	            query = new Parse.Query(Project);
	        return query.get(id);
	    },

	    getProjectEntities: function () {
	        var Projects = __webpack_require__(17),
	            projects = new Projects();
	        return projects.fetch();
	    }
	};

	/**
	 * Mount the handlers to a reqres instance
	 * @param reqres
	 */

	module.exports = function (reqres) {
	    reqres.setHandlers({
	        'project:entity': Handlers.getProjectEntity,
	        'project:entities': Handlers.getProjectEntities
	    });
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var _ = __webpack_require__(11);

	/**
	 * Handlers for all global events
	 */

	var Handlers = {
	};

	module.exports = function (CommittedApp) {
	    var events = _.keys(Handlers);

	    var setEventHandler = function (event) {
	        CommittedApp.on(event, Handlers[event]);
	    };

	    _.each(events, setEventHandler);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1);


	CommittedApp.module('AuthApp', function (AuthApp, CommittedApp, Backbone, Marionette, $, _) {
	    AuthApp.Router = Marionette.AppRouter.extend({
	        appRoutes: {
	            'login': 'showLogin',
	            'signup': 'showSignup'
	        }
	    });

	    var API = {
	        showLogin: function () {
	            var ShowController = __webpack_require__(20);
	            ShowController.showLogin();
	        },

	        showSignup: function () {
	            console.log('showing signup ...');
	        }
	    };

	    AuthApp.addInitializer(function () {
	        var authRouter = new AuthApp.Router({
	            controller: API
	        });
	    });

	    CommittedApp.on('login:show', function () {
	        CommittedApp.navigate('login');
	        API.showLogin();
	    });

	    CommittedApp.on('signup:show', function () {
	        CommittedApp.navigate('signup');
	        API.showSignup();
	    });

	    module.exports = AuthApp.Router;
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1),
	    User = __webpack_require__(5).Parse.User;

	/**
	 * ProjectsApp router
	 */

	CommittedApp.module('ProjectsApp', function (ProjectsApp, CommittedApp, Backbone, Marionette, $, _) {
	    ProjectsApp.Router = Marionette.AppRouter.extend({
	        appRoutes: {
	            'projects': 'listProjects',
	            'projects/:id': 'showProject'
	        },

	        /**
	         * Middleware for the routes
	         */

	        before: {
	            'projects/:id': function () {
	                if(!User.current()) {
	                    console.log('You are not logged in ...');
	                    return false;
	                }
	            }
	        }
	    });

	    /**
	     * Route handlers
	     */

	    var API = {
	        listProjects: function () {
	            var ListController = __webpack_require__(21);
	            ListController.listProjects();
	        },
	        showProject: function (id) {
	            var ShowController = __webpack_require__(22);
	            ShowController.showProject(id);
	        }
	    };

	    /**
	     * Create a new instance of the Router before
	     * ProjectsApp starts
	     */

	    ProjectsApp.addInitializer(function () {
	        var projectsAppRouter = new ProjectsApp.Router({
	            controller: API
	        });
	    });

	    /**
	     * Application wide events related to ProjectsApp
	     */

	    CommittedApp.on('project:show', function (id) {
	        CommittedApp.navigate('projects/' + id);
	        API.showProject(id);
	    });

	    CommittedApp.on('projects:list', function () {
	        CommittedApp.navigate('projects');
	        API.listProjects();
	    });

	    module.exports = ProjectsApp.Router;
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	//     Underscore.js 1.4.4
	//     http://underscorejs.org
	//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `global` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Establish the object that gets returned to break out of a loop iteration.
	  var breaker = {};

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var push             = ArrayProto.push,
	      slice            = ArrayProto.slice,
	      concat           = ArrayProto.concat,
	      toString         = ObjProto.toString,
	      hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeForEach      = ArrayProto.forEach,
	    nativeMap          = ArrayProto.map,
	    nativeReduce       = ArrayProto.reduce,
	    nativeReduceRight  = ArrayProto.reduceRight,
	    nativeFilter       = ArrayProto.filter,
	    nativeEvery        = ArrayProto.every,
	    nativeSome         = ArrayProto.some,
	    nativeIndexOf      = ArrayProto.indexOf,
	    nativeLastIndexOf  = ArrayProto.lastIndexOf,
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind;

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object via a string identifier,
	  // for Closure Compiler "advanced" mode.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.4.4';

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles objects with the built-in `forEach`, arrays, and raw objects.
	  // Delegates to **ECMAScript 5**'s native `forEach` if available.
	  var each = _.each = _.forEach = function(obj, iterator, context) {
	    if (obj == null) return;
	    if (nativeForEach && obj.forEach === nativeForEach) {
	      obj.forEach(iterator, context);
	    } else if (obj.length === +obj.length) {
	      for (var i = 0, l = obj.length; i < l; i++) {
	        if (iterator.call(context, obj[i], i, obj) === breaker) return;
	      }
	    } else {
	      for (var key in obj) {
	        if (_.has(obj, key)) {
	          if (iterator.call(context, obj[key], key, obj) === breaker) return;
	        }
	      }
	    }
	  };

	  // Return the results of applying the iterator to each element.
	  // Delegates to **ECMAScript 5**'s native `map` if available.
	  _.map = _.collect = function(obj, iterator, context) {
	    var results = [];
	    if (obj == null) return results;
	    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
	    each(obj, function(value, index, list) {
	      results[results.length] = iterator.call(context, value, index, list);
	    });
	    return results;
	  };

	  var reduceError = 'Reduce of empty array with no initial value';

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
	  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
	    var initial = arguments.length > 2;
	    if (obj == null) obj = [];
	    if (nativeReduce && obj.reduce === nativeReduce) {
	      if (context) iterator = _.bind(iterator, context);
	      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
	    }
	    each(obj, function(value, index, list) {
	      if (!initial) {
	        memo = value;
	        initial = true;
	      } else {
	        memo = iterator.call(context, memo, value, index, list);
	      }
	    });
	    if (!initial) throw new TypeError(reduceError);
	    return memo;
	  };

	  // The right-associative version of reduce, also known as `foldr`.
	  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
	  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
	    var initial = arguments.length > 2;
	    if (obj == null) obj = [];
	    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
	      if (context) iterator = _.bind(iterator, context);
	      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
	    }
	    var length = obj.length;
	    if (length !== +length) {
	      var keys = _.keys(obj);
	      length = keys.length;
	    }
	    each(obj, function(value, index, list) {
	      index = keys ? keys[--length] : --length;
	      if (!initial) {
	        memo = obj[index];
	        initial = true;
	      } else {
	        memo = iterator.call(context, memo, obj[index], index, list);
	      }
	    });
	    if (!initial) throw new TypeError(reduceError);
	    return memo;
	  };

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, iterator, context) {
	    var result;
	    any(obj, function(value, index, list) {
	      if (iterator.call(context, value, index, list)) {
	        result = value;
	        return true;
	      }
	    });
	    return result;
	  };

	  // Return all the elements that pass a truth test.
	  // Delegates to **ECMAScript 5**'s native `filter` if available.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, iterator, context) {
	    var results = [];
	    if (obj == null) return results;
	    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
	    each(obj, function(value, index, list) {
	      if (iterator.call(context, value, index, list)) results[results.length] = value;
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, iterator, context) {
	    return _.filter(obj, function(value, index, list) {
	      return !iterator.call(context, value, index, list);
	    }, context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Delegates to **ECMAScript 5**'s native `every` if available.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, iterator, context) {
	    iterator || (iterator = _.identity);
	    var result = true;
	    if (obj == null) return result;
	    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
	    each(obj, function(value, index, list) {
	      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
	    });
	    return !!result;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Delegates to **ECMAScript 5**'s native `some` if available.
	  // Aliased as `any`.
	  var any = _.some = _.any = function(obj, iterator, context) {
	    iterator || (iterator = _.identity);
	    var result = false;
	    if (obj == null) return result;
	    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
	    each(obj, function(value, index, list) {
	      if (result || (result = iterator.call(context, value, index, list))) return breaker;
	    });
	    return !!result;
	  };

	  // Determine if the array or object contains a given value (using `===`).
	  // Aliased as `include`.
	  _.contains = _.include = function(obj, target) {
	    if (obj == null) return false;
	    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
	    return any(obj, function(value) {
	      return value === target;
	    });
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      return (isFunc ? method : value[method]).apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, function(value){ return value[key]; });
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs, first) {
	    if (_.isEmpty(attrs)) return first ? null : [];
	    return _[first ? 'find' : 'filter'](obj, function(value) {
	      for (var key in attrs) {
	        if (attrs[key] !== value[key]) return false;
	      }
	      return true;
	    });
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.where(obj, attrs, true);
	  };

	  // Return the maximum element or (element-based computation).
	  // Can't optimize arrays of integers longer than 65,535 elements.
	  // See: https://bugs.webkit.org/show_bug.cgi?id=80797
	  _.max = function(obj, iterator, context) {
	    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
	      return Math.max.apply(Math, obj);
	    }
	    if (!iterator && _.isEmpty(obj)) return -Infinity;
	    var result = {computed : -Infinity, value: -Infinity};
	    each(obj, function(value, index, list) {
	      var computed = iterator ? iterator.call(context, value, index, list) : value;
	      computed >= result.computed && (result = {value : value, computed : computed});
	    });
	    return result.value;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iterator, context) {
	    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
	      return Math.min.apply(Math, obj);
	    }
	    if (!iterator && _.isEmpty(obj)) return Infinity;
	    var result = {computed : Infinity, value: Infinity};
	    each(obj, function(value, index, list) {
	      var computed = iterator ? iterator.call(context, value, index, list) : value;
	      computed < result.computed && (result = {value : value, computed : computed});
	    });
	    return result.value;
	  };

	  // Shuffle an array.
	  _.shuffle = function(obj) {
	    var rand;
	    var index = 0;
	    var shuffled = [];
	    each(obj, function(value) {
	      rand = _.random(index++);
	      shuffled[index - 1] = shuffled[rand];
	      shuffled[rand] = value;
	    });
	    return shuffled;
	  };

	  // An internal function to generate lookup iterators.
	  var lookupIterator = function(value) {
	    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
	  };

	  // Sort the object's values by a criterion produced by an iterator.
	  _.sortBy = function(obj, value, context) {
	    var iterator = lookupIterator(value);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value : value,
	        index : index,
	        criteria : iterator.call(context, value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index < right.index ? -1 : 1;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(obj, value, context, behavior) {
	    var result = {};
	    var iterator = lookupIterator(value || _.identity);
	    each(obj, function(value, index) {
	      var key = iterator.call(context, value, index, obj);
	      behavior(result, key, value);
	    });
	    return result;
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = function(obj, value, context) {
	    return group(obj, value, context, function(result, key, value) {
	      (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
	    });
	  };

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = function(obj, value, context) {
	    return group(obj, value, context, function(result, key) {
	      if (!_.has(result, key)) result[key] = 0;
	      result[key]++;
	    });
	  };

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iterator, context) {
	    iterator = iterator == null ? _.identity : lookupIterator(iterator);
	    var value = iterator.call(context, obj);
	    var low = 0, high = array.length;
	    while (low < high) {
	      var mid = (low + high) >>> 1;
	      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
	    }
	    return low;
	  };

	  // Safely convert anything iterable into a real, live array.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (obj.length === +obj.length) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N. The **guard** check allows it to work with
	  // `_.map`.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array. The **guard** check allows it to work with `_.map`.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if ((n != null) && !guard) {
	      return slice.call(array, Math.max(array.length - n, 0));
	    } else {
	      return array[array.length - 1];
	    }
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array. The **guard**
	  // check allows it to work with `_.map`.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, (n == null) || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, output) {
	    each(input, function(value) {
	      if (_.isArray(value)) {
	        shallow ? push.apply(output, value) : flatten(value, shallow, output);
	      } else {
	        output.push(value);
	      }
	    });
	    return output;
	  };

	  // Return a completely flattened version of an array.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, []);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iterator, context) {
	    if (_.isFunction(isSorted)) {
	      context = iterator;
	      iterator = isSorted;
	      isSorted = false;
	    }
	    var initial = iterator ? _.map(array, iterator, context) : array;
	    var results = [];
	    var seen = [];
	    each(initial, function(value, index) {
	      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
	        seen.push(value);
	        results.push(array[index]);
	      }
	    });
	    return results;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(concat.apply(ArrayProto, arguments));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var rest = slice.call(arguments, 1);
	    return _.filter(_.uniq(array), function(item) {
	      return _.every(rest, function(other) {
	        return _.indexOf(other, item) >= 0;
	      });
	    });
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
	    return _.filter(array, function(value){ return !_.contains(rest, value); });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    var args = slice.call(arguments);
	    var length = _.max(_.pluck(args, 'length'));
	    var results = new Array(length);
	    for (var i = 0; i < length; i++) {
	      results[i] = _.pluck(args, "" + i);
	    }
	    return results;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    if (list == null) return {};
	    var result = {};
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
	  // we need this function. Return the position of the first occurrence of an
	  // item in an array, or -1 if the item is not included in the array.
	  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = function(array, item, isSorted) {
	    if (array == null) return -1;
	    var i = 0, l = array.length;
	    if (isSorted) {
	      if (typeof isSorted == 'number') {
	        i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);
	      } else {
	        i = _.sortedIndex(array, item);
	        return array[i] === item ? i : -1;
	      }
	    }
	    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
	    for (; i < l; i++) if (array[i] === item) return i;
	    return -1;
	  };

	  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
	  _.lastIndexOf = function(array, item, from) {
	    if (array == null) return -1;
	    var hasIndex = from != null;
	    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
	      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
	    }
	    var i = (hasIndex ? from : array.length);
	    while (i--) if (array[i] === item) return i;
	    return -1;
	  };

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (arguments.length <= 1) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = arguments[2] || 1;

	    var len = Math.max(Math.ceil((stop - start) / step), 0);
	    var idx = 0;
	    var range = new Array(len);

	    while(idx < len) {
	      range[idx++] = start;
	      start += step;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    var args = slice.call(arguments, 2);
	    return function() {
	      return func.apply(context, args.concat(slice.call(arguments)));
	    };
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context.
	  _.partial = function(func) {
	    var args = slice.call(arguments, 1);
	    return function() {
	      return func.apply(this, args.concat(slice.call(arguments)));
	    };
	  };

	  // Bind all of an object's methods to that object. Useful for ensuring that
	  // all callbacks defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var funcs = slice.call(arguments, 1);
	    if (funcs.length === 0) funcs = _.functions(obj);
	    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memo = {};
	    hasher || (hasher = _.identity);
	    return function() {
	      var key = hasher.apply(this, arguments);
	      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
	    };
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){ return func.apply(null, args); }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = function(func) {
	    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
	  };

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time.
	  _.throttle = function(func, wait) {
	    var context, args, timeout, result;
	    var previous = 0;
	    var later = function() {
	      previous = new Date;
	      timeout = null;
	      result = func.apply(context, args);
	    };
	    return function() {
	      var now = new Date;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0) {
	        clearTimeout(timeout);
	        timeout = null;
	        previous = now;
	        result = func.apply(context, args);
	      } else if (!timeout) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, result;
	    return function() {
	      var context = this, args = arguments;
	      var later = function() {
	        timeout = null;
	        if (!immediate) result = func.apply(context, args);
	      };
	      var callNow = immediate && !timeout;
	      clearTimeout(timeout);
	      timeout = setTimeout(later, wait);
	      if (callNow) result = func.apply(context, args);
	      return result;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = function(func) {
	    var ran = false, memo;
	    return function() {
	      if (ran) return memo;
	      ran = true;
	      memo = func.apply(this, arguments);
	      func = null;
	      return memo;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return function() {
	      var args = [func];
	      push.apply(args, arguments);
	      return wrapper.apply(this, args);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var funcs = arguments;
	    return function() {
	      var args = arguments;
	      for (var i = funcs.length - 1; i >= 0; i--) {
	        args = [funcs[i].apply(this, args)];
	      }
	      return args[0];
	    };
	  };

	  // Returns a function that will only be executed after being called N times.
	  _.after = function(times, func) {
	    if (times <= 0) return func();
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Object Functions
	  // ----------------

	  // Retrieve the names of an object's properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = nativeKeys || function(obj) {
	    if (obj !== Object(obj)) throw new TypeError('Invalid object');
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var values = [];
	    for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
	    return values;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var pairs = [];
	    for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = function(obj) {
	    each(slice.call(arguments, 1), function(source) {
	      if (source) {
	        for (var prop in source) {
	          obj[prop] = source[prop];
	        }
	      }
	    });
	    return obj;
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(obj) {
	    var copy = {};
	    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
	    each(keys, function(key) {
	      if (key in obj) copy[key] = obj[key];
	    });
	    return copy;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj) {
	    var copy = {};
	    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
	    for (var key in obj) {
	      if (!_.contains(keys, key)) copy[key] = obj[key];
	    }
	    return copy;
	  };

	  // Fill in a given object with default properties.
	  _.defaults = function(obj) {
	    each(slice.call(arguments, 1), function(source) {
	      if (source) {
	        for (var prop in source) {
	          if (obj[prop] == null) obj[prop] = source[prop];
	        }
	      }
	    });
	    return obj;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
	    if (a === b) return a !== 0 || 1 / a == 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className != toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, dates, and booleans are compared by value.
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return a == String(b);
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
	        // other numeric values.
	        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a == +b;
	      // RegExps are compared by their source patterns and flags.
	      case '[object RegExp]':
	        return a.source == b.source &&
	               a.global == b.global &&
	               a.multiline == b.multiline &&
	               a.ignoreCase == b.ignoreCase;
	    }
	    if (typeof a != 'object' || typeof b != 'object') return false;
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] == a) return bStack[length] == b;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    var size = 0, result = true;
	    // Recursively compare objects and arrays.
	    if (className == '[object Array]') {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      size = a.length;
	      result = size == b.length;
	      if (result) {
	        // Deep compare the contents, ignoring non-numeric properties.
	        while (size--) {
	          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
	        }
	      }
	    } else {
	      // Objects with different constructors are not equivalent, but `Object`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
	                               _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
	        return false;
	      }
	      // Deep compare objects.
	      for (var key in a) {
	        if (_.has(a, key)) {
	          // Count the expected number of properties.
	          size++;
	          // Deep compare each member.
	          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
	        }
	      }
	      // Ensure that both objects contain the same number of properties.
	      if (result) {
	        for (key in b) {
	          if (_.has(b, key) && !(size--)) break;
	        }
	        result = !size;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return result;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b, [], []);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
	    for (var key in obj) if (_.has(obj, key)) return false;
	    return true;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) == '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    return obj === Object(obj);
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
	  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) == '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return !!(obj && _.has(obj, 'callee'));
	    };
	  }

	  // Optimize `isFunction` if appropriate.
	  if (true) {
	    _.isFunction = function(obj) {
	      return typeof obj === 'function';
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj != +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iterators.
	  _.identity = function(value) {
	    return value;
	  };

	  // Run a function **n** times.
	  _.times = function(n, iterator, context) {
	    var accum = Array(n);
	    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // List of HTML entities for escaping.
	  var entityMap = {
	    escape: {
	      '&': '&amp;',
	      '<': '&lt;',
	      '>': '&gt;',
	      '"': '&quot;',
	      "'": '&#x27;',
	      '/': '&#x2F;'
	    }
	  };
	  entityMap.unescape = _.invert(entityMap.escape);

	  // Regexes containing the keys and values listed immediately above.
	  var entityRegexes = {
	    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
	    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
	  };

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  _.each(['escape', 'unescape'], function(method) {
	    _[method] = function(string) {
	      if (string == null) return '';
	      return ('' + string).replace(entityRegexes[method], function(match) {
	        return entityMap[method][match];
	      });
	    };
	  });

	  // If the value of the named property is a function then invoke it;
	  // otherwise, return it.
	  _.result = function(object, property) {
	    if (object == null) return null;
	    var value = object[property];
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    each(_.functions(obj), function(name){
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result.call(this, func.apply(_, args));
	      };
	    });
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\t':     't',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  _.template = function(text, data, settings) {
	    var render;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = new RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset)
	        .replace(escaper, function(match) { return '\\' + escapes[match]; });

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      }
	      if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      }
	      if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	      index = offset + match.length;
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + "return __p;\n";

	    try {
	      render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    if (data) return render(data, _);
	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled function source as a convenience for precompilation.
	    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function, which will delegate to the wrapper.
	  _.chain = function(obj) {
	    return _(obj).chain();
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(obj) {
	    return this._chain ? _(obj).chain() : obj;
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
	      return result.call(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result.call(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  _.extend(_.prototype, {

	    // Start chaining a wrapped Underscore object.
	    chain: function() {
	      this._chain = true;
	      return this;
	    },

	    // Extracts the result from a wrapped and chained object.
	    value: function() {
	      return this._wrapped;
	    }

	  });

	}).call(this);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// MarionetteJS (Backbone.Marionette)
	// ----------------------------------
	// v1.6.4
	//
	// Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
	// Distributed under MIT license
	//
	// http://marionettejs.com



	/*!
	 * Includes BabySitter
	 * https://github.com/marionettejs/backbone.babysitter/
	 *
	 * Includes Wreqr
	 * https://github.com/marionettejs/backbone.wreqr/
	 */

	(function (root, factory) {
	  if (true) {

	    var underscore = __webpack_require__(11);
	    var backbone = __webpack_require__(6);
	    var wreqr = __webpack_require__(27);
	    var babysitter = __webpack_require__(28);

	    module.exports = factory(underscore, backbone, wreqr, babysitter);

	  } else if (typeof define === 'function' && define.amd) {

	    define(['underscore', 'backbone', 'backbone.wreqr', 'backbone.babysitter'], factory);

	  }
	}(this, function (_, Backbone) {

	  var Marionette = (function(global, Backbone, _){
	  "use strict";

	  // Define and export the Marionette namespace
	  var Marionette = {};
	  Backbone.Marionette = Marionette;

	  // Get the DOM manipulator for later use
	  Marionette.$ = Backbone.$;

	// Helpers
	// -------

	// For slicing `arguments` in functions
	var slice = Array.prototype.slice;

	function throwError(message, name) {
	  var error = new Error(message);
	  error.name = name || 'Error';
	  throw error;
	}

	// Marionette.extend
	// -----------------

	// Borrow the Backbone `extend` method so we can use it as needed
	Marionette.extend = Backbone.Model.extend;

	// Marionette.getOption
	// --------------------

	// Retrieve an object, function or other value from a target
	// object or its `options`, with `options` taking precedence.
	Marionette.getOption = function(target, optionName){
	  if (!target || !optionName){ return; }
	  var value;

	  if (target.options && (optionName in target.options) && (target.options[optionName] !== undefined)){
	    value = target.options[optionName];
	  } else {
	    value = target[optionName];
	  }

	  return value;
	};

	// Marionette.normalizeMethods
	// ----------------------

	// Pass in a mapping of events => functions or function names
	// and return a mapping of events => functions
	Marionette.normalizeMethods = function(hash) {
	  var normalizedHash = {}, method;
	  _.each(hash, function(fn, name) {
	    method = fn;
	    if (!_.isFunction(method)) {
	      method = this[method];
	    }
	    if (!method) {
	      return;
	    }
	    normalizedHash[name] = method;
	  }, this);
	  return normalizedHash;
	};

	// Trigger an event and/or a corresponding method name. Examples:
	//
	// `this.triggerMethod("foo")` will trigger the "foo" event and
	// call the "onFoo" method.
	//
	// `this.triggerMethod("foo:bar")` will trigger the "foo:bar" event and
	// call the "onFooBar" method.
	Marionette.triggerMethod = (function(){

	  // split the event name on the ":"
	  var splitter = /(^|:)(\w)/gi;

	  // take the event section ("section1:section2:section3")
	  // and turn it in to uppercase name
	  function getEventName(match, prefix, eventName) {
	    return eventName.toUpperCase();
	  }

	  // actual triggerMethod implementation
	  var triggerMethod = function(event) {
	    // get the method name from the event name
	    var methodName = 'on' + event.replace(splitter, getEventName);
	    var method = this[methodName];

	    // trigger the event, if a trigger method exists
	    if(_.isFunction(this.trigger)) {
	      this.trigger.apply(this, arguments);
	    }

	    // call the onMethodName if it exists
	    if (_.isFunction(method)) {
	      // pass all arguments, except the event name
	      return method.apply(this, _.tail(arguments));
	    }
	  };

	  return triggerMethod;
	})();

	// DOMRefresh
	// ----------
	//
	// Monitor a view's state, and after it has been rendered and shown
	// in the DOM, trigger a "dom:refresh" event every time it is
	// re-rendered.

	Marionette.MonitorDOMRefresh = (function(documentElement){
	  // track when the view has been shown in the DOM,
	  // using a Marionette.Region (or by other means of triggering "show")
	  function handleShow(view){
	    view._isShown = true;
	    triggerDOMRefresh(view);
	  }

	  // track when the view has been rendered
	  function handleRender(view){
	    view._isRendered = true;
	    triggerDOMRefresh(view);
	  }

	  // Trigger the "dom:refresh" event and corresponding "onDomRefresh" method
	  function triggerDOMRefresh(view){
	    if (view._isShown && view._isRendered && isInDOM(view)){
	      if (_.isFunction(view.triggerMethod)){
	        view.triggerMethod("dom:refresh");
	      }
	    }
	  }

	  function isInDOM(view) {
	    return documentElement.contains(view.el);
	  }

	  // Export public API
	  return function(view){
	    view.listenTo(view, "show", function(){
	      handleShow(view);
	    });

	    view.listenTo(view, "render", function(){
	      handleRender(view);
	    });
	  };
	})(document.documentElement);


	// Marionette.bindEntityEvents & unbindEntityEvents
	// ---------------------------
	//
	// These methods are used to bind/unbind a backbone "entity" (collection/model)
	// to methods on a target object.
	//
	// The first parameter, `target`, must have a `listenTo` method from the
	// EventBinder object.
	//
	// The second parameter is the entity (Backbone.Model or Backbone.Collection)
	// to bind the events from.
	//
	// The third parameter is a hash of { "event:name": "eventHandler" }
	// configuration. Multiple handlers can be separated by a space. A
	// function can be supplied instead of a string handler name.

	(function(Marionette){
	  "use strict";

	  // Bind the event to handlers specified as a string of
	  // handler names on the target object
	  function bindFromStrings(target, entity, evt, methods){
	    var methodNames = methods.split(/\s+/);

	    _.each(methodNames,function(methodName) {

	      var method = target[methodName];
	      if(!method) {
	        throwError("Method '"+ methodName +"' was configured as an event handler, but does not exist.");
	      }

	      target.listenTo(entity, evt, method);
	    });
	  }

	  // Bind the event to a supplied callback function
	  function bindToFunction(target, entity, evt, method){
	      target.listenTo(entity, evt, method);
	  }

	  // Bind the event to handlers specified as a string of
	  // handler names on the target object
	  function unbindFromStrings(target, entity, evt, methods){
	    var methodNames = methods.split(/\s+/);

	    _.each(methodNames,function(methodName) {
	      var method = target[methodName];
	      target.stopListening(entity, evt, method);
	    });
	  }

	  // Bind the event to a supplied callback function
	  function unbindToFunction(target, entity, evt, method){
	      target.stopListening(entity, evt, method);
	  }


	  // generic looping function
	  function iterateEvents(target, entity, bindings, functionCallback, stringCallback){
	    if (!entity || !bindings) { return; }

	    // allow the bindings to be a function
	    if (_.isFunction(bindings)){
	      bindings = bindings.call(target);
	    }

	    // iterate the bindings and bind them
	    _.each(bindings, function(methods, evt){

	      // allow for a function as the handler,
	      // or a list of event names as a string
	      if (_.isFunction(methods)){
	        functionCallback(target, entity, evt, methods);
	      } else {
	        stringCallback(target, entity, evt, methods);
	      }

	    });
	  }

	  // Export Public API
	  Marionette.bindEntityEvents = function(target, entity, bindings){
	    iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings);
	  };

	  Marionette.unbindEntityEvents = function(target, entity, bindings){
	    iterateEvents(target, entity, bindings, unbindToFunction, unbindFromStrings);
	  };

	})(Marionette);


	// Callbacks
	// ---------

	// A simple way of managing a collection of callbacks
	// and executing them at a later point in time, using jQuery's
	// `Deferred` object.
	Marionette.Callbacks = function(){
	  this._deferred = Marionette.$.Deferred();
	  this._callbacks = [];
	};

	_.extend(Marionette.Callbacks.prototype, {

	  // Add a callback to be executed. Callbacks added here are
	  // guaranteed to execute, even if they are added after the
	  // `run` method is called.
	  add: function(callback, contextOverride){
	    this._callbacks.push({cb: callback, ctx: contextOverride});

	    this._deferred.done(function(context, options){
	      if (contextOverride){ context = contextOverride; }
	      callback.call(context, options);
	    });
	  },

	  // Run all registered callbacks with the context specified.
	  // Additional callbacks can be added after this has been run
	  // and they will still be executed.
	  run: function(options, context){
	    this._deferred.resolve(context, options);
	  },

	  // Resets the list of callbacks to be run, allowing the same list
	  // to be run multiple times - whenever the `run` method is called.
	  reset: function(){
	    var callbacks = this._callbacks;
	    this._deferred = Marionette.$.Deferred();
	    this._callbacks = [];

	    _.each(callbacks, function(cb){
	      this.add(cb.cb, cb.ctx);
	    }, this);
	  }
	});


	// Marionette Controller
	// ---------------------
	//
	// A multi-purpose object to use as a controller for
	// modules and routers, and as a mediator for workflow
	// and coordination of other objects, views, and more.
	Marionette.Controller = function(options){
	  this.triggerMethod = Marionette.triggerMethod;
	  this.options = options || {};

	  if (_.isFunction(this.initialize)){
	    this.initialize(this.options);
	  }
	};

	Marionette.Controller.extend = Marionette.extend;

	// Controller Methods
	// --------------

	// Ensure it can trigger events with Backbone.Events
	_.extend(Marionette.Controller.prototype, Backbone.Events, {
	  close: function(){
	    this.stopListening();
	    this.triggerMethod("close");
	    this.unbind();
	  }
	});

	// Region
	// ------
	//
	// Manage the visual regions of your composite application. See
	// http://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/

	Marionette.Region = function(options){
	  this.options = options || {};
	  this.el = Marionette.getOption(this, "el");

	  if (!this.el){
	    throwError("An 'el' must be specified for a region.", "NoElError");
	  }

	  if (this.initialize){
	    var args = Array.prototype.slice.apply(arguments);
	    this.initialize.apply(this, args);
	  }
	};


	// Region Type methods
	// -------------------

	_.extend(Marionette.Region, {

	  // Build an instance of a region by passing in a configuration object
	  // and a default region type to use if none is specified in the config.
	  //
	  // The config object should either be a string as a jQuery DOM selector,
	  // a Region type directly, or an object literal that specifies both
	  // a selector and regionType:
	  //
	  // ```js
	  // {
	  //   selector: "#foo",
	  //   regionType: MyCustomRegion
	  // }
	  // ```
	  //
	  buildRegion: function(regionConfig, defaultRegionType){
	    var regionIsString = _.isString(regionConfig);
	    var regionSelectorIsString = _.isString(regionConfig.selector);
	    var regionTypeIsUndefined = _.isUndefined(regionConfig.regionType);
	    var regionIsType = _.isFunction(regionConfig);

	    if (!regionIsType && !regionIsString && !regionSelectorIsString) {
	      throwError("Region must be specified as a Region type, a selector string or an object with selector property");
	    }

	    var selector, RegionType;

	    // get the selector for the region

	    if (regionIsString) {
	      selector = regionConfig;
	    }

	    if (regionConfig.selector) {
	      selector = regionConfig.selector;
	      delete regionConfig.selector;
	    }

	    // get the type for the region

	    if (regionIsType){
	      RegionType = regionConfig;
	    }

	    if (!regionIsType && regionTypeIsUndefined) {
	      RegionType = defaultRegionType;
	    }

	    if (regionConfig.regionType) {
	      RegionType = regionConfig.regionType;
	      delete regionConfig.regionType;
	    }

	    if (regionIsString || regionIsType) {
	      regionConfig = {};
	    }

	    regionConfig.el = selector;

	    // build the region instance
	    var region = new RegionType(regionConfig);

	    // override the `getEl` function if we have a parentEl
	    // this must be overridden to ensure the selector is found
	    // on the first use of the region. if we try to assign the
	    // region's `el` to `parentEl.find(selector)` in the object
	    // literal to build the region, the element will not be
	    // guaranteed to be in the DOM already, and will cause problems
	    if (regionConfig.parentEl){
	      region.getEl = function(selector) {
	        var parentEl = regionConfig.parentEl;
	        if (_.isFunction(parentEl)){
	          parentEl = parentEl();
	        }
	        return parentEl.find(selector);
	      };
	    }

	    return region;
	  }

	});

	// Region Instance Methods
	// -----------------------

	_.extend(Marionette.Region.prototype, Backbone.Events, {

	  // Displays a backbone view instance inside of the region.
	  // Handles calling the `render` method for you. Reads content
	  // directly from the `el` attribute. Also calls an optional
	  // `onShow` and `close` method on your view, just after showing
	  // or just before closing the view, respectively.
	  show: function(view){
	    this.ensureEl();

	    var isViewClosed = view.isClosed || _.isUndefined(view.$el);
	    var isDifferentView = view !== this.currentView;

	    if (isDifferentView) {
	      this.close();
	    }

	    view.render();

	    if (isDifferentView || isViewClosed) {
	      this.open(view);
	    }

	    this.currentView = view;

	    Marionette.triggerMethod.call(this, "show", view);
	    Marionette.triggerMethod.call(view, "show");
	  },

	  ensureEl: function(){
	    if (!this.$el || this.$el.length === 0){
	      this.$el = this.getEl(this.el);
	    }
	  },

	  // Override this method to change how the region finds the
	  // DOM element that it manages. Return a jQuery selector object.
	  getEl: function(selector){
	    return Marionette.$(selector);
	  },

	  // Override this method to change how the new view is
	  // appended to the `$el` that the region is managing
	  open: function(view){
	    this.$el.empty().append(view.el);
	  },

	  // Close the current view, if there is one. If there is no
	  // current view, it does nothing and returns immediately.
	  close: function(){
	    var view = this.currentView;
	    if (!view || view.isClosed){ return; }

	    // call 'close' or 'remove', depending on which is found
	    if (view.close) { view.close(); }
	    else if (view.remove) { view.remove(); }

	    Marionette.triggerMethod.call(this, "close", view);

	    delete this.currentView;
	  },

	  // Attach an existing view to the region. This
	  // will not call `render` or `onShow` for the new view,
	  // and will not replace the current HTML for the `el`
	  // of the region.
	  attachView: function(view){
	    this.currentView = view;
	  },

	  // Reset the region by closing any existing view and
	  // clearing out the cached `$el`. The next time a view
	  // is shown via this region, the region will re-query the
	  // DOM for the region's `el`.
	  reset: function(){
	    this.close();
	    delete this.$el;
	  }
	});

	// Copy the `extend` function used by Backbone's classes
	Marionette.Region.extend = Marionette.extend;

	// Marionette.RegionManager
	// ------------------------
	//
	// Manage one or more related `Marionette.Region` objects.
	Marionette.RegionManager = (function(Marionette){

	  var RegionManager = Marionette.Controller.extend({
	    constructor: function(options){
	      this._regions = {};
	      Marionette.Controller.prototype.constructor.call(this, options);
	    },

	    // Add multiple regions using an object literal, where
	    // each key becomes the region name, and each value is
	    // the region definition.
	    addRegions: function(regionDefinitions, defaults){
	      var regions = {};

	      _.each(regionDefinitions, function(definition, name){
	        if (_.isString(definition)){
	          definition = { selector: definition };
	        }

	        if (definition.selector){
	          definition = _.defaults({}, definition, defaults);
	        }

	        var region = this.addRegion(name, definition);
	        regions[name] = region;
	      }, this);

	      return regions;
	    },

	    // Add an individual region to the region manager,
	    // and return the region instance
	    addRegion: function(name, definition){
	      var region;

	      var isObject = _.isObject(definition);
	      var isString = _.isString(definition);
	      var hasSelector = !!definition.selector;

	      if (isString || (isObject && hasSelector)){
	        region = Marionette.Region.buildRegion(definition, Marionette.Region);
	      } else if (_.isFunction(definition)){
	        region = Marionette.Region.buildRegion(definition, Marionette.Region);
	      } else {
	        region = definition;
	      }

	      this._store(name, region);
	      this.triggerMethod("region:add", name, region);
	      return region;
	    },

	    // Get a region by name
	    get: function(name){
	      return this._regions[name];
	    },

	    // Remove a region by name
	    removeRegion: function(name){
	      var region = this._regions[name];
	      this._remove(name, region);
	    },

	    // Close all regions in the region manager, and
	    // remove them
	    removeRegions: function(){
	      _.each(this._regions, function(region, name){
	        this._remove(name, region);
	      }, this);
	    },

	    // Close all regions in the region manager, but
	    // leave them attached
	    closeRegions: function(){
	      _.each(this._regions, function(region, name){
	        region.close();
	      }, this);
	    },

	    // Close all regions and shut down the region
	    // manager entirely
	    close: function(){
	      this.removeRegions();
	      Marionette.Controller.prototype.close.apply(this, arguments);
	    },

	    // internal method to store regions
	    _store: function(name, region){
	      this._regions[name] = region;
	      this._setLength();
	    },

	    // internal method to remove a region
	    _remove: function(name, region){
	      region.close();
	      delete this._regions[name];
	      this._setLength();
	      this.triggerMethod("region:remove", name, region);
	    },

	    // set the number of regions current held
	    _setLength: function(){
	      this.length = _.size(this._regions);
	    }

	  });

	  // Borrowing this code from Backbone.Collection:
	  // http://backbonejs.org/docs/backbone.html#section-106
	  //
	  // Mix in methods from Underscore, for iteration, and other
	  // collection related features.
	  var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
	    'select', 'reject', 'every', 'all', 'some', 'any', 'include',
	    'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
	    'last', 'without', 'isEmpty', 'pluck'];

	  _.each(methods, function(method) {
	    RegionManager.prototype[method] = function() {
	      var regions = _.values(this._regions);
	      var args = [regions].concat(_.toArray(arguments));
	      return _[method].apply(_, args);
	    };
	  });

	  return RegionManager;
	})(Marionette);


	// Template Cache
	// --------------

	// Manage templates stored in `<script>` blocks,
	// caching them for faster access.
	Marionette.TemplateCache = function(templateId){
	  this.templateId = templateId;
	};

	// TemplateCache object-level methods. Manage the template
	// caches from these method calls instead of creating
	// your own TemplateCache instances
	_.extend(Marionette.TemplateCache, {
	  templateCaches: {},

	  // Get the specified template by id. Either
	  // retrieves the cached version, or loads it
	  // from the DOM.
	  get: function(templateId){
	    var cachedTemplate = this.templateCaches[templateId];

	    if (!cachedTemplate){
	      cachedTemplate = new Marionette.TemplateCache(templateId);
	      this.templateCaches[templateId] = cachedTemplate;
	    }

	    return cachedTemplate.load();
	  },

	  // Clear templates from the cache. If no arguments
	  // are specified, clears all templates:
	  // `clear()`
	  //
	  // If arguments are specified, clears each of the
	  // specified templates from the cache:
	  // `clear("#t1", "#t2", "...")`
	  clear: function(){
	    var i;
	    var args = slice.call(arguments);
	    var length = args.length;

	    if (length > 0){
	      for(i=0; i<length; i++){
	        delete this.templateCaches[args[i]];
	      }
	    } else {
	      this.templateCaches = {};
	    }
	  }
	});

	// TemplateCache instance methods, allowing each
	// template cache object to manage its own state
	// and know whether or not it has been loaded
	_.extend(Marionette.TemplateCache.prototype, {

	  // Internal method to load the template
	  load: function(){
	    // Guard clause to prevent loading this template more than once
	    if (this.compiledTemplate){
	      return this.compiledTemplate;
	    }

	    // Load the template and compile it
	    var template = this.loadTemplate(this.templateId);
	    this.compiledTemplate = this.compileTemplate(template);

	    return this.compiledTemplate;
	  },

	  // Load a template from the DOM, by default. Override
	  // this method to provide your own template retrieval
	  // For asynchronous loading with AMD/RequireJS, consider
	  // using a template-loader plugin as described here:
	  // https://github.com/marionettejs/backbone.marionette/wiki/Using-marionette-with-requirejs
	  loadTemplate: function(templateId){
	    var template = Marionette.$(templateId).html();

	    if (!template || template.length === 0){
	      throwError("Could not find template: '" + templateId + "'", "NoTemplateError");
	    }

	    return template;
	  },

	  // Pre-compile the template before caching it. Override
	  // this method if you do not need to pre-compile a template
	  // (JST / RequireJS for example) or if you want to change
	  // the template engine used (Handebars, etc).
	  compileTemplate: function(rawTemplate){
	    return _.template(rawTemplate);
	  }
	});


	// Renderer
	// --------

	// Render a template with data by passing in the template
	// selector and the data to render.
	Marionette.Renderer = {

	  // Render a template with data. The `template` parameter is
	  // passed to the `TemplateCache` object to retrieve the
	  // template function. Override this method to provide your own
	  // custom rendering and template handling for all of Marionette.
	  render: function(template, data){

	    if (!template) {
	      throwError("Cannot render the template since it's false, null or undefined.", "TemplateNotFoundError");
	    }

	    var templateFunc;
	    if (typeof template === "function"){
	      templateFunc = template;
	    } else {
	      templateFunc = Marionette.TemplateCache.get(template);
	    }

	    return templateFunc(data);
	  }
	};



	// Marionette.View
	// ---------------

	// The core view type that other Marionette views extend from.
	Marionette.View = Backbone.View.extend({

	  constructor: function(options){
	    _.bindAll(this, "render");

	    // this exposes view options to the view initializer
	    // this is a backfill since backbone removed the assignment
	    // of this.options
	    // at some point however this may be removed
	    this.options = _.extend({}, _.result(this, 'options'), _.isFunction(options) ? options.call(this) : options);

	    // parses out the @ui DSL for events
	    this.events = this.normalizeUIKeys(_.result(this, 'events'));
	    Backbone.View.prototype.constructor.apply(this, arguments);

	    Marionette.MonitorDOMRefresh(this);
	    this.listenTo(this, "show", this.onShowCalled);
	  },

	  // import the "triggerMethod" to trigger events with corresponding
	  // methods if the method exists
	  triggerMethod: Marionette.triggerMethod,

	  // Imports the "normalizeMethods" to transform hashes of
	  // events=>function references/names to a hash of events=>function references
	  normalizeMethods: Marionette.normalizeMethods,

	  // Get the template for this view
	  // instance. You can set a `template` attribute in the view
	  // definition or pass a `template: "whatever"` parameter in
	  // to the constructor options.
	  getTemplate: function(){
	    return Marionette.getOption(this, "template");
	  },

	  // Mix in template helper methods. Looks for a
	  // `templateHelpers` attribute, which can either be an
	  // object literal, or a function that returns an object
	  // literal. All methods and attributes from this object
	  // are copies to the object passed in.
	  mixinTemplateHelpers: function(target){
	    target = target || {};
	    var templateHelpers = Marionette.getOption(this, "templateHelpers");
	    if (_.isFunction(templateHelpers)){
	      templateHelpers = templateHelpers.call(this);
	    }
	    return _.extend(target, templateHelpers);
	  },

	  // allows for the use of the @ui. syntax within
	  // a given key for triggers and events
	  // swaps the @ui with the associated selector
	  normalizeUIKeys: function(hash) {
	    var _this = this;
	    if (typeof(hash) === "undefined") {
	      return;
	    }

	    _.each(_.keys(hash), function(v) {
	      var pattern = /@ui.[a-zA-Z_$0-9]*/g;
	      if (v.match(pattern)) {
	        hash[v.replace(pattern, function(r) {
	          return _.result(_this, "ui")[r.slice(4)];
	        })] = hash[v];
	        delete hash[v];
	      }
	    });

	    return hash;
	  },

	  // Configure `triggers` to forward DOM events to view
	  // events. `triggers: {"click .foo": "do:foo"}`
	  configureTriggers: function(){
	    if (!this.triggers) { return; }

	    var triggerEvents = {};

	    // Allow `triggers` to be configured as a function
	    var triggers = this.normalizeUIKeys(_.result(this, "triggers"));

	    // Configure the triggers, prevent default
	    // action and stop propagation of DOM events
	    _.each(triggers, function(value, key){

	      var hasOptions = _.isObject(value);
	      var eventName = hasOptions ? value.event : value;

	      // build the event handler function for the DOM event
	      triggerEvents[key] = function(e){

	        // stop the event in its tracks
	        if (e) {
	          var prevent = e.preventDefault;
	          var stop = e.stopPropagation;

	          var shouldPrevent = hasOptions ? value.preventDefault : prevent;
	          var shouldStop = hasOptions ? value.stopPropagation : stop;

	          if (shouldPrevent && prevent) { prevent.apply(e); }
	          if (shouldStop && stop) { stop.apply(e); }
	        }

	        // build the args for the event
	        var args = {
	          view: this,
	          model: this.model,
	          collection: this.collection
	        };

	        // trigger the event
	        this.triggerMethod(eventName, args);
	      };

	    }, this);

	    return triggerEvents;
	  },

	  // Overriding Backbone.View's delegateEvents to handle
	  // the `triggers`, `modelEvents`, and `collectionEvents` configuration
	  delegateEvents: function(events){
	    this._delegateDOMEvents(events);
	    Marionette.bindEntityEvents(this, this.model, Marionette.getOption(this, "modelEvents"));
	    Marionette.bindEntityEvents(this, this.collection, Marionette.getOption(this, "collectionEvents"));
	  },

	  // internal method to delegate DOM events and triggers
	  _delegateDOMEvents: function(events){
	    events = events || this.events;
	    if (_.isFunction(events)){ events = events.call(this); }

	    var combinedEvents = {};
	    var triggers = this.configureTriggers();
	    _.extend(combinedEvents, events, triggers);

	    Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
	  },

	  // Overriding Backbone.View's undelegateEvents to handle unbinding
	  // the `triggers`, `modelEvents`, and `collectionEvents` config
	  undelegateEvents: function(){
	    var args = Array.prototype.slice.call(arguments);
	    Backbone.View.prototype.undelegateEvents.apply(this, args);

	    Marionette.unbindEntityEvents(this, this.model, Marionette.getOption(this, "modelEvents"));
	    Marionette.unbindEntityEvents(this, this.collection, Marionette.getOption(this, "collectionEvents"));
	  },

	  // Internal method, handles the `show` event.
	  onShowCalled: function(){},

	  // Default `close` implementation, for removing a view from the
	  // DOM and unbinding it. Regions will call this method
	  // for you. You can specify an `onClose` method in your view to
	  // add custom code that is called after the view is closed.
	  close: function(){
	    if (this.isClosed) { return; }

	    // allow the close to be stopped by returning `false`
	    // from the `onBeforeClose` method
	    var shouldClose = this.triggerMethod("before:close");
	    if (shouldClose === false){
	      return;
	    }

	    // mark as closed before doing the actual close, to
	    // prevent infinite loops within "close" event handlers
	    // that are trying to close other views
	    this.isClosed = true;
	    this.triggerMethod("close");

	    // unbind UI elements
	    this.unbindUIElements();

	    // remove the view from the DOM
	    this.remove();
	  },

	  // This method binds the elements specified in the "ui" hash inside the view's code with
	  // the associated jQuery selectors.
	  bindUIElements: function(){
	    if (!this.ui) { return; }

	    // store the ui hash in _uiBindings so they can be reset later
	    // and so re-rendering the view will be able to find the bindings
	    if (!this._uiBindings){
	      this._uiBindings = this.ui;
	    }

	    // get the bindings result, as a function or otherwise
	    var bindings = _.result(this, "_uiBindings");

	    // empty the ui so we don't have anything to start with
	    this.ui = {};

	    // bind each of the selectors
	    _.each(_.keys(bindings), function(key) {
	      var selector = bindings[key];
	      this.ui[key] = this.$(selector);
	    }, this);
	  },

	  // This method unbinds the elements specified in the "ui" hash
	  unbindUIElements: function(){
	    if (!this.ui || !this._uiBindings){ return; }

	    // delete all of the existing ui bindings
	    _.each(this.ui, function($el, name){
	      delete this.ui[name];
	    }, this);

	    // reset the ui element to the original bindings configuration
	    this.ui = this._uiBindings;
	    delete this._uiBindings;
	  }
	});

	// Item View
	// ---------

	// A single item view implementation that contains code for rendering
	// with underscore.js templates, serializing the view's model or collection,
	// and calling several methods on extended views, such as `onRender`.
	Marionette.ItemView = Marionette.View.extend({

	  // Setting up the inheritance chain which allows changes to
	  // Marionette.View.prototype.constructor which allows overriding
	  constructor: function(){
	    Marionette.View.prototype.constructor.apply(this, arguments);
	  },

	  // Serialize the model or collection for the view. If a model is
	  // found, `.toJSON()` is called. If a collection is found, `.toJSON()`
	  // is also called, but is used to populate an `items` array in the
	  // resulting data. If both are found, defaults to the model.
	  // You can override the `serializeData` method in your own view
	  // definition, to provide custom serialization for your view's data.
	  serializeData: function(){
	    var data = {};

	    if (this.model) {
	      data = this.model.toJSON();
	    }
	    else if (this.collection) {
	      data = { items: this.collection.toJSON() };
	    }

	    return data;
	  },

	  // Render the view, defaulting to underscore.js templates.
	  // You can override this in your view definition to provide
	  // a very specific rendering for your view. In general, though,
	  // you should override the `Marionette.Renderer` object to
	  // change how Marionette renders views.
	  render: function(){
	    this.isClosed = false;

	    this.triggerMethod("before:render", this);
	    this.triggerMethod("item:before:render", this);

	    var data = this.serializeData();
	    data = this.mixinTemplateHelpers(data);

	    var template = this.getTemplate();
	    var html = Marionette.Renderer.render(template, data);

	    this.$el.html(html);
	    this.bindUIElements();

	    this.triggerMethod("render", this);
	    this.triggerMethod("item:rendered", this);

	    return this;
	  },

	  // Override the default close event to add a few
	  // more events that are triggered.
	  close: function(){
	    if (this.isClosed){ return; }

	    this.triggerMethod('item:before:close');

	    Marionette.View.prototype.close.apply(this, arguments);

	    this.triggerMethod('item:closed');
	  }
	});

	// Collection View
	// ---------------

	// A view that iterates over a Backbone.Collection
	// and renders an individual ItemView for each model.
	Marionette.CollectionView = Marionette.View.extend({
	  // used as the prefix for item view events
	  // that are forwarded through the collectionview
	  itemViewEventPrefix: "itemview",

	  // constructor
	  constructor: function(options){
	    this._initChildViewStorage();

	    Marionette.View.prototype.constructor.apply(this, arguments);

	    this._initialEvents();
	    this.initRenderBuffer();
	  },

	  // Instead of inserting elements one by one into the page,
	  // it's much more performant to insert elements into a document
	  // fragment and then insert that document fragment into the page
	  initRenderBuffer: function() {
	    this.elBuffer = document.createDocumentFragment();
	    this._bufferedChildren = [];
	  },

	  startBuffering: function() {
	    this.initRenderBuffer();
	    this.isBuffering = true;
	  },

	  endBuffering: function() {
	    this.isBuffering = false;
	    this.appendBuffer(this, this.elBuffer);
	    this._triggerShowBufferedChildren();
	    this.initRenderBuffer();
	  },

	  _triggerShowBufferedChildren: function () {
	    if (this._isShown) {
	      _.each(this._bufferedChildren, function (child) {
	        Marionette.triggerMethod.call(child, "show");
	      });
	      this._bufferedChildren = [];
	    }
	  },

	  // Configured the initial events that the collection view
	  // binds to.
	  _initialEvents: function(){
	    if (this.collection){
	      this.listenTo(this.collection, "add", this.addChildView);
	      this.listenTo(this.collection, "remove", this.removeItemView);
	      this.listenTo(this.collection, "reset", this.render);
	    }
	  },

	  // Handle a child item added to the collection
	  addChildView: function(item, collection, options){
	    this.closeEmptyView();
	    var ItemView = this.getItemView(item);
	    var index = this.collection.indexOf(item);
	    this.addItemView(item, ItemView, index);
	  },

	  // Override from `Marionette.View` to guarantee the `onShow` method
	  // of child views is called.
	  onShowCalled: function(){
	    this.children.each(function(child){
	      Marionette.triggerMethod.call(child, "show");
	    });
	  },

	  // Internal method to trigger the before render callbacks
	  // and events
	  triggerBeforeRender: function(){
	    this.triggerMethod("before:render", this);
	    this.triggerMethod("collection:before:render", this);
	  },

	  // Internal method to trigger the rendered callbacks and
	  // events
	  triggerRendered: function(){
	    this.triggerMethod("render", this);
	    this.triggerMethod("collection:rendered", this);
	  },

	  // Render the collection of items. Override this method to
	  // provide your own implementation of a render function for
	  // the collection view.
	  render: function(){
	    this.isClosed = false;
	    this.triggerBeforeRender();
	    this._renderChildren();
	    this.triggerRendered();
	    return this;
	  },

	  // Internal method. Separated so that CompositeView can have
	  // more control over events being triggered, around the rendering
	  // process
	  _renderChildren: function(){
	    this.startBuffering();

	    this.closeEmptyView();
	    this.closeChildren();

	    if (!this.isEmpty(this.collection)) {
	      this.showCollection();
	    } else {
	      this.showEmptyView();
	    }

	    this.endBuffering();
	  },

	  // Internal method to loop through each item in the
	  // collection view and show it
	  showCollection: function(){
	    var ItemView;
	    this.collection.each(function(item, index){
	      ItemView = this.getItemView(item);
	      this.addItemView(item, ItemView, index);
	    }, this);
	  },

	  // Internal method to show an empty view in place of
	  // a collection of item views, when the collection is
	  // empty
	  showEmptyView: function(){
	    var EmptyView = this.getEmptyView();

	    if (EmptyView && !this._showingEmptyView){
	      this._showingEmptyView = true;
	      var model = new Backbone.Model();
	      this.addItemView(model, EmptyView, 0);
	    }
	  },

	  // Internal method to close an existing emptyView instance
	  // if one exists. Called when a collection view has been
	  // rendered empty, and then an item is added to the collection.
	  closeEmptyView: function(){
	    if (this._showingEmptyView){
	      this.closeChildren();
	      delete this._showingEmptyView;
	    }
	  },

	  // Retrieve the empty view type
	  getEmptyView: function(){
	    return Marionette.getOption(this, "emptyView");
	  },

	  // Retrieve the itemView type, either from `this.options.itemView`
	  // or from the `itemView` in the object definition. The "options"
	  // takes precedence.
	  getItemView: function(item){
	    var itemView = Marionette.getOption(this, "itemView");

	    if (!itemView){
	      throwError("An `itemView` must be specified", "NoItemViewError");
	    }

	    return itemView;
	  },

	  // Render the child item's view and add it to the
	  // HTML for the collection view.
	  addItemView: function(item, ItemView, index){
	    // get the itemViewOptions if any were specified
	    var itemViewOptions = Marionette.getOption(this, "itemViewOptions");
	    if (_.isFunction(itemViewOptions)){
	      itemViewOptions = itemViewOptions.call(this, item, index);
	    }

	    // build the view
	    var view = this.buildItemView(item, ItemView, itemViewOptions);

	    // set up the child view event forwarding
	    this.addChildViewEventForwarding(view);

	    // this view is about to be added
	    this.triggerMethod("before:item:added", view);

	    // Store the child view itself so we can properly
	    // remove and/or close it later
	    this.children.add(view);

	    // Render it and show it
	    this.renderItemView(view, index);

	    // call the "show" method if the collection view
	    // has already been shown
	    if (this._isShown && !this.isBuffering){
	      Marionette.triggerMethod.call(view, "show");
	    }

	    // this view was added
	    this.triggerMethod("after:item:added", view);

	    return view;
	  },

	  // Set up the child view event forwarding. Uses an "itemview:"
	  // prefix in front of all forwarded events.
	  addChildViewEventForwarding: function(view){
	    var prefix = Marionette.getOption(this, "itemViewEventPrefix");

	    // Forward all child item view events through the parent,
	    // prepending "itemview:" to the event name
	    this.listenTo(view, "all", function(){
	      var args = slice.call(arguments);
	      var rootEvent = args[0];
	      var itemEvents = this.normalizeMethods(this.getItemEvents());

	      args[0] = prefix + ":" + rootEvent;
	      args.splice(1, 0, view);

	      // call collectionView itemEvent if defined
	      if (typeof itemEvents !== "undefined" && _.isFunction(itemEvents[rootEvent])) {
	        itemEvents[rootEvent].apply(this, args);
	      }

	      Marionette.triggerMethod.apply(this, args);
	    }, this);
	  },

	  // returns the value of itemEvents depending on if a function
	  getItemEvents: function() {
	    if (_.isFunction(this.itemEvents)) {
	      return this.itemEvents.call(this);
	    }

	    return this.itemEvents;
	  },

	  // render the item view
	  renderItemView: function(view, index) {
	    view.render();
	    this.appendHtml(this, view, index);
	  },

	  // Build an `itemView` for every model in the collection.
	  buildItemView: function(item, ItemViewType, itemViewOptions){
	    var options = _.extend({model: item}, itemViewOptions);
	    return new ItemViewType(options);
	  },

	  // get the child view by item it holds, and remove it
	  removeItemView: function(item){
	    var view = this.children.findByModel(item);
	    this.removeChildView(view);
	    this.checkEmpty();
	  },

	  // Remove the child view and close it
	  removeChildView: function(view){

	    // shut down the child view properly,
	    // including events that the collection has from it
	    if (view){
	      this.stopListening(view);

	      // call 'close' or 'remove', depending on which is found
	      if (view.close) { view.close(); }
	      else if (view.remove) { view.remove(); }

	      this.children.remove(view);
	    }

	    this.triggerMethod("item:removed", view);
	  },

	  // helper to check if the collection is empty
	  isEmpty: function(collection){
	    // check if we're empty now
	    return !this.collection || this.collection.length === 0;
	  },

	  // If empty, show the empty view
	  checkEmpty: function (){
	    if (this.isEmpty(this.collection)){
	      this.showEmptyView();
	    }
	  },

	  // You might need to override this if you've overridden appendHtml
	  appendBuffer: function(collectionView, buffer) {
	    collectionView.$el.append(buffer);
	  },

	  // Append the HTML to the collection's `el`.
	  // Override this method to do something other
	  // than `.append`.
	  appendHtml: function(collectionView, itemView, index){
	    if (collectionView.isBuffering) {
	      // buffering happens on reset events and initial renders
	      // in order to reduce the number of inserts into the
	      // document, which are expensive.
	      collectionView.elBuffer.appendChild(itemView.el);
	      collectionView._bufferedChildren.push(itemView);
	    }
	    else {
	      // If we've already rendered the main collection, just
	      // append the new items directly into the element.
	      collectionView.$el.append(itemView.el);
	    }
	  },

	  // Internal method to set up the `children` object for
	  // storing all of the child views
	  _initChildViewStorage: function(){
	    this.children = new Backbone.ChildViewContainer();
	  },

	  // Handle cleanup and other closing needs for
	  // the collection of views.
	  close: function(){
	    if (this.isClosed){ return; }

	    this.triggerMethod("collection:before:close");
	    this.closeChildren();
	    this.triggerMethod("collection:closed");

	    Marionette.View.prototype.close.apply(this, arguments);
	  },

	  // Close the child views that this collection view
	  // is holding on to, if any
	  closeChildren: function(){
	    this.children.each(function(child){
	      this.removeChildView(child);
	    }, this);
	    this.checkEmpty();
	  }
	});


	// Composite View
	// --------------

	// Used for rendering a branch-leaf, hierarchical structure.
	// Extends directly from CollectionView and also renders an
	// an item view as `modelView`, for the top leaf
	Marionette.CompositeView = Marionette.CollectionView.extend({

	  // Setting up the inheritance chain which allows changes to
	  // Marionette.CollectionView.prototype.constructor which allows overriding
	  constructor: function(){
	    Marionette.CollectionView.prototype.constructor.apply(this, arguments);
	  },

	  // Configured the initial events that the composite view
	  // binds to. Override this method to prevent the initial
	  // events, or to add your own initial events.
	  _initialEvents: function(){

	    // Bind only after composite view is rendered to avoid adding child views
	    // to nonexistent itemViewContainer
	    this.once('render', function () {
	      if (this.collection){
	        this.listenTo(this.collection, "add", this.addChildView);
	        this.listenTo(this.collection, "remove", this.removeItemView);
	        this.listenTo(this.collection, "reset", this._renderChildren);
	      }
	    });

	  },

	  // Retrieve the `itemView` to be used when rendering each of
	  // the items in the collection. The default is to return
	  // `this.itemView` or Marionette.CompositeView if no `itemView`
	  // has been defined
	  getItemView: function(item){
	    var itemView = Marionette.getOption(this, "itemView") || this.constructor;

	    if (!itemView){
	      throwError("An `itemView` must be specified", "NoItemViewError");
	    }

	    return itemView;
	  },

	  // Serialize the collection for the view.
	  // You can override the `serializeData` method in your own view
	  // definition, to provide custom serialization for your view's data.
	  serializeData: function(){
	    var data = {};

	    if (this.model){
	      data = this.model.toJSON();
	    }

	    return data;
	  },

	  // Renders the model once, and the collection once. Calling
	  // this again will tell the model's view to re-render itself
	  // but the collection will not re-render.
	  render: function(){
	    this.isRendered = true;
	    this.isClosed = false;
	    this.resetItemViewContainer();

	    this.triggerBeforeRender();
	    var html = this.renderModel();
	    this.$el.html(html);
	    // the ui bindings is done here and not at the end of render since they
	    // will not be available until after the model is rendered, but should be
	    // available before the collection is rendered.
	    this.bindUIElements();
	    this.triggerMethod("composite:model:rendered");

	    this._renderChildren();

	    this.triggerMethod("composite:rendered");
	    this.triggerRendered();
	    return this;
	  },

	  _renderChildren: function(){
	    if (this.isRendered){
	      this.triggerMethod("composite:collection:before:render");
	      Marionette.CollectionView.prototype._renderChildren.call(this);
	      this.triggerMethod("composite:collection:rendered");
	    }
	  },

	  // Render an individual model, if we have one, as
	  // part of a composite view (branch / leaf). For example:
	  // a treeview.
	  renderModel: function(){
	    var data = {};
	    data = this.serializeData();
	    data = this.mixinTemplateHelpers(data);

	    var template = this.getTemplate();
	    return Marionette.Renderer.render(template, data);
	  },


	  // You might need to override this if you've overridden appendHtml
	  appendBuffer: function(compositeView, buffer) {
	    var $container = this.getItemViewContainer(compositeView);
	    $container.append(buffer);
	  },

	  // Appends the `el` of itemView instances to the specified
	  // `itemViewContainer` (a jQuery selector). Override this method to
	  // provide custom logic of how the child item view instances have their
	  // HTML appended to the composite view instance.
	  appendHtml: function(compositeView, itemView, index){
	    if (compositeView.isBuffering) {
	      compositeView.elBuffer.appendChild(itemView.el);
	      compositeView._bufferedChildren.push(itemView);
	    }
	    else {
	      // If we've already rendered the main collection, just
	      // append the new items directly into the element.
	      var $container = this.getItemViewContainer(compositeView);
	      $container.append(itemView.el);
	    }
	  },


	  // Internal method to ensure an `$itemViewContainer` exists, for the
	  // `appendHtml` method to use.
	  getItemViewContainer: function(containerView){
	    if ("$itemViewContainer" in containerView){
	      return containerView.$itemViewContainer;
	    }

	    var container;
	    var itemViewContainer = Marionette.getOption(containerView, "itemViewContainer");
	    if (itemViewContainer){

	      var selector = _.isFunction(itemViewContainer) ? itemViewContainer.call(this) : itemViewContainer;
	      container = containerView.$(selector);
	      if (container.length <= 0) {
	        throwError("The specified `itemViewContainer` was not found: " + containerView.itemViewContainer, "ItemViewContainerMissingError");
	      }

	    } else {
	      container = containerView.$el;
	    }

	    containerView.$itemViewContainer = container;
	    return container;
	  },

	  // Internal method to reset the `$itemViewContainer` on render
	  resetItemViewContainer: function(){
	    if (this.$itemViewContainer){
	      delete this.$itemViewContainer;
	    }
	  }
	});


	// Layout
	// ------

	// Used for managing application layouts, nested layouts and
	// multiple regions within an application or sub-application.
	//
	// A specialized view type that renders an area of HTML and then
	// attaches `Region` instances to the specified `regions`.
	// Used for composite view management and sub-application areas.
	Marionette.Layout = Marionette.ItemView.extend({
	  regionType: Marionette.Region,

	  // Ensure the regions are available when the `initialize` method
	  // is called.
	  constructor: function (options) {
	    options = options || {};

	    this._firstRender = true;
	    this._initializeRegions(options);

	    Marionette.ItemView.prototype.constructor.call(this, options);
	  },

	  // Layout's render will use the existing region objects the
	  // first time it is called. Subsequent calls will close the
	  // views that the regions are showing and then reset the `el`
	  // for the regions to the newly rendered DOM elements.
	  render: function(){

	    if (this.isClosed){
	      // a previously closed layout means we need to
	      // completely re-initialize the regions
	      this._initializeRegions();
	    }
	    if (this._firstRender) {
	      // if this is the first render, don't do anything to
	      // reset the regions
	      this._firstRender = false;
	    } else if (!this.isClosed){
	      // If this is not the first render call, then we need to
	      // re-initializing the `el` for each region
	      this._reInitializeRegions();
	    }

	    return Marionette.ItemView.prototype.render.apply(this, arguments);
	  },

	  // Handle closing regions, and then close the view itself.
	  close: function () {
	    if (this.isClosed){ return; }
	    this.regionManager.close();
	    Marionette.ItemView.prototype.close.apply(this, arguments);
	  },

	  // Add a single region, by name, to the layout
	  addRegion: function(name, definition){
	    var regions = {};
	    regions[name] = definition;
	    return this._buildRegions(regions)[name];
	  },

	  // Add multiple regions as a {name: definition, name2: def2} object literal
	  addRegions: function(regions){
	    this.regions = _.extend({}, this.regions, regions);
	    return this._buildRegions(regions);
	  },

	  // Remove a single region from the Layout, by name
	  removeRegion: function(name){
	    delete this.regions[name];
	    return this.regionManager.removeRegion(name);
	  },

	  // internal method to build regions
	  _buildRegions: function(regions){
	    var that = this;

	    var defaults = {
	      regionType: Marionette.getOption(this, "regionType"),
	      parentEl: function(){ return that.$el; }
	    };

	    return this.regionManager.addRegions(regions, defaults);
	  },

	  // Internal method to initialize the regions that have been defined in a
	  // `regions` attribute on this layout.
	  _initializeRegions: function (options) {
	    var regions;
	    this._initRegionManager();

	    if (_.isFunction(this.regions)) {
	      regions = this.regions(options);
	    } else {
	      regions = this.regions || {};
	    }

	    this.addRegions(regions);
	  },

	  // Internal method to re-initialize all of the regions by updating the `el` that
	  // they point to
	  _reInitializeRegions: function(){
	    this.regionManager.closeRegions();
	    this.regionManager.each(function(region){
	      region.reset();
	    });
	  },

	  // Internal method to initialize the region manager
	  // and all regions in it
	  _initRegionManager: function(){
	    this.regionManager = new Marionette.RegionManager();

	    this.listenTo(this.regionManager, "region:add", function(name, region){
	      this[name] = region;
	      this.trigger("region:add", name, region);
	    });

	    this.listenTo(this.regionManager, "region:remove", function(name, region){
	      delete this[name];
	      this.trigger("region:remove", name, region);
	    });
	  }
	});


	// AppRouter
	// ---------

	// Reduce the boilerplate code of handling route events
	// and then calling a single method on another object.
	// Have your routers configured to call the method on
	// your object, directly.
	//
	// Configure an AppRouter with `appRoutes`.
	//
	// App routers can only take one `controller` object.
	// It is recommended that you divide your controller
	// objects in to smaller pieces of related functionality
	// and have multiple routers / controllers, instead of
	// just one giant router and controller.
	//
	// You can also add standard routes to an AppRouter.

	Marionette.AppRouter = Backbone.Router.extend({

	  constructor: function(options){
	    Backbone.Router.prototype.constructor.apply(this, arguments);
		
	    this.options = options || {};

	    var appRoutes = Marionette.getOption(this, "appRoutes");
	    var controller = this._getController();
	    this.processAppRoutes(controller, appRoutes);
	  },

	  // Similar to route method on a Backbone Router but
	  // method is called on the controller
	  appRoute: function(route, methodName) {
	    var controller = this._getController();
	    this._addAppRoute(controller, route, methodName);
	  },

	  // Internal method to process the `appRoutes` for the
	  // router, and turn them in to routes that trigger the
	  // specified method on the specified `controller`.
	  processAppRoutes: function(controller, appRoutes) {
	    if (!appRoutes){ return; }

	    var routeNames = _.keys(appRoutes).reverse(); // Backbone requires reverted order of routes

	    _.each(routeNames, function(route) {
	      this._addAppRoute(controller, route, appRoutes[route]);
	    }, this);
	  },

	  _getController: function(){
	    return Marionette.getOption(this, "controller");
	  },

	  _addAppRoute: function(controller, route, methodName){
	    var method = controller[methodName];

	    if (!method) {
	      throwError("Method '" + methodName + "' was not found on the controller");
	    }

	    this.route(route, methodName, _.bind(method, controller));
	  }
	});


	// Application
	// -----------

	// Contain and manage the composite application as a whole.
	// Stores and starts up `Region` objects, includes an
	// event aggregator as `app.vent`
	Marionette.Application = function(options){
	  this._initRegionManager();
	  this._initCallbacks = new Marionette.Callbacks();
	  this.vent = new Backbone.Wreqr.EventAggregator();
	  this.commands = new Backbone.Wreqr.Commands();
	  this.reqres = new Backbone.Wreqr.RequestResponse();
	  this.submodules = {};

	  _.extend(this, options);

	  this.triggerMethod = Marionette.triggerMethod;
	};

	_.extend(Marionette.Application.prototype, Backbone.Events, {
	  // Command execution, facilitated by Backbone.Wreqr.Commands
	  execute: function(){
	    this.commands.execute.apply(this.commands, arguments);
	  },

	  // Request/response, facilitated by Backbone.Wreqr.RequestResponse
	  request: function(){
	    return this.reqres.request.apply(this.reqres, arguments);
	  },

	  // Add an initializer that is either run at when the `start`
	  // method is called, or run immediately if added after `start`
	  // has already been called.
	  addInitializer: function(initializer){
	    this._initCallbacks.add(initializer);
	  },

	  // kick off all of the application's processes.
	  // initializes all of the regions that have been added
	  // to the app, and runs all of the initializer functions
	  start: function(options){
	    this.triggerMethod("initialize:before", options);
	    this._initCallbacks.run(options, this);
	    this.triggerMethod("initialize:after", options);

	    this.triggerMethod("start", options);
	  },

	  // Add regions to your app.
	  // Accepts a hash of named strings or Region objects
	  // addRegions({something: "#someRegion"})
	  // addRegions({something: Region.extend({el: "#someRegion"}) });
	  addRegions: function(regions){
	    return this._regionManager.addRegions(regions);
	  },

	  // Close all regions in the app, without removing them
	  closeRegions: function(){
	    this._regionManager.closeRegions();
	  },

	  // Removes a region from your app, by name
	  // Accepts the regions name
	  // removeRegion('myRegion')
	  removeRegion: function(region) {
	    this._regionManager.removeRegion(region);
	  },

	  // Provides alternative access to regions
	  // Accepts the region name
	  // getRegion('main')
	  getRegion: function(region) {
	    return this._regionManager.get(region);
	  },

	  // Create a module, attached to the application
	  module: function(moduleNames, moduleDefinition){

	    // Overwrite the module class if the user specifies one
	    var ModuleClass = Marionette.Module.getClass(moduleDefinition);

	    // slice the args, and add this application object as the
	    // first argument of the array
	    var args = slice.call(arguments);
	    args.unshift(this);

	    // see the Marionette.Module object for more information
	    return ModuleClass.create.apply(ModuleClass, args);
	  },

	  // Internal method to set up the region manager
	  _initRegionManager: function(){
	    this._regionManager = new Marionette.RegionManager();

	    this.listenTo(this._regionManager, "region:add", function(name, region){
	      this[name] = region;
	    });

	    this.listenTo(this._regionManager, "region:remove", function(name, region){
	      delete this[name];
	    });
	  }
	});

	// Copy the `extend` function used by Backbone's classes
	Marionette.Application.extend = Marionette.extend;

	// Module
	// ------

	// A simple module system, used to create privacy and encapsulation in
	// Marionette applications
	Marionette.Module = function(moduleName, app, options){
	  this.moduleName = moduleName;
	  this.options = _.extend({}, this.options, options);
	  this.initialize = options.initialize || this.initialize;

	  // store sub-modules
	  this.submodules = {};

	  this._setupInitializersAndFinalizers();

	  // store the configuration for this module
	  this.app = app;
	  this.startWithParent = true;

	  this.triggerMethod = Marionette.triggerMethod;

	  if (_.isFunction(this.initialize)){
	    this.initialize(this.options, moduleName, app);
	  }
	};

	Marionette.Module.extend = Marionette.extend;

	// Extend the Module prototype with events / listenTo, so that the module
	// can be used as an event aggregator or pub/sub.
	_.extend(Marionette.Module.prototype, Backbone.Events, {

	  // Initialize is an empty function by default. Override it with your own
	  // initialization logic when extending Marionette.Module.
	  initialize: function(){},

	  // Initializer for a specific module. Initializers are run when the
	  // module's `start` method is called.
	  addInitializer: function(callback){
	    this._initializerCallbacks.add(callback);
	  },

	  // Finalizers are run when a module is stopped. They are used to teardown
	  // and finalize any variables, references, events and other code that the
	  // module had set up.
	  addFinalizer: function(callback){
	    this._finalizerCallbacks.add(callback);
	  },

	  // Start the module, and run all of its initializers
	  start: function(options){
	    // Prevent re-starting a module that is already started
	    if (this._isInitialized){ return; }

	    // start the sub-modules (depth-first hierarchy)
	    _.each(this.submodules, function(mod){
	      // check to see if we should start the sub-module with this parent
	      if (mod.startWithParent){
	        mod.start(options);
	      }
	    });

	    // run the callbacks to "start" the current module
	    this.triggerMethod("before:start", options);

	    this._initializerCallbacks.run(options, this);
	    this._isInitialized = true;

	    this.triggerMethod("start", options);
	  },

	  // Stop this module by running its finalizers and then stop all of
	  // the sub-modules for this module
	  stop: function(){
	    // if we are not initialized, don't bother finalizing
	    if (!this._isInitialized){ return; }
	    this._isInitialized = false;

	    Marionette.triggerMethod.call(this, "before:stop");

	    // stop the sub-modules; depth-first, to make sure the
	    // sub-modules are stopped / finalized before parents
	    _.each(this.submodules, function(mod){ mod.stop(); });

	    // run the finalizers
	    this._finalizerCallbacks.run(undefined,this);

	    // reset the initializers and finalizers
	    this._initializerCallbacks.reset();
	    this._finalizerCallbacks.reset();

	    Marionette.triggerMethod.call(this, "stop");
	  },

	  // Configure the module with a definition function and any custom args
	  // that are to be passed in to the definition function
	  addDefinition: function(moduleDefinition, customArgs){
	    this._runModuleDefinition(moduleDefinition, customArgs);
	  },

	  // Internal method: run the module definition function with the correct
	  // arguments
	  _runModuleDefinition: function(definition, customArgs){
	    if (!definition){ return; }

	    // build the correct list of arguments for the module definition
	    var args = _.flatten([
	      this,
	      this.app,
	      Backbone,
	      Marionette,
	      Marionette.$, _,
	      customArgs
	    ]);

	    definition.apply(this, args);
	  },

	  // Internal method: set up new copies of initializers and finalizers.
	  // Calling this method will wipe out all existing initializers and
	  // finalizers.
	  _setupInitializersAndFinalizers: function(){
	    this._initializerCallbacks = new Marionette.Callbacks();
	    this._finalizerCallbacks = new Marionette.Callbacks();
	  }
	});

	// Type methods to create modules
	_.extend(Marionette.Module, {

	  // Create a module, hanging off the app parameter as the parent object.
	  create: function(app, moduleNames, moduleDefinition){
	    var module = app;

	    // get the custom args passed in after the module definition and
	    // get rid of the module name and definition function
	    var customArgs = slice.call(arguments);
	    customArgs.splice(0, 3);

	    // split the module names and get the length
	    moduleNames = moduleNames.split(".");
	    var length = moduleNames.length;

	    // store the module definition for the last module in the chain
	    var moduleDefinitions = [];
	    moduleDefinitions[length-1] = moduleDefinition;

	    // Loop through all the parts of the module definition
	    _.each(moduleNames, function(moduleName, i){
	      var parentModule = module;
	      module = this._getModule(parentModule, moduleName, app, moduleDefinition);
	      this._addModuleDefinition(parentModule, module, moduleDefinitions[i], customArgs);
	    }, this);

	    // Return the last module in the definition chain
	    return module;
	  },

	  _getModule: function(parentModule, moduleName, app, def, args){
	    var options = _.extend({}, def);
	    var ModuleClass = this.getClass(def);

	    // Get an existing module of this name if we have one
	    var module = parentModule[moduleName];

	    if (!module){
	      // Create a new module if we don't have one
	      module = new ModuleClass(moduleName, app, options);
	      parentModule[moduleName] = module;
	      // store the module on the parent
	      parentModule.submodules[moduleName] = module;
	    }

	    return module;
	  },

	  getClass: function(moduleDefinition) {
	    var ModuleClass = Marionette.Module;

	    if (!moduleDefinition) {
	      return ModuleClass;
	    }

	    if (moduleDefinition.prototype instanceof ModuleClass) {
	      return moduleDefinition;
	    }

	    return moduleDefinition.moduleClass || ModuleClass;
	  },

	  _addModuleDefinition: function(parentModule, module, def, args){
	    var fn;
	    var startWithParent;

	    if (_.isFunction(def) && !(def.prototype instanceof Marionette.Module)){
	      // if a function is supplied for the module definition
	      fn = def;
	      startWithParent = true;

	    } else if (_.isObject(def)){
	      // if an object is supplied
	      fn = def.define;
	      startWithParent = !_.isUndefined(def.startWithParent) ? def.startWithParent : true;

	    } else {
	      // if nothing is supplied
	      startWithParent = true;
	    }

	    // add module definition if needed
	    if (fn){
	      module.addDefinition(fn, args);
	    }

	    // `and` the two together, ensuring a single `false` will prevent it
	    // from starting with the parent
	    module.startWithParent = module.startWithParent && startWithParent;

	    // setup auto-start if needed
	    if (module.startWithParent && !module.startWithParentIsConfigured){

	      // only configure this once
	      module.startWithParentIsConfigured = true;

	      // add the module initializer config
	      parentModule.addInitializer(function(options){
	        if (module.startWithParent){
	          module.start(options);
	        }
	      });

	    }

	  }
	});



	  return Marionette;
	})(this, Backbone, _);

	  return Backbone.Marionette;

	}));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_, Backbone) {/*! backbone.routefilter - v0.2.0 - 2013-02-16
	* https://github.com/boazsender/backbone.routefilter
	* Copyright (c) 2013 Boaz Sender; Licensed MIT */

	(function(Backbone, _) {

	  // Save a reference to the original route method to be called
	  // after we pave it over.
	  var originalRoute = Backbone.Router.prototype.route;

	  // Create a reusable no operation func for the case where a before
	  // or after filter is not set. Backbone or Underscore should have
	  // a global one of these in my opinion.
	  var nop = function(){};

	  // Extend the router prototype with a default before function,
	  // a default after function, and a pave over of _bindRoutes.
	  _.extend(Backbone.Router.prototype, {

	    // Add default before filter.
	    before: nop,

	    // Add default after filter.
	    after: nop,

	    // Pave over Backbone.Router.prototype.route, the public method used
	    // for adding routes to a router instance on the fly, and the
	    // method which backbone uses internally for binding routes to handlers
	    // on the Backbone.history singleton once it's instantiated.
	    route: function(route, name, callback) {

	      // If there is no callback present for this route, then set it to
	      // be the name that was set in the routes property of the constructor,
	      // or the name arguement of the route method invocation. This is what
	      // Backbone.Router.route already does. We need to do it again,
	      // because we are about to wrap the callback in a function that calls
	      // the before and after filters as well as the original callback that
	      // was passed in.
	      if( !callback ){
	        callback = this[ name ];
	      }

	      // Create a new callback to replace the original callback that calls
	      // the before and after filters as well as the original callback
	      // internally.
	      var wrappedCallback = _.bind( function() {

	        // Call the before filter and if it returns false, run the
	        // route's original callback, and after filter. This allows
	        // the user to return false from within the before filter
	        // to prevent the original route callback and after
	        // filter from running.
	        var callbackArgs = [ route, _.toArray(arguments) ];
	        var beforeCallback;

	        if ( _.isFunction(this.before) ) {

	          // If the before filter is just a single function, then call
	          // it with the arguments.
	          beforeCallback = this.before;
	        } else if ( typeof this.before[route] !== "undefined" ) {

	          // otherwise, find the appropriate callback for the route name
	          // and call that.
	          beforeCallback = this.before[route];
	        } else {

	          // otherwise, if we have a hash of routes, but no before callback
	          // for this route, just use a nop function.
	          beforeCallback = nop;
	        }

	        // If the before callback fails during its execusion (by returning)
	        // false, then do not proceed with the route triggering.
	        if ( beforeCallback.apply(this, callbackArgs) === false ) {
	          return;
	        }

	        // If the callback exists, then call it. This means that the before
	        // and after filters will be called whether or not an actual
	        // callback function is supplied to handle a given route.
	        if( callback ) {
	          callback.apply( this, arguments );
	        }

	        var afterCallback;
	        if ( _.isFunction(this.after) ) {

	          // If the after filter is a single funciton, then call it with
	          // the proper arguments.
	          afterCallback = this.after;

	        } else if ( typeof this.after[route] !== "undefined" ) {

	          // otherwise if we have a hash of routes, call the appropriate
	          // callback based on the route name.
	          afterCallback = this.after[route];

	        } else {

	          // otherwise, if we have a has of routes but no after callback
	          // for this route, just use the nop function.
	          afterCallback = nop;
	        }

	        // Call the after filter.
	        afterCallback.apply( this, callbackArgs );

	      }, this);

	      // Call our original route, replacing the callback that was originally
	      // passed in when Backbone.Router.route was invoked with our wrapped
	      // callback that calls the before and after callbacks as well as the
	      // original callback.
	      return originalRoute.call( this, route, name, wrappedCallback );
	    }

	  });

	}(Backbone, _));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11), __webpack_require__(6)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Backbone.Validation v0.7.1
	//
	// Copyright (c) 2011-2012 Thomas Pedersen
	// Distributed under MIT License
	//
	// Documentation and full license available at:
	// http://thedersen.com/projects/backbone-validation
	(function (factory) {
	  if (true) {
	    module.exports = factory(__webpack_require__(6), __webpack_require__(11));
	  } else if (typeof define === 'function' && define.amd) {
	    define(['backbone', 'underscore'], factory);
	  }
	}(function (Backbone, _) {
	  Backbone.Validation = (function(_){
	    'use strict';
	  
	    // Default options
	    // ---------------
	  
	    var defaultOptions = {
	      forceUpdate: false,
	      selector: 'name',
	      labelFormatter: 'sentenceCase',
	      valid: Function.prototype,
	      invalid: Function.prototype
	    };
	  
	  
	    // Helper functions
	    // ----------------
	  
	    // Formatting functions used for formatting error messages
	    var formatFunctions = {
	      // Uses the configured label formatter to format the attribute name
	      // to make it more readable for the user
	      formatLabel: function(attrName, model) {
	        return defaultLabelFormatters[defaultOptions.labelFormatter](attrName, model);
	      },
	  
	      // Replaces nummeric placeholders like {0} in a string with arguments
	      // passed to the function
	      format: function() {
	        var args = Array.prototype.slice.call(arguments),
	            text = args.shift();
	        return text.replace(/\{(\d+)\}/g, function(match, number) {
	          return typeof args[number] !== 'undefined' ? args[number] : match;
	        });
	      }
	    };
	  
	    // Flattens an object
	    // eg:
	    //
	    //     var o = {
	    //       address: {
	    //         street: 'Street',
	    //         zip: 1234
	    //       }
	    //     };
	    //
	    // becomes:
	    //
	    //     var o = {
	    //       'address.street': 'Street',
	    //       'address.zip': 1234
	    //     };
	    var flatten = function (obj, into, prefix) {
	      into = into || {};
	      prefix = prefix || '';
	  
	      _.each(obj, function(val, key) {
	        if(obj.hasOwnProperty(key)) {
	          if (val && typeof val === 'object' && !(val instanceof Date || val instanceof RegExp)) {
	            flatten(val, into, prefix + key + '.');
	          }
	          else {
	            into[prefix + key] = val;
	          }
	        }
	      });
	  
	      return into;
	    };
	  
	    // Validation
	    // ----------
	  
	    var Validation = (function(){
	  
	      // Returns an object with undefined properties for all
	      // attributes on the model that has defined one or more
	      // validation rules.
	      var getValidatedAttrs = function(model) {
	        return _.reduce(_.keys(model.validation || {}), function(memo, key) {
	          memo[key] = void 0;
	          return memo;
	        }, {});
	      };
	  
	      // Looks on the model for validations for a specified
	      // attribute. Returns an array of any validators defined,
	      // or an empty array if none is defined.
	      var getValidators = function(model, attr) {
	        var attrValidationSet = model.validation ? model.validation[attr] || {} : {};
	  
	        // If the validator is a function or a string, wrap it in a function validator
	        if (_.isFunction(attrValidationSet) || _.isString(attrValidationSet)) {
	          attrValidationSet = {
	            fn: attrValidationSet
	          };
	        }
	  
	        // Stick the validator object into an array
	        if(!_.isArray(attrValidationSet)) {
	          attrValidationSet = [attrValidationSet];
	        }
	  
	        // Reduces the array of validators into a new array with objects
	        // with a validation method to call, the value to validate against
	        // and the specified error message, if any
	        return _.reduce(attrValidationSet, function(memo, attrValidation) {
	          _.each(_.without(_.keys(attrValidation), 'msg'), function(validator) {
	            memo.push({
	              fn: defaultValidators[validator],
	              val: attrValidation[validator],
	              msg: attrValidation.msg
	            });
	          });
	          return memo;
	        }, []);
	      };
	  
	      // Validates an attribute against all validators defined
	      // for that attribute. If one or more errors are found,
	      // the first error message is returned.
	      // If the attribute is valid, an empty string is returned.
	      var validateAttr = function(model, attr, value, computed) {
	        // Reduces the array of validators to an error message by
	        // applying all the validators and returning the first error
	        // message, if any.
	        return _.reduce(getValidators(model, attr), function(memo, validator){
	          // Pass the format functions plus the default
	          // validators as the context to the validator
	          var ctx = _.extend({}, formatFunctions, defaultValidators),
	              result = validator.fn.call(ctx, value, attr, validator.val, model, computed);
	  
	          if(result === false || memo === false) {
	            return false;
	          }
	          if (result && !memo) {
	            return validator.msg || result;
	          }
	          return memo;
	        }, '');
	      };
	  
	      // Loops through the model's attributes and validates them all.
	      // Returns and object containing names of invalid attributes
	      // as well as error messages.
	      var validateModel = function(model, attrs) {
	        var error,
	            invalidAttrs = {},
	            isValid = true,
	            computed = _.clone(attrs),
	            flattened = flatten(attrs);
	  
	        _.each(flattened, function(val, attr) {
	          error = validateAttr(model, attr, val, computed);
	          if (error) {
	            invalidAttrs[attr] = error;
	            isValid = false;
	          }
	        });
	  
	        return {
	          invalidAttrs: invalidAttrs,
	          isValid: isValid
	        };
	      };
	  
	      // Contains the methods that are mixed in on the model when binding
	      var mixin = function(view, options) {
	        return {
	  
	          // Check whether or not a value passes validation
	          // without updating the model
	          preValidate: function(attr, value) {
	            return validateAttr(this, attr, value, _.extend({}, this.attributes));
	          },
	  
	          // Check to see if an attribute, an array of attributes or the
	          // entire model is valid. Passing true will force a validation
	          // of the model.
	          isValid: function(option) {
	            var flattened = flatten(this.attributes);
	  
	            if(_.isString(option)){
	              return !validateAttr(this, option, flattened[option], _.extend({}, this.attributes));
	            }
	            if(_.isArray(option)){
	              return _.reduce(option, function(memo, attr) {
	                return memo && !validateAttr(this, attr, flattened[attr], _.extend({}, this.attributes));
	              }, true, this);
	            }
	            if(option === true) {
	              this.validate();
	            }
	            return this.validation ? this._isValid : true;
	          },
	  
	          // This is called by Backbone when it needs to perform validation.
	          // You can call it manually without any parameters to validate the
	          // entire model.
	          validate: function(attrs, setOptions){
	            var model = this,
	                validateAll = !attrs,
	                opt = _.extend({}, options, setOptions),
	                validatedAttrs = getValidatedAttrs(model),
	                allAttrs = _.extend({}, validatedAttrs, model.attributes, attrs),
	                changedAttrs = flatten(attrs || allAttrs),
	  
	                result = validateModel(model, allAttrs);
	  
	            model._isValid = result.isValid;
	  
	            // After validation is performed, loop through all changed attributes
	            // and call the valid callbacks so the view is updated.
	            _.each(validatedAttrs, function(val, attr){
	              var invalid = result.invalidAttrs.hasOwnProperty(attr);
	              if(!invalid){
	                opt.valid(view, attr, opt.selector);
	              }
	            });
	  
	            // After validation is performed, loop through all changed attributes
	            // and call the invalid callback so the view is updated.
	            _.each(validatedAttrs, function(val, attr){
	              var invalid = result.invalidAttrs.hasOwnProperty(attr),
	                  changed = changedAttrs.hasOwnProperty(attr);
	  
	              if(invalid && (changed || validateAll)){
	                opt.invalid(view, attr, result.invalidAttrs[attr], opt.selector);
	              }
	            });
	  
	            // Trigger validated events.
	            // Need to defer this so the model is actually updated before
	            // the event is triggered.
	            _.defer(function() {
	              model.trigger('validated', model._isValid, model, result.invalidAttrs);
	              model.trigger('validated:' + (model._isValid ? 'valid' : 'invalid'), model, result.invalidAttrs);
	            });
	  
	            // Return any error messages to Backbone, unless the forceUpdate flag is set.
	            // Then we do not return anything and fools Backbone to believe the validation was
	            // a success. That way Backbone will update the model regardless.
	            if (!opt.forceUpdate && _.intersection(_.keys(result.invalidAttrs), _.keys(changedAttrs)).length > 0) {
	              return result.invalidAttrs;
	            }
	          }
	        };
	      };
	  
	      // Helper to mix in validation on a model
	      var bindModel = function(view, model, options) {
	        _.extend(model, mixin(view, options));
	      };
	  
	      // Removes the methods added to a model
	      var unbindModel = function(model) {
	        delete model.validate;
	        delete model.preValidate;
	        delete model.isValid;
	      };
	  
	      // Mix in validation on a model whenever a model is
	      // added to a collection
	      var collectionAdd = function(model) {
	        bindModel(this.view, model, this.options);
	      };
	  
	      // Remove validation from a model whenever a model is
	      // removed from a collection
	      var collectionRemove = function(model) {
	        unbindModel(model);
	      };
	  
	      // Returns the public methods on Backbone.Validation
	      return {
	  
	        // Current version of the library
	        version: '0.7.1',
	  
	        // Called to configure the default options
	        configure: function(options) {
	          _.extend(defaultOptions, options);
	        },
	  
	        // Hooks up validation on a view with a model
	        // or collection
	        bind: function(view, options) {
	          var model = view.model,
	              collection = view.collection;
	  
	          options = _.extend({}, defaultOptions, defaultCallbacks, options);
	  
	          if(typeof model === 'undefined' && typeof collection === 'undefined'){
	            throw 'Before you execute the binding your view must have a model or a collection.\n' +
	                  'See http://thedersen.com/projects/backbone-validation/#using-form-model-validation for more information.';
	          }
	  
	          if(model) {
	            bindModel(view, model, options);
	          }
	          else if(collection) {
	            collection.each(function(model){
	              bindModel(view, model, options);
	            });
	            collection.bind('add', collectionAdd, {view: view, options: options});
	            collection.bind('remove', collectionRemove);
	          }
	        },
	  
	        // Removes validation from a view with a model
	        // or collection
	        unbind: function(view) {
	          var model = view.model,
	              collection = view.collection;
	  
	          if(model) {
	            unbindModel(view.model);
	          }
	          if(collection) {
	            collection.each(function(model){
	              unbindModel(model);
	            });
	            collection.unbind('add', collectionAdd);
	            collection.unbind('remove', collectionRemove);
	          }
	        },
	  
	        // Used to extend the Backbone.Model.prototype
	        // with validation
	        mixin: mixin(null, defaultOptions)
	      };
	    }());
	  
	  
	    // Callbacks
	    // ---------
	  
	    var defaultCallbacks = Validation.callbacks = {
	  
	      // Gets called when a previously invalid field in the
	      // view becomes valid. Removes any error message.
	      // Should be overridden with custom functionality.
	      valid: function(view, attr, selector) {
	        view.$('[' + selector + '~="' + attr + '"]')
	            .removeClass('invalid')
	            .removeAttr('data-error');
	      },
	  
	      // Gets called when a field in the view becomes invalid.
	      // Adds a error message.
	      // Should be overridden with custom functionality.
	      invalid: function(view, attr, error, selector) {
	        view.$('[' + selector + '~="' + attr + '"]')
	            .addClass('invalid')
	            .attr('data-error', error);
	      }
	    };
	  
	  
	    // Patterns
	    // --------
	  
	    var defaultPatterns = Validation.patterns = {
	      // Matches any digit(s) (i.e. 0-9)
	      digits: /^\d+$/,
	  
	      // Matched any number (e.g. 100.000)
	      number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
	  
	      // Matches a valid email address (e.g. mail@example.com)
	      email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
	  
	      // Mathes any valid url (e.g. http://www.xample.com)
	      url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
	    };
	  
	  
	    // Error messages
	    // --------------
	  
	    // Error message for the build in validators.
	    // {x} gets swapped out with arguments form the validator.
	    var defaultMessages = Validation.messages = {
	      required: '{0} is required',
	      acceptance: '{0} must be accepted',
	      min: '{0} must be greater than or equal to {1}',
	      max: '{0} must be less than or equal to {1}',
	      range: '{0} must be between {1} and {2}',
	      length: '{0} must be {1} characters',
	      minLength: '{0} must be at least {1} characters',
	      maxLength: '{0} must be at most {1} characters',
	      rangeLength: '{0} must be between {1} and {2} characters',
	      oneOf: '{0} must be one of: {1}',
	      equalTo: '{0} must be the same as {1}',
	      pattern: '{0} must be a valid {1}'
	    };
	  
	    // Label formatters
	    // ----------------
	  
	    // Label formatters are used to convert the attribute name
	    // to a more human friendly label when using the built in
	    // error messages.
	    // Configure which one to use with a call to
	    //
	    //     Backbone.Validation.configure({
	    //       labelFormatter: 'label'
	    //     });
	    var defaultLabelFormatters = Validation.labelFormatters = {
	  
	      // Returns the attribute name with applying any formatting
	      none: function(attrName) {
	        return attrName;
	      },
	  
	      // Converts attributeName or attribute_name to Attribute name
	      sentenceCase: function(attrName) {
	        return attrName.replace(/(?:^\w|[A-Z]|\b\w)/g, function(match, index) {
	          return index === 0 ? match.toUpperCase() : ' ' + match.toLowerCase();
	        }).replace('_', ' ');
	      },
	  
	      // Looks for a label configured on the model and returns it
	      //
	      //      var Model = Backbone.Model.extend({
	      //        validation: {
	      //          someAttribute: {
	      //            required: true
	      //          }
	      //        },
	      //
	      //        labels: {
	      //          someAttribute: 'Custom label'
	      //        }
	      //      });
	      label: function(attrName, model) {
	        return (model.labels && model.labels[attrName]) || defaultLabelFormatters.sentenceCase(attrName, model);
	      }
	    };
	  
	  
	    // Built in validators
	    // -------------------
	  
	    var defaultValidators = Validation.validators = (function(){
	      // Use native trim when defined
	      var trim = String.prototype.trim ?
	        function(text) {
	          return text === null ? '' : String.prototype.trim.call(text);
	        } :
	        function(text) {
	          var trimLeft = /^\s+/,
	              trimRight = /\s+$/;
	  
	          return text === null ? '' : text.toString().replace(trimLeft, '').replace(trimRight, '');
	        };
	  
	      // Determines whether or not a value is a number
	      var isNumber = function(value){
	        return _.isNumber(value) || (_.isString(value) && value.match(defaultPatterns.number));
	      };
	  
	      // Determines whether or not not a value is empty
	      var hasValue = function(value) {
	        return !(_.isNull(value) || _.isUndefined(value) || (_.isString(value) && trim(value) === ''));
	      };
	  
	      return {
	        // Function validator
	        // Lets you implement a custom function used for validation
	        fn: function(value, attr, fn, model, computed) {
	          if(_.isString(fn)){
	            fn = model[fn];
	          }
	          return fn.call(model, value, attr, computed);
	        },
	  
	        // Required validator
	        // Validates if the attribute is required or not
	        required: function(value, attr, required, model, computed) {
	          var isRequired = _.isFunction(required) ? required.call(model, value, attr, computed) : required;
	          if(!isRequired && !hasValue(value)) {
	            return false; // overrides all other validators
	          }
	          if (isRequired && !hasValue(value)) {
	            return this.format(defaultMessages.required, this.formatLabel(attr, model));
	          }
	        },
	  
	        // Acceptance validator
	        // Validates that something has to be accepted, e.g. terms of use
	        // `true` or 'true' are valid
	        acceptance: function(value, attr, accept, model) {
	          if(value !== 'true' && (!_.isBoolean(value) || value === false)) {
	            return this.format(defaultMessages.acceptance, this.formatLabel(attr, model));
	          }
	        },
	  
	        // Min validator
	        // Validates that the value has to be a number and equal to or greater than
	        // the min value specified
	        min: function(value, attr, minValue, model) {
	          if (!isNumber(value) || value < minValue) {
	            return this.format(defaultMessages.min, this.formatLabel(attr, model), minValue);
	          }
	        },
	  
	        // Max validator
	        // Validates that the value has to be a number and equal to or less than
	        // the max value specified
	        max: function(value, attr, maxValue, model) {
	          if (!isNumber(value) || value > maxValue) {
	            return this.format(defaultMessages.max, this.formatLabel(attr, model), maxValue);
	          }
	        },
	  
	        // Range validator
	        // Validates that the value has to be a number and equal to or between
	        // the two numbers specified
	        range: function(value, attr, range, model) {
	          if(!isNumber(value) || value < range[0] || value > range[1]) {
	            return this.format(defaultMessages.range, this.formatLabel(attr, model), range[0], range[1]);
	          }
	        },
	  
	        // Length validator
	        // Validates that the value has to be a string with length equal to
	        // the length value specified
	        length: function(value, attr, length, model) {
	          if (!hasValue(value) || trim(value).length !== length) {
	            return this.format(defaultMessages.length, this.formatLabel(attr, model), length);
	          }
	        },
	  
	        // Min length validator
	        // Validates that the value has to be a string with length equal to or greater than
	        // the min length value specified
	        minLength: function(value, attr, minLength, model) {
	          if (!hasValue(value) || trim(value).length < minLength) {
	            return this.format(defaultMessages.minLength, this.formatLabel(attr, model), minLength);
	          }
	        },
	  
	        // Max length validator
	        // Validates that the value has to be a string with length equal to or less than
	        // the max length value specified
	        maxLength: function(value, attr, maxLength, model) {
	          if (!hasValue(value) || trim(value).length > maxLength) {
	            return this.format(defaultMessages.maxLength, this.formatLabel(attr, model), maxLength);
	          }
	        },
	  
	        // Range length validator
	        // Validates that the value has to be a string and equal to or between
	        // the two numbers specified
	        rangeLength: function(value, attr, range, model) {
	          if(!hasValue(value) || trim(value).length < range[0] || trim(value).length > range[1]) {
	            return this.format(defaultMessages.rangeLength, this.formatLabel(attr, model), range[0], range[1]);
	          }
	        },
	  
	        // One of validator
	        // Validates that the value has to be equal to one of the elements in
	        // the specified array. Case sensitive matching
	        oneOf: function(value, attr, values, model) {
	          if(!_.include(values, value)){
	            return this.format(defaultMessages.oneOf, this.formatLabel(attr, model), values.join(', '));
	          }
	        },
	  
	        // Equal to validator
	        // Validates that the value has to be equal to the value of the attribute
	        // with the name specified
	        equalTo: function(value, attr, equalTo, model, computed) {
	          if(value !== computed[equalTo]) {
	            return this.format(defaultMessages.equalTo, this.formatLabel(attr, model), this.formatLabel(equalTo, model));
	          }
	        },
	  
	        // Pattern validator
	        // Validates that the value has to match the pattern specified.
	        // Can be a regular expression or the name of one of the built in patterns
	        pattern: function(value, attr, pattern, model) {
	          if (!hasValue(value) || !value.toString().match(defaultPatterns[pattern] || pattern)) {
	            return this.format(defaultMessages.pattern, this.formatLabel(attr, model), pattern);
	          }
	        }
	      };
	    }());
	  
	    return Validation;
	  }(_));
	  
	  return Backbone.Validation;
	}));

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.11.0
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-01-23T21:02Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper window is present,
			// execute the factory and get jQuery
			// For environments that do not inherently posses a window with a document
			// (such as Node.js), expose a jQuery-making factory as module.exports
			// This accentuates the need for the creation of a real window
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//

	var deletedIds = [];

	var slice = deletedIds.slice;

	var concat = deletedIds.concat;

	var push = deletedIds.push;

	var indexOf = deletedIds.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var trim = "".trim;

	var support = {};



	var
		version = "1.11.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return a 'clean' array
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return just the object
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray || function( obj ) {
			return jQuery.type(obj) === "array";
		},

		isWindow: function( obj ) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},

		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			return obj - parseFloat( obj ) >= 0;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		isPlainObject: function( obj ) {
			var key;

			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			try {
				// Not own constructor property must be Object
				if ( obj.constructor &&
					!hasOwn.call(obj, "constructor") &&
					!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
					return false;
				}
			} catch ( e ) {
				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}

			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if ( support.ownLast ) {
				for ( key in obj ) {
					return hasOwn.call( obj, key );
				}
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function( data ) {
			if ( data && jQuery.trim( data ) ) {
				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				( window.execScript || function( data ) {
					window[ "eval" ].call( window, data );
				} )( data );
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );

			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				}

			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Use native String.trim function wherever possible
		trim: trim && !trim.call("\uFEFF\xA0") ?
			function( text ) {
				return text == null ?
					"" :
					trim.call( text );
			} :

			// Otherwise use our own trimming functionality
			function( text ) {
				return text == null ?
					"" :
					( text + "" ).replace( rtrim, "" );
			},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			var len;

			if ( arr ) {
				if ( indexOf ) {
					return indexOf.call( arr, elem, i );
				}

				len = arr.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

				for ( ; i < len; i++ ) {
					// Skip accessing in sparse arrays
					if ( i in arr && arr[ i ] === elem ) {
						return i;
					}
				}
			}

			return -1;
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			while ( j < len ) {
				first[ i++ ] = second[ j++ ];
			}

			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if ( len !== len ) {
				while ( second[j] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var args, proxy, tmp;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: function() {
			return +( new Date() );
		},

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});

	function isArraylike( obj ) {
		var length = obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.nodeType === 1 && length ) {
			return true;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v1.10.16
	 * http://sizzlejs.com/
	 *
	 * Copyright 2013 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-01-13
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		compile,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + -(new Date()),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		strundefined = typeof undefined,
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf if we can't use a native one
		indexOf = arr.indexOf || function( elem ) {
			var i = 0,
				len = this.length;
			for ( ; i < len; i++ ) {
				if ( this[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),

		// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
			"*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

		// Prefer arguments quoted,
		//   then not containing pseudos/brackets,
		//   then attribute selectors/non-parenthetical expressions,
		//   then anything else
		// These preferences are here to reduce the number of selectors
		//   needing tokenize in the PSEUDO preFilter
		pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}

		context = context || document;
		results = results || [];

		if ( !selector || typeof selector !== "string" ) {
			return results;
		}

		if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
			return [];
		}

		if ( documentIsHTML && !seed ) {

			// Shortcuts
			if ( (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}

				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType === 9 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== strundefined && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare,
			doc = node ? node.ownerDocument || node : preferredDoc,
			parent = doc.defaultView;

		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Set our document
		document = doc;
		docElem = doc.documentElement;

		// Support tests
		documentIsHTML = !isXML( doc );

		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", function() {
					setDocument();
				}, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", function() {
					setDocument();
				});
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Check if getElementsByClassName can be trusted
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName ) && assert(function( div ) {
			div.innerHTML = "<div class='a'></div><div class='a i'></div>";

			// Support: Safari<4
			// Catch class over-caching
			div.firstChild.className = "i";
			// Support: Opera<10
			// Catch gEBCN failure to find non-leading classes
			return div.getElementsByClassName("i").length === 2;
		});

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [m] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== strundefined ) {
					return context.getElementsByTagName( tag );
				}
			} :
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				div.innerHTML = "<select t=''><option selected=''></option></select>";

				// Support: IE8, Opera 10-12
				// Nothing should be selected when empty strings follow ^= or $= or *=
				if ( div.querySelectorAll("[t^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return doc;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch(e) {}
		}

		return Sizzle( expr, document, null, [elem] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[5] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] && match[4] !== undefined ) {
					match[2] = match[4];

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];

							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf.call( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	function tokenize( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	}

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf.call( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context !== document && context;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !group ) {
				group = tokenize( selector );
			}
			i = group.length;
			while ( i-- ) {
				cached = matcherFromTokens( group[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
		}
		return cached;
	};

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function select( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			match = tokenize( selector );

		if ( !seed ) {
			// Try to minimize operations if there is only one group
			if ( match.length === 1 ) {

				// Take a shortcut and set the context if the root selector is an ID
				tokens = match[0] = match[0].slice( 0 );
				if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
						support.getById && context.nodeType === 9 && documentIsHTML &&
						Expr.relative[ tokens[1].type ] ) {

					context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
					if ( !context ) {
						return results;
					}
					selector = selector.slice( tokens.shift().value.length );
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
				while ( i-- ) {
					token = tokens[i];

					// Abort if we hit a combinator
					if ( Expr.relative[ (type = token.type) ] ) {
						break;
					}
					if ( (find = Expr.find[ type ]) ) {
						// Search, expanding context for leading sibling combinators
						if ( (seed = find(
							token.matches[0].replace( runescape, funescape ),
							rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
						)) ) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice( i, 1 );
							selector = seed.length && toSelector( tokens );
							if ( !selector ) {
								push.apply( results, seed );
								return results;
							}

							break;
						}
					}
				}
			}
		}

		// Compile and execute a filtering function
		// Provide `match` to avoid retokenization if we modified the selector above
		compile( selector, match )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	}

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome<14
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
		});
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};

	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				ret = [],
				self = this,
				len = self.length;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;

						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id !== match[2] ) {
								return rootjQuery.find( selector );
							}

							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				cur = elem[ dir ];

			while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
				if ( cur.nodeType === 1 ) {
					matched.push( cur );
				}
				cur = cur[dir];
			}
			return matched;
		},

		sibling: function( n, elem ) {
			var r = [];

			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					r.push( n );
				}
			}

			return r;
		}
	});

	jQuery.fn.extend({
		has: function( target ) {
			var i,
				targets = jQuery( target, this ),
				len = targets.length;

			return this.filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},

		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
			}

			// index in selector
			if ( typeof elem === "string" ) {
				return jQuery.inArray( this[0], jQuery( elem ) );
			}

			// Locate the position of the desired element
			return jQuery.inArray(
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem, this );
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling( cur, dir ) {
		do {
			cur = cur[ dir ];
		} while ( cur && cur.nodeType !== 1 );

		return cur;
	}

	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var ret = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				ret = jQuery.filter( selector, ret );
			}

			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					ret = jQuery.unique( ret );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					ret = ret.reverse();
				}
			}

			return this.pushStack( ret );
		};
	});
	var rnotwhite = (/\S+/g);



	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,
			// Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend({

		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );

						} else if ( !(--remaining) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}

			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	});


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready );
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.trigger ) {
				jQuery( document ).trigger("ready").off("ready");
			}
		}
	});

	/**
	 * Clean-up method for dom ready events
	 */
	function detach() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	}

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			detach();
			jQuery.ready();
		}
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// we once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );

			// Standards-based browsers support DOMContentLoaded
			} else if ( document.addEventListener ) {
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );

			// If IE event model is used
			} else {
				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent( "onreadystatechange", completed );

				// A fallback to window.onload, that will always work
				window.attachEvent( "onload", completed );

				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;

				try {
					top = window.frameElement == null && document.documentElement;
				} catch(e) {}

				if ( top && top.doScroll ) {
					(function doScrollCheck() {
						if ( !jQuery.isReady ) {

							try {
								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll("left");
							} catch(e) {
								return setTimeout( doScrollCheck, 50 );
							}

							// detach all dom ready events
							detach();

							// and execute any waiting functions
							jQuery.ready();
						}
					})();
				}
			}
		}
		return readyList.promise( obj );
	};


	var strundefined = typeof undefined;



	// Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownLast = i !== "0";

	// Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false;

	jQuery(function() {
		// We need to execute this one support test ASAP because we need to know
		// if body.style.zoom needs to be set.

		var container, div,
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		// Setup
		container = document.createElement( "div" );
		container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

		div = document.createElement( "div" );
		body.appendChild( container ).appendChild( div );

		if ( typeof div.style.zoom !== strundefined ) {
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1";

			if ( (support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 )) ) {
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );

		// Null elements to avoid leaks in IE
		container = div = null;
	});




	(function() {
		var div = document.createElement( "div" );

		// Execute the test only if not already executed in another module.
		if (support.deleteExpando == null) {
			// Support: IE<9
			support.deleteExpando = true;
			try {
				delete div.test;
			} catch( e ) {
				support.deleteExpando = false;
			}
		}

		// Null elements to avoid leaks in IE.
		div = null;
	})();


	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( elem ) {
		var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
			nodeType = +elem.nodeType || 1;

		// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
		return nodeType !== 1 && nodeType !== 9 ?
			false :

			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute("classid") === noData;
	};


	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {

			var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}

				// Make sure we set the data so it isn't changed later
				jQuery.data( elem, key, data );

			} else {
				data = undefined;
			}
		}

		return data;
	}

	// checks a cache object for emptiness
	function isEmptyDataObject( obj ) {
		var name;
		for ( name in obj ) {

			// if the public data object is empty, the private is still empty
			if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
				continue;
			}
			if ( name !== "toJSON" ) {
				return false;
			}
		}

		return true;
	}

	function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var ret, thisCache,
			internalKey = jQuery.expando,

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
			return;
		}

		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}

		if ( !cache[ id ] ) {
			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}

		thisCache = cache[ id ];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( typeof name === "string" ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	}

	function internalRemoveData( elem, name, pvt ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var thisCache, i,
			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ] : cache[ id ].data;

			if ( thisCache ) {

				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {

					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split(" ");
						}
					}
				} else {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat( jQuery.map( name, jQuery.camelCase ) );
				}

				i = name.length;
				while ( i-- ) {
					delete thisCache[ name[i] ];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}

		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );

		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		/* jshint eqeqeq: false */
		} else if ( support.deleteExpando || cache != cache.window ) {
			/* jshint eqeqeq: true */
			delete cache[ id ];

		// When all else fails, null
		} else {
			cache[ id ] = null;
		}
	}

	jQuery.extend({
		cache: {},

		// The following elements (space-suffixed to avoid Object.prototype collisions)
		// throw uncatchable exceptions if you attempt to set expando properties
		noData: {
			"applet ": true,
			"embed ": true,
			// ...but Flash objects (which have this classid) *can* handle expandos
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},

		hasData: function( elem ) {
			elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
			return !!elem && !isEmptyDataObject( elem );
		},

		data: function( elem, name, data ) {
			return internalData( elem, name, data );
		},

		removeData: function( elem, name ) {
			return internalRemoveData( elem, name );
		},

		// For internal use only.
		_data: function( elem, name, data ) {
			return internalData( elem, name, data, true );
		},

		_removeData: function( elem, name ) {
			return internalRemoveData( elem, name, true );
		}
	});

	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[0],
				attrs = elem && elem.attributes;

			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = jQuery.data( elem );

					if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
							name = attrs[i].name;

							if ( name.indexOf("data-") === 0 ) {
								name = jQuery.camelCase( name.slice(5) );

								dataAttr( elem, name, data[ name ] );
							}
						}
						jQuery._data( elem, "parsedAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					jQuery.data( this, key );
				});
			}

			return arguments.length > 1 ?

				// Sets one value
				this.each(function() {
					jQuery.data( this, key, value );
				}) :

				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
		},

		removeData: function( key ) {
			return this.each(function() {
				jQuery.removeData( this, key );
			});
		}
	});


	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = jQuery._data( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray(data) ) {
						queue = jQuery._data( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// not intended for public consumption - generates a queueHooks object, or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return jQuery._data( elem, key ) || jQuery._data( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					jQuery._removeData( elem, type + "queue" );
					jQuery._removeData( elem, key );
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}

			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );

					// ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = jQuery._data( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};



	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	};
	var rcheckableType = (/^(?:checkbox|radio)$/i);



	(function() {
		var fragment = document.createDocumentFragment(),
			div = document.createElement("div"),
			input = document.createElement("input");

		// Setup
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a>";

		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName( "tbody" ).length;

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone =
			document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild( input );
		support.appendChecked = input.checked;

		// Make sure textarea (and checkbox) defaultValue is properly cloned
		// Support: IE6-IE11+
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

		// #11217 - WebKit loses check when the name is after the checked attribute
		fragment.appendChild( div );
		div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<9
		// Opera does not clone events (and typeof div.attachEvent === undefined).
		// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
		support.noCloneEvent = true;
		if ( div.attachEvent ) {
			div.attachEvent( "onclick", function() {
				support.noCloneEvent = false;
			});

			div.cloneNode( true ).click();
		}

		// Execute the test only if not already executed in another module.
		if (support.deleteExpando == null) {
			// Support: IE<9
			support.deleteExpando = true;
			try {
				delete div.test;
			} catch( e ) {
				support.deleteExpando = false;
			}
		}

		// Null elements to avoid leaks in IE.
		fragment = div = input = null;
	})();


	(function() {
		var i, eventName,
			div = document.createElement( "div" );

		// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
		for ( i in { submit: true, change: true, focusin: true }) {
			eventName = "on" + i;

			if ( !(support[ i + "Bubbles" ] = eventName in window) ) {
				// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
				div.setAttribute( eventName, "t" );
				support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
			}
		}

		// Null elements to avoid leaks in IE.
		div = null;
	})();


	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};
				// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
				eventHandle.elem = elem;
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener/attachEvent if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						// Bind the global event handler to the element
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );

						} else if ( elem.attachEvent ) {
							elem.attachEvent( "on" + type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData( elem ) && jQuery._data( elem );

			if ( !elemData || !(events = elemData.events) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;

				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[ type ]();
						} catch ( e ) {
							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, ret, handleObj, matched, j,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or
					// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var sel, handleObj, matches, i,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

				/* jshint eqeqeq: false */
				for ( ; cur != this; cur = cur.parentNode || this ) {
					/* jshint eqeqeq: true */

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}

			return handlerQueue;
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: IE<9
			// Fix target property (#1925)
			if ( !event.target ) {
				event.target = originalEvent.srcElement || document;
			}

			// Support: Chrome 23+, Safari?
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add relatedTarget, if necessary
				if ( !event.relatedTarget && fromElement ) {
					event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						try {
							this.focus();
							return false;
						} catch ( e ) {
							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Even when returnValue equals to undefined Firefox will still show alert
					if ( event.result !== undefined ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = document.removeEventListener ?
		function( elem, type, handle ) {
			if ( elem.removeEventListener ) {
				elem.removeEventListener( type, handle, false );
			}
		} :
		function( elem, type, handle ) {
			var name = "on" + type;

			if ( elem.detachEvent ) {

				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event, to properly expose it to GC
				if ( typeof elem[ name ] === strundefined ) {
					elem[ name ] = null;
				}

				elem.detachEvent( name, handle );
			}
		};

	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined && (
					// Support: IE < 9
					src.returnValue === false ||
					// Support: Android < 4.0
					src.getPreventDefault && src.getPreventDefault() ) ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;
			if ( !e ) {
				return;
			}

			// If preventDefault exists, run it on the original event
			if ( e.preventDefault ) {
				e.preventDefault();

			// Support: IE
			// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;
			if ( !e ) {
				return;
			}
			// If stopPropagation exists, run it on the original event
			if ( e.stopPropagation ) {
				e.stopPropagation();
			}

			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = returnTrue;
			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// IE submit delegation
	if ( !support.submitBubbles ) {

		jQuery.event.special.submit = {
			setup: function() {
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
					if ( form && !jQuery._data( form, "submitBubbles" ) ) {
						jQuery.event.add( form, "submit._submit", function( event ) {
							event._submit_bubble = true;
						});
						jQuery._data( form, "submitBubbles", true );
					}
				});
				// return undefined since we don't need an event listener
			},

			postDispatch: function( event ) {
				// If form was submitted by the user, bubble the event up the tree
				if ( event._submit_bubble ) {
					delete event._submit_bubble;
					if ( this.parentNode && !event.isTrigger ) {
						jQuery.event.simulate( "submit", this.parentNode, event, true );
					}
				}
			},

			teardown: function() {
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove( this, "._submit" );
			}
		};
	}

	// IE change delegation and checkbox/radio fix
	if ( !support.changeBubbles ) {

		jQuery.event.special.change = {

			setup: function() {

				if ( rformElems.test( this.nodeName ) ) {
					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if ( this.type === "checkbox" || this.type === "radio" ) {
						jQuery.event.add( this, "propertychange._change", function( event ) {
							if ( event.originalEvent.propertyName === "checked" ) {
								this._just_changed = true;
							}
						});
						jQuery.event.add( this, "click._change", function( event ) {
							if ( this._just_changed && !event.isTrigger ) {
								this._just_changed = false;
							}
							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate( "change", this, event, true );
						});
					}
					return false;
				}
				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) {
					var elem = e.target;

					if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
						jQuery.event.add( elem, "change._change", function( event ) {
							if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
								jQuery.event.simulate( "change", this.parentNode, event, true );
							}
						});
						jQuery._data( elem, "changeBubbles", true );
					}
				});
			},

			handle: function( event ) {
				var elem = event.target;

				// Swallow native change events from checkbox/radio, we already triggered them above
				if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
					return event.handleObj.handler.apply( this, arguments );
				}
			},

			teardown: function() {
				jQuery.event.remove( this, "._change" );

				return !rformElems.test( this.nodeName );
			}
		};
	}

	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						jQuery._removeData( doc, fix );
					} else {
						jQuery._data( doc, fix, attaches );
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var type, origFn;

			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}

			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}

			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},

		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});


	function createSafeFragment( document ) {
		var list = nodeNames.split( "|" ),
			safeFrag = document.createDocumentFragment();

		if ( safeFrag.createElement ) {
			while ( list.length ) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}

	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
			"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		rleadingWhitespace = /^\s+/,
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rtbody = /<tbody/i,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
			option: [ 1, "<select multiple='multiple'>", "</select>" ],
			legend: [ 1, "<fieldset>", "</fieldset>" ],
			area: [ 1, "<map>", "</map>" ],
			param: [ 1, "<object>", "</object>" ],
			thead: [ 1, "<table>", "</table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

			// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
			// unless wrapped in a div with non-breaking characters in front of it.
			_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
		},
		safeFragment = createSafeFragment( document ),
		fragmentDiv = safeFragment.appendChild( document.createElement("div") );

	wrapMap.optgroup = wrapMap.option;
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	function getAll( context, tag ) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== strundefined ? context.querySelectorAll( tag || "*" ) :
				undefined;

		if ( !found ) {
			for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
				if ( !tag || jQuery.nodeName( elem, tag ) ) {
					found.push( elem );
				} else {
					jQuery.merge( found, getAll( elem, tag ) );
				}
			}
		}

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], found ) :
			found;
	}

	// Used in buildFragment, fixes the defaultChecked property
	function fixDefaultChecked( elem ) {
		if ( rcheckableType.test( elem.type ) ) {
			elem.defaultChecked = elem.checked;
		}
	}

	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
		if ( match ) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}
		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var elem,
			i = 0;
		for ( ; (elem = elems[i]) != null; i++ ) {
			jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
		}
	}

	function cloneCopyEvent( src, dest ) {

		if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
			return;
		}

		var type, i, l,
			oldData = jQuery._data( src ),
			curData = jQuery._data( dest, oldData ),
			events = oldData.events;

		if ( events ) {
			delete curData.handle;
			curData.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}

		// make the cloned public data object a copy from the original
		if ( curData.data ) {
			curData.data = jQuery.extend( {}, curData.data );
		}
	}

	function fixCloneNodeIssues( src, dest ) {
		var nodeName, e, data;

		// We do not need to do anything for non-Elements
		if ( dest.nodeType !== 1 ) {
			return;
		}

		nodeName = dest.nodeName.toLowerCase();

		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
			data = jQuery._data( dest );

			for ( e in data.events ) {
				jQuery.removeEvent( dest, e, data.handle );
			}

			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute( jQuery.expando );
		}

		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if ( nodeName === "script" && dest.text !== src.text ) {
			disableScript( dest ).text = src.text;
			restoreScript( dest );

		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if ( nodeName === "object" ) {
			if ( dest.parentNode ) {
				dest.outerHTML = src.outerHTML;
			}

			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
				dest.innerHTML = src.innerHTML;
			}

		} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set

			dest.defaultChecked = dest.checked = src.checked;

			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if ( dest.value !== src.value ) {
				dest.value = src.value;
			}

		// IE6-8 fails to return the selected option to the default selected
		// state when cloning options
		} else if ( nodeName === "option" ) {
			dest.defaultSelected = dest.selected = src.defaultSelected;

		// IE6-8 fails to set the defaultValue to the correct value when
		// cloning other types of input fields
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains( elem.ownerDocument, elem );

			if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
				clone = elem.cloneNode( true );

			// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
			}

			if ( (!support.noCloneEvent || !support.noCloneChecked) &&
					(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				// Fix all IE cloning issues
				for ( i = 0; (node = srcElements[i]) != null; ++i ) {
					// Ensure that the destination node is not null; Fixes #9587
					if ( destElements[i] ) {
						fixCloneNodeIssues( node, destElements[i] );
					}
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0; (node = srcElements[i]) != null; i++ ) {
						cloneCopyEvent( node, destElements[i] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			destElements = srcElements = node = null;

			// Return the cloned set
			return clone;
		},

		buildFragment: function( elems, context, scripts, selection ) {
			var j, elem, contains,
				tmp, tag, tbody, wrap,
				l = elems.length,

				// Ensure a safe fragment
				safe = createSafeFragment( context ),

				nodes = [],
				i = 0;

			for ( ; i < l; i++ ) {
				elem = elems[ i ];

				if ( elem || elem === 0 ) {

					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );

					// Convert html into DOM nodes
					} else {
						tmp = tmp || safe.appendChild( context.createElement("div") );

						// Deserialize a standard representation
						tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;

						tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

						// Descend through wrappers to the right content
						j = wrap[0];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}

						// Manually add leading whitespace removed by IE
						if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
							nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
						}

						// Remove IE's autoinserted <tbody> from table fragments
						if ( !support.tbody ) {

							// String was a <table>, *may* have spurious <tbody>
							elem = tag === "table" && !rtbody.test( elem ) ?
								tmp.firstChild :

								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !rtbody.test( elem ) ?
									tmp :
									0;

							j = elem && elem.childNodes.length;
							while ( j-- ) {
								if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
									elem.removeChild( tbody );
								}
							}
						}

						jQuery.merge( nodes, tmp.childNodes );

						// Fix #12392 for WebKit and IE > 9
						tmp.textContent = "";

						// Fix #12392 for oldIE
						while ( tmp.firstChild ) {
							tmp.removeChild( tmp.firstChild );
						}

						// Remember the top-level container for proper cleanup
						tmp = safe.lastChild;
					}
				}
			}

			// Fix #11356: Clear elements from fragment
			if ( tmp ) {
				safe.removeChild( tmp );
			}

			// Reset defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			if ( !support.appendChecked ) {
				jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
			}

			i = 0;
			while ( (elem = nodes[ i++ ]) ) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}

				contains = jQuery.contains( elem.ownerDocument, elem );

				// Append to fragment
				tmp = getAll( safe.appendChild( elem ), "script" );

				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}

				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}

			tmp = null;

			return safe;
		},

		cleanData: function( elems, /* internal */ acceptData ) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				deleteExpando = support.deleteExpando,
				special = jQuery.event.special;

			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( acceptData || jQuery.acceptData( elem ) ) {

					id = elem[ internalKey ];
					data = id && cache[ id ];

					if ( data ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Remove cache only if it was not already removed by jQuery.event.remove
						if ( cache[ id ] ) {

							delete cache[ id ];

							// IE does not allow us to delete expando properties from nodes,
							// nor does it have a removeAttribute function on Document nodes;
							// we must handle all of these cases
							if ( deleteExpando ) {
								delete elem[ internalKey ];

							} else if ( typeof elem.removeAttribute !== strundefined ) {
								elem.removeAttribute( internalKey );

							} else {
								elem[ internalKey ] = null;
							}

							deletedIds.push( id );
						}
					}
				}
			}
		}
	});

	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
			}, null, value, arguments.length );
		},

		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},

		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},

		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},

		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},

		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;

			for ( ; (elem = elems[i]) != null; i++ ) {

				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}

			return this;
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; (elem = this[i]) != null; i++ ) {
				// Remove element nodes and prevent memory leaks
				if ( elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem, false ) );
				}

				// Remove any remaining nodes
				while ( elem.firstChild ) {
					elem.removeChild( elem.firstChild );
				}

				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
					elem.options.length = 0;
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined ) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace( rinlinejQuery, "" ) :
						undefined;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
					( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
					!wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) {

					value = value.replace( rxhtmlTag, "<$1></$2>" );

					try {
						for (; i < l; i++ ) {
							// Remove element nodes and prevent memory leaks
							elem = this[i] || {};
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch(e) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var arg = arguments[ 0 ];

			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;

				jQuery.cleanData( getAll( this ) );

				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});

			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},

		detach: function( selector ) {
			return this.remove( selector, true );
		},

		domManip: function( args, callback ) {

			// Flatten any nested arrays
			args = concat.apply( [], args );

			var first, node, hasScripts,
				scripts, doc, fragment,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[0],
				isFunction = jQuery.isFunction( value );

			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[0] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}

			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;

				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}

				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;

						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );

							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}

						callback.call( this[i], node, i );
					}

					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;

						// Reenable scripts
						jQuery.map( scripts, restoreScript );

						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
								}
							}
						}
					}

					// Fix #11809: Avoid leaking memory
					fragment = first = null;
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				i = 0,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone(true);
				jQuery( insert[i] )[ original ]( elems );

				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	});


	var iframe,
		elemdisplay = {};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle ?

				// Use of this method is a temporary fix (more like optmization) until something better comes along,
				// since it was removed from specification and supported only in FF
				window.getDefaultComputedStyle( elem[ 0 ] ).display : jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}


	(function() {
		var a, shrinkWrapBlocksVal,
			div = document.createElement( "div" ),
			divReset =
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;padding:0;margin:0;border:0";

		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName( "a" )[ 0 ];

		a.style.cssText = "float:left;opacity:.5";

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		support.opacity = /^0.5/.test( a.style.opacity );

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!a.style.cssFloat;

		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		// Null elements to avoid leaks in IE.
		a = div = null;

		support.shrinkWrapBlocks = function() {
			var body, container, div, containerStyles;

			if ( shrinkWrapBlocksVal == null ) {
				body = document.getElementsByTagName( "body" )[ 0 ];
				if ( !body ) {
					// Test fired too early or in an unsupported environment, exit.
					return;
				}

				containerStyles = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
				container = document.createElement( "div" );
				div = document.createElement( "div" );

				body.appendChild( container ).appendChild( div );

				// Will be changed later if needed.
				shrinkWrapBlocksVal = false;

				if ( typeof div.style.zoom !== strundefined ) {
					// Support: IE6
					// Check if elements with layout shrink-wrap their children
					div.style.cssText = divReset + ";width:1px;padding:1px;zoom:1";
					div.innerHTML = "<div></div>";
					div.firstChild.style.width = "5px";
					shrinkWrapBlocksVal = div.offsetWidth !== 3;
				}

				body.removeChild( container );

				// Null elements to avoid leaks in IE.
				body = container = div = null;
			}

			return shrinkWrapBlocksVal;
		};

	})();
	var rmargin = (/^margin/);

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );



	var getStyles, curCSS,
		rposition = /^(top|right|bottom|left)$/;

	if ( window.getComputedStyle ) {
		getStyles = function( elem ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		};

		curCSS = function( elem, name, computed ) {
			var width, minWidth, maxWidth, ret,
				style = elem.style;

			computed = computed || getStyles( elem );

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

			if ( computed ) {

				if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
					ret = jQuery.style( elem, name );
				}

				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
				// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
				if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "";
		};
	} else if ( document.documentElement.currentStyle ) {
		getStyles = function( elem ) {
			return elem.currentStyle;
		};

		curCSS = function( elem, name, computed ) {
			var left, rs, rsLeft, ret,
				style = elem.style;

			computed = computed || getStyles( elem );
			ret = computed ? computed[ name ] : undefined;

			// Avoid setting ret to empty string here
			// so we don't default to auto
			if ( ret == null && style && style[ name ] ) {
				ret = style[ name ];
			}

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are proportional to the parent element instead
			// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
			if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;

				// Put in the new values to get a computed value out
				if ( rsLeft ) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				if ( rsLeft ) {
					rs.left = rsLeft;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "" || "auto";
		};
	}




	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				var condition = conditionFn();

				if ( condition == null ) {
					// The test was not ready at this point; screw the hook this time
					// but check again when needed next time.
					return;
				}

				if ( condition ) {
					// Hook not needed (or it's not possible to use it due to missing dependency),
					// remove it.
					// Since there are no other hooks for marginRight, remove the whole object.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.

				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}


	(function() {
		var a, reliableHiddenOffsetsVal, boxSizingVal, boxSizingReliableVal,
			pixelPositionVal, reliableMarginRightVal,
			div = document.createElement( "div" ),
			containerStyles = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
			divReset =
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;padding:0;margin:0;border:0";

		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName( "a" )[ 0 ];

		a.style.cssText = "float:left;opacity:.5";

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		support.opacity = /^0.5/.test( a.style.opacity );

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!a.style.cssFloat;

		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		// Null elements to avoid leaks in IE.
		a = div = null;

		jQuery.extend(support, {
			reliableHiddenOffsets: function() {
				if ( reliableHiddenOffsetsVal != null ) {
					return reliableHiddenOffsetsVal;
				}

				var container, tds, isSupported,
					div = document.createElement( "div" ),
					body = document.getElementsByTagName( "body" )[ 0 ];

				if ( !body ) {
					// Return for frameset docs that don't have a body
					return;
				}

				// Setup
				div.setAttribute( "className", "t" );
				div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

				container = document.createElement( "div" );
				container.style.cssText = containerStyles;

				body.appendChild( container ).appendChild( div );

				// Support: IE8
				// Check if table cells still have offsetWidth/Height when they are set
				// to display:none and there are still other visible table cells in a
				// table row; if so, offsetWidth/Height are not reliable for use when
				// determining if an element has been hidden directly using
				// display:none (it is still safe to use offsets if a parent element is
				// hidden; don safety goggles and see bug #4512 for more information).
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				tds = div.getElementsByTagName( "td" );
				tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
				isSupported = ( tds[ 0 ].offsetHeight === 0 );

				tds[ 0 ].style.display = "";
				tds[ 1 ].style.display = "none";

				// Support: IE8
				// Check if empty table cells still have offsetWidth/Height
				reliableHiddenOffsetsVal = isSupported && ( tds[ 0 ].offsetHeight === 0 );

				body.removeChild( container );

				// Null elements to avoid leaks in IE.
				div = body = null;

				return reliableHiddenOffsetsVal;
			},

			boxSizing: function() {
				if ( boxSizingVal == null ) {
					computeStyleTests();
				}
				return boxSizingVal;
			},

			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},

			pixelPosition: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},

			reliableMarginRight: function() {
				var body, container, div, marginDiv;

				// Use window.getComputedStyle because jsdom on node.js will break without it.
				if ( reliableMarginRightVal == null && window.getComputedStyle ) {
					body = document.getElementsByTagName( "body" )[ 0 ];
					if ( !body ) {
						// Test fired too early or in an unsupported environment, exit.
						return;
					}

					container = document.createElement( "div" );
					div = document.createElement( "div" );
					container.style.cssText = containerStyles;

					body.appendChild( container ).appendChild( div );

					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// Fails in WebKit before Feb 2011 nightlies
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					marginDiv = div.appendChild( document.createElement( "div" ) );
					marginDiv.style.cssText = div.style.cssText = divReset;
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";

					reliableMarginRightVal =
						!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );

					body.removeChild( container );
				}

				return reliableMarginRightVal;
			}
		});

		function computeStyleTests() {
			var container, div,
				body = document.getElementsByTagName( "body" )[ 0 ];

			if ( !body ) {
				// Test fired too early or in an unsupported environment, exit.
				return;
			}

			container = document.createElement( "div" );
			div = document.createElement( "div" );
			container.style.cssText = containerStyles;

			body.appendChild( container ).appendChild( div );

			div.style.cssText =
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
					"position:absolute;display:block;padding:1px;border:1px;width:4px;" +
					"margin-top:1%;top:1%";

			// Workaround failing boxSizing test due to offsetWidth returning wrong value
			// with some non-1 values of body zoom, ticket #13543
			jQuery.swap( body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
				boxSizingVal = div.offsetWidth === 4;
			});

			// Will be changed later if needed.
			boxSizingReliableVal = true;
			pixelPositionVal = false;
			reliableMarginRightVal = true;

			// Use window.getComputedStyle because jsdom on node.js will break without it.
			if ( window.getComputedStyle ) {
				pixelPositionVal = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
				boxSizingReliableVal =
					( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";
			}

			body.removeChild( container );

			// Null elements to avoid leaks in IE.
			div = body = null;
		}

	})();


	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var
			ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/,

		// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: 0,
			fontWeight: 400
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];


	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {

		// shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}

		// check for vendor prefixed names
		var capName = name.charAt(0).toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}

		return origName;
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = jQuery._data( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {

				if ( !values[ index ] ) {
					hidden = isHidden( elem );

					if ( display && display !== "none" || !hidden ) {
						jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
					}
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {
			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = support.boxSizing() && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}

			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && ( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend({
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			// normalize float css property
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// convert relative number strings (+= or -=) to relative numbers. #7345
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set. See: #7116
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}

				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight (for every problematic property) identical functions
				if ( !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

					// Support: IE
					// Swallow errors from 'invalid' CSS values (#5509)
					try {
						// Support: Chrome, Safari
						// Setting style to blank string required to delete "style: x !important;"
						style[ name ] = "";
						style[ name ] = value;
					} catch(e) {}
				}

			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var num, val, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						support.boxSizing() && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	if ( !support.opacity ) {
		jQuery.cssHooks.opacity = {
			get: function( elem, computed ) {
				// IE uses filters for opacity
				return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
			},

			set: function( elem, value ) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";

				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;

				// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {

					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute( "filter" );

					// if there is no filter style applied in a css rule or unset inline opacity, we are done
					if ( value === "" || currentStyle && !currentStyle.filter ) {
						return;
					}
				}

				// otherwise, set new filter values
				style.filter = ralpha.test( filter ) ?
					filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
			}
		};
	}

	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}

				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;

				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}

				return tween;
			} ]
		};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			attrs = { height: type },
			i = 0;

		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {

				// we're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, dDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = jQuery._data( elem, "fxshow" );

		// handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function() {
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}

		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
			dDisplay = defaultDisplay( elem.nodeName );
			if ( display === "none" ) {
				display = dDisplay;
			}
			if ( display === "inline" &&
					jQuery.css( elem, "float" ) === "none" ) {

				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if ( !support.inlineBlockNeedsLayout || dDisplay === "inline" ) {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			if ( !support.shrinkWrapBlocks() ) {
				anim.always(function() {
					style.overflow = opts.overflow[ 0 ];
					style.overflowX = opts.overflow[ 1 ];
					style.overflowY = opts.overflow[ 2 ];
				});
			}
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data( elem, "fxshow", {} );
			}

			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;
				jQuery._removeData( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ]);

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// resolve when we played the last frame
					// otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {

			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || jQuery._data( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = jQuery._data( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// enable finishing flag on private data
				data.finish = true;

				// empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			timers = jQuery.timers,
			i = 0;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};


	(function() {
		var a, input, select, opt,
			div = document.createElement("div" );

		// Setup
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName("a")[ 0 ];

		// First batch of tests.
		select = document.createElement("select");
		opt = select.appendChild( document.createElement("option") );
		input = div.getElementsByTagName("input")[ 0 ];

		a.style.cssText = "top:1px";

		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test( a.getAttribute("style") );

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute("href") === "/a";

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;

		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement("form").enctype;

		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE8 only
		// Check if we can trust getAttribute("value")
		input = document.createElement( "input" );
		input.setAttribute( "value", "" );
		support.input = input.getAttribute( "value" ) === "";

		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";

		// Null elements to avoid leaks in IE.
		a = input = select = opt = div = null;
	})();


	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
						// handle most common string cases
						ret.replace(rreturn, "") :
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each(function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						jQuery.text( elem );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// oldIE doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

							// Support: IE6
							// When new option element is added to select box we need to
							// force reflow of newly added node in order to workaround delay
							// of initialization properties
							try {
								option.selected = optionSet = true;

							} catch ( _ ) {

								// Will be executed only in IE6
								option.scrollHeight;
							}

						} else {
							option.selected = false;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}

					return options;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				// Support: Webkit
				// "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});




	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = support.getSetAttribute,
		getSetInput = support.input;

	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});

	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {

				if ( value === null ) {
					jQuery.removeAttr( elem, name );

				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;

				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}

			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				ret = jQuery.find.attr( elem, name );

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
							elem[ propName ] = false;
						// Support: IE<9
						// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[ jQuery.camelCase( "default-" + name ) ] =
								elem[ propName ] = false;
						}

					// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr( elem, name, "" );
					}

					elem.removeAttribute( getSetAttribute ? name : propName );
				}
			}
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
						// Setting the type on a radio button after the value resets the value in IE6-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});

	// Hook for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
				// IE<8 needs the *property* name
				elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

			// Use defaultChecked and defaultSelected for oldIE
			} else {
				elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
			}

			return name;
		}
	};

	// Retrieve booleans specially
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {

		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
			function( elem, name, isXML ) {
				var ret, handle;
				if ( !isXML ) {
					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[ name ];
					attrHandle[ name ] = ret;
					ret = getter( elem, name, isXML ) != null ?
						name.toLowerCase() :
						null;
					attrHandle[ name ] = handle;
				}
				return ret;
			} :
			function( elem, name, isXML ) {
				if ( !isXML ) {
					return elem[ jQuery.camelCase( "default-" + name ) ] ?
						name.toLowerCase() :
						null;
				}
			};
	});

	// fix oldIE attroperties
	if ( !getSetInput || !getSetAttribute ) {
		jQuery.attrHooks.value = {
			set: function( elem, value, name ) {
				if ( jQuery.nodeName( elem, "input" ) ) {
					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {
					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set( elem, value, name );
				}
			}
		};
	}

	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if ( !getSetAttribute ) {

		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function( elem, value, name ) {
				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode( name );
				if ( !ret ) {
					elem.setAttributeNode(
						(ret = elem.ownerDocument.createAttribute( name ))
					);
				}

				ret.value = value += "";

				// Break association with cloned elements by also using setAttribute (#9646)
				if ( name === "value" || value === elem.getAttribute( name ) ) {
					return value;
				}
			}
		};

		// Some attributes are constructed with empty-string values when not defined
		attrHandle.id = attrHandle.name = attrHandle.coords =
			function( elem, name, isXML ) {
				var ret;
				if ( !isXML ) {
					return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
						ret.value :
						null;
				}
			};

		// Fixing value retrieval on a button requires this module
		jQuery.valHooks.button = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				if ( ret && ret.specified ) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};

		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function( elem, value, name ) {
				nodeHook.set( elem, value === "" ? false : value, name );
			}
		};

		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each([ "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = {
				set: function( elem, value ) {
					if ( value === "" ) {
						elem.setAttribute( name, "auto" );
						return value;
					}
				}
			};
		});
	}

	if ( !support.style ) {
		jQuery.attrHooks.style = {
			get: function( elem ) {
				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case senstitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function( elem, value ) {
				return ( elem.style.cssText = value + "" );
			}
		};
	}




	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			name = jQuery.propFix[ name ] || name;
			return this.each(function() {
				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[ name ] = undefined;
					delete this[ name ];
				} catch( e ) {}
			});
		}
	});

	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;

			// don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );

			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {
					// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
				}
			}
		}
	});

	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !support.hrefNormalized ) {
		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each([ "href", "src" ], function( i, name ) {
			jQuery.propHooks[ name ] = {
				get: function( elem ) {
					return elem.getAttribute( name, 4 );
				}
			};
		});
	}

	// Support: Safari, IE9+
	// mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;

				if ( parent ) {
					parent.selectedIndex;

					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});

	// IE6/7 call enctype encoding
	if ( !support.enctype ) {
		jQuery.propFix.enctype = "encoding";
	}




	var rclass = /[\t\r\n\f]/g;

	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				i = 0,
				len = this.length,
				proceed = typeof value === "string" && value;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}

			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				i = 0,
				len = this.length,
				proceed = arguments.length === 0 || typeof value === "string" && value;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}

			return this.each(function() {
				if ( type === "string" ) {
					// toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];

					while ( (className = classNames[ i++ ]) ) {
						// check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						jQuery._data( this, "__className__", this.className );
					}

					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
				}
			});
		},

		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}

			return false;
		}
	});




	// Return jQuery for attributes-only inclusion


	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});

	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});


	var nonce = jQuery.now();

	var rquery = (/\?/);



	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

	jQuery.parseJSON = function( data ) {
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			// Support: Android 2.3
			// Workaround failure to string-cast null input
			return window.JSON.parse( data + "" );
		}

		var requireNonComma,
			depth = null,
			str = jQuery.trim( data + "" );

		// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
		// after removing valid tokens
		return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

			// Force termination if we see a misplaced comma
			if ( requireNonComma && comma ) {
				depth = 0;
			}

			// Perform no more replacements after returning to outermost depth
			if ( depth === 0 ) {
				return token;
			}

			// Commas must not follow "[", "{", or ","
			requireNonComma = open || comma;

			// Determine new depth
			// array/object open ("[" or "{"): depth += true - false (increment)
			// array/object close ("]" or "}"): depth += false - true (decrement)
			// other cases ("," or primitive): depth += true - true (numeric cast)
			depth += !close - !open;

			// Remove this token
			return "";
		}) ) ?
			( Function( "return " + str ) )() :
			jQuery.error( "Invalid JSON: " + data );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data, "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		// Document location
		ajaxLocParts,
		ajaxLocation,

		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*");

	// #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try {
		ajaxLocation = location.href;
	} catch( e ) {
		// Use the href attribute of an A element
		// since IE will modify it given document.location
		ajaxLocation = document.createElement( "a" );
		ajaxLocation.href = "";
		ajaxLocation = ajaxLocation.href;
	}

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType.charAt( 0 ) === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var deep, key,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
		var firstDataType, ct, finalDataType, type,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var // Cross-domain detection vars
				parts,
				// Loop variable
				i,
				// URL without anti-cache param
				cacheURL,
				// Response headers as string
				responseHeadersString,
				// timeout handle
				timeoutTimer,

				// To know if global events are to be dispatched
				fireGlobals,

				transport,
				// Response headers
				responseHeaders,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			fireGlobals = s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};


	jQuery.fn.extend({
		wrapAll: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function(i) {
					jQuery(this).wrapAll( html.call(this, i) );
				});
			}

			if ( this[0] ) {
				// The elements to wrap the target around
				var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

				if ( this[0].parentNode ) {
					wrap.insertBefore( this[0] );
				}

				wrap.map(function() {
					var elem = this;

					while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
						elem = elem.firstChild;
					}

					return elem;
				}).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function(i) {
					jQuery(this).wrapInner( html.call(this, i) );
				});
			}

			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			});
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each(function(i) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},

		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});


	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
			(!support.reliableHiddenOffsets() &&
				((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );

				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;
				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});


	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
		// Support: IE6+
		function() {

			// XHR cannot access local files, always use ActiveX for that case
			return !this.isLocal &&

				// Support: IE7-8
				// oldIE XHR does not support non-RFC2616 methods (#13240)
				// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
				// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
				// Although this check for six methods instead of eight
				// since IE also does not support "trace" and "connect"
				/^(get|post|head|put|delete|options)$/i.test( this.type ) &&

				createStandardXHR() || createActiveXHR();
		} :
		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	if ( window.ActiveXObject ) {
		jQuery( window ).on( "unload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]( undefined, true );
			}
		});
	}

	// Determine support properties
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	xhrSupported = support.ajax = !!xhrSupported;

	// Create transport if the browser can provide an xhr
	if ( xhrSupported ) {

		jQuery.ajaxTransport(function( options ) {
			// Cross domain only allowed if supported through XMLHttpRequest
			if ( !options.crossDomain || support.cors ) {

				var callback;

				return {
					send: function( headers, complete ) {
						var i,
							xhr = options.xhr(),
							id = ++xhrId;

						// Open the socket
						xhr.open( options.type, options.url, options.async, options.username, options.password );

						// Apply custom fields if provided
						if ( options.xhrFields ) {
							for ( i in options.xhrFields ) {
								xhr[ i ] = options.xhrFields[ i ];
							}
						}

						// Override mime type if needed
						if ( options.mimeType && xhr.overrideMimeType ) {
							xhr.overrideMimeType( options.mimeType );
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if ( !options.crossDomain && !headers["X-Requested-With"] ) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						// Set headers
						for ( i in headers ) {
							// Support: IE<9
							// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
							// request header to a null-value.
							//
							// To keep consistent with other XHR implementations, cast the value
							// to string and ignore `undefined`.
							if ( headers[ i ] !== undefined ) {
								xhr.setRequestHeader( i, headers[ i ] + "" );
							}
						}

						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send( ( options.hasContent && options.data ) || null );

						// Listener
						callback = function( _, isAbort ) {
							var status, statusText, responses;

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
								// Clean up
								delete xhrCallbacks[ id ];
								callback = undefined;
								xhr.onreadystatechange = jQuery.noop;

								// Abort manually if needed
								if ( isAbort ) {
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;

									// Support: IE<10
									// Accessing binary-data responseText throws an exception
									// (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && options.isLocal && !options.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}

							// Call complete if needed
							if ( responses ) {
								complete( status, statusText, responses, xhr.getAllResponseHeaders() );
							}
						};

						if ( !options.async ) {
							// if we're in sync mode we fire the callback
							callback();
						} else if ( xhr.readyState === 4 ) {
							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							setTimeout( callback );
						} else {
							// Add to the list of active xhr callbacks
							xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
						}
					},

					abort: function() {
						if ( callback ) {
							callback( undefined, true );
						}
					}
				};
			}
		});
	}

	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch( e ) {}
	}

	function createActiveXHR() {
		try {
			return new window.ActiveXObject( "Microsoft.XMLHTTP" );
		} catch( e ) {}
	}




	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});

	// Handle cache's special case and global
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
			s.global = false;
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function(s) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {

			var script,
				head = document.head || jQuery("head")[0] || document.documentElement;

			return {

				send: function( _, callback ) {

					script = document.createElement("script");

					script.async = true;

					if ( s.scriptCharset ) {
						script.charset = s.scriptCharset;
					}

					script.src = s.url;

					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function( _, isAbort ) {

						if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;

							// Remove the script
							if ( script.parentNode ) {
								script.parentNode.removeChild( script );
							}

							// Dereference the script
							script = null;

							// Callback if not abort
							if ( !isAbort ) {
								callback( 200, "success" );
							}
						}
					};

					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore( script, head.firstChild );
				},

				abort: function() {
					if ( script ) {
						script.onload( undefined, true );
					}
				}
			};
		}
	});




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;

				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, response, type,
			self = this,
			off = url.indexOf(" ");

		if ( off >= 0 ) {
			selector = url.slice( off, url.length );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}

		return this;
	};




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};





	var docElem = window.document.documentElement;

	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;

			// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );
			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}

			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[ 0 ],
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
				left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[ 0 ];

			// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
			};
		},

		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = /Y/.test( prop );

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? (prop in win) ? win[ prop ] :
						win.document.documentElement[ method ] :
						elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : jQuery( win ).scrollLeft(),
						top ? val : jQuery( win ).scrollTop()
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});

	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});


	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return jQuery;
		}.apply(null, __WEBPACK_AMD_DEFINE_ARRAY__)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;

	}));


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1),
	    Parse = __webpack_require__(5).Parse;

	/**
	 * Project entity
	 */

	CommittedApp.module('Entities', function (Entities, CommittedApp, Backbone, Marionette, $, _) {
	    Entities.Project = Parse.Object.extend({
	        className: 'Project',
	        defaults: {
	            name: 'Un-named project'
	        }
	    });

	    module.exports = Entities.Project;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1),
	    Parse = __webpack_require__(5).Parse,
	    Project = __webpack_require__(16);

	CommittedApp.module('Entities', function (Entities, CommittedApp, Backbone, Marionette, $, _) {
	    Entities.Projects = Parse.Collection.extend({
	        model: Project
	    });

	    module.exports = Entities.Projects;
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Backbone.Syphon, v0.4.1
	// Copyright (c)2012 Derick Bailey, Muted Solutions, LLC.
	// Distributed under MIT license
	// http://github.com/derickbailey/backbone.syphon
	(function (root, factory) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(11), __webpack_require__(15), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = (factory.apply(null, __WEBPACK_AMD_DEFINE_ARRAY__)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	}(this, function (_, jQuery, Backbone) {
	  Backbone.Syphon = (function(Backbone, $, _){
	    var Syphon = {};
	  
	    // Ignore Element Types
	    // --------------------
	  
	    // Tell Syphon to ignore all elements of these types. You can
	    // push new types to ignore directly in to this array.
	    Syphon.ignoredTypes = ["button", "submit", "reset", "fieldset"];
	  
	    // Syphon
	    // ------
	  
	    // Get a JSON object that represents
	    // all of the form inputs, in this view.
	    // Alternately, pass a form element directly
	    // in place of the view.
	    Syphon.serialize = function(view, options){
	      var data = {};
	  
	      // Build the configuration
	      var config = buildConfig(options);
	  
	      // Get all of the elements to process
	      var elements = getInputElements(view, config);
	  
	      // Process all of the elements
	      _.each(elements, function(el){
	        var $el = $(el);
	        var type = getElementType($el); 
	  
	        // Get the key for the input
	        var keyExtractor = config.keyExtractors.get(type);
	        var key = keyExtractor($el);
	  
	        // Get the value for the input
	        var inputReader = config.inputReaders.get(type);
	        var value = inputReader($el);
	  
	        // Get the key assignment validator and make sure
	        // it's valid before assigning the value to the key
	        var validKeyAssignment = config.keyAssignmentValidators.get(type);
	        if (validKeyAssignment($el, key, value)){
	          var keychain = config.keySplitter(key);
	          data = assignKeyValue(data, keychain, value);
	        }
	      });
	  
	      // Done; send back the results.
	      return data;
	    };
	    
	    // Use the given JSON object to populate
	    // all of the form inputs, in this view.
	    // Alternately, pass a form element directly
	    // in place of the view.
	    Syphon.deserialize = function(view, data, options){
	      // Build the configuration
	      var config = buildConfig(options);
	  
	      // Get all of the elements to process
	      var elements = getInputElements(view, config);
	  
	      // Flatten the data structure that we are deserializing
	      var flattenedData = flattenData(config, data);
	  
	      // Process all of the elements
	      _.each(elements, function(el){
	        var $el = $(el);
	        var type = getElementType($el); 
	  
	        // Get the key for the input
	        var keyExtractor = config.keyExtractors.get(type);
	        var key = keyExtractor($el);
	  
	        // Get the input writer and the value to write
	        var inputWriter = config.inputWriters.get(type);
	        var value = flattenedData[key];
	  
	        // Write the value to the input
	        inputWriter($el, value);
	      });
	    };
	  
	    // Helpers
	    // -------
	  
	    // Retrieve all of the form inputs
	    // from the form
	    var getInputElements = function(view, config){
	      var form = getForm(view);
	      var elements = form.elements;
	  
	      elements = _.reject(elements, function(el){
	        var reject;
	        var type = getElementType(el);
	        var extractor = config.keyExtractors.get(type);
	        var identifier = extractor($(el));
	       
	        var foundInIgnored = _.include(config.ignoredTypes, type);
	        var foundInInclude = _.include(config.include, identifier);
	        var foundInExclude = _.include(config.exclude, identifier);
	  
	        if (foundInInclude){
	          reject = false;
	        } else {
	          if (config.include){
	            reject = true;
	          } else {
	            reject = (foundInExclude || foundInIgnored);
	          }
	        }
	  
	        return reject;
	      });
	  
	      return elements;
	    };
	  
	    // Determine what type of element this is. It
	    // will either return the `type` attribute of
	    // an `<input>` element, or the `tagName` of
	    // the element when the element is not an `<input>`.
	    var getElementType = function(el){
	      var typeAttr;
	      var $el = $(el);
	      var tagName = $el[0].tagName;
	      var type = tagName;
	  
	      if (tagName.toLowerCase() === "input"){
	        typeAttr = $el.attr("type");
	        if (typeAttr){
	          type = typeAttr;
	        } else {
	          type = "text";
	        }
	      }
	      
	      // Always return the type as lowercase
	      // so it can be matched to lowercase
	      // type registrations.
	      return type.toLowerCase();
	    };
	    
	    // If a form element is given, just return it. 
	    // Otherwise, get the form element from the view.
	    var getForm = function(viewOrForm){
	      if (_.isUndefined(viewOrForm.$el) && viewOrForm.tagName.toLowerCase() === 'form'){
	        return viewOrForm;
	      } else {
	        return viewOrForm.$el.is("form") ? viewOrForm.el : viewOrForm.$("form")[0];
	      }
	    };
	  
	    // Build a configuration object and initialize
	    // default values.
	    var buildConfig = function(options){
	      var config = _.clone(options) || {};
	      
	      config.ignoredTypes = _.clone(Syphon.ignoredTypes);
	      config.inputReaders = config.inputReaders || Syphon.InputReaders;
	      config.inputWriters = config.inputWriters || Syphon.InputWriters;
	      config.keyExtractors = config.keyExtractors || Syphon.KeyExtractors;
	      config.keySplitter = config.keySplitter || Syphon.KeySplitter;
	      config.keyJoiner = config.keyJoiner || Syphon.KeyJoiner;
	      config.keyAssignmentValidators = config.keyAssignmentValidators || Syphon.KeyAssignmentValidators;
	      
	      return config;
	    };
	  
	    // Assigns `value` to a parsed JSON key. 
	    //
	    // The first parameter is the object which will be
	    // modified to store the key/value pair.
	    //
	    // The second parameter accepts an array of keys as a 
	    // string with an option array containing a 
	    // single string as the last option.
	    //
	    // The third parameter is the value to be assigned.
	    //
	    // Examples:
	    //
	    // `["foo", "bar", "baz"] => {foo: {bar: {baz: "value"}}}`
	    // 
	    // `["foo", "bar", ["baz"]] => {foo: {bar: {baz: ["value"]}}}`
	    // 
	    // When the final value is an array with a string, the key
	    // becomes an array, and values are pushed in to the array,
	    // allowing multiple fields with the same name to be 
	    // assigned to the array.
	    var assignKeyValue = function(obj, keychain, value) {
	      if (!keychain){ return obj; }
	  
	      var key = keychain.shift();
	  
	      // build the current object we need to store data
	      if (!obj[key]){
	        obj[key] = _.isArray(key) ? [] : {};
	      }
	  
	      // if it's the last key in the chain, assign the value directly
	      if (keychain.length === 0){
	        if (_.isArray(obj[key])){
	          obj[key].push(value);
	        } else {
	          obj[key] = value;
	        }
	      }
	  
	      // recursive parsing of the array, depth-first
	      if (keychain.length > 0){
	        assignKeyValue(obj[key], keychain, value);
	      }
	      
	      return obj;
	    };
	  
	    // Flatten the data structure in to nested strings, using the
	    // provided `KeyJoiner` function.
	    //
	    // Example:
	    //
	    // This input:
	    //
	    // ```js
	    // {
	    //   widget: "wombat",
	    //   foo: {
	    //     bar: "baz",
	    //     baz: {
	    //       quux: "qux"
	    //     },
	    //     quux: ["foo", "bar"]
	    //   }
	    // }
	    // ```
	    //
	    // With a KeyJoiner that uses [ ] square brackets, 
	    // should produce this output:
	    //
	    // ```js
	    // {
	    //  "widget": "wombat",
	    //  "foo[bar]": "baz",
	    //  "foo[baz][quux]": "qux",
	    //  "foo[quux]": ["foo", "bar"]
	    // }
	    // ```
	    var flattenData = function(config, data, parentKey){
	      var flatData = {};
	  
	      _.each(data, function(value, keyName){
	        var hash = {};
	  
	        // If there is a parent key, join it with
	        // the current, child key.
	        if (parentKey){
	          keyName = config.keyJoiner(parentKey, keyName);
	        }
	  
	        if (_.isArray(value)){
	          keyName += "[]";
	          hash[keyName] = value;
	        } else if (_.isObject(value)){
	          hash = flattenData(config, value, keyName);
	        } else {
	          hash[keyName] = value;
	        }
	  
	        // Store the resulting key/value pairs in the
	        // final flattened data object
	        _.extend(flatData, hash);
	      });
	  
	      return flatData;
	    };
	  
	    return Syphon;
	  })(Backbone, jQuery, _);
	  
	  // Type Registry
	  // -------------
	  
	  // Type Registries allow you to register something to
	  // an input type, and retrieve either the item registered
	  // for a specific type or the default registration
	  Backbone.Syphon.TypeRegistry = function(){
	    this.registeredTypes = {};
	  };
	  
	  // Borrow Backbone's `extend` keyword for our TypeRegistry
	  Backbone.Syphon.TypeRegistry.extend = Backbone.Model.extend;
	  
	  _.extend(Backbone.Syphon.TypeRegistry.prototype, {
	  
	    // Get the registered item by type. If nothing is
	    // found for the specified type, the default is
	    // returned.
	    get: function(type){
	      var item = this.registeredTypes[type];
	  
	      if (!item){
	        item = this.registeredTypes["default"];
	      }
	  
	      return item;
	    },
	  
	    // Register a new item for a specified type
	    register: function(type, item){
	      this.registeredTypes[type] = item;
	    },
	  
	    // Register a default item to be used when no
	    // item for a specified type is found
	    registerDefault: function(item){
	      this.registeredTypes["default"] = item;
	    },
	  
	    // Remove an item from a given type registration
	    unregister: function(type){
	      if (this.registeredTypes[type]){
	        delete this.registeredTypes[type];
	      }
	    }
	  });
	  
	  
	  
	  
	  // Key Extractors
	  // --------------
	  
	  // Key extractors produce the "key" in `{key: "value"}`
	  // pairs, when serializing.
	  Backbone.Syphon.KeyExtractorSet = Backbone.Syphon.TypeRegistry.extend();
	  
	  // Built-in Key Extractors
	  Backbone.Syphon.KeyExtractors = new Backbone.Syphon.KeyExtractorSet();
	  
	  // The default key extractor, which uses the
	  // input element's "id" attribute
	  Backbone.Syphon.KeyExtractors.registerDefault(function($el){
	    return $el.prop("name");
	  });
	  
	  
	  // Input Readers
	  // -------------
	  
	  // Input Readers are used to extract the value from
	  // an input element, for the serialized object result
	  Backbone.Syphon.InputReaderSet = Backbone.Syphon.TypeRegistry.extend();
	  
	  // Built-in Input Readers
	  Backbone.Syphon.InputReaders = new Backbone.Syphon.InputReaderSet();
	  
	  // The default input reader, which uses an input
	  // element's "value"
	  Backbone.Syphon.InputReaders.registerDefault(function($el){
	    return $el.val();
	  });
	  
	  // Checkbox reader, returning a boolean value for
	  // whether or not the checkbox is checked.
	  Backbone.Syphon.InputReaders.register("checkbox", function($el){
	    var checked = $el.prop("checked");
	    return checked;
	  });
	  
	  
	  // Input Writers
	  // -------------
	  
	  // Input Writers are used to insert a value from an
	  // object into an input element.
	  Backbone.Syphon.InputWriterSet = Backbone.Syphon.TypeRegistry.extend();
	  
	  // Built-in Input Writers
	  Backbone.Syphon.InputWriters = new Backbone.Syphon.InputWriterSet();
	  
	  // The default input writer, which sets an input
	  // element's "value"
	  Backbone.Syphon.InputWriters.registerDefault(function($el, value){
	    $el.val(value);
	  });
	  
	  // Checkbox writer, set whether or not the checkbox is checked
	  // depending on the boolean value.
	  Backbone.Syphon.InputWriters.register("checkbox", function($el, value){
	    $el.prop("checked", value);
	  });
	  
	  // Radio button writer, set whether or not the radio button is
	  // checked.  The button should only be checked if it's value
	  // equals the given value.
	  Backbone.Syphon.InputWriters.register("radio", function($el, value){
	    $el.prop("checked", $el.val() === value);
	  });
	  
	  // Key Assignment Validators
	  // -------------------------
	  
	  // Key Assignment Validators are used to determine whether or not a
	  // key should be assigned to a value, after the key and value have been
	  // extracted from the element. This is the last opportunity to prevent
	  // bad data from getting serialized to your object.
	  
	  Backbone.Syphon.KeyAssignmentValidatorSet = Backbone.Syphon.TypeRegistry.extend();
	  
	  // Build-in Key Assignment Validators
	  Backbone.Syphon.KeyAssignmentValidators = new Backbone.Syphon.KeyAssignmentValidatorSet();
	  
	  // Everything is valid by default
	  Backbone.Syphon.KeyAssignmentValidators.registerDefault(function(){ return true; });
	  
	  // But only the "checked" radio button for a given
	  // radio button group is valid
	  Backbone.Syphon.KeyAssignmentValidators.register("radio", function($el, key, value){ 
	    return $el.prop("checked");
	  });
	  
	  
	  // Backbone.Syphon.KeySplitter
	  // ---------------------------
	  
	  // This function is used to split DOM element keys in to an array
	  // of parts, which are then used to create a nested result structure.
	  // returning `["foo", "bar"]` results in `{foo: { bar: "value" }}`.
	  //
	  // Override this method to use a custom key splitter, such as:
	  // `<input name="foo.bar.baz">`, `return key.split(".")`
	  Backbone.Syphon.KeySplitter = function(key){
	    var matches = key.match(/[^\[\]]+/g);
	  
	    if (key.indexOf("[]") === key.length - 2){
	      lastKey = matches.pop();
	      matches.push([lastKey]);
	    }
	  
	    return matches;
	  }
	  
	  
	  // Backbone.Syphon.KeyJoiner
	  // -------------------------
	  
	  // Take two segments of a key and join them together, to create the
	  // de-normalized key name, when deserializing a data structure back
	  // in to a form.
	  //
	  // Example: 
	  //
	  // With this data strucutre `{foo: { bar: {baz: "value", quux: "another"} } }`,
	  // the key joiner will be called with these parameters, and assuming the
	  // join happens with "[ ]" square brackets, the specified output:
	  // 
	  // `KeyJoiner("foo", "bar")` //=> "foo[bar]"
	  // `KeyJoiner("foo[bar]", "baz")` //=> "foo[bar][baz]"
	  // `KeyJoiner("foo[bar]", "quux")` //=> "foo[bar][quux]"
	  
	  Backbone.Syphon.KeyJoiner = function(parentKey, childKey){
	    return parentKey + "[" + childKey + "]";
	  }
	  
	  
	  return Backbone.Syphon;
	}));

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser

	var process = module.exports = {};

	process.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	    && window.setImmediate;
	    var canPost = typeof window !== 'undefined'
	    && window.postMessage && window.addEventListener
	    ;

	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f) };
	    }

	    if (canPost) {
	        var queue = [];
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);

	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }

	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();

	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];

	function noop() {}

	process.on = noop;
	process.once = noop;
	process.off = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	}

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1),
	    LoginView = __webpack_require__(23),
	    User = __webpack_require__(2);

	/**
	 * AuthApp.Show controller
	 */

	CommittedApp.module('AuthApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
	    Show.Controller = {
	        showLogin: function () {
	            var user = new User(),
	                loginView = new LoginView({
	                    model: user
	                });
	            CommittedApp.mainRegion.show(loginView);
	        }
	    };

	    module.exports = Show.Controller;
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Module dependencies
	 */

	var CommittedApp = __webpack_require__(1),
	    ProjectsView = __webpack_require__(24),
	    LoadingView = __webpack_require__(26);

	/**
	 * ProjectsApp.List controller
	 */

	CommittedApp.module('ProjectsApp.List', function (List, CommittedApp, Backbone, Marionette, $, _) {
	    List.Controller = {
	        listProjects: function () {
	            var fetchProjects = CommittedApp.request('project:entities');
	            var loadingView = new LoadingView();
	            CommittedApp.mainRegion.show(loadingView);

	            fetchProjects.then(function (projects) {
	                var projectsListView = new ProjectsView({
	                    collection: projects
	                });

	                setTimeout(function () {
	                    CommittedApp.mainRegion.show(projectsListView);
	                }, 2000);
	            }, function (error) {
	                console.log(error);
	            });
	        }
	    };

	    module.exports = List.Controller;
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1),
	    ProjectView = __webpack_require__(25),
	    LoadingView = __webpack_require__(26);

	/**
	 * Show controller
	 */

	CommittedApp.module('ProjectsApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
	    Show.Controller = {
	        showProject: function (id) {
	            var loadingView = new LoadingView();
	            CommittedApp.mainRegion.show(loadingView);

	            var fetchProject = CommittedApp.request('project:entity', id);

	            fetchProject.then(function (project) {
	                var projectView = new ProjectView({
	                    model: project
	                });
	                setTimeout(function () {
	                    CommittedApp.mainRegion.show(projectView);
	                }, 2000);
	            }, function (error) {
	                console.log(error);
	            });
	        }
	    };

	    module.exports = Show.Controller;
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1),
	    loadingViewTpl = __webpack_require__(30),
	    User = __webpack_require__(5).Parse.User;

	/**
	 * Login view
	 */

	CommittedApp.module('AuthApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
	    Show.Login = Marionette.ItemView.extend({
	        template: loadingViewTpl,

	        initialize: function () {
	            Backbone.Validation.bind(this);
	        },

	        ui: {
	            'emailField': 'input#js-email',
	            'passwordField': 'input#js-password',
	            'submitBtn': '.button.js-submit'
	        },

	        events: {
	            'click @ui.submitBtn': 'login'
	        },

	        login: function (e) {
	            e.preventDefault();
	            var data = Backbone.Syphon.serialize(this),
	                user = this.model;

	            user.set(data);
	            if(user.isValid(true)) {
	                user.logIn().then(function (user) {
	                    console.log('logged in ...');
	                }, function (error) {
	                    console.log(error);
	                });
	            }
	        },

	        onClose: function () {
	            Backbone.Validation.unbind(this);
	        }
	    });

	    module.exports = Show.Login;
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1),
	    ProjectView = __webpack_require__(29);

	/**
	 * List.Projects view module
	 */

	CommittedApp.module('ProjectsApp.List', function (List, CommittedApp, Backbone, Marionette, $, _) {
	    List.Projects = Marionette.CollectionView.extend({
	        className: 'ui horizontal list',
	        itemView: ProjectView
	    });

	    module.exports = List.Projects;
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1),
	    ProjectViewTpl = __webpack_require__(31);

	/**
	 * Show.Project view
	 */

	CommittedApp.module('ProjectsApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
	    Show.Project = Marionette.ItemView.extend({
	        template: ProjectViewTpl,
	        className: 'ui raised segment'
	    });

	    module.exports = Show.Project;
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1),
	    loadingViewTpl = __webpack_require__(32);

	CommittedApp.module('Common.Views', function (Views, CommittedApp, Backbone, Marionette, $, _) {

	    /**
	     * Loading view, using class="ui loader"
	     */

	    Views.Loading = Marionette.ItemView.extend({
	        template: loadingViewTpl,

	        initialize: function(options){
	            options = options || {};
	            this.message = options.message || "Loading";
	        },

	        serializeData: function(){
	            return {
	                message: this.message
	            }
	        }
	    });

	    module.exports = Views.Loading;
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	(function (root, factory) {
	  if (true) {

	    var underscore = __webpack_require__(11);
	    var backbone = __webpack_require__(6);

	    module.exports = factory(underscore, backbone);

	  } else if (typeof define === 'function' && define.amd) {

	    define(['underscore', 'backbone'], factory);

	  } 
	}(this, function (_, Backbone) {
	  "use strict";

	  Backbone.Wreqr = (function(Backbone, Marionette, _){
	  "use strict";
	  var Wreqr = {};

	  // Handlers
	// --------
	// A registry of functions to call, given a name

	Wreqr.Handlers = (function(Backbone, _){
	  "use strict";
	  
	  // Constructor
	  // -----------

	  var Handlers = function(options){
	    this.options = options;
	    this._wreqrHandlers = {};
	    
	    if (_.isFunction(this.initialize)){
	      this.initialize(options);
	    }
	  };

	  Handlers.extend = Backbone.Model.extend;

	  // Instance Members
	  // ----------------

	  _.extend(Handlers.prototype, Backbone.Events, {

	    // Add multiple handlers using an object literal configuration
	    setHandlers: function(handlers){
	      _.each(handlers, function(handler, name){
	        var context = null;

	        if (_.isObject(handler) && !_.isFunction(handler)){
	          context = handler.context;
	          handler = handler.callback;
	        }

	        this.setHandler(name, handler, context);
	      }, this);
	    },

	    // Add a handler for the given name, with an
	    // optional context to run the handler within
	    setHandler: function(name, handler, context){
	      var config = {
	        callback: handler,
	        context: context
	      };

	      this._wreqrHandlers[name] = config;

	      this.trigger("handler:add", name, handler, context);
	    },

	    // Determine whether or not a handler is registered
	    hasHandler: function(name){
	      return !! this._wreqrHandlers[name];
	    },

	    // Get the currently registered handler for
	    // the specified name. Throws an exception if
	    // no handler is found.
	    getHandler: function(name){
	      var config = this._wreqrHandlers[name];

	      if (!config){
	        throw new Error("Handler not found for '" + name + "'");
	      }

	      return function(){
	        var args = Array.prototype.slice.apply(arguments);
	        return config.callback.apply(config.context, args);
	      };
	    },

	    // Remove a handler for the specified name
	    removeHandler: function(name){
	      delete this._wreqrHandlers[name];
	    },

	    // Remove all handlers from this registry
	    removeAllHandlers: function(){
	      this._wreqrHandlers = {};
	    }
	  });

	  return Handlers;
	})(Backbone, _);

	  // Wreqr.CommandStorage
	// --------------------
	//
	// Store and retrieve commands for execution.
	Wreqr.CommandStorage = (function(){
	  "use strict";

	  // Constructor function
	  var CommandStorage = function(options){
	    this.options = options;
	    this._commands = {};

	    if (_.isFunction(this.initialize)){
	      this.initialize(options);
	    }
	  };

	  // Instance methods
	  _.extend(CommandStorage.prototype, Backbone.Events, {

	    // Get an object literal by command name, that contains
	    // the `commandName` and the `instances` of all commands
	    // represented as an array of arguments to process
	    getCommands: function(commandName){
	      var commands = this._commands[commandName];

	      // we don't have it, so add it
	      if (!commands){

	        // build the configuration
	        commands = {
	          command: commandName, 
	          instances: []
	        };

	        // store it
	        this._commands[commandName] = commands;
	      }

	      return commands;
	    },

	    // Add a command by name, to the storage and store the
	    // args for the command
	    addCommand: function(commandName, args){
	      var command = this.getCommands(commandName);
	      command.instances.push(args);
	    },

	    // Clear all commands for the given `commandName`
	    clearCommands: function(commandName){
	      var command = this.getCommands(commandName);
	      command.instances = [];
	    }
	  });

	  return CommandStorage;
	})();

	  // Wreqr.Commands
	// --------------
	//
	// A simple command pattern implementation. Register a command
	// handler and execute it.
	Wreqr.Commands = (function(Wreqr){
	  "use strict";

	  return Wreqr.Handlers.extend({
	    // default storage type
	    storageType: Wreqr.CommandStorage,

	    constructor: function(options){
	      this.options = options || {};

	      this._initializeStorage(this.options);
	      this.on("handler:add", this._executeCommands, this);

	      var args = Array.prototype.slice.call(arguments);
	      Wreqr.Handlers.prototype.constructor.apply(this, args);
	    },

	    // Execute a named command with the supplied args
	    execute: function(name, args){
	      name = arguments[0];
	      args = Array.prototype.slice.call(arguments, 1);

	      if (this.hasHandler(name)){
	        this.getHandler(name).apply(this, args);
	      } else {
	        this.storage.addCommand(name, args);
	      }

	    },

	    // Internal method to handle bulk execution of stored commands
	    _executeCommands: function(name, handler, context){
	      var command = this.storage.getCommands(name);

	      // loop through and execute all the stored command instances
	      _.each(command.instances, function(args){
	        handler.apply(context, args);
	      });

	      this.storage.clearCommands(name);
	    },

	    // Internal method to initialize storage either from the type's
	    // `storageType` or the instance `options.storageType`.
	    _initializeStorage: function(options){
	      var storage;

	      var StorageType = options.storageType || this.storageType;
	      if (_.isFunction(StorageType)){
	        storage = new StorageType();
	      } else {
	        storage = StorageType;
	      }

	      this.storage = storage;
	    }
	  });

	})(Wreqr);

	  // Wreqr.RequestResponse
	// ---------------------
	//
	// A simple request/response implementation. Register a
	// request handler, and return a response from it
	Wreqr.RequestResponse = (function(Wreqr){
	  "use strict";

	  return Wreqr.Handlers.extend({
	    request: function(){
	      var name = arguments[0];
	      var args = Array.prototype.slice.call(arguments, 1);

	      return this.getHandler(name).apply(this, args);
	    }
	  });

	})(Wreqr);

	  // Event Aggregator
	// ----------------
	// A pub-sub object that can be used to decouple various parts
	// of an application through event-driven architecture.

	Wreqr.EventAggregator = (function(Backbone, _){
	  "use strict";
	  var EA = function(){};

	  // Copy the `extend` function used by Backbone's classes
	  EA.extend = Backbone.Model.extend;

	  // Copy the basic Backbone.Events on to the event aggregator
	  _.extend(EA.prototype, Backbone.Events);

	  return EA;
	})(Backbone, _);


	  return Wreqr;
	})(Backbone, Backbone.Marionette, _);

	  return Backbone.Wreqr; 

	}));



/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// Backbone.BabySitter
	// -------------------
	// v0.1.0
	//
	// Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
	// Distributed under MIT license
	//
	// http://github.com/marionettejs/backbone.babysitter

	(function (root, factory) {
	  if (true) {

	    var underscore = __webpack_require__(11);
	    var backbone = __webpack_require__(6);

	    module.exports = factory(underscore, backbone);

	  } else if (typeof define === 'function' && define.amd) {

	    define(['underscore', 'backbone'], factory);

	  } 
	}(this, function (_, Backbone) {
	  "option strict";

	  // Backbone.ChildViewContainer
	// ---------------------------
	//
	// Provide a container to store, retrieve and
	// shut down child views.

	Backbone.ChildViewContainer = (function(Backbone, _){
	  
	  // Container Constructor
	  // ---------------------

	  var Container = function(views){
	    this._views = {};
	    this._indexByModel = {};
	    this._indexByCustom = {};
	    this._updateLength();

	    _.each(views, this.add, this);
	  };

	  // Container Methods
	  // -----------------

	  _.extend(Container.prototype, {

	    // Add a view to this container. Stores the view
	    // by `cid` and makes it searchable by the model
	    // cid (and model itself). Optionally specify
	    // a custom key to store an retrieve the view.
	    add: function(view, customIndex){
	      var viewCid = view.cid;

	      // store the view
	      this._views[viewCid] = view;

	      // index it by model
	      if (view.model){
	        this._indexByModel[view.model.cid] = viewCid;
	      }

	      // index by custom
	      if (customIndex){
	        this._indexByCustom[customIndex] = viewCid;
	      }

	      this._updateLength();
	      return this;
	    },

	    // Find a view by the model that was attached to
	    // it. Uses the model's `cid` to find it.
	    findByModel: function(model){
	      return this.findByModelCid(model.cid);
	    },

	    // Find a view by the `cid` of the model that was attached to
	    // it. Uses the model's `cid` to find the view `cid` and
	    // retrieve the view using it.
	    findByModelCid: function(modelCid){
	      var viewCid = this._indexByModel[modelCid];
	      return this.findByCid(viewCid);
	    },

	    // Find a view by a custom indexer.
	    findByCustom: function(index){
	      var viewCid = this._indexByCustom[index];
	      return this.findByCid(viewCid);
	    },

	    // Find by index. This is not guaranteed to be a
	    // stable index.
	    findByIndex: function(index){
	      return _.values(this._views)[index];
	    },

	    // retrieve a view by its `cid` directly
	    findByCid: function(cid){
	      return this._views[cid];
	    },

	    // Remove a view
	    remove: function(view){
	      var viewCid = view.cid;

	      // delete model index
	      if (view.model){
	        delete this._indexByModel[view.model.cid];
	      }

	      // delete custom index
	      _.any(this._indexByCustom, function(cid, key) {
	        if (cid === viewCid) {
	          delete this._indexByCustom[key];
	          return true;
	        }
	      }, this);

	      // remove the view from the container
	      delete this._views[viewCid];

	      // update the length
	      this._updateLength();
	      return this;
	    },

	    // Call a method on every view in the container,
	    // passing parameters to the call method one at a
	    // time, like `function.call`.
	    call: function(method){
	      this.apply(method, _.tail(arguments));
	    },

	    // Apply a method on every view in the container,
	    // passing parameters to the call method one at a
	    // time, like `function.apply`.
	    apply: function(method, args){
	      _.each(this._views, function(view){
	        if (_.isFunction(view[method])){
	          view[method].apply(view, args || []);
	        }
	      });
	    },

	    // Update the `.length` attribute on this container
	    _updateLength: function(){
	      this.length = _.size(this._views);
	    }
	  });

	  // Borrowing this code from Backbone.Collection:
	  // http://backbonejs.org/docs/backbone.html#section-106
	  //
	  // Mix in methods from Underscore, for iteration, and other
	  // collection related features.
	  var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter', 
	    'select', 'reject', 'every', 'all', 'some', 'any', 'include', 
	    'contains', 'invoke', 'toArray', 'first', 'initial', 'rest', 
	    'last', 'without', 'isEmpty', 'pluck'];

	  _.each(methods, function(method) {
	    Container.prototype[method] = function() {
	      var views = _.values(this._views);
	      var args = [views].concat(_.toArray(arguments));
	      return _[method].apply(_, args);
	    };
	  });

	  // return the public API
	  return Container;
	})(Backbone, _);

	  return Backbone.ChildViewContainer; 

	}));



/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var CommittedApp = __webpack_require__(1),
	    projectTpl = __webpack_require__(33);

	/**
	 * List.Project view
	 */

	CommittedApp.module('ProjectsApp.List', function (List, CommittedApp, Backbone, Marionette, $, _) {
	    List.Project = Marionette.ItemView.extend({
	        className: 'item',
	        template: projectTpl
	    });

	    module.exports = List.Project;
	});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(34).default.template(function (Handlebars,depth0,helpers,partials,data) {
	  this.compilerInfo = [4,'>= 1.0.0'];
	helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
	  


	  return "<form class=\"ui form raised segment\">\n    <div class=\"three fields\">\n        <div class=\"field\">\n            <label>Username</label>\n            <input placeholder=\"Username\" id=\"js-email\" name=\"username\" type=\"email\">\n        </div>\n        <div class=\"field\">\n            <label>E-mail</label>\n            <input placeholder=\"E-mail\" id=\"js-email\" name=\"email\" type=\"email\">\n        </div>\n        <div class=\"field\">\n            <label>Password</label>\n            <input placeholder=\"Password\" id=\"js-password\" name=\"password\" type=\"password\">\n        </div>\n    </div>\n    <div class=\"ui blue submit button js-submit\">Login :)</div>\n</form>";
	  });

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(34).default.template(function (Handlebars,depth0,helpers,partials,data) {
	  this.compilerInfo = [4,'>= 1.0.0'];
	helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
	  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


	  buffer += "<h2>Project name: ";
	  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
	  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
	  buffer += escapeExpression(stack1)
	    + "</h2>";
	  return buffer;
	  });

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(34).default.template(function (Handlebars,depth0,helpers,partials,data) {
	  this.compilerInfo = [4,'>= 1.0.0'];
	helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
	  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


	  buffer += "<div class=\"ui active large inline text loader\">\n    ";
	  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
	  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
	  buffer += escapeExpression(stack1)
	    + "\n</div>";
	  return buffer;
	  });

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(34).default.template(function (Handlebars,depth0,helpers,partials,data) {
	  this.compilerInfo = [4,'>= 1.0.0'];
	helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
	  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


	  buffer += "<div class=\"ui raised segment\">\n    <h2>Project name: ";
	  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
	  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
	  buffer += escapeExpression(stack1)
	    + "</h2>\n</div>";
	  return buffer;
	  });

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	module.exports = __webpack_require__(35);


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*globals Handlebars: true */
	var base = __webpack_require__(36);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)
	var SafeString = __webpack_require__(37)["default"];
	var Exception = __webpack_require__(38)["default"];
	var Utils = __webpack_require__(39);
	var runtime = __webpack_require__(40);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	var create = function() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = SafeString;
	  hb.Exception = Exception;
	  hb.Utils = Utils;

	  hb.VM = runtime;
	  hb.template = function(spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	};

	var Handlebars = create();
	Handlebars.create = create;

	exports["default"] = Handlebars;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Utils = __webpack_require__(39);
	var Exception = __webpack_require__(38)["default"];

	var VERSION = "1.3.0";
	exports.VERSION = VERSION;var COMPILER_REVISION = 4;
	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '>= 1.0.0'
	};
	exports.REVISION_CHANGES = REVISION_CHANGES;
	var isArray = Utils.isArray,
	    isFunction = Utils.isFunction,
	    toString = Utils.toString,
	    objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};

	  registerDefaultHelpers(this);
	}

	exports.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: logger,
	  log: log,

	  registerHelper: function(name, fn, inverse) {
	    if (toString.call(name) === objectType) {
	      if (inverse || fn) { throw new Exception('Arg not supported with multiple helpers'); }
	      Utils.extend(this.helpers, name);
	    } else {
	      if (inverse) { fn.not = inverse; }
	      this.helpers[name] = fn;
	    }
	  },

	  registerPartial: function(name, str) {
	    if (toString.call(name) === objectType) {
	      Utils.extend(this.partials,  name);
	    } else {
	      this.partials[name] = str;
	    }
	  }
	};

	function registerDefaultHelpers(instance) {
	  instance.registerHelper('helperMissing', function(arg) {
	    if(arguments.length === 2) {
	      return undefined;
	    } else {
	      throw new Exception("Missing helper: '" + arg + "'");
	    }
	  });

	  instance.registerHelper('blockHelperMissing', function(context, options) {
	    var inverse = options.inverse || function() {}, fn = options.fn;

	    if (isFunction(context)) { context = context.call(this); }

	    if(context === true) {
	      return fn(this);
	    } else if(context === false || context == null) {
	      return inverse(this);
	    } else if (isArray(context)) {
	      if(context.length > 0) {
	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      return fn(context);
	    }
	  });

	  instance.registerHelper('each', function(context, options) {
	    var fn = options.fn, inverse = options.inverse;
	    var i = 0, ret = "", data;

	    if (isFunction(context)) { context = context.call(this); }

	    if (options.data) {
	      data = createFrame(options.data);
	    }

	    if(context && typeof context === 'object') {
	      if (isArray(context)) {
	        for(var j = context.length; i<j; i++) {
	          if (data) {
	            data.index = i;
	            data.first = (i === 0);
	            data.last  = (i === (context.length-1));
	          }
	          ret = ret + fn(context[i], { data: data });
	        }
	      } else {
	        for(var key in context) {
	          if(context.hasOwnProperty(key)) {
	            if(data) { 
	              data.key = key; 
	              data.index = i;
	              data.first = (i === 0);
	            }
	            ret = ret + fn(context[key], {data: data});
	            i++;
	          }
	        }
	      }
	    }

	    if(i === 0){
	      ret = inverse(this);
	    }

	    return ret;
	  });

	  instance.registerHelper('if', function(conditional, options) {
	    if (isFunction(conditional)) { conditional = conditional.call(this); }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function(conditional, options) {
	    return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
	  });

	  instance.registerHelper('with', function(context, options) {
	    if (isFunction(context)) { context = context.call(this); }

	    if (!Utils.isEmpty(context)) return options.fn(context);
	  });

	  instance.registerHelper('log', function(context, options) {
	    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
	    instance.log(level, context);
	  });
	}

	var logger = {
	  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

	  // State enum
	  DEBUG: 0,
	  INFO: 1,
	  WARN: 2,
	  ERROR: 3,
	  level: 3,

	  // can be overridden in the host environment
	  log: function(level, obj) {
	    if (logger.level <= level) {
	      var method = logger.methodMap[level];
	      if (typeof console !== 'undefined' && console[method]) {
	        console[method].call(console, obj);
	      }
	    }
	  }
	};
	exports.logger = logger;
	function log(level, obj) { logger.log(level, obj); }

	exports.log = log;var createFrame = function(object) {
	  var obj = {};
	  Utils.extend(obj, object);
	  return obj;
	};
	exports.createFrame = createFrame;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Build out our basic SafeString type
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = function() {
	  return "" + this.string;
	};

	exports["default"] = SafeString;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var line;
	  if (node && node.firstLine) {
	    line = node.firstLine;

	    message += ' - ' + line + ':' + node.firstColumn;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  if (line) {
	    this.lineNumber = line;
	    this.column = node.firstColumn;
	  }
	}

	Exception.prototype = new Error();

	exports["default"] = Exception;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*jshint -W004 */
	var SafeString = __webpack_require__(37)["default"];

	var escape = {
	  "&": "&amp;",
	  "<": "&lt;",
	  ">": "&gt;",
	  '"': "&quot;",
	  "'": "&#x27;",
	  "`": "&#x60;"
	};

	var badChars = /[&<>"'`]/g;
	var possible = /[&<>"'`]/;

	function escapeChar(chr) {
	  return escape[chr] || "&amp;";
	}

	function extend(obj, value) {
	  for(var key in value) {
	    if(Object.prototype.hasOwnProperty.call(value, key)) {
	      obj[key] = value[key];
	    }
	  }
	}

	exports.extend = extend;var toString = Object.prototype.toString;
	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	var isFunction = function(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	if (isFunction(/x/)) {
	  isFunction = function(value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	var isFunction;
	exports.isFunction = isFunction;
	var isArray = Array.isArray || function(value) {
	  return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
	};
	exports.isArray = isArray;

	function escapeExpression(string) {
	  // don't escape SafeStrings, since they're already safe
	  if (string instanceof SafeString) {
	    return string.toString();
	  } else if (!string && string !== 0) {
	    return "";
	  }

	  // Force a string conversion as this will be done by the append regardless and
	  // the regex test will do this transparently behind the scenes, causing issues if
	  // an object's to string has escaped characters in it.
	  string = "" + string;

	  if(!possible.test(string)) { return string; }
	  return string.replace(badChars, escapeChar);
	}

	exports.escapeExpression = escapeExpression;function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	exports.isEmpty = isEmpty;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Utils = __webpack_require__(39);
	var Exception = __webpack_require__(38)["default"];
	var COMPILER_REVISION = __webpack_require__(36).COMPILER_REVISION;
	var REVISION_CHANGES = __webpack_require__(36).REVISION_CHANGES;

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = REVISION_CHANGES[currentRevision],
	          compilerVersions = REVISION_CHANGES[compilerRevision];
	      throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
	            "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
	            "Please update your runtime to a newer version ("+compilerInfo[1]+").");
	    }
	  }
	}

	exports.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

	function template(templateSpec, env) {
	  if (!env) {
	    throw new Exception("No environment passed to template");
	  }

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
	    var result = env.VM.invokePartial.apply(this, arguments);
	    if (result != null) { return result; }

	    if (env.compile) {
	      var options = { helpers: helpers, partials: partials, data: data };
	      partials[name] = env.compile(partial, { data: data !== undefined }, env);
	      return partials[name](context, options);
	    } else {
	      throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
	    }
	  };

	  // Just add water
	  var container = {
	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,
	    programs: [],
	    program: function(i, fn, data) {
	      var programWrapper = this.programs[i];
	      if(data) {
	        programWrapper = program(i, fn, data);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = program(i, fn);
	      }
	      return programWrapper;
	    },
	    merge: function(param, common) {
	      var ret = param || common;

	      if (param && common && (param !== common)) {
	        ret = {};
	        Utils.extend(ret, common);
	        Utils.extend(ret, param);
	      }
	      return ret;
	    },
	    programWithDepth: env.VM.programWithDepth,
	    noop: env.VM.noop,
	    compilerInfo: null
	  };

	  return function(context, options) {
	    options = options || {};
	    var namespace = options.partial ? options : env,
	        helpers,
	        partials;

	    if (!options.partial) {
	      helpers = options.helpers;
	      partials = options.partials;
	    }
	    var result = templateSpec.call(
	          container,
	          namespace, context,
	          helpers,
	          partials,
	          options.data);

	    if (!options.partial) {
	      env.VM.checkRevision(container.compilerInfo);
	    }

	    return result;
	  };
	}

	exports.template = template;function programWithDepth(i, fn, data /*, $depth */) {
	  var args = Array.prototype.slice.call(arguments, 3);

	  var prog = function(context, options) {
	    options = options || {};

	    return fn.apply(this, [context, options.data || data].concat(args));
	  };
	  prog.program = i;
	  prog.depth = args.length;
	  return prog;
	}

	exports.programWithDepth = programWithDepth;function program(i, fn, data) {
	  var prog = function(context, options) {
	    options = options || {};

	    return fn(context, options.data || data);
	  };
	  prog.program = i;
	  prog.depth = 0;
	  return prog;
	}

	exports.program = program;function invokePartial(partial, name, context, helpers, partials, data) {
	  var options = { partial: true, helpers: helpers, partials: partials, data: data };

	  if(partial === undefined) {
	    throw new Exception("The partial " + name + " could not be found");
	  } else if(partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	exports.invokePartial = invokePartial;function noop() { return ""; }

	exports.noop = noop;

/***/ }
/******/ ])