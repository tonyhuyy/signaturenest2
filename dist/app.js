'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation?.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false'); menuButton?.setAttribute('aria-label', 'Open navigation'); }
menuButton?.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('open', open); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
navigation?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && navigation?.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
document.querySelector('#year')?.replaceChildren(String(new Date().getFullYear()));
document.querySelectorAll('[data-platform]').forEach(a => a.addEventListener('click', () => { document.querySelector('#platform').value = a.dataset.platform; }));
const form = document.querySelector('#quote-form');
const status = document.querySelector('#form-status');
function prepareEnquiry() {
  if (!form.reportValidity()) return null;
  const data = new FormData(form);
  const subject = `Service enquiry — ${data.get('platform')} — ${data.get('name')}`;
  const body = ['Hello Signature Nest,', '', `Name: ${data.get('name')}`, `Email: ${data.get('email')}`, `Shop: ${data.get('shop') || 'Not provided'}`, `Platform: ${data.get('platform')}`, `Support needed: ${data.get('service')}`, '', String(data.get('message')), '', 'Please contact me to discuss the scope and a quote.'].join('\n');
  return {subject, body};
}
form?.addEventListener('submit', e => {
  e.preventDefault(); const enquiry = prepareEnquiry(); if (!enquiry) return;
  window.location.href = `mailto:contact@signaturenestgifts.com?subject=${encodeURIComponent(enquiry.subject)}&body=${encodeURIComponent(enquiry.body)}`;
  status.textContent = 'Your email app should open with a draft. Please press Send there. If it does not open, use “Copy request” and email contact@signaturenestgifts.com. Nothing has been sent by this website.';
});
document.querySelector('#copy-enquiry')?.addEventListener('click', async () => {
  const enquiry = prepareEnquiry(); if (!enquiry) return;
  const text = `To: contact@signaturenestgifts.com\nSubject: ${enquiry.subject}\n\n${enquiry.body}`;
  try { await navigator.clipboard.writeText(text); status.textContent = 'Request copied. Paste it into an email to contact@signaturenestgifts.com and send it from your email account.'; }
  catch { let field = document.querySelector('#manual-copy'); if (!field) { field = document.createElement('textarea'); field.id = 'manual-copy'; field.readOnly = true; field.setAttribute('aria-label', 'Your enquiry, ready to copy'); status.after(field); } field.value = text; field.focus(); field.select(); status.textContent = 'Select and copy the request below, then email it to contact@signaturenestgifts.com.'; }
});
