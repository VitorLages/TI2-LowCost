var defaultThreads = [
    {
        id: 1,
        title: "Topico 1",
        author: "Mario",
        date: Date.now(),
        content: "Conteudo do Topico 1",
        comments: [
            {
                id: 1,
                author: "Marcos",
                date: Date.now(),
                content: "Olá"
            },
            {
                id: 2,
                author: "Lucas",
                date: Date.now(),
                content: "Ei para você!"
            }
        ]
    },
    {
        id: 2,
        title: "Topico 2",
        author: "Luiz",
        date: Date.now(),
        content: "Conteudo do Topico 2",
        comments: [
            {
                id: 1,
                author: "Joao",
                date: Date.now(),
                content: "Eai"
            },
            {
                id: 2,
                author: "Carlos",
                date: Date.now(),
                content: "Hey hey"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}