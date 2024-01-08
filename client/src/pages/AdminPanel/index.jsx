import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../context/userContext'
import './index.scss'

function Admin() {
  const { token, decodedToken } = useContext(userContext)
  const [user, setuser] = useState(null)


  const fetchusers = () => {
    fetch("http://localhost:3000/users",
      {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setuser(data)
      }
      )
      .catch(err => console.log(err))
  }


  useEffect(() => {
    fetchusers()
  }, [token])


  function handleDelete(id) {

    fetch("http://localhost:3000/users/" + id,
      {
        method: "delete",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        fetchusers()
      }
      )
      .catch(err => console.log(err))
  }

  function handleUpdate(id) {

    fetch("http://localhost:3000/users/" + id,
      {
        method: "put",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        fetchusers()
      }
      )
      .catch(err => console.log(err))
  }
  return (
    <section id='adminPanel'>
      <h1>Welcome Admin!</h1>
      <ol>
        {user && user.map(x => (
          <li key={x._id}>
            <span>{x.username}-{x.role}-{x.password}</span>
            <div className="buttons d-flex gap-4">
              <button onClick={() => handleDelete(x._id)}>delete</button>
              <button onClick={() => handleUpdate(x._id)}>Update</button>
            </div>
          </li>
        )
        )}
      </ol>
    </section>
  )
}

export default Admin