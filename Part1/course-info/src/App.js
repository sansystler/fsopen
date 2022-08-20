const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}



const Content = (props) => {
  return(<div>
    <p>{props.content.part1} {props.content.exercises1}</p>
    <p>{props.content.part2} {props.content.exercises2}</p>
    <p>{props.content.part3} {props.content.exercises3}</p>
  </div>
  )
}

const Total = (props) => {
  return (
    <p>Total number of exercises {props.total}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content content={{ part1, part2, part3, exercises1, exercises2, exercises3 }} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
