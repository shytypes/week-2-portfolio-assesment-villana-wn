
const form = document.getElementById('contact-form');
const submittedData = document.getElementById('submitted-data');

form.addEventListener('submit'  ,function (event) {
  
  const firstName = document.getElementById('first-name').value;
  const secondName = document.getElementsById('second-name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementsById('message').value;


submittedData.innerHTML=
  <h2>Thank you!</h2>;
  <p><strong>First Name:</strong>{firstName}</p>;
  <p><strong>Second Name:</strong> {secondName}</p>;
  <p><strong>Email:</strong> {email}</p>;
  <p><strong>Message:</strong> {message}</p>;


form.request();
});
    


