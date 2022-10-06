import { callback, callbackPromise } from "../src/api";

describe("异步测试", () => {
  it("测试 callback", (done) => {
    callback((result) => {
      expect(result).toEqual({ code: 1 });
      done();
    });
  });

  it("测试 callbackPromise done", (done) => {
    callbackPromise().then((result) => {
      expect(result).toEqual({ code: 1 });
      done();
    });
  });

  it("测试 callbackPromise async", async () => {
    const result = await callbackPromise();
    expect(result).toEqual({ code: 1 });
  });

  it("测试 callbackPromise resolves", async () => {
    (expect(callbackPromise()).resolves as any).toMatch({ code: 1 });
  });
});
