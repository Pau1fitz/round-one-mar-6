function reverse(input) {
    input = input.toString();
    input = input.split('').join('');
    input = input.split('')
    return input.reverse();
}

console.log(reverse(123456789));