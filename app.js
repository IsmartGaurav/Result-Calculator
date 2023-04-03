const getResult = () =>{
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

    let totalmarks = parseInt(first_fullmarks)+parseInt(second_fullmarks)+parseInt(third_fullmarks)+parseInt(four_fullmarks)+parseInt(fifth_fullmarks)+parseInt(sixth_fullmarks);
    
    let obtainedmarks = parseFloat(first_obmarks)+parseFloat(second_obmarks)+parseFloat(third_obmarks)+parseFloat(four_obmarks)+parseFloat(fifth_obmarks)+parseFloat(sixth_obmarks);

    let Percenatge = (totalmarks/obtainedmarks)*100;

    let grade = "";

    if((Percenatge>=80)&&(Percenatge<=100)){
        grade = 'A';
    } else if((Percenatge>=60)&&(Percenatge<=80)){
        grade = 'B';
    } else if((Percenatge>=40)&&(Percenatge<=60)){
        grade = 'C';
    } else {
        grade = 'F';
    }

}