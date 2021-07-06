import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

// {books} must match perfect
import { data } from './books'
import Book from './Book'

function BookList() {
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
