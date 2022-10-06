export const callback = (onSuccess) => {
  setTimeout(() => {
    onSuccess({ code: 1 });
  }, 3000);
};

export const callbackPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ code: 1 });
    }, 3000);
  });
};
