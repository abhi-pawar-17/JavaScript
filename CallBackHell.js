function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;

  script.onload = function () {
    console.log("successfully loaded");

    callback();
  };
  script.onerror = function () {
    callback(new Error("Src got some error"));
  };
  document.body.appendChild(script);
}

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
  function result(error) {
    if (error) {
      console.log(error);
    }

    loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
      function result(error) {
        if (error) {
          console.log(error);
        }
        loadScript(
          "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundl3.min.js",
          function result(error) {
            if (error) {
              console.log(error);
            }
          }
        );
      }
    );
  }
);
