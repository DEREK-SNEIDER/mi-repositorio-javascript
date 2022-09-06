(function (window, document) {

    var initLib = function () {
        var lib = {
            setElementStyles: function (element, styles) {
                debugger;
                if (!element)
                    return;

                if (typeof styles === "object") {                  
                    var i = 0,
                        stylesLength = 0,
                        stylesArray = [],
                        elementStyles = document.querySelector(element).style;

                    for (i in styles) {
                        if (styles.hasOwnProperty(i)) {
                            stylesArray.push(i);
                        }
                    }

                    i = 0,
                    stylesLength = stylesArray.length;

                    for (; i < stylesLength; i++) {
                        elementStyles[stylesArray[i]] = styles[stylesArray[i]];
                    }

                } else if (typeof styles === "string") {
                    styles = styles.replace(/\s/g, "");
                    var stylesSeparator = styles.indexOf(",") ? "," : ":",
                    multipleStyles = styles.indexOf(";");

                    if (multipleStyles >= 0)
                    return;

                    if (stylesSeparator == "," || stylesSeparator == ":") {
                        styles = styles.split(stylesSeparator);

                        if (document.querySelector(element).style[styles[0]] != undefined){
                            document.querySelector(element).style[styles[0]] = styles[1];
                        } else if (document.querySelector(element).style[styles[1]] != undefined) {
                            document.querySelector(element).style[styles[1]] = styles[0];
                        }
                    }
                }
            }
        }

        return lib;
    }

    if (typeof window.initLib === "undefined") {
        window.initLib = initLib();
    }

}) (window, document);
