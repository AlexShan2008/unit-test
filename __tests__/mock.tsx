import axios from "axios";
import { exec, createInstance, getUsers, delay } from "../src/mock";

jest.mock("axios"); // 让 jest 自己模拟 axios 的接口

describe("异步测试", () => {
  it("测试 exec", () => {
    const callback = jest.fn();
    callback.mockReturnValueOnce("abc");
    callback.mockReturnValueOnce("def");
    exec(callback);
    expect(callback).toBeCalled;
    expect(callback).toBeCalledTimes(2);
    expect(callback).toBeCalledWith("123");
    console.log(callback.mock, "mock");
  });

  it("测试 createInstance", () => {
    const callback = jest.fn();
    createInstance(callback);
    console.log(callback.mock);
  });

  it("测试 getUsers", async () => {
    (axios.get as any).mockResolvedValue({
      data: {
        code: 0,
      },
    });
    const users = await getUsers();
    expect(users.data).toEqual({ code: 0 });
  });

  jest.useFakeTimers();

  it("测试 delay", async (done) => {
    delay((result) => {
      expect(result).toEqual(5000);
      done();
    }, 5000);
    jest.runAllTimers();
  });
});
