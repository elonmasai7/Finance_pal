import payments from './payments.js';

const paymentMethods = payments.international;

function displayPaymentMethods() {
  const paymentList = document.createElement('ul');

  Object.keys(paymentMethods).forEach((method) => {
    const paymentMethod = paymentMethods[method];

    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="${paymentMethod.logo}" alt="${paymentMethod.name} Logo" style="width: 50px; height: 50px;">
      <strong>${paymentMethod.name}</strong> 
      <span>      <span>(${paymentMethod.currencies.join(', ')})</span> 
      <span>- Available in: ${paymentMethod.countries.join(', ')}</span>
    `;
    
    paymentList.appendChild(listItem);
  });

  document.body.appendChild(paymentList);
}

document.addEventListener('DOMContentLoaded', displayPaymentMethods);