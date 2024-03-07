function validateForm() {

    let name_error = document.querySelector('#name_error');
    let email_error = document.getElementById("email_error");
    let mobile_error = document.querySelector('#mobile_error');
    let dob_error = document.querySelector('#dob_error')
    let experience_error = document.querySelector('#experience_error')
    let skill_error = document.querySelector('#skill_error')
    let notice_error = document.querySelector('#notice_error')
    let current_error = document.querySelector('#current_error')
    let variable_error = document.querySelector('#variable_error')
    let expected_error = document.querySelector('#expected_error')
    let file_error = document.querySelector('#file_error')

    let fname = document.querySelector('#fname').value;
    let email = document.querySelector('#email').value;
    let mobile = document.querySelector('#mobile').value;
    let dob = document.querySelector('#dob').value;
    let exp_year = document.querySelector('#exp_year').value
    let exp_month = document.querySelector('#exp_month').value
    let key_skills = document.querySelector('#key_skills').value
    let notice_period = document.querySelector('#notice_period').value
    let current_ctc_lac = document.querySelector('#current_ctc_lac').value
    let current_ctc_th = document.querySelector('#current_ctc_th').value
    let var_ctc_lac = document.querySelector('#var_ctc_lac').value
    let var_ctc_th = document.querySelector('#var_ctc_th').value
    let exp_ctc_lac = document.querySelector('#exp_ctc_lac').value
    let exp_ctc_th = document.querySelector('#exp_ctc_th').value
    let cv_file = document.querySelector('#cv_file')

    

    if (fname == '') {
        name_error.innerHTML = "Please Enter your name.";
        return false;

    }
    else if (!fname.match(/^[a-zA-Z'-]+(?:\s[a-zA-Z'-]+)*$/)) {
        name_error.innerHTML = "Please Enter your valid name.";
        return false;
    }
    else {
        name_error.innerHTML = '';
        
    }

    if (email == '') {
        email_error.innerHTML = 'Please Enter Email';
        return false;
    }
    else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    )) {
        email_error.innerHTML = 'please Enter valid Email'
        return false;
    }
    else {
        email_error.innerHTML = ''

    }

    if (mobile == '') {
        mobile_error.innerHTML = 'Please Enter a number '
        return false;
    }
    else if (!mobile.match(
        /^[6789]\d{9}$/

    )) {
        mobile_error.innerHTML = 'Please Enter valid phone number'
        return false;
    }
    else {
        mobile_error.innerHTML = ''

    }


    if (dob == '') {
        dob_error.innerHTML = 'please Enter the DOB'
        return false;
    }
    else if (!dob.match(
        /^(?:19|20)\d{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/

    )) {
        dob_error.innerHTML = 'please Enter valid DOB'
        return false;
    }
    else {
        dob_error.innerHTML = ''

    }
    if ((exp_year <= 0) && (exp_month <= 0)) {
        experience_error.innerHTML = 'Please Select Experiece'
        return false;
    }
    else {
        experience_error.innerHTML = ''
    }

    if (key_skills == "") {
        skill_error.innerHTML = "Please Enter Key_skills.";
        return false;
    }
    else if (
        !key_skills.match(
            /^[a-zA-Z'-]+(?:\s[a-zA-Z'-]+)*$/

        )
    ) {
        skill_error.innerHTML = "Please Enter valid Designation.";
        return false;
    }
    else {
        skill_error.innerHTML = '';
    }

    if (notice_period == "") {
        notice_error.innerHTML = "Please Enter Notice Period.";
        return false;
    }
    else if (
        !notice_period.match(
            /^\d+$/
        )
    ) {
        notice_error.innerHTML = "Please Enter Digit Number.";
        return false;
    }
    else {
        notice_error.innerHTML = '';
    }

    if ((current_ctc_lac <= 0) && (current_ctc_th <= 0)) {
        current_error.innerHTML = 'Please Select Current CTC'
        return false;
    }
    else {
        current_error.innerHTML = ''
    }

    if ((var_ctc_lac <= 0) && (var_ctc_th <= 0)) {
        variable_error.innerHTML = 'Please Select Variable CTC'
        return false;
    }
    else {
        variable_error.innerHTML = ''
    }

    if ((exp_ctc_lac <= 0) && (exp_ctc_th <= 0)) {
        expected_error.innerHTML = 'Please Select Expected CTC'
        return false;
    }
    else {
        expected_error.innerHTML = ''
    }

    if (cv_file.files.length=="") {
        file_error.innerHTML = 'Please Select Your File '
        return false;
    }
    else {
        file_error.innerHTML = ''
    }
    
    save()
    return false;
 
}

