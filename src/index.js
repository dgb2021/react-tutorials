import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

//setup variables
const books = [
  {
    img: 'https://m.media-amazon.com/images/I/51B1gVTuEdS.jpg',
    title: 'The Thursday Murder Club',
    author: 'Richard Osman',
  },
  {
    img: 'https://m.media-amazon.com/images/I/51xuV3QtrSL.jpg',
    title: 'The Family Upstairs',
    author: 'Lisa Jewell',
  },
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/511nW6vSBhS.jpg',
    title: 'The Midnight Library',
    author: 'Matt Haig',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book book={book}></Book>
      })}
    </section>
  )
}
const Book = (props) => {
  const { img, title, author } = props.book
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
