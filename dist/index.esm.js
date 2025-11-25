import * as React from 'react';
import { useState } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var EmptyBDForm = function (_a) {
    var _b, _c;
    var dataKey = _a.dataKey, styles = _a.styles;
    var _d = useState(null); _d[0]; _d[1];
    var _e = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    }), formData = _e[0], setFormData = _e[1];
    // Safe styles
    var safeStyles = {
        button: (styles === null || styles === void 0 ? void 0 : styles.button) || {},
        form: (styles === null || styles === void 0 ? void 0 : styles.form) || {},
        label: (styles === null || styles === void 0 ? void 0 : styles.label) || {},
        input: {
            text: ((_b = styles === null || styles === void 0 ? void 0 : styles.input) === null || _b === void 0 ? void 0 : _b.text) || {},
            select: ((_c = styles === null || styles === void 0 ? void 0 : styles.input) === null || _c === void 0 ? void 0 : _c.select) || {},
        },
    };
    var handleChange = function (e) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        console.log("Form Submitted:", formData, "key", dataKey);
    };
    return (React.createElement("div", { className: "max-w-xl mx-auto p-6 rounded-2xl shadow-lg bg-white", style: safeStyles.form },
        React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "EmptyBDForm Form"),
        React.createElement("form", { onSubmit: handleSubmit, className: "space-y-4" },
            React.createElement("div", null,
                React.createElement("label", { className: "block text-sm font-medium", style: __assign({}, safeStyles.label) }, "Name"),
                React.createElement("input", { type: "text", name: "name", value: formData.name, onChange: handleChange, style: safeStyles.input.text, className: "w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" })),
            React.createElement("div", null,
                React.createElement("label", { className: "block text-sm font-medium", style: __assign({}, safeStyles.label) }, "Email"),
                React.createElement("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, style: safeStyles.input.text, className: "w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" })),
            React.createElement("div", null,
                React.createElement("label", { className: "block text-sm font-medium", style: __assign({}, safeStyles.label) }, "Phone"),
                React.createElement("input", { type: "text", name: "phone", value: formData.phone, onChange: handleChange, style: safeStyles.input.text, className: "w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" })),
            React.createElement("div", null,
                React.createElement("label", { className: "block text-sm font-medium", style: __assign({}, safeStyles.label) }, "Message"),
                React.createElement("textarea", { name: "message", rows: 4, value: formData.message, onChange: handleChange, style: safeStyles.input.text, className: "w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" })),
            React.createElement("button", { type: "submit", style: safeStyles.button, className: "w-full py-2 rounded-xl transition" }, "Submit"))));
};

export { EmptyBDForm };
//# sourceMappingURL=index.esm.js.map
