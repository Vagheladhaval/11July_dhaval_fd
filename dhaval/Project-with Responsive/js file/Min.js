 // Array to store booked dates
 let bookedDates = [];
    
 function submitAppointment() {
   const name = document.getElementById('name').value;
   const city = document.getElementById('city').value;
   const date = document.getElementById('date').value;
   const service = document.getElementById('service').value;

   // Check if date is already booked
   if (bookedDates.filter(d => d.date === date).length >= 5) {
     document.getElementById('message').innerText = "You can apply next date.";
     return;
   }

   // Add appointment to booked dates
   bookedDates.push({ name, city, date, service });

   // Display booked dates
   displayBookedDates();

   // Clear form inputs
   document.getElementById('name').value = '';
   document.getElementById('city').value = '';
   document.getElementById('date').value = '';
   document.getElementById('service').value = '';
 }

 function displayBookedDates() {
   const messageDiv = document.getElementById('message');
   messageDiv.innerHTML = "<h3>Booked Appointments:</h3>";

   bookedDates.forEach(appointment => {
     const p = document.createElement('p');
     p.innerText = `${appointment.name} from ${appointment.city} has booked a ${appointment.service} appointment on ${appointment.date}`;
     messageDiv.appendChild(p);
   });
 }