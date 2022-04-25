const middleware = (store) => (next) => (action) => {
  console.log("we in meddleware");

  setTimeout(() => {
    console.log("timeout in meddleware");
  }, 1000);
};

export default middleware;
