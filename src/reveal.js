function reveal (host, parasites) {
  revealed = {};
  for (index in parasites) {
    var name = parasites[index];
    revealed[name] = eval(name);
  }
  host._test = revealed
}