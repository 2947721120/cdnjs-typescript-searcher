define(["require", "exports", "jquery", "./dataoperations", "./preparefirst"], function (require, exports, $, dataoperations_1, preparefirst_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var elem = document.getElementById("text");
    var FirstPageUp = /** @class */ (function () {
        function FirstPageUp() {
        }
        FirstPageUp.prototype.sendForFiltering = function () {
            var elem = document.getElementById("text");
            var value = elem.value;
            dataoperations_1.DataOperations.makeRequest();
            dataoperations_1.DataOperations.setInputFilter(value);
            preparefirst_1.default.renderHTML(value);
        };
        return FirstPageUp;
    }());
    var SecondPageUp = /** @class */ (function () {
        function SecondPageUp() {
            this.myUrl = window.location.href;
            this.urlArray = this.myUrl.split('#');
            this.parameter = this.urlArray[1];
        }
        SecondPageUp.prototype.showPage = function () {
            console.log(location.href);
            dataoperations_1.DataOperations.makeRequest(this.parameter);
        };
        return SecondPageUp;
    }());
    var first = new FirstPageUp;
    var second = new SecondPageUp;
    $(document).ready(function () {
        if (location.href.indexOf('newpage.html') === -1) {
            elem.onkeyup = function () {
                first.sendForFiltering();
            };
            elem.onfocus = function () {
                preparefirst_1.default.activate();
            };
            $('#text').focusout(function () {
                preparefirst_1.default.deactivate();
            });
            preparefirst_1.default.inputManipulation();
        }
        else {
            second.showPage();
        }
    });
});
