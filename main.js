function myFunction() {
    let switched = document.getElementById("switched");
    let basic = document.getElementById("basic-text");
    let professional = document.getElementById("prof-text");
    let master = document.getElementById("master-text");

    priceChange(basic, professional, master, switched)
  }

  function priceChange(basic, professional, master, switched) {
    if (switched.value === "yearly") {
    basic.innerHTML = "$199.99";
      professional.innerHTML = "$249.99";
      master.innerHTML = "$399.99";
      switched.value = 'monthly';
    } else if(switched.value === "monthly") {
      basic.innerHTML = "$19.99";
      professional.innerHTML = "$24.99";
      master.innerHTML = "$39.99";
      switched.value = 'yearly';
    }
    else {
      basic.innerHTML = "$199.99";
      professional.innerHTML = "$249.99";
      master.innerHTML = "$399.99";
    }
    
  }
