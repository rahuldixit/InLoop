"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCellByName = function (data, workSheet, testCaseId, cellName) {
    var workSheetData = data[workSheet];
    for (var i = 0; i < workSheetData.length; i++) {
        if (workSheetData[i].TestCaseID == testCaseId)
            return workSheetData[i][cellName];
    }
    return null;
};
