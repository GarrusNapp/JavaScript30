let keys = Array.from(document.getElementsByClassName('key'))

keys.forEach(
  function(k) {
    k.addEventListener('mousedown', function() {
      this.classList.add('active')
      setTimeout(() => this.classList.remove('active'), 100)
    })
  })


function playSound(e) {

}
