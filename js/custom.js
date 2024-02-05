let updateDashBoard = (e) => {
  let tab_pages = document.getElementsByClassName("tab_page");
  for (let page of tab_pages) {
    page.classList.remove("active");
  }
  tab_pages[e].classList.add("active");
};

// Add new lead
const addLead = () => {
  document.getElementById("leads").style.display = "none";
  document.getElementById("addLead").style.display = "block";
};

// update leads
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const priority = document.getElementById("Priority");
const status = document.getElementById("status");
const date = document.getElementById("date");
const adddress = document.getElementById("Address");


const updateLead = () => {
  const nameValue = name.value;
  const emailValue = email.value;
  const numberValue = number.value;
  const priorityValue = priority.value;
  const statusValue = status.value;
  const dateValue = date.value;
  const AddressValue = adddress.value;


  const FormInnerHTML = `
  <div class="box"> 
    <p id="inputName">${nameValue}</p>
  </div>
  <div class="box">
    
  <p id="inputEmail">${emailValue}</p>
  </div>
  <div class="box">
    
  <p id="inputNumber">${numberValue}</p>
  </div>

  <div class="box">
    
  <p id="InputPriority">${priorityValue}</p>
  </div>
  <div class="box">
    
  <p id="InputStatus">${statusValue}</p>
  </div>
  <div class="box">
    
  <p id="InputDate">${dateValue}</p>
  </div>
  <div class="box">
    
  <p id="InputAddress">${AddressValue}</p>
  </div>
  <div class="box flex content-center">
  <i class="fa fa-pencil-square edit-button" aria-hidden="true" onclick="addLead()"></i>
  <i class="fa fa-trash" aria-hidden="true"></i>
  </div>
`;

// updateExisting leadbox
const editRef = document.querySelector(".editRef");

const leadBox = document.createElement("div");
leadBox.classList.add("leads", "leads-box", "flex", "spce-between");

  if(editRef)
{
  editRef.innerHTML = FormInnerHTML;
  editRef.classList.remove('editRef');
   name.value = '';
 email.value = '';
 number.value = '';
 priority.value = '';
 status.value = '';
 date.value = '';
 adddress.value = '';

 console.log('editRef');
}
else{
  leadBox.innerHTML = FormInnerHTML;
  const leadParent =  document.getElementById("lead-parent");
  leadParent.appendChild(leadBox);
  console.log('new lead box');

RenderData();

//    name.value = '';
//  email.value = '';
//  number.value = '';
//  priority.value = '';
//  status.value = '';
//  date.value = '';
//  adddress.value = '';



}

}

// lead form main function
const leadForm = document.getElementById("leadForm");
leadForm.addEventListener("submit", (e) => {
  e.preventDefault();

  updateLead();
  document.getElementById("leads").style.display = "block";
  document.getElementById("addLead").style.display = "none";
});
// Add new lead code ends here

// edit code

const RenderData = () =>{
  let editButtons = document.getElementsByClassName("edit-button");
  console.log(editButtons);
  
  for (let editButton of editButtons) {
    editButton.addEventListener("click", (event) => {
      const checkEditButton = event.currentTarget;
  
      // console.log(checkEditButton);
  
      let leadBoxEdited = checkEditButton.closest(".leads-box");
      console.log(leadBoxEdited);
      leadBoxEdited.classList.add("editRef");
  
  
  
      const InputName = leadBoxEdited.querySelector(".box:nth-child(1) p").innerText;
      const InputEmail = leadBoxEdited.querySelector(".box:nth-child(2) p").innerText;
      const InputNumber = leadBoxEdited.querySelector(".box:nth-child(3) p").innerText;
      const InputPriority = leadBoxEdited.querySelector(
        ".box:nth-child(4) p"
      ).innerText;
      const InputStatus = leadBoxEdited.querySelector(".box:nth-child(5) p").innerText;
      const InputDate = leadBoxEdited.querySelector(".box:nth-child(6) p").innerText;
      const InputAddress = leadBoxEdited.querySelector(".box:nth-child(7) p").innerText;
  
      for (let prior of priority) {
        if (prior.value === InputPriority) {
          prior.selected = true;
          break;
        }
      }
      for (let state of status) {
        if (state.value === InputStatus) {
          state.selected = true;
          break;
        }
      }
      name.value = InputName;
      email.value = InputEmail;
      number.value = InputNumber;
      date.value = InputDate;
      adddress.value = InputAddress;
  
  
    });
  }
  
}

RenderData();