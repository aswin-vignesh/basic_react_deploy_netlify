import React from 'react'

const Footer = ({length}) => { // or props

    // const today = new Date();
    // const day = today.getDate();

  return (
    <footer>
        {/* <p>Copyright &copy; {today.getFullYear()}</p> */}
        {/* <p>{props.length}</p>   */}
        <p>{length} List {length === 1  ? "Item" : "Items"}</p>  
        
    </footer>
  )
}

export default Footer