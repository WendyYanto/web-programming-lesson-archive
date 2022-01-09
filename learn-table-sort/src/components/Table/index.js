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
  const [isAscendingName, setAscendingName] = useState(false)
  const [ascendingArrowName, setAscendingArrowName] = useState('DEFAULT')
  
  // sekarang user -> sorting ASC
  // click -> sorting DESC

    // sekarang user -> sorting DESC
  // click -> sorting ASC

  // true dan false
  // isAscending = true -> ASC (A-Z)
  // isAscending = false -> DESC (Z-A)

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
    
    const sortValue = !isAscendingName

    if (sortValue) {
      setItems([...sortedItems])
      setAscendingArrowName('ASC')
    } else {
      const reversed = sortedItems.reverse()
      setItems([...reversed])
      setAscendingArrowName('DESC')
    }

    setAscendingName(sortValue)
  }

  function loadTableItems() {
    return items.map((item) => (
      <TableItem name={item.name} age={item.age} hobby={item.hobby} />
    ))
  }

  function renderNameArrow() {
    if (ascendingArrowName === 'DEFAULT') {
      return <span>&#8645;</span>
    } else if (ascendingArrowName === 'ASC') {
      return <span>&#8595;</span>
    } else {
      return <span>&#8593;</span>
    }
  }

  return (
    <table border="1">
      <tr>
        <th onClick={sortByName}>Name 
          { renderNameArrow() }
        </th>
        <th>Age</th>
        <th>Hobby</th>
      </tr>
      { loadTableItems() }
    </table>
  )
}

export default Table

// ASC -> panah ke bawah (&#8595;)
// DESC -> panah ke atas (&#8593;)
// DEFAULT -> panah atas dan bawah (&#8645;)