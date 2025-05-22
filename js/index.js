

function restrictKeys(e) {
    // Block e, +, - if key is not a number or backspace, delete, etc.
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
      return false;
    }
    if(!['0','1','2','3','4','5','6','7','8','9','Backspace'].includes(e.key)){
        e.preventDefault();
        return false;
    }
  }

  function showAlert() {
    alert('payment successfully!');
  }
