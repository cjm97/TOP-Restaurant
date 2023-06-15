export default function contactPage() {
  let storeContactInfo = [
    'Thor Odinson',
    'thor@odinproject.com',
    '123-123-123',
  ];
  const container = document.getElementById('content'),
    contactHeader = document.createElement('h1'),
    contactInfo = document.createElement('address'),
    contactContainer = document.createElement('div'),
    footer = document.createElement('footer'),
    contactInfoContainer = document.createElement('div');
  contactContainer.classList.add('container', 'container__contact');
  contactInfoContainer.classList.add('info__container');
  contactHeader.textContent = 'Contacts';
  container.appendChild(contactContainer);
  contactContainer.appendChild(contactInfoContainer);
  contactInfoContainer.appendChild(contactHeader);
  contactInfoContainer.appendChild(contactInfo);
  storeContactInfo.forEach((item) => {
    const p = document.createElement('p');
    p.textContent = item;
    contactInfo.appendChild(p);
  });
footer.textContent = '© Chris Marsh - Odin Project 2023';
container.appendChild(footer);
}
