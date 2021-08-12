import React, { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

import Contact from './components/Contact'
import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'
import Filter from './components/Filter'
import { throwStatement } from '@babel/types'

const App = () => {
  const [person, setPerson] = useState([])
  const [ newName, setNewName ] = useState()
  const [ newNumber, setNewNumber]=useState()
  const [filtr, setFiltr]=useState()




  const hook = () =>{
    console.log('effect')
    personService
      .getAll()
      .then(initialPerson=>{
        setPerson(initialPerson)
      })
  }
  useEffect(hook, [])
  console.log('render', person.length, 'person')

  const addPerson=(event)=>{
    event.preventDefault()
    const personObject={
      name: newName,
      number: newNumber,
      id: person.length+1,
    }
    personService
      .create(personObject)
        .then(returnedPerson=>{
          setNewName('')
          setPerson(person.concat(returnedPerson))
          setNewNumber('')
        })

    const personarray = person.map(e=>e.name)
    const oldPerson = person.filter(e => e.name === newName)
    const _id = oldPerson.map(e => e.id)
    
    if (personarray.includes(personObject.name)){
      const result = window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)
      if (result)
      {personService
        .update(_id, personObject)
        .then(returnedPerson=>{
          setPerson(person.map(person=>person.id===returnedPerson.id ? returnedPerson : person))
        })}
    }


          }

      



 

 

  const handleNameChange=(event)=>{
    setNewName(event.target.value)
  }
  const handleNumberChange=(event)=>{
    setNewNumber(event.target.value)
  }
  const handleSearchChange=(event)=>{
    setFiltr(event.target.value)
  }
 
  const filtredPerson=person.filter(item=>item.name.toLowerCase().includes(filtr))
  
  const short = {
    newName,
    newNumber,
    handleNameChange,
    handleNumberChange,
    handleSearchChange,
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search:</h2>
        <Filter filtr={filtr} short={short}/>
      <h2>Add New:</h2>
          <ContactForm addPerson={addPerson} short={short}/>
      <h2>Numbers</h2>
      <ul>
          <Contacts contacts={filtr ? filtredPerson :person} setPerson={setPerson}/>
      </ul>
    </div>
  )
}

export default App