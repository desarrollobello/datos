export default desktopMenu
function desktopMenu () {
  const menuDesktopClick = document.querySelectorAll('.list-menu-desktop__show')
  menuDesktopClick.forEach((value, index) => {
    value.addEventListener('click', (e) => {
      e.preventDefault()
      const menuHidden = document.querySelectorAll('.list-menu-sub')
      menuHidden.forEach((value) => { value.style.height = '0px' })
      const menu = value.nextElementSibling
      let height = 0

      if (menu.clientHeight === 0) {
        height = menu.scrollHeight
      }
      menu.style.height = `${height}px`
    }, false)
  })
}
