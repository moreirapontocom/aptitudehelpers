"use strict";
/**
 * Get the CSV data and parse it into headers (string[]) and data (header:value[])
 * @param csvData comma-separated values. The first row is the headers. Each row is separated by a new line.
 * @returns headers (the headers of the CSV | string[]), data (the data of the CSV | object[]). Each object is a row in the CSV.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const parseCSV = (csvData) => {
    const lines = csvData.split('\n');
    const data = [];
    const headers = lines[0].split(',');
    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(',');
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        data.push(obj);
    }
    return {
        headers,
        data,
    };
};
exports.default = parseCSV;
