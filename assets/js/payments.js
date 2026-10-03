(function () {
  var paypalClientId = 'BAA_ndqaWMyQwTnDZ0LXwLQ22jdJo9uxkeXYqmBbF-hD41HMiZ83mvOcx1Kti0b6ZfXfje7Q1ievNaS8Ok';
  var paypalPlanId = 'P-4FD24238VX4902214NK2XP2Y';
  var stripeButtonId = 'buy_btn_1UJKaaJaRf233kfWKZ81fcIe';
  var stripePublishableKey = 'pk_live_51UIdAGJaRf233kfWlFacR31IYVGdjCVAttNFzIgQGXQzrUdc894iJcBqamRZNwF11z2AN5kvjyzitor462f2egVI00UmKj0sd8';
  function loadScript(src, callback) { var s = document.createElement('script'); s.src = src; s.onload = callback; document.head.appendChild(s); }
  function render() {
    if (localStorage.getItem('ageVerified') !== 'true') return;
    var paypal = document.getElementById('paypal-button-container');
    if (paypal && !paypal.dataset.loaded) {
      paypal.dataset.loaded = 'true';
      loadScript('https://www.paypal.com/sdk/js?client-id=' + encodeURIComponent(paypalClientId) + '&vault=true&intent=subscription', function () {
        if (window.paypal) window.paypal.Buttons({ style: { shape: 'rect', color: 'gold', layout: 'vertical', label: 'subscribe' }, createSubscription: function (data, actions) { return actions.subscription.create({ plan_id: paypalPlanId, quantity: 1 }); }, onApprove: function (data) { window.alert('Subscription approved: ' + data.subscriptionID); } }).render('#paypal-button-container');
      });
    }
    var stripe = document.getElementById('stripe-button-container');
    if (stripe && !stripe.dataset.loaded) {
      stripe.dataset.loaded = 'true';
      var s = document.createElement('script'); s.src = 'https://js.stripe.com/v3/buy-button.js'; document.head.appendChild(s);
      var button = document.createElement('stripe-buy-button'); button.setAttribute('buy-button-id', stripeButtonId); button.setAttribute('publishable-key', stripePublishableKey); stripe.appendChild(button);
    }
  }
  window.unlockPayments = render;
  document.addEventListener('DOMContentLoaded', render);
})();
