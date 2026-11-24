// Add your real details here. Blank fields are omitted from the contact section.
const contact = {
  email: "",
  linkedin: "",
  resume: "" // Example: "assets/Arehone-Rahulani-Resume.pdf"
};
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
const links = document.getElementById('contact-links');
if (links) {
  const items = [
    [contact.email ? 'mailto:' + contact.email : '', 'Email me ↗'],
    [contact.linkedin, 'LinkedIn ↗'],
    [contact.resume, 'Download CV ↓']
  ];
  for (const [url, label] of items) {
    if (!url) continue;
    const link = document.createElement('a');
    link.href = url; link.className = 'button'; link.textContent = label;
    links.appendChild(link);
  }
}
