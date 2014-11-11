/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

      

$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var x = $(this).attr('href');
        $('.tabs ' + x).show().siblings().hide(); //show the element clicked and hide its siblings
        $(this).parent('li').addClass('active').siblings().removeClass('active');// Change the current tab to active
        e.preventDefault();// This is necessary to avoid the typical scrolling to '#id' on click.
      });
      
    $.ajax({
        url: "http://community.ally.com/svc/api/", // the api link to fill the table
        dataType: 'jsonp', 
        success: function(results){
        // console.log(results);
            $.each(results.records , function(index, element){
            // alert(element.name);
            $('#res').append("<tr><td style='padding:5px;'>"+element.name+  "</td><td style='text-align:right;'>"+element.apy+ ' %'+" </td><td style='text-align:right;padding-right:5px;'>"+'$'+element.earnings+"</td></tr>");
            });// #res is the table id to which i append table rows with the data from the API.
        }
    
    });
    
});

  
// I created a function which would check if the popup is visible, if yes I hide it and if it is hidden i make it visible

function showPopup() {
	var x = document.getElementById("popup");
	x.style.visibility = (x.style.visibility == "visible") ? "hidden" : "visible"; 
}

/* This function has been called when
  1. I click the Login Button.
  2. I click the login button  after filling out the user name and password when the popup opens.
  3. I click the close icon when the popup is open.*/