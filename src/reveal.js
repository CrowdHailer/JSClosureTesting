function reveal (host, parasites) {
  revealed = {};
  for (index in parasites) {
    var name = parasites[index];
    console.log(name);
    console.log(this[name]);
    revealed[name] = this.name;
  }
  host._test = revealed
}