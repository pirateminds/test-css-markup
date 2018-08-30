function loader(html, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          //do something with xhr.responseText
          callback && callback(xhr);
      }
  };
  xhr.open('GET', html);
  xhr.send();
}
