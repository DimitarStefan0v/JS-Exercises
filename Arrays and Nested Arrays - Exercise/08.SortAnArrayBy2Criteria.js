function solve(array) {
    return array.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length).join('\n');
}

console.log(solve(['alpha', 
'beta', 
'gamma']));

console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']));

console.log(solve(['test', 
'Deny', 
'omen', 
'Default']));