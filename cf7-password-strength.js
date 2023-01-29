jQuery(document).ready(function($) {
  var password = $('#password');
  var message = $('#password-strength-message');

  password.keyup(function() {
    var passwordValue = password.val();

    // Check the password strength
    var passwordStrength = checkPasswordStrength(passwordValue);

    // Show the password strength message
    message.text(passwordStrength);
  });

  function checkPasswordStrength(password) {
    var strength = 0;

    // If password length is less than 6, return message
    if (password.length < 6) {
      return 'Too short';
    }

    // If password contains both lower and uppercase characters, increase strength value
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      strength += 1;
    }

    // If it has numbers and characters, increase strength value
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
      strength += 1;
    }

    // If it has one special character, increase strength value
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      strength += 1;
    }

    // If value is less than 2
    if (strength < 2) {
      return 'Weak';
    } else if (strength == 2) {
      return 'Good';
    } else {
      return 'Strong';
    }
  }
});
