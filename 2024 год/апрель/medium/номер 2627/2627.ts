type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), t);
  };
}
