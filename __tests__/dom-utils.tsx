import { remove, addEventListener } from "../src/dom-utils";

test("测试 remove", () => {
  document.body.innerHTML = `
      <div id="parent">
        <div id="child">Child</div>
      </div>
    `;

  const parent = document.getElementById("parent");
  expect(parent?.nodeName.toLocaleLowerCase()).toBe("div");
  const child = document.getElementById("child");
  expect(child?.nodeName.toLocaleLowerCase()).toBe("div");
  remove(child);
  expect(document.getElementById("child")).toBeNull();
});

test("测试 addEventListener", () => {
  document.body.innerHTML = `
      <div id="parent">
        <button id="clickMe">Click</button>
      </div>
    `;

  const clickMe = document.getElementById("clickMe");
  addEventListener(clickMe, "click", () => {
    if (clickMe) {
      clickMe.innerHTML = "clicked";
    }
  });
  clickMe?.click();
  expect(clickMe?.innerHTML).toBe("clicked");
});
