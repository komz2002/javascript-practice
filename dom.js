function same() {
    // Get the values from the input fields
    let firstValue = document.getElementById("first").value;
    let secondValue = document.getElementById("second").value;
    
    // Check if the values are the same
    if (firstValue === secondValue) {
        alert("The values are the same.");
    } else {
        alert("The values are different.");
    }
 }
   
