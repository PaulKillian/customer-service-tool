import Calculator from "awesome-react-calculator";

const style = {
  height: '24rem',
  width: '15rem'
}

const cal = () => {
  const handleInput = input => {
    console.log(`${input.expression} is shown in the calculator, User clicked the ${input.key}`)
  }

  const onResultChange = newResult => {
    console.log(newResult)
    console.log(`${newResult.expression} is validated as ${newResult.result} `)
  }
 
  return (
    <div style={style}>
      <h1>Calculator</h1>
      <Calculator
        onNewInput={handleInput}
        onResultChange={onResultChange}
      />
    </div>
  )
}

export default cal