function save(){
   
    let fname = document.querySelector('#fname').value;
    localStorage.setItem('fname', fname);
    let email = document.querySelector('#email').value;
    localStorage.setItem('email', email);

    let mobile = document.querySelector('#mobile').value;
    localStorage.setItem('mobile', mobile);
    let alternate_no = document.querySelector('#alternate_no').value;
    localStorage.setItem('alternate_no', alternate_no);
    let dob = document.querySelector('#dob').value;
    localStorage.setItem('dob', dob);
    let employer = document.querySelector('#employer').value
    localStorage.setItem('employer', employer);
    let exp_year = document.querySelector('#exp_year').value
    localStorage.setItem('exp_year', exp_year);
    let exp_month = document.querySelector('#exp_month').value
    localStorage.setItem('exp_month', exp_month);
    let designation = document.querySelector('#designation').value
    localStorage.setItem('designation', designation);
    let key_skills = document.querySelector('#key_skills').value
    localStorage.setItem('key_skills', key_skills);
    let notice_period = document.querySelector('#notice_period').value
    localStorage.setItem('notice_period', notice_period);
    let current_ctc_lac = document.querySelector('#current_ctc_lac').value
    localStorage.setItem('current_ctc_lac', current_ctc_lac);
    let current_ctc_th = document.querySelector('#current_ctc_th').value
    localStorage.setItem('current_ctc_th', current_ctc_th);
    let var_ctc_lac = document.querySelector('#var_ctc_lac').value
    localStorage.setItem('var_ctc_lac', var_ctc_lac);
    let var_ctc_th = document.querySelector('#var_ctc_th').value
    localStorage.setItem('var_ctc_th', var_ctc_th);
    let exp_ctc_lac = document.querySelector('#exp_ctc_lac').value
    localStorage.setItem('exp_ctc_lac', exp_ctc_lac);
    let exp_ctc_th = document.querySelector('#exp_ctc_th').value
    localStorage.setItem('exp_ctc_th', exp_ctc_th);
    let remarks = document.querySelector('#remarks').value
    localStorage.setItem('remarks', remarks);
  
    let imgurl = URL.createObjectURL(cv_file.files[0]);
    let newRow = document.querySelector("#user_table").insertRow(-1);
    let Cells = [
        newRow.insertCell(0),
        newRow.insertCell(1),
        newRow.insertCell(2),
        newRow.insertCell(3),
        newRow.insertCell(4),
        newRow.insertCell(5),
        newRow.insertCell(6),
        newRow.insertCell(7),
        newRow.insertCell(8),
        newRow.insertCell(9),
        newRow.insertCell(10),
        newRow.insertCell(11),
        newRow.insertCell(12),
        newRow.insertCell(13),
        newRow.insertCell(14),
        newRow.insertCell(15),
    ];

        Cells[0].innerHTML = fname;

        Cells[1].innerHTML = email;
    

        Cells[2].innerHTML = mobile;

        if (alternate_no == "") {
                Cells[3].innerHTML = "null";
            }
            else {
                Cells[3].innerHTML = alternate_no;
            }
        Cells[4].innerHTML = dob;

        if (employer == "") {
            Cells[5].innerHTML = "null";
        }
        else {
            Cells[5].innerHTML = employer;
        }

        Cells[6].innerHTML = `${exp_year}.${exp_month} Year/s`;

        if (designation == "") {
            Cells[7].innerHTML = "null";
        }
        else {
            Cells[7].innerHTML = designation;
        }
        Cells[8].innerHTML = key_skills;
        Cells[9].innerHTML = notice_period;
        Cells[10].innerHTML = `${current_ctc_lac}.${current_ctc_th} Lac/s`
        Cells[11].innerHTML = `${var_ctc_lac}.${var_ctc_th} Lac/s`
        Cells[12].innerHTML = `${exp_ctc_lac}.${exp_ctc_th} Lac/s`
        
        if (remarks == "") {
            Cells[13].innerHTML = "null";
        }
        else {
            Cells[13].innerHTML = remarks;
        }

        Cells[14].innerHTML=`<img src= "${imgurl}" id= "imgi" alt= "profile">`
        let cvFileInput = document.getElementById('cv_file').files[0];
        if (cvFileInput) {
            const reader = new FileReader();
            reader.onload = function(a) {
                 localStorage.setItem("viewpic", a.target.result);
            };
            reader.readAsDataURL(cvFileInput);
        } else {
            alert("Please select an image.");
        }
       
    
        Cells[15].innerHTML = "<button onclick='deletetable(this)'>Delete</button>"+"<button onclick='edit(this)'>Edit</button>"+"<button onclick='Redirect(this)'>View</button>"
 
         document.querySelector("#myform").reset();

         document.querySelector("#myform").style.display = "none";
        document.querySelector("#user_table").style.display = "table";
        return false;
   
}

