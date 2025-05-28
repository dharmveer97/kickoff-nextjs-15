'use client'
import React, { useState } from 'react'

interface UserData {
  firstName: string
  lastName: string
  middleName: string
  email: string
}

interface Props {
  initialUserData: UserData
}

const UserFormComponent = ({ initialUserData }: Props) => {
  const [user, setUser] = useState(initialUserData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edit User Info</h2>

      {['firstName', 'middleName', 'lastName', 'email'].map((field) => (
        <div key={field} className="mb-4">
          <label htmlFor={field} className="block font-medium mb-1 capitalize">
            {field}
          </label>
          <input
            id={field}
            name={field}
            type="text"
            value={user[field as keyof UserData]}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder={`Enter ${field}`}
          />
        </div>
      ))}

      <pre className="bg-gray-100 p-4 rounded mt-4 text-sm">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  )
}

export default UserFormComponent
