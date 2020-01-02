import React, { useEffect, useState } from 'react'

const Ex = (props) => {
  const [count, setCount] = useState(0)
  console.log("Exxxxxxxxxxxxxxx",props)
  useEffect(() => {
    console.log(count)
  })
  return (
    <button onClick={()=>setCount(count +1)} >
      click{count}
    </ button>
  )
}

export default Ex


// Ex と Ex1 は, renderingについて良くわかる例である 