function isSubstring(str, target) {
  const n = str.length;
  const m = target.length;

  for (let i = 0; i <= n - m; i++) {
    let found = true;

    for (let j = 0; j < m; j++) {
      if (str[i + j] !== target[j]) {
        found = false;
        break;
      }
    }

    if (found) return true;
  }

  return false;
}
