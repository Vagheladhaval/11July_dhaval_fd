function applyAppointment() {
    // Get form inputs
    var name = document.getElementById("name").value;
    var time = document.getElementById("time").value;
    var date = document.getElementById("date").value;
    var city = document.getElementById("city").value;
    var day = document.getElementById("day").value;
  
    // Check if any field is empty
    if (!name || !time || !date || !city || !day) {
      alert("Please enter all information.");
      return;
    }
    
    // Check if there are already two appointments for the same date and day
    var existingAppointments = document.querySelectorAll('[data-date="' + date + '"][data-day="' + day + '"]');
    
    if (existingAppointments.length >= 2) {
      alert("The seats are full for this date and day. Please choose another date or day.");
      return;
    }
  
    // Create a new row for the appointment
    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td>" + name + "</td><td>" + time + "</td><td>" + date + "</td><td>" + city + "</td><td>" + day + "</td>";
    newRow.setAttribute("data-date", date);
    newRow.setAttribute("data-day", day);
    newRow.classList.add("fade-in"); // Apply animation class
    
    // Append the new row to the table
    document.getElementById("appointmentTable").appendChild(newRow);
  
    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("time").value = "";
    document.getElementById("date").value = "";
    document.getElementById("city").value = "";
    document.getElementById("day").value = "";
  }