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

const filters = document.querySelector('.filters');
if (filters) {
  const buttons = [...filters.querySelectorAll('button')];
  const cards = document.querySelectorAll('#work [data-category]');
  const status = document.querySelector('#work [role="status"]');

  filters.addEventListener('click', event => {
    const selected = event.target.closest('button[data-filter]');
    if (!selected || selected.getAttribute('aria-pressed') === 'true') return;

    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button === selected));
    }

    let visibleCount = 0;
    for (const card of cards) {
      const matches = selected.dataset.filter === 'all' ||
        card.dataset.category === selected.dataset.filter;
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    }

    status.textContent = `${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'} shown.`;
  });

  filters.hidden = false;
}
