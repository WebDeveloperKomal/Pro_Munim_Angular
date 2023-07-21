import { Component } from '@angular/core';
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
var $ : any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  // isDropdownVisible: boolean = false;

  // toggleDropdown() {
  //   this.isDropdownVisible = !this.isDropdownVisible;
  // }
  
  isFeesDropdownVisible: boolean = false;
  isTaxChallanDropdownVisible: boolean = false;
  isdocumentDropdownVisible : boolean = false;
  isacknowDropdownVisible : boolean = false ;
  isinsureinvestDropdownVisible : boolean = false;
  ismyaccountDropdown : boolean= false ;
  toggleFeesDropdown() {
    this.isFeesDropdownVisible = !this.isFeesDropdownVisible;
  }

  toggleTaxChallanDropdown() {
    this.isTaxChallanDropdownVisible = !this.isTaxChallanDropdownVisible;
  }

  toggledocumentDropdown(){
    this.isdocumentDropdownVisible = !this.isdocumentDropdownVisible;
  }
  toggleacknowDropdown(){
   this.isacknowDropdownVisible = !this.isacknowDropdownVisible ;
  }

  toggleinsureinvestDropdown(){
 this.isinsureinvestDropdownVisible = !this.isinsureinvestDropdownVisible;
}

  togglemyaccountDropdown(){
  this.ismyaccountDropdown = !this.ismyaccountDropdown ;
  }
}
function toggleDropdown(event: any) {
  var dropdownContent = event.target.parentElement.nextElementSibling;
  dropdownContent.classList.toggle("show");
}


for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function(this: HTMLElement) {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling as HTMLElement;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
// $(document).ready(function() {
//   $('.dropdown-btn').click(function() {
//     $(this).siblings('.dropdown-content').toggle();
//   });
// });
// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function (this: HTMLElement) {
//       this.classList.toggle("active");
//       var dropdownContent = this.nextElementSibling;
//       if (dropdownContent.style.display === "block") {
//           dropdownContent.style.display = "none";
//       } else {
//           dropdownContent.style.display = "block";
//       }
//   });
// }
// function toggleDropdown(button : any) {
//   var dropdownContainer = button.nextElementSibling;
//   dropdownContainer.style.display = dropdownContainer.style.display === "none" ? "block" : "none";
// }
// $(document).ready(function() {
//   // Enable Bootstrap Collapse functionality
//   $('[data-bs-toggle="collapse"]').click(function() {
//     var target = $(this).attr('href');
//     $(target).collapse('toggle');
//   });
// });