export default mobileMenu
function mobileMenu () {
  const menuClick = document.querySelectorAll('.list-mobile > .list-mobile__item > .list-mobile__link--click')
  menuClick.forEach((value, index) => {
    value.addEventListener('click', (e) => {
      e.preventDefault()
      const menuShow = document.querySelectorAll('.list__show')
      menuShow.forEach((value) => { value.style.height = '0px' })
      const menu = value.nextElementSibling
      let height = 0

      if (menu.clientHeight === 0) {
        height = menu.scrollHeight
      }
      menu.style.height = `${height}px`
    })
  })
}
