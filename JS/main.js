var quotes_box = [
    {
        content: "&quot;Be yourself; everyone else is already taken.&quot;",
        author: "--Oscar Wilde"
    },
    {
        content: "&quot;So many books, so little time.&quot;",
        author: "--Frank Zappa"
    },
    {
        content: "&quot;A room without books is like a body without a soul.&quot;",
        author: "--Marcus Tullius Cicero"
    },
    {
        content: "&quot;Be the change that you wish to see in the world.&quot;",
        author: "--Mahatma Gandhi"
    },
    {
        content: "&quot;You miss 100% of the shots you don't take.&quot;",
        author: "--Wayne Gretzy"
    },
    {
        content: "&quot;Resentment is like drinking poison and waiting for your enemies to die.&quot;",
        author: "--Nelson Mandela"
    },
    {
        content: "&quot;Do not take life too seriously. You will not get out alive.&quot;",
        author: "--Elbert Hubbard"
    },
    {
        content: "&quot;The best revenge is massive success.&quot;",
        author: "--Frank Sinatra"
    },
    {
        content: "&quot;It's not what happens to you, but how you react to it that matters.&quot;",
        author: "--Epictetus"
    },
    {
        content: "&quot;Beware of what you become in pursuit of what you want.&quot;",
        author: "--Jim Rohn"
    }
];

function display_quote() {
    var index = Math.floor(Math.random() * 10);
    document.getElementById("quotes").innerHTML = `<p>${quotes_box[index].content}</p>
                                                    <p>${quotes_box[index].author}</p>`
}

