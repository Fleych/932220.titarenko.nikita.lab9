function input_number(number) {
    if (output_1.textContent == "0") {
        output_1.textContent = number;
    }
    else output_1.textContent += number;
}

function input_operation(operation) {
    if (output_1.textContent == "") {
        output_2.textContent = output_2.textContent.slice(0, -2);
    }
    
    output_2.textContent += output_1.textContent;
    output_1.textContent = "";
    output_2.textContent += " " + operation + " ";
}

function input_dot() {
    if (!output_1.textContent.includes(".") && output_1.textContent != "") {
        output_1.textContent += ".";
    }
}

function clear_output() {
    output_1.textContent = "0";
    output_2.textContent = "";
}

function backspace() {
    if (output_1.textContent == "") {
        output_2.textContent = output_2.textContent.slice(0, -3);
        for (i = output_2.textContent.slice(-1); i != " " && output_2.textContent != ""; i = output_2.textContent.slice(-1)) {
            output_1.textContent = i + output_1.textContent;
            output_2.textContent = output_2.textContent.slice(0, -1);
        }
    }
    else {
        output_1.textContent = output_1.textContent.slice(0, -1);
    }
    if (output_1.textContent == "" && output_2.textContent == "") clear_output();
}

function equal() {
    output_1.textContent = eval(output_2.textContent + output_1.textContent);
    output_2.textContent = "";
}