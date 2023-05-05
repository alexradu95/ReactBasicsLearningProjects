import React from 'react';

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  showIcon?: string;
  children: React.ReactNode;
}

function Card(props: CardProps) {
  return (
    <>
      <div>
        {props.showIcon === "true" ? (
          <h2>
            {props.icon} - {props.title}
          </h2>
        ) : (
          <h2>{props.title}</h2>
        )}
        {props.children}
      </div>
    </>
  );
}

export default Card;
