function Main_selecter() {
    let select = document.getElementById("main_select").value;

    // List of all section IDs
    const sections = [
        "Length1", "Length2", "area1", "area2", "Data_trasfer1", "Data_trasfer2",
        "digital_storage1", "digital_storage2", "enargy1", "enargy2", "frequency1", "frequency2",
        "fuel1", "fuel2", "mass1", "mass2", "plane1", "plane2", 
        "pressure1", "pressure2", "speed1", "speed2", "temperature1", "temperature2"
    ];

    // Hide all sections
    sections.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    // Map select option to its visible elements + default values
    const config = {
        "Length":     { show: ["Length1", "Length2"], a: 0, b: 0 },
        "Area":       { show: ["area1", "area2"], a: 1, b: 1/1000000 },
        "Data Transfer Rate": { show: ["Data_trasfer1", "Data_trasfer2"], a: 1, b: 1/1000 },
        "Digital Storage": { show: ["digital_storage1", "digital_storage2"], a: 1, b: 1/1000 },
        "Energy":     { show: ["enargy1", "enargy2"], a: 1, b: 1/4184 },
        "Frequency":  { show: ["frequency1", "frequency2"], a: 1, b: 1/1000 },
        "Fuel Economy": { show: ["fuel1", "fuel2"], a: 1, b: 1 * 2.35214583 },
        "Mass":       { show: ["mass1", "mass2"], a: 1, b: 1000 },
        "Plane Angle": { show: ["plane1", "plane2"], a: 1, b: (3.14/180) },
        "Pressure":   { show: ["pressure1", "pressure2"], a: 1, b: 1/100000 },
        "Speed":      { show: ["speed1", "speed2"], a: 1, b: 3.6 },
        "Temperature": { show: ["temperature1", "temperature2"], a: 0, b: 32 } 
    };
    // Apply selected config
    if (config[select]) {
        config[select].show.forEach(id => {
            document.getElementById(id).style.display = "block";
        });

        document.getElementById("first_in").value = config[select].a;

        // Temperature special case
        if (select === "Temperature")
            document.getElementById("second_in").value = (0 * 9/5) + 32;
        else
            document.getElementById("second_in").value = config[select].b;
    }
}

