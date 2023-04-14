
const getResult = () => {

    // Function For Total Marks & Obtain Marks

    let first_fullmarks = document.getElementById('1st').value;
    let second_fullmarks = document.getElementById('2nd').value;
    let third_fullmarks = document.getElementById('3rd').value;
    let four_fullmarks = document.getElementById('4th').value;
    let fifth_fullmarks = document.getElementById('5th').value;
    let sixth_fullmarks = document.getElementById('6th').value;

    let first_obmarks = document.getElementById('1st-2').value;
    let second_obmarks = document.getElementById('2nd-2').value;
    let third_obmarks = document.getElementById('3rd-2').value;
    let four_obmarks = document.getElementById('4th-2').value;
    let fifth_obmarks = document.getElementById('5th-2').value;
    let sixth_obmarks = document.getElementById('6th-2').value;

    let grade = "";
    let pass = true;

    let total = parseInt(first_fullmarks) + parseInt(second_fullmarks) + parseInt(third_fullmarks) + parseInt(four_fullmarks) + parseInt(fifth_fullmarks) + parseInt(sixth_fullmarks);

    let obtain = parseFloat(first_obmarks) + parseFloat(second_obmarks) + parseFloat(third_obmarks) + parseFloat(four_obmarks) + parseFloat(fifth_obmarks) + parseFloat(sixth_obmarks);

    let percentage = (obtain / total) * 100;

       // If Loop To Check Student Pass Or Not

    if ((percentage < 40) || (parseFloat(first_obmarks) < 40) || (parseFloat(second_obmarks) < 40) || (parseFloat(third_obmarks) < 40) || (parseFloat(four_obmarks) < 40) || (parseFloat(fifth_obmarks) < 40) || (parseFloat(sixth_obmarks) < 40)) {
        pass = false; // if any condition fails, set pass flag to false
    }


    // If Else Loop For Percentage

    if ((percentage >= 80) && (percentage <= 100)) {
        grade = 'A';
    } else if ((percentage >= 60) && (percentage <= 80)) {
        grade = 'B';
    } else if ((percentage >= 40) && (percentage <= 60)) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    if (first_fullmarks === "" || second_fullmarks === "" || third_fullmarks === "" || four_fullmarks === "" || fifth_fullmarks === "" || sixth_fullmarks === "" || first_obmarks === "" || second_obmarks === "" || third_obmarks === "" || four_obmarks === "" || fifth_obmarks === "" || sixth_obmarks === "") {
        document.getElementById("showcase-1").innerHTML = "<h1>Something Went Wrong 🙄</h1>";
        document.getElementById('showcase-2').innerHTML = `<h3><strong style="color:red">Please Check All Field is Filled</strong></h3>`;
        return;
    }


    // If Else Loop To Show Pass Or Fail

    if (pass) {
        document.getElementById("showcase-1").innerHTML = "<h2>Good News You Are Pass 🥳</h2>"
        document.getElementById("showcase-2").innerHTML = `Out Of <strong style="color:green">${total}</strong> You Obtain <strong style="color:green;"> ${obtain}</strong> Getting Percentage <strong style="color:green">${percentage}% </strong>. Your Grade is <strong style="color:green;"> ${grade}</strong>`
    } else{
        document.getElementById("showcase-1").innerHTML = "<h2>Bad News You Are Fail 😰</h2>"
        document.getElementById('showcase-2').innerHTML = `Out Of <strong style="color:blue">${total}</strong> You Obtain <strong style="color:red;"> ${obtain}</strong> Getting Percentage <strong style="color:red">${percentage}% </strong>. Your Grade is <strong style="color:red;"> ${grade}</strong>`
    } 

}


// Function To Clear 

function clearResult() {
    document.getElementById("1st").value = "";
    document.getElementById("2nd").value = "";
    document.getElementById("3rd").value = "";
    document.getElementById("4th").value = "";
    document.getElementById("5th").value = "";
    document.getElementById("6th").value = "";
    document.getElementById("1st-2").value = "";
    document.getElementById("2nd-2").value = "";
    document.getElementById("3rd-2").value = "";
    document.getElementById("4th-2").value = "";
    document.getElementById("5th-2").value = "";
    document.getElementById("6th-2").value = "";
    document.getElementById("showcase-1").innerHTML = "";
    document.getElementById('showcase-2').innerHTML = "";
}
