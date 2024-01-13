import { Elysia } from "elysia";

const dev = 'DevGT'
const app = new Elysia().get("/", () => `Hello ${dev}`)
.get('home/:id', ({ params: { id } }) => {return {id: id}})
.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
