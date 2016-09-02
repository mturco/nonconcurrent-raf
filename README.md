# Nonconcurrent requestAnimationFrame

Runs callback on every animation frame unless a previous call hasn't finished yet. Useful for things situations where you're doing rendering or layout on mouse events or window resize/scroll events.

## Usage
```javascript
nonconcurrentRAF.queue(callback, id);
```
* **callback**
  
  Function to call on next animation frame.

* **id**
  
  An ID string that's unique to the function. Subsequent calls with the same ID string will check to see if the previous call has finished.

## Example
```javascript
import nonconcurrentRAF from './nonconcurrent-raf';

window.addEventListener('resize', () => {
  nonconcurrentRAF.queue(update, 'render');
});

function render() {
  // Do things
}

```
