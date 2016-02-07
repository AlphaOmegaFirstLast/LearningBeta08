function isValid(op, serviceName, obj)
{
  var errors = [];

  switch (serviceName)
  {
    //---------------- agentType
    case "agentType":
      errors = isValidAgentType(op, obj);
      break;
    //---------------- agent
    case "agent":
      errors = isValidControl();
      break;
    //---------------- default
    default :
      break;
  }

  //---------------- Display Error -------------
  if (errors.length > 0)
  {
    displayValidationError(errors);
  }
  //--------------------------------------------
  return errors.length == 0;
}
//----------------------------------------
function displayValidationError(errors)
{
  $("#dvMessage").html(errors.join("<\/br>"));
}
//----------------------------------------
function isValidControl() // html5
{
  var errors = [];
  var txtControls = $("[id^='" + prefixForText + "']");
  $.each(txtControls, function (i, txtControl)
  {
    var control = document.getElementById(txtControl.id);
    if (!control.validity.valid)
    {
      if (control.validity.valueMissing)
      {
        errors.push("value is required");
      }
      if (control.validity.typeMismatch)
      {
        errors.push("invalid value");
      }
      if (control.validity.rangeOverflow)
      {
        errors.push("value exceeds the max limit");
      }
      if (control.validity.rangeUnderflow)
      {
        errors.push("value is below the min limit");
      }

      if (control.validity.badInput)
      {
        errors.push("browser is not able to convet the user input");
      }
      if (control.validity.patternMismatch)
      {
        errors.push("pattern mismatch");
      }
      if (control.validity.tooLong)
      {
        errors.push("value exceeds the max length");
      }
      if (control.validity.stepMismatch)
      {
        errors.push("step mismatch");
      }
     
    }
    
  });

  return errors;
}

function isValidAgentType(op, obj)
{
 var errors = [] ;
  /*
  $('input').blur(function(event) {
    event.target.checkValidity();
}).bind('invalid', function(event) {
    setTimeout(function() { $(event.target).focus();}, 50);
});
*/
  /*
   
   switch (op)
  {
    case "insert":
      if (obj.name == null || obj.name == "")
      {
        errors.push("name is required");
        errors.push("testing join");
      }
      break;
    case "update":
      break;
    default :
      break;
  }
*/
  return errors;
}