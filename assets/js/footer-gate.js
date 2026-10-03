(function () {
  var eligible = ['Canada', 'Switzerland', 'Russia', 'Iran', 'Somalia', 'Turkmenistan'];
  document.addEventListener('DOMContentLoaded', function () {
    var age = document.getElementById('age-confirm');
    var country = document.getElementById('country-select');
    var button = document.getElementById('reveal-btn');
    var block = document.getElementById('matrix-block');
    var message = document.getElementById('ineligible-msg');
    if (!age || !country || !button || !block) return;
    function update() {
      var allowed = age.checked && eligible.indexOf(country.value) !== -1;
      button.disabled = !allowed;
      if (message) message.hidden = !country.value || eligible.indexOf(country.value) !== -1;
    }
    age.addEventListener('change', update);
    country.addEventListener('change', update);
    button.addEventListener('click', function () {
      block.hidden = false;
      localStorage.setItem('matrixGatePassed', 'true');
      block.focus();
      update();
    });
    update();
  });
})();