function deletetable(row) {

    if (confirm(" DO you want to delete this record")) {
        let i = row.parentNode.parentNode.rowIndex;

        document.querySelector("#user_table").deleteRow(i);
    }
}


function edit(row) {
    
    var i = row.parentNode.parentNode.rowIndex;
    

    var table = document.querySelector("#user_table").rows[i].cells;
    document.querySelector("#fname").value  = table[0].innerHTML;
    document.querySelector("#email").value = table[1].innerHTML;
    document.querySelector("#mobile").value  = table[2].innerHTML;

    document.querySelector("#alternate_no").value  = table[3].innerHTML;
    document.querySelector("#dob").value = table[4].innerHTML;
    document.querySelector("#employer").value  = table[5].innerHTML;
     
   let exp=table[6].innerHTML;
    let totalYear = exp.split('.')
    let selectedYear = totalYear[0];
    let selectedMonth = totalYear[1];
    document.querySelector("#exp_year").value = selectedYear;
    selectedMonth= selectedMonth.replace('Year/s', '').trim();
    document.querySelector("#exp_month").value = selectedMonth;

    document.querySelector("#designation").value = table[7].innerHTML;
    document.querySelector("#key_skills").value = table[8].innerHTML;
    document.querySelector("#notice_period").value = table[9].innerHTML;

    let current= table[10].innerHTML;  
    let totalLac = current.split('.')
    let selectedLac = totalLac[0];
    let selectedTH = totalLac[1];
    document.querySelector("#current_ctc_lac").value = selectedLac;
    selectedTH= selectedTH.replace('Lac/s', '').trim();
    document.querySelector("#current_ctc_th").value = selectedTH;

    
    let var_ctc= table[10].innerHTML;  
    let totalvarLac = var_ctc.split('.')
    let selectedvarLac = totalvarLac[0];
    let selectedVarTH = totalLac[1];
    document.querySelector("#var_ctc_lac").value = selectedvarLac;
    selectedVarTH= selectedVarTH.replace('Lac/s', '').trim();
    document.querySelector("#var_ctc_th").value = selectedVarTH;
    
    let exp_ctc = table[12].innerHTML;
    let explac = exp_ctc.split('.')
    let selectedexpLac = explac[0];
    let selectedexpTH = totalLac[1];
    document.querySelector("#exp_ctc_lac").value=selectedexpLac
    selectedexpTH= selectedexpTH.replace('Lac/s', '').trim();
    document.querySelector("#exp_ctc_th").value=selectedexpTH

    document.querySelector("#remarks").value = table[13].innerHTML;
    
    let imgSrc= table[14].querySelector("img").src;
    document.querySelector("#view").src = imgSrc;
    document.querySelector("#view").style.display="block";
    if(imgSrc!==""){
        
    document.querySelector("#view").src = imgSrc;
    document.querySelector("#view").style.display="block";
    }
    else{
        document.querySelector("#view").style.display="none";
    }

    document.querySelector("#user_table").deleteRow(i);
    document.querySelector("#user_table").style.display = "none";
    document.querySelector("#myform").style.display = "block";

   
}

function viewimage(input){
    if(input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload=function(s){
            document.querySelector("#view").src= s.target.result;
            document.querySelector("#view").style.display="block";
        }
        reader.readAsDataURL(input.files[0]);
    }
}
function Redirect() {

    window.location.assign("http://127.0.0.1:5500/viewtable.html");
   
}
