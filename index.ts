import figlet from 'figlet';


const body = figlet.textSync('Hello DevGT!', {
    font: 'Small Slant',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
})

const server = Bun.serve({
    port: 3000,
    fetch(request: Request) {
        return new Response(body);
    },
})

console.log(`Listening on http://localhost:${server.port}/`);