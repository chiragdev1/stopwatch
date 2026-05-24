export function pad(value) {
  return String(value).padStart(2, "0");
}

export function formatTime(ms) {
  const safe = Math.max(0, Math.floor(ms));

  const minutes = Math.floor(safe / 60000);
  const seconds = Math.floor((safe % 60000) / 1000);

  const hundredths = Math.floor((safe % 1000) / 10);

  return `${pad(minutes)}:${pad(seconds)}:${pad(hundredths)}`;
}

export function minutesToMilliseconds(value) {
  const minutes = Number(value);

  if (!Number.isFinite(minutes) || minutes <= 0) {
    return 0;
  }

  return Math.floor(minutes * 60 * 1000);
}

export function millisecondsToSeconds(ms) {
  return Math.floor(ms / 1000);
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
