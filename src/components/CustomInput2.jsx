function CustomInput2() {
  const handleFocus = () => {
    console.log('روی اینپوت فوکوس شد!')
  }

  const handleBlur = () => {
    console.log('فوکوس از روی اینپوت برداشته شد!')
  }

  return (
    <input
      type="text"
      className="form-control"
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="روی این اینپوت کلیک کنید سپس در جایی خارج از آن کلیک کنید و نتیجه را در کنسول مرورگر ببینید!"
    />
  )
}

export default CustomInput2