function formula()
{
    let input1 = parseFloat(document.getElementById("first_in").value);
    let input2 = parseFloat(document.getElementById("second_in").value);
    let select2 = document.getElementById("area1").value;
    let select3 = document.getElementById("area2").value;
    let category = document.getElementById("main_select").value;
    if(isNaN(input1))
    {
        document.getElementById("second_in").value = "";
        return;
    }
let result = 0;
if(category == "Area")
{
if(select3 == "Square Kilometre"){
if(select2 == "Square Kilometre") {
    result = input1*1000000;
 select3 = document.getElementById("area2").value = "Square Metre";
}
else if(select2 == "Square metre") result = input1 * 1000000;
else if(select2 == "Square mile") result = input1 * 0.3861021585;
else if(select2 == "Square yard") result = input1 * 1195990.0463;
else if(select2 == "Square foot") result = input1 * 10763910.4167;
else if(select2 == "Square Inch") result = input1 * 1550003100;
else if(select2 == "Hectare") result = input1 * 100;
else if(select2 == "Acre") result = input1 * 247.105381;
}
// conver in square metre
if(select3 == "Square Metre"){
if(select2 == "Square Kilometre") result = input1 * 1000000;
else if(select2 == "Square metre") {
    result = input1 * 1000000;
    select3 = document.getElementById("area2").value = "Square Kilometre";
}
else if(select2 == "Square mile") result = input1 * 2589988.110336;
else if(select2 == "Square yard") result = input1 * 0.83612736;
else if(select2 == "Square foot") result = input1 * 0.09290304;
else if(select2 == "Square Inch") result = input1 * 0.00064516;
else if(select2 == "Hectare") result = input1 * 10000;
else if(select2 == "Acre") result = input1 * 4046.8564224;
}
// conver in square mile
if(select3 == "Square mile"){
if(select2 == "Square Kilometre") result = input1 * 0.386102;
else if(select2 == "Square metre") result = input1 * 3.861021585e-7;
else if(select2 == "Square mile"){
    result = input1 * 0.386102;
    select3 = document.getElementById("area2").value = "Square Kilometre";
}
else if(select2 == "Square yard") result = input1 * 3.228305785e-7;
else if(select2 == "Square foot") result = input1 * 3.587006427e-8;
else if(select2 == "Square Inch") result = input1 * 2.490976686e-10;
else if(select2 == "Hectare") result = input1 * 0.00386102;
else if(select2 == "Acre") result = input1 * 0.0015625;
}

//conver in Square yard
if(select3 == "Square yard"){
if(select2 == "Square Kilometre") result = input1 * 1195990.046301;
else if(select2 == "Square metre") result = input1 * 1.1959900463;
else if(select2 == "Square mile") result = input1 * 3097602.26;
else if(select2 == "Square yard") {
    result = input1 * 1195990.046301;
select3 = document.getElementById("area2").value = "Square Kilometre";
}
else if(select2 == "Square foot") result = input1 / 9;
else if(select2 == "Square Inch") result = input1 / 1296;
else if(select2 == "Hectare") result = input1 * 11959.900463;
else if(select2 == "Acre") result = input1 * 4840;
}
//conver in square foot
if(select3 == "Square foot"){
if(select2 == "Square Kilometre") result = input1 * 10763910.41671;
else if(select2 == "Square metre") result = input1 * 10.7639104167;
else if(select2 == "Square mile") result = input1 * 27878400;
else if(select2 == "Square yard") result = input1 * 9;
else if(select2 == "Square foot") {
    result = input1 * 10763910.41671;
select3 = document.getElementById("area2").value = "Square Kilometre";
}
else if(select2 == "Square Inch") result = input1 / 144;
else if(select2 == "Hectare") result = input1 * 107639.1041671;
else if(select2 == "Acre") result = input1 * 43560;
}

//convert in suare inch
if(select3 == "Square Inch"){
if(select2 == "Square Kilometre") result = input1 * 1550003100.006;
else if(select2 == "Square metre") result = input1 * 1550.0031;
else if(select2 == "Square mile") result = input1 * 4014489600;
else if(select2 == "Square yard") result = input1 * 1296;
else if(select2 == "Square foot") result = input1 * 144;
else if(select2 == "Square Inch") {
    result = input1 * 1550003100.006;
select3 = document.getElementById("area2").value = "Square Kilometre";
}
else if(select2 == "Hectare") result = input1 * 15500031.00006;
else if(select2 == "Acre") result = input1 * 6272640;
}
//convert in Hectare
if(select3 == "Hectare"){
if(select2 == "Square Kilometre") result = input1 * 100;
else if(select2 == "Square metre") result = input1 / 10000;
else if(select2 == "Square mile") result = input1 * 258.9988110336;
else if(select2 == "Square yard") result = input1 * 0.000083612736;
else if(select2 == "Square foot") result = input1 * 0.000009290304;
else if(select2 == "Square Inch") result = input1 * 0.000000064516;
else if(select2 == "Hectare") {
    result = input1 * 100; 
select3 = document.getElementById("area2").value = "Square Kilometre";
}
else if(select2 == "Acre") result = input1 * 0.40468564224;
}

//convert in Acre
if(select3 == "Acre"){
if(select2 == "Square Kilometre") result = input1 * 247.1053814672;
else if(select2 == "Square metre") result = input1 * 0.0002471054;
else if(select2 == "Square mile") result = input1 * 640;
else if(select2 == "Square yard") result = input1 * 0.0002066116;
else if(select2 == "Square foot") result = input1 * 0.0000229568;
else if(select2 == "Square Inch") result = input1 * 0.00000001598256;
else if(select2 == "Hectare") result = input1 * 2.471053814672;
else if(select2 == "Acre") {
result = input1 * 247.1053814672;
select3 = document.getElementById("area2").value = "Square Kilometre";
}
}
}
//--------------Data transfer --------------------
else if(category == "Data Transfer Rate")
{
select2 = document.getElementById("Data_trasfer1").value;
select3 = document.getElementById("Data_trasfer2").value;
result = 0;
if(select3 == "Kilobit per second"){
if(select2 == "Bit per second") result = input1 / 1000;
else if(select2 == "Kilobit per second") result = input1 * 1;
else if(select2 == "Kilobyte per second") result = input1 * 8;
else if(select2 == "Kibibit per second") result = input1 * 1.024;
else if(select2 == "Megabit per second") result = input1 * 1000;
else if(select2 == "Megabyte per second") result = input1 /1000;
else if(select2 == "mebibit per second") result = input1 * 8 * 1000;
else if(select2 == "Gigabit per second") result = input1 * 1000000;
else if(select2 == "Gigabyte per second") result = input1 * 8000000;
else if(select2 == "Gibibit per second") result = input1 * 1024000;
else if(select2 == "Terabit per second") result = input1 * 1000000000;
else if(select2 == "Terabyte per second") result = input1 * 8000000000; 
else if(select2 == "Tebibit per second") result = input1 * 1024000000;
}
// convert in bit par second
if(select3 == "Bit per second"){
if(select2 == "Bit per second") result = input1;
else if(select2 == "Kilobit per second") result = input1 * 1000;
else if(select2 == "Kilobyte per second") result = input1 * 8 * 1000;
else if(select2 == "Kibibit per second") result = input1 * 1024;
else if(select2 == "Megabit per second") result = input1 * 1000000;
else if(select2 == "Megabyte per second") result = input1 * 8 * 1000000;
else if(select2 == "Mebibit per second") result = input1 * 1024 * 1000;
else if(select2 == "Gigabit per second") result = input1 * 1000000000;
else if(select2 == "Gigabyte per second") result = input1 * 8 * 1000000000;
else if(select2 == "Gibibit per second") result = input1 * 1024 * 1000000;
else if(select2 == "Terabit per second") result = input1 * 1000000000000;
else if(select2 == "Terabyte per second") result = input1 * 8 * 1000000000000;
else if(select2 == "Tebibit per second") result = input1 * 1024 * 1000000000;
}
//convert in to kilobyte par second
if(select3 == "Kilobyte per second"){
if(select2 == "Bit per second") result = input1 / 8 / 1000;
else if(select2 == "Kilobit per second") result = input1 / 8;
else if(select2 == "Kilobyte per second") result = input1;
else if(select2 == "Kibibit per second") result = input1 * 1024 / 8 / 1000;
else if(select2 == "Megabit per second") result = input1 * 1000 / 8;
else if(select2 == "Megabyte per second") result = input1 * 1000;
else if(select2 == "Mebibit per second") result = input1 * 1024;
else if(select2 == "Gigabit per second") result = input1 * 1000000 / 8;
else if(select2 == "Gigabyte per second") result = input1 * 1000000;
else if(select2 == "Gibibit per second") result = input1 * 1024 * 1000 / 8;
else if(select2 == "Terabit per second") result = input1 * 1000000000 / 8;
else if(select2 == "Terabyte per second") result = input1 * 1000000000;
else if(select2 == "Tebibit per second") result = input1 * 1024 * 1000000 / 8;
}
//convert into kibibit per second
if(select2 == "Bit per second" && select3 == "Kibibit per second"){
if(select2 == "Bit per second") result = input1 / 1024;
else if(select2 == "Kilobit per second") result = input1 / 1.024;
else if(select2 == "Kilobyte per second") result = input1 * 8 / 1.024;
else if(select2 == "Kibibit per second") result = input1;
else if(select2 == "Megabit per second") result = input1 * 1000 / 1.024;
else if(select2 == "Megabyte per second") result = input1 * 8 * 1000 / 1.024;
else if(select2 == "Mebibit per second") result = input1 * 1024;
else if(select2 == "Gigabit per second") result = input1 * 1000000 / 1.024;
else if(select2 == "Gigabyte per second") result = input1 * 8 * 1000000 / 1.024;
else if(select2 == "Gibibit per second") result = input1 * 1024 * 1000 / 1.024;
else if(select2 == "Terabit per second") result = input1 * 1000000000 / 1.024;
else if(select2 == "Terabyte per second") result = input1 * 8 * 1000000000 / 1.024;
else if(select2 == "Tebibit per second") result = input1 * 1024 * 1000000;
}
//convert into megabit per second
if(select3 == "Megabit per second"){
if(select2 == "Bit per second") result = input1 / 1000000;
else if(select2 == "Kilobit per second") result = input1 / 1000;
else if(select2 == "Kilobyte per second") result = input1 * 8 / 1000;
else if(select2 == "Kibibit per second") result = input1 * 1.024 / 1000;
else if(select2 == "Megabit per second") result = input1;
else if(select2 == "Megabyte per second") result = input1 * 8;
else if(select2 == "Mebibit per second") result = input1 * 1024 / 1000;
else if(select2 == "Gigabit per second") result = input1 * 1000;
else if(select2 == "Gigabyte per second") result = input1 * 8000;
else if(select2 == "Gibibit per second") result = input1 * 1024;
else if(select2 == "Terabit per second") result = input1 * 1000000;
else if(select2 == "Terabyte per second") result = input1 * 8000000;
else if(select2 == "Tebibit per second") result = input1 * 1024000;
}
//convert into Megabyte per second 
if(select3 == "Megabyte per second"){
if(select2 == "Bit per second")result = input1 / 8 / 1000000;
else if(select2 == "Kilobit per second") result = input1 / 8 / 1000;
else if(select2 == "Kilobyte per second") result = input1 / 1000;
else if(select2 == "Kibibit per second") result = input1 * 1.024 / 8 / 1000;
else if(select2 == "Megabit per second") result = input1 / 8;
else if(select2 == "Megabyte per second") result = input1;
else if(select2 == "Mebibit per second") result = input1 * 1024 / 8 / 1000;
else if(select2 == "Gigabit per second") result = input1 * 1000 / 8;
else if(select2 == "Gigabyte per second") result = input1 * 1000;
else if(select2 == "Gibibit per second") result = input1 * 1024 / 8;
else if(select2 == "Terabit per second") result = input1 * 1000000 / 8;
else if(select2 == "Terabyte per second") result = input1 * 1000000;
else if(select2 == "Tebibit per second")result = input1 * 1024 * 1000 / 8;
}
//convert into Mebibit per second
if(select3 == "Mebibit per second"){
if(select2 == "Bit per second")result = input1 / (1024 * 1024);
else if(select2 == "Kilobit per second") result = input1 / (1024 * 1.024);
else if(select2 == "Kilobyte per second") result = input1 * 8 / (1024 * 1.024);
else if(select2 == "Kibibit per second") result = input1 / 1024;
else if(select2 == "Megabit per second") result = input1 / 1.024;
else if(select2 == "Megabyte per second") result = input1 * 8 / 1.024;
else if(select2 == "Mebibit per second") result = input1;
else if(select2 == "Gigabit per second") result = input1 * 1000 / 1.024;
else if(select2 == "Gigabyte per second") result = input1 * 8000 / 1.024;
else if(select2 == "Gibibit per second") result = input1 * 1024;
else if(select2 == "Terabit per second") result = input1 * 1000000 / 1.024;
else if(select2 == "Terabyte per second") result = input1 * 8000000 / 1.024;
else if(select2 == "Tebibit per second") result = input1 * 1024 * 1000;
}
//convert into Gigabit per second
if(select3 == "Gigabit per second"){
if(select2 == "Gigabbit per second") result = input1;
else if(select2 == "Bit per second") result = input1/1000000000;
else if(select2 == "Kilobit per second") result = input1 / 1000000;
else if(select2 == "Kilobyte per second") result = input1 * 8 / 1000000000;
else if(select2 == "Kibibit per second") result = input1 / 1024 / 1024;
else if(select2 == "Megabit per second") result = input1 / 1000;
else if(select2 == "Megabyte per second") result = input1 * 8 / 1000;
else if(select2 == "Mebibit per second") result = input1 / 1024;
else if(select2 == "Gigabyte per second") result = input1 * 8;
else if(select2 == "Gibibit per second") result = input1 * 1.073741824; // 1024/1000
else if(select2 == "Terabit per second") result = input1 * 1000;
else if(select2 == "Terabyte per second" )result = input1 * 8000;
else if(select2 == "Tebibit per second") result = input1 * 1024;
}
//convert into Gigabyte per second
if(select3 == "Gigabyte per second"){
if(select2 == "Bit per second") result = input1 / 8 / 1000000000;
else if(select2 == "Kilobit per second") result = input1 / 8 / 1000000;
else if(select2 == "Kilobyte per second") result = input1 / 1000;
else if(select2 == "Kibibit per second") result = input1 / 1024 / 1024 / 8;
else if(select2 == "Megabit per second") result = input1 / 8 / 1000;
else if(select2 == "Megabyte per second") result = input1 / 1000;
else if(select2 == "Mebibit per second") result = input1 / 1024 / 1024 * 8;
else if(select2 == "Gigabit per second") result = input1 / 8;
else if(select2 == "Gigabyte per second") result = input1;
else if(select2 == "Gibibit per second") result = input1 * 1024 / 8 / 1000;
else if(select2 == "Terabit per second") result = input1 / 8 * 1000;
else if(select2 == "Terabyte per second") result = input1 * 1000;
else if(select2 == "Tebibit per second") result = input1 * 1024 / 8;
}
//convert into Gibibit per second
else if(select3 == "Gibibit per second"){  // Target unit Gibibit/s
    if(select2 == "Bit per second") result = input1 / (1024 * 1024 * 1024);
    else if(select2 == "Kilobit per second") result = input1 / (1024 * 1024);
    else if(select2 == "Kilobyte per second") result = input1 * 8 / (1024 * 1024);
    else if(select2 == "Kibibit per second") result = input1 / 1024 / 1024;
    else if(select2 == "Megabit per second") result = input1 / 1024;
    else if(select2 == "Megabyte per second") result = input1 * 8 / 1024;
    else if(select2 == "Mebibit per second") result = input1 / 1024;
    else if(select2 == "Gigabit per second") result = input1 * 1024 / 1024;
    else if(select2 == "Gigabyte per second") result = input1 * 8 / 1024;
    else if(select2 == "Gibibit per second") result = input1;
    else if(select2 == "Terabit per second") result = input1 * 1024;
    else if(select2 == "Terabyte per second") result = input1 * 8 * 1024;
    else if(select2 == "Tebibit per second") result = input1 * 1024;
}
//convert into terabit per second
else if(select3 == "Terabit per second"){  // Target unit Terabit/s
    if(select2 == "Bit per second") result = input1 / 1e12;
    else if(select2 == "Kilobit per second") result = input1 / 1e9;
    else if(select2 == "Kilobyte per second") result = input1 * 8 / 1e9;
    else if(select2 == "Kibibit per second") result = input1 / (1024 * 1024 * 1024);
    else if(select2 == "Megabit per second") result = input1 / 1e6;
    else if(select2 == "Megabyte per second") result = input1 * 8 / 1e6;
    else if(select2 == "Mebibit per second") result = input1 / (1024 * 1024);
    else if(select2 == "Gigabit per second") result = input1 / 1000;
    else if(select2 == "Gigabyte per second") result = input1 * 8 / 1000;
    else if(select2 == "Gibibit per second") result = input1 / 1024;
    else if(select2 == "Terabit per second") result = input1;
    else if(select2 == "Terabyte per second") result = input1 * 8;
    else if(select2 == "Tebibit per second") result = input1 * 1024;
}
//convert into Terabyte per second
else if(select3 == "Terabyte per second"){  // Target unit Terabyte/s
    if(select2 == "Bit per second") result = input1 / (8 * 1e12);
    else if(select2 == "Kilobit per second") result = input1 / (8 * 1e9);
    else if(select2 == "Kilobyte per second") result = input1 / 1e9;
    else if(select2 == "Kibibit per second") result = input1 / (1024 * 1024 * 1024 * 8);
    else if(select2 == "Megabit per second") result = input1 / (8 * 1e6);
    else if(select2 == "Megabyte per second") result = input1 / 1e6;
    else if(select2 == "Mebibit per second") result = input1 / (1024 * 1024 * 8);
    else if(select2 == "Gigabit per second") result = input1 / 8000;
    else if(select2 == "Gigabyte per second") result = input1 / 1000;
    else if(select2 == "Gibibit per second") result = input1 / (1024 * 8);
    else if(select2 == "Terabit per second") result = input1 / 8;
    else if(select2 == "Terabyte per second") result = input1;
    else if(select2 == "Tebibit per second") result = input1 * 1024 / 8;
}
//convert into Tebibit per second
else if(select3 == "Tebibit per second"){  // Target unit Tebibit/s
    if(select2 == "Bit per second") result = input1 / (1024 * 1024 * 1024 * 1024);
    else if(select2 == "Kilobit per second") result = input1 / (1024 * 1024 * 1024);
    else if(select2 == "Kilobyte per second") result = input1 * 8 / (1024 * 1024 * 1024);
    else if(select2 == "Kibibit per second") result = input1 / (1024 * 1024 * 1024);
    else if(select2 == "Megabit per second") result = input1 / (1024 * 1024);
    else if(select2 == "Megabyte per second") result = input1 * 8 / (1024 * 1024);
    else if(select2 == "Mebibit per second") result = input1 / 1024;
    else if(select2 == "Gigabit per second") result = input1 / 1024;
    else if(select2 == "Gigabyte per second") result = input1 * 8 / 1024;
    else if(select2 == "Gibibit per second") result = input1;
    else if(select2 == "Terabit per second") result = input1 / 1024;
    else if(select2 == "Terabyte per second") result = input1 * 8 / 1024;
    else if(select2 == "Tebibit per second") result = input1;
}
}
//--------------Energy--------------------
else if(category == "Energy"){
select2 = document.getElementById("enargy1").value;
select3 = document.getElementById("enargy2").value;
result = 0;
if(select3 == "Joule"){  // Target unit Tebibit/s
    if(select2 == "Joule") result = input1;
    else if(select2 == "kilojoule") result = input1 * 1000;
    else if(select2 == "Gram calorie") result = input1 * 4.184;
    else if(select2 == "kilocalorie") result = input1 * 4184;
    else if(select2 == "Watt hour") result = input1 * 3600;
    else if(select2 == "killowatt hour") result = input1 * 3600000;
    else if(select2 == "Electronvolt") result = input1 * 1.602e-19;
    else if(select2 == "British thermal unit") result = input1 * 1.602e-19;
    else if(select2 == "Tebibit") result = input1 * 1055.06;
    else if(select2 == "Foot Pound") result = input1 * 1.35582;
}
//convert into kilojoule
else if(select3 == "kilojoule"){  // Target unit Kilojoule
    if(select2 == "Joule") result = input1 / 1000;
    else if(select2 == "kilojoule") result = input1;
    else if(select2 == "Gram calorie") result = input1 * 0.004184;
    else if(select2 == "kilocalorie") result = input1 * 4.184;
    else if(select2 == "Watt hour") result = input1 * 3.6;
    else if(select2 == "kilowatt hour") result = input1 * 3600;
    else if(select2 == "Electronvolt") result = input1 * 1.602e-22;
    else if(select2 == "British thermal unit") result = input1 * 1.05506;
    else if(select2 == "Foot Pound") result = input1 * 0.00135582;
}
//convert into gram calorie
else if(select3 == "Gram calorie"){  // Target unit Gram calorie
    if(select2 == "Joule") result = input1 / 4.184;
    else if(select2 == "kilojoule") result = input1 * 238.8458966;
    else if(select2 == "Gram calorie") result = input1;
    else if(select2 == "kilocalorie") result = input1 * 1000;
    else if(select2 == "Watt hour") result = input1 * 860.421;
    else if(select2 == "kilowatt hour") result = input1 * 860421;
    else if(select2 == "Electronvolt") result = input1 * 2.612e19;
    else if(select2 == "British thermal unit") result = input1 * 252.164;
    else if(select2 == "Foot Pound") result = input1 * 3.088;
}
//convert into kilocalorie
else if(select3 == "kilocalorie"){  // Target unit kilocalorie
    if(select2 == "Joule") result = input1 / 4184;
    else if(select2 == "kilojoule") result = input1 / 4.184;
    else if(select2 == "Gram calorie") result = input1 / 1000;
    else if(select2 == "kilocalorie") result = input1;
    else if(select2 == "Watt hour") result = input1 * 0.860421;
    else if(select2 == "kilowatt hour") result = input1 * 860.421;
    else if(select2 == "Electronvolt") result = input1 * 2.612e-22;
    else if(select2 == "British thermal unit") result = input1 * 0.252164;
    else if(select2 == "Foot Pound") result = input1 * 0.000323832;
}
//convert into Watt hour
else if(select3 == "Watt hour"){  // Target unit Watt hour
    if(select2 == "Joule") result = input1 / 3600;
    else if(select2 == "kilojoule") result = input1 / 3.6;
    else if(select2 == "Gram calorie") result = input1 * 0.00116222;
    else if(select2 == "kilocalorie") result = input1 * 1.16222;
    else if(select2 == "Watt hour") result = input1;
    else if(select2 == "kilowatt hour") result = input1 * 1000;
    else if(select2 == "Electronvolt") result = input1 * 4.45e-22;
    else if(select2 == "British thermal unit") result = input1 * 0.000293071;
    else if(select2 == "Foot Pound") result = input1 * 0.000376616;
}
//convert into killowatt hour
else if(select3 == "killowatt hour"){  // Target unit kilowatt hour
    if(select2 == "Joule") result = input1 / 3600000;
    else if(select2 == "kilojoule") result = input1 / 3600;
    else if(select2 == "Gram calorie") result = input1 * 1.16222e-6;
    else if(select2 == "kilocalorie") result = input1 * 0.00116222;
    else if(select2 == "Watt hour") result = input1 / 1000;
    else if(select2 == "kilowatt hour") result = input1;
    else if(select2 == "Electronvolt") result = input1 * 4.45e-25;
    else if(select2 == "British thermal unit") result = input1 * 2.9307e-7;
    else if(select2 == "Foot Pound") result = input1 * 3.76616e-7;
}
//convert into Electronvolt
else if(select3 == "Electronvolt"){  // Target unit Electronvolt
    if(select2 == "Joule") result = input1 / 1.602176634e-19;
    else if(select2 == "kilojoule") result = input1 * 1000 / 1.602176634e-19;
    else if(select2 == "Gram calorie") result = input1 * 4.184 / 1.602176634e-19;
    else if(select2 == "kilocalorie") result = input1 * 4184 / 1.602176634e-19;
    else if(select2 == "Watt hour") result = input1 * 3600 / 1.602176634e-19;
    else if(select2 == "kilowatt hour") result = input1 * 3600000 / 1.602176634e-19;
    else if(select2 == "Electronvolt") result = input1;
    else if(select2 == "British thermal unit") result = input1 * 1055.06 / 1.602176634e-19;
    else if(select2 == "Foot Pound") result = input1 * 1.35582 / 1.602176634e-19;
}
//convert into British thermal unit
else if(select3 == "British thermal unit"){  // Target unit BTU
    if(select2 == "Joule") result = input1 / 1055.06;
    else if(select2 == "kilojoule") result = input1 * 1000 / 1055.06;
    else if(select2 == "Gram calorie") result = input1 * 4.184 / 1055.06;
    else if(select2 == "kilocalorie") result = input1 * 4184 / 1055.06;
    else if(select2 == "Watt hour") result = input1 * 3600 / 1055.06;
    else if(select2 == "kilowatt hour") result = input1 * 3600000 / 1055.06;
    else if(select2 == "Electronvolt") result = input1 * 1.602176634e-19 / 1055.06;
    else if(select2 == "British thermal unit") result = input1;
    else if(select2 == "Foot Pound") result = input1 * 1.35582 / 1055.06;
}
//convert into Tebibit
else if(select3 == "Tebibit"){  // Target unit Tebibit
    if(select2 == "Joule") result = input1 / 1.055e18;
    else if(select2 == "kilojoule") result = input1 * 1000 / 1.055e18;
    else if(select2 == "Gram calorie") result = input1 * 4.184 / 1.055e18;
    else if(select2 == "kilocalorie") result = input1 * 4184 / 1.055e18;
    else if(select2 == "Watt hour") result = input1 * 3600 / 1.055e18;
    else if(select2 == "kilowatt hour") result = input1 * 3600000 / 1.055e18;
    else if(select2 == "Electronvolt") result = input1 * 1.602176634e-19 / 1.055e18;
    else if(select2 == "British thermal unit") result = input1 * 1055.06 / 1.055e18;
    else if(select2 == "Tebibit") result = input1;
    else if(select2 == "Foot Pound") result = input1 * 1.35582 / 1.055e18;
}
//convert into Foot Pound
else if(select3 == "Foot Pound"){  // Target unit Foot Pound
    if(select2 == "Joule") result = input1 * 0.737562;
    else if(select2 == "kilojoule") result = input1 * 737.562;
    else if(select2 == "Gram calorie") result = input1 * 0.003086;
    else if(select2 == "kilocalorie") result = input1 * 3.086;
    else if(select2 == "Watt hour") result = input1 * 2.65522;
    else if(select2 == "kilowatt hour") result = input1 * 2655.22;
    else if(select2 == "Electronvolt") result = input1 * 2.356e-19;
    else if(select2 == "British thermal unit") result = input1 * 778.169;
    else if(select2 == "Tebibit") result = input1 * 7.3756e-19;
    else if(select2 == "Foot Pound") result = input1;
}
}
//-----------------------Digital Strorage-------------------------
else if(category == "Digital Storage")
{
select2 = document.getElementById("digital_storage1").value;
select3 = document.getElementById("digital_storage2").value;
result = 0;
if(select3 == "Bit"){  // Target unit Bit
    if(select2 == "Bit") result = input1;
    else if(select2 == "Kilobit") result = input1 * 1000;
    else if(select2 == "Kibibit") result = input1 * 1024;
    else if(select2 == "Megabit") result = input1 * 1000000;
    else if(select2 == "Mebibit") result = input1 * 1024 * 1024;
    else if(select2 == "Gigabit") result = input1 * 1000000000;
    else if(select2 == "Gibibit") result = input1 * 1024 * 1024 * 1024;
    else if(select2 == "Terabit") result = input1 * 1000000000000;
    else if(select2 == "Tebibit") result = input1 * 1024 * 1024 * 1024 * 1024;
    else if(select2 == "Petabit") result = input1 * 1000000000000000;
    else if(select2 == "Pebibit") result = input1 * 1024n * 1024n * 1024n * 1024n * 1024n; // BigInt for very large numbers
    else if(select2 == "Byte") result = input1 * 8;
    else if(select2 == "Kilobyte") result = input1 * 8 * 1000;
    else if(select2 == "Kibibyte") result = input1 * 8 * 1024;
    else if(select2 == "Megabyte") result = input1 * 8 * 1000000;
    else if(select2 == "Mebibyte") result = input1 * 8 * 1024 * 1024;
    else if(select2 == "Gigabyte") result = input1 * 8 * 1000000000;
    else if(select2 == "Tebibyte") result = input1 * 8 * 1024 * 1024 * 1024;
    else if(select2 == "Terabyte") result = input1 * 8 * 1000000000000;
    else if(select2 == "Petabyte") result = input1 * 8 * 1000000000000000;
}
//convert into Kilobit
else if(select3 == "Kilobit"){  // Target unit Kilobit
    if(select2 == "Bit") result = input1 / 1000;
    else if(select2 == "Kilobit") result = input1;
    else if(select2 == "Kibibit") result = input1 * 1024 / 1000;
    else if(select2 == "Megabit") result = input1 * 1000;
    else if(select2 == "Mebibit") result = input1 * 1024;
    else if(select2 == "Gigabit") result = input1 * 1000000;
    else if(select2 == "Gibibit") result = input1 * 1024 * 1000;
    else if(select2 == "Terabit") result = input1 * 1000000000;
    else if(select2 == "Tebibit") result = input1 * 1024 * 1000000;
    else if(select2 == "Petabit") result = input1 * 1000000000000;
    else if(select2 == "Pebibit") result = input1 * 1024 * 1000000000;
    else if(select2 == "Byte") result = input1 * 8 / 1000;
    else if(select2 == "Kilobyte") result = input1 * 8;
    else if(select2 == "Kibibyte") result = input1 * 8 * 1024 / 1000;
    else if(select2 == "Megabyte") result = input1 * 8 * 1000;
    else if(select2 == "Mebibyte") result = input1 * 8 * 1024;
    else if(select2 == "Gigabyte") result = input1 * 8 * 1000000;
    else if(select2 == "Tebibyte") result = input1 * 8 * 1024 * 1000;
    else if(select2 == "Terabyte") result = input1 * 8 * 1000000000;
    else if(select2 == "Petabyte") result = input1 * 8 * 1000000000000;
}
//convert into Kibibit
else if(select3 == "Kibibit"){  // Target unit Kibibit
    if(select2 == "Bit") result = input1 / 1024;
    else if(select2 == "Kilobit") result = input1 / 1.024;
    else if(select2 == "Kibibit") result = input1;
    else if(select2 == "Megabit") result = input1 * 1000 / 1.024;
    else if(select2 == "Mebibit") result = input1 * 1024;
    else if(select2 == "Gigabit") result = input1 * 1000000 / 1.024;
    else if(select2 == "Gibibit") result = input1 * 1024 * 1000 / 1.024;
    else if(select2 == "Terabit") result = input1 * 1000000000 / 1.024;
    else if(select2 == "Tebibit") result = input1 * 1024 * 1000000;
    else if(select2 == "Petabit") result = input1 * 1000000000000 / 1.024;
    else if(select2 == "Pebibit") result = input1 * 1024 * 1000000000;
    else if(select2 == "Byte") result = input1 * 8 / 1.024 / 1000;
    else if(select2 == "Kilobyte") result = input1 * 8 / 1.024;
    else if(select2 == "Kibibyte") result = input1 * 8 * 1024 / 1.024 / 1000;
    else if(select2 == "Megabyte") result = input1 * 8 * 1000 / 1.024;
    else if(select2 == "Mebibyte") result = input1 * 8 * 1024;
    else if(select2 == "Gigabyte") result = input1 * 8 * 1000000 / 1.024;
    else if(select2 == "Tebibyte") result = input1 * 8 * 1024 * 1000;
    else if(select2 == "Terabyte") result = input1 * 8 * 1000000000 / 1.024;
    else if(select2 == "Petabyte") result = input1 * 8 * 1000000000000 / 1.024;
}
//convert into Megabit
else if(select3 == "Megabit"){  // Target unit Megabit per second
    if(select2 == "Bit") result = input1 / 1000000;
    else if(select2 == "Kilobit") result = input1 / 1000;
    else if(select2 == "Kibibit") result = input1 * 1.024 / 1000;
    else if(select2 == "Megabit") result = input1;
    else if(select2 == "Mebibit") result = input1 * 1.024;
    else if(select2 == "Gigabit") result = input1 * 1000;
    else if(select2 == "Gibibit") result = input1 * 1024;
    else if(select2 == "Terabit") result = input1 * 1000000;
    else if(select2 == "Tebibit") result = input1 * 1024000;
    else if(select2 == "Petabit") result = input1 * 1000000000;
    else if(select2 == "Pebibit") result = input1 * 1024000000;
    else if(select2 == "Byte") result = input1 * 8 / 1000000;
    else if(select2 == "Kilobyte") result = input1 * 8 / 1000;
    else if(select2 == "Kibibyte") result = input1 * 8 * 1.024 / 1000;
    else if(select2 == "Megabyte") result = input1 * 8;
    else if(select2 == "Mebibyte") result = input1 * 8 * 1.024;
    else if(select2 == "Gigabyte") result = input1 * 8000;
    else if(select2 == "Tebibyte") result = input1 * 8 * 1024 * 1024;
    else if(select2 == "Terabyte") result = input1 * 8 * 1000000;
    else if(select2 == "Petabyte") result = input1 * 8 * 1000000000;
}
//convert into mebibit
else if(select3 == "mebibit"){  // Target unit Mebibit per second
    if(select2 == "Bit") result = input1 / (1024 * 1024);
    else if(select2 == "Kilobit") result = input1 / 1024;
    else if(select2 == "Kibibit") result = input1 / 1024;
    else if(select2 == "Megabit") result = input1 / 1.024;
    else if(select2 == "Mebibit") result = input1;
    else if(select2 == "Gigabit") result = input1 * 1000 / 1.024;
    else if(select2 == "Gibibit") result = input1 * 1024 / 1.024;
    else if(select2 == "Terabit") result = input1 * 1000000 / 1.024;
    else if(select2 == "Tebibit") result = input1 * 1024000 / 1.024;
    else if(select2 == "Petabit") result = input1 * 1000000000 / 1.024;
    else if(select2 == "Pebibit") result = input1 * 1024000000 / 1.024;
    else if(select2 == "Byte") result = input1 * 8 / (1024 * 1024);
    else if(select2 == "Kilobyte") result = input1 * 8 / 1024;
    else if(select2 == "Kibibyte") result = input1 * 8 / 1.024;
    else if(select2 == "Megabyte") result = input1 * 8 / 1.024;
    else if(select2 == "Mebibyte") result = input1 * 8;
    else if(select2 == "Gigabyte") result = input1 * 8 * 1000 / 1.024;
    else if(select2 == "Gibibyte") result = input1 * 8 * 1024 / 1.024;
    else if(select2 == "Terabyte") result = input1 * 8 * 1000000 / 1.024;
    else if(select2 == "Tebibyte") result = input1 * 8 * 1024000 / 1.024;
    else if(select2 == "Petabyte") result = input1 * 8 * 1000000000 / 1.024;
    else if(select2 == "Pebibyte") result = input1 * 8 * 1024000000 / 1.024;
}
//convert into Gigabit
else if(select3 == "Gigabit"){  // Target unit Gigabit per second
    if(select2 == "Bit") result = input1 / 1000000000;
    else if(select2 == "Kilobit") result = input1 / 1000000;
    else if(select2 == "Kibibit") result = input1 / 1048576;
    else if(select2 == "Megabit") result = input1 / 1000;
    else if(select2 == "Mebibit") result = input1 / 1.024 / 1000;
    else if(select2 == "Gigabit") result = input1;
    else if(select2 == "Gibibit") result = input1 * 1.024;
    else if(select2 == "Terabit") result = input1 * 1000;
    else if(select2 == "Tebibit") result = input1 * 1024;
    else if(select2 == "Petabit") result = input1 * 1000000;
    else if(select2 == "Pebibit") result = input1 * 1024000;
    else if(select2 == "Byte") result = input1 / 125000000;
    else if(select2 == "Kilobyte") result = input1 / 125000;
    else if(select2 == "Kibibyte") result = input1 / 131072;
    else if(select2 == "Megabyte") result = input1 / 125;
    else if(select2 == "Mebibyte") result = input1 / 1.024 / 125;
    else if(select2 == "Gigabyte") result = input1 * 8;
    else if(select2 == "Gibibyte") result = input1 * 8.192;
    else if(select2 == "Terabyte") result = input1 * 8000;
    else if(select2 == "Tebibyte") result = input1 * 8192;
    else if(select2 == "Petabyte") result = input1 * 8000000;
    else if(select2 == "Pebibyte") result = input1 * 8192000;
}
//convert into Gibibit
else if(select3 == "Gibibit"){  // Target unit Gibibit per second
    if(select2 == "Bit") result = input1 / 1073741824;
    else if(select2 == "Kilobit") result = input1 / 1048576;
    else if(select2 == "Kibibit") result = input1 / 1024;
    else if(select2 == "Megabit") result = input1 / 1024;
    else if(select2 == "Mebibit") result = input1 / 1.024;
    else if(select2 == "Gigabit") result = input1 / 1.024;
    else if(select2 == "Gibibit") result = input1;
    else if(select2 == "Terabit") result = input1 * 1024;
    else if(select2 == "Tebibit") result = input1 * 1024;
    else if(select2 == "Petabit") result = input1 * 1024 * 1024;
    else if(select2 == "Pebibit") result = input1 * 1024 * 1024;
    else if(select2 == "Byte") result = input1 / 134217728;
    else if(select2 == "Kilobyte") result = input1 / 131072;
    else if(select2 == "Kibibyte") result = input1 / 128;
    else if(select2 == "Megabyte") result = input1 / 128;
    else if(select2 == "Mebibyte") result = input1 / 1.024;
    else if(select2 == "Gigabyte") result = input1 * 8 / 1.024;
    else if(select2 == "Gibibyte") result = input1 * 8;
    else if(select2 == "Terabyte") result = input1 * 8192;
    else if(select2 == "Tebibyte") result = input1 * 8192;
    else if(select2 == "Petabyte") result = input1 * 8192 * 1024;
    else if(select2 == "Pebibyte") result = input1 * 8192 * 1024;
}
//convert into Terabit
else if(select3 == "Terabit"){  // Target unit Terabit per second
    if(select2 == "Bit") result = input1 / 1000000000000;
    else if(select2 == "Kilobit") result = input1 / 1000000000;
    else if(select2 == "Kibibit") result = input1 / 1099511627.776; 
    else if(select2 == "Megabit") result = input1 / 1000000;
    else if(select2 == "Mebibit") result = input1 / 1048576;
    else if(select2 == "Gigabit") result = input1 / 1000;
    else if(select2 == "Gibibit") result = input1 / 1.024;
    else if(select2 == "Terabit") result = input1;
    else if(select2 == "Tebibit") result = input1 / 1.024;
    else if(select2 == "Petabit") result = input1 * 1000;
    else if(select2 == "Pebibit") result = input1 * 1024;
    else if(select2 == "Byte") result = input1 / 125000000000;
    else if(select2 == "Kilobyte") result = input1 / 125000000;
    else if(select2 == "Kibibyte") result = input1 / 131072000;
    else if(select2 == "Megabyte") result = input1 / 125000;
    else if(select2 == "Mebibyte") result = input1 / 131072;
    else if(select2 == "Gigabyte") result = input1 / 125;
    else if(select2 == "Gibibyte") result = input1 / 1.024;
    else if(select2 == "Terabyte") result = input1 * 8;
    else if(select2 == "Tebibyte") result = input1 * 8.192;
    else if(select2 == "Petabyte") result = input1 * 8000;
    else if(select2 == "Pebibyte") result = input1 * 8192;
}
//convert into Tebibit
else if(select3 == "Tebibit"){  // Target unit Tebibit per second
    if(select2 == "Bit") result = input1 / 1099511627776;
    else if(select2 == "Kilobit") result = input1 / 1073741824;
    else if(select2 == "Kibibit") result = input1 / 1024;
    else if(select2 == "Megabit") result = input1 / 1048576;
    else if(select2 == "Mebibit") result = input1 / 1024;
    else if(select2 == "Gigabit") result = input1 / 1073.741824;
    else if(select2 == "Gibibit") result = input1 / 1.024;
    else if(select2 == "Terabit") result = input1 / 0.9765625;
    else if(select2 == "Tebibit") result = input1;
    else if(select2 == "Petabit") result = input1 * 1024;
    else if(select2 == "Pebibit") result = input1 * 1024;
    else if(select2 == "Byte") result = input1 / 137438953472;
    else if(select2 == "Kilobyte") result = input1 / 134217728;
    else if(select2 == "Kibibyte") result = input1 / 131072;
    else if(select2 == "Megabyte") result = input1 / 131072;
    else if(select2 == "Mebibyte") result = input1 / 128;
    else if(select2 == "Gigabyte") result = input1 / 128;
    else if(select2 == "Gibibyte") result = input1 / 1.024;
    else if(select2 == "Terabyte") result = input1 / 0.125;
    else if(select2 == "Tebibyte") result = input1;
    else if(select2 == "Petabyte") result = input1 * 8;
    else if(select2 == "Pebibyte") result = input1 * 8.192;
}
//convert into Petabit
else if(select3 == "Petabit"){  // Target unit Petabit per second
    if(select2 == "Bit") result = input1 / 1e15;
    else if(select2 == "Kilobit") result = input1 / 1e12;
    else if(select2 == "Kibibit") result = input1 / 1.125899906842624e12; // 2^50
    else if(select2 == "Megabit") result = input1 / 1e9;
    else if(select2 == "Mebibit") result = input1 / 1.125899906842624e9;
    else if(select2 == "Gigabit") result = input1 / 1e6;
    else if(select2 == "Gibibit") result = input1 / 1.073741824e6;
    else if(select2 == "Terabit") result = input1 / 1000;
    else if(select2 == "Tebibit") result = input1 / 0.909494701772928;
    else if(select2 == "Petabit") result = input1;
    else if(select2 == "Pebibit") result = input1 / 0.8881784197;
    else if(select2 == "Byte") result = input1 / 1.25e14;
    else if(select2 == "Kilobyte") result = input1 / 1.25e11;
    else if(select2 == "Kibibyte") result = input1 / 1.125899906842624e11;
    else if(select2 == "Megabyte") result = input1 / 1.25e8;
    else if(select2 == "Mebibyte") result = input1 / 1.073741824e8;
    else if(select2 == "Gigabyte") result = input1 / 1.25e5;
    else if(select2 == "Gibibyte") result = input1 / 1.073741824e5;
    else if(select2 == "Terabyte") result = input1 / 125;
    else if(select2 == "Tebibyte") result = input1 / 109.9511627776;
    else if(select2 == "Petabyte") result = input1;
    else if(select2 == "Pebibyte") result = input1 / 1.125899906842624;
}
//convert into Pebibit
else if(select3 == "Pebibit"){  // Target unit Pebibit per second
    if(select2 == "Bit") result = input1 / 1.125899906842624e15;   // 2^50
    else if(select2 == "Kilobit") result = input1 / 1.125899906842624e12;
    else if(select2 == "Kibibit") result = input1 / 1.125899906842624e9;
    else if(select2 == "Megabit") result = input1 / 1.125899906842624e6;
    else if(select2 == "Mebibit") result = input1 / 1.125899906842624e3;
    else if(select2 == "Gigabit") result = input1 / 1.125899906842624;
    else if(select2 == "Gibibit") result = input1 / 0.001073741824;  
    else if(select2 == "Terabit") result = input1 / 0.0009765625;
    else if(select2 == "Tebibit") result = input1 / 0.0008881784197;
    else if(select2 == "Petabit") result = input1 / 0.8881784197;
    else if(select2 == "Pebibit") result = input1;
    else if(select2 == "Byte") result = input1 / 1.401298464324817e14;
    else if(select2 == "Kilobyte") result = input1 / 1.401298464324817e11;
    else if(select2 == "Kibibyte") result = input1 / 1.37438953472e11;
    else if(select2 == "Megabyte") result = input1 / 1.401298464324817e8;
    else if(select2 == "Mebibyte") result = input1 / 1.34217728e8;
    else if(select2 == "Gigabyte") result = input1 / 1.401298464324817e5;
    else if(select2 == "Gibibyte") result = input1 / 131072;
    else if(select2 == "Terabyte") result = input1 / 125;
    else if(select2 == "Tebibyte") result = input1 / 109.9511627776;
    else if(select2 == "Petabyte") result = input1 / 1.125899906842624;
}
//convert into Byte
else if(select3 == "Byte"){  // Target unit Byte per second
    if(select2 == "Bit") result = input1 / 8;
    else if(select2 == "Kilobit") result = input1 * 1000 / 8;
    else if(select2 == "Kibibit") result = input1 * 1024 / 8;
    else if(select2 == "Megabit") result = input1 * 1000000 / 8;
    else if(select2 == "Mebibit") result = input1 * 1048576 / 8;
    else if(select2 == "Gigabit") result = input1 * 1000000000 / 8;
    else if(select2 == "Gibibit") result = input1 * 1073741824 / 8;
    else if(select2 == "Terabit") result = input1 * 1000000000000 / 8;
    else if(select2 == "Tebibit") result = input1 * 1099511627776 / 8;
    else if(select2 == "Petabit") result = input1 * 1000000000000000 / 8;
    else if(select2 == "Pebibit") result = input1 * 1125899906842624 / 8;
    else if(select2 == "Byte") result = input1;
    else if(select2 == "Kilobyte") result = input1 * 1000;
    else if(select2 == "Kibibyte") result = input1 * 1024;
    else if(select2 == "Megabyte") result = input1 * 1000000;
    else if(select2 == "Mebibyte") result = input1 * 1048576;
    else if(select2 == "Gigabyte") result = input1 * 1000000000;
    else if(select2 == "Gibibyte") result = input1 * 1073741824;
    else if(select2 == "Terabyte") result = input1 * 1000000000000;
    else if(select2 == "Tebibyte") result = input1 * 1099511627776;
    else if(select2 == "Petabyte") result = input1 * 1000000000000000;
    else if(select2 == "Pebibyte") result = input1 * 1125899906842624;
}
//convert into Kilobyte
else if(select3 == "Kilobyte"){  // Target unit Kilobyte per second
    if(select2 == "Bit") result = input1 / 8 / 1000;
    else if(select2 == "Kilobit") result = input1 / 8;
    else if(select2 == "Kibibit") result = input1 * 1024 / 8 / 1000;
    else if(select2 == "Megabit") result = input1 * 1000 / 8;
    else if(select2 == "Mebibit") result = input1 * 1048576 / 8 / 1000;
    else if(select2 == "Gigabit") result = input1 * 1000000 / 8;
    else if(select2 == "Gibibit") result = input1 * 1073741824 / 8 / 1000;
    else if(select2 == "Terabit") result = input1 * 1000000000 / 8;
    else if(select2 == "Tebibit") result = input1 * 1099511627776 / 8 / 1000;
    else if(select2 == "Petabit") result = input1 * 1000000000000000 / 8;
    else if(select2 == "Pebibit") result = input1 * 1125899906842624 / 8 / 1000;
    else if(select2 == "Byte") result = input1 / 1000;
    else if(select2 == "Kilobyte") result = input1;
    else if(select2 == "Kibibyte") result = input1 * 1024 / 1000;
    else if(select2 == "Megabyte") result = input1 * 1000;
    else if(select2 == "Mebibyte") result = input1 * 1048576 / 1000;
    else if(select2 == "Gigabyte") result = input1 * 1000000;
    else if(select2 == "Gibibyte") result = input1 * 1073741824 / 1000;
    else if(select2 == "Terabyte") result = input1 * 1000000000;
    else if(select2 == "Tebibyte") result = input1 * 1099511627776 / 1000;
    else if(select2 == "Petabyte") result = input1 * 1000000000000;
    else if(select2 == "Pebibyte") result = input1 * 1125899906842624 / 1000;
}
//convert into kibibyte
else if(select3 == "kibibyte"){  // Target unit Kibibyte per second
    if(select2 == "Bit") result = input1 / 1024 / 8;
    else if(select2 == "Kilobit") result = input1 / 1.024 / 8;
    else if(select2 == "Kibibit") result = input1 / 8;
    else if(select2 == "Megabit") result = input1 * 1000 / 1024 / 8;
    else if(select2 == "Mebibit") result = input1 * 1024 / 8;
    else if(select2 == "Gigabit") result = input1 * 1000000 / 1024 / 8;
    else if(select2 == "Gibibit") result = input1 * 1024 * 1024 / 8;
    else if(select2 == "Terabit") result = input1 * 1000000000 / 1024 / 8;
    else if(select2 == "Tebibit") result = input1 * 1024 * 1024 * 1024 / 8;
    else if(select2 == "Petabit") result = input1 * 1000000000000 / 1024 / 8;
    else if(select2 == "Pebibit") result = input1 * 1024 * 1024 * 1024 * 1024 / 8;
    else if(select2 == "Byte") result = input1 / 1024;
    else if(select2 == "Kilobyte") result = input1 * 1000 / 1024;
    else if(select2 == "Kibibyte") result = input1;
    else if(select2 == "Megabyte") result = input1 * 1000 * 1000 / 1024;
    else if(select2 == "Mebibyte") result = input1 * 1024 * 1024 / 1024;
    else if(select2 == "Gigabyte") result = input1 * 1000000 * 1000 / 1024;
    else if(select2 == "Gibibyte") result = input1 * 1024 * 1024 * 1024 / 1024;
    else if(select2 == "Terabyte") result = input1 * 1000000000 * 1000 / 1024;
    else if(select2 == "Tebibyte") result = input1 * 1024 * 1024 * 1024 * 1024 / 1024;
    else if(select2 == "Petabyte") result = input1 * 1000000000000 * 1000 / 1024;
    else if(select2 == "Pebibyte") result = input1 * 1024 * 1024 * 1024 * 1024 * 1024 / 1024;
}
//convert into Megabyte
else if(select3 == "Megabyte"){  // Target unit Megabyte per second
    if(select2 == "Bit") result = input1 / 8 / 1000000;
    else if(select2 == "Kilobit") result = input1 / 8 / 1000;
    else if(select2 == "Kibibit") result = input1 / 8 / 1024;
    else if(select2 == "Megabit") result = input1 / 8;
    else if(select2 == "Mebibit") result = input1 * 1024 / 8 / 1000;
    else if(select2 == "Gigabit") result = input1 * 1000 / 8;
    else if(select2 == "Gibibit") result = input1 * 1024 / 8;
    else if(select2 == "Terabit") result = input1 * 1000000 / 8;
    else if(select2 == "Tebibit") result = input1 * 1024 * 1024 / 8 / 1000;
    else if(select2 == "Petabit") result = input1 * 1000000000 / 8;
    else if(select2 == "Pebibit") result = input1 * 1024 * 1024 * 1024 / 8 / 1000;
    else if(select2 == "Byte") result = input1 / 1000000;
    else if(select2 == "Kilobyte") result = input1 / 1000;
    else if(select2 == "Kibibyte") result = input1 * 1024 / 1000000;
    else if(select2 == "Megabyte") result = input1;
    else if(select2 == "Mebibyte") result = input1 * 1024 / 1000;
    else if(select2 == "Gigabyte") result = input1 * 1000;
    else if(select2 == "Gibibyte") result = input1 * 1024;
    else if(select2 == "Terabyte") result = input1 * 1000000;
    else if(select2 == "Tebibyte") result = input1 * 1024 * 1024;
    else if(select2 == "Petabyte") result = input1 * 1000000000;
    else if(select2 == "Pebibyte") result = input1 * 1024 * 1024 * 1024;
}
//convert into mebibyte
else if(select3 == "mebibyte"){  // Target unit Mebibyte per second
    if(select2 == "Bit") result = input1 / 8 / 1024 / 1024;
    else if(select2 == "Kilobit") result = input1 / 8 / 1024;
    else if(select2 == "Kibibit") result = input1 / 8 / 1024;
    else if(select2 == "Megabit") result = input1 / 8 / 1000 / 1024;
    else if(select2 == "Mebibit") result = input1 / 8;
    else if(select2 == "Gigabit") result = input1 * 1000 / 8 / 1024;
    else if(select2 == "Gibibit") result = input1 / 8 * 1024;
    else if(select2 == "Terabit") result = input1 * 1000000 / 8 / 1024;
    else if(select2 == "Tebibit") result = input1 / 8 * 1024 * 1024;
    else if(select2 == "Petabit") result = input1 * 1000000000 / 8 / 1024;
    else if(select2 == "Pebibit") result = input1 / 8 * 1024 * 1024 * 1024;
    else if(select2 == "Byte") result = input1 / 1024 / 1024;
    else if(select2 == "Kilobyte") result = input1 / 1024;
    else if(select2 == "Kibibyte") result = input1 / 1024;
    else if(select2 == "Megabyte") result = input1 / 1000 / 1024;
    else if(select2 == "Mebibyte") result = input1;
    else if(select2 == "Gigabyte") result = input1 * 1000 / 1024;
    else if(select2 == "Gibibyte") result = input1 * 1024;
    else if(select2 == "Terabyte") result = input1 * 1000000 / 1024;
    else if(select2 == "Tebibyte") result = input1 * 1024 * 1024;
    else if(select2 == "Petabyte") result = input1 * 1000000000 / 1024;
    else if(select2 == "Pebibyte") result = input1 * 1024 * 1024 * 1024;
}
//convert into Gigabyte
else if(select3 == "Gigabyte"){  // Target unit Gigabyte per second
    if(select2 == "Bit") result = input1 / 8 / 1000000000;
    else if(select2 == "Kilobit") result = input1 / 8 / 1000000;
    else if(select2 == "Kibibit") result = input1 * 1024 / 8 / 1000000000;
    else if(select2 == "Megabit") result = input1 / 8 / 1000;
    else if(select2 == "Mebibit") result = input1 * 1024 / 8 / 1000;
    else if(select2 == "Gigabit") result = input1 / 8;
    else if(select2 == "Gibibit") result = input1 * 1024 / 8;
    else if(select2 == "Terabit") result = input1 / 8 * 1000;
    else if(select2 == "Tebibit") result = input1 * 1024 / 8 * 1000;
    else if(select2 == "Petabit") result = input1 / 8 * 1000000;
    else if(select2 == "Pebibit") result = input1 * 1024 / 8 * 1000000;
    else if(select2 == "Byte") result = input1 / 1000000000;
    else if(select2 == "Kilobyte") result = input1 / 1000000;
    else if(select2 == "Kibibyte") result = input1 * 1024 / 1000000000;
    else if(select2 == "Megabyte") result = input1 / 1000;
    else if(select2 == "Mebibyte") result = input1 * 1024 / 1000;
    else if(select2 == "Gigabyte") result = input1;
    else if(select2 == "Gibibyte") result = input1 * 1024;
    else if(select2 == "Terabyte") result = input1 * 1000;
    else if(select2 == "Tebibyte") result = input1 * 1024 * 1000;
    else if(select2 == "Petabyte") result = input1 * 1000000;
    else if(select2 == "Pebibyte") result = input1 * 1024 * 1000000;
}
//convert into Terabyte
else if(select3 == "Terabyte"){  // Target unit Terabyte per second
    if(select2 == "Bit") result = input1 / 8 / 1000000000000;
    else if(select2 == "Kilobit") result = input1 / 8 / 1000000000;
    else if(select2 == "Kibibit") result = input1 * 1024 / 8 / 1000000000000;
    else if(select2 == "Megabit") result = input1 / 8 / 1000000;
    else if(select2 == "Mebibit") result = input1 * 1024 / 8 / 1000000;
    else if(select2 == "Gigabit") result = input1 / 8 / 1000;
    else if(select2 == "Gibibit") result = input1 * 1024 / 8 / 1000;
    else if(select2 == "Terabit") result = input1 / 8;
    else if(select2 == "Tebibit") result = input1 * 1024 / 8;
    else if(select2 == "Petabit") result = input1 / 8 * 1000;
    else if(select2 == "Pebibit") result = input1 * 1024 / 8 * 1000;
    else if(select2 == "Byte") result = input1 / 1000000000000;
    else if(select2 == "Kilobyte") result = input1 / 1000000000;
    else if(select2 == "Kibibyte") result = input1 * 1024 / 1000000000000;
    else if(select2 == "Megabyte") result = input1 / 1000000;
    else if(select2 == "Mebibyte") result = input1 * 1024 / 1000000;
    else if(select2 == "Gigabyte") result = input1 / 1000;
    else if(select2 == "Gibibyte") result = input1 * 1024 / 1000;
    else if(select2 == "Terabyte") result = input1;
    else if(select2 == "Tebibyte") result = input1 * 1024;
    else if(select2 == "Petabyte") result = input1 * 1000;
    else if(select2 == "Pebibyte") result = input1 * 1024 * 1000;
}
//convert into Tebibyte
else if(select3 == "Tebibyte"){  // Target unit Tebibyte per second
    if(select2 == "Bit") result = input1 / 8 / 1024 / 1024 / 1024 / 1024;
    else if(select2 == "Kilobit") result = input1 / 8 / 1024 / 1024 / 1024;
    else if(select2 == "Kibibit") result = input1 / 8 / 1024 / 1024 / 1024;
    else if(select2 == "Megabit") result = input1 / 8 / 1024 / 1024;
    else if(select2 == "Mebibit") result = input1 / 8 / 1024 / 1024;
    else if(select2 == "Gigabit") result = input1 / 8 / 1024;
    else if(select2 == "Gibibit") result = input1 / 8 / 1024;
    else if(select2 == "Terabit") result = input1 / 8;
    else if(select2 == "Tebibit") result = input1 / 8;
    else if(select2 == "Petabit") result = input1 * 1000 / 8;
    else if(select2 == "Pebibit") result = input1 * 1024 / 8;
    else if(select2 == "Byte") result = input1 / 1024 / 1024 / 1024 / 1024;
    else if(select2 == "Kilobyte") result = input1 / 1024 / 1024 / 1024;
    else if(select2 == "Kibibyte") result = input1 / 1024 / 1024 / 1024;
    else if(select2 == "Megabyte") result = input1 / 1024 / 1024;
    else if(select2 == "Mebibyte") result = input1 / 1024 / 1024;
    else if(select2 == "Gigabyte") result = input1 / 1024;
    else if(select2 == "Gibibyte") result = input1 / 1024;
    else if(select2 == "Terabyte") result = input1;
    else if(select2 == "Tebibyte") result = input1;
    else if(select2 == "Petabyte") result = input1 * 1024;
    else if(select2 == "Pebibyte") result = input1 * 1024;
}
//convert into Petabyte
else if(select3 == "Petabyte"){  // Target unit Petabyte
    if(select2 == "Bit") result = input1 / 8 / 1000000000000;
    else if(select2 == "Kilobit") result = input1 / 8 / 1000000000;
    else if(select2 == "Kibibit") result = input1 / 8 / 1024 / 1024 / 1024;
    else if(select2 == "Megabit") result = input1 / 8 / 1000000;
    else if(select2 == "Mebibit") result = input1 / 8 / 1024 / 1024;
    else if(select2 == "Gigabit") result = input1 / 8 / 1000;
    else if(select2 == "Gibibit") result = input1 / 8 / 1024;
    else if(select2 == "Terabit") result = input1 / 8;
    else if(select2 == "Tebibit") result = input1 / 8;
    else if(select2 == "Petabit") result = input1 / 8;
    else if(select2 == "Pebibit") result = input1 / 8 * 1.024;
    else if(select2 == "Byte") result = input1 / 1000000000000;
    else if(select2 == "Kilobyte") result = input1 / 1000000000;
    else if(select2 == "Kibibyte") result = input1 / 1024 / 1024 / 1024;
    else if(select2 == "Megabyte") result = input1 / 1000000;
    else if(select2 == "Mebibyte") result = input1 / 1024 / 1024;
    else if(select2 == "Gigabyte") result = input1 / 1000;
    else if(select2 == "Gibibyte") result = input1 / 1024;
    else if(select2 == "Terabyte") result = input1;
    else if(select2 == "Tebibyte") result = input1 * 1.024;
    else if(select2 == "Petabyte") result = input1;
    else if(select2 == "Pebibyte") result = input1 * 1.024;
}
//convert into Pebibyte
else if(select3 == "Pebibyte"){  // Target unit Pebibyte
    if(select2 == "Bit") result = input1 / (8 * 1024**5);
    else if(select2 == "Kilobit") result = input1 / (8 * 1024**2);
    else if(select2 == "Kibibit") result = input1 / (8 * 1024**4);
    else if(select2 == "Megabit") result = input1 / (8 * 1024**2);
    else if(select2 == "Mebibit") result = input1 / (8 * 1024**3);
    else if(select2 == "Gigabit") result = input1 / (8 * 1024);
    else if(select2 == "Gibibit") result = input1 / (8 * 1024**2);
    else if(select2 == "Terabit") result = input1 / 8;
    else if(select2 == "Tebibit") result = input1 / 8;
    else if(select2 == "Petabit") result = input1 / 8;
    else if(select2 == "Pebibit") result = input1 / 8;
    else if(select2 == "Byte") result = input1 / (1024**5);
    else if(select2 == "Kilobyte") result = input1 / (1024**4);
    else if(select2 == "Kibibyte") result = input1 / (1024**5 / 1024);
    else if(select2 == "Megabyte") result = input1 / (1024**3);
    else if(select2 == "Mebibyte") result = input1 / (1024**4);
    else if(select2 == "Gigabyte") result = input1 / (1024**2);
    else if(select2 == "Gibibyte") result = input1 / (1024**3);
    else if(select2 == "Terabyte") result = input1 / 1024;
    else if(select2 == "Tebibyte") result = input1 / 1024;
    else if(select2 == "Petabyte") result = input1;
    else if(select2 == "Pebibyte") result = input1;
}
}
//------------------ Frequency ------------------
else if(category == "Frequency")
{
select2 = document.getElementById("frequency1").value;
select3 = document.getElementById("frequency2").value;
result = 0;
if(select3 == "Hertz"){  // Target unit Hertz
    if(select2 == "Hertz") result = input1;
    else if(select2 == "kilohertz") result = input1 * 1000;     
    else if(select2 == "Megahertz") result = input1 * 1_000_000;  
    else if(select2 == "Gigahertz") result = input1 * 1_000_000_000; 
}
//convert into kilohertz
else if(select3 == "kilohertz"){   // Target unit Kilohertz (kHz)
    if(select2 == "Hertz")  result = input1 / 1000;              
    else if(select2 == "kilohertz") result = input1;                     
    else if(select2 == "Megahertz") result = input1 * 1000;              
    else if(select2 == "Gigahertz") result = input1 * 1_000_000;         
}
//convert into Megahertz
else if(select3 == "Megahertz"){   // Target unit Megahertz (MHz
    if(select2 == "Hertz") result = input1 / 1_000_000;     
    else if(select2 == "kilohertz") result = input1 / 1000;            
    else if(select2 == "Megahertz") result = input1;                   
    else if(select2 == "Gigahertz") result = input1 * 1000;            
}
//convert into Gigahertz
else if(select3 == "Gigahertz"){   // Target unit Gigahertz (GHz)
    if(select2 == "Hertz") result = input1 / 1_000_000_000;    
    else if(select2 == "kilohertz") result = input1 / 1_000_000;        
    else if(select2 == "Megahertz") result = input1 / 1000;       
    else if(select2 == "Gigahertz") result = input1;                    
}
}
//--------------------Fuel Economy---------------------------
else if(category == "Fuel Economy")
{
select2 = document.getElementById("fuel1").value;
select3 = document.getElementById("fuel2").value;
result = 0;
if(select3 == "Mile per US gallon"){  // Target unit mpg (US)
    if(select2 == "Mile per US gallon") result = input1;
    else if(select2 == "Mile per gallon") result = input1 / 1.20095;
    else if(select2 == "Kilometer per liter") result = input1 * 2.35214583;
    else if(select2 == "Liter per 100 kilometres") result = 235.214583 / input1;
}
//convert into Mile per gallon
else if(select3 == "Mile per gallon"){  // Target unit = UK mpg
if(select2 == "Mile per gallon") result = input1;
else if(select2 == "Mile per US gallon") result = input1 * 1.20095;
else if(select2 == "Kilometer per liter") result = input1 * 2.82480936;
else if(select2 == "Liter per 100 kilometres") result = 282.480936 / input1;
}
//convert into Kilometer per liter
else if(select3 == "Kilometer per liter"){  // Target unit = km/L
    if(select2 == "Kilometer per liter") result = input1;
    else if(select2 == "Mile per US gallon") result = input1 * 0.425143707;
    else if(select2 == "Mile per gallon")  result = input1 * 0.35400619;
    else if(select2 == "Liter per 100 kilometres") result = 100 / input1;
}
//convert into lister per 100 kilometres
else if(select3 == "Liter per 100 kilometres"){  // Target unit = L/100 km
    if(select2 == "Liter per 100 kilometres") result = input1;
    else if(select2 == "Kilometer per liter") result = 100 / input1;
    else if(select2 == "Mile per US gallon") result = 235.214583 / input1;
    else if(select2 == "Mile per gallon") result = 282.480936 / input1;
}
}
//-----------------Mass---------------------------
else if(category == "Mass")
{
select2 = document.getElementById("mass1").value;
select3 = document.getElementById("mass2").value;
result = 0;
if(select3 == "Tonna"){  // Target unit = Metric Tonne
    if(select2 == "Tonne")  result = input1;
    else if(select2 == "Kilogram")  result = input1 / 1000;
    else if(select2 == "Gram") result = input1 / 1_000_000;
    else if(select2 == "Milligram")  result = input1 / 1_000_000_000;
    else if(select2 == "Microgram") result = input1 / 1_000_000_000_000;
    else if(select2 == "Imperial ton") result = input1 * 1.0160469088; 
    else if(select2 == "US ton") result = input1 * 0.90718474;  
    else if(select2 == "Stone") result = input1 * 0.00635029318;
    else if(select2 == "Pound") result = input1 * 0.00045359237;
    else if(select2 == "Ounce") result = input1 * 0.000028349523125;
}
//convert into kilogram
else if(select3 == "Kilogram"){  // Target unit = Kilogram
    if(select2 == "Kilogram") result = input1;
    else if(select2 == "Tonne") result = input1 * 1000;
    else if(select2 == "Gram") result = input1 / 1000;
    else if(select2 == "Milligram") result = input1 / 1_000_000;
    else if(select2 == "Microgram") result = input1 / 1_000_000_000;
    else if(select2 == "Imperial ton") result = input1 * 1016.0469088;
    else if(select2 == "US ton") result = input1 * 907.18474;
    else if(select2 == "Stone") result = input1 * 6.35029318;
    else if(select2 == "Pound") result = input1 * 2.2046226218;
    else if(select2 == "Ounce") result = input1 * 35.27396195;
}
//convert into gram
else if(select3 == "Gram"){  // Target unit = Gram
    if(select2 == "Gram") result = input1;
    else if(select2 == "Tonne") result = input1 * 1_000_000;
    else if(select2 == "Kilogram") result = input1 * 1000;
    else if(select2 == "Milligram") result = input1 / 1000;
    else if(select2 == "Microgram") result = input1 / 1_000_000;
    else if(select2 == "Imperial ton") result = input1 * 1_016_046.9088;
    else if(select2 == "US ton") result = input1 * 907_184.74;
    else if(select2 == "Stone") result = input1 * 6_350.29318;
    else if(select2 == "Pound") result = input1 * 453.59237;
    else if(select2 == "Ounce") result = input1 * 28.349523125;
}
//convert into Milligram
else if(select3 == "Milligram"){  // Target unit = Milligram
    if(select2 == "Milligram") result = input1;
    else if(select2 == "Tonne") result = input1 * 1_000_000_000;
    else if(select2 == "Kilogram") result = input1 * 1_000_000;
    else if(select2 == "Gram") result = input1 * 1000;
    else if(select2 == "Microgram") result = input1 / 1000;
    else if(select2 == "Imperial ton") result = input1 * 1_016_046_908.8;
    else if(select2 == "US ton") result = input1 * 907_184_740;
    else if(select2 == "Stone") result = input1 * 6_350_293.18;
    else if(select2 == "Pound") result = input1 * 453_592.37;
    else if(select2 == "Ounce") result = input1 * 28_349.523125;
}
//convert into Microgram
else if(select3 == "Microgram"){  // Target unit = Microgram
    if(select2 == "Tonne") result = input1 * 1_000_000_000;
    else if(select2 == "Kilogram") result = input1 * 1_000_000_000;
    else if(select2 == "Gram") result = input1 * 1_000_000;
    else if(select2 == "Milligram") result = input1 * 1000;
    else if(select2 == "Microgram") result = input1;
    else if(select2 == "Imperial ton") result = input1 * 1_016_046_908_800;
    else if(select2 == "US ton") result = input1 * 907_184_740_000;
    else if(select2 == "Stone") result = input1 * 6_350_293_180;
    else if(select2 == "Pound") result = input1 * 453_592_370;
    else if(select2 == "Ounce") result = input1 * 28_349_523.125;
}
//convert into Imperial ton
else if(select3 == "Imperial ton"){  // Target unit = Imperial Ton
    if(select2 == "Tonne") result = input1 / 1.0160469088;
    else if(select2 == "Kilogram") result = input1 / 1_016.0469088;
    else if(select2 == "Gram") result = input1 / 1_016_046.9088;
    else if(select2 == "Milligram") result = input1 / 1_016_046_908.8;
    else if(select2 == "Microgram") result = input1 / 1_016_046_908_800;
    else if(select2 == "Imperial ton") result = input1;
    else if(select2 == "US ton") result = input1 * 1.12; // approx
    else if(select2 == "Stone") result = input1 * 160;
    else if(select2 == "Pound") result = input1 * 2_240;
    else if(select2 == "Ounce") result = input1 * 35_840;
}
//convert into US ton
else if(select3 == "US ton"){  // Target unit = US Ton
    if(select2 == "Tonne") result = input1 / 0.90718474;
    else if(select2 == "Kilogram") result = input1 / 907.18474;
    else if(select2 == "Gram") result = input1 / 907_184.74;
    else if(select2 == "Milligram") result = input1 / 907_184_740;
    else if(select2 == "Microgram") result = input1 / 907_184_740_000;
    else if(select2 == "Imperial ton") result = input1 / 1.12;  // approx
    else if(select2 == "US ton") result = input1;
    else if(select2 == "Stone") result = input1 * 14;
    else if(select2 == "Pound") result = input1 * 2_000;
    else if(select2 == "Ounce") result = input1 * 32_000;
}
//convert into Stone
else if(select3 == "Stone"){  // Target unit = Stone
    if(select2 == "Tonne") result = input1 * 157.473;
    else if(select2 == "Kilogram") result = input1 / 6.35029318;
    else if(select2 == "Gram") result = input1 / 6350.29318;
    else if(select2 == "Milligram") result = input1 / 6_350_293.18;
    else if(select2 == "Microgram") result = input1 / 6_350_293_180;
    else if(select2 == "Imperial ton") result = input1 * 0.0714286; // approx
    else if(select2 == "US ton") result = input1 * 0.0714286;       // approx
    else if(select2 == "Stone") result = input1;
    else if(select2 == "Pound") result = input1 * 14;
    else if(select2 == "Ounce") result = input1 * 224;
}
//convert into Pound
else if(select3 == "Pound"){  // Target unit = Pound
    if(select2 == "Tonne") result = input1 * 2204.62262;
    else if(select2 == "Kilogram") result = input1 * 2.20462262;
    else if(select2 == "Gram") result = input1 / 453.59237;
    else if(select2 == "Milligram") result = input1 / 453_592.37;
    else if(select2 == "Microgram") result = input1 / 453_592_370;
    else if(select2 == "Imperial ton") result = input1 * 2240;
    else if(select2 == "US ton") result = input1 * 2000;
    else if(select2 == "Stone") result = input1 / 14;
    else if(select2 == "Pound") result = input1;
    else if(select2 == "Ounce") result = input1 * 16;
}
//convert into Ounce
else if(select3 == "Ounce"){  // Target unit = Ounce
    if(select2 == "Tonne") result = input1 * 35_273.96195;
    else if(select2 == "Kilogram") result = input1 * 35.27396195;
    else if(select2 == "Gram") result = input1 / 28.349523125;
    else if(select2 == "Milligram") result = input1 / 28_349.523125;
    else if(select2 == "Microgram") result = input1 / 28_349_523.125;
    else if(select2 == "Imperial ton") result = input1 * 35_840;
    else if(select2 == "US ton") result = input1 * 32_000;
    else if(select2 == "Stone") result = input1 / 224;
    else if(select2 == "Pound") result = input1 / 16;
    else if(select2 == "Ounce") result = input1;
}
}
//--------------------------Length---------------------------
else if(category == "Length")
{
select2 = document.getElementById("Length1").value;
select3 = document.getElementById("Length2").value;
result = 0;
if(select3 == "Kilometre"){  // Target unit = Kilometre
    if(select2 == "Kilometre") result = input1;
    else if(select2 == "Metre") result = input1 / 1000;            
    else if(select2 == "Centimetre") result = input1 / 100_000;     
    else if(select2 == "Millimetre") result = input1 / 1_000_000;   
    else if(select2 == "Micrometre") result = input1 / 1_000_000_000;
    else if(select2 == "Nanometre") result = input1 / 1_000_000_000_000;
    else if(select2 == "Mile") result = input1 * 1.609344;           
    else if(select2 == "Yard") result = input1 * 0.0009144;         
    else if(select2 == "Foot") result = input1 * 0.0003048;         
    else if(select2 == "Inch") result = input1 * 0.0000254;          
    else if(select2 == "Nautical Mile") result = input1 * 1.852;     
}
//convert into metre
else if(select3 == "Metre"){  // Target unit = Metre
    if(select2 == "Kilometre") result = input1 * 1000;          
    else if(select2 == "Metre") result = input1;               
    else if(select2 == "Centimetre") result = input1 / 100;     
    else if(select2 == "Millimetre") result = input1 / 1000;    
    else if(select2 == "Micrometre") result = input1 / 1_000_000;
    else if(select2 == "Nanometre") result = input1 / 1_000_000_000;
    else if(select2 == "Mile") result = input1 * 1609.344;        
    else if(select2 == "Yard") result = input1 * 0.9144;        
    else if(select2 == "Foot") result = input1 * 0.3048;        
    else if(select2 == "Inch") result = input1 * 0.0254;        
    else if(select2 == "Nautical Mile") result = input1 * 1852;  
}
//convert into centimetre
else if(select3 == "Centimetre"){  // Target unit = Centimetre
    if(select2 == "Kilometre") result = input1 * 100000;        
    else if(select2 == "Metre") result = input1 * 100;         
    else if(select2 == "Centimetre") result = input1;           
    else if(select2 == "Millimetre") result = input1 / 10;      
    else if(select2 == "Micrometre") result = input1 / 10_000;  
    else if(select2 == "Nanometre") result = input1 / 10_000_000;
    else if(select2 == "Mile") result = input1 * 160934.4;       
    else if(select2 == "Yard") result = input1 * 91.44;         
    else if(select2 == "Foot") result = input1 * 30.48;         
    else if(select2 == "Inch") result = input1 * 2.54;          
    else if(select2 == "Nautical Mile") result = input1 * 185200; 
}
//convert into Millimetre
else if(select3 == "Millimetre"){  // Target unit = Millimetre
    if(select2 == "Kilometre") result = input1 * 1_000_000;    
    else if(select2 == "Metre") result = input1 * 1000;       
    else if(select2 == "Centimetre") result = input1 * 10;      
    else if(select2 == "Millimetre") result = input1;           
    else if(select2 == "Micrometre") result = input1 / 1000;    
    else if(select2 == "Nanometre") result = input1 / 1_000_000;
    else if(select2 == "Mile") result = input1 * 1_609_344;       
    else if(select2 == "Yard") result = input1 * 914.4;         
    else if(select2 == "Foot") result = input1 * 304.8;         
    else if(select2 == "Inch") result = input1 * 25.4;          
    else if(select2 == "Nautical Mile") result = input1 * 185_200;
}
//convert into Micrometre
else if(select3 == "Micrometre"){  // Target unit = Micrometre
    if(select2 == "Kilometre") result = input1 * 1_000_000_000;    
    else if(select2 == "Metre") result = input1 * 1_000_000;      
    else if(select2 == "Centimetre") result = input1 * 10_000;     
    else if(select2 == "Millimetre") result = input1 * 1_000;      
    else if(select2 == "Micrometre") result = input1;              
    else if(select2 == "Nanometre") result = input1 / 1_000;       
    else if(select2 == "Mile") result = input1 * 1_609_344_000;      
    else if(select2 == "Yard") result = input1 * 914_400;          
    else if(select2 == "Foot") result = input1 * 304_800;          
    else if(select2 == "Inch") result = input1 * 25_400;           
    else if(select2 == "Nautical Mile") result = input1 * 185_200_000;
}
//convert into Nanometre
else if(select3 == "Nanometre"){  // Target unit = Nanometre
    if(select2 == "Kilometre") result = input1 * 1_000_000_000_000;
    else if(select2 == "Metre") result = input1 * 1_000_000_000;  
    else if(select2 == "Centimetre") result = input1 * 10_000_000;  
    else if(select2 == "Millimetre") result = input1 * 1_000_000;   
    else if(select2 == "Micrometre") result = input1 * 1_000;       
    else if(select2 == "Nanometre") result = input1;                
    else if(select2 == "Mile") result = input1 * 1_609_344_000_000;   
    else if(select2 == "Yard") result = input1 * 914_400_000;       
    else if(select2 == "Foot") result = input1 * 304_800_000;       
    else if(select2 == "Inch") result = input1 * 25_400_000;        
    else if(select2 == "Nautical Mile") result = input1 * 185_200_000_000;
}
//convert into Mile
else if(select3 == "Mile"){  // Target unit = Mile
    if(select2 == "Kilometre") result = input1 / 1.609344;     
    else if(select2 == "Metre") result = input1 / 1_609.344;    
    else if(select2 == "Centimetre") result = input1 / 160_934.4;  
    else if(select2 == "Millimetre") result = input1 / 1_609_344;   
    else if(select2 == "Micrometre") result = input1 / 1_609_344_000; 
    else if(select2 == "Nanometre") result = input1 / 1_609_344_000_000;
    else if(select2 == "Mile") result = input1;                   
    else if(select2 == "Yard") result = input1 / 1_760;        
    else if(select2 == "Foot") result = input1 / 5_280;        
    else if(select2 == "Inch") result = input1 / 63_360;       
    else if(select2 == "Nautical Mile") result = input1 * 1.15078;
}
//convert into Yard
else if(select3 == "Yard"){  // Target unit = Yard
    if(select2 == "Kilometre") result = input1 * 1093.6133
    else if(select2 == "Metre") result = input1 * 1.0936133
    else if(select2 == "Centimetre") result = input1 /91.44 * 100;
    else if(select2 == "Millimetre") result = input1 / 914.4 * 1000; 
    else if(select2 == "Micrometre") result = input1 / 914_400 * 1_000_000; 
    else if(select2 == "Nanometre") result = input1 / 914_400_000 * 1_000_000_000; 
    else if(select2 == "Mile") result = input1 * 1760;             
    else if(select2 == "Yard") result = input1;                    
    else if(select2 == "Foot") result = input1 / 3;              
    else if(select2 == "Inch") result = input1 / 36;             
    else if(select2 == "Nautical Mile") result = input1 * 2025.37;
}
//convert into Foot
else if(select3 == "Foot"){  // Target unit = Foot
    if(select2 == "Kilometre") result = input1 * 3280.8399;        
    else if(select2 == "Metre") result = input1 * 3.2808399;      
    else if(select2 == "Centimetre") result = input1 / 30.48 * 100; 
    else if(select2 == "Millimetre") result = input1 / 304.8 * 1000; 
    else if(select2 == "Micrometre") result = input1 / 304_800 * 1_000_000; 
    else if(select2 == "Nanometre") result = input1 / 304_800_000 * 1_000_000_000; 
    else if(select2 == "Mile") result = input1 * 5280;             
    else if(select2 == "Yard") result = input1 * 3;                 
    else if(select2 == "Foot") result = input1;                     
    else if(select2 == "Inch") result = input1 / 12;                
    else if(select2 == "Nautical Mile") result = input1 * 6076.115; 
}
//convert into inch
else if(select3 == "Inch"){  // Target unit = Inch
    if(select2 == "Kilometre") result = input1 * 39370.0787;       
    else if(select2 == "Metre") result = input1 * 39.3700787;     
    else if(select2 == "Centimetre") result = input1 * 0.393700787; 
    else if(select2 == "Millimetre") result = input1 * 0.0393700787; 
    else if(select2 == "Micrometre") result = input1 * 0.0000393700787; 
    else if(select2 == "Nanometre") result = input1 * 0.0000000393700787; 
    else if(select2 == "Mile") result = input1 * 63360;             
    else if(select2 == "Yard") result = input1 * 36;               
    else if(select2 == "Foot") result = input1 * 12;               
    else if(select2 == "Inch") result = input1;                    
    else if(select2 == "Nautical Mile") result = input1 * 72913.386;
}
//convert into Nautical Mile
else if(select3 == "Nautical Mile"){  // Target unit = Nautical Mile
    if(select2 == "Kilometre") result = input1 / 1.852;      
    else if(select2 == "Metre") result = input1 / 1852;     
    else if(select2 == "Centimetre") result = input1 / 185200;
    else if(select2 == "Millimetre") result = input1 / 1_852_000;
    else if(select2 == "Micrometre") result = input1 / 1_852_000_000;
    else if(select2 == "Nanometre") result = input1 / 1_852_000_000_000;
    else if(select2 == "Mile") result = input1 * 0.868976;     
    else if(select2 == "Yard") result = input1 / 2025.372;    
    else if(select2 == "Foot") result = input1 / 6076.115;    
    else if(select2 == "Inch") result = input1 / 72913.386;   
    else if(select2 == "Nautical Mile") result = input1;       
}
}
//-----------------------------Plane Angle------------------------------
else if(category == "Plane Angle")
{
select2 = document.getElementById("plane1").value;
select3 = document.getElementById("plane2").value;
result = 0;
if(select3 == "Arcsecond"){  // Target unit = Arcsecond
    if(select2 == "Arcsecond") result = input1;                     
    else if(select2 == "Degree") result = input1 * 3600;            
    else if(select2 == "Gradian") result = input1 * 3240;          
    else if(select2 == "Milliradian") result = input1 * 206.264806;
    else if(select2 == "Minute of arc") result = input1 * 60;       
    else if(select2 == "Radian") result = input1 * 206264.806;   
}
//convert into Degree
else if(select3 == "Degree"){  // Target unit = Degree
    if(select2 == "Degree") result = input1;                      
    else if(select2 == "Arcsecond") result = input1 / 3600;       
    else if(select2 == "Gradian") result = input1 * 0.9;        
    else if(select2 == "Milliradian") result = input1 * 0.0572958;
    else if(select2 == "Minute of arc") result = input1 / 60;     
    else if(select2 == "Radian") result = input1 * 57.2957795; 
}
//convert into Gradian
else if(select3 == "Gradian"){  // Target unit = Gradian
    if(select2 == "Gradian") result = input1;                      
    else if(select2 == "Degree") result = input1 * 10/9;             
    else if(select2 == "Arcsecond") result = input1 / 3600 * 10/9;   
    else if(select2 == "Milliradian") result = input1 * 0.063662;  
    else if(select2 == "Minute of arc") result = input1 / 60 * 10/9; 
    else if(select2 == "Radian") result = input1 * 200/Math.PI;   
}
//convert into Milliradian
else if(select3 == "Milliradian"){  // Target unit = Milliradian
    if(select2 == "Milliradian") result = input1;                       
    else if(select2 == "Degree") result = input1 * (1000 * Math.PI / 180);  
    else if(select2 == "Arcsecond") result = input1 * (Math.PI / (180 * 3600)) * 1000; 
    else if(select2 == "Gradian") result = input1 * (Math.PI / 200) * 1000; 
    else if(select2 == "Minute of arc") result = input1 * (Math.PI / (180 * 60)) * 1000; 
    else if(select2 == "Radian") result = input1 * 1000;                  
}
//convert into Minute of arc
else if(select3 == "Minute of arc"){  // Target unit = arcmin
    if(select2 == "Minute of Arc") result = input1;                        
    else if(select2 == "Degree") result = input1 * 60;                     
    else if(select2 == "Arcsecond") result = input1 / 60;                  
    else if(select2 == "Gradian") result = input1 * 0.6;                   
    else if(select2 == "Milliradian") result = input1 * (1/0.0572958 / 1000); 
    else if(select2 == "Radian") result = input1 * (180/Math.PI * 60);     
}
//convert into Redian
else if(select3 == "Redian"){  // Target unit = radian
    if(select2 == "Radian") result = input1;                           
    else if(select2 == "Degree") result = input1 * (Math.PI / 180);       
    else if(select2 == "Arcsecond") result = input1 * (Math.PI / 648000); 
    else if(select2 == "Minute of Arc") result = input1 * (Math.PI / 10800);  
    else if(select2 == "Gradian") result = input1 * (Math.PI / 200);     
    else if(select2 == "Milliradian") result = input1 / 1000;            
}
}
//---------------------------Pressure------------------------------------
else if(category == "Pressure")
{
select2 = document.getElementById("pressure1").value;
select3 = document.getElementById("pressure2").value;
result = 0;
if(select3 == "Bar"){  // Target unit = Bar
    if(select2 == "Bar") result = input1;                               
    else if(select2 == "Pascal") result = input1 / 100000
    else if(select2 == "Pound per square inch") result = input1 / 14.5038;
    else if(select2 == "Standard atmosphere") result = input1 / 0.986923; 
    else if(select2 == "Torr") result = input1 / 750.062;                 
}
//convert into pascal
else if(select3 == "Pascal"){  // Target unit = Pascal
    if(select2 == "Pascal") result = input1;                   
    else if(select2 == "Bar") result = input1 * 100000;          
    else if(select2 == "Pound per square inch") result = input1 * 6894.76;
    else if(select2 == "Standard atmosphere") result = input1 * 101325;   
    else if(select2 == "Torr") result = input1 * 133.322;        
}
//convert into Pound per square inch
else if(select3 == "Pound per square inch"){  // Target unit = psi
    if(select2 == "Pound per square inch") result = input1;                 
    else if(select2 == "Pascal") result = input1 / 6894.76;                
    else if(select2 == "Bar") result = input1 * 14.5038;                    
    else if(select2 == "Standard atmosphere") result = input1 * 14.6959;   
    else if(select2 == "Torr") result = input1 / 51.7149;                    
}
//convert into Standard atmosphere
else if(select3 == "standard atmosphere"){  // Target unit = atm
    if(select2 == "Standard atmosphere") result = input1;                 
    else if(select2 == "Pascal") result = input1 / 101325;                
    else if(select2 == "Bar") result = input1 / 1.01325;                    
    else if(select2 == "Pound per square inch") result = input1 / 14.6959;  
    else if(select2 == "Torr") result = input1 / 760;                        
}
//convert into Torr
else if(select3 == "Torr"){  // Target unit = Torr
    if(select2 == "Torr") result = input1;                    
    else if(select2 == "Pascal") result = input1 / 133.322; 
    else if(select2 == "Bar") result = input1 * 750.062;      
    else if(select2 == "Pound per square inch") result = input1 * 51.715;
    else if(select2 == "Standard atmosphere") result = input1 * 760;    
}
}
//-----------------------------Speed-------------------------
else if(category == "Speed")
{
select2 = document.getElementById("speed1").value;
select3 = document.getElementById("speed2").value;
result = 0;
if(select3 == "Mile per hour"){  // Target unit = Mile per hour
    if(select2 == "Mile per hour") result = input1;                     
    else if(select2 == "foot per second") result = input1 * 0.681818;    
    else if(select2 == "metre per second") result = input1 * 2.23694; 
    else if(select2 == "kilometre per hour") result = input1 * 0.621371; 
    else if(select2 == "Kont") result = input1 * 1.15078;               
}
//convert into foot per second
else if(select3 == "foot per second"){  // Target unit = Foot per second
    if(select2 == "Mile per hour") result = input1 * 1.46667;      
    else if(select2 == "foot per second") result = input1;         
    else if(select2 == "metre per second") result = input1 * 3.28084; 
    else if(select2 == "kilometre per hour") result = input1 * 0.911344; 
    else if(select2 == "Kont") result = input1 * 1.68781;           
}
//convert into metre per second
else if(select3 == "metre per second"){  // Target unit = Metre per second
    if(select2 == "Mile per hour") result = input1 * 0.44704;       
    else if(select2 == "foot per second") result = input1 * 0.3048;  
    else if(select2 == "metre per second") result = input1;         
    else if(select2 == "kilometre per hour") result = input1 / 3.6; 
    else if(select2 == "Kont") result = input1 * 0.514444;           
}
//convert into kilometre per hour
else if(select3 == "kilometre per hour"){  // Target unit 
    if(select2 == "Mile per hour") result = input1 * 1.609344;     
    else if(select2 == "foot per second") result = input1 * 1.09728; 
    else if(select2 == "metre per second") result = input1 * 3.6;   
    else if(select2 == "kilometre per hour") result = input1;        
    else if(select2 == "Kont") result = input1 * 1.852;             
}
//convert into Knot
else if(select3 == "Kont"){  // Target unit = Knot
    if(select2 == "Mile per hour") result = input1 / 1.150779;    
    else if(select2 == "foot per second") result = input1 / 1.68781; 
    else if(select2 == "metre per second") result = input1 * 1.94384; 
    else if(select2 == "kilometre per hour") result = input1 / 1.852; 
    else if(select2 == "Kont") result = input1;                    
}
}
//----------------------Temperature-----------------------
else if(category == "Temperature")
{
select2 = document.getElementById("temperature1").value;
select3 = document.getElementById("temperature2").value;
result = 0;
 if(select3 == "Degree Celsius"){  // Target unit = °C
    if(select2 == "Degree Celsius") result = input1;                                
    else if(select2 == "Fahrenheit") result = (input1 - 32) * (5/9);                 
    else if(select2 == "Kelvin") result = input1 - 273.15;                        
}
//convert into Fahrenheit
else if(select3 == "Fahrenheit"){  // Target unit = °F
    if(select2 == "Fahrenheit") result = input1;                            
    else if(select2 == "Degree Celsius") result = (input1 * 9/5) + 32;                 
    else if(select2 == "Kelvin") result = (input1 - 273.15) * 9/5 + 32;       
}
//convert into kelvin
else if(select3 == "Kelvin"){  // Target unit = Kelvin
    if(select2 == "Kelvin") result = input1;                                    
    else if(select2 == "Degree Celsius") result = input1 + 273.15;                             
    else if(select2 == "Fahrenheit") result = (input1 - 32) * 5/9 + 273.15;                
}
}
document.getElementById("second_in").value = result;
}

