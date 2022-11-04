
const studentReportData = (event) => {
    event.preventDefault();

    let image = document.getElementById("image").value;
    let name = document.getElementById("name").value;
    let division = document.getElementById("division").value;
    let physics = document.getElementById("physics").value;
    let math = document.getElementById("math").value;
    let chemistry = document.getElementById("chemistry").value;

    //console.log(image, name, physics, math, chemistry);
    if(image==="" || name==="" || division==="" || physics==="" || math==="" || chemistry===""){
        alert("Please give all data")
    }
    else if(math<0 || math>100 || physics<0 || physics>100 || chemistry<0 || chemistry>100){
        alert("Please check marks again")
    }
    else{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.className = "img_div"
        let img = document.createElement("img");
        img.src = image;
        td1.append(img)
        let td2 = document.createElement("td");
        td2.innerText = name;
        td3 = document.createElement("td");
        td3.innerText = division;
        let td4 = document.createElement("td");
        td4.innerText = physics;
        let td5 = document.createElement("td");
        td5.innerText = math;
        let td6 = document.createElement("td");
        td6.innerText = chemistry;
    
        let percentage = ((+math)+(+physics)+(+chemistry))/3;
        //console.log(percentage);
        let td7 = document.createElement("td");
        td7.innerText = percentage.toFixed(2);

        let td8 = document.createElement("td");

        if(math<35 || physics<35 || chemistry<35 || percentage<35){
            td8.innerText = "Fail";
            td8.className = "fail";
            if(physics<35){
                td4.className = "text";
            }
            if(math<35){
                td5.className = "text";
            }
            if(chemistry<35){
                td6.className = "text";
            }
        }
        else{
            td8.innerText = "Pass";
            td8.className = "pass";
        }
    
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        document.querySelector("tbody").append(tr);

        document.querySelector("form").reset();
    }
} 

document.getElementById("report_form").addEventListener("submit", studentReportData);

