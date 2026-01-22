export default defineEventHandler((event) => {
  if (event.node.req.url === '/') {
    return sendRedirect(event, '/login', 302)
  }
})
