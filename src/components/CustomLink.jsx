function CustomLink() {
  const handleClick = (event) => {
    event.preventDefault()
    console.log('لینک مورد نظر کلیک شد')
    // کاری که بعد از کلیک شدن روی لینک قرار است انجام شود
  }

  return (
    <a href="https://quera.ir" onClick={handleClick}>
      کوئرا
    </a>
  )
}

export default CustomLink
