let button = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
        person: "Nelson Mandela"
    },
    {
        quote: `"The way to get started is to quit talking and begin doing."`,
        person: "Walt Disney"
    },
    {
        quote: `"Never let the fear of striking out keep you from playing the game."`,
        person: "Babe Ruth"
    },
    {
        quote: `"If life were predictable it would cease to be life, and be without flavor."`,
        person: "Eleanor Roosevelt"
    },
    {
        quote: `"Whoever is happy will make others happy too."`,
        person: "Anne Frank"
    },
    {
        quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
        person: "James Cameron"
    },
    {
        quote: `"Life is what happens when you're busy making other plans."`,
        person: "John Lennon"
    },
    {
        quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
        person: "Mother Teresa"
    },
    {
        quote: `"When you reach the end of your rope, tie a knot in it and hang on."`,
        person: "Franklin D. Roosevelt"
    },
    {
        quote: `"Always remember that you are absolutely unique. Just like everyone else."`,
        person: "Margaret Mead"
    },
    {
        quote: `"Don't judge each day by the harvest you reap but by the seeds that you plant."`,
        person: "Robert Louis Stevenson"
    },
    {
        quote: `"The future belongs to those who believe in the beauty of their dreams."`,
        person: "Eleanor Roosevelt"
    },
    {
        quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
        person: "Benjamin Franklin"
    },
    {
        quote: `"You will face many defeats in life, but never let yourself be defeated."`,
        person: "Maya Angelou"
    },
    {
        quote: `"It is during our darkest moments that we must focus to see the light."`,
        person: "Aristotle"
    },
];

button.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
