// Utility to dynamically load Google Maps API
let googleMapsPromise = null;
let isLoaded = false;

/**
 * Dynamically loads the Google Maps JavaScript API
 * @param {string} apiKey - Your Google Maps API key
 * @param {string[]} libraries - Array of libraries to load (e.g., ['places'])
 * @returns {Promise} - Resolves when the API is loaded
 */
export function loadGoogleMapsAPI(apiKey, libraries = ['places']) {
  // Return existing promise if already loading
  if (googleMapsPromise) {
    return googleMapsPromise;
  }

  // Return resolved promise if already loaded
  if (isLoaded && window.google && window.google.maps) {
    return Promise.resolve(window.google);
  }

  googleMapsPromise = new Promise((resolve, reject) => {
    // Check if script already exists
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      if (window.google && window.google.maps) {
        isLoaded = true;
        resolve(window.google);
      } else {
        reject(new Error('Google Maps script exists but window.google is not available'));
      }
      return;
    }

    // Create callback function
    window.initGoogleMaps = () => {
      isLoaded = true;
      delete window.initGoogleMaps;
      resolve(window.google);
    };

    // Create and append script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries.join(',')}&callback=initGoogleMaps`;
    script.async = true;
    script.defer = true;
    script.onerror = (error) => {
      reject(new Error('Failed to load Google Maps API'));
    };

    document.head.appendChild(script);
  });

  return googleMapsPromise;
}

/**
 * Checks if Google Maps API is already loaded
 * @returns {boolean}
 */
export function isGoogleMapsLoaded() {
  return isLoaded && window.google && window.google.maps;
}
