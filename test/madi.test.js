const response = await fetch('http://localhost:3000/madi');

const name = await response.text();

expect.(name).toBe("madi");