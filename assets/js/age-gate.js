(function () {
  function unlock() {
    document.body.classList.remove('locked');
    document.querySelectorAll('.payment-embed').forEach(function (item) { item.hidden = false; });
    var gate = document.getElementById('age-gate');
    if (gate) gate.hidden = true;
    if (typeof window.unlockPayments === 'function') window.unlockPayments();
  }
  function init() {
    var gate = document.getElementById('age-gate');
    if (!gate) return;
    if (localStorage.getItem('ageVerified') === 'true') { unlock(); return; }
    document.body.classList.add('locked');
    document.querySelectorAll('.payment-embed').forEach(function (item) { item.hidden = true; });
    gate.hidden = false;
    document.getElementById('age-yes')?.addEventListener('click', function () { localStorage.setItem('ageVerified', 'true'); unlock(); });
    document.getElementById('age-no')?.addEventListener('click', function () { window.location.href = 'https://www.google.com/'; });
  }
  document.addEventListener('DOMContentLoaded', init);
})();
