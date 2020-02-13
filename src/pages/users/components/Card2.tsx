import React, { FunctionComponent } from 'react'; 

type CardProps = {
  title: string,
  paragraph: string
}

export const Card2: FunctionComponent<CardProps> = ({ title, paragraph, children }) => <div>
  <h2>{ title }</h2>
  <p>
    { paragraph }
  </p>
  { children }
</div>

export default Card2;