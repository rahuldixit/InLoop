"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function DateCalculator(desiredDate) {
    var dateCalc = new Date();
    var year = dateCalc.getFullYear();
    var month = (dateCalc.getMonth() + 1).toString();
    if (parseInt(month) < 10)
        month = '0' + month;
    var day = dateCalc.getDate().toString();
    if (parseInt(day) < 10) {
        day = '0' + day;
    }
    if (desiredDate == "next week") {
        var firstDay = new Date(year + "/" + month + "/" + day);
        var nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);
        year = nextWeek.getFullYear();
        var month = (nextWeek.getMonth() + 1).toString();
        if (parseInt(month) < 10)
            month = '0' + month;
        var day = nextWeek.getDate().toString();
        if (parseInt(day) < 10) {
            day = '0' + day;
        }
    }
    return year + "-" + month + "-" + day;
}
exports.DateCalculator = DateCalculator;
;
