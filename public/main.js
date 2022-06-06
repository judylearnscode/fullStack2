const submitBtn = document.querySelector('.submit')
submitBtn.addEventListener('click', () => {
    fetch('upload')
    .then(res => {if (res.ok){return res.json()}})
    .then(window.location.reload())
})

var thumbUp = document.getElementsByClassName("fa-solid fa-heart");
var trash = document.getElementsByClassName("fa-solid fa-trash-can");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
Array.from(trash).forEach(function(element) {
    element.addEventListener('click', function(){
      const name = this.parentNode.parentNode.childNodes[1].innerText
      const msg = this.parentNode.parentNode.childNodes[3].innerText
      fetch('messages', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': name,
          'msg': msg
        })
      }).then(function (response) {
        window.location.reload()
      })
    });
});