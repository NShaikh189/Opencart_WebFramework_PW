//download the pacakge npm install csv-parse

import fs from "fs";
import { parse } from "csv-parse/sync";


export class CsvHelper
{

    static readCSV(filePath: string): Record<string,string>[] //Record is like a collection
    {

        return parse(fs.readFileSync(filePath, "utf-8"), {
            columns: true, //first row as headers
            skip_empty_lines: true,
            trim: true,
        }) as Record<string, string>[];
    }
}