var n = parseInt(readline());
var count = 0;

for (var i = 0; i < n; i++) {
    var line = readline();
    if (!line) continue; // Skip if line is empty or undefined

    var parts = line.trim().split(' ');
    var petya = parseInt(parts[0]);
    var vasya = parseInt(parts[1]);
    var tonya = parseInt(parts[2]);

    if ((petya + vasya + tonya) >= 2) {
        count++;
    }
}

print(count);
