// disable future dates
$(document).ready(function(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10){
      dd='0'+dd
    } 
    if(mm<10){
      mm='0'+mm
    } 
    
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("dob").setAttribute("max", today);    
});

//Other country value
$('.editOption').val();
$('#country').change(function(){
var selected = $('option:selected', this).attr('class');

if(selected == "editable"){
  $('.editOption').show();

  
  $('.editOption').keyup(function(){
      var editText = $('.editOption').val();
      $('.editable').val(editText);
      //$('.editable').html(editText);
  });

}
else{
  $('.editOption').hide();
}
});


//File Upload by selecting/drag and drop and preview uploaded file
function readFile(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
   
      reader.onload = function(e) {
        var htmlPreview =
          '<img width="200" src="' + e.target.result + '" />' +
          '<p>' + input.files[0].name + '</p>';
        var wrapperZone = $(input).parent();
        var previewZone = $(input).parent().parent().find('.preview-zone');
        var boxZone = $(input).parent().parent().find('.preview-zone').find('.box').find('.box-body');
   
        wrapperZone.removeClass('dragover');
        previewZone.removeClass('hidden');
        boxZone.empty();
        boxZone.append(htmlPreview);
      };
   
      reader.readAsDataURL(input.files[0]);
    }
  }
   
  function reset(e) {
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
  }
   
  $(".dropzone").change(function() {
    readFile(this);
  });
   
  $('.dropzone-wrapper').on('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('dragover');
  });
   
  $('.dropzone-wrapper').on('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragover');
  });
   
  $('.remove-preview').on('click', function() {
    var boxZone = $(this).parents('.preview-zone').find('.box-body');
    var previewZone = $(this).parents('.preview-zone');
    var dropzone = $(this).parents('.form-group').find('.dropzone');
    boxZone.empty();
    previewZone.addClass('hidden');
    reset(dropzone);
  });

//set allowed maximum file size
function validateSize(input) {
    const fileSize = input.files[0].size / 1024 / 1024; // in MiB
    if (fileSize > 0.190735) {
      alert('File size exceeds 200 KB');
      
    } else {
      // proceed
    }
}

//validate username, email, password
function validateForm() {
   let x = document.forms["myForm"]["username"].value;
   let y = document.forms["myForm"]["email"].value;
   let p1 = document.forms["myForm"]["password1"].value;
   let p2 = document.forms["myForm"]["password2"].value;

  if (x.length < 3 || x.length > 12 ) {
    alert("Username must be atleast 3 character and maximum 12 characters");
    return false;
  }
  else if (y.length<3){
    alert("Email must be atleast 3 character long");
    return false;
  }
  else if (p1.length<8){
    alert("Email must be atleast 8 character long");
    return false;
  }
  else if (p1 != p2){
    alert("Passwords don't match!");
    return false;
  }
}

//Facebook Login
window.fbAsyncInit = function() {
  FB.init({
  appId      : '550307509430534',
  cookie     : true,
  xfbml      : true,
  version    : 'v11.0'
  });
  FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
  });  
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response){
  if(response.status == 'connected'){
    console.log('Logged in and authenticated');
  }
  else {
    console.log('Not authenticated');
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

