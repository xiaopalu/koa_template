class publicController {
  async demo(ctx) {
     ctx.body = {
       data: 'hello,World',
       code: 200,
     };
  }
}
export default new publicController();