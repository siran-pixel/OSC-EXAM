const fs =require("node:fs");
const path = require("node:path");

const filename = path.join(__dirname, "sample.txt");

const data = "Employee Name: JACK\nEmployee ID: 1234\n";


fs.writeFile(filename, data, "utf8", function (err) {
    if (err) {
        console.error("Unable to write file:", err.message);
        return;
    }

    console.log("File created successfully.");

    fs.readFile(filename, "utf8", function (err, content) {
        if (err) {
            console.error("Unable to read file:", err.message);
            return;
        }

        console.log("\nFile Content:");
        console.log(content);
    });
});