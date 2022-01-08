function TableItem(props) {
  // cara ambil data name, age dan hobby
  const name = props.name
  const age = props.age
  const hobby = props.hobby

  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{hobby}</td>
   </tr>
  )
}

export default TableItem