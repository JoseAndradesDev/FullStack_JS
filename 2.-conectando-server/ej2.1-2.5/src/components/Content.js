import Part from './Part.js'

const Content = ({part}) => {
    let {name, exercises} = part;
  
    return  <Part name={name} exercises={exercises}/>
  }

  export default Content;