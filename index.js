var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tab-contents");

 function opentab(tabname){
    for(tablink of tablinks){
        tablink.classlist.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontents.classlist.remove("active-link");
    }
    event.currentTarget.classlist.add("active-link");
    document.getElementById(tabname).classlist.add("active-tab")
 }