function CustomList() {
  function performAction(e, index) {
    e.preventDefault()
    alert(`روی آیتم ${index} کلیک شد!`)
  }

  return (
    <ul className="list-group">
      <li className="list-group-item" onClick={(e) => performAction(e, 1)}>
        آیتم 1
      </li>
      <li className="list-group-item" onClick={(e) => performAction(e, 2)}>
        آیتم 2
      </li>
      <li className="list-group-item" onClick={(e) => performAction(e, 3)}>
        آیتم 3
      </li>
    </ul>
  )
}

export default CustomList
