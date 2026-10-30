// NEEDLE configuration.
// The Client ID is NOT a secret (PKCE needs no client secret), so it is safe to commit.
// You can either paste it here, or leave it empty and enter it on NEEDLE's first-run screen
// (it is then stored in this browser only).
window.NEEDLE_CONFIG = {
  CLIENT_ID: "",            // e.g. "0123456789abcdef0123456789abcdef"
  POLL_PLAYING_MS: 3000,    // how often to sync with Spotify while playing
  POLL_PAUSED_MS: 6000      // ...and while paused
};
