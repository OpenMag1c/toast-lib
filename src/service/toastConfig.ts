const ToastConfig = (function () {
  let config: any;

  function createToastConfig() {
    const object = {};
    return object;
  }

  return {
    getToastConfig() {
      if (!config) {
        config = createToastConfig();
      }
      return config;
    },
  };
})();

export default ToastConfig;
