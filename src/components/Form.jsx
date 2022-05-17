function Form() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('فرم ثبت شد!')
    // کاری که بعد از ثبت شدن فرم قرار است انجام شود
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="روی دکمه ثبت کلیک کنید!"
      />
      <button type="submit" className="btn btn-primary mt-2">
        ثبت
      </button>
    </form>
  )
}

export default Form
