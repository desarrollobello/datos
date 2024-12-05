(function () {
  let elementsNoLink = [ document.querySelectorAll('.nolink')]
  elementsNoLink = [...elementsNoLink]


  elementsNoLink.forEach((value, index) => {
    const link = [...value][0]
    if (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault()
      })
    }
  })
})()
