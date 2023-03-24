import React, { useState }  from 'react'
import "../style.css";

const Information = [
    {
        id: 1,
        data: 'Flat  surface, surrounded by Ston'
    },
    {
        id: 2,
        data: 'Flat  surface, surrounded by Grass'
    },
    {
        id: 3,
        data: 'Flat  surface, surrounded by Grass'
    },
    {
        id: 4,
        data: 'Elevation on one or two sides of the pool'
    },
    {
        id: 5,
        data: 'Pool is against a wall or fence'
    },
    {
        id: 6,
        data: 'Other',
    }
]

const Pool = () => {
  const [active, setActive] = useState(null);

  return (
    <>
       <section id="bgColor" className="p-3 border rounded">
              <h6>Pool Location</h6>
              <ul className='d-flex flex-wrap p-2'>                 
                {Information.map((item) => (
                    <li key={item.id} className={`border rounded p-2 m-1 box-div list-group-item ${active === item && "active"}`} onClick={() => setActive(item)}> 
                        <p>{item.data}</p>
                    </li>
                ))}                  
              </ul>              
           </section>
    </>
  )
}

export default Pool;