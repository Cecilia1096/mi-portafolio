import React, { useState } from 'react'

const List = () => {
  const [listItems] = useState(Array.from(Array(30).keys(), (n) => n + 1))

  return (
    <div>
      <ul>
        {listItems.map((listItem) => (
          <li key={listItem.id}>List Item{listItem}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
