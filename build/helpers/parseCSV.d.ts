/**
 * Get the CSV data and parse it into headers (string[]) and data (header:value[])
 * @param csvData comma-separated values. The first row is the headers. Each row is separated by a new line.
 * @returns headers (the headers of the CSV | string[]), data (the data of the CSV | object[]). Each object is a row in the CSV.
 */
declare const parseCSV: (csvData: any) => {
    headers: any;
    data: any;
};
export default parseCSV;
