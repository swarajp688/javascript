function calcy() {
    const maths=document.getElementById('maths').value;
    const chem = document.getElementById('chem').value;
    const wp=document.getElementById('wp').value;
    const phy=document.getElementById('phy').value;
    
    let totalGrade = parseFloat(maths) + parseFloat(chem) + parseFloat(wp) + parseFloat(phy) ;
    
    let perc = (totalGrade * 100) / 400;
    console.log(perc);
    let grade;

    if(perc<=100 && perc>=80){
        grade = 'A';
    }
    else if( perc<=79 && perc>=60) {
        grade = 'B';
    }
    else if( perc<=59 && perc >=33){
        grade = 'C';
    }
    else {
        grade = 'F';
    }

    if(grade == 'F'){
        document.getElementById('result').innerHTML =`Percentage:${perc}  Grade:${grade}  Result:Fail`;
        document.getElementById('result').style.color = 'red';
    }
    else {
        document.getElementById('result').innerHTML =`Percentage:${perc}  Grade:${grade}  Result:Pass`;
        document.getElementById('result').style.color = 'white';
    }
};