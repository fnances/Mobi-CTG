
const player = src => {
  const HTML = `
  <html>
    <head>
      <style>
       #video {
         width: 100vw;
         height: 100vh;
       }
       #source {
         background-color: red;
         font-size: 36px;
       }
      </style>
    </head>
    <body>
      <video src="../../video/1.mp4" controls id="video">
      </video>
      <p id="source"></p>

      <script>
        (function () {
          var v = document.getElementById("video");
          v.play();
          var source = document.getElementById("source");
          source.innerHTML = "hello";
        })();


      </ script>
    </body>

  </html>
  `;

  return HTML;
};


export default player;
