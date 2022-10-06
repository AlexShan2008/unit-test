let counter = 0;

describe("hooks", () => {
  beforeAll(() => {
    console.log("before all");
  });

  beforeEach(() => {
    console.log("before each");
  });

  afterEach(() => {
    console.log("after each");
  });

  afterAll(() => {
    console.log("after all");
  });

  test("测试用例1", async () => {
    counter++;
    console.log(counter);
  });

  test("测试用例2", async () => {
    counter++;
    console.log(counter);
  });
});
