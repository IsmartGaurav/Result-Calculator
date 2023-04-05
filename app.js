let result = document.getElementById("1st");
// let results = document.getElementsByClassName("myInput")

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

    let totalmarks = parseInt(first_fullmarks) + parseInt(second_fullmarks) + parseInt(third_fullmarks) + parseInt(four_fullmarks) + parseInt(fifth_fullmarks) + parseInt(sixth_fullmarks);

    let obtainedmarks = parseFloat(first_obmarks) + parseFloat(second_obmarks) + parseFloat(third_obmarks) + parseFloat(four_obmarks) + parseFloat(fifth_obmarks) + parseFloat(sixth_obmarks);

    let Percenatge = (obtainedmarks/totalmarks) * 100;

    // If Else Loop For Percentage

    

    if ((Percenatge >= 80) && (Percenatge <= 100)) {
        grade = 'A';
    } else if ((Percenatge >= 60) && (Percenatge <= 80)) {
        grade = 'B';
    } else if ((Percenatge >= 40) && (Percenatge <= 60)) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    // If Else Loop To Show Pass Or Fail

    if ((Percenatge >= 40)&&(Percenatge<=100)) {
        document.getElementById("showcase-1").innerHTML = "<h2> Good News Your Are Pass 🥳</h2>"
    } else if((Percenatge<=40)&&(Percenatge>=0))
        document.getElementById("showcase-1").innerHTML = "<h2>Bad Bews You Are Fail 😰</h2>"
    else {
        document.getElementById('showcase-2').innerHTML = "<h2>Something Went Wrong 💀</h2>"
    }

}



function clearResult() {
    result.value = "";
  }

