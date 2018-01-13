const queued = {};

function callQueued() {
  const keys = Object.keys(queued);
  for (let i = 0; i < keys.length; i++) {
    const id = keys[i];
    if (queued[id]) {
      queued[id]();
      queued[id] = null;
    }
  }

  window.requestAnimationFrame(callQueued);
}

callQueued();

export function queue(cb, id) {
  if (typeof cb === 'function') {
    queued[id] = cb;
  }
}

export function cancel(id) {
  if (queued[id]) {
    queued[id] = null;
  }
}
