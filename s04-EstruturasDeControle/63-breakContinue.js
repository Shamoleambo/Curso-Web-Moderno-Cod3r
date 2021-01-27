const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//blocos if não são aetados pelos break
for (let x in nums) {
    if (x == 5) break;
    console.log(`${x} = ${nums[x]}`);
}
console.log(`
  `);
for (let y in nums) {
    if (y == 5) continue;
    console.log(`${y} = ${nums[y]}`);
}
console.log(`
  `);
rotulo: for (let a in nums) { //o rotulo está associado ao primeiro for
    for (let b in nums) {
        if (a == 2 && b == 3) break rotulo
        console.log(`Par = ${a}, ${b}`)
    }
}