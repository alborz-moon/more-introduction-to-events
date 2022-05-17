function CustomInput() {
  const handleFocus = () => {
    console.log('روی اینپوت فوکوس شد!')
  }

  return (
    <input
      type="text"
      className="form-control"
      onFocus={handleFocus}
      placeholder="روی این اینپوت کلیک کنید و نتیجه را در کنسول مرورگر ببینید!"
    />
  )
}

export default CustomInput
