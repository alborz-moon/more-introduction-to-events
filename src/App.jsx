import Form from './components/Form'
import CustomInput from './components/CustomInput'
import CustomInput2 from './components/CustomInput2'
import CustomList from './components/CustomList'
import CourseList from './components/CourseList'
import CustomLink from './components/CustomLink'

function App() {
  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header">رویداد onSubmit</div>
        <div className="card-body">
          <Form />
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">رویداد onFocus</div>
        <div className="card-body">
          <CustomInput />
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">رویداد onBlur</div>
        <div className="card-body">
          <CustomInput2 />
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">پاس دادن آرگومان به رویدادها</div>
        <div className="card-body">
          <div className="card-title">
            روی هر کدام از آیتم‌های زیر کلیک کنید:
          </div>
          <CustomList />
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">
          پاس دادن آرگومان به رویدادها (مثال لیست‌ها و کلیدها)
        </div>
        <div className="card-body">
          <div className="card-title">
            روی هر کدام از آیتم‌های زیر کلیک کنید:
          </div>
          <CourseList />
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">
          Link
        </div>
        <div className="card-body">
          <div className="card-title">
            Link for test of preventDefault(sheet cheat)
          </div>
          <CustomLink />
        </div>
      </div>
    </div>
  )
}

export default App
