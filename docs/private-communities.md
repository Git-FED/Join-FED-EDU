# Private Communities

> **18+ only.** This page links to age-restricted and region-locked rooms.

This page intentionally keeps the private Matrix URL out of the public footer. Access requires an age confirmation and an eligible country selection.

<label for="age-confirm"><input id="age-confirm" type="checkbox"> I confirm I am 18 or older.</label>

<label for="country-select">Country or region
<select id="country-select">
  <option value="">Select a country</option>
  <option>Canada</option>
  <option>Switzerland</option>
  <option>Russia</option>
  <option>Iran</option>
  <option>Somalia</option>
  <option>Turkmenistan</option>
  <option>Other</option>
</select>
</label>

<button id="reveal-btn" type="button" disabled>Reveal Matrix link</button>

<p id="ineligible-msg" hidden role="status">This country selection is not eligible for the private room. You can return to the <a href="../index.html">home page</a> or contact <a href="mailto:support@fedpromptly.com">support</a>.</p>

<div id="matrix-block" hidden tabindex="-1" aria-live="polite">
  <p><a href="https://matrix.to/#/#fed-os:matrix.org" target="_blank" rel="noopener noreferrer">Open the FED-OS Matrix room</a></p>
  <p>By joining you agree to the room rules. Access may be revoked.</p>
</div>

<noscript>
  <p>Enable JavaScript to view this page, or email <a href="mailto:support@fedpromptly.com">support@fedpromptly.com</a>.</p>
</noscript>

<script src="../assets/js/footer-gate.js" defer></script>
