export function loadContact() {
    const contentDiv = document.getElementById('content');
    const contactDiv = document.createElement('div');
    
    // Create form elements
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
  
    const form = document.createElement('form');
    form.setAttribute('action', '#'); // You can update the action URL for form submission later
  
    // Name field
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';
  
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('required', '');
  
    // Email field
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email:';
  
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('required', '');
  
    // Message field
    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Message:';
  
    const messageTextarea = document.createElement('textarea');
    messageTextarea.setAttribute('id', 'message');
    messageTextarea.setAttribute('name', 'message');
    messageTextarea.setAttribute('required', '');
  
    // Submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
  
    // Append all elements to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));
  
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));
  
    form.appendChild(messageLabel);
    form.appendChild(messageTextarea);
    form.appendChild(document.createElement('br'));
  
    form.appendChild(submitButton);
  
    // Append form to contact div
    contactDiv.appendChild(heading);
    contactDiv.appendChild(form);
    contentDiv.appendChild(contactDiv);
  }