//import * as fs from 'fs';
const fs = require('fs');
// import { writeFile } from 'fs/promises';

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File written successfully');
    }
});


    fs.readFile('employees.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });

fs.appendFile('employees.json', '{"name": "Employee 2 Name", "salary": 3000}', 'utf8', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File updated successfully');
    }
});

fs.unlink('employees.json', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File deleted successfully');
    }
});