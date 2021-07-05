import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

//setup variables
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/51B1gVTuEdS.jpg',
  title: 'The Thursday Murder Club',
  author: 'Richard Osman',
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/51xuV3QtrSL.jpg',
  title: 'The Family Upstairs',
  author: 'Lisa Jewell',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsa
          velit. Sit corrupti mollitia soluta deleniti dolore, beatae sunt
          voluptate.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = (props) => {
  const { img, title, author, children } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
