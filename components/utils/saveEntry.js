// app/utils/saveEntry.js

// This function saves data for one stage (like farm, transport, etc.)
export function saveEntry(animalId, stage, data) {
  const key = `yeshalal-${animalId}`;

  // Get previous entries (if any)
  const existing = JSON.parse(localStorage.getItem(key)) || {};

  // Update that stage (e.g., farm, transport, etc.)
  const updated = {
    ...existing,
    [stage]: data,
  };

  // Save back into localStorage
  localStorage.setItem(key, JSON.stringify(updated));
  return true;
}

// This function gets full journey by animalId
export function getEntry(animalId) {
  const key = `yeshalal-${animalId}`;
  return JSON.parse(localStorage.getItem(key));
}
