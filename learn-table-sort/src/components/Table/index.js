import TableItem from './TableItem'
import { useState } from 'react'

function Table() {
  const defaultItems = [
    {
      name: 'James',
      age: 19,
      hobby: 'Swimming',
    },
    {
      name: 'Angel Baru',
      age: 8,
      hobby: 'Swimming',
    },
    {
      name: 'Zidd',
      age: 13,
      hobby: 'Sleeping',
    },
    {
      name: 'Yes',
      age: 5,
      hobby: 'Badminton',
    },
  ]

  const [items, setItems] = useState(defaultItems)

  function sortByName() {
    // ambil data yang sudah ke sorting 
    // terus setItems()

    // 'A', 'B', 'C', 'D'

    // dalam kondisi perbandingan: firstItem secondItem

    // return -1 -> jika pengen firstItem, secondItem
    // return 1 -> jika pengen secondItem, firstItem

    // firstName = "A"
    // secondName = "B"
    // secondName > firstName

    const sortedItems = defaultItems.sort(function(firstItem, secondItem) {
      const firstName = firstItem.name
      const secondName = secondItem.name

      if (firstName < secondName) {
        // ini mau urutkan firstName baru secondName
        return -1
      } else {
        // ini mau urutkan secondName baru firstName
        return 1
      }
    })

    setItems([...sortedItems])
  }

  function loadTableItems() {
    return items.map((item) => (
      <TableItem name={item.name} age={item.age} hobby={item.hobby} />
    ))
  }

  return (
    <table border="1">
      <tr>
        <th onClick={sortByName}>Name</th>
        <th>Age</th>
        <th>Hobby</th>
      </tr>

      {loadTableItems()}
    </table>
  )
}

export default Table
