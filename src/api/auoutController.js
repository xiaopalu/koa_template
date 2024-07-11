class auoutController {
  async demo(ctx) {
      ctx.body = {
        data: 'hello,World,this is auoutController api!!!',
        code: 200,
      };
  }
}
export default new auoutController();