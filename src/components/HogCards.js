import React, {useState} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function HogCards({ name, img, specialty, weight, medal } ) {

  const [isShown, setIsShown] = useState(false)

  function handleClick() {
    setIsShown((isShown) => !isShown)
  }


  return (
  <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      {/* <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta> */}
      <Card.Description>
        <button onClick={handleClick}> {isShown ? "Show Less Data" : "Show More Data"}</button>
        <p>Specialty: {isShown ?  specialty : ""}</p> 
        <p>Weight: {isShown ? weight : "" }</p>
        <p>Highest medal achieved: {isShown ? medal : ""}</p>

      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
  )
}

export default HogCards