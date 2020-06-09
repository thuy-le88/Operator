function tinhdientich(){
    inputWidth = prompt("Enter the width")
    inputHeight = prompt("Enter the height")
    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);
    let area = width * height;
    document.write("The width: " + '<br>');
    document.write(width + '<br>');
    document.write("The height is: " + '<br>');
    document.write(height + '<br>');
    document.write("The area is: " + area);
}