/*
 CanvasJS HTML5 & JavaScript Charts - v1.6.1 GA- http://canvasjs.com/ 
 Copyright 2013 fenopix
*/
(function() {
    function O(a, b) {
        a.prototype = Aa(b.prototype);
        a.prototype.constructor = a;
        a.parent = b.prototype
    }

    function Aa(a) {
        function b() {}
        b.prototype = a;
        return new b
    }

    function qa(a, b, c) {
        "millisecond" === c ? a.setMilliseconds(a.getMilliseconds() + 1 * b) : "second" === c ? a.setSeconds(a.getSeconds() + 1 * b) : "minute" === c ? a.setMinutes(a.getMinutes() + 1 * b) : "hour" === c ? a.setHours(a.getHours() + 1 * b) : "day" === c ? a.setDate(a.getDate() + 1 * b) : "week" === c ? a.setDate(a.getDate() + 7 * b) : "month" === c ? a.setMonth(a.getMonth() + 1 * b) : "year" === c && a.setFullYear(a.getFullYear() +
            1 * b);
        return a
    }

    function Y(a, b) {
        return z[b + "Duration"] * a
    }

    function K(a, b) {
        var c = !1;
        0 > a && (c = !0, a *= -1);
        a = "" + a;
        for (b = b ? b : 1; a.length < b;) a = "0" + a;
        return c ? "-" + a : a
    }

    function Z(a) {
        if (!a) return a;
        a = a.replace(/^\s\s*/, "");
        for (var b = /\s/, c = a.length; b.test(a.charAt(--c)););
        return a.slice(0, c + 1)
    }

    function Ba(a) {
        a.roundRect = function(a, c, d, e, f, g, k, p) {
            k && (this.fillStyle = k);
            p && (this.strokeStyle = p);
            "undefined" === typeof f && (f = 5);
            this.lineWidth = g;
            this.beginPath();
            this.moveTo(a + f, c);
            this.lineTo(a + d - f, c);
            this.quadraticCurveTo(a +
                d, c, a + d, c + f);
            this.lineTo(a + d, c + e - f);
            this.quadraticCurveTo(a + d, c + e, a + d - f, c + e);
            this.lineTo(a + f, c + e);
            this.quadraticCurveTo(a, c + e, a, c + e - f);
            this.lineTo(a, c + f);
            this.quadraticCurveTo(a, c, a + f, c);
            this.closePath();
            k && this.fill();
            p && 0 < g && this.stroke()
        }
    }

    function ra(a, b) {
        return a - b
    }

    function Ca(a, b) {
        return a.x - b.x
    }

    function C(a) {
        var b = ((a & 16711680) >> 16).toString(16),
            c = ((a & 65280) >> 8).toString(16);
        a = ((a & 255) >> 0).toString(16);
        b = 2 > b.length ? "0" + b : b;
        c = 2 > c.length ? "0" + c : c;
        a = 2 > a.length ? "0" + a : a;
        return "#" + b + c + a
    }

    function ca(a,
        b, c) {
        c = c || "normal";
        var d = a + "_" + b + "_" + c,
            e = sa[d];
        if (isNaN(e)) {
            try {
                a = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + a + "; font-size:" + b + "px; font-weight:" + c + ";";
                if (!R) {
                    var f = document.body;
                    R = document.createElement("span");
                    R.innerHTML = "";
                    var g = document.createTextNode("Mpgyi");
                    R.appendChild(g);
                    f.appendChild(R)
                }
                R.style.display = "";
                R.setAttribute("style", a);
                e = Math.round(R.offsetHeight);
                R.style.display = "none"
            } catch (k) {
                e = Math.ceil(1.1 *
                    b)
            }
            e = Math.max(e, b);
            sa[d] = e
        }
        return e
    }

    function E(a, b, c, d) {
        if (a.addEventListener) a.addEventListener(b, c, d || !1);
        else if (a.attachEvent) a.attachEvent("on" + b, function(b) {
            b = b || window.event;
            b.preventDefault = b.preventDefault || function() {
                b.returnValue = !1
            };
            b.stopPropagation = b.stopPropagation || function() {
                b.cancelBubble = !0
            };
            c.call(a, b)
        });
        else return !1
    }

    function ta(a, b, c) {
        a *= H;
        b *= H;
        a = c.getImageData(a, b, 2, 2).data;
        b = !0;
        for (c = 0; 4 > c; c++)
            if (a[c] !== a[c + 4] | a[c] !== a[c + 8] | a[c] !== a[c + 12]) {
                b = !1;
                break
            }
        return b ? a[0] << 16 | a[1] <<
            8 | a[2] : 0
    }

    function ua(a, b, c) {
        var d;
        d = a ? a + "FontStyle" : "fontStyle";
        var e = a ? a + "FontWeight" : "fontWeight",
            f = a ? a + "FontSize" : "fontSize";
        a = a ? a + "FontFamily" : "fontFamily";
        d = "" + (b[d] ? b[d] + " " : c && c[d] ? c[d] + " " : "");
        d += b[e] ? b[e] + " " : c && c[e] ? c[e] + " " : "";
        d += b[f] ? b[f] + "px " : c && c[f] ? c[f] + "px " : "";
        b = b[a] ? b[a] + "" : c && c[a] ? c[a] + "" : "";
        !t && b && (b = b.split(",")[0], "'" !== b[0] && '"' !== b[0] && (b = "'" + b + "'"));
        return d += b
    }

    function T(a, b, c) {
        return a in b ? b[a] : c[a]
    }

    function da(a, b, c) {
        if (t && va) {
            var d = a.getContext("2d");
            ea = d.webkitBackingStorePixelRatio ||
                d.mozBackingStorePixelRatio || d.msBackingStorePixelRatio || d.oBackingStorePixelRatio || d.backingStorePixelRatio || 1;
            H = ja / ea;
            a.width = b * H;
            a.height = c * H;
            ja !== ea && (a.style.width = b + "px", a.style.height = c + "px", d.scale(H, H))
        } else a.width = b, a.height = c
    }

    function U(a, b) {
        var c = document.createElement("canvas");
        c.setAttribute("class", "canvasjs-chart-canvas");
        da(c, a, b);
        t || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(c);
        return c
    }

    function wa(a, b, c) {
        if (a && b && c) {
            c = c + "." + ("jpeg" === b ? "jpg" : b);
            var d =
                "image/" + b;
            a = a.toDataURL(d);
            var e = !1,
                f = document.createElement("a");
            f.download = c;
            f.href = a;
            f.target = "_blank";
            if ("undefined" !== typeof Blob && new Blob) {
                for (var g = a.replace(/^data:[a-z/]*;base64,/, ""), g = atob(g), k = new ArrayBuffer(g.length), p = new Uint8Array(k), h = 0; h < g.length; h++) p[h] = g.charCodeAt(h);
                b = new Blob([k], {
                    type: "image/" + b
                });
                try {
                    window.navigator.msSaveBlob(b, c), e = !0
                } catch (l) {
                    f.dataset.downloadurl = [d, f.download, f.href].join(":"), f.href = window.URL.createObjectURL(b)
                }
            }
            if (!e) try {
                event = document.createEvent("MouseEvents"),
                    event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), f.dispatchEvent ? f.dispatchEvent(event) : f.fireEvent && f.fireEvent("onclick")
            } catch (r) {
                b = window.open(), b.document.write("<img src='" + a + "'></img><div>Please right click on the image and save it to your device</div>"), b.document.close()
            }
        }
    }

    function M(a, b, c) {
        b.getAttribute("state") !== c && (b.setAttribute("state", c), b.setAttribute("type", "button"), b.style.position = "relative", b.style.margin = "0px 0px 0px 0px", b.style.padding = "3px 4px 0px 4px",
            b.style.cssFloat = "left", b.setAttribute("title", a._cultureInfo[c + "Text"]), b.innerHTML = "<img style='height:16px;' src='" + Da[c].image + "' alt='" + a._cultureInfo[c + "Text"] + "' />")
    }

    function ka() {
        for (var a = null, b = 0; b < arguments.length; b++) a = arguments[b], a.style && (a.style.display = "inline")
    }

    function S() {
        for (var a = null, b = 0; b < arguments.length; b++)(a = arguments[b]) && a.style && (a.style.display = "none")
    }

    function L(a, b, c) {
        this._defaultsKey = a;
        var d = {};
        c && (W[c] && W[c][a]) && (d = W[c][a]);
        this._options = b ? b : {};
        this.setOptions(this._options,
            d)
    }

    function v(a, b, c) {
        this._publicChartReference = c;
        b = b || {};
        v.parent.constructor.call(this, "Chart", b, b.theme ? b.theme : "theme1");
        var d = this;
        this._containerId = a;
        this._objectsInitialized = !1;
        this.overlaidCanvasCtx = this.ctx = null;
        this._indexLabels = [];
        this._panTimerId = 0;
        this._lastTouchEventType = "";
        this._lastTouchData = null;
        this.isAnimating = !1;
        this.renderCount = 0;
        this.panEnabled = this.disableToolTip = this.animatedRender = !1;
        this._defaultCursor = "default";
        this.plotArea = {
            canvas: null,
            ctx: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            width: 0,
            height: 0
        };
        this._dataInRenderedOrder = [];
        (this._container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this._container.innerHTML = "", b = a = 0, a = this._options.width ? this.width : 0 < this._container.clientWidth ? this._container.clientWidth : this.width, b = this._options.height ? this.height : 0 < this._container.clientHeight ? this._container.clientHeight : this.height, this.width = a, this.height = b, this._selectedColorSet = "undefined" !== typeof V[this.colorSet] ? V[this.colorSet] :
            V.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", t || (this._canvasJSContainer.style.height = "0px"), this._container.appendChild(this._canvasJSContainer), this.canvas = U(a, b), this.canvas.style.position = "absolute", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas),
                this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ba(this.ctx), t ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = U(a, b), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = U(a, b), this.overlaidCanvas.style.position = "absolute", this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx =
                this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", this._eventManager = new $(this), E(window, "resize", function() {
                    d._updateSize() && d.render()
                }), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), this._toolBar.style.cssText = "position: absolute; right: 2px; top: 0px;", this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
                    x1: 0,
                    y1: 0,
                    x2: this.width,
                    y2: this.height
                }, E(this.overlaidCanvas, "click", function(a) {
                    d._mouseEventHandler(a)
                }),
                E(this.overlaidCanvas, "mousemove", function(a) {
                    d._mouseEventHandler(a)
                }), E(this.overlaidCanvas, "mouseup", function(a) {
                    d._mouseEventHandler(a)
                }), E(this.overlaidCanvas, "mousedown", function(a) {
                    d._mouseEventHandler(a);
                    S(d._dropdownMenu)
                }), E(this.overlaidCanvas, "mouseout", function(a) {
                    d._mouseEventHandler(a)
                }), E(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a) {
                    d._touchEventHandler(a)
                }), E(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove",
                    function(a) {
                        d._touchEventHandler(a)
                    }), E(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
                    d._touchEventHandler(a)
                }), E(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
                    d._touchEventHandler(a)
                }), this._creditLink || (this._creditLink = document.createElement("a"), this._creditLink.setAttribute("class", "canvasjs-chart-credit"), this._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:3px;top:" +
                    (this.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"), this._creditLink.setAttribute("tabIndex", -1), this._creditLink.setAttribute("target", "_blank")), this._toolTip = new N(this, this._options.toolTip, this.theme), this.layoutManager = new aa(this), this.axisY2 = this.axisY = this.axisX = this.data = null, this.sessionVariables = {
                    axisX: {
                        internalMinimum: null,
                        internalMaximum: null
                    },
                    axisY: {
                        internalMinimum: null,
                        internalMaximum: null
                    },
                    axisY2: {
                        internalMinimum: null,
                        internalMaximum: null
                    }
                })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
    }

    function fa(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            if (0 == d) c.push(a[0]);
            else {
                var e, f, g;
                g = d - 1;
                e = 0 === g ? 0 : g - 1;
                f = g === a.length - 1 ? g : g + 1;
                c[c.length] = {
                    x: a[g].x + (a[f].x - a[e].x) / b / 3,
                    y: a[g].y + (a[f].y - a[e].y) / b / 3
                };
                g = d;
                e = 0 === g ? 0 : g - 1;
                f = g === a.length - 1 ? g : g + 1;
                c[c.length] = {
                    x: a[g].x - (a[f].x - a[e].x) / b / 3,
                    y: a[g].y - (a[f].y - a[e].y) / b / 3
                };
                c[c.length] = a[d]
            }
        return c
    }

    function aa(a) {
        this._rightOccupied =
            this._leftOccupied = this._bottomOccupied = this._topOccupied = 0;
        this.chart = a
    }

    function I(a, b) {
        I.parent.constructor.call(this, "TextBlock", b);
        this.ctx = a;
        this._isDirty = !0;
        this._wrappedText = null;
        this._lineHeight = ca(this.fontFamily, this.fontSize, this.fontWeight)
    }

    function ba(a, b) {
        ba.parent.constructor.call(this, "Title", b, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        "undefined" === typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width =
            null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function ga(a, b, c) {
        ga.parent.constructor.call(this, "Legend", b, c);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.ghostCtx = this.chart._eventManager.ghostCtx;
        this.items = [];
        this.height = this.width = 0;
        this.orientation = null;
        this.horizontalSpacing = 10;
        this.dataSeries = [];
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        };
        "undefined" === typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.lineHeight = ca(this.fontFamily,
            this.fontSize, this.fontWeight)
    }

    function la(a, b) {
        la.parent.constructor.call(this, b);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx
    }

    function P(a, b, c, d, e) {
        P.parent.constructor.call(this, "DataSeries", b, c);
        this.chart = a;
        this.canvas = a.canvas;
        this._ctx = a.canvas.ctx;
        this.index = d;
        this.noDataPointsInPlotArea = 0;
        this.id = e;
        this.chart._eventManager.objectMap[e] = {
            id: e,
            objectType: "dataSeries",
            dataSeriesIndex: d
        };
        this.dataPointIds = [];
        this.plotUnit = [];
        this.axisY = this.axisX = null;
        null === this.fillOpacity && (this.type.match(/area/i) ?
            this.fillOpacity = 0.7 : this.fillOpacity = 1);
        this.axisPlacement = this.getDefaultAxisPlacement();
        "undefined" === typeof this._options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
    }

    function A(a, b, c, d) {
        A.parent.constructor.call(this, "Axis", b, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = a.ctx;
        this.intervalstartTimePercent = this.maxHeight = this.maxWidth = 0;
        this.labels = [];
        this._labels = null;
        this.dataInfo = {
            min: Infinity,
            max: -Infinity,
            viewPortMin: Infinity,
            viewPortMax: -Infinity,
            minDiff: Infinity
        };
        "axisX" === c ? (this.sessionVariables = this.chart.sessionVariables[c], this._options.interval || (this.intervalType = null)) : this.sessionVariables = "left" === d || "top" === d ? this.chart.sessionVariables.axisY : this.chart.sessionVariables.axisY2;
        "undefined" === typeof this._options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
        "undefined" === typeof this._options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
        this.type = c;
        "axisX" !==
        c || b && "undefined" !== typeof b.gridThickness || (this.gridThickness = 0);
        this._position = d;
        this.lineCoordinates = {
            x1: null,
            y1: null,
            x2: null,
            y2: null,
            width: null
        };
        this.labelAngle = (this.labelAngle % 360 + 360) % 360;
        90 < this.labelAngle && 270 >= this.labelAngle ? this.labelAngle -= 180 : 180 < this.labelAngle && 270 >= this.labelAngle ? this.labelAngle -= 180 : 270 < this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
        if (this._options.stripLines && 0 < this._options.stripLines.length)
            for (this.stripLines = [], b = 0; b < this._options.stripLines.length; b++) this.stripLines.push(new ma(this.chart,
                this._options.stripLines[b], a.theme, ++this.chart._eventManager.lastObjectId));
        this._absoluteMaximum = this._absoluteMinimum = this._titleTextBlock = null;
        this.hasOptionChanged("minimum") && (this.sessionVariables.internalMinimum = this.minimum);
        this.hasOptionChanged("maximum") && (this.sessionVariables.internalMaximum = this.maximum);
        this.trackChanges("minimum");
        this.trackChanges("maximum")
    }

    function ma(a, b, c, d) {
        ma.parent.constructor.call(this, "StripLine", b, c);
        this._thicknessType = "pixel";
        this.id = d;
        null !== this.startValue &&
            null !== this.endValue && (this.value = ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this.thickness = Math.max(this.endValue - this.startValue), this._thicknessType = "value")
    }

    function N(a, b, c) {
        N.parent.constructor.call(this, "ToolTip", b, c);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.currentDataPointIndex = this.currentSeriesIndex = -1;
        this._timerId = 0;
        this._prevY = this._prevX = NaN;
        this._initialize()
    }

    function $(a) {
        this.chart =
            a;
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.ghostCanvas = U(this.chart.width, this.chart.height);
        this.ghostCtx = this.ghostCanvas.getContext("2d");
        this.mouseoveredObjectMaps = []
    }

    function xa(a, b) {
        var c;
        b && na[b] && (c = na[b]);
        ba.parent.constructor.call(this, "CultureInfo", c, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx
    }

    function oa(a) {
        this.chart = a;
        this.ctx = this.chart.plotArea.ctx;
        this.animations = [];
        this.animationRequestId =
            null
    }
    var t = !!document.createElement("canvas").getContext,
        ha = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                backgroundColor: "white",
                theme: "theme1",
                animationEnabled: !1,
                animationDuration: 1200,
                colorSet: "colorSet1",
                culture: "en",
                creditHref: "",
                creditText: "CanvasJS.com",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart"
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 5
            },
            Legend: {
                name: null,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                cursor: null,
                itemmouseover: null,
                itemmouseout: null,
                itemmousemove: null,
                itemclick: null
            },
            ToolTip: {
                enabled: !0,
                borderColor: null,
                shared: !1,
                animationEnabled: !0,
                content: null
            },
            Axis: {
                minimum: null,
                maximum: null,
                interval: null,
                intervalType: null,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !1,
                labelWrap: !0,
                labelMaxWidth: null,
                prefix: "",
                suffix: "",
                includeZero: !0,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                lineColor: "black",
                lineThickness: 1,
                gridColor: "A0A0A0",
                gridThickness: 0,
                interlacedColor: null,
                valueFormatString: null,
                margin: 2,
                stripLines: []
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                thickness: 2,
                label: "",
                labelBackgroundColor: "#EEEEEE",
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal"
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                cursor: null,
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: null,
                indexLabelLineThickness: 1,
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                lineThickness: 2,
                color: null,
                risingColor: "white",
                fillOpacity: null,
                startAngle: 0,
                type: "column",
                xValueType: "number",
                axisYType: "primary",
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: null,
                legendMarkerBorderThickness: null,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: null,
                markerBorderThickness: null,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0
            },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                menuText: "More Options",
                saveJPGText: "Save as JPG",
                savePNGText: "Save as PNG",
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
            },
            TextBlock: {
                x: 0,
                y: 0,
                width: null,
                height: null,
                maxWidth: null,
                maxHeight: null,
                padding: 0,
                angle: 0,
                text: "",
                horizontalAlign: "center",
                fontSize: 12,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                textBaseline: "top"
            }
        },
        na = {
            en: {}
        },
        V = {
            colorSet1: "#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),
            colorSet2: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),
            colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
        },
        W = {
            theme1: {
                Chart: {
                    colorSet: "colorSet1"
                },
                Title: {
                    fontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    fontSize: 33,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 10
                },
                Axis: {
                    titleFontSize: 26,
                    titleFontColor: "#666666",
                    titleFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontSize: 18,
                    labelFontColor: "grey",
                    tickColor: "#BBBBBB",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "#BBBBBB",
                    lineThickness: 2,
                    lineColor: "#BBBBBB"
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: t ? "monospace, sans-serif,arial black" : "calibri"
                },
                DataSeries: {
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    indexLabelFontSize: 18,
                    indexLabelLineThickness: 1
                }
            },
            theme2: {
                Chart: {
                    colorSet: "colorSet2"
                },
                Title: {
                    fontFamily: "impact, charcoal, arial black, sans-serif",
                    fontSize: 32,
                    fontColor: "#333333",
                    verticalAlign: "top",
                    margin: 10
                },
                Axis: {
                    titleFontSize: 22,
                    titleFontColor: "rgb(98,98,98)",
                    titleFontFamily: t ? "monospace, sans-serif,arial black" : "arial",
                    titleFontWeight: "bold",
                    labelFontFamily: t ? "monospace, Courier New, Courier" : "arial",
                    labelFontSize: 16,
                    labelFontColor: "grey",
                    labelFontWeight: "bold",
                    tickColor: "grey",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "grey",
                    lineThickness: 0
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: t ? "monospace, sans-serif,arial black" : "arial"
                },
                DataSeries: {
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: t ? "Courier New, Courier, monospace" : "arial",
                    indexLabelFontWeight: "bold",
                    indexLabelFontSize: 18,
                    indexLabelLineThickness: 1
                }
            },
            theme3: {
                Chart: {
                    colorSet: "colorSet1"
                },
                Title: {
                    fontFamily: t ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
                    fontSize: 32,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 10
                },
                Axis: {
                    titleFontSize: 22,
                    titleFontColor: "rgb(98,98,98)",
                    titleFontFamily: t ? "Verdana, Geneva, Calibri, sans-serif" : "calibri",
                    labelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontSize: 18,
                    labelFontColor: "grey",
                    tickColor: "grey",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "grey",
                    lineThickness: 2,
                    lineColor: "grey"
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: t ? "monospace, sans-serif,arial black" : "calibri"
                },
                DataSeries: {
                    bevelEnabled: !0,
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: t ? "Candara, Optima, Calibri, Verdana, Geneva, sans-serif" : "calibri",
                    indexLabelFontSize: 18,
                    indexLabelLineColor: "lightgrey",
                    indexLabelLineThickness: 2
                }
            }
        },
        z = {
            numberDuration: 1,
            yearDuration: 314496E5,
            monthDuration: 2592E6,
            weekDuration: 6048E5,
            dayDuration: 864E5,
            hourDuration: 36E5,
            minuteDuration: 6E4,
            secondDuration: 1E3,
            millisecondDuration: 1,
            dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
        },
        sa = {},
        R = null,
        ya = function() {
            var a = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                b = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                c = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                d = "January February March April May June July August September October November December".split(" "),
                e = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                f = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                g = /[^-+\dA-Z]/g;
            return function(k, p, h) {
                var l = h ? h.days : b,
                    r = h ? h.months : d,
                    m = h ? h.shortDays :
                    c,
                    q = h ? h.shortMonths : e;
                h = "";
                var n = !1;
                k = k && k.getTime ? k : k ? new Date(k) : new Date;
                if (isNaN(k)) throw SyntaxError("invalid date");
                "UTC:" === p.slice(0, 4) && (p = p.slice(4), n = !0);
                h = n ? "getUTC" : "get";
                var s = k[h + "Date"](),
                    t = k[h + "Day"](),
                    u = k[h + "Month"](),
                    x = k[h + "FullYear"](),
                    w = k[h + "Hours"](),
                    Q = k[h + "Minutes"](),
                    G = k[h + "Seconds"](),
                    v = k[h + "Milliseconds"](),
                    y = n ? 0 : k.getTimezoneOffset();
                return h = p.replace(a, function(a) {
                    switch (a) {
                        case "D":
                            return s;
                        case "DD":
                            return K(s, 2);
                        case "DDD":
                            return m[t];
                        case "DDDD":
                            return l[t];
                        case "M":
                            return u +
                                1;
                        case "MM":
                            return K(u + 1, 2);
                        case "MMM":
                            return q[u];
                        case "MMMM":
                            return r[u];
                        case "Y":
                            return parseInt(String(x).slice(-2));
                        case "YY":
                            return K(String(x).slice(-2), 2);
                        case "YYY":
                            return K(String(x).slice(-3), 3);
                        case "YYYY":
                            return K(x, 4);
                        case "h":
                            return w % 12 || 12;
                        case "hh":
                            return K(w % 12 || 12, 2);
                        case "H":
                            return w;
                        case "HH":
                            return K(w, 2);
                        case "m":
                            return Q;
                        case "mm":
                            return K(Q, 2);
                        case "s":
                            return G;
                        case "ss":
                            return K(G, 2);
                        case "f":
                            return String(v).slice(0, 1);
                        case "ff":
                            return K(String(v).slice(0, 2), 2);
                        case "fff":
                            return K(String(v).slice(0,
                                3), 3);
                        case "t":
                            return 12 > w ? "a" : "p";
                        case "tt":
                            return 12 > w ? "am" : "pm";
                        case "T":
                            return 12 > w ? "A" : "P";
                        case "TT":
                            return 12 > w ? "AM" : "PM";
                        case "K":
                            return n ? "UTC" : (String(k).match(f) || [""]).pop().replace(g, "");
                        case "z":
                            return (0 < y ? "-" : "+") + Math.floor(Math.abs(y) / 60);
                        case "zz":
                            return (0 < y ? "-" : "+") + K(Math.floor(Math.abs(y) / 60), 2);
                        case "zzz":
                            return (0 < y ? "-" : "+") + K(Math.floor(Math.abs(y) / 60), 2) + K(Math.abs(y) % 60, 2);
                        default:
                            return a.slice(1, a.length - 1)
                    }
                })
            }
        }(),
        X = function(a, b, c) {
            if (null === a) return "";
            a = Number(a);
            var d =
                0 > a ? !0 : !1;
            d && (a *= -1);
            var e = c ? c.decimalSeparator : ".",
                f = c ? c.digitGroupSeparator : ",",
                g = "";
            b = String(b);
            var g = 1,
                k = c = "",
                p = -1,
                h = [],
                l = [],
                r = 0,
                m = 0,
                q = 0,
                n = !1,
                s = 0,
                k = b.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            b = null;
            for (var t = 0; k && t < k.length; t++)
                if (b = k[t], "." === b && 0 > p) p = t;
                else {
                    if ("%" === b) g *= 100;
                    else if ("\u2030" === b) {
                        g *= 1E3;
                        continue
                    } else if ("," === b[0] && "." === b[b.length - 1]) {
                        g /= Math.pow(1E3, b.length - 1);
                        p = t + b.length - 1;
                        continue
                    } else "E" !== b[0] && "e" !== b[0] || "0" !== b[b.length - 1] || (n = !0);
                    0 > p ? (h.push(b), "#" ===
                        b || "0" === b ? r++ : "," === b && q++) : (l.push(b), "#" !== b && "0" !== b || m++)
                }
            n && (b = Math.floor(a), s = (0 === b ? "" : String(b)).length - r, g /= Math.pow(10, s));
            0 > p && (p = t);
            g = (a * g).toFixed(m);
            b = g.split(".");
            g = (b[0] + "").split("");
            a = (b[1] + "").split("");
            g && "0" === g[0] && g.shift();
            for (t = n = k = m = p = 0; 0 < h.length;)
                if (b = h.pop(), "#" === b || "0" === b)
                    if (p++, p === r) {
                        var u = g,
                            g = [];
                        if ("0" === b)
                            for (b = r - m - (u ? u.length : 0); 0 < b;) u.unshift("0"), b--;
                        for (; 0 < u.length;) c = u.pop() + c, t++, 0 === t % n && (k === q && 0 < u.length) && (c = f + c);
                        d && (c = "-" + c)
                    } else 0 < g.length ? (c = g.pop() +
                        c, m++, t++) : "0" === b && (c = "0" + c, m++, t++), 0 === t % n && (k === q && 0 < g.length) && (c = f + c);
            else "E" !== b[0] && "e" !== b[0] || "0" !== b[b.length - 1] || !/[eE][+-]*[0]+/.test(b) ? "," === b ? (k++, n = t, t = 0, 0 < g.length && (c = f + c)) : c = 1 < b.length && ('"' === b[0] && '"' === b[b.length - 1] || "'" === b[0] && "'" === b[b.length - 1]) ? b.slice(1, b.length - 1) + c : b + c : (b = 0 > s ? b.replace("+", "").replace("-", "") : b.replace("-", ""), c += b.replace(/[0]+/, function(a) {
                return K(s, a.length)
            }));
            d = "";
            for (f = !1; 0 < l.length;) b = l.shift(), "#" === b || "0" === b ? 0 < a.length && 0 !== Number(a.join("")) ?
                (d += a.shift(), f = !0) : "0" === b && (d += "0", f = !0) : 1 < b.length && ('"' === b[0] && '"' === b[b.length - 1] || "'" === b[0] && "'" === b[b.length - 1]) ? d += b.slice(1, b.length - 1) : "E" !== b[0] && "e" !== b[0] || "0" !== b[b.length - 1] || !/[eE][+-]*[0]+/.test(b) ? d += b : (b = 0 > s ? b.replace("+", "").replace("-", "") : b.replace("-", ""), d += b.replace(/[0]+/, function(a) {
                    return K(s, a.length)
                }));
            return c + ((f ? e : "") + d)
        },
        ia = function(a) {
            var b = 0,
                c = 0;
            a = a || window.event;
            a.offsetX || 0 === a.offsetX ? (b = a.offsetX, c = a.offsetY) : a.layerX || 0 == a.layerX ? (b = a.layerX, c = a.layerY) :
                (b = a.pageX - a.target.offsetLeft, c = a.pageY - a.target.offsetTop);
            return {
                x: b,
                y: c
            }
        },
        va = !0,
        ja = window.devicePixelRatio || 1,
        ea = 1,
        H = va ? ja / ea : 1,
        Da = {
            reset: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="
            },
            pan: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="
            },
            zoom: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="
            },
            menu: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"
            }
        };
    L.prototype.setOptions = function(a, b) {
        if (ha[this._defaultsKey]) {
            var c = ha[this._defaultsKey],
                d;
            for (d in c) this[d] = a && d in a ? a[d] : b && d in b ? b[d] : c[d]
        }
    };
    L.prototype.updateOption =
        function(a) {
            var b = ha[this._defaultsKey],
                c = this._options.theme ? this._options.theme : this.chart && this.chart._options.theme ? this.chart._options.theme : "theme1",
                d = {},
                e = this[a];
            c && (W[c] && W[c][this._defaultsKey]) && (d = W[c][this._defaultsKey]);
            a in b && (e = a in this._options ? this._options[a] : d && a in d ? d[a] : b[a]);
            if (e === this[a]) return !1;
            this[a] = e;
            return !0
        };
    L.prototype.trackChanges = function(a) {
        this._options._oldOptions || (this._options._oldOptions = {});
        this._options._oldOptions[a] = this._options[a]
    };
    L.prototype.isBeingTracked =
        function(a) {
            this._options._oldOptions || (this._options._oldOptions = {});
            return this._options._oldOptions[a] ? !0 : !1
        };
    L.prototype.hasOptionChanged = function(a) {
        this._options._oldOptions || (this._options._oldOptions = {});
        return this._options._oldOptions[a] !== this._options[a]
    };
    O(v, L);
    v.prototype._updateOptions = function() {
        var a = this;
        this.updateOption("width");
        this.updateOption("height");
        this.updateOption("theme");
        this.updateOption("colorSet") && (this._selectedColorSet = "undefined" !== typeof V[this.colorSet] ? V[this.colorSet] :
            V.colorSet1);
        this.updateOption("backgroundColor");
        this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
        this.updateOption("culture");
        this._cultureInfo = new xa(this, this._options.culture);
        this.updateOption("animationEnabled");
        this.animationEnabled = this.animationEnabled && t;
        this._options.zoomEnabled ? (this._zoomButton || (S(this._zoomButton = document.createElement("button")), M(this, this._zoomButton, "pan"), this._toolBar.appendChild(this._zoomButton), E(this._zoomButton, "click", function() {
            a.zoomEnabled ?
                (a.zoomEnabled = !1, a.panEnabled = !0, M(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, M(a, a._zoomButton, "pan"));
            a.render()
        })), this._resetButton || (S(this._resetButton = document.createElement("button")), M(this, this._resetButton, "reset"), this._toolBar.appendChild(this._resetButton), E(this._resetButton, "click", function() {
            a._toolTip.hide();
            a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, M(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) :
                (a.zoomEnabled = !1, a.panEnabled = !1);
            a.sessionVariables.axisX.internalMinimum = a._options.axisX && a._options.axisX.minimum ? a._options.axisX.minimum : null;
            a.sessionVariables.axisX.internalMaximum = a._options.axisX && a._options.axisX.maximum ? a._options.axisX.maximum : null;
            a.resetOverlayedCanvas();
            S(a._zoomButton, a._resetButton);
            a.render()
        }), this.overlaidCanvas.style.cursor = a._defaultCursor), this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), ka(a._zoomButton, a._resetButton)) : (this.zoomEnabled = !0, this.panEnabled = !1))) : this.panEnabled = this.zoomEnabled = !1;
        "undefined" !== typeof this._options.exportFileName && (this.exportFileName = this._options.exportFileName);
        "undefined" !== typeof this._options.exportEnabled && (this.exportEnabled = this._options.exportEnabled);
        this._menuButton ? this.exportEnabled ? ka(this._menuButton) : S(this._menuButton) : this.exportEnabled && t && (this._menuButton = document.createElement("button"),
            M(this, this._menuButton, "menu"), this._toolBar.appendChild(this._menuButton), E(this._menuButton, "click", function() {
                "none" !== a._dropdownMenu.style.display || a._dropDownCloseTime && 500 >= (new Date).getTime() - a._dropDownCloseTime.getTime() || (a._dropdownMenu.style.display = "block", a._menuButton.blur(), a._dropdownMenu.focus())
            }, !0));
        if (!this._dropdownMenu && this.exportEnabled && t) {
            this._dropdownMenu = document.createElement("div");
            this._dropdownMenu.setAttribute("tabindex", -1);
            this._dropdownMenu.style.cssText =
                "position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;";
            a._dropdownMenu.style.display = "none";
            this._toolBar.appendChild(this._dropdownMenu);
            E(this._dropdownMenu, "blur", function() {
                S(a._dropdownMenu);
                a._dropDownCloseTime = new Date
            }, !0);
            var b = document.createElement("div");
            b.style.cssText = "padding: 2px 15px 2px 10px";
            b.innerHTML = this._cultureInfo.saveJPGText;
            this._dropdownMenu.appendChild(b);
            E(b, "mouseover", function() {
                this.style.backgroundColor = "#EEEEEE"
            }, !0);
            E(b, "mouseout", function() {
                this.style.backgroundColor = "transparent"
            }, !0);
            E(b, "click", function() {
                wa(a.canvas, "jpg", a.exportFileName);
                S(a._dropdownMenu)
            }, !0);
            b = document.createElement("div");
            b.style.cssText = "padding: 2px 15px 2px 10px";
            b.innerHTML =
                this._cultureInfo.savePNGText;
            this._dropdownMenu.appendChild(b);
            E(b, "mouseover", function() {
                this.style.backgroundColor = "#EEEEEE"
            }, !0);
            E(b, "mouseout", function() {
                this.style.backgroundColor = "transparent"
            }, !0);
            E(b, "click", function() {
                wa(a.canvas, "png", a.exportFileName);
                S(a._dropdownMenu)
            }, !0)
        }
        "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? M(a, a._zoomButton, "zoom") : M(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && M(a, a._resetButton, "reset"));
        if ("undefined" === typeof ha.Chart.creditHref) this.creditHref = "http://canvasjs.com/", this.creditText = "CanvasJS.com";
        else var c = this.updateOption("creditText"),
            d = this.updateOption("creditHref");
        if (0 === this.renderCount || c || d) this._creditLink.setAttribute("href", this.creditHref), this._creditLink.innerHTML = this.creditText;
        this.creditHref && this.creditText ? this._creditLink.parentElement || this._canvasJSContainer.appendChild(this._creditLink) : this._creditLink.parentElement && this._canvasJSContainer.removeChild(this._creditLink);
        this._options.toolTip && this._toolTip._options !== this._options.toolTip && (this._toolTip._options = this._options.toolTip);
        this._toolTip.updateOption("enabled");
        this._toolTip.updateOption("shared");
        this._toolTip.updateOption("animationEnabled");
        this._toolTip.updateOption("borderColor");
        this._toolTip.updateOption("content")
    };
    v.prototype._updateSize = function() {
        var a = 0,
            b = 0;
        this._options.width ? a = this.width : this.width = a = 0 < this._container.clientWidth ? this._container.clientWidth : this.width;
        this._options.height ?
            b = this.height : this.height = b = 0 < this._container.clientHeight ? this._container.clientHeight : this.height;
        return this.canvas.width !== a * H || this.canvas.height !== b * H ? (da(this.canvas, a, b), da(this.overlaidCanvas, a, b), da(this._eventManager.ghostCanvas, a, b), !0) : !1
    };
    v.prototype._initialize = function() {
        this._animator ? this._animator.cancelAllAnimations() : this._animator = new oa(this);
        this.disableToolTip = !1;
        this.pieDoughnutClickHandler = null;
        this.animationRequestId && this.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this._updateOptions();
        this.animatedRender = t && this.animationEnabled && 0 === this.renderCount;
        this._updateSize();
        this.clearCanvas();
        this.ctx.beginPath();
        this.axisY2 = this.axisY = this.axisX = null;
        this._indexLabels = [];
        this._dataInRenderedOrder = [];
        this._events = [];
        this._eventManager && this._eventManager.reset();
        this.plotInfo = {
            axisPlacement: null,
            axisXValueType: null,
            plotTypes: []
        };
        this.layoutManager.reset();
        this.data = [];
        for (var a = 0, b = 0; b < this._options.data.length; b++)
            if (a++, !this._options.data[b].type || 0 <= v._supportedChartTypes.indexOf(this._options.data[b].type)) {
                var c =
                    new P(this, this._options.data[b], this.theme, a - 1, ++this._eventManager.lastObjectId);
                null === c.name && (c.name = "DataSeries " + a);
                null === c.color ? 1 < this._options.data.length ? (c._colorSet = [this._selectedColorSet[c.index % this._selectedColorSet.length]], c.color = this._selectedColorSet[c.index % this._selectedColorSet.length]) : c._colorSet = "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" ===
                    c.type || "rangeSplineArea" === c.type || "candlestick" === c.type || "ohlc" === c.type ? [this._selectedColorSet[0]] : this._selectedColorSet : c._colorSet = [c.color];
                null === c.markerSize && (("line" === c.type || "stepLine" === c.type || "spline" === c.type) && c.dataPoints && c.dataPoints.length < this.width / 16 || "scatter" === c.type) && (c.markerSize = 8);
                "bubble" !== c.type && "scatter" !== c.type || !c.dataPoints || c.dataPoints.sort(Ca);
                this.data.push(c);
                var d = c.axisPlacement,
                    e;
                "normal" === d ? "xySwapped" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' +
                    c.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === d ? "normal" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" == d && ("normal" ===
                        this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none"));
                if (e && window.console) {
                    window.console.log(e);
                    return
                }
            }
        this._objectsInitialized = !0
    };
    v._supportedChartTypes = "line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc rangeColumn rangeBar rangeArea rangeSplineArea pie doughnut funnel".split(" ");
    v._supportedChartTypes.indexOf || (v._supportedChartTypes.indexOf = function(a, b) {
        var c = this.length >>> 0,
            d = Number(b) || 0,
            d = 0 > d ? Math.ceil(d) : Math.floor(d);
        for (0 > d && (d += c); d < c; d++)
            if (d in this && this[d] === a) return d;
        return -1
    });
    v.prototype.render = function(a) {
        a && (this._options = a);
        this._initialize();
        for (a = 0; a < this.data.length; a++)
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) this.data[a].axisYType && "primary" !== this.data[a].axisYType ? "secondary" === this.data[a].axisYType &&
                (this.axisY2 || ("normal" === this.plotInfo.axisPlacement ? this.axisY2 = new A(this, this._options.axisY2, "axisY", "right") : "xySwapped" === this.plotInfo.axisPlacement && (this.axisY2 = new A(this, this._options.axisY2, "axisY", "top"))), this.data[a].axisY = this.axisY2) : (this.axisY || ("normal" === this.plotInfo.axisPlacement ? this.axisY = new A(this, this._options.axisY, "axisY", "left") : "xySwapped" === this.plotInfo.axisPlacement && (this.axisY = new A(this, this._options.axisY, "axisY", "bottom"))), this.data[a].axisY = this.axisY), this.axisX ||
                ("normal" === this.plotInfo.axisPlacement ? this.axisX = new A(this, this._options.axisX, "axisX", "bottom") : "xySwapped" === this.plotInfo.axisPlacement && (this.axisX = new A(this, this._options.axisX, "axisX", "left"))), this.data[a].axisX = this.axisX;
        this._processData();
        this._options.title && (this._title = new ba(this, this._options.title), this._title.render());
        this.legend = new ga(this, this._options.legend, this.theme);
        for (a = 0; a < this.data.length; a++) this.data[a].showInLegend && this.legend.dataSeries.push(this.data[a]);
        this.legend.render();
        if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) this.layoutManager.getFreeSpace(), A.setLayoutAndRender(this.axisX, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
        else return;
        var b = [];
        if (this.animatedRender) {
            var c = U(this.width, this.height);
            c.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
        }
        for (a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var d =
                    this.plotInfo.plotTypes[a], e = 0; e < d.plotUnits.length; e++) {
                var f = d.plotUnits[e],
                    g = null;
                f.targetCanvas = null;
                this.animatedRender && (f.targetCanvas = U(this.width, this.height), f.targetCanvasCtx = f.targetCanvas.getContext("2d"));
                "line" === f.type ? g = this.renderLine(f) : "stepLine" === f.type ? g = this.renderStepLine(f) : "spline" === f.type ? g = this.renderSpline(f) : "column" === f.type ? g = this.renderColumn(f) : "bar" === f.type ? g = this.renderBar(f) : "area" === f.type ? g = this.renderArea(f) : "stepArea" === f.type ? g = this.renderStepArea(f) : "splineArea" ===
                    f.type ? g = this.renderSplineArea(f) : "stackedColumn" === f.type ? g = this.renderStackedColumn(f) : "stackedColumn100" === f.type ? g = this.renderStackedColumn100(f) : "stackedBar" === f.type ? g = this.renderStackedBar(f) : "stackedBar100" === f.type ? g = this.renderStackedBar100(f) : "stackedArea" === f.type ? g = this.renderStackedArea(f) : "stackedArea100" === f.type ? g = this.renderStackedArea100(f) : "bubble" === f.type ? g = g = this.renderBubble(f) : "scatter" === f.type ? g = this.renderScatter(f) : "pie" === f.type ? this.renderPie(f) : "doughnut" === f.type ?
                    this.renderPie(f) : "candlestick" === f.type ? g = this.renderCandlestick(f) : "ohlc" === f.type ? g = this.renderCandlestick(f) : "rangeColumn" === f.type ? g = this.renderRangeColumn(f) : "rangeBar" === f.type ? g = this.renderRangeBar(f) : "rangeArea" === f.type ? g = this.renderRangeArea(f) : "rangeSplineArea" === f.type && (g = this.renderRangeSplineArea(f));
                for (var k = 0; k < f.dataSeriesIndexes.length; k++) this._dataInRenderedOrder.push(this.data[f.dataSeriesIndexes[k]]);
                this.animatedRender && g && b.push(g)
            }
        this.animatedRender && 0 < this._indexLabels.length &&
            (a = U(this.width, this.height).getContext("2d"), b.push(this.renderIndexLabels(a)));
        var p = this;
        0 < b.length ? (p.disableToolTip = !0, p._animator.animate(200, p.animationDuration, function(a) {
            p.ctx.clearRect(0, 0, p.width, p.height);
            p.ctx.drawImage(c, 0, 0, p.width * H, p.height * H, 0, 0, p.width, p.height);
            for (var d = 0; d < b.length; d++) g = b[d], 1 > a && "undefined" !== typeof g.startTimePercent ? a >= g.startTimePercent && g.animationCallback(g.easingFunction(a - g.startTimePercent, 0, 1, 1 - g.startTimePercent), g) : g.animationCallback(g.easingFunction(a,
                0, 1, 1), g)
        }, function() {
            b = [];
            for (var a = 0; a < p.plotInfo.plotTypes.length; a++)
                for (var d = p.plotInfo.plotTypes[a], e = 0; e < d.plotUnits.length; e++) d.plotUnits[e].targetCanvas = null;
            c = null;
            p.disableToolTip = !1
        })) : 0 < p._indexLabels.length && p.renderIndexLabels();
        this.attachPlotAreaEventHandlers();
        this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || S(this._zoomButton, this._resetButton);
        this._toolTip._updateToolTip();
        this.renderCount++
    };
    v.prototype.attachPlotAreaEventHandlers =
        function() {
            this.attachEvent({
                context: this,
                chart: this,
                mousedown: this._plotAreaMouseDown,
                mouseup: this._plotAreaMouseUp,
                mousemove: this._plotAreaMouseMove,
                cursor: this.zoomEnabled ? "col-resize" : "move",
                cursor: this.panEnabled ? "move" : "default",
                capture: !0,
                bounds: this.plotArea
            })
        };
    v.prototype.categoriseDataSeries = function() {
        for (var a = "", b = 0; b < this.data.length; b++)
            if (a = this.data[b], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= v._supportedChartTypes.indexOf(a.type)) {
                for (var c = null, d = !1, e = null, f = !1, g =
                        0; g < this.plotInfo.plotTypes.length; g++)
                    if (this.plotInfo.plotTypes[g].type === a.type) {
                        d = !0;
                        c = this.plotInfo.plotTypes[g];
                        break
                    }
                d || (c = {
                    type: a.type,
                    totalDataSeries: 0,
                    plotUnits: []
                }, this.plotInfo.plotTypes.push(c));
                for (g = 0; g < c.plotUnits.length; g++)
                    if (c.plotUnits[g].axisYType === a.axisYType) {
                        f = !0;
                        e = c.plotUnits[g];
                        break
                    }
                f || (e = {
                    type: a.type,
                    previousDataSeriesCount: 0,
                    index: c.plotUnits.length,
                    plotType: c,
                    axisYType: a.axisYType,
                    axisY: "primary" === a.axisYType ? this.axisY : this.axisY2,
                    axisX: this.axisX,
                    dataSeriesIndexes: [],
                    yTotals: []
                }, c.plotUnits.push(e));
                c.totalDataSeries++;
                e.dataSeriesIndexes.push(b);
                a.plotUnit = e
            }
        for (b = 0; b < this.plotInfo.plotTypes.length; b++)
            for (c = this.plotInfo.plotTypes[b], g = a = 0; g < c.plotUnits.length; g++) c.plotUnits[g].previousDataSeriesCount = a, a += c.plotUnits[g].dataSeriesIndexes.length
    };
    v.prototype.assignIdToDataPoints = function() {
        for (var a = 0; a < this.data.length; a++) {
            var b = this.data[a];
            if (b.dataPoints)
                for (var c = b.dataPoints.length, d = 0; d < c; d++) b.dataPointIds[d] = ++this._eventManager.lastObjectId
        }
    };
    v.prototype._processData =
        function() {
            this.assignIdToDataPoints();
            this.categoriseDataSeries();
            for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
                for (var b = this.plotInfo.plotTypes[a], c = 0; c < b.plotUnits.length; c++) {
                    var d = b.plotUnits[c];
                    "line" === d.type || "stepLine" === d.type || "spline" === d.type || "column" === d.type || "area" === d.type || "stepArea" === d.type || "splineArea" === d.type || "bar" === d.type || "bubble" === d.type || "scatter" === d.type ? this._processMultiseriesPlotUnit(d) : "stackedColumn" === d.type || "stackedBar" === d.type || "stackedArea" === d.type ?
                        this._processStackedPlotUnit(d) : "stackedColumn100" === d.type || "stackedBar100" === d.type || "stackedArea100" === d.type ? this._processStacked100PlotUnit(d) : "candlestick" !== d.type && "ohlc" !== d.type && "rangeColumn" !== d.type && "rangeBar" !== d.type && "rangeArea" !== d.type && "rangeSplineArea" !== d.type || this._processMultiYPlotUnit(d)
                }
        };
    v.prototype._processMultiseriesPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var b = a.axisY.dataInfo, c = a.axisX.dataInfo, d, e, f = !1, g = 0; g < a.dataSeriesIndexes.length; g++) {
                var k =
                    this.data[a.dataSeriesIndexes[g]],
                    p = 0,
                    h = !1,
                    l = !1;
                if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement) var r = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    m = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (k.dataPoints[p].x && k.dataPoints[p].x.getTime ||
                    "dateTime" === k.xValueType) f = !0;
                for (p = 0; p < k.dataPoints.length; p++) {
                    "undefined" === typeof k.dataPoints[p].x && (k.dataPoints[p].x = p);
                    k.dataPoints[p].x.getTime ? (f = !0, d = k.dataPoints[p].x.getTime()) : d = k.dataPoints[p].x;
                    e = k.dataPoints[p].y;
                    d < c.min && (c.min = d);
                    d > c.max && (c.max = d);
                    e < b.min && (b.min = e);
                    e > b.max && (b.max = e);
                    if (0 < p) {
                        var q = d - k.dataPoints[p - 1].x;
                        0 > q && (q *= -1);
                        c.minDiff > q && 0 !== q && (c.minDiff = q)
                    }
                    if (!(d < r) || h) {
                        if (!h && (h = !0, 0 < p)) {
                            p -= 2;
                            continue
                        }
                        if (d > m && !l) l = !0;
                        else if (d > m && l) continue;
                        k.dataPoints[p].label && (a.axisX.labels[d] =
                            k.dataPoints[p].label);
                        d < c.viewPortMin && (c.viewPortMin = d);
                        d > c.viewPortMax && (c.viewPortMax = d);
                        null !== e && (e < b.viewPortMin && (b.viewPortMin = e), e > b.viewPortMax && (b.viewPortMax = e))
                    }
                }
                this.plotInfo.axisXValueType = k.xValueType = f ? "dateTime" : "number"
            }
    };
    v.prototype._processStackedPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var b = a.axisY.dataInfo, c = a.axisX.dataInfo, d, e, f = !1, g = [], k = [], p = 0; p < a.dataSeriesIndexes.length; p++) {
                var h = this.data[a.dataSeriesIndexes[p]],
                    l = 0,
                    r = !1,
                    m = !1;
                if ("normal" === h.axisPlacement || "xySwapped" === h.axisPlacement) var q = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    n = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (h.dataPoints[l].x && h.dataPoints[l].x.getTime || "dateTime" === h.xValueType) f = !0;
                for (l = 0; l < h.dataPoints.length; l++) {
                    "undefined" === typeof h.dataPoints[l].x && (h.dataPoints[l].x = l);
                    h.dataPoints[l].x.getTime ? (f = !0, d = h.dataPoints[l].x.getTime()) : d = h.dataPoints[l].x;
                    e = h.dataPoints[l].y;
                    d < c.min && (c.min = d);
                    d > c.max && (c.max = d);
                    if (0 < l) {
                        var s = d - h.dataPoints[l - 1].x;
                        0 > s && (s *= -1);
                        c.minDiff > s && 0 !== s && (c.minDiff = s)
                    }
                    if (!(d < q) || r) {
                        if (!r && (r = !0, 0 < l)) {
                            l -= 2;
                            continue
                        }
                        if (d > n && !m) m = !0;
                        else if (d > n && m) continue;
                        h.dataPoints[l].label && (a.axisX.labels[d] = h.dataPoints[l].label);
                        d < c.viewPortMin && (c.viewPortMin =
                            d);
                        d > c.viewPortMax && (c.viewPortMax = d);
                        null !== e && (a.yTotals[d] = (a.yTotals[d] ? a.yTotals[d] : 0) + Math.abs(e), 0 <= e ? g[d] = g[d] ? g[d] + e : e : k[d] = k[d] ? k[d] + e : e)
                    }
                }
                this.plotInfo.axisXValueType = h.xValueType = f ? "dateTime" : "number"
            }
            for (l in g) isNaN(l) || (a = g[l], a < b.min && (b.min = a), a > b.max && (b.max = a), l < c.viewPortMin || l > c.viewPortMax || (a < b.viewPortMin && (b.viewPortMin = a), a > b.viewPortMax && (b.viewPortMax = a)));
            for (l in k) isNaN(l) || (a = k[l], a < b.min && (b.min = a), a > b.max && (b.max = a), l < c.viewPortMin || l > c.viewPortMax || (a < b.viewPortMin &&
                (b.viewPortMin = a), a > b.viewPortMax && (b.viewPortMax = a)))
        }
    };
    v.prototype._processStacked100PlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var b = a.axisY.dataInfo, c = a.axisX.dataInfo, d, e, f = !1, g = !1, k = !1, p = [], h = 0; h < a.dataSeriesIndexes.length; h++) {
                var l = this.data[a.dataSeriesIndexes[h]],
                    r = 0,
                    m = !1,
                    q = !1;
                if ("normal" === l.axisPlacement || "xySwapped" === l.axisPlacement) var n = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : this._options.axisX &&
                    this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    s = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (l.dataPoints[r].x && l.dataPoints[r].x.getTime || "dateTime" === l.xValueType) f = !0;
                for (r = 0; r < l.dataPoints.length; r++) {
                    "undefined" === typeof l.dataPoints[r].x && (l.dataPoints[r].x = r);
                    l.dataPoints[r].x.getTime ? (f = !0, d = l.dataPoints[r].x.getTime()) : d = l.dataPoints[r].x;
                    e = l.dataPoints[r].y;
                    d < c.min && (c.min = d);
                    d > c.max && (c.max = d);
                    if (0 < r) {
                        var t = d - l.dataPoints[r - 1].x;
                        0 > t && (t *= -1);
                        c.minDiff > t && 0 !== t && (c.minDiff = t)
                    }
                    if (!(d < n) || m) {
                        if (!m && (m = !0, 0 < r)) {
                            r -= 2;
                            continue
                        }
                        if (d > s && !q) q = !0;
                        else if (d > s && q) continue;
                        l.dataPoints[r].label && (a.axisX.labels[d] = l.dataPoints[r].label);
                        d < c.viewPortMin && (c.viewPortMin = d);
                        d > c.viewPortMax && (c.viewPortMax = d);
                        null !== e && (a.yTotals[d] = (a.yTotals[d] ? a.yTotals[d] : 0) + Math.abs(e), 0 <= e ? g = !0 : k = !0, p[d] = p[d] ? p[d] + Math.abs(e) : Math.abs(e))
                    }
                }
                this.plotInfo.axisXValueType =
                    l.xValueType = f ? "dateTime" : "number"
            }
            g && !k ? (b.max = 99, b.min = 1) : g && k ? (b.max = 99, b.min = -99) : !g && k && (b.max = -1, b.min = -99);
            b.viewPortMin = b.min;
            b.viewPortMax = b.max;
            a.dataPointYSums = p
        }
    };
    v.prototype._processMultiYPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var b = a.axisY.dataInfo, c = a.axisX.dataInfo, d, e, f, g, k = !1, p = 0; p < a.dataSeriesIndexes.length; p++) {
                var h = this.data[a.dataSeriesIndexes[p]],
                    l = 0,
                    r = !1,
                    m = !1;
                if ("normal" === h.axisPlacement || "xySwapped" === h.axisPlacement) var q = this.sessionVariables.axisX.internalMinimum ?
                    this.sessionVariables.axisX.internalMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    n = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (h.dataPoints[l].x && h.dataPoints[l].x.getTime || "dateTime" === h.xValueType) k = !0;
                for (l = 0; l < h.dataPoints.length; l++) {
                    "undefined" === typeof h.dataPoints[l].x && (h.dataPoints[l].x = l);
                    h.dataPoints[l].x.getTime ?
                        (k = !0, d = h.dataPoints[l].x.getTime()) : d = h.dataPoints[l].x;
                    (e = h.dataPoints[l].y) && e.length && (f = Math.min.apply(null, e), g = Math.max.apply(null, e));
                    d < c.min && (c.min = d);
                    d > c.max && (c.max = d);
                    f < b.min && (b.min = f);
                    g > b.max && (b.max = g);
                    if (0 < l) {
                        var s = d - h.dataPoints[l - 1].x;
                        0 > s && (s *= -1);
                        c.minDiff > s && 0 !== s && (c.minDiff = s)
                    }
                    if (!(d < q) || r) {
                        if (!r && (r = !0, 0 < l)) {
                            l -= 2;
                            continue
                        }
                        if (d > n && !m) m = !0;
                        else if (d > n && m) continue;
                        h.dataPoints[l].label && (a.axisX.labels[d] = h.dataPoints[l].label);
                        d < c.viewPortMin && (c.viewPortMin = d);
                        d > c.viewPortMax &&
                            (c.viewPortMax = d);
                        null !== e && (f < b.viewPortMin && (b.viewPortMin = f), g > b.viewPortMax && (b.viewPortMax = g))
                    }
                }
                this.plotInfo.axisXValueType = h.xValueType = k ? "dateTime" : "number"
            }
    };
    v.prototype.getDataPointAtXY = function(a, b, c) {
        c = c || !1;
        for (var d = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
            var f = null;
            (f = this._dataInRenderedOrder[e].getDataPointAtXY(a, b, c)) && d.push(f)
        }
        a = null;
        b = !1;
        for (c = 0; c < d.length; c++)
            if ("line" === d[c].dataSeries.type || "stepLine" === d[c].dataSeries.type || "area" === d[c].dataSeries.type || "stepArea" ===
                d[c].dataSeries.type)
                if (e = T("markerSize", d[c].dataPoint, d[c].dataSeries) || 8, d[c].distance <= e / 2) {
                    b = !0;
                    break
                }
        for (c = 0; c < d.length; c++) b && "line" !== d[c].dataSeries.type && "stepLine" !== d[c].dataSeries.type && "area" !== d[c].dataSeries.type && "stepArea" !== d[c].dataSeries.type || (a ? d[c].distance <= a.distance && (a = d[c]) : a = d[c]);
        return a
    };
    v.prototype.getObjectAtXY = function(a, b, c) {
        var d = null;
        if (c = this.getDataPointAtXY(a, b, c || !1)) d = c.dataSeries.dataPointIds[c.dataPointIndex];
        else if (t) d = ta(a, b, this._eventManager.ghostCtx);
        else
            for (c = 0; c < this.legend.items.length; c++) {
                var e = this.legend.items[c];
                a >= e.x1 && (a <= e.x2 && b >= e.y1 && b <= e.y2) && (d = e.id)
            }
        return d
    };
    v.prototype.getAutoFontSize = function(a, b, c) {
        a /= 400;
        return Math.round(Math.min(this.width, this.height) * a)
    };
    v.prototype.resetOverlayedCanvas = function() {
        this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
    };
    v.prototype.clearCanvas = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0,
            0, this.width, this.height))
    };
    v.prototype.attachEvent = function(a) {
        this._events.push(a)
    };
    v.prototype._touchEventHandler = function(a) {
        if (a.changedTouches && this.interactivityEnabled) {
            var b = [],
                c = a.changedTouches,
                d = c ? c[0] : a,
                e = null;
            switch (a.type) {
                case "touchstart":
                case "MSPointerDown":
                    b = ["mousemove", "mousedown"];
                    this._lastTouchData = ia(d);
                    this._lastTouchData.time = new Date;
                    break;
                case "touchmove":
                case "MSPointerMove":
                    b = ["mousemove"];
                    break;
                case "touchend":
                case "MSPointerUp":
                    b = "touchstart" === this._lastTouchEventType ||
                        "MSPointerDown" === this._lastTouchEventType ? ["mouseup", "click"] : ["mouseup"];
                    break;
                default:
                    return
            }
            if (!(c && 1 < c.length)) {
                e = ia(d);
                e.time = new Date;
                try {
                    var f = e.y - this._lastTouchData.y,
                        g = e.time - this._lastTouchData.time;
                    if (15 < Math.abs(f) && (this._lastTouchData.scroll || 200 > g)) {
                        this._lastTouchData.scroll = !0;
                        var k = window.parent || window;
                        k && k.scrollBy && k.scrollBy(0, -f)
                    }
                } catch (p) {}
                this._lastTouchEventType = a.type;
                if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                else
                    for (c = 0; c < b.length; c++) e = b[c], f = document.createEvent("MouseEvent"), f.initMouseEvent(e, !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), d.target.dispatchEvent(f), a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault()
            }
        }
    };
    v.prototype._mouseEventHandler = function(a) {
        if (this.interactivityEnabled)
            if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
            else {
                a.preventManipulation && a.preventManipulation();
                a.preventDefault && a.preventDefault();
                "undefined" ===
                typeof a.target && a.srcElement && (a.target = a.srcElement);
                var b = ia(a),
                    c = a.type,
                    d, e;
                a.which ? e = 3 == a.which : a.button && (e = 2 == a.button);
                if (!e) {
                    if (v.capturedEventParam) d = v.capturedEventParam, "mouseup" === c && (v.capturedEventParam = null, d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.body.removeEventListener("mouseup", d.chart._mouseEventHandler, !1)), d.hasOwnProperty(c) && d[c].call(d.context, b.x, b.y);
                    else if (this._events) {
                        for (e = 0; e < this._events.length; e++)
                            if (this._events[e].hasOwnProperty(c)) {
                                d =
                                    this._events[e];
                                var f = d.bounds;
                                if (b.x >= f.x1 && b.x <= f.x2 && b.y >= f.y1 && b.y <= f.y2) {
                                    d[c].call(d.context, b.x, b.y);
                                    "mousedown" === c && !0 === d.capture ? (v.capturedEventParam = d, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.body.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === c && (d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.body.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                    break
                                } else d = null
                            }
                        a.target.style.cursor =
                            d && d.cursor ? d.cursor : this._defaultCursor
                    }
                    this._toolTip && this._toolTip.enabled && (c = this.plotArea, (b.x < c.x1 || b.x > c.x2 || b.y < c.y1 || b.y > c.y2) && this._toolTip.hide());
                    this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
                }
            }
    };
    v.prototype._plotAreaMouseDown = function(a, b) {
        this.isDrag = !0;
        this.dragStartPoint = "none" !== this.plotInfo.axisPlacement ? {
            x: a,
            y: b,
            xMinimum: this.axisX.minimum,
            xMaximum: this.axisX.maximum
        } : {
            x: a,
            y: b
        }
    };
    v.prototype._plotAreaMouseUp = function(a, b) {
        var c, d;
        if (("normal" ===
                this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var e = 0,
                e = this.axisX.lineCoordinates,
                e = "xySwapped" === this.plotInfo.axisPlacement ? b - this.dragStartPoint.y : this.dragStartPoint.x - a;
            Math.abs(this.axisX.maximum - this.axisX.minimum);
            if (2 < Math.abs(e)) {
                if (this.panEnabled) e = !1, d = 0, this.axisX.sessionVariables.internalMinimum < this.axisX._absoluteMinimum ? (d = this.axisX._absoluteMinimum - this.axisX.sessionVariables.internalMinimum, this.axisX.sessionVariables.internalMinimum +=
                    d, this.axisX.sessionVariables.internalMaximum += d, e = !0) : this.axisX.sessionVariables.internalMaximum > this.axisX._absoluteMaximum && (d = this.axisX.sessionVariables.internalMaximum - this.axisX._absoluteMaximum, this.axisX.sessionVariables.internalMaximum -= d, this.axisX.sessionVariables.internalMinimum -= d, e = !0), e && this.render();
                else if (this.zoomEnabled) {
                    this.resetOverlayedCanvas();
                    if (!this.dragStartPoint) return;
                    "xySwapped" === this.plotInfo.axisPlacement ? (c = Math.min(this.dragStartPoint.y, b), d = Math.max(this.dragStartPoint.y,
                        b), 1 < Math.abs(c - d) && (e = this.axisX.lineCoordinates, d = this.axisX.maximum - (this.axisX.maximum - this.axisX.minimum) / e.height * (d - e.y1), e = this.axisX.maximum - (this.axisX.maximum - this.axisX.minimum) / e.height * (c - e.y1), d = Math.max(d, this.axisX.dataInfo.min), e = Math.min(e, this.axisX.dataInfo.max), Math.abs(e - d) > 2 * Math.abs(this.axisX.dataInfo.minDiff) && (this.axisX.sessionVariables.internalMinimum = d, this.axisX.sessionVariables.internalMaximum = e, this.render()))) : "normal" === this.plotInfo.axisPlacement && (d = Math.min(this.dragStartPoint.x,
                        a), c = Math.max(this.dragStartPoint.x, a), 1 < Math.abs(d - c) && (e = this.axisX.lineCoordinates, d = (this.axisX.maximum - this.axisX.minimum) / e.width * (d - e.x1) + this.axisX.minimum, e = (this.axisX.maximum - this.axisX.minimum) / e.width * (c - e.x1) + this.axisX.minimum, d = Math.max(d, this.axisX.dataInfo.min), e = Math.min(e, this.axisX.dataInfo.max), Math.abs(e - d) > 2 * Math.abs(this.axisX.dataInfo.minDiff) && (this.axisX.sessionVariables.internalMinimum = d, this.axisX.sessionVariables.internalMaximum = e, this.render())))
                }
                this._ignoreNextEvent = !0;
                this.zoomEnabled && "none" === this._zoomButton.style.display && (ka(this._zoomButton, this._resetButton), M(this, this._zoomButton, "pan"), M(this, this._resetButton, "reset"))
            }
        }
        this.isDrag = !1
    };
    v.prototype._plotAreaMouseMove = function(a, b) {
        if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var c = 0,
                d = 0,
                d = this.axisX.lineCoordinates;
            "xySwapped" === this.plotInfo.axisPlacement ? (c = b - this.dragStartPoint.y, d = Math.abs(this.axisX.maximum - this.axisX.minimum) / d.height * c) : (c = this.dragStartPoint.x - a, d = Math.abs(this.axisX.maximum -
                this.axisX.minimum) / d.width * c);
            2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled) ? this._toolTip.hide() : !this._toolTip.enabled || (this.panEnabled || this.zoomEnabled) || this._toolTip.mouseMoveHandler(a, b);
            if (2 < Math.abs(c) && (this.panEnabled || this.zoomEnabled))
                if (this.panEnabled) {
                    this.axisX.sessionVariables.internalMinimum = this.dragStartPoint.xMinimum + d;
                    this.axisX.sessionVariables.internalMaximum = this.dragStartPoint.xMaximum + d;
                    c = 0;
                    this.axisX.sessionVariables.internalMinimum < this.axisX._absoluteMinimum -
                        Y(this.axisX.interval, this.axisX.intervalType) ? (c = this.axisX._absoluteMinimum - Y(this.axisX.interval, this.axisX.intervalType) - this.axisX.sessionVariables.internalMinimum, this.axisX.sessionVariables.internalMinimum += c, this.axisX.sessionVariables.internalMaximum += c) : this.axisX.sessionVariables.internalMaximum > this.axisX._absoluteMaximum + Y(this.axisX.interval, this.axisX.intervalType) && (c = this.axisX.sessionVariables.internalMaximum - (this.axisX._absoluteMaximum + Y(this.axisX.interval, this.axisX.intervalType)),
                            this.axisX.sessionVariables.internalMaximum -= c, this.axisX.sessionVariables.internalMinimum -= c);
                    var e = this;
                    clearTimeout(this._panTimerId);
                    this._panTimerId = setTimeout(function() {
                        e.render()
                    }, 0)
                } else this.zoomEnabled && (c = this.plotArea, this.resetOverlayedCanvas(), d = this.overlaidCanvasCtx.globalAlpha, this.overlaidCanvasCtx.globalAlpha = 0.7, this.overlaidCanvasCtx.fillStyle = "#A0ABB8", "xySwapped" === this.plotInfo.axisPlacement ? this.overlaidCanvasCtx.fillRect(c.x1, this.dragStartPoint.y, c.x2 - c.x1, b - this.dragStartPoint.y) :
                    "normal" === this.plotInfo.axisPlacement && this.overlaidCanvasCtx.fillRect(this.dragStartPoint.x, c.y1, a - this.dragStartPoint.x, c.y2 - c.y1), this.overlaidCanvasCtx.globalAlpha = d)
        } else this._toolTip.enabled && this._toolTip.mouseMoveHandler(a, b)
    };
    v.prototype.preparePlotArea = function() {
        var a = this.plotArea,
            b = this.axisY ? this.axisY : this.axisY2;
        !t && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
        this.axisX && b ? (a.x1 = this.axisX.lineCoordinates.x1 < this.axisX.lineCoordinates.x2 ? this.axisX.lineCoordinates.x1 : b.lineCoordinates.x1,
            a.y1 = this.axisX.lineCoordinates.y1 < b.lineCoordinates.y1 ? this.axisX.lineCoordinates.y1 : b.lineCoordinates.y1, a.x2 = this.axisX.lineCoordinates.x2 > b.lineCoordinates.x2 ? this.axisX.lineCoordinates.x2 : b.lineCoordinates.x2, a.y2 = this.axisX.lineCoordinates.y2 > this.axisX.lineCoordinates.y1 ? this.axisX.lineCoordinates.y2 : b.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1) : (b = this.layoutManager.getFreeSpace(), a.x1 = b.x1, a.x2 = b.x2, a.y1 = b.y1, a.y2 = b.y2, a.width = b.width, a.height = b.height);
        t || (a.canvas.width = a.width,
            a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1))
    };
    v.prototype.getPixelCoordinatesOnPlotArea = function(a, b) {
        return {
            x: this.axisX.getPixelCoordinatesOnAxis(a).x,
            y: this.axisY.getPixelCoordinatesOnAxis(b).y
        }
    };
    v.prototype.renderIndexLabels = function(a) {
        a = a || this.plotArea.ctx;
        a.textBaseline = "middle";
        for (var b = this.plotArea, c = 0; c < this._indexLabels.length; c++) {
            var d = this._indexLabels[c],
                e, f, g;
            a.fillStyle = T("indexLabelFontColor",
                d.dataPoint, d.dataSeries);
            a.font = ua("indexLabel", d.dataPoint, d.dataSeries);
            var k = this.replaceKeywordsWithValue(T("indexLabel", d.dataPoint, d.dataSeries), d.dataPoint, d.dataSeries, null, d.indexKeyword),
                p = a.measureText(k).width,
                h = T("indexLabelFontSize", d.dataPoint, d.dataSeries),
                l = T("indexLabelPlacement", d.dataPoint, d.dataSeries),
                r = T("indexLabelOrientation", d.dataPoint, d.dataSeries),
                m = g = 0,
                q = 0,
                n = 0,
                n = m = q = 0,
                s = d.direction,
                m = d.dataSeries.axisX,
                n = d.dataSeries.axisY;
            d.dataPoint.x < m.minimum || (d.dataPoint.x > m.maximum ||
                d.dataPoint.y < n.minimum || d.dataPoint.y > n.maximum) || ("column" === d.chartType || "stackedColumn" === d.chartType || "stackedColumn100" === d.chartType || "bar" === d.chartType || "stackedBar" === d.chartType || "stackedBar100" === d.chartType || "candlestick" === d.chartType || "ohlc" === d.chartType || "rangeColumn" === d.chartType || "rangeBar" === d.chartType ? (m = n = 5, Math.abs(d.bounds.x1, d.bounds.x2), Math.abs(d.bounds.y1, d.bounds.y2), "normal" === this.plotInfo.axisPlacement ? ("inside" !== l ? (m = b.y1, q = b.y2) : (m = d.bounds.y1, q = d.bounds.y2), "horizontal" ===
                    r ? (e = d.point.x - p / 2, f = 0 <= s ? d.point.y - h / 2 - n < m + h / 2 ? "auto" === l ? Math.min(Math.max(d.point.y, m) + h / 2 + 1, q - h / 2 - n) : Math.min(m + h / 2 + 1, q - h / 2 - n) : Math.min(d.point.y - h / 2 - n + 1, q - h / 2 - n) : d.point.y + h / 2 + n > q - h / 2 - 1 ? "auto" === l ? Math.max(Math.min(d.point.y, q) - h / 2 - 1, m + h / 2 + n) : Math.max(q - h / 2 - 1, m + h / 2 + n) : Math.max(d.point.y + h / 2 + n, m + h / 2 + n)) : "vertical" === r && (e = d.point.x, f = 0 <= s ? d.point.y - n < m + p + 1 ? "auto" === l ? Math.min(Math.max(d.point.y, m) + p + 1, q) : Math.min(m + p + 1, q) : Math.min(d.point.y - n, q - 1) : d.point.y + p + n > q - 1 ? "auto" === l ? Math.max(Math.min(d.point.y,
                        q) - n, m) : Math.max(q - 1, m) : Math.max(d.point.y + p + n, m), g = -90)) : "xySwapped" === this.plotInfo.axisPlacement && ("inside" !== l ? (n = b.x1, q = b.x2) : (n = d.bounds.x1, q = d.bounds.x2), "horizontal" === r ? (f = d.point.y, e = 0 <= s ? d.point.x + m > q - p ? "auto" === l ? Math.max(Math.min(d.point.x, q) - p, n) : Math.max(q - p, n) : Math.max(d.point.x + m, n) : d.point.x - p - m < n ? "auto" === l ? Math.min(Math.max(d.point.x, n) + 1, q) : Math.min(n + 1, q) : Math.min(d.point.x - p - m, q)) : "vertical" === r && (f = d.point.y + p / 2, e = 0 <= s ? d.point.x + h / 2 + m > q - h / 2 ? "auto" === l ? Math.max(Math.min(d.point.x,
                    q) - h / 2, n) : Math.max(q - h / 2, n) : Math.max(d.point.x + h / 2 + m, n) : d.point.x - h / 2 - m < n + h / 2 ? "auto" === l ? Math.min(Math.max(d.point.x, n) + h / 2, q + h / 2) : Math.min(n + h / 2, q + h / 2) : Math.min(d.point.x - h / 2 - m, q + h / 2), g = -90))) : (n = 5, "horizontal" === r ? (e = d.point.x - p / 2, "bubble" === d.chartType && (n = -h / 2), f = 0 < s ? Math.max(d.point.y - h / 2 - n, b.y1 + h / 2) : Math.min(d.point.y + h / 2 + n, b.y2 - h / 2)) : "vertical" === r && (e = d.point.x, "bubble" === d.chartType && (n = -p / 2), f = 0 < s ? Math.max(d.point.y - n, b.y1 + p) : Math.min(d.point.y + p + n, b.y2), g = -90)), a.save(), a.translate(e, f),
                a.rotate(Math.PI / 180 * g), a.fillText(k, 0, 0), a.restore())
        }
        return {
            source: a,
            dest: this.plotArea.ctx,
            animationCallback: y.fadeInAnimation,
            easingFunction: y.easing.easeInQuad,
            animationBase: 0,
            startTimePercent: 0.7
        }
    };
    v.prototype.renderLine = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = this._eventManager.ghostCtx;
            b.save();
            var d = this.plotArea;
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            for (var d = [], e = 0; e < a.dataSeriesIndexes.length; e++) {
                var f = a.dataSeriesIndexes[e],
                    g = this.data[f];
                b.lineWidth = g.lineThickness;
                var k = g.dataPoints,
                    p = g.id;
                this._eventManager.objectMap[p] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: f
                };
                p = C(p);
                c.strokeStyle = p;
                c.lineWidth = 0 < g.lineThickness ? Math.max(g.lineThickness, 4) : 0;
                p = g._colorSet[0];
                b.strokeStyle = p;
                var h = !0,
                    l = 0,
                    r, m;
                b.beginPath();
                if (0 < k.length) {
                    for (var q = !1, l = 0; l < k.length; l++)
                        if (r = k[l].x.getTime ? k[l].x.getTime() : k[l].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax))
                            if ("number" !== typeof k[l].y) 0 < l && (b.stroke(), t && c.stroke()),
                                q = !0;
                            else {
                                r = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (r - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (k[l].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var n = g.dataPointIds[l];
                                this._eventManager.objectMap[n] = {
                                    id: n,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: f,
                                    dataPointIndex: l,
                                    x1: r,
                                    y1: m
                                };
                                h || q ? (b.beginPath(), b.moveTo(r, m), t && (c.beginPath(), c.moveTo(r, m)), q = h = !1) : (b.lineTo(r, m), t &&
                                    c.lineTo(r, m), 0 == l % 500 && (b.stroke(), b.beginPath(), b.moveTo(r, m), t && (c.stroke(), c.beginPath(), c.moveTo(r, m))));
                                if (0 < k[l].markerSize || 0 < g.markerSize) {
                                    var s = g.getMarkerProperties(l, r, m, b);
                                    d.push(s);
                                    n = C(n);
                                    t && d.push({
                                        x: r,
                                        y: m,
                                        ctx: c,
                                        type: s.type,
                                        size: s.size,
                                        color: n,
                                        borderColor: n,
                                        borderThickness: s.borderThickness
                                    })
                                }(k[l].indexLabel || g.indexLabel) && this._indexLabels.push({
                                    chartType: "line",
                                    dataPoint: k[l],
                                    dataSeries: g,
                                    point: {
                                        x: r,
                                        y: m
                                    },
                                    direction: 0 <= k[l].y ? 1 : -1,
                                    color: p
                                })
                            }
                    b.stroke();
                    t && c.stroke()
                }
            }
            J.drawMarkers(d);
            b.restore();
            b.beginPath();
            t && c.beginPath();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.xClipAnimation,
                easingFunction: y.easing.linear,
                animationBase: 0
            }
        }
    };
    v.prototype.renderStepLine = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = this._eventManager.ghostCtx;
            b.save();
            var d = this.plotArea;
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            for (var d = [], e = 0; e < a.dataSeriesIndexes.length; e++) {
                var f = a.dataSeriesIndexes[e],
                    g = this.data[f];
                b.lineWidth = g.lineThickness;
                var k = g.dataPoints,
                    p = g.id;
                this._eventManager.objectMap[p] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: f
                };
                p = C(p);
                c.strokeStyle = p;
                c.lineWidth = 0 < g.lineThickness ? Math.max(g.lineThickness, 4) : 0;
                p = g._colorSet[0];
                b.strokeStyle = p;
                var h = !0,
                    l = 0,
                    r, m;
                b.beginPath();
                if (0 < k.length) {
                    for (var q = !1, l = 0; l < k.length; l++)
                        if (r = k[l].getTime ? k[l].x.getTime() : k[l].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax))
                            if ("number" !== typeof k[l].y) 0 < l && (b.stroke(), t && c.stroke()), q = !0;
                            else {
                                var n =
                                    m;
                                r = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (r - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (k[l].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var s = g.dataPointIds[l];
                                this._eventManager.objectMap[s] = {
                                    id: s,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: f,
                                    dataPointIndex: l,
                                    x1: r,
                                    y1: m
                                };
                                h || q ? (b.beginPath(), b.moveTo(r, m), t && (c.beginPath(), c.moveTo(r, m)), q = h = !1) : (b.lineTo(r, n), t && c.lineTo(r,
                                    n), b.lineTo(r, m), t && c.lineTo(r, m), 0 == l % 500 && (b.stroke(), b.beginPath(), b.moveTo(r, m), t && (c.stroke(), c.beginPath(), c.moveTo(r, m))));
                                if (0 < k[l].markerSize || 0 < g.markerSize) n = g.getMarkerProperties(l, r, m, b), d.push(n), s = C(s), t && d.push({
                                    x: r,
                                    y: m,
                                    ctx: c,
                                    type: n.type,
                                    size: n.size,
                                    color: s,
                                    borderColor: s,
                                    borderThickness: n.borderThickness
                                });
                                (k[l].indexLabel || g.indexLabel) && this._indexLabels.push({
                                    chartType: "stepLine",
                                    dataPoint: k[l],
                                    dataSeries: g,
                                    point: {
                                        x: r,
                                        y: m
                                    },
                                    direction: 0 <= k[l].y ? 1 : -1,
                                    color: p
                                })
                            }
                    b.stroke();
                    t && c.stroke()
                }
            }
            J.drawMarkers(d);
            b.restore();
            b.beginPath();
            t && c.beginPath();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.xClipAnimation,
                easingFunction: y.easing.linear,
                animationBase: 0
            }
        }
    };
    v.prototype.renderSpline = function(a) {
        function b(a) {
            a = fa(a, 2);
            if (0 < a.length) {
                c.beginPath();
                t && d.beginPath();
                c.moveTo(a[0].x, a[0].y);
                t && d.moveTo(a[0].x, a[0].y);
                for (var b = 0; b < a.length - 3; b += 3) c.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), t && d.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), 0 <
                    b && 0 === b % 3E3 && (c.stroke(), c.beginPath(), c.moveTo(a[b + 3].x, a[b + 3].y), t && (d.stroke(), d.beginPath(), d.moveTo(a[b + 3].x, a[b + 3].y)));
                c.stroke();
                t && d.stroke()
            }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx;
            c.save();
            var e = this.plotArea;
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            for (var e = [], f = 0; f < a.dataSeriesIndexes.length; f++) {
                var g = a.dataSeriesIndexes[f],
                    k = this.data[g];
                c.lineWidth = k.lineThickness;
                var p = k.dataPoints,
                    h = k.id;
                this._eventManager.objectMap[h] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: g
                };
                h = C(h);
                d.strokeStyle = h;
                d.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                h = k._colorSet[0];
                c.strokeStyle = h;
                var l = 0,
                    r, m, q = [];
                c.beginPath();
                if (0 < p.length)
                    for (l = 0; l < p.length; l++)
                        if (r = p[l].getTime ? p[l].x.getTime() : p[l].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax))
                            if ("number" !== typeof p[l].y) 0 < l && (b(q), q = []);
                            else {
                                r = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit *
                                    (r - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (p[l].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var n = k.dataPointIds[l];
                                this._eventManager.objectMap[n] = {
                                    id: n,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: g,
                                    dataPointIndex: l,
                                    x1: r,
                                    y1: m
                                };
                                q[q.length] = {
                                    x: r,
                                    y: m
                                };
                                if (0 < p[l].markerSize || 0 < k.markerSize) {
                                    var s = k.getMarkerProperties(l, r, m, c);
                                    e.push(s);
                                    n = C(n);
                                    t && e.push({
                                        x: r,
                                        y: m,
                                        ctx: d,
                                        type: s.type,
                                        size: s.size,
                                        color: n,
                                        borderColor: n,
                                        borderThickness: s.borderThickness
                                    })
                                }(p[l].indexLabel ||
                                    k.indexLabel) && this._indexLabels.push({
                                    chartType: "spline",
                                    dataPoint: p[l],
                                    dataSeries: k,
                                    point: {
                                        x: r,
                                        y: m
                                    },
                                    direction: 0 <= p[l].y ? 1 : -1,
                                    color: h
                                })
                            }
                b(q)
            }
            J.drawMarkers(e);
            c.restore();
            c.beginPath();
            t && d.beginPath();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: y.xClipAnimation,
                easingFunction: y.easing.linear,
                animationBase: 0
            }
        }
    };
    var F = function(a, b, c, d, e, f, g, k, p, h, l, r, m) {
        "undefined" === typeof m && (m = 1);
        g = g || 0;
        k = k || "black";
        var q = 15 < d - b && 15 < e - c ? 8 : 0.35 * Math.min(d - b, e - c);
        a.beginPath();
        a.moveTo(b, c);
        a.save();
        a.fillStyle = f;
        a.globalAlpha = m;
        a.fillRect(b, c, d - b, e - c);
        a.globalAlpha = 1;
        0 < g && (m = 0 === g % 2 ? 0 : 0.5, a.beginPath(), a.lineWidth = g, a.strokeStyle = k, a.moveTo(b, c), a.rect(b - m, c - m, d - b + 2 * m, e - c + 2 * m), a.stroke());
        a.restore();
        !0 === p && (a.save(), a.beginPath(), a.moveTo(b, c), a.lineTo(b + q, c + q), a.lineTo(d - q, c + q), a.lineTo(d, c), a.closePath(), g = a.createLinearGradient((d + b) / 2, c + q, (d + b) / 2, c), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === h && (a.save(), a.beginPath(), a.moveTo(b,
            e), a.lineTo(b + q, e - q), a.lineTo(d - q, e - q), a.lineTo(d, e), a.closePath(), g = a.createLinearGradient((d + b) / 2, e - q, (d + b) / 2, e), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === l && (a.save(), a.beginPath(), a.moveTo(b, c), a.lineTo(b + q, c + q), a.lineTo(b + q, e - q), a.lineTo(b, e), a.closePath(), g = a.createLinearGradient(b + q, (e + c) / 2, b, (e + c) / 2), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === r && (a.save(), a.beginPath(),
            a.moveTo(d, c), a.lineTo(d - q, c + q), a.lineTo(d - q, e - q), a.lineTo(d, e), g = a.createLinearGradient(d - q, (e + c) / 2, d, (e + c) / 2), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, a.fill(), a.closePath(), a.restore())
    };
    v.prototype.renderColumn = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = 0,
                f, g, k, p = a.axisY.conversionParameters.reference +
                a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                e = Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                h = a.axisX.dataInfo.minDiff,
                l = 0.9 * (d.width / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(h) / a.plotType.totalDataSeries) << 0;
            l > e ? l = e : Infinity === h ? l = e : 1 > l && (l = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.clip());
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var h = a.dataSeriesIndexes[d],
                    r = this.data[h],
                    m = r.dataPoints;
                if (0 < m.length)
                    for (var q = 5 < l && r.bevelEnabled ? !0 : !1, e = 0; e < m.length; e++)
                        if (m[e].getTime ? k = m[e].x.getTime() : k = m[e].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[e].y) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (k - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference +
                                a.axisY.conversionParameters.pixelPerUnit * (m[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            f = f - a.plotType.totalDataSeries * l / 2 + (a.previousDataSeriesCount + d) * l << 0;
                            var n = f + l << 0,
                                s;
                            0 <= m[e].y ? s = p : (s = g, g = p);
                            g > s && (s = g = s);
                            c = m[e].color ? m[e].color : r._colorSet[e % r._colorSet.length];
                            F(b, f, g, n, s, c, 0, null, q && 0 <= m[e].y, 0 > m[e].y && q, !1, !1, r.fillOpacity);
                            c = r.dataPointIds[e];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: e,
                                x1: f,
                                y1: g,
                                x2: n,
                                y2: s
                            };
                            c = C(c);
                            t && F(this._eventManager.ghostCtx,
                                f, g, n, s, c, 0, null, !1, !1, !1, !1);
                            (m[e].indexLabel || r.indexLabel) && this._indexLabels.push({
                                chartType: "column",
                                dataPoint: m[e],
                                dataSeries: r,
                                point: {
                                    x: f + (n - f) / 2,
                                    y: 0 <= m[e].y ? g : s
                                },
                                direction: 0 <= m[e].y ? 1 : -1,
                                bounds: {
                                    x1: f,
                                    y1: Math.min(g, s),
                                    x2: n,
                                    y2: Math.max(g, s)
                                },
                                color: c
                            })
                        }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.min(p, a.axisY.boundingRect.y2);
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.yScaleAnimation,
                easingFunction: y.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    v.prototype.renderStackedColumn =
        function(a) {
            var b = a.targetCanvasCtx || this.plotArea.ctx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    d = this.plotArea,
                    e = [],
                    f = [],
                    g = 0,
                    k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                    g = 0.15 * this.width << 0,
                    h = a.axisX.dataInfo.minDiff,
                    l = 0.9 * (d.width / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(h) / a.plotType.plotUnits.length) << 0;
                l > g ? l = g : Infinity === h ? l = g : 1 > l && (l = 1);
                b.save();
                t && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(d.x1, d.y1, d.width, d.height);
                b.clip();
                t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
                for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                    var r = a.dataSeriesIndexes[h],
                        m = this.data[r],
                        q = m.dataPoints;
                    if (0 < q.length) {
                        var n = 5 < l && m.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (g = 0; g < q.length; g++)
                            if (c = q[g].x.getTime ? q[g].x.getTime() : q[g].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[g].y) {
                                d = a.axisX.conversionParameters.reference +
                                    a.axisX.conversionParameters.pixelPerUnit * (c - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (q[g].y - a.axisY.conversionParameters.minimum);
                                var s = d - a.plotType.plotUnits.length * l / 2 + a.index * l << 0,
                                    B = s + l << 0,
                                    u;
                                if (0 <= q[g].y) {
                                    var x = e[c] ? e[c] : 0;
                                    k -= x;
                                    u = p - x;
                                    e[c] = x + (u - k)
                                } else x = f[c] ? f[c] : 0, u = k + x, k = p + x, f[c] = x + (u - k);
                                c = q[g].color ? q[g].color : m._colorSet[g % m._colorSet.length];
                                F(b, s, k, B, u, c, 0, null, n && 0 <= q[g].y, 0 > q[g].y && n, !1, !1, m.fillOpacity);
                                c = m.dataPointIds[g];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: r,
                                    dataPointIndex: g,
                                    x1: s,
                                    y1: k,
                                    x2: B,
                                    y2: u
                                };
                                c = C(c);
                                t && F(this._eventManager.ghostCtx, s, k, B, u, c, 0, null, !1, !1, !1, !1);
                                (q[g].indexLabel || m.indexLabel) && this._indexLabels.push({
                                    chartType: "stackedColumn",
                                    dataPoint: q[g],
                                    dataSeries: m,
                                    point: {
                                        x: d,
                                        y: 0 <= q[g].y ? k : u
                                    },
                                    direction: 0 <= q[g].y ? 1 : -1,
                                    bounds: {
                                        x1: s,
                                        y1: Math.min(k, u),
                                        x2: B,
                                        y2: Math.max(k, u)
                                    },
                                    color: c
                                })
                            }
                    }
                }
                b.restore();
                t && this._eventManager.ghostCtx.restore();
                a = Math.min(p,
                    a.axisY.boundingRect.y2);
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: y.yScaleAnimation,
                    easingFunction: y.easing.easeOutQuart,
                    animationBase: a
                }
            }
        };
    v.prototype.renderStackedColumn100 = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = 0,
                k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                g = 0.15 * this.width << 0,
                h = a.axisX.dataInfo.minDiff,
                l = 0.9 * (d.width / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(h) / a.plotType.plotUnits.length) << 0;
            l > g ? l = g : Infinity === h ? l = g : 1 > l && (l = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var r = a.dataSeriesIndexes[h],
                    m = this.data[r],
                    q = m.dataPoints;
                if (0 < q.length)
                    for (var n = 5 < l && m.bevelEnabled ? !0 : !1, g = 0; g < q.length; g++)
                        if (c =
                            q[g].x.getTime ? q[g].x.getTime() : q[g].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (c - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * ((0 !== a.dataPointYSums[c] ? 100 * (q[g].y / a.dataPointYSums[c]) : 0) - a.axisY.conversionParameters.minimum);
                            var s = d - a.plotType.plotUnits.length * l / 2 + a.index * l << 0,
                                B =
                                s + l << 0,
                                u;
                            if (0 <= q[g].y) {
                                var x = e[c] ? e[c] : 0;
                                k -= x;
                                u = p - x;
                                e[c] = x + (u - k)
                            } else x = f[c] ? f[c] : 0, u = k + x, k = p + x, f[c] = x + (u - k);
                            c = q[g].color ? q[g].color : m._colorSet[g % m._colorSet.length];
                            F(b, s, k, B, u, c, 0, null, n && 0 <= q[g].y, 0 > q[g].y && n, !1, !1, m.fillOpacity);
                            c = m.dataPointIds[g];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: r,
                                dataPointIndex: g,
                                x1: s,
                                y1: k,
                                x2: B,
                                y2: u
                            };
                            c = C(c);
                            t && F(this._eventManager.ghostCtx, s, k, B, u, c, 0, null, !1, !1, !1, !1);
                            (q[g].indexLabel || m.indexLabel) && this._indexLabels.push({
                                chartType: "stackedColumn100",
                                dataPoint: q[g],
                                dataSeries: m,
                                point: {
                                    x: d,
                                    y: 0 <= q[g].y ? k : u
                                },
                                direction: 0 <= q[g].y ? 1 : -1,
                                bounds: {
                                    x1: s,
                                    y1: Math.min(k, u),
                                    x2: B,
                                    y2: Math.max(k, u)
                                },
                                color: c
                            })
                        }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.min(p, a.axisY.boundingRect.y2);
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.yScaleAnimation,
                easingFunction: y.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    v.prototype.renderBar = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = 0,
                f, g, k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                e = Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
                h = a.axisX.dataInfo.minDiff,
                l = 0.9 * (d.height / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(h) / a.plotType.totalDataSeries) << 0;
            l > e ? l = e : Infinity === h ? l = e : 1 > l && (l = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1,
                d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var h = a.dataSeriesIndexes[d],
                    r = this.data[h],
                    m = r.dataPoints;
                if (0 < m.length) {
                    var q = 5 < l && r.bevelEnabled ? !0 : !1;
                    b.strokeStyle = "#4572A7 ";
                    for (e = 0; e < m.length; e++)
                        if (m[e].getTime ? k = m[e].x.getTime() : k = m[e].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[e].y) {
                            g = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (k - a.axisX.conversionParameters.minimum) +
                                0.5 << 0;
                            f = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (m[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            g = g - a.plotType.totalDataSeries * l / 2 + (a.previousDataSeriesCount + d) * l << 0;
                            var n = g + l << 0,
                                s;
                            0 <= m[e].y ? s = p : (s = f, f = p);
                            c = m[e].color ? m[e].color : r._colorSet[e % r._colorSet.length];
                            F(b, s, g, f, n, c, 0, null, q, !1, !1, !1, r.fillOpacity);
                            c = r.dataPointIds[e];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: e,
                                x1: s,
                                y1: g,
                                x2: f,
                                y2: n
                            };
                            c = C(c);
                            t && F(this._eventManager.ghostCtx, s, g, f, n, c, 0, null, !1, !1, !1, !1);
                            this._indexLabels.push({
                                chartType: "bar",
                                dataPoint: m[e],
                                dataSeries: r,
                                point: {
                                    x: 0 <= m[e].y ? f : s,
                                    y: g + (n - g) / 2
                                },
                                direction: 0 <= m[e].y ? 1 : -1,
                                bounds: {
                                    x1: Math.min(s, f),
                                    y1: g,
                                    x2: Math.max(s, f),
                                    y2: n
                                },
                                color: c
                            })
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.max(p, a.axisX.boundingRect.x2);
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.xScaleAnimation,
                easingFunction: y.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    v.prototype.renderStackedBar =
        function(a) {
            var b = a.targetCanvasCtx || this.plotArea.ctx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    d = this.plotArea,
                    e = [],
                    f = [],
                    g = 0,
                    k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                    g = 0.15 * this.height << 0,
                    h = a.axisX.dataInfo.minDiff,
                    l = 0.9 * (d.height / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(h) / a.plotType.plotUnits.length) << 0;
                l > g ? l = g : Infinity === h ? l = g : 1 > l && (l = 1);
                b.save();
                t && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(d.x1, d.y1, d.width, d.height);
                b.clip();
                t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
                for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                    var r = a.dataSeriesIndexes[h],
                        m = this.data[r],
                        q = m.dataPoints;
                    if (0 < q.length) {
                        var n = 5 < l && m.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (g = 0; g < q.length; g++)
                            if (c = q[g].x.getTime ? q[g].x.getTime() : q[g].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[g].y) {
                                d = a.axisX.conversionParameters.reference +
                                    a.axisX.conversionParameters.pixelPerUnit * (c - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (q[g].y - a.axisY.conversionParameters.minimum);
                                var s = d - a.plotType.plotUnits.length * l / 2 + a.index * l << 0,
                                    B = s + l << 0,
                                    u;
                                if (0 <= q[g].y) {
                                    var x = e[c] ? e[c] : 0;
                                    u = p + x;
                                    k += x;
                                    e[c] = x + (k - u)
                                } else x = f[c] ? f[c] : 0, u = k - x, k = p - x, f[c] = x + (k - u);
                                c = q[g].color ? q[g].color : m._colorSet[g % m._colorSet.length];
                                F(b, u, s, k, B, c, 0, null, n, !1, !1, !1, m.fillOpacity);
                                c = m.dataPointIds[g];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: r,
                                    dataPointIndex: g,
                                    x1: u,
                                    y1: s,
                                    x2: k,
                                    y2: B
                                };
                                c = C(c);
                                t && F(this._eventManager.ghostCtx, u, s, k, B, c, 0, null, !1, !1, !1, !1);
                                this._indexLabels.push({
                                    chartType: "stackedBar",
                                    dataPoint: q[g],
                                    dataSeries: m,
                                    point: {
                                        x: 0 <= q[g].y ? k : u,
                                        y: d
                                    },
                                    direction: 0 <= q[g].y ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(u, k),
                                        y1: s,
                                        x2: Math.max(u, k),
                                        y2: B
                                    },
                                    color: c
                                })
                            }
                    }
                }
                b.restore();
                t && this._eventManager.ghostCtx.restore();
                a = Math.max(p, a.axisX.boundingRect.x2);
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xScaleAnimation,
                    easingFunction: y.easing.easeOutQuart,
                    animationBase: a
                }
            }
        };
    v.prototype.renderStackedBar100 = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = 0,
                k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                g = 0.15 * this.height << 0,
                h = a.axisX.dataInfo.minDiff,
                l = 0.9 * (d.height / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(h) /
                    a.plotType.plotUnits.length) << 0;
            l > g ? l = g : Infinity === h ? l = g : 1 > l && (l = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var r = a.dataSeriesIndexes[h],
                    m = this.data[r],
                    q = m.dataPoints;
                if (0 < q.length) {
                    var n = 5 < l && m.bevelEnabled ? !0 : !1;
                    b.strokeStyle = "#4572A7 ";
                    for (g = 0; g < q.length; g++)
                        if (c = q[g].x.getTime ? q[g].x.getTime() :
                            q[g].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (c - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * ((0 !== a.dataPointYSums[c] ? 100 * (q[g].y / a.dataPointYSums[c]) : 0) - a.axisY.conversionParameters.minimum);
                            var s = d - a.plotType.plotUnits.length * l / 2 + a.index * l << 0,
                                B = s + l << 0,
                                u;
                            if (0 <= q[g].y) {
                                var x = e[c] ?
                                    e[c] : 0;
                                u = p + x;
                                k += x;
                                e[c] = x + (k - u)
                            } else x = f[c] ? f[c] : 0, u = k - x, k = p - x, f[c] = x + (k - u);
                            c = q[g].color ? q[g].color : m._colorSet[g % m._colorSet.length];
                            F(b, u, s, k, B, c, 0, null, n, !1, !1, !1, m.fillOpacity);
                            c = m.dataPointIds[g];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: r,
                                dataPointIndex: g,
                                x1: u,
                                y1: s,
                                x2: k,
                                y2: B
                            };
                            c = C(c);
                            t && F(this._eventManager.ghostCtx, u, s, k, B, c, 0, null, !1, !1, !1, !1);
                            this._indexLabels.push({
                                chartType: "stackedBar100",
                                dataPoint: q[g],
                                dataSeries: m,
                                point: {
                                    x: 0 <= q[g].y ? k : u,
                                    y: d
                                },
                                direction: 0 <=
                                    q[g].y ? 1 : -1,
                                bounds: {
                                    x1: Math.min(u, k),
                                    y1: s,
                                    x2: Math.max(u, k),
                                    y2: B
                                },
                                color: c
                            })
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.max(p, a.axisX.boundingRect.x2);
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.xScaleAnimation,
                easingFunction: y.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    v.prototype.renderArea = function(a) {
        function b() {
            x && (0 < h.lineThickness && c.stroke(), 0 >= a.axisY.minimum && 0 <= a.axisY.maximum ? u = B : 0 > a.axisY.maximum ? u = f.y1 : 0 < a.axisY.minimum && (u = e.y2), c.lineTo(q, u), c.lineTo(x.x,
                u), c.closePath(), c.globalAlpha = h.fillOpacity, c.fill(), c.globalAlpha = 1, t && (d.lineTo(q, u), d.lineTo(x.x, u), d.closePath(), d.fill()), c.beginPath(), c.moveTo(q, n), d.beginPath(), d.moveTo(q, n), x = {
                x: q,
                y: n
            })
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = a.axisX.lineCoordinates,
                f = a.axisY.lineCoordinates,
                g = [],
                k = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(k.x1, k.y1, k.width, k.height);
            c.clip();
            t && (d.beginPath(), d.rect(k.x1, k.y1, k.width,
                k.height), d.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var p = a.dataSeriesIndexes[k],
                    h = this.data[p],
                    l = h.dataPoints,
                    g = h.id;
                this._eventManager.objectMap[g] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: p
                };
                g = C(g);
                d.fillStyle = g;
                var g = [],
                    r = !0,
                    m = 0,
                    q, n, s, B = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) + 0.5 << 0,
                    u, x = null;
                if (0 < l.length) {
                    var w = h._colorSet[m % h._colorSet.length];
                    c.fillStyle = w;
                    c.strokeStyle = w;
                    c.lineWidth = h.lineThickness;
                    for (var Q = !0; m < l.length; m++)
                        if (s = l[m].x.getTime ? l[m].x.getTime() : l[m].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax))
                            if ("number" !== typeof l[m].y) b(), Q = !0;
                            else {
                                q = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (s - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                n = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (l[m].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                r || Q ? (c.beginPath(), c.moveTo(q, n), x = {
                                    x: q,
                                    y: n
                                }, t && (d.beginPath(),
                                    d.moveTo(q, n)), Q = r = !1) : (c.lineTo(q, n), t && d.lineTo(q, n), 0 == m % 250 && b());
                                var G = h.dataPointIds[m];
                                this._eventManager.objectMap[G] = {
                                    id: G,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: p,
                                    dataPointIndex: m,
                                    x1: q,
                                    y1: n
                                };
                                0 !== l[m].markerSize && (0 < l[m].markerSize || 0 < h.markerSize) && (s = h.getMarkerProperties(m, q, n, c), g.push(s), G = C(G), t && g.push({
                                    x: q,
                                    y: n,
                                    ctx: d,
                                    type: s.type,
                                    size: s.size,
                                    color: G,
                                    borderColor: G,
                                    borderThickness: s.borderThickness
                                }));
                                (l[m].indexLabel || h.indexLabel) && this._indexLabels.push({
                                    chartType: "area",
                                    dataPoint: l[m],
                                    dataSeries: h,
                                    point: {
                                        x: q,
                                        y: n
                                    },
                                    direction: 0 <= l[m].y ? 1 : -1,
                                    color: w
                                })
                            }
                    b();
                    J.drawMarkers(g)
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: y.xClipAnimation,
                easingFunction: y.easing.linear,
                animationBase: 0
            }
        }
    };
    v.prototype.renderSplineArea = function(a) {
        function b() {
            var b = fa(u, 2);
            if (0 < b.length) {
                c.beginPath();
                c.moveTo(b[0].x, b[0].y);
                t && (d.beginPath(), d.moveTo(b[0].x, b[0].y));
                for (var g = 0; g < b.length - 3; g += 3) c.bezierCurveTo(b[g + 1].x, b[g + 1].y, b[g + 2].x, b[g +
                    2].y, b[g + 3].x, b[g + 3].y), t && d.bezierCurveTo(b[g + 1].x, b[g + 1].y, b[g + 2].x, b[g + 2].y, b[g + 3].x, b[g + 3].y);
                0 < h.lineThickness && c.stroke();
                0 >= a.axisY.minimum && 0 <= a.axisY.maximum ? s = n : 0 > a.axisY.maximum ? s = f.y1 : 0 < a.axisY.minimum && (s = e.y2);
                B = {
                    x: b[0].x,
                    y: b[0].y
                };
                c.lineTo(b[b.length - 1].x, s);
                c.lineTo(B.x, s);
                c.closePath();
                c.globalAlpha = h.fillOpacity;
                c.fill();
                c.globalAlpha = 1;
                t && (d.lineTo(b[b.length - 1].x, s), d.lineTo(B.x, s), d.closePath(), d.fill())
            }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d =
                this._eventManager.ghostCtx,
                e = a.axisX.lineCoordinates,
                f = a.axisY.lineCoordinates,
                g = [],
                k = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(k.x1, k.y1, k.width, k.height);
            c.clip();
            t && (d.beginPath(), d.rect(k.x1, k.y1, k.width, k.height), d.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var p = a.dataSeriesIndexes[k],
                    h = this.data[p],
                    l = h.dataPoints,
                    g = h.id;
                this._eventManager.objectMap[g] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: p
                };
                g = C(g);
                d.fillStyle = g;
                var g = [],
                    r = 0,
                    m, q, n = a.axisY.conversionParameters.reference +
                    a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) + 0.5 << 0,
                    s, B = null,
                    u = [];
                if (0 < l.length) {
                    color = h._colorSet[r % h._colorSet.length];
                    c.fillStyle = color;
                    c.strokeStyle = color;
                    for (c.lineWidth = h.lineThickness; r < l.length; r++)
                        if (m = l[r].x.getTime ? l[r].x.getTime() : l[r].x, !(m < a.axisX.dataInfo.viewPortMin || m > a.axisX.dataInfo.viewPortMax))
                            if ("number" !== typeof l[r].y) 0 < r && (b(), u = []);
                            else {
                                m = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (m - a.axisX.conversionParameters.minimum) +
                                    0.5 << 0;
                                q = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (l[r].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var x = h.dataPointIds[r];
                                this._eventManager.objectMap[x] = {
                                    id: x,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: p,
                                    dataPointIndex: r,
                                    x1: m,
                                    y1: q
                                };
                                u[u.length] = {
                                    x: m,
                                    y: q
                                };
                                if (0 !== l[r].markerSize && (0 < l[r].markerSize || 0 < h.markerSize)) {
                                    var w = h.getMarkerProperties(r, m, q, c);
                                    g.push(w);
                                    x = C(x);
                                    t && g.push({
                                        x: m,
                                        y: q,
                                        ctx: d,
                                        type: w.type,
                                        size: w.size,
                                        color: x,
                                        borderColor: x,
                                        borderThickness: w.borderThickness
                                    })
                                }(l[r].indexLabel ||
                                    h.indexLabel) && this._indexLabels.push({
                                    chartType: "splineArea",
                                    dataPoint: l[r],
                                    dataSeries: h,
                                    point: {
                                        x: m,
                                        y: q
                                    },
                                    direction: 0 <= l[r].y ? 1 : -1,
                                    color: color
                                })
                            }
                    b();
                    J.drawMarkers(g)
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: y.xClipAnimation,
                easingFunction: y.easing.linear,
                animationBase: 0
            }
        }
    };
    v.prototype.renderStepArea = function(a) {
        function b() {
            x && (0 < h.lineThickness && c.stroke(), 0 >= a.axisY.minimum && 0 <= a.axisY.maximum ? u = B : 0 > a.axisY.maximum ? u = f.y1 : 0 < a.axisY.minimum &&
                (u = e.y2), c.lineTo(q, u), c.lineTo(x.x, u), c.closePath(), c.globalAlpha = h.fillOpacity, c.fill(), c.globalAlpha = 1, t && (d.lineTo(q, u), d.lineTo(x.x, u), d.closePath(), d.fill()), c.beginPath(), c.moveTo(q, n), d.beginPath(), d.moveTo(q, n), x = {
                    x: q,
                    y: n
                })
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = a.axisX.lineCoordinates,
                f = a.axisY.lineCoordinates,
                g = [],
                k = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(k.x1, k.y1, k.width, k.height);
            c.clip();
            t &&
                (d.beginPath(), d.rect(k.x1, k.y1, k.width, k.height), d.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var p = a.dataSeriesIndexes[k],
                    h = this.data[p],
                    l = h.dataPoints,
                    g = h.id;
                this._eventManager.objectMap[g] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: p
                };
                g = C(g);
                d.fillStyle = g;
                var g = [],
                    r = !0,
                    m = 0,
                    q, n, s, B = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) + 0.5 << 0,
                    u, x = null,
                    w = !1;
                if (0 < l.length) {
                    var Q = h._colorSet[m % h._colorSet.length];
                    c.fillStyle =
                        Q;
                    c.strokeStyle = Q;
                    for (c.lineWidth = h.lineThickness; m < l.length; m++)
                        if (s = l[m].x.getTime ? l[m].x.getTime() : l[m].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax)) {
                            var v = n;
                            "number" !== typeof l[m].y ? (b(), w = !0) : (q = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (s - a.axisX.conversionParameters.minimum) + 0.5 << 0, n = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (l[m].y - a.axisY.conversionParameters.minimum) + 0.5 << 0, r || w ? (c.beginPath(),
                                c.moveTo(q, n), x = {
                                    x: q,
                                    y: n
                                }, t && (d.beginPath(), d.moveTo(q, n)), w = r = !1) : (c.lineTo(q, v), t && d.lineTo(q, v), c.lineTo(q, n), t && d.lineTo(q, n), 0 == m % 250 && b()), v = h.dataPointIds[m], this._eventManager.objectMap[v] = {
                                id: v,
                                objectType: "dataPoint",
                                dataSeriesIndex: p,
                                dataPointIndex: m,
                                x1: q,
                                y1: n
                            }, 0 !== l[m].markerSize && (0 < l[m].markerSize || 0 < h.markerSize) && (s = h.getMarkerProperties(m, q, n, c), g.push(s), v = C(v), t && g.push({
                                x: q,
                                y: n,
                                ctx: d,
                                type: s.type,
                                size: s.size,
                                color: v,
                                borderColor: v,
                                borderThickness: s.borderThickness
                            })), (l[m].indexLabel ||
                                h.indexLabel) && this._indexLabels.push({
                                chartType: "stepArea",
                                dataPoint: l[m],
                                dataSeries: h,
                                point: {
                                    x: q,
                                    y: n
                                },
                                direction: 0 <= l[m].y ? 1 : -1,
                                color: Q
                            }))
                        }
                    b();
                    J.drawMarkers(g)
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: y.xClipAnimation,
                easingFunction: y.easing.linear,
                animationBase: 0
            }
        }
    };
    v.prototype.renderStackedArea = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = [],
                e = this.plotArea,
                f = [],
                g = [],
                k = 0,
                p, h, l, r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                m = this._eventManager.ghostCtx;
            t && m.beginPath();
            b.save();
            t && m.save();
            b.beginPath();
            b.rect(e.x1, e.y1, e.width, e.height);
            b.clip();
            t && (m.beginPath(), m.rect(e.x1, e.y1, e.width, e.height), m.clip());
            xValuePresent = [];
            for (e = 0; e < a.dataSeriesIndexes.length; e++) {
                var q = a.dataSeriesIndexes[e],
                    n = this.data[q],
                    s = n.dataPoints;
                n.dataPointIndexes = [];
                for (k = 0; k < s.length; k++) q = s[k].x.getTime ?
                    s[k].x.getTime() : s[k].x, n.dataPointIndexes[q] = k, xValuePresent[q] || (g.push(q), xValuePresent[q] = !0);
                g.sort(ra)
            }
            for (e = 0; e < a.dataSeriesIndexes.length; e++) {
                var q = a.dataSeriesIndexes[e],
                    n = this.data[q],
                    s = n.dataPoints,
                    B = !0,
                    u = [],
                    k = n.id;
                this._eventManager.objectMap[k] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: q
                };
                k = C(k);
                m.fillStyle = k;
                if (0 < g.length) {
                    c = n._colorSet[0];
                    b.fillStyle = c;
                    b.strokeStyle = c;
                    b.lineWidth = n.lineThickness;
                    for (k = 0; k < g.length; k++) {
                        l = g[k];
                        var x = null,
                            x = 0 <= n.dataPointIndexes[l] ? s[n.dataPointIndexes[l]] : {
                                x: l,
                                y: 0
                            };
                        if (!(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && "number" === typeof x.y) {
                            p = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (l - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            h = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (x.y - a.axisY.conversionParameters.minimum);
                            var w = f[l] ? f[l] : 0;
                            h -= w;
                            u.push({
                                x: p,
                                y: r - w
                            });
                            f[l] = r - h;
                            if (B) b.beginPath(), b.moveTo(p, h), t && (m.beginPath(), m.moveTo(p, h)), B = !1;
                            else if (b.lineTo(p,
                                    h), t && m.lineTo(p, h), 0 == k % 250) {
                                for (0 < n.lineThickness && b.stroke(); 0 < u.length;) {
                                    var v = u.pop();
                                    b.lineTo(v.x, v.y);
                                    t && m.lineTo(v.x, v.y)
                                }
                                b.closePath();
                                b.globalAlpha = n.fillOpacity;
                                b.fill();
                                b.globalAlpha = 1;
                                b.beginPath();
                                b.moveTo(p, h);
                                t && (m.closePath(), m.fill(), m.beginPath(), m.moveTo(p, h));
                                u.push({
                                    x: p,
                                    y: r - w
                                })
                            }
                            if (0 <= n.dataPointIndexes[l]) {
                                var G = n.dataPointIds[n.dataPointIndexes[l]];
                                this._eventManager.objectMap[G] = {
                                    id: G,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: n.dataPointIndexes[l],
                                    x1: p,
                                    y1: h
                                }
                            }
                            0 <=
                                n.dataPointIndexes[l] && 0 !== x.markerSize && (0 < x.markerSize || 0 < n.markerSize) && (l = n.getMarkerProperties(k, p, h, b), d.push(l), markerColor = C(G), t && d.push({
                                    x: p,
                                    y: h,
                                    ctx: m,
                                    type: l.type,
                                    size: l.size,
                                    color: markerColor,
                                    borderColor: markerColor,
                                    borderThickness: l.borderThickness
                                }));
                            (x.indexLabel || n.indexLabel) && this._indexLabels.push({
                                chartType: "stackedArea",
                                dataPoint: x,
                                dataSeries: n,
                                point: {
                                    x: p,
                                    y: h
                                },
                                direction: 0 <= s[k].y ? 1 : -1,
                                color: c
                            })
                        }
                    }
                    for (0 < n.lineThickness && b.stroke(); 0 < u.length;) v = u.pop(), b.lineTo(v.x, v.y), t && m.lineTo(v.x,
                        v.y);
                    b.closePath();
                    b.globalAlpha = n.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    b.beginPath();
                    b.moveTo(p, h);
                    t && (m.closePath(), m.fill(), m.beginPath(), m.moveTo(p, h))
                }
                delete n.dataPointIndexes
            }
            J.drawMarkers(d);
            b.restore();
            t && m.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.xClipAnimation,
                easingFunction: y.easing.linear,
                animationBase: 0
            }
        }
    };
    v.prototype.renderStackedArea100 = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = [],
                k = 0,
                p, h, l, r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                m = 0.15 * this.width << 0,
                q = a.axisX.dataInfo.minDiff,
                q = 0.9 * d.width / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(q) << 0,
                n = this._eventManager.ghostCtx;
            b.save();
            t && n.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (n.beginPath(), n.rect(d.x1, d.y1, d.width, d.height), n.clip());
            xValuePresent = [];
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var s =
                    a.dataSeriesIndexes[d],
                    B = this.data[s],
                    u = B.dataPoints;
                B.dataPointIndexes = [];
                for (k = 0; k < u.length; k++) s = u[k].x.getTime ? u[k].x.getTime() : u[k].x, B.dataPointIndexes[s] = k, xValuePresent[s] || (g.push(s), xValuePresent[s] = !0);
                g.sort(ra)
            }
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var s = a.dataSeriesIndexes[d],
                    B = this.data[s],
                    u = B.dataPoints,
                    x = !0,
                    c = B.id;
                this._eventManager.objectMap[c] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: s
                };
                c = C(c);
                n.fillStyle = c;
                1 == u.length && (q = m);
                1 > q ? q = 1 : q > m && (q = m);
                var w = [];
                if (0 < g.length) {
                    c = B._colorSet[k %
                        B._colorSet.length];
                    b.fillStyle = c;
                    b.strokeStyle = c;
                    b.lineWidth = B.lineThickness;
                    for (k = 0; k < g.length; k++) {
                        l = g[k];
                        var v = null,
                            v = 0 <= B.dataPointIndexes[l] ? u[B.dataPointIndexes[l]] : {
                                x: l,
                                y: 0
                            };
                        if (!(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && "number" === typeof v.y) {
                            h = 0 !== a.dataPointYSums[l] ? 100 * (v.y / a.dataPointYSums[l]) : 0;
                            p = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (l - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            h = a.axisY.conversionParameters.reference +
                                a.axisY.conversionParameters.pixelPerUnit * (h - a.axisY.conversionParameters.minimum);
                            var G = f[l] ? f[l] : 0;
                            h -= G;
                            w.push({
                                x: p,
                                y: r - G
                            });
                            f[l] = r - h;
                            if (x) b.beginPath(), b.moveTo(p, h), t && (n.beginPath(), n.moveTo(p, h)), x = !1;
                            else if (b.lineTo(p, h), t && n.lineTo(p, h), 0 == k % 250) {
                                for (0 < B.lineThickness && b.stroke(); 0 < w.length;) {
                                    var z = w.pop();
                                    b.lineTo(z.x, z.y);
                                    t && n.lineTo(z.x, z.y)
                                }
                                b.closePath();
                                b.globalAlpha = B.fillOpacity;
                                b.fill();
                                b.globalAlpha = 1;
                                b.beginPath();
                                b.moveTo(p, h);
                                t && (n.closePath(), n.fill(), n.beginPath(), n.moveTo(p,
                                    h));
                                w.push({
                                    x: p,
                                    y: r - G
                                })
                            }
                            if (0 <= B.dataPointIndexes[l]) {
                                var A = B.dataPointIds[B.dataPointIndexes[l]];
                                this._eventManager.objectMap[A] = {
                                    id: A,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: s,
                                    dataPointIndex: B.dataPointIndexes[l],
                                    x1: p,
                                    y1: h
                                }
                            }
                            0 <= B.dataPointIndexes[l] && 0 !== v.markerSize && (0 < v.markerSize || 0 < B.markerSize) && (l = B.getMarkerProperties(k, p, h, b), e.push(l), markerColor = C(A), t && e.push({
                                x: p,
                                y: h,
                                ctx: n,
                                type: l.type,
                                size: l.size,
                                color: markerColor,
                                borderColor: markerColor,
                                borderThickness: l.borderThickness
                            }));
                            (v.indexLabel ||
                                B.indexLabel) && this._indexLabels.push({
                                chartType: "stackedArea100",
                                dataPoint: v,
                                dataSeries: B,
                                point: {
                                    x: p,
                                    y: h
                                },
                                direction: 0 <= u[k].y ? 1 : -1,
                                color: c
                            })
                        }
                    }
                    for (0 < B.lineThickness && b.stroke(); 0 < w.length;) z = w.pop(), b.lineTo(z.x, z.y), t && n.lineTo(z.x, z.y);
                    b.closePath();
                    b.globalAlpha = B.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    b.beginPath();
                    b.moveTo(p, h);
                    t && (n.closePath(), n.fill(), n.beginPath(), n.moveTo(p, h))
                }
                delete B.dataPointIndexes
            }
            J.drawMarkers(e);
            b.restore();
            t && n.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.xClipAnimation,
                easingFunction: y.easing.linear,
                animationBase: 0
            }
        }
    };
    v.prototype.renderBubble = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx,
            c = a.dataSeriesIndexes.length;
        if (!(0 >= c)) {
            var d = this.plotArea,
                e = 0,
                f, g, k = 0.15 * this.width << 0,
                e = a.axisX.dataInfo.minDiff,
                c = 0.9 * (d.width / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(e) / c) << 0;
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var p = -Infinity, h = Infinity, l = 0; l < a.dataSeriesIndexes.length; l++)
                for (var r = a.dataSeriesIndexes[l], m = this.data[r], q = m.dataPoints, n = 0, e = 0; e < q.length; e++) f = q[e].getTime ? f = q[e].x.getTime() : f = q[e].x, f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax || "undefined" === typeof q[e].z || (n = q[e].z, n > p && (p = n), n < h && (h = n));
            for (var s = 25 * Math.PI, d = Math.max(Math.pow(0.25 * Math.min(d.height, d.width) / 2, 2) * Math.PI, s), l = 0; l < a.dataSeriesIndexes.length; l++)
                if (r = a.dataSeriesIndexes[l], m = this.data[r], q = m.dataPoints,
                    1 == q.length && (c = k), 1 > c ? c = 1 : c > k && (c = k), 0 < q.length)
                    for (b.strokeStyle = "#4572A7 ", e = 0; e < q.length; e++)
                        if (f = q[e].getTime ? f = q[e].x.getTime() : f = q[e].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[e].y) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (f - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (q[e].y - a.axisY.conversionParameters.minimum) + 0.5 <<
                                0;
                            var n = q[e].z,
                                B = 2 * Math.max(Math.sqrt((p === h ? d / 2 : s + (d - s) / (p - h) * (n - h)) / Math.PI) << 0, 1),
                                n = m.getMarkerProperties(e, b);
                            n.size = B;
                            b.globalAlpha = m.fillOpacity;
                            J.drawMarker(f, g, b, n.type, n.size, n.color, n.borderColor, n.borderThickness);
                            b.globalAlpha = 1;
                            var u = m.dataPointIds[e];
                            this._eventManager.objectMap[u] = {
                                id: u,
                                objectType: "dataPoint",
                                dataSeriesIndex: r,
                                dataPointIndex: e,
                                x1: f,
                                y1: g,
                                size: B
                            };
                            B = C(u);
                            t && J.drawMarker(f, g, this._eventManager.ghostCtx, n.type, n.size, B, B, n.borderThickness);
                            (q[e].indexLabel || m.indexLabel) &&
                            this._indexLabels.push({
                                chartType: "bubble",
                                dataPoint: q[e],
                                dataSeries: m,
                                point: {
                                    x: f,
                                    y: g
                                },
                                direction: 1,
                                color: null
                            })
                        }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.fadeInAnimation,
                easingFunction: y.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    v.prototype.renderScatter = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx,
            c = a.dataSeriesIndexes.length;
        if (!(0 >= c)) {
            var d = this.plotArea,
                e = 0,
                f, g, k = 0.15 * this.width << 0,
                e = a.axisX.dataInfo.minDiff,
                c = 0.9 * (d.width /
                    Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(e) / c) << 0;
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                var h = a.dataSeriesIndexes[p],
                    l = this.data[h],
                    r = l.dataPoints;
                1 == r.length && (c = k);
                1 > c ? c = 1 : c > k && (c = k);
                if (0 < r.length) {
                    b.strokeStyle = "#4572A7 ";
                    Math.pow(0.3 * Math.min(d.height, d.width) / 2, 2);
                    for (var m =
                            0, q = 0, e = 0; e < r.length; e++)
                        if (f = r[e].getTime ? f = r[e].x.getTime() : f = r[e].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[e].y) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (f - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (r[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            var n = l.getMarkerProperties(e, f, g, b);
                            b.globalAlpha = l.fillOpacity;
                            J.drawMarker(n.x,
                                n.y, n.ctx, n.type, n.size, n.color, n.borderColor, n.borderThickness);
                            b.globalAlpha = 1;
                            Math.sqrt((m - f) * (m - f) + (q - g) * (q - g)) < Math.min(n.size, 5) && r.length > Math.min(this.plotArea.width, this.plotArea.height) || (m = l.dataPointIds[e], this._eventManager.objectMap[m] = {
                                id: m,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: e,
                                x1: f,
                                y1: g
                            }, m = C(m), t && J.drawMarker(n.x, n.y, this._eventManager.ghostCtx, n.type, n.size, m, m, n.borderThickness), (r[e].indexLabel || l.indexLabel) && this._indexLabels.push({
                                chartType: "scatter",
                                dataPoint: r[e],
                                dataSeries: l,
                                point: {
                                    x: f,
                                    y: g
                                },
                                direction: 1,
                                color: null
                            }), m = f, q = g)
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.fadeInAnimation,
                easingFunction: y.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    v.prototype.renderCandlestick = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx,
            c = this._eventManager.ghostCtx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null,
                d = this.plotArea,
                e = 0,
                f, g, k, p, h, l, e = 0.015 * this.width;
            f = a.axisX.dataInfo.minDiff;
            var r = 0.7 * d.width /
                Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(f) << 0;
            r > e ? r = e : Infinity === f ? r = e : 1 > r && (r = 1);
            b.save();
            t && c.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (c.rect(d.x1, d.y1, d.width, d.height), c.clip());
            for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                var q = a.dataSeriesIndexes[m],
                    n = this.data[q],
                    s = n.dataPoints;
                if (0 < s.length)
                    for (var B = 5 < r && n.bevelEnabled ? !0 : !1, e = 0; e < s.length; e++)
                        if (s[e].getTime ? l = s[e].x.getTime() : l = s[e].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) &&
                            null !== s[e].y && s[e].y.length && "number" === typeof s[e].y[0] && "number" === typeof s[e].y[1] && "number" === typeof s[e].y[2] && "number" === typeof s[e].y[3]) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (l - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (s[e].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (s[e].y[1] -
                                a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (s[e].y[2] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            h = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (s[e].y[3] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            var u = f - r / 2 << 0,
                                x = u + r << 0,
                                d = s[e].color ? s[e].color : n._colorSet[0],
                                w = Math.round(Math.max(1, 0.15 * r)),
                                v = 0 === w % 2 ? 0 : 0.5,
                                G = n.dataPointIds[e];
                            this._eventManager.objectMap[G] = {
                                id: G,
                                objectType: "dataPoint",
                                dataSeriesIndex: q,
                                dataPointIndex: e,
                                x1: u,
                                y1: g,
                                x2: x,
                                y2: k,
                                x3: f,
                                y3: p,
                                x4: f,
                                y4: h,
                                borderThickness: w,
                                color: d
                            };
                            b.strokeStyle = d;
                            b.beginPath();
                            b.lineWidth = w;
                            c.lineWidth = Math.max(w, 4);
                            "candlestick" === n.type ? (b.moveTo(f - v, k), b.lineTo(f - v, Math.min(g, h)), b.stroke(), b.moveTo(f - v, Math.max(g, h)), b.lineTo(f - v, p), b.stroke(), F(b, u, Math.min(g, h), x, Math.max(g, h), s[e].y[0] <= s[e].y[3] ? n.risingColor : d, w, d, B, B, !1, !1, n.fillOpacity), t && (d = C(G), c.strokeStyle = d, c.moveTo(f - v, k), c.lineTo(f - v, Math.min(g, h)), c.stroke(), c.moveTo(f -
                                v, Math.max(g, h)), c.lineTo(f - v, p), c.stroke(), F(c, u, Math.min(g, h), x, Math.max(g, h), d, 0, null, !1, !1, !1, !1))) : "ohlc" === n.type && (b.moveTo(f - v, k), b.lineTo(f - v, p), b.stroke(), b.beginPath(), b.moveTo(f, g), b.lineTo(u, g), b.stroke(), b.beginPath(), b.moveTo(f, h), b.lineTo(x, h), b.stroke(), t && (d = C(G), c.strokeStyle = d, c.moveTo(f - v, k), c.lineTo(f - v, p), c.stroke(), c.beginPath(), c.moveTo(f, g), c.lineTo(u, g), c.stroke(), c.beginPath(), c.moveTo(f, h), c.lineTo(x, h), c.stroke()));
                            (s[e].indexLabel || n.indexLabel) && this._indexLabels.push({
                                chartType: n.type,
                                dataPoint: s[e],
                                dataSeries: n,
                                point: {
                                    x: u + (x - u) / 2,
                                    y: k
                                },
                                direction: 1,
                                bounds: {
                                    x1: u,
                                    y1: Math.min(k, p),
                                    x2: x,
                                    y2: Math.max(k, p)
                                },
                                color: d
                            })
                        }
            }
            b.restore();
            t && c.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.fadeInAnimation,
                easingFunction: y.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    v.prototype.renderRangeColumn = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = 0,
                f, g, e = 0.03 * this.width;
            f = a.axisX.dataInfo.minDiff;
            var k = 0.9 * (d.width /
                Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(f) / a.plotType.totalDataSeries) << 0;
            k > e ? k = e : Infinity === f ? k = e : 1 > k && (k = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                var h = a.dataSeriesIndexes[p],
                    l = this.data[h],
                    r = l.dataPoints;
                if (0 < r.length)
                    for (var m = 5 < k && l.bevelEnabled ? !0 : !1, e = 0; e < r.length; e++)
                        if (r[e].getTime ?
                            g = r[e].x.getTime() : g = r[e].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && null !== r[e].y && r[e].y.length && "number" === typeof r[e].y[0] && "number" === typeof r[e].y[1]) {
                            c = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (g - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            d = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (r[e].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            f = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit *
                                (r[e].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            var q = c - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + p) * k << 0,
                                n = q + k << 0,
                                c = r[e].color ? r[e].color : l._colorSet[e % l._colorSet.length];
                            if (d > f) {
                                var s = d,
                                    d = f;
                                f = s
                            }
                            s = l.dataPointIds[e];
                            this._eventManager.objectMap[s] = {
                                id: s,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: e,
                                x1: q,
                                y1: d,
                                x2: n,
                                y2: f
                            };
                            F(b, q, d, n, f, c, 0, c, m, m, !1, !1, l.fillOpacity);
                            c = C(s);
                            t && F(this._eventManager.ghostCtx, q, d, n, f, c, 0, null, !1, !1, !1, !1);
                            if (r[e].indexLabel || l.indexLabel) this._indexLabels.push({
                                chartType: "rangeColumn",
                                dataPoint: r[e],
                                dataSeries: l,
                                indexKeyword: 0,
                                point: {
                                    x: q + (n - q) / 2,
                                    y: r[e].y[1] >= r[e].y[0] ? f : d
                                },
                                direction: r[e].y[1] >= r[e].y[0] ? -1 : 1,
                                bounds: {
                                    x1: q,
                                    y1: Math.min(d, f),
                                    x2: n,
                                    y2: Math.max(d, f)
                                },
                                color: c
                            }), this._indexLabels.push({
                                chartType: "rangeColumn",
                                dataPoint: r[e],
                                dataSeries: l,
                                indexKeyword: 1,
                                point: {
                                    x: q + (n - q) / 2,
                                    y: r[e].y[1] >= r[e].y[0] ? d : f
                                },
                                direction: r[e].y[1] >= r[e].y[0] ? 1 : -1,
                                bounds: {
                                    x1: q,
                                    y1: Math.min(d, f),
                                    x2: n,
                                    y2: Math.max(d, f)
                                },
                                color: c
                            })
                        }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.fadeInAnimation,
                easingFunction: y.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    v.prototype.renderRangeBar = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = 0,
                f, g, k, e = Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
            f = a.axisX.dataInfo.minDiff;
            var p = 0.9 * (d.height / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(f) / a.plotType.totalDataSeries) << 0;
            p > e ? p = e : Infinity === f ? p = e : 1 > p && (p = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var h = 0; h < a.dataSeriesIndexes.length; h++) {
                var l = a.dataSeriesIndexes[h],
                    r = this.data[l],
                    m = r.dataPoints;
                if (0 < m.length) {
                    var q = 5 < p && r.bevelEnabled ? !0 : !1;
                    b.strokeStyle = "#4572A7 ";
                    for (e = 0; e < m.length; e++)
                        if (m[e].getTime ? k = m[e].x.getTime() : k = m[e].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) &&
                            null !== m[e].y && m[e].y.length && "number" === typeof m[e].y[0] && "number" === typeof m[e].y[1]) {
                            d = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (m[e].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            f = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (m[e].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (k - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = g -
                                a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + h) * p << 0;
                            var n = g + p << 0;
                            d > f && (c = d, d = f, f = c);
                            c = m[e].color ? m[e].color : r._colorSet[e % r._colorSet.length];
                            F(b, d, g, f, n, c, 0, null, q, !1, !1, !1, r.fillOpacity);
                            c = r.dataPointIds[e];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: l,
                                dataPointIndex: e,
                                x1: d,
                                y1: g,
                                x2: f,
                                y2: n
                            };
                            c = C(c);
                            t && F(this._eventManager.ghostCtx, d, g, f, n, c, 0, null, !1, !1, !1, !1);
                            if (m[e].indexLabel || r.indexLabel) this._indexLabels.push({
                                chartType: "rangeBar",
                                dataPoint: m[e],
                                dataSeries: r,
                                indexKeyword: 0,
                                point: {
                                    x: m[e].y[1] >= m[e].y[0] ? d : f,
                                    y: g + (n - g) / 2
                                },
                                direction: m[e].y[1] >= m[e].y[0] ? -1 : 1,
                                bounds: {
                                    x1: Math.min(d, f),
                                    y1: g,
                                    x2: Math.max(d, f),
                                    y2: n
                                },
                                color: c
                            }), this._indexLabels.push({
                                chartType: "rangeBar",
                                dataPoint: m[e],
                                dataSeries: r,
                                indexKeyword: 1,
                                point: {
                                    x: m[e].y[1] >= m[e].y[0] ? f : d,
                                    y: g + (n - g) / 2
                                },
                                direction: m[e].y[1] >= m[e].y[0] ? 1 : -1,
                                bounds: {
                                    x1: Math.min(d, f),
                                    y1: g,
                                    x2: Math.max(d, f),
                                    y2: n
                                },
                                color: c
                            })
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.fadeInAnimation,
                easingFunction: y.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    v.prototype.renderRangeArea = function(a) {
        function b() {
            if (v) {
                var a = null;
                0 < p.lineThickness && c.stroke();
                for (var b = g.length - 1; 0 <= b; b--) a = g[b], c.lineTo(a.x, a.y), d.lineTo(a.x, a.y);
                c.closePath();
                c.globalAlpha = p.fillOpacity;
                c.fill();
                c.globalAlpha = 1;
                d.fill();
                if (0 < p.lineThickness) {
                    c.beginPath();
                    c.moveTo(a.x, a.y);
                    for (b = 0; b < g.length; b++) a = g[b], c.lineTo(a.x, a.y);
                    c.stroke()
                }
                c.beginPath();
                c.moveTo(m, q);
                d.beginPath();
                d.moveTo(m,
                    q);
                v = {
                    x: m,
                    y: q
                };
                g = [];
                g.push({
                    x: m,
                    y: n
                })
            }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = [],
                f = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(f.x1, f.y1, f.width, f.height);
            c.clip();
            t && (d.beginPath(), d.rect(f.x1, f.y1, f.width, f.height), d.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                var g = [],
                    k = a.dataSeriesIndexes[f],
                    p = this.data[k],
                    h = p.dataPoints,
                    e = p.id;
                this._eventManager.objectMap[e] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: k
                };
                e = C(e);
                d.fillStyle = e;
                var e = [],
                    l = !0,
                    r = 0,
                    m, q, n, s, v = null;
                if (0 < h.length) {
                    var u = p._colorSet[r % p._colorSet.length];
                    c.fillStyle = u;
                    c.strokeStyle = u;
                    c.lineWidth = p.lineThickness;
                    for (var x = !0; r < h.length; r++)
                        if (s = h[r].x.getTime ? h[r].x.getTime() : h[r].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax))
                            if (null !== h[r].y && h[r].y.length && "number" === typeof h[r].y[0] && "number" === typeof h[r].y[1]) {
                                m = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (s - a.axisX.conversionParameters.minimum) +
                                    0.5 << 0;
                                q = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (h[r].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                n = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (h[r].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                l || x ? (c.beginPath(), c.moveTo(m, q), v = {
                                    x: m,
                                    y: q
                                }, g = [], g.push({
                                    x: m,
                                    y: n
                                }), t && (d.beginPath(), d.moveTo(m, q)), x = l = !1) : (c.lineTo(m, q), g.push({
                                    x: m,
                                    y: n
                                }), t && d.lineTo(m, q), 0 == r % 250 && b());
                                s = p.dataPointIds[r];
                                this._eventManager.objectMap[s] = {
                                    id: s,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: r,
                                    x1: m,
                                    y1: q,
                                    y2: n
                                };
                                if (0 !== h[r].markerSize && (0 < h[r].markerSize || 0 < p.markerSize)) {
                                    var w = p.getMarkerProperties(r, m, n, c);
                                    e.push(w);
                                    var z = C(s);
                                    t && e.push({
                                        x: m,
                                        y: n,
                                        ctx: d,
                                        type: w.type,
                                        size: w.size,
                                        color: z,
                                        borderColor: z,
                                        borderThickness: w.borderThickness
                                    });
                                    w = p.getMarkerProperties(r, m, q, c);
                                    e.push(w);
                                    z = C(s);
                                    t && e.push({
                                        x: m,
                                        y: q,
                                        ctx: d,
                                        type: w.type,
                                        size: w.size,
                                        color: z,
                                        borderColor: z,
                                        borderThickness: w.borderThickness
                                    })
                                }
                                if (h[r].indexLabel || p.indexLabel) this._indexLabels.push({
                                    chartType: "rangeArea",
                                    dataPoint: h[r],
                                    dataSeries: p,
                                    indexKeyword: 0,
                                    point: {
                                        x: m,
                                        y: q
                                    },
                                    direction: h[r].y[0] <= h[r].y[1] ? -1 : 1,
                                    color: u
                                }), this._indexLabels.push({
                                    chartType: "rangeArea",
                                    dataPoint: h[r],
                                    dataSeries: p,
                                    indexKeyword: 1,
                                    point: {
                                        x: m,
                                        y: n
                                    },
                                    direction: h[r].y[0] <= h[r].y[1] ? 1 : -1,
                                    color: u
                                })
                            } else b(), x = !0;
                    b();
                    J.drawMarkers(e)
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: y.xClipAnimation,
                easingFunction: y.easing.linear,
                animationBase: 0
            }
        }
    };
    v.prototype.renderRangeSplineArea =
        function(a) {
            function b() {
                var a = fa(q, 2);
                if (0 < a.length) {
                    c.beginPath();
                    c.moveTo(a[0].x, a[0].y);
                    t && (d.beginPath(), d.moveTo(a[0].x, a[0].y));
                    for (var b = 0; b < a.length - 3; b += 3) c.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), t && d.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y);
                    0 < k.lineThickness && c.stroke();
                    a = fa(n, 2);
                    c.lineTo(n[n.length - 1].x, n[n.length - 1].y);
                    for (b = a.length - 1; 2 < b; b -= 3) c.bezierCurveTo(a[b - 1].x, a[b - 1].y, a[b - 2].x, a[b - 2].y, a[b - 3].x, a[b - 3].y), t && d.bezierCurveTo(a[b -
                        1].x, a[b - 1].y, a[b - 2].x, a[b - 2].y, a[b - 3].x, a[b - 3].y);
                    c.closePath();
                    c.globalAlpha = k.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    if (0 < k.lineThickness) {
                        c.beginPath();
                        c.moveTo(n[n.length - 1].x, n[n.length - 1].y);
                        for (b = a.length - 1; 2 < b; b -= 3) c.bezierCurveTo(a[b - 1].x, a[b - 1].y, a[b - 2].x, a[b - 2].y, a[b - 3].x, a[b - 3].y), t && d.bezierCurveTo(a[b - 1].x, a[b - 1].y, a[b - 2].x, a[b - 2].y, a[b - 3].x, a[b - 3].y);
                        c.stroke()
                    }
                    c.beginPath();
                    t && (d.closePath(), d.fill())
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var d =
                    this._eventManager.ghostCtx,
                    e = [],
                    f = this.plotArea;
                c.save();
                t && d.save();
                c.beginPath();
                c.rect(f.x1, f.y1, f.width, f.height);
                c.clip();
                t && (d.beginPath(), d.rect(f.x1, f.y1, f.width, f.height), d.clip());
                for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                    var g = a.dataSeriesIndexes[f],
                        k = this.data[g],
                        p = k.dataPoints,
                        e = k.id;
                    this._eventManager.objectMap[e] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: g
                    };
                    e = C(e);
                    d.fillStyle = e;
                    var e = [],
                        h = 0,
                        l, r, m, q = [],
                        n = [];
                    if (0 < p.length) {
                        color = k._colorSet[h % k._colorSet.length];
                        c.fillStyle = color;
                        c.strokeStyle =
                            color;
                        for (c.lineWidth = k.lineThickness; h < p.length; h++)
                            if (l = p[h].x.getTime ? p[h].x.getTime() : p[h].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax))
                                if (null !== p[h].y && p[h].y.length && "number" === typeof p[h].y[0] && "number" === typeof p[h].y[1]) {
                                    l = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (l - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                    r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (p[h].y[0] - a.axisY.conversionParameters.minimum) +
                                        0.5 << 0;
                                    m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (p[h].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                    var s = k.dataPointIds[h];
                                    this._eventManager.objectMap[s] = {
                                        id: s,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: g,
                                        dataPointIndex: h,
                                        x1: l,
                                        y1: r,
                                        y2: m
                                    };
                                    q[q.length] = {
                                        x: l,
                                        y: r
                                    };
                                    n[n.length] = {
                                        x: l,
                                        y: m
                                    };
                                    if (0 !== p[h].markerSize && (0 < p[h].markerSize || 0 < k.markerSize)) {
                                        var v = k.getMarkerProperties(h, l, r, c);
                                        e.push(v);
                                        var u = C(s);
                                        t && e.push({
                                            x: l,
                                            y: r,
                                            ctx: d,
                                            type: v.type,
                                            size: v.size,
                                            color: u,
                                            borderColor: u,
                                            borderThickness: v.borderThickness
                                        });
                                        v = k.getMarkerProperties(h, l, m, c);
                                        e.push(v);
                                        u = C(s);
                                        t && e.push({
                                            x: l,
                                            y: m,
                                            ctx: d,
                                            type: v.type,
                                            size: v.size,
                                            color: u,
                                            borderColor: u,
                                            borderThickness: v.borderThickness
                                        })
                                    }
                                    if (p[h].indexLabel || k.indexLabel) this._indexLabels.push({
                                        chartType: "splineArea",
                                        dataPoint: p[h],
                                        dataSeries: k,
                                        indexKeyword: 0,
                                        point: {
                                            x: l,
                                            y: r
                                        },
                                        direction: p[h].y[0] <= p[h].y[1] ? -1 : 1,
                                        color: color
                                    }), this._indexLabels.push({
                                        chartType: "splineArea",
                                        dataPoint: p[h],
                                        dataSeries: k,
                                        indexKeyword: 1,
                                        point: {
                                            x: l,
                                            y: m
                                        },
                                        direction: p[h].y[0] <= p[h].y[1] ? 1 : -1,
                                        color: color
                                    })
                                } else 0 < h && (b(), q = [], n = []);
                        b();
                        J.drawMarkers(e)
                    }
                }
                c.restore();
                t && this._eventManager.ghostCtx.restore();
                return {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xClipAnimation,
                    easingFunction: y.easing.linear,
                    animationBase: 0
                }
            }
        };
    var pa = function(a, b, c, d, e, f, g, k) {
        "undefined" === typeof k && (k = 1);
        if (!t) {
            var p = Number((g % (2 * Math.PI)).toFixed(8));
            Number((f % (2 * Math.PI)).toFixed(8)) === p && (g -= 1E-4)
        }
        a.save();
        a.globalAlpha = k;
        "pie" === e ? (a.beginPath(), a.moveTo(b.x, b.y),
            a.arc(b.x, b.y, c, f, g, !1), a.fillStyle = d, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(b.x, b.y, c, f, g, !1), a.arc(b.x, b.y, 0.6 * c, g, f, !0), a.closePath(), a.fillStyle = d, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
        a.globalAlpha = 1;
        a.restore()
    };
    v.prototype.renderPie = function(a) {
        function b() {
            if (h && l) {
                var a = 0,
                    b = 0,
                    c = 0,
                    d = 0;
                for (A = 0; A < l.length; A++) {
                    var e = l[A],
                        g = h.dataPointIds[A],
                        f = {
                            id: g,
                            objectType: "dataPoint",
                            dataPointIndex: A,
                            dataSeriesIndex: 0
                        };
                    n.push(f);
                    var k = e.indexLabel ?
                        e.indexLabel : h.indexLabel ? h.indexLabel : e.label ? e.label : h.label ? h.label : "";
                    p._eventManager.objectMap[g] = f;
                    f.center = {
                        x: w.x,
                        y: w.y
                    };
                    f.y = e.y;
                    f.radius = y;
                    f.indexLabelText = p.replaceKeywordsWithValue(k, e, h, A);
                    f.indexLabelPlacement = h.indexLabelPlacement;
                    f.indexLabelLineColor = e.indexLabelLineColor ? e.indexLabelLineColor : h.indexLabelLineColor ? h.indexLabelLineColor : e.color ? e.color : h._colorSet[A % h._colorSet.length];
                    f.indexLabelLineThickness = e.indexLabelLineThickness ? e.indexLabelLineThickness : h.indexLabelLineThickness;
                    f.indexLabelFontColor = e.indexLabelFontColor ? e.indexLabelFontColor : h.indexLabelFontColor;
                    f.indexLabelFontStyle = e.indexLabelFontStyle ? e.indexLabelFontStyle : h.indexLabelFontStyle;
                    f.indexLabelFontWeight = e.indexLabelFontWeight ? e.indexLabelFontWeight : h.indexLabelFontWeight;
                    f.indexLabelFontSize = e.indexLabelFontSize ? e.indexLabelFontSize : h.indexLabelFontSize;
                    f.indexLabelFontFamily = e.indexLabelFontFamily ? e.indexLabelFontFamily : h.indexLabelFontFamily;
                    f.indexLabelBackgroundColor = e.indexLabelBackgroundColor ? e.indexLabelBackgroundColor :
                        h.indexLabelBackgroundColor ? h.indexLabelBackgroundColor : null;
                    f.indexLabelMaxWidth = e.indexLabelMaxWidth ? e.indexLabelMaxWidth : h.indexLabelMaxWidth ? h.indexLabelMaxWidth : 0.33 * m.width;
                    f.indexLabelWrap = "undefined" !== typeof e.indexLabelWrap ? e.indexLabelWrap : h.indexLabelWrap;
                    f.startAngle = 0 === A ? h.startAngle ? h.startAngle / 180 * Math.PI : 0 : n[A - 1].endAngle;
                    f.startAngle = (f.startAngle + 2 * Math.PI) % (2 * Math.PI);
                    f.endAngle = f.startAngle + 2 * Math.PI / C * Math.abs(e.y);
                    e = (f.endAngle + f.startAngle) / 2;
                    e = (e + 2 * Math.PI) % (2 * Math.PI);
                    f.midAngle = e;
                    if (f.midAngle > Math.PI / 2 - u && f.midAngle < Math.PI / 2 + u) {
                        if (0 === a || n[c].midAngle > f.midAngle) c = A;
                        a++
                    } else if (f.midAngle > 3 * Math.PI / 2 - u && f.midAngle < 3 * Math.PI / 2 + u) {
                        if (0 === b || n[d].midAngle > f.midAngle) d = A;
                        b++
                    }
                    f.hemisphere = e > Math.PI / 2 && e <= 3 * Math.PI / 2 ? "left" : "right";
                    f.indexLabelTextBlock = new I(p.plotArea.ctx, {
                        fontSize: f.indexLabelFontSize,
                        fontFamily: f.indexLabelFontFamily,
                        fontColor: f.indexLabelFontColor,
                        fontStyle: f.indexLabelFontStyle,
                        fontWeight: f.indexLabelFontWeight,
                        horizontalAlign: "left",
                        backgroundColor: f.indexLabelBackgroundColor,
                        maxWidth: f.indexLabelMaxWidth,
                        maxHeight: f.indexLabelWrap ? 5 * f.indexLabelFontSize : 1.5 * f.indexLabelFontSize,
                        text: f.indexLabelText,
                        padding: 0,
                        textBaseline: "top"
                    });
                    f.indexLabelTextBlock.measureText()
                }
                g = e = 0;
                k = !1;
                for (A = 0; A < l.length; A++) f = n[(c + A) % l.length], 1 < a && (f.midAngle > Math.PI / 2 - u && f.midAngle < Math.PI / 2 + u) && (e <= a / 2 && !k ? (f.hemisphere = "right", e++) : (f.hemisphere = "left", k = !0));
                k = !1;
                for (A = 0; A < l.length; A++) f = n[(d + A) % l.length], 1 < b && (f.midAngle > 3 * Math.PI / 2 - u && f.midAngle < 3 * Math.PI / 2 + u) && (g <= b / 2 && !k ? (f.hemisphere =
                    "left", g++) : (f.hemisphere = "right", k = !0))
            }
        }

        function c(a) {
            var b = p.plotArea.ctx;
            b.clearRect(m.x1, m.y1, m.width, m.height);
            b.fillStyle = p.backgroundColor;
            b.fillRect(m.x1, m.y1, m.width, m.height);
            for (b = 0; b < l.length; b++) {
                var c = n[b].startAngle,
                    d = n[b].endAngle;
                if (d > c) {
                    var e = 0.07 * y * Math.cos(n[b].midAngle),
                        f = 0.07 * y * Math.sin(n[b].midAngle),
                        g = !1;
                    if (l[b].exploded) {
                        if (1E-9 < Math.abs(n[b].center.x - (w.x + e)) || 1E-9 < Math.abs(n[b].center.y - (w.y + f))) n[b].center.x = w.x + e * a, n[b].center.y = w.y + f * a, g = !0
                    } else if (0 < Math.abs(n[b].center.x -
                            w.x) || 0 < Math.abs(n[b].center.y - w.y)) n[b].center.x = w.x + e * (1 - a), n[b].center.y = w.y + f * (1 - a), g = !0;
                    g && (e = {}, e.dataSeries = h, e.dataPoint = h.dataPoints[b], e.index = b, p._toolTip.highlightObjects([e]));
                    pa(p.plotArea.ctx, n[b].center, n[b].radius, l[b].color ? l[b].color : h._colorSet[b % h._colorSet.length], h.type, c, d, h.fillOpacity)
                }
            }
            a = p.plotArea.ctx;
            a.fillStyle = "black";
            a.strokeStyle = "grey";
            a.textBaseline = "middle";
            a.lineJoin = "round";
            for (b = b = 0; b < l.length; b++) c = n[b], c.indexLabelText && (c.indexLabelTextBlock.y -= c.indexLabelTextBlock.height /
                2, d = 0, d = "left" === c.hemisphere ? "inside" !== h.indexLabelPlacement ? -(c.indexLabelTextBlock.width + r) : -c.indexLabelTextBlock.width / 2 : "inside" !== h.indexLabelPlacement ? r : -c.indexLabelTextBlock.width / 2, c.indexLabelTextBlock.x += d, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= d, c.indexLabelTextBlock.y += c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement && (d = c.center.x + y * Math.cos(c.midAngle), e = c.center.y + y * Math.sin(c.midAngle), a.strokeStyle = c.indexLabelLineColor, a.lineWidth = c.indexLabelLineThickness,
                    a.beginPath(), a.moveTo(d, e), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -r : r), c.indexLabelTextBlock.y), a.stroke()), a.lineJoin = "miter")
        }

        function d(a, b) {
            var c = a.indexLabelTextBlock.x,
                d = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                e = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
                f = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                g = b.indexLabelTextBlock.x + b.indexLabelTextBlock.width,
                l = b.indexLabelTextBlock.y +
                b.indexLabelTextBlock.height / 2;
            return a.indexLabelTextBlock.x + a.indexLabelTextBlock.width < b.indexLabelTextBlock.x - r || c > g + r || d > l + r || e < f - r ? !1 : !0
        }

        function e(a, b) {
            var c = 0,
                c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
                e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                f = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
            return c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - d : c - f
        }

        function f(a) {
            for (var b = null, c = 1; c < l.length; c++)
                if (b =
                    (a + c + n.length) % n.length, n[b].hemisphere !== n[a].hemisphere) {
                    b = null;
                    break
                } else if (n[b].indexLabelText && b !== a && (0 > e(n[b], n[a]) || ("right" === n[a].hemisphere ? n[b].indexLabelTextBlock.y >= n[a].indexLabelTextBlock.y : n[b].indexLabelTextBlock.y <= n[a].indexLabelTextBlock.y))) break;
            else b = null;
            return b
        }

        function g(a, b) {
            b = b || 0;
            var c = 0,
                d = w.y - 1 * z,
                h = w.y + 1 * z;
            if (0 <= a && a < l.length) {
                var m = n[a];
                if (0 > b && m.indexLabelTextBlock.y < d || 0 < b && m.indexLabelTextBlock.y > h) return 0;
                var k = b,
                    p = 0,
                    r = 0,
                    r = p = p = 0;
                0 > k ? m.indexLabelTextBlock.y -
                    m.indexLabelTextBlock.height / 2 > d && m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2 + k < d && (k = -(d - (m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2 + k))) : m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2 < d && m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2 + k > h && (k = m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2 + k - h);
                k = m.indexLabelTextBlock.y + k;
                d = 0;
                d = "right" === m.hemisphere ? w.x + Math.sqrt(Math.pow(z, 2) - Math.pow(k - w.y, 2)) : w.x - Math.sqrt(Math.pow(z, 2) - Math.pow(k - w.y, 2));
                r = w.x + y *
                    Math.cos(m.midAngle);
                p = w.y + y * Math.sin(m.midAngle);
                p = Math.sqrt(Math.pow(d - r, 2) + Math.pow(k - p, 2));
                r = Math.acos(y / z);
                p = Math.acos((z * z + y * y - p * p) / (2 * y * z));
                k = p < r ? k - m.indexLabelTextBlock.y : 0;
                d = null;
                for (h = 1; h < l.length; h++)
                    if (d = (a - h + n.length) % n.length, n[d].hemisphere !== n[a].hemisphere) {
                        d = null;
                        break
                    } else if (n[d].indexLabelText && n[d].hemisphere === n[a].hemisphere && d !== a && (0 > e(n[d], n[a]) || ("right" === n[a].hemisphere ? n[d].indexLabelTextBlock.y <= n[a].indexLabelTextBlock.y : n[d].indexLabelTextBlock.y >= n[a].indexLabelTextBlock.y))) break;
                else d = null;
                r = d;
                p = f(a);
                h = d = 0;
                0 > k ? (h = "right" === m.hemisphere ? r : p, c = k, null !== h && (r = -k, k = m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2 - (n[h].indexLabelTextBlock.y + n[h].indexLabelTextBlock.height / 2), k - r < s && (d = -r, q++, h = g(h, d), +h.toFixed(v) > +d.toFixed(v) && (c = k > s ? -(k - s) : -(r - (h - d)))))) : 0 < k && (h = "right" === m.hemisphere ? p : r, c = k, null !== h && (r = k, k = n[h].indexLabelTextBlock.y - n[h].indexLabelTextBlock.height / 2 - (m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2), k - r < s && (d = r, q++, h = g(h, d), +h.toFixed(v) < +d.toFixed(v) &&
                    (c = k > s ? k - s : r - (d - h)))));
                c && (k = m.indexLabelTextBlock.y + c, d = 0, d = "right" === m.hemisphere ? w.x + Math.sqrt(Math.pow(z, 2) - Math.pow(k - w.y, 2)) : w.x - Math.sqrt(Math.pow(z, 2) - Math.pow(k - w.y, 2)), m.midAngle > Math.PI / 2 - u && m.midAngle < Math.PI / 2 + u ? (h = (a - 1 + n.length) % n.length, h = n[h], r = n[(a + 1 + n.length) % n.length], "left" === m.hemisphere && "right" === h.hemisphere && d > h.indexLabelTextBlock.x ? d = h.indexLabelTextBlock.x - 15 : "right" === m.hemisphere && ("left" === r.hemisphere && d < r.indexLabelTextBlock.x) && (d = r.indexLabelTextBlock.x + 15)) : m.midAngle >
                    3 * Math.PI / 2 - u && m.midAngle < 3 * Math.PI / 2 + u && (h = (a - 1 + n.length) % n.length, h = n[h], r = n[(a + 1 + n.length) % n.length], "right" === m.hemisphere && "left" === h.hemisphere && d < h.indexLabelTextBlock.x ? d = h.indexLabelTextBlock.x + 15 : "left" === m.hemisphere && ("right" === r.hemisphere && d > r.indexLabelTextBlock.x) && (d = r.indexLabelTextBlock.x - 15)), m.indexLabelTextBlock.y = k, m.indexLabelTextBlock.x = d, m.indexLabelAngle = Math.atan2(m.indexLabelTextBlock.y - w.y, m.indexLabelTextBlock.x - w.x))
            }
            return c
        }

        function k() {
            var a = p.plotArea.ctx;
            a.fillStyle =
                "grey";
            a.strokeStyle = "grey";
            a.font = "16px Arial";
            a.textBaseline = "middle";
            for (var b = 0, c = a = 0, a = 0; 10 > a && (1 > a || 0 < c); a++) {
                y -= c;
                c = 0;
                if ("inside" !== h.indexLabelPlacement) {
                    z = y * t;
                    for (b = 0; b < l.length; b++) {
                        var k = n[b];
                        k.indexLabelTextBlock.x = w.x + z * Math.cos(k.midAngle);
                        k.indexLabelTextBlock.y = w.y + z * Math.sin(k.midAngle);
                        k.indexLabelAngle = k.midAngle;
                        k.radius = y
                    }
                    for (var q, u, b = 0; b < l.length; b++) {
                        var k = n[b],
                            A = f(b);
                        if (null !== A) {
                            q = n[b];
                            u = n[A];
                            var D = 0,
                                D = e(q, u) - s;
                            if (0 > D) {
                                for (var C = u = q = 0; C < l.length; C++) C !== b && n[C].hemisphere ===
                                    k.hemisphere && (n[C].indexLabelTextBlock.y < k.indexLabelTextBlock.y ? q++ : u++);
                                C = D / (q + u || 1) * u;
                                q = -1 * (D - C);
                                var E = u = 0;
                                "right" === k.hemisphere ? (u = g(b, C), q = -1 * (D - u), E = g(A, q), +E.toFixed(v) < +q.toFixed(v) && +u.toFixed(v) <= +C.toFixed(v) && g(b, -(q - E))) : (u = g(A, C), q = -1 * (D - u), E = g(b, q), +E.toFixed(v) < +q.toFixed(v) && +u.toFixed(v) <= +C.toFixed(v) && g(A, -(q - E)))
                            }
                        }
                    }
                } else
                    for (b = 0; b < l.length; b++) k = n[b], z = "pie" === h.type ? 0.7 * y : 0.8 * y, D = w.x + z * Math.cos(k.midAngle), C = w.y + z * Math.sin(k.midAngle), k.indexLabelTextBlock.x = D, k.indexLabelTextBlock.y =
                        C;
                for (b = 0; b < l.length; b++) k = n[b], D = k.indexLabelTextBlock.measureText(), 0 !== D.height && 0 !== D.width && (D = D = 0, "right" === k.hemisphere ? (D = m.x2 - (k.indexLabelTextBlock.x + k.indexLabelTextBlock.width + r), D *= -1) : D = m.x1 - (k.indexLabelTextBlock.x - k.indexLabelTextBlock.width - r), 0 < D && (Math.abs(k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 - w.y) < y || Math.abs(k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2 - w.y) < y) && (D /= Math.abs(Math.cos(k.indexLabelAngle)), 9 < D && (D *= 0.3), D > c && (c = D)), D = D = 0, 0 < k.indexLabelAngle &&
                    k.indexLabelAngle < Math.PI ? (D = m.y2 - (k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2 + 5), D *= -1) : D = m.y1 - (k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 - 5), 0 < D && Math.abs(k.indexLabelTextBlock.x - w.x) < y && (D /= Math.abs(Math.sin(k.indexLabelAngle)), 9 < D && (D *= 0.3), D > c && (c = D)));
                b = function(a, b, c) {
                    for (var d = [], e = 0; d.push(n[b]), b !== c; b = (b + 1 + l.length) % l.length);
                    d.sort(function(a, b) {
                        return a.y - b.y
                    });
                    for (b = 0; b < d.length; b++)
                        if (c = d[b], e < a) e += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText =
                            "", c.indexLabelTextBlock.measureText();
                        else break
                };
                A = k = -1;
                for (C = E = 0; C < l.length; C++)
                    if (q = n[C], q.indexLabelText) {
                        var F = f(C);
                        null !== F && (u = n[F], D = 0, D = e(q, u), 0 > D && d(q, u) ? (0 > k && (k = C), F !== k && (A = F), E += -D) : 0 < E && (b(E, k, A), A = k = -1, E = 0))
                    }
                0 < E && b(E, k, A)
            }
        }
        var p = this;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            for (var h = this.data[a.dataSeriesIndexes[0]], l = h.dataPoints, r = 10, m = this.plotArea, q = 0, n = [], s = 2, t = 1.3, u = 20 / 180 * Math.PI, v = 6, w = {
                    x: (m.x2 + m.x1) / 2,
                    y: (m.y2 + m.y1) / 2
                }, y = "inside" === h.indexLabelPlacement ? 0.92 * Math.min(m.width,
                    m.height) / 2 : 0.8 * Math.min(m.width, m.height) / 2, z = y * t, C = 0, A = 0; A < l.length; A++) C += Math.abs(l[A].y);
            0 !== C && (this.pieDoughnutClickHandler = function(a) {
                p.isAnimating || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && p._animator.animate(0, 500, function(a) {
                    c(a)
                }))
            }, b(), k(), this.disableToolTip = !0, this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a) {
                var b = p.plotArea.ctx;
                b.clearRect(m.x1, m.y1, m.width, m.height);
                b.fillStyle = p.backgroundColor;
                b.fillRect(m.x1, m.y1, m.width,
                    m.height);
                a = n[0].startAngle + 2 * Math.PI * a;
                for (b = 0; b < l.length; b++) {
                    var c = 0 === b ? n[b].startAngle : d,
                        d = c + (n[b].endAngle - n[b].startAngle),
                        e = !1;
                    d > a && (d = a, e = !0);
                    var f = l[b].color ? l[b].color : h._colorSet[b % h._colorSet.length];
                    d > c && pa(p.plotArea.ctx, n[b].center, n[b].radius, f, h.type, c, d, h.fillOpacity);
                    if (e) break
                }
            }, function() {
                p.disableToolTip = !1;
                p._animator.animate(0, p.animatedRender ? 500 : 0, function(a) {
                    c(a)
                })
            }))
        }
    };
    v.prototype.animationRequestId = null;
    v.prototype.requestAnimFrame = function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1E3 / 60)
            }
    }();
    v.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    aa.prototype.registerSpace = function(a, b) {
        "top" === a ? this._topOccupied += b.height : "bottom" === a ?
            this._bottomOccupied += b.height : "left" === a ? this._leftOccupied += b.width : "right" === a && (this._rightOccupied += b.width)
    };
    aa.prototype.unRegisterSpace = function(a, b) {
        "top" === a ? this._topOccupied -= b.height : "bottom" === a ? this._bottomOccupied -= b.height : "left" === a ? this._leftOccupied -= b.width : "right" === a && (this._rightOccupied -= b.width)
    };
    aa.prototype.getFreeSpace = function() {
        return {
            x1: this._leftOccupied,
            y1: this._topOccupied,
            x2: this.chart.width - this._rightOccupied,
            y2: this.chart.height - this._bottomOccupied,
            width: this.chart.width -
                this._rightOccupied - this._leftOccupied,
            height: this.chart.height - this._bottomOccupied - this._topOccupied
        }
    };
    aa.prototype.reset = function() {
        this._topOccupied = 0;
        this._bottomOccupied = 3;
        this._rightOccupied = this._leftOccupied = 0
    };
    O(I, L);
    I.prototype.render = function(a) {
        a && this.ctx.save();
        var b = this.ctx.font;
        this.ctx.textBaseline = this.textBaseline;
        var c = 0;
        this._isDirty && this.measureText(this.ctx);
        this.ctx.translate(this.x, this.y + c);
        "middle" === this.textBaseline && (c = -this._lineHeight / 2);
        this.ctx.font = this._getFontString();
        this.ctx.rotate(Math.PI / 180 * this.angle);
        var d = 0,
            e = this.padding,
            f = null;
        (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, c, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
        this.ctx.fillStyle = this.fontColor;
        for (c = 0; c < this._wrappedText.lines.length; c++) f = this._wrappedText.lines[c], "right" === this.horizontalAlign ? d = this.width - f.width - this.padding : "left" === this.horizontalAlign ? d = this.padding : "center" === this.horizontalAlign &&
            (d = (this.width - 2 * this.padding) / 2 - f.width / 2 + this.padding), this.ctx.fillText(f.text, d, e), e += f.height;
        this.ctx.font = b;
        a && this.ctx.restore()
    };
    I.prototype.setText = function(a) {
        this.text = a;
        this._isDirty = !0;
        this._wrappedText = null
    };
    I.prototype.measureText = function() {
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return {
            width: this.width,
            height: this.height
        }
    };
    I.prototype._getLineWithWidth = function(a, b, c) {
        a = String(a);
        if (!a) return {
            text: "",
            width: 0
        };
        var d = c = 0,
            e = a.length - 1,
            f = Infinity;
        for (this.ctx.font = this._getFontString(); d <= e;) {
            var f = Math.floor((d + e) / 2),
                g = a.substr(0, f + 1);
            c = this.ctx.measureText(g).width;
            if (c < b) d = f + 1;
            else if (c > b) e = f - 1;
            else break
        }
        c > b && 1 < g.length && (g = g.substr(0, g.length - 1), c = this.ctx.measureText(g).width);
        b = !0;
        if (g.length === a.length || " " === a[g.length]) b = !1;
        b && (a = g.split(" "), 1 < a.length && a.pop(), g = a.join(" "), c = this.ctx.measureText(g).width);
        return {
            text: g,
            width: c
        }
    };
    I.prototype._wrapText = function() {
        var a = new String(Z(this.text)),
            b = [],
            c = this.ctx.font,
            d = 0,
            e = 0;
        for (this.ctx.font = this._getFontString(); 0 < a.length;) {
            var f = this.maxHeight - 2 * this.padding,
                g = this._getLineWithWidth(a, this.maxWidth - 2 * this.padding, !1);
            g.height = this._lineHeight;
            b.push(g);
            e = Math.max(e, g.width);
            d += g.height;
            a = Z(a.slice(g.text.length, a.length));
            f && d > f && (g = b.pop(), d -= g.height)
        }
        this._wrappedText = {
            lines: b,
            width: e,
            height: d
        };
        this.width = e + 2 * this.padding;
        this.height = d + 2 * this.padding;
        this.ctx.font = c
    };
    I.prototype._getFontString = function() {
        return ua("", this, null)
    };
    O(ba,
        L);
    ba.prototype.render = function() {
        if (this.text) {
            var a = this.chart.layoutManager.getFreeSpace(),
                b = 0,
                c = 0,
                d = 0,
                e = 0,
                f = 0,
                g, k;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (e = a.width - 2 * this.margin, f = 0.5 * a.height - 2 * this.margin, d = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (e = a.height - 2 * this.margin, f = 0.5 * a.width - 2 * this.margin) : "center" === this.horizontalAlign && (e = a.width - 2 * this.margin, f = 0.5 * a.height - 2 * this.margin));
            var f = new I(this.ctx, {
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    fontWeight: this.fontWeight,
                    horizontalAlign: this.horizontalAlign,
                    verticalAlign: this.verticalAlign,
                    borderColor: this.borderColor,
                    borderThickness: this.borderThickness,
                    backgroundColor: this.backgroundColor,
                    maxWidth: e,
                    maxHeight: f,
                    cornerRadius: this.cornerRadius,
                    text: this.text,
                    padding: this.padding,
                    textBaseline: "top"
                }),
                p = f.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (c = this.margin,
                k = "top") : "bottom" === this.verticalAlign && (c = a.y2 - this.margin - p.height, k = "bottom"), "left" === this.horizontalAlign ? b = a.x1 + this.margin : "center" === this.horizontalAlign ? b = a.x1 + (e / 2 - p.width / 2) + this.margin : "right" === this.horizontalAlign && (b = a.x2 - this.margin - p.width), g = this.horizontalAlign, this.width = p.width, this.height = p.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (b = a.x1 + this.margin, c = a.y2 - this.margin - (e / 2 - p.width / 2), d = -90, k = "left", this.width = p.height, this.height = p.width) : "right" ===
                this.horizontalAlign ? (b = a.x2 - this.margin, c = a.y1 + this.margin + (e / 2 - p.width / 2), d = 90, k = "right", this.width = p.height, this.height = p.width) : "center" === this.horizontalAlign && (c = a.y1 + (a.height / 2 - p.height / 2), b = a.x1 + (a.width / 2 - p.width / 2), k = "center", this.width = p.width, this.height = p.height), g = "center");
            f.x = b;
            f.y = c;
            f.angle = d;
            f.horizontalAlign = g;
            f.render(!0);
            this.chart.layoutManager.registerSpace(k, {
                width: this.width + 2 * this.margin,
                height: this.height + 2 * this.margin
            });
            this.bounds = {
                x1: b,
                y1: c,
                x2: b + this.width,
                y2: c + this.height
            };
            this.ctx.textBaseline = "top"
        }
    };
    O(ga, L);
    ga.prototype.render = function() {
        var a = this.chart.layoutManager.getFreeSpace(),
            b = null,
            c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = [],
            k = [];
        "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal", b = this.verticalAlign, e = 0.9 * a.width, f = 0.5 * a.height) : "center" === this.verticalAlign && (this.orientation = "vertical", b = this.horizontalAlign, e = 0.5 * a.width, f = 0.9 * a.height);
        for (var p = 0; p < this.dataSeries.length; p++) {
            var h = this.dataSeries[p],
                l = h.legendMarkerType ? h.legendMarkerType :
                "line" !== h.type && "stepLine" !== h.type && "spline" !== h.type && "scatter" !== h.type && "bubble" !== h.type || !h.markerType ? P.getDefaultLegendMarker(h.type) : h.markerType,
                r = h.legendText ? h.legendText : h.name,
                m = h.legendMarkerColor ? h.legendMarkerColor : h.markerColor ? h.markerColor : h._colorSet[0],
                q = h.markerSize || "line" !== h.type && "stepLine" !== h.type && "spline" !== h.type ? 0.6 * this.lineHeight : 0,
                n = h.legendMarkerBorderColor ? h.legendMarkerBorderColor : h.markerBorderColor,
                s = h.legendMarkerBorderThickness ? h.legendMarkerBorderThickness :
                h.markerBorderThickness ? Math.max(1, Math.round(0.2 * q)) : 0;
            if ("pie" !== h.type && "doughnut" !== h.type && "funnel" !== h.type) l = {
                markerType: l,
                markerColor: m,
                text: r,
                textBlock: null,
                chartType: h.type,
                markerSize: q,
                lineColor: h._colorSet[0],
                dataSeriesIndex: h.index,
                dataPointIndex: null,
                markerBorderColor: n,
                markerBorderThickness: s
            }, g.push(l);
            else
                for (var t = 0; t < h.dataPoints.length; t++) s = h.dataPoints[t], l = s.legendMarkerType ? s.legendMarkerType : h.legendMarkerType ? h.legendMarkerType : P.getDefaultLegendMarker(h.type), r = s.legendText ?
                    s.legendText : h.legendText ? h.legendText : s.name ? s.name : "DataPoint: " + (t + 1), m = s.legendMarkerColor ? s.legendMarkerColor : h.legendMarkerColor ? h.legendMarkerColor : s.color ? s.color : h.color ? h.color : h._colorSet[t % h._colorSet.length], q = 0 === s.markerSize || 0 === h.markerSize && !s.markerSize ? 0 : 0.6 * this.lineHeight, n = s.legendMarkerBorderColor ? s.legendMarkerBorderColor : h.legendMarkerBorderColor ? h.legendMarkerBorderColor : s.markerBorderColor ? s.markerBorderColor : h.markerBorderColor, s = s.legendMarkerBorderThickness ? s.legendMarkerBorderThickness :
                    h.legendMarkerBorderThickness ? h.legendMarkerBorderThickness : s.markerBorderThickness || h.markerBorderThickness ? Math.max(1, Math.round(0.2 * q)) : 0, l = {
                        markerType: l,
                        markerColor: m,
                        text: r,
                        textBlock: null,
                        chartType: h.type,
                        markerSize: q,
                        dataSeriesIndex: p,
                        dataPointIndex: t,
                        markerBorderColor: n,
                        markerBorderThickness: s
                    }, g.push(l)
        }
        if (0 < g.length) {
            h = null;
            for (p = t = 0; p < g.length; p++) {
                l = g[p];
                if ("horizontal" === this.orientation) {
                    l.textBlock = new I(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: e,
                        maxHeight: this.lineHeight,
                        angle: 0,
                        text: l.text,
                        horizontalAlign: "left",
                        fontSize: this.fontSize,
                        fontFamily: this.fontFamily,
                        fontWeight: this.fontWeight,
                        fontColor: this.fontColor,
                        fontStyle: this.fontStyle,
                        textBaseline: "top"
                    });
                    l.textBlock.measureText();
                    if (!h || h.width + l.textBlock.width + (0 === h.width ? 0 : this.horizontalSpacing) > e) h = {
                        items: [],
                        width: 0
                    }, k.push(h), this.height = k.length * (l.textBlock.height + 5);
                    l.textBlock.x = h.width;
                    l.textBlock.y = 0;
                    h.width += Math.round(l.textBlock.width + l.textBlock._lineHeight + (0 === h.width ? 0 : 0.5 * l.textBlock._lineHeight))
                } else this.height + this.lineHeight <
                    f ? (h = {
                        items: [],
                        width: 0
                    }, k.push(h), this.height = k.length * this.lineHeight) : (h = k[t], t = (t + 1) % k.length), l.textBlock = new I(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: e,
                        maxHeight: 1.5 * this.fontSize,
                        angle: 0,
                        text: l.text,
                        horizontalAlign: "left",
                        fontSize: this.fontSize,
                        fontFamily: this.fontFamily,
                        fontWeight: this.fontWeight,
                        fontColor: this.fontColor,
                        fontStyle: this.fontStyle,
                        textBaseline: "top"
                    }), l.textBlock.measureText(), l.textBlock.x = h.width, l.textBlock.y = 0, h.width += l.textBlock.width + l.textBlock._lineHeight + (0 === h.width ? 0 : 0.5 * l.textBlock._lineHeight);
                h.items.push(l);
                this.width = Math.max(h.width, this.width)
            }
            this.height = k.length * this.lineHeight
        }
        "top" === this.verticalAlign ? (d = "left" === this.horizontalAlign ? a.x1 + 2 : "right" === this.horizontalAlign ? a.x2 - this.width - 2 : a.x1 + a.width / 2 - this.width / 2, c = a.y1) : "center" === this.verticalAlign ? (d = "left" === this.horizontalAlign ? a.x1 + 2 : "right" === this.horizontalAlign ? a.x2 - this.width - 2 : a.x1 + a.width / 2 - this.width / 2, c = a.y1 + a.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (d = "left" === this.horizontalAlign ? a.x1 + 2 : "right" ===
            this.horizontalAlign ? a.x2 - this.width - 2 : a.x1 + a.width / 2 - this.width / 2, c = a.y2 - this.height - 5);
        this.items = g;
        for (p = 0; p < this.items.length; p++) l = g[p], l.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[l.id] = {
            id: l.id,
            objectType: "legendItem",
            legendItemIndex: p,
            dataSeriesIndex: l.dataSeriesIndex,
            dataPointIndex: l.dataPointIndex
        };
        for (p = 0; p < k.length; p++)
            for (h = k[p], a = 0; a < h.items.length; a++) {
                l = h.items[a];
                f = l.textBlock.x + d + (0 === a ? 0.2 * l.markerSize : 0.4 * this.lineHeight + 0.2 * l.markerSize);
                g = c +
                    p * this.lineHeight;
                e = f;
                this.chart.data[l.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                if ("line" === l.chartType || "stepLine" === l.chartType || "spline" === l.chartType) this.ctx.strokeStyle = l.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(f - 0.1 * this.lineHeight, g + this.lineHeight / 2), this.ctx.lineTo(f + 0.7 * this.lineHeight, g + this.lineHeight / 2), this.ctx.stroke(), e -= 0.1 * this.lineHeight;
                J.drawMarker(f + l.markerSize / 2, g + this.lineHeight / 2, this.ctx, l.markerType, l.markerSize,
                    l.markerColor, l.markerBorderColor, l.markerBorderThickness);
                l.textBlock.x = f + Math.round(0.9 * this.lineHeight);
                l.textBlock.y = g;
                l.textBlock.render(!0);
                this.chart.data[l.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                f = C(l.id);
                this.ghostCtx.fillStyle = f;
                this.ghostCtx.beginPath();
                this.ghostCtx.fillRect(e, l.textBlock.y, l.textBlock.x + l.textBlock.width - e, l.textBlock.height);
                l.x1 = this.chart._eventManager.objectMap[l.id].x1 = e;
                l.y1 = this.chart._eventManager.objectMap[l.id].y1 = l.textBlock.y;
                l.x2 = this.chart._eventManager.objectMap[l.id].x2 =
                    l.textBlock.x + l.textBlock.width;
                l.y2 = this.chart._eventManager.objectMap[l.id].y2 = l.textBlock.y + l.textBlock.height
            }
        this.chart.layoutManager.registerSpace(b, {
            width: this.width + 2 + 2,
            height: this.height + 5 + 5
        });
        this.bounds = {
            x1: d,
            y1: c,
            x2: d + this.width,
            y2: c + this.height
        }
    };
    O(la, L);
    la.prototype.render = function() {
        var a = this.chart.layoutManager.getFreeSpace();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(a.x1, a.y1, a.x2, a.y2)
    };
    O(P, L);
    P.prototype.getDefaultAxisPlacement = function() {
        var a = this.type;
        if ("column" === a || "line" ===
            a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a) return "normal";
        if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
        if ("pie" === a || "doughnut" === a || "funnel" === a) return "none";
        window.console.log("Unknown Chart Type: " +
            a);
        return null
    };
    P.getDefaultLegendMarker = function(a) {
        if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a) return "square";
        if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a || "funnel" === a) return "circle";
        if ("area" === a || "splineArea" ===
            a || "stackedArea" === a || "stackedArea100" === a) return "triangle";
        window.console.log("Unknown Chart Type: " + a);
        return null
    };
    P.prototype.getDataPointAtX = function(a, b) {
        if (!this.dataPoints || 0 === this.dataPoints.length) return null;
        var c = {
                dataPoint: null,
                distance: Infinity,
                index: NaN
            },
            d = null,
            e = 0,
            f = 0,
            g = 1,
            k = Infinity,
            p = 0,
            h = 0,
            l = 0;
        "none" !== this.chart.plotInfo.axisPlacement && (l = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, l = 0 < l ? Math.min(Math.max((this.dataPoints.length - 1) / l * (a - this.dataPoints[0].x) >>
            0, 0), this.dataPoints.length) : 0);
        for (;;) {
            f = 0 < g ? l + e : l - e;
            if (0 <= f && f < this.dataPoints.length) {
                var d = this.dataPoints[f],
                    r = Math.abs(d.x - a);
                r < c.distance && (c.dataPoint = d, c.distance = r, c.index = f);
                d = Math.abs(d.x - a);
                d <= k ? k = d : 0 < g ? p++ : h++;
                if (1E3 < p && 1E3 < h) break
            } else if (0 > l - e && l + e >= this.dataPoints.length) break; - 1 === g ? (e++, g = 1) : g = -1
        }
        return b || c.dataPoint.x !== a ? b && null !== c.dataPoint ? c : null : c
    };
    P.prototype.getDataPointAtXY = function(a, b, c) {
        if (!this.dataPoints || 0 === this.dataPoints.length) return null;
        c = c || !1;
        var d = [],
            e =
            0,
            f = 0,
            g = 1,
            k = !1,
            p = Infinity,
            h = 0,
            l = 0,
            r = 0;
        "none" !== this.chart.plotInfo.axisPlacement && (r = this.chart.axisX.getXValueAt({
            x: a,
            y: b
        }), f = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, r = 0 < f ? Math.min(Math.max((this.dataPoints.length - 1) / f * (r - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0);
        for (;;) {
            f = 0 < g ? r + e : r - e;
            if (0 <= f && f < this.dataPoints.length) {
                var m = this.chart._eventManager.objectMap[this.dataPointIds[f]],
                    q = this.dataPoints[f],
                    n = null;
                if (m) {
                    switch (this.type) {
                        case "column":
                        case "stackedColumn":
                        case "stackedColumn100":
                        case "bar":
                        case "stackedBar":
                        case "stackedBar100":
                        case "rangeColumn":
                        case "rangeBar":
                            a >=
                                m.x1 && (a <= m.x2 && b >= m.y1 && b <= m.y2) && (d.push({
                                    dataPoint: q,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(m.x1 - a), Math.abs(m.x2 - a), Math.abs(m.y1 - b), Math.abs(m.y2 - b))
                                }), k = !0);
                            break;
                        case "line":
                        case "stepLine":
                        case "spline":
                        case "area":
                        case "stepArea":
                        case "stackedArea":
                        case "stackedArea100":
                        case "splineArea":
                        case "scatter":
                            var s = T("markerSize", q, this) || 4,
                                t = c ? 20 : s,
                                n = Math.sqrt(Math.pow(m.x1 - a, 2) + Math.pow(m.y1 - b, 2));
                            n <= t && d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: n
                            });
                            f = Math.abs(m.x1 -
                                a);
                            f <= p ? p = f : 0 < g ? h++ : l++;
                            n <= s / 2 && (k = !0);
                            break;
                        case "rangeArea":
                        case "rangeSplineArea":
                            s = T("markerSize", q, this) || 4;
                            t = c ? 20 : s;
                            n = Math.min(Math.sqrt(Math.pow(m.x1 - a, 2) + Math.pow(m.y1 - b, 2)), Math.sqrt(Math.pow(m.x1 - a, 2) + Math.pow(m.y2 - b, 2)));
                            n <= t && d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: n
                            });
                            f = Math.abs(m.x1 - a);
                            f <= p ? p = f : 0 < g ? h++ : l++;
                            n <= s / 2 && (k = !0);
                            break;
                        case "bubble":
                            s = m.size;
                            n = Math.sqrt(Math.pow(m.x1 - a, 2) + Math.pow(m.y1 - b, 2));
                            n <= s / 2 && (d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: n
                            }), k = !0);
                            break;
                        case "pie":
                        case "doughnut":
                            s = m.center;
                            t = "doughnut" === this.type ? 0.6 * m.radius : 0;
                            n = Math.sqrt(Math.pow(s.x - a, 2) + Math.pow(s.y - b, 2));
                            n < m.radius && n > t && (n = Math.atan2(b - s.y, a - s.x), 0 > n && (n += 2 * Math.PI), n = Number(((180 * (n / Math.PI) % 360 + 360) % 360).toFixed(12)), s = Number(((180 * (m.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), t = Number(((180 * (m.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === t && 1 < m.endAngle && (t = 360), s >= t && 0 !== q.y && (t += 360, n < s && (n += 360)), n > s && n < t && (d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: 0
                            }), k = !0));
                            break;
                        case "candlestick":
                            if (a >= m.x1 - m.borderThickness / 2 && a <= m.x2 + m.borderThickness / 2 && b >= m.y2 - m.borderThickness / 2 && b <= m.y3 + m.borderThickness / 2 || Math.abs(m.x2 - a + m.x1 - a) < m.borderThickness && b >= m.y1 && b <= m.y4) d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: Math.min(Math.abs(m.x1 - a), Math.abs(m.x2 - a), Math.abs(m.y2 - b), Math.abs(m.y3 - b))
                            }), k = !0;
                            break;
                        case "ohlc":
                            if (Math.abs(m.x2 - a + m.x1 - a) < m.borderThickness && b >= m.y2 && b <= m.y3 || a >= m.x1 && a <= (m.x2 + m.x1) / 2 && b >= m.y1 -
                                m.borderThickness / 2 && b <= m.y1 + m.borderThickness / 2 || a >= (m.x1 + m.x2) / 2 && a <= m.x2 && b >= m.y4 - m.borderThickness / 2 && b <= m.y4 + m.borderThickness / 2) d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: Math.min(Math.abs(m.x1 - a), Math.abs(m.x2 - a), Math.abs(m.y2 - b), Math.abs(m.y3 - b))
                            }), k = !0
                    }
                    if (k || 1E3 < h && 1E3 < l) break
                }
            } else if (0 > r - e && r + e >= this.dataPoints.length) break; - 1 === g ? (e++, g = 1) : g = -1
        }
        a = null;
        for (b = 0; b < d.length; b++) a ? d[b].distance <= a.distance && (a = d[b]) : a = d[b];
        return a
    };
    P.prototype.getMarkerProperties = function(a,
        b, c, d) {
        var e = this.dataPoints;
        return {
            x: b,
            y: c,
            ctx: d,
            type: e[a].markerType ? e[a].markerType : this.markerType,
            size: e[a].markerSize ? e[a].markerSize : this.markerSize,
            color: e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
            borderColor: e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
            borderThickness: e[a].markerBorderThickness ? e[a].markerBorderThickness : this.markerBorderThickness ?
                this.markerBorderThickness : null
        }
    };
    O(A, L);
    A.prototype.createLabels = function() {
        var a, b = 0,
            c, d = 0,
            e = 0,
            b = 0;
        if ("bottom" === this._position || "top" === this._position) b = this.lineCoordinates.width / Math.abs(this.maximum - this.minimum) * this.interval, d = this.labelAutoFit ? "undefined" === typeof this._options.labelMaxWidth ? 0.9 * b >> 0 : this.labelMaxWidth : "undefined" === typeof this._options.labelMaxWidth ? 0.7 * this.chart.width >> 0 : this.labelMaxWidth, e = "undefined" === typeof this._options.labelWrap || this.labelWrap ? 0.5 * this.chart.height >>
            0 : 1.5 * this.labelFontSize;
        else if ("left" === this._position || "right" === this._position) b = this.lineCoordinates.height / Math.abs(this.maximum - this.minimum) * this.interval, d = this.labelAutoFit ? "undefined" === typeof this._options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.labelMaxWidth : "undefined" === typeof this._options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.labelMaxWidth, e = "undefined" === typeof this._options.labelWrap || this.labelWrap ? 2 * b >> 0 : 1.5 * this.labelFontSize;
        if ("axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType)
            for (c =
                qa(new Date(this.maximum), this.interval, this.intervalType), b = this.intervalstartTimePercent; b < c; qa(b, this.interval, this.intervalType)) a = b.getTime(), a = "axisX" === this.type && this.labels[a] ? this.labels[a] : ya(b, this.valueFormatString, this.chart._cultureInfo), a = new I(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: d,
                maxHeight: e,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            }), this._labels.push({
                position: b.getTime(),
                textBlock: a,
                effectiveHeight: null
            });
        else {
            c = this.maximum;
            if (this.labels && this.labels.length) {
                a = Math.ceil(this.interval);
                for (var f = Math.ceil(this.intervalstartTimePercent), g = !1, b = f; b < this.maximum; b += a)
                    if (this.labels[b]) g = !0;
                    else {
                        g = !1;
                        break
                    }
                g && (this.interval = a, this.intervalstartTimePercent = f)
            }
            for (b = this.intervalstartTimePercent; b <= c; b = parseFloat((b + this.interval).toFixed(14))) a = "axisX" === this.type && this.labels[b] ? this.labels[b] : X(b, this.valueFormatString,
                this.chart._cultureInfo), a = new I(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: d,
                maxHeight: e,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle",
                borderThickness: 0
            }), this._labels.push({
                position: b,
                textBlock: a,
                effectiveHeight: null
            })
        }
        for (b = 0; b < this.stripLines.length; b++) c = this.stripLines[b], a = new I(this.ctx, {
            x: 0,
            y: 0,
            backgroundColor: c.labelBackgroundColor,
            maxWidth: d,
            maxHeight: e,
            angle: this.labelAngle,
            text: c.label,
            horizontalAlign: "left",
            fontSize: c.labelFontSize,
            fontFamily: c.labelFontFamily,
            fontWeight: c.labelFontWeight,
            fontColor: c.labelFontColor,
            fontStyle: c.labelFontStyle,
            textBaseline: "middle",
            borderThickness: 0
        }), this._labels.push({
            position: c.value,
            textBlock: a,
            effectiveHeight: null,
            stripLine: c
        })
    };
    A.prototype.createLabelsAndCalculateWidth = function() {
        var a = 0;
        this._labels = [];
        if ("left" === this._position || "right" === this._position)
            for (this.createLabels(), i = 0; i <
                this._labels.length; i++) {
                var b = this._labels[i].textBlock.measureText(),
                    c = 0,
                    c = 0 === this.labelAngle ? b.width : b.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + b.height / 2 * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                a < c && (a = c);
                this._labels[i].effectiveWidth = c
            }
        return (this.title ? ca(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0) + a + this.tickLength + 5
    };
    A.prototype.createLabelsAndCalculateHeight = function() {
        var a = 0;
        this._labels = [];
        var b, c = 0;
        this.createLabels();
        if ("bottom" === this._position ||
            "top" === this._position)
            for (c = 0; c < this._labels.length; c++) {
                b = this._labels[c].textBlock;
                b = b.measureText();
                var d = 0,
                    d = 0 === this.labelAngle ? b.height : b.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + b.height / 2 * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                a < d && (a = d);
                this._labels[c].effectiveHeight = d
            }
        return (this.title ? ca(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0) + a + this.tickLength + 5
    };
    A.setLayoutAndRender = function(a, b, c, d, e) {
        var f, g, k, p = a.chart,
            h = p.ctx;
        a.calculateAxisParameters();
        b && b.calculateAxisParameters();
        c && c.calculateAxisParameters();
        if (b && c && "undefined" === typeof b._options.maximum && "undefined" === typeof b._options.minimum && "undefined" === typeof b._options.interval && "undefined" === typeof c._options.maximum && "undefined" === typeof c._options.minimum && "undefined" === typeof c._options.interval) {
            k = (b.maximum - b.minimum) / b.interval;
            var l = (c.maximum - c.minimum) / c.interval;
            k > l ? c.maximum = c.interval * k + c.minimum : l > k && (b.maximum = b.interval * l + b.minimum)
        }
        l = b ? b.margin : 0;
        if ("normal" === d) {
            a.lineCoordinates = {};
            var r = Math.ceil(b ? b.createLabelsAndCalculateWidth() : 0);
            f = Math.round(e.x1 + r + l);
            a.lineCoordinates.x1 = f;
            l = Math.ceil(c ? c.createLabelsAndCalculateWidth() : 0);
            g = Math.round(e.x2 - l > a.chart.width - 10 ? a.chart.width - 10 : e.x2 - l);
            a.lineCoordinates.x2 = g;
            a.lineCoordinates.width = Math.abs(g - f);
            var m = Math.ceil(a.createLabelsAndCalculateHeight());
            d = Math.round(e.y2 - m - a.margin);
            k = Math.round(e.y2 - a.margin);
            a.lineCoordinates.y1 = d;
            a.lineCoordinates.y2 = d;
            a.boundingRect = {
                x1: f,
                y1: d,
                x2: g,
                y2: k,
                width: g - f,
                height: k - d
            };
            b && (f = Math.round(e.x1 +
                b.margin), d = Math.round(10 > e.y1 ? 10 : e.y1), g = Math.round(e.x1 + r + b.margin), k = Math.round(e.y2 - m - a.margin), b.lineCoordinates = {
                x1: g,
                y1: d,
                x2: g,
                y2: k,
                height: Math.abs(k - d)
            }, b.boundingRect = {
                x1: f,
                y1: d,
                x2: g,
                y2: k,
                width: g - f,
                height: k - d
            });
            c && (f = Math.round(a.lineCoordinates.x2), d = Math.round(10 > e.y1 ? 10 : e.y1), g = Math.round(f + l + c.margin), k = Math.round(e.y2 - m - a.margin), c.lineCoordinates = {
                x1: f,
                y1: d,
                x2: f,
                y2: k,
                height: Math.abs(k - d)
            }, c.boundingRect = {
                x1: f,
                y1: d,
                x2: g,
                y2: k,
                width: g - f,
                height: k - d
            });
            a.calculateValueToPixelconversionParameters();
            b && b.calculateValueToPixelconversionParameters();
            c && c.calculateValueToPixelconversionParameters();
            h.save();
            h.rect(5, a.boundingRect.y1, a.chart.width - 10, a.boundingRect.height);
            h.clip();
            a.renderLabelsTicksAndTitle();
            h.restore();
            b && b.renderLabelsTicksAndTitle();
            c && c.renderLabelsTicksAndTitle()
        } else {
            r = Math.ceil(a.createLabelsAndCalculateWidth());
            b && (b.lineCoordinates = {}, f = Math.round(e.x1 + r + a.margin), g = Math.round(e.x2 > b.chart.width - 10 ? b.chart.width - 10 : e.x2), b.lineCoordinates.x1 = f, b.lineCoordinates.x2 = g,
                b.lineCoordinates.width = Math.abs(g - f));
            c && (c.lineCoordinates = {}, f = Math.round(e.x1 + r + a.margin), g = Math.round(e.x2 > c.chart.width - 10 ? c.chart.width - 10 : e.x2), c.lineCoordinates.x1 = f, c.lineCoordinates.x2 = g, c.lineCoordinates.width = Math.abs(g - f));
            var m = Math.ceil(b ? b.createLabelsAndCalculateHeight() : 0),
                q = Math.ceil(c ? c.createLabelsAndCalculateHeight() : 0);
            b && (d = Math.round(e.y2 - m - b.margin), k = Math.round(e.y2 - l > b.chart.height - 10 ? b.chart.height - 10 : e.y2 - l), b.lineCoordinates.y1 = d, b.lineCoordinates.y2 = d, b.boundingRect = {
                x1: f,
                y1: d,
                x2: g,
                y2: k,
                width: g - f,
                height: m
            });
            c && (d = Math.round(e.y1 + c.margin), k = e.y1 + c.margin + q, c.lineCoordinates.y1 = k, c.lineCoordinates.y2 = k, c.boundingRect = {
                x1: f,
                y1: d,
                x2: g,
                y2: k,
                width: g - f,
                height: q
            });
            f = Math.round(e.x1 + a.margin);
            d = Math.round(c ? c.lineCoordinates.y2 : 10 > e.y1 ? 10 : e.y1);
            g = Math.round(e.x1 + r + a.margin);
            k = Math.round(b ? b.lineCoordinates.y1 : e.y2 - l > a.chart.height - 10 ? a.chart.height - 10 : e.y2 - l);
            a.lineCoordinates = {
                x1: g,
                y1: d,
                x2: g,
                y2: k,
                height: Math.abs(k - d)
            };
            a.boundingRect = {
                x1: f,
                y1: d,
                x2: g,
                y2: k,
                width: g - f,
                height: k -
                    d
            };
            a.calculateValueToPixelconversionParameters();
            b && b.calculateValueToPixelconversionParameters();
            c && c.calculateValueToPixelconversionParameters();
            b && b.renderLabelsTicksAndTitle();
            c && c.renderLabelsTicksAndTitle();
            a.renderLabelsTicksAndTitle()
        }
        p.preparePlotArea();
        e = a.chart.plotArea;
        h.save();
        h.rect(e.x1, e.y1, Math.abs(e.x2 - e.x1), Math.abs(e.y2 - e.y1));
        h.clip();
        a.renderStripLinesOfThicknessType("value");
        b && b.renderStripLinesOfThicknessType("value");
        c && c.renderStripLinesOfThicknessType("value");
        a.renderInterlacedColors();
        b && b.renderInterlacedColors();
        c && c.renderInterlacedColors();
        h.restore();
        a.renderGrid();
        b && b.renderGrid();
        c && c.renderGrid();
        a.renderAxisLine();
        b && b.renderAxisLine();
        c && c.renderAxisLine();
        a.renderStripLinesOfThicknessType("pixel");
        b && b.renderStripLinesOfThicknessType("pixel");
        c && c.renderStripLinesOfThicknessType("pixel")
    };
    A.prototype.renderLabelsTicksAndTitle = function() {
        var a = !1,
            b = 0,
            c = 1,
            d = 0;
        0 !== this.labelAngle && 360 !== this.labelAngle && (c = 1.2);
        if ("undefined" === typeof this._options.interval) {
            if ("bottom" ===
                this._position || "top" === this._position) {
                for (e = 0; e < this._labels.length; e++) f = this._labels[e], f.position < this.minimum || f.stripLine || (f = f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + f.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle), b += f);
                b > this.lineCoordinates.width * c && (a = !0)
            }
            if ("left" === this._position || "right" === this._position) {
                for (e = 0; e < this._labels.length; e++) f = this._labels[e], f.position < this.minimum || f.stripLine || (f = f.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + f.textBlock.width *
                    Math.sin(Math.PI / 180 * this.labelAngle), b += f);
                b > this.lineCoordinates.height * c && (a = !0)
            }
        }
        if ("bottom" === this._position) {
            for (var e = 0, f, e = 0; e < this._labels.length; e++)
                if (f = this._labels[e], !(f.position < this.minimum || f.position > this.maximum)) {
                    b = this.getPixelCoordinatesOnAxis(f.position);
                    if (this.tickThickness && !this._labels[e].stripLine || this._labels[e].stripLine && "pixel" === this._labels[e].stripLine._thicknessType) this._labels[e].stripLine ? (c = this._labels[e].stripLine, this.ctx.lineWidth = c.thickness, this.ctx.strokeStyle =
                        c.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), c = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, b.y << 0), this.ctx.lineTo(c, b.y + this.tickLength << 0), this.ctx.stroke();
                    if (!a || 0 === d++ % 2 || this._labels[e].stripLine) 0 === f.textBlock.angle ? (b.x -= f.textBlock.width / 2, b.y += this.tickLength + f.textBlock.fontSize / 2) : (b.x -= 0 > this.labelAngle ? f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y += this.tickLength + Math.abs(0 > this.labelAngle ?
                        f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), f.textBlock.x = b.x, f.textBlock.y = b.y, f.textBlock.render(!0)
                }
            this.title && (this._titleTextBlock = new I(this.ctx, {
                x: this.lineCoordinates.x1,
                y: this.boundingRect.y2 - this.titleFontSize - 5,
                maxWidth: this.lineCoordinates.width,
                maxHeight: 1.5 * this.titleFontSize,
                angle: 0,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }), this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.boundingRect.y2 - this._titleTextBlock.height - 3, this._titleTextBlock.render(!0))
        } else if ("top" === this._position) {
            for (e = 0; e < this._labels.length; e++)
                if (f = this._labels[e], !(f.position < this.minimum || f.position > this.maximum)) {
                    b = this.getPixelCoordinatesOnAxis(f.position);
                    if (this.tickThickness && !this._labels[e].stripLine ||
                        this._labels[e].stripLine && "pixel" === this._labels[e].stripLine._thicknessType) this._labels[e].stripLine ? (c = this._labels[e].stripLine, this.ctx.lineWidth = c.thickness, this.ctx.strokeStyle = c.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), c = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, b.y << 0), this.ctx.lineTo(c, b.y - this.tickLength << 0), this.ctx.stroke();
                    if (!a || 0 === d++ % 2 || this._labels[e].stripLine) 0 === f.textBlock.angle ? (b.x -= f.textBlock.width /
                        2, b.y -= this.tickLength + f.textBlock.height / 2) : (b.x -= 0 < this.labelAngle ? f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y -= this.tickLength + Math.abs(0 < this.labelAngle ? f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5 : 5)), f.textBlock.x = b.x, f.textBlock.y = b.y, f.textBlock.render(!0)
                }
            this.title && (this._titleTextBlock = new I(this.ctx, {
                x: this.lineCoordinates.x1,
                y: this.boundingRect.y1 + 1,
                maxWidth: this.lineCoordinates.width,
                maxHeight: 1.5 * this.titleFontSize,
                angle: 0,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }), this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.render(!0))
        } else if ("left" === this._position) {
            for (e = 0; e < this._labels.length; e++)
                if (f = this._labels[e], !(f.position < this.minimum || f.position > this.maximum)) {
                    b = this.getPixelCoordinatesOnAxis(f.position);
                    if (this.tickThickness && !this._labels[e].stripLine || this._labels[e].stripLine && "pixel" === this._labels[e].stripLine._thicknessType) this._labels[e].stripLine ? (c = this._labels[e].stripLine, this.ctx.lineWidth = c.thickness, this.ctx.strokeStyle = c.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), c = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, c), this.ctx.lineTo(b.x - this.tickLength << 0, c), this.ctx.stroke();
                    if (!a || 0 === d++ % 2 || this._labels[e].stripLine) f.textBlock.x =
                        b.x - f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5, f.textBlock.y = 0 === this.labelAngle ? b.y - f.textBlock.height / 2 + this.labelFontSize / 2 : b.y - f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), f.textBlock.render(!0)
                }
            this.title && (this._titleTextBlock = new I(this.ctx, {
                x: this.boundingRect.x1 + 1,
                y: this.lineCoordinates.y2,
                maxWidth: this.lineCoordinates.height,
                maxHeight: 1.5 * this.titleFontSize,
                angle: -90,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }), this._titleTextBlock.measureText(), this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
        } else if ("right" === this._position) {
            for (e = 0; e < this._labels.length; e++)
                if (f = this._labels[e], !(f.position < this.minimum || f.position > this.maximum)) {
                    b = this.getPixelCoordinatesOnAxis(f.position);
                    if (this.tickThickness && !this._labels[e].stripLine ||
                        this._labels[e].stripLine && "pixel" === this._labels[e].stripLine._thicknessType) this._labels[e].stripLine ? (c = this._labels[e].stripLine, this.ctx.lineWidth = c.thickness, this.ctx.strokeStyle = c.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), c = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, c), this.ctx.lineTo(b.x + this.tickLength << 0, c), this.ctx.stroke();
                    if (!a || 0 === d++ % 2 || this._labels[e].stripLine) f.textBlock.x = b.x + this.tickLength +
                        5, f.textBlock.y = 0 === this.labelAngle ? b.y - f.textBlock.height / 2 + this.labelFontSize / 2 : b.y, f.textBlock.render(!0)
                }
            this.title && (this._titleTextBlock = new I(this.ctx, {
                    x: this.boundingRect.x2 - 1,
                    y: this.lineCoordinates.y2,
                    maxWidth: this.lineCoordinates.height,
                    maxHeight: 1.5 * this.titleFontSize,
                    angle: 90,
                    text: this.title,
                    horizontalAlign: "center",
                    fontSize: this.titleFontSize,
                    fontFamily: this.titleFontFamily,
                    fontWeight: this.titleFontWeight,
                    fontColor: this.titleFontColor,
                    fontStyle: this.titleFontStyle,
                    textBaseline: "top"
                }),
                this._titleTextBlock.measureText(), this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
        }
    };
    A.prototype.renderInterlacedColors = function() {
        var a = this.chart.plotArea.ctx,
            b, c, d = this.chart.plotArea,
            e = 0;
        b = !0;
        if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) this._labels[e].stripLine || (b ? (b = this.getPixelCoordinatesOnAxis(this._labels[e].position),
                c = e + 1 >= this._labels.length ? this.getPixelCoordinatesOnAxis(this.maximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(b.x, d.y1, Math.abs(c.x - b.x), Math.abs(d.y1 - d.y2)), b = !1) : b = !0);
        else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) this._labels[e].stripLine || (b ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), b = e + 1 >= this._labels.length ? this.getPixelCoordinatesOnAxis(this.maximum) :
                this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(d.x1, b.y, Math.abs(d.x1 - d.x2), Math.abs(b.y - c.y)), b = !1) : b = !0);
        a.beginPath()
    };
    A.prototype.renderStripLinesOfThicknessType = function(a) {
        if (this.stripLines && 0 < this.stripLines.length && a)
            for (var b = this.chart.plotArea.ctx, c = 0, c = 0; c < this.stripLines.length; c++) {
                var d = this.stripLines[c];
                if (d._thicknessType === a && ("pixel" !== a || !(d.value < this.minimum || d.value > this.maximum))) {
                    var e = this.getPixelCoordinatesOnAxis(d.value),
                        f = Math.abs("pixel" === a ?
                            d.thickness : this.conversionParameters.pixelPerUnit * d.thickness);
                    if (!(0 >= f)) {
                        b.strokeStyle = d.color;
                        b.beginPath();
                        C(d.id);
                        var g, k, p, h;
                        b.lineWidth = f;
                        if ("bottom" === this._position || "top" === this._position) g = k = 1 === b.lineWidth % 2 ? (e.x << 0) + 0.5 : e.x << 0, p = this.chart.plotArea.y1, h = this.chart.plotArea.y2;
                        else if ("left" === this._position || "right" === this._position) p = h = 1 === b.lineWidth % 2 ? (e.y << 0) + 0.5 : e.y << 0, g = this.chart.plotArea.x1, k = this.chart.plotArea.x2;
                        b.moveTo(g, p);
                        b.lineTo(k, h);
                        b.stroke()
                    }
                }
            }
    };
    A.prototype.renderGrid =
        function() {
            if (this.gridThickness && 0 < this.gridThickness) {
                var a = this.chart.ctx,
                    b, c = this.chart.plotArea;
                a.lineWidth = this.gridThickness;
                a.strokeStyle = this.gridColor;
                if ("bottom" === this._position || "top" === this._position)
                    for (d = 0; d < this._labels.length && !this._labels[d].stripLine; d++) this._labels[d].position < this.minimum || this._labels[d].position > this.maximum || (a.beginPath(), b = this.getPixelCoordinatesOnAxis(this._labels[d].position), b = 1 === a.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, a.moveTo(b, c.y1 << 0), a.lineTo(b, c.y2 <<
                        0), a.stroke());
                else if ("left" === this._position || "right" === this._position)
                    for (var d = 0; d < this._labels.length && !this._labels[d].stripLine; d++) this._labels[d].position < this.minimum || this._labels[d].position > this.maximum || (a.beginPath(), b = this.getPixelCoordinatesOnAxis(this._labels[d].position), b = 1 === a.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, a.moveTo(c.x1 << 0, b), a.lineTo(c.x2 << 0, b), a.stroke())
            }
        };
    A.prototype.renderAxisLine = function() {
        var a = this.chart.ctx;
        if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
                a.lineWidth =
                    this.lineThickness;
                a.strokeStyle = this.lineColor ? this.lineColor : "black";
                var b = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                a.beginPath();
                a.moveTo(this.lineCoordinates.x1, b);
                a.lineTo(this.lineCoordinates.x2, b);
                a.stroke()
            }
        } else "left" !== this._position && "right" !== this._position || !this.lineThickness || (a.lineWidth = this.lineThickness, a.strokeStyle = this.lineColor, b = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0, a.beginPath(), a.moveTo(b,
            this.lineCoordinates.y1), a.lineTo(b, this.lineCoordinates.y2), a.stroke())
    };
    A.prototype.getPixelCoordinatesOnAxis = function(a) {
        var b = {},
            c = this.lineCoordinates.width,
            d = this.lineCoordinates.height;
        if ("bottom" === this._position || "top" === this._position) c /= Math.abs(this.maximum - this.minimum), b.x = this.lineCoordinates.x1 + c * (a - this.minimum), b.y = this.lineCoordinates.y1;
        if ("left" === this._position || "right" === this._position) c = d / Math.abs(this.maximum - this.minimum), b.y = this.lineCoordinates.y2 - c * (a - this.minimum), b.x =
            this.lineCoordinates.x2;
        return b
    };
    A.prototype.getXValueAt = function(a) {
        if (!a) return null;
        var b = null;
        "left" === this._position ? b = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.height * (this.chart.axisX.lineCoordinates.y2 - a.y) + this.chart.axisX.minimum : "bottom" === this._position && (b = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (a.x - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum);
        return b
    };
    A.prototype.calculateValueToPixelconversionParameters =
        function(a) {
            a = {
                pixelPerUnit: null,
                minimum: null,
                reference: null
            };
            var b = this.lineCoordinates.width,
                c = this.lineCoordinates.height;
            a.minimum = this.minimum;
            if ("bottom" === this._position || "top" === this._position) a.pixelPerUnit = b / Math.abs(this.maximum - this.minimum), a.reference = this.lineCoordinates.x1;
            if ("left" === this._position || "right" === this._position) a.pixelPerUnit = -1 * c / Math.abs(this.maximum - this.minimum), a.reference = this.lineCoordinates.y2;
            this.conversionParameters = a
        };
    A.prototype.calculateAxisParameters = function() {
        var a =
            this.chart.layoutManager.getFreeSpace();
        "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
        var a = "axisX" === this.type ? 500 > this.maxWidth ? 8 : Math.max(6, Math.floor(this.maxWidth / 62)) : Math.max(Math.floor(this.maxWidth / 40), 2),
            b, c, d, e;
        e = 0;
        "axisX" === this.type ? (b = null !== this.sessionVariables.internalMinimum ? this.sessionVariables.internalMinimum : this.dataInfo.viewPortMin, c = null !== this.sessionVariables.internalMaximum ?
            this.sessionVariables.internalMaximum : this.dataInfo.viewPortMax, 0 === c - b && (c += 0.4, b -= 0.4), d = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < c - b ? 0.5 * Math.abs(c - b) : 1) : "axisY" === this.type && (b = "undefined" === typeof this._options.minimum ? this.dataInfo.viewPortMin : this._options.minimum, c = "undefined" === typeof this._options.maximum ? this.dataInfo.viewPortMax : this._options.maximum, 0 === b && 0 === c ? (c += 9, b = 0) : 0 === c - b ? (e = Math.min(Math.abs(0.01 * Math.abs(c)), 5), c += e, b -= e) : (e = Math.min(Math.abs(0.01 * Math.abs(c -
            b)), 0.05), 0 !== c && (c += e), 0 !== b && (b -= e)), this.includeZero && "undefined" === typeof this._options.minimum && 0 < b && (b = 0), this.includeZero && "undefined" === typeof this._options.maximum && 0 > c && (c = 0));
        "axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType ? (e = c - b, this.intervalType || (e / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : e / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : e / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : e / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") :
            e / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : e / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : e / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : e / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : e / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : e / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : e / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : e / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : e / (1 * z.secondDuration) <=
            a ? (this.interval = 1, this.intervalType = "second") : e / (2 * z.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : e / (5 * z.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : e / (10 * z.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : e / (15 * z.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : e / (20 * z.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : e / (30 * z.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : e / (1 * z.minuteDuration) <=
            a ? (this.interval = 1, this.intervalType = "minute") : e / (2 * z.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : e / (5 * z.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : e / (10 * z.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : e / (15 * z.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : e / (20 * z.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : e / (30 * z.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : e / (1 * z.hourDuration) <=
            a ? (this.interval = 1, this.intervalType = "hour") : e / (2 * z.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : e / (3 * z.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : e / (6 * z.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : e / (1 * z.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : e / (2 * z.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : e / (4 * z.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : e / (1 * z.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") :
            e / (2 * z.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : e / (3 * z.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : e / (1 * z.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : e / (2 * z.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : e / (3 * z.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : e / (6 * z.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = e / (1 * z.yearDuration) <= a ? 1 : e / (2 * z.yearDuration) <= a ? 2 : e / (4 * z.yearDuration) <= a ?
                4 : Math.floor(A.getNiceNumber(e / (a - 1), !0) / z.yearDuration), this.intervalType = "year")), this.minimum = null !== this.sessionVariables.internalMinimum ? this.sessionVariables.internalMinimum : b - d / 2, this.maximum = this.sessionVariables.internalMaximum ? this.sessionVariables.internalMaximum : c + d / 2, this.valueFormatString || ("year" === this.intervalType ? this.valueFormatString = "YYYY" : "month" === this.intervalType ? this.valueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.valueFormatString = "MMM DD YYYY" : "day" === this.intervalType ?
            this.valueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.valueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.valueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.valueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.valueFormatString = "fff'ms'")), this.intervalstartTimePercent = this.getLabelStartPoint(new Date(this.minimum), this.intervalType, this.interval)) : (this.intervalType = "number", e = A.getNiceNumber(c - b, !1), this.interval = this._options && this._options.interval ?
            this._options.interval : A.getNiceNumber(e / (a - 1), !0), this.minimum = null !== this.sessionVariables.internalMinimum ? this.sessionVariables.internalMinimum : Math.floor(b / this.interval) * this.interval, this.maximum = null !== this.sessionVariables.internalMaximum ? this.sessionVariables.internalMaximum : Math.ceil(c / this.interval) * this.interval, "axisX" === this.type ? (null === this.sessionVariables.internalMinimum && (this.minimum = b - d / 2), this.sessionVariables.internalMaximum || (this.maximum = c + d / 2), this.intervalstartTimePercent =
                Math.floor((this.minimum + 0.2 * this.interval) / this.interval) * this.interval) : "axisY" === this.type && (this.intervalstartTimePercent = this.minimum));
        "axisX" === this.type && (this._absoluteMinimum = this._options && "undefined" !== typeof this._options.minimum ? this._options.minimum : this.dataInfo.min - d / 2, this._absoluteMaximum = this._options && "undefined" !== typeof this._options.maximum ? this._options.maximum : this.dataInfo.max + d / 2);
        if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", e = Math.abs(this.maximum - this.minimum),
                1 > e && (b = Math.floor(Math.abs(Math.log(e) / Math.LN10)) + 2, 2 < b)))
            for (c = 0; c < b - 2; c++) this.valueFormatString += "#"
    };
    A.getNiceNumber = function(a, b) {
        var c = Math.floor(Math.log(a) / Math.LN10),
            d = a / Math.pow(10, c);
        return Number(((b ? 1.5 > d ? 1 : 3 > d ? 2 : 7 > d ? 5 : 10 : 1 >= d ? 1 : 2 >= d ? 2 : 5 >= d ? 5 : 10) * Math.pow(10, c)).toFixed(20))
    };
    A.prototype.getLabelStartPoint = function() {
        var a = Y(this.interval, this.intervalType),
            a = new Date(Math.floor(this.minimum / a) * a);
        if ("millisecond" !== this.intervalType)
            if ("second" === this.intervalType) 0 < a.getMilliseconds() &&
                (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
            else if ("minute" === this.intervalType) {
            if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("hour" === this.intervalType) {
            if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("day" === this.intervalType) {
            if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() +
                1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("week" === this.intervalType) {
            if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("month" === this.intervalType) {
            if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0),
                a.setSeconds(0), a.setMilliseconds(0)
        } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
        return a
    };
    O(ma, L);
    O(N, L);
    N.prototype._initialize = function() {
        if (this.enabled) {
            this.container = document.createElement("div");
            this.container.setAttribute("class", "canvasjs-chart-tooltip");
            this.container.style.position =
                "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.display = "none";
            var a;
            a = '<div style=" width: auto;height: auto;min-width: 50px;';
            a += "line-height: 20px;";
            a += "margin: 0px 0px 0px 0px;";
            a += "padding: 5px;";
            a += "font-family: Calibri, Arial, Georgia, serif;";
            a += "font-weight: 400;";
            a += "font-style: " + (t ? "italic;" : "normal;");
            a += "font-size: 14px;";
            a += "color: #000000;";
            a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
            a += "text-align: left;";
            a += "border: 2px solid gray;";
            a += t ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
            a += "text-indent: 0px;";
            a += "white-space: nowrap;";
            a += "border-radius: 5px;";
            a += "-moz-user-select:none;";
            a += "-khtml-user-select: none;";
            a += "-webkit-user-select: none;";
            a += "-ms-user-select: none;";
            a += "user-select: none;";
            t || (a += "filter: alpha(opacity = 90);", a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
            a += '} "> Sample Tooltip</div>';
            this.container.innerHTML = a;
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container)
        }
    };
    N.prototype.mouseMoveHandler = function(a, b) {
        this._lastUpdated && 40 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(), this._updateToolTip(a, b))
    };
    N.prototype._updateToolTip = function(a, b) {
        if (this.enabled && !this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" === typeof b) {
                if (isNaN(this._prevX) ||
                    isNaN(this._prevY)) return;
                a = this._prevX;
                b = this._prevY
            } else this._prevX = a, this._prevY = b;
            var c = null,
                d = null,
                e = [],
                f = 0;
            if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
                f = "xySwapped" === this.chart.plotInfo.axisPlacement ? (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.height * (this.chart.axisX.lineCoordinates.y2 - b) + this.chart.axisX.minimum : (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (a - this.chart.axisX.lineCoordinates.x1) +
                    this.chart.axisX.minimum;
                c = [];
                for (d = 0; d < this.chart.data.length; d++) {
                    var g = this.chart.data[d].getDataPointAtX(f, !0);
                    g && 0 <= g.index && (g.dataSeries = this.chart.data[d], null !== g.dataPoint.y && c.push(g))
                }
                if (0 === c.length) return;
                c.sort(function(a, b) {
                    return a.distance - b.distance
                });
                f = c[0];
                for (d = 0; d < c.length; d++) c[d].dataPoint.x.valueOf() === f.dataPoint.x.valueOf() && e.push(c[d]);
                c = null
            } else if ((g = this.chart.getDataPointAtXY(a, b, !0)) ? (this.currentDataPointIndex = g.dataPointIndex, this.currentSeriesIndex = g.dataSeries.index) :
                t ? (g = ta(a, b, this.chart._eventManager.ghostCtx), 0 < g && "undefined" !== typeof this.chart._eventManager.objectMap[g] ? (eventObject = this.chart._eventManager.objectMap[g], this.currentSeriesIndex = eventObject.dataSeriesIndex, this.currentDataPointIndex = 0 <= eventObject.dataPointIndex ? eventObject.dataPointIndex : -1) : this.currentDataPointIndex = -1) : this.currentDataPointIndex = -1, 0 <= this.currentSeriesIndex) {
                d = this.chart.data[this.currentSeriesIndex];
                g = {};
                if (0 <= this.currentDataPointIndex) c = d.dataPoints[this.currentDataPointIndex],
                    g.dataSeries = d, g.dataPoint = c, g.index = this.currentDataPointIndex, g.distance = Math.abs(c.x - f);
                else if ("line" === d.type || "stepLine" === d.type || "spline" === d.type || "area" === d.type || "stepArea" === d.type || "splineArea" === d.type || "stackedArea" === d.type || "stackedArea100" === d.type || "rangeArea" === d.type || "rangeSplineArea" === d.type || "candlestick" === d.type || "ohlc" === d.type) f = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (a - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum.valueOf(),
                    g = d.getDataPointAtX(f, !0), g.dataSeries = d, this.currentDataPointIndex = g.index, c = g.dataPoint;
                else return;
                null !== g.dataPoint.y && e.push(g)
            }
            if (0 < e.length)
                if (this.highlightObjects(e), f = "", f = this.getToolTipInnerHTML({
                        entries: e
                    }), null !== f) {
                    this.contentDiv.innerHTML = f;
                    this.contentDiv.innerHTML = f;
                    f = !1;
                    "none" === this.container.style.display && (f = !0, this.container.style.display = "block");
                    try {
                        this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.borderColor ?
                            this.borderColor : e[0].dataPoint.color ? e[0].dataPoint.color : e[0].dataSeries.color ? e[0].dataSeries.color : e[0].dataSeries._colorSet[e[0].index % e[0].dataSeries._colorSet.length]
                    } catch (k) {}
                    "pie" === e[0].dataSeries.type || "doughnut" === e[0].dataSeries.type || "funnel" === e[0].dataSeries.type || "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type || "stackedBar" === e[0].dataSeries.type || "stackedBar100" === e[0].dataSeries.type ? toolTipLeft = a - 10 - this.container.clientWidth : (toolTipLeft = this.chart.axisX.lineCoordinates.width /
                        Math.abs(this.chart.axisX.maximum - this.chart.axisX.minimum) * Math.abs(e[0].dataPoint.x - this.chart.axisX.minimum) + this.chart.axisX.lineCoordinates.x1 + 0.5 - this.container.clientWidth << 0, toolTipLeft -= 10);
                    0 > toolTipLeft && (toolTipLeft += this.container.clientWidth + 20);
                    toolTipLeft + this.container.clientWidth > this.chart._container.clientWidth && (toolTipLeft = Math.max(0, this.chart._container.clientWidth - this.container.clientWidth));
                    toolTipLeft += "px";
                    e = 1 !== e.length || this.shared || "line" !== e[0].dataSeries.type && "stepLine" !==
                        e[0].dataSeries.type && "spline" !== e[0].dataSeries.type && "area" !== e[0].dataSeries.type && "stepArea" !== e[0].dataSeries.type && "splineArea" !== e[0].dataSeries.type && "stackedArea" !== e[0].dataSeries.type && "stackedArea100" !== e[0].dataSeries.type ? "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type || "stackedBar" === e[0].dataSeries.type || "stackedBar100" === e[0].dataSeries.type ? e[0].dataSeries.axisX.lineCoordinates.y2 - e[0].dataSeries.axisX.lineCoordinates.height / Math.abs(e[0].dataSeries.axisX.maximum -
                            e[0].dataSeries.axisX.minimum) * Math.abs(e[0].dataPoint.x - e[0].dataSeries.axisX.minimum) + 0.5 << 0 : b : e[0].dataSeries.axisY.lineCoordinates.y2 - e[0].dataSeries.axisY.lineCoordinates.height / Math.abs(e[0].dataSeries.axisY.maximum - e[0].dataSeries.axisY.minimum) * Math.abs(e[0].dataPoint.y - e[0].dataSeries.axisY.minimum) + 0.5 << 0;
                    e = -e + 10;
                    0 < e + this.container.clientHeight + 5 && (e -= e + this.container.clientHeight + 5 - 0);
                    this.container.style.left = toolTipLeft;
                    this.container.style.bottom = e + "px";
                    !this.animationEnabled || f ? this.disableAnimation() :
                        this.enableAnimation()
                } else this.hide(!1)
        }
    };
    N.prototype.highlightObjects = function(a) {
        if (this.enabled) {
            var b = this.chart.overlaidCanvasCtx;
            this.chart.resetOverlayedCanvas();
            b.save();
            for (var c = 0, d = 0; d < a.length; d++) {
                var e = a[d];
                if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
                    var c = this.chart.data[e.dataSeriesIndex],
                        f = e.dataPointIndex;
                    if ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "scatter" === c.type || "area" === c.type ||
                        "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type) {
                        var g = c.getMarkerProperties(f, e.x1, e.y1, this.chart.overlaidCanvasCtx);
                        g.size = Math.max(1.5 * g.size << 0, 10);
                        g.borderColor = g.borderColor || "#FFFFFF";
                        g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size);
                        J.drawMarkers([g]);
                        "undefined" !== typeof e.y2 && (g = c.getMarkerProperties(f, e.x1, e.y2, this.chart.overlaidCanvasCtx), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor =
                            g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), J.drawMarkers([g]))
                    } else "bubble" === c.type ? (g = c.getMarkerProperties(f, e.x1, e.y1, this.chart.overlaidCanvasCtx), g.size = e.size, g.color = "white", g.borderColor = "white", b.globalAlpha = 0.3, J.drawMarkers([g]), b.globalAlpha = 1) : "column" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "bar" === c.type || "rangeBar" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "rangeColumn" === c.type ? F(b, e.x1, e.y1, e.x2,
                        e.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === c.type || "doughnut" === c.type ? pa(b, e.center, e.radius, "white", c.type, e.startAngle, e.endAngle, 0.3) : "candlestick" === c.type ? (b.globalAlpha = 1, b.strokeStyle = e.color, b.lineWidth = 2 * e.borderThickness, c = 0 === b.lineWidth % 2 ? 0 : 0.5, b.beginPath(), b.moveTo(e.x3 - c, e.y2), b.lineTo(e.x3 - c, Math.min(e.y1, e.y4)), b.stroke(), b.beginPath(), b.moveTo(e.x3 - c, Math.max(e.y1, e.y4)), b.lineTo(e.x3 - c, e.y3), b.stroke(), F(b, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness,
                        e.color, !1, !1, !1, !1), b.globalAlpha = 1) : "ohlc" === c.type && (b.globalAlpha = 1, b.strokeStyle = e.color, b.lineWidth = 2 * e.borderThickness, c = 0 === b.lineWidth % 2 ? 0 : 0.5, b.beginPath(), b.moveTo(e.x3 - c, e.y2), b.lineTo(e.x3 - c, e.y3), b.stroke(), b.beginPath(), b.moveTo(e.x3, e.y1), b.lineTo(e.x1, e.y1), b.stroke(), b.beginPath(), b.moveTo(e.x3, e.y4), b.lineTo(e.x2, e.y4), b.stroke(), b.globalAlpha = 1)
                }
            }
            b.globalAlpha = 1;
            b.beginPath()
        }
    };
    N.prototype.getToolTipInnerHTML = function(a) {
        a = a.entries;
        for (var b = null, c = null, d = null, e = 0, f = "", g = !0, k =
                0; k < a.length; k++)
            if (a[k].dataSeries.toolTipContent || a[k].dataPoint.toolTipContent) {
                g = !1;
                break
            }
        if (g && this.content && "function" === typeof this.content) b = this.content({
            entries: a
        });
        else if (this.shared) {
            for (var p = "", k = 0; k < a.length; k++)
                if (c = a[k].dataSeries, d = a[k].dataPoint, e = a[k].index, f = "", 0 === k && (g && !this.content) && (p += "undefined" !== typeof this.chart.axisX.labels[d.x] ? this.chart.axisX.labels[d.x] : "{x}", p += "</br>", p = this.chart.replaceKeywordsWithValue(p, d, c, e)), null !== d.toolTipContent && ("undefined" !== typeof d.toolTipContent ||
                        null !== c._options.toolTipContent)) {
                    if ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type) f += d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}";
                    else if ("bubble" === c.type) f += d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
                    else if ("pie" === c.type || "doughnut" === c.type || "funnel" === c.type) f += d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "&nbsp;&nbsp;{y}";
                    else if ("rangeColumn" === c.type || "rangeBar" === c.type ||
                        "rangeArea" === c.type || "rangeSplineArea" === c.type) f += d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}";
                    else if ("candlestick" === c.type || "ohlc" === c.type) f += d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
                    null === b && (b = "");
                    b += this.chart.replaceKeywordsWithValue(f, d, c, e);
                    k < a.length - 1 && (b += "</br>")
                }
            null !== b && (b = p + b)
        } else {
            c = a[0].dataSeries;
            d = a[0].dataPoint;
            e = a[0].index;
            if (null === d.toolTipContent || "undefined" === typeof d.toolTipContent && null === c._options.toolTipContent) return null;
            if ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type ||
                "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>" + (d.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y}";
            else if ("bubble" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>" +
                (d.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
            else if ("pie" === c.type || "doughnut" === c.type || "funnel" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : (d.name ? "{name}:&nbsp;&nbsp;" : d.label ? "{label}:&nbsp;&nbsp;" : "") + "{y}";
            else if ("rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent :
                this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>" + (d.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}";
            else if ("candlestick" === c.type || "ohlc" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>" + (d.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
            null === b && (b = "");
            b += this.chart.replaceKeywordsWithValue(f, d, c, e)
        }
        return b
    };
    N.prototype.enableAnimation = function() {
        this.container.style.WebkitTransition || (this.container.style.WebkitTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MozTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MsTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.transition = "left .2s ease-out, bottom .2s ease-out")
    };
    N.prototype.disableAnimation = function() {
        this.container.style.WebkitTransition &&
            (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
    };
    N.prototype.hide = function(a) {
        this.enabled && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas())
    };
    v.prototype.replaceKeywordsWithValue = function(a, b, c, d, e) {
        var f = this;
        e = "undefined" === typeof e ? 0 : e;
        if ((0 <= c.type.indexOf("stacked") || "pie" === c.type ||
                "doughnut" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var g = "#percent",
                k = "#total",
                p = null;
            if (0 <= c.type.indexOf("stacked")) k = 0, p = b.x.getTime ? b.x.getTime() : b.x, p in c.plotUnit.yTotals && (k = c.plotUnit.yTotals[p], g = isNaN(b.y) ? 0 : 100 * (b.y / k));
            else if ("pie" === c.type || "doughnut" === c.type) {
                for (i = k = 0; i < c.dataPoints.length; i++) isNaN(c.dataPoints[i].y) || (k += c.dataPoints[i].y);
                g = isNaN(b.y) ? 0 : 100 * (b.y / k)
            }
            do {
                p = "";
                if (c.percentFormatString) p = c.percentFormatString;
                else {
                    var p = "#,##0.",
                        h = Math.max(Math.ceil(Math.log(1 /
                            Math.abs(g)) / Math.LN10), 2);
                    if (isNaN(h) || !isFinite(h)) h = 2;
                    for (var l = 0; l < h; l++) p += "#"
                }
                a = a.replace("#percent", X(g, p, f._cultureInfo));
                a = a.replace("#total", X(k, c.yValueFormatString ? c.yValueFormatString : "#,##0.########"))
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
        }
        return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a) {
            if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1, a.length - 1);
            a = Z(a.slice(1, a.length - 1));
            a = a.replace("#index", e);
            var g = null;
            try {
                var h = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                h && 0 < h.length && (g = Z(h[2]), a = Z(h[1]))
            } catch (k) {}
            h = null;
            if ("color" === a) return b.color ? b.color : c.color ? c.color : c._colorSet[d % c._colorSet.length];
            if (b.hasOwnProperty(a)) h = b;
            else if (c.hasOwnProperty(a)) h = c;
            else return "";
            h = h[a];
            null !== g && (h = h[g]);
            return "x" === a ? f.axisX && "dateTime" === f.plotInfo.axisXValueType ? ya(h, b.xValueFormatString ? b.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : f.axisX && f.axisX.valueFormatString ? f.axisX.valueFormatString : "DD MMM YY", f._cultureInfo) : X(h, b.xValueFormatString ?
                b.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : "#,##0.########", f._cultureInfo) : "y" === a ? X(h, b.yValueFormatString ? b.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : "#,##0.########", f._cultureInfo) : "z" === a ? X(h, b.zValueFormatString ? b.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : "#,##0.########", f._cultureInfo) : h
        })
    };
    $.prototype.reset = function() {
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject =
            null;
        this.eventObjects = [];
        t && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath())
    };
    $.prototype.getNewObjectTrackingId = function() {
        return ++this.lastObjectId
    };
    $.prototype.mouseEventHandler = function(a) {
        if ("mousemove" === a.type || "click" === a.type) {
            var b = [],
                c = ia(a),
                d = null;
            if ((d = this.chart.getObjectAtXY(c.x, c.y, !1)) && "undefined" !== typeof this.objectMap[d])
                if (d = this.objectMap[d], "dataPoint" === d.objectType) {
                    var e = this.chart.data[d.dataSeriesIndex],
                        f = e.dataPoints[d.dataPointIndex],
                        g = d.dataPointIndex;
                    d.eventParameter = {
                        x: c.x,
                        y: c.y,
                        dataPoint: f,
                        dataSeries: e._options,
                        dataPointIndex: g,
                        dataSeriesIndex: e.index,
                        chart: this.chart._publicChartReference
                    };
                    d.eventContext = {
                        context: f,
                        userContext: f,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    };
                    b.push(d);
                    d = this.objectMap[e.id];
                    d.eventParameter = {
                        x: c.x,
                        y: c.y,
                        dataPoint: f,
                        dataSeries: e._options,
                        dataPointIndex: g,
                        dataSeriesIndex: e.index,
                        chart: this.chart._publicChartReference
                    };
                    d.eventContext = {
                        context: e,
                        userContext: e._options,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    };
                    b.push(this.objectMap[e.id])
                } else "legendItem" === d.objectType && (e = this.chart.data[d.dataSeriesIndex], f = null !== d.dataPointIndex ? e.dataPoints[d.dataPointIndex] : null, d.eventParameter = {
                    x: c.x,
                    y: c.y,
                    dataSeries: e._options,
                    dataPoint: f,
                    dataPointIndex: d.dataPointIndex,
                    dataSeriesIndex: d.dataSeriesIndex,
                    chart: this.chart._publicChartReference
                }, d.eventContext = {
                    context: this.chart.legend,
                    userContext: this.chart.legend._options,
                    mouseover: "itemmouseover",
                    mousemove: "itemmousemove",
                    mouseout: "itemmouseout",
                    click: "itemclick"
                }, b.push(d));
            e = [];
            for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
                f = !0;
                for (d = 0; d < b.length; d++)
                    if (b[d].id === this.mouseoveredObjectMaps[c].id) {
                        f = !1;
                        break
                    }
                f ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c])
            }
            this.mouseoveredObjectMaps = e;
            for (c = 0; c < b.length; c++) {
                e = !1;
                for (d = 0; d < this.mouseoveredObjectMaps.length; d++)
                    if (b[c].id === this.mouseoveredObjectMaps[d].id) {
                        e = !0;
                        break
                    }
                e || (this.fireEvent(b[c],
                    "mouseover", a), this.mouseoveredObjectMaps.push(b[c]));
                "click" === a.type ? this.fireEvent(b[c], "click", a) : "mousemove" === a.type && this.fireEvent(b[c], "mousemove", a)
            }
        }
    };
    $.prototype.fireEvent = function(a, b, c) {
        if (a && b) {
            var d = a.eventParameter,
                e = a.eventContext,
                f = a.eventContext.userContext;
            f && (e && f[e[b]]) && f[e[b]].call(f, d);
            "mouseout" !== b ? f.cursor && f.cursor !== c.target.style.cursor && (c.target.style.cursor = f.cursor) : (c.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
            "click" === b && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], d)
        }
    };
    O(xa, L);
    oa.prototype.animate = function(a, b, c, d, e) {
        var f = this;
        this.chart.isAnimating = !0;
        e = e || y.easing.linear;
        c && this.animations.push({
            startTime: (new Date).getTime() + (a ? a : 0),
            duration: b,
            animationCallback: c,
            onComplete: d
        });
        for (a = []; 0 < this.animations.length;)
            if (b = this.animations.shift(), c = (new Date).getTime(), d = 0, b.startTime <= c && (d = e(Math.min(c - b.startTime,
                    b.duration), 0, 1, b.duration), d = Math.min(d, 1), isNaN(d) || !isFinite(d)) && (d = 1), 1 > d && a.push(b), b.animationCallback(d), 1 <= d && b.onComplete) b.onComplete();
        this.animations = a;
        0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
            f.animate.call(f)
        }) : this.chart.isAnimating = !1
    };
    oa.prototype.cancelAllAnimations = function() {
        this.animations = [];
        this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this.animationRequestId = null;
        this.chart.isAnimating = !1
    };
    var y = {
            yScaleAnimation: function(a, b) {
                if (0 !== a) {
                    var c = b.dest,
                        d = b.source.canvas,
                        e = b.animationBase;
                    c.drawImage(d, 0, 0, d.width, d.height, 0, e - e * a, c.canvas.width / H, a * c.canvas.height / H)
                }
            },
            xScaleAnimation: function(a, b) {
                if (0 !== a) {
                    var c = b.dest,
                        d = b.source.canvas,
                        e = b.animationBase;
                    c.drawImage(d, 0, 0, d.width, d.height, e - e * a, 0, a * c.canvas.width / H, c.canvas.height / H)
                }
            },
            xClipAnimation: function(a, b) {
                if (0 !== a) {
                    var c = b.dest,
                        d = b.source.canvas;
                    c.save();
                    0 < a && c.drawImage(d, 0, 0, d.width * a, d.height, 0, 0, d.width * a / H, d.height /
                        H);
                    c.restore()
                }
            },
            fadeInAnimation: function(a, b) {
                if (0 !== a) {
                    var c = b.dest,
                        d = b.source.canvas;
                    c.save();
                    c.globalAlpha = a;
                    c.drawImage(d, 0, 0, d.width, d.height, 0, 0, c.canvas.width / H, c.canvas.height / H);
                    c.restore()
                }
            },
            easing: {
                linear: function(a, b, c, d) {
                    return c * a / d + b
                },
                easeOutQuad: function(a, b, c, d) {
                    return -c * (a /= d) * (a - 2) + b
                },
                easeOutQuart: function(a, b, c, d) {
                    return -c * ((a = a / d - 1) * a * a * a - 1) + b
                },
                easeInQuad: function(a, b, c, d) {
                    return c * (a /= d) * a + b
                },
                easeInQuart: function(a, b, c, d) {
                    return c * (a /= d) * a * a * a + b
                }
            }
        },
        J = {
            drawMarker: function(a,
                b, c, d, e, f, g, k) {
                if (c) {
                    var p = 1;
                    c.fillStyle = f ? f : "#000000";
                    c.strokeStyle = g ? g : "#000000";
                    c.lineWidth = k ? k : 0;
                    "circle" === d ? (c.moveTo(a, b), c.beginPath(), c.arc(a, b, e / 2, 0, 2 * Math.PI, !1), f && c.fill(), k && (g ? c.stroke() : (p = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p))) : "square" === d ? (c.beginPath(), c.rect(a - e / 2, b - e / 2, e, e), f && c.fill(), k && (g ? c.stroke() : (p = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p))) : "triangle" === d ? (c.beginPath(), c.moveTo(a - e /
                        2, b + e / 2), c.lineTo(a + e / 2, b + e / 2), c.lineTo(a, b - e / 2), c.closePath(), f && c.fill(), k && (g ? c.stroke() : (p = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p)), c.beginPath()) : "cross" === d && (c.strokeStyle = f, c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, b - e / 2), c.lineTo(a + e / 2, b + e / 2), c.stroke(), c.moveTo(a + e / 2, b - e / 2), c.lineTo(a - e / 2, b + e / 2), c.stroke())
                }
            },
            drawMarkers: function(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    J.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness)
                }
            }
        },
        za = {
            Chart: function(a, b) {
                var c = new v(a, b, this);
                this.render = function() {
                    c.render(this.options)
                };
                this.options = c._options
            },
            addColorSet: function(a, b) {
                V[a] = b
            },
            addCultureInfo: function(a, b) {
                na[a] = b
            }
        };
    za.Chart.version = "v1.6.1 GA";
    window.CanvasJS = za
})();
/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext || function() {
    function V() {
        return this.context_ || (this.context_ = new C(this))
    }

    function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
            return a.apply(b, g.concat(M.call(arguments)))
        }
    }

    function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }

    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }

    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect();
                b.style.width = b.attributes.width.nodeValue + "px";
                b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                    "px"
        }
    }

    function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    }

    function D() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }

    function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) {
                for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                c[g][e] = f
            }
        return c
    }

    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX =
            a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }

    function Q(a) {
        var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
        return b
    }

    function E(a, b, c) {
        return Math.min(c, Math.max(b, a))
    }

    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c :
            1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }

    function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
            c = Q(a);
            b = "#";
            for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
            c = +c[3]
        } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g) g = e = b = e;
            else {
                var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                    d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3)
            }
            b = "#" +
                v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else b = Z[a] || a;
        return H[a] = {
            color: b,
            alpha: c
        }
    }

    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
            c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }

    function R(a, b, c, g) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x,
            cp1y: b.y,
            cp2x: c.x,
            cp2y: c.y,
            x: g.x,
            y: g.y
        });
        a.currentX_ = g.x;
        a.currentY_ = g.y
    }

    function S(a, b) {
        var c = G(a.strokeStyle),
            g = c.color,
            c = c.alpha * a.globalAlpha,
            e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke",
            ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }

    function T(a, b, c, g) {
        var e = a.fillStyle,
            f = a.arcScaleX_,
            d = a.arcScaleY_,
            k = g.x - c.x,
            n = g.y - c.y;
        if (e instanceof w) {
            var h = 0,
                l = g = 0,
                u = 0,
                m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f;
                c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d),
                    h = s(a, h, c),
                    h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0)
            } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
                n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function(a, b) {
                return a.offset - b.offset
            });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else e instanceof
        I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }

    function s(a, b, c) {
        a = a.m_;
        return {
            x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
            y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
        }
    }

    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
            b[1][0]))))
    }

    function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }

    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height
    }

    function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code
    }
    var x = Math,
        k = x.round,
        J = x.sin,
        K = x.cos,
        ba = x.abs,
        aa = x.sqrt,
        q = 10,
        r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function(a) {
            a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a))
        },
        init_: function(a) {
            a = a.getElementsByTagName("canvas");
            for (var b = 0; b < a.length; b++) this.initElement(a[b])
        },
        initElement: function(a) {
            if (!a.getContext) {
                a.getContext =
                    V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            grey: "#808080",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            oldlace: "#FDF5E6",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            whitesmoke: "#F5F5F5",
            yellowgreen: "#9ACD32"
        },
        H = {},
        L = {},
        $ = {
            butt: "flat",
            round: "round"
        },
        d = C.prototype;
    d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    };
    d.beginPath = function() {
        this.currentPath_ = []
    };
    d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.bezierCurveTo =
        function(a, b, c, g, e, f) {
            e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e)
        };
    d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = {
            x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
            y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
        };
        R(this, g, {
            x: g.x + (c.x - this.currentX_) / 3,
            y: g.y + (c.y - this.currentY_) / 3
        }, c)
    };
    d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa",
            k = a + K(g) * c - r,
            n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        })
    };
    d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath()
    };
    d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e
    };
    d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a +
            c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    };
    d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e
    };
    d.createRadialGradient = function(a, b, c, g, e, f) {
        var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f;
        return d
    };
    d.drawImage = function(a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width,
            u = a.height;
        a.runtimeStyle.width =
            e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
        else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g),
            p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
            10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g),
                w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
        } else p.push("top:",
            k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
            ' stroked="', !a, '"', ' path="');
        for (var c = {
                x: null,
                y: null
            }, d = {
                x: null,
                y: null
            }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
                case "moveTo":
                    b.push(" m ", k(f.x), ",", k(f.y));
                    break;
                case "lineTo":
                    b.push(" l ", k(f.x), ",", k(f.y));
                    break;
                case "close":
                    b.push(" x ");
                    f = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                        f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) {
                if (null == c.x || f.x < c.x) c.x = f.x;
                if (null == d.x || f.x > d.x) d.x = f.x;
                if (null == c.y || f.y < c.y) c.y = f.y;
                if (null == d.y || f.y > d.y) d.y = f.y
            }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function() {
        this.stroke(!0)
    };
    d.closePath = function() {
        this.currentPath_.push({
            type: "close"
        })
    };
    d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    };
    d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    };
    d.translate = function(a, b) {
        z(this, t([
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ], this.m_), !1)
    };
    d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1]
        ], this.m_), !1)
    };
    d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ], this.m_), !0)
    };
    d.transform = function(a, b, c, d, e, f) {
        z(this, t([
            [a,
                b, 0
            ],
            [c, d, 0],
            [e, f, 1]
        ], this.m_), !0)
    };
    d.setTransform = function(a, b, c, d, e, f) {
        z(this, [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ], !0)
    };
    d.drawText_ = function(a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3,
            t = 0,
            n = [],
            h;
        h = this.font;
        if (L[h]) h = L[h];
        else {
            var l = document.createElement("div").style;
            try {
                l.font = h
            } catch (u) {}
            h = L[h] = {
                style: l.fontStyle || "normal",
                variant: l.fontVariant || "normal",
                weight: l.fontWeight || "normal",
                size: l.fontSize || 10,
                family: l.fontFamily || "sans-serif"
            }
        }
        var l = h,
            m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                l = "ltr" == m.direction ? "right" : "left";
                break;
            case "start":
                l = "rtl" == m.direction ? "right" :
                    "left";
                break;
            default:
                l = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                t = h.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                t = -h.size / 2.25
        }
        switch (l) {
            case "right":
                d = 1E3;
                r = 0.05;
                break;
            case "center":
                d = r = 500
        }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, {
            x: -d,
            y: 0
        }, {
            x: r,
            y: h.size
        });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function(a, b, c, d) {
        this.drawText_(a, b, c, d, !1)
    };
    d.strokeText = function(a,
        b, c, d) {
        this.drawText_(a, b, c, d, !0)
    };
    d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return {
            width: this.textMeasureEl_.offsetWidth
        }
    };
    d.clip = function() {};
    d.arcTo = function() {};
    d.createPattern = function(a, b) {
        return new I(a, b)
    };
    w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({
            offset: a,
            color: b.color,
            alpha: b.alpha
        })
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
        13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();