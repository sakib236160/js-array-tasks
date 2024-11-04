// 3. Checking Array Membership with ‘includes’
//          Instructions:
//          Create an array of books containing different book.
//          Use the includes method to check if the array contains a javascript book.
//          Print a message to the console indicating whether the element is present in the array or not.

const books = ["To Kill a Mockingbird", "1984", "javascript", "Pride and Prejudice", "The Great Gatsby", "Moby Dick"];

console.log(books.includes('javascript'));

if (books.includes('javascript')){
    console.log('Books Ti Ami kinbo');
}
else{
    console.log('Book ti ami kinbo na ');
}
