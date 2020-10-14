import React from 'react'
import { CardContent, CardInformation, CardText, CardDateText } from './styles'

export default function CardItem() {
  return (
    <CardContent>
      <img src="https://123milhas.com/img/best-destinations/city/melhores-destinos-brasilia.jpg" alt="" />
      <CardInformation>
        <CardText>
          <h3>Brasilia</h3>
          <p>R$ 1.678,39</p>
        </CardText>
        <CardDateText>
          <p>ida</p>
          <p>01/10/20</p>
        </CardDateText>
        <CardDateText>
          <p>volta</p>
          <p>18/10/20</p>
        </CardDateText>
      </CardInformation>
    </CardContent>
  )
}
