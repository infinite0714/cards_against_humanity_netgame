import React from 'react';

function Card({ card, matchedCards, attemptCards, handleClick }) {
   
  const cardValue = card.getValue().toLowerCase();

  const handleCardClick = () => {
    handleClick(card);
  };

  return (
    <div className={`card ${(attemptCards.has(card) || matchedCards.has(card)) ? 'flipped' : ''} ${card.getSuit().toLowerCase()}`} onClick={handleCardClick}>
    
      <div className="back"></div>

      <div className="front">

      <div className="top">
        <div className="value">{card.getValue() !== '10' ? card.getValue()[0] : '10'}</div>
        <span className="suit">{card.getSuitSymbol()}</span>
      </div>

      <div className={`main ${cardValue}`}>
        {cardValue === 'ace' && (
          <div className="ace">
            {card.getSuitSymbol()}
          </div>
        )}
        {cardValue === 'king' && (
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="white" />
            <text x="50%" y="50%" textAnchor="middle" fill="currentColor" fontSize="50" dominantBaseline="middle">
              ♚
            </text>
          </svg>
        )}
        {cardValue === 'queen' && (
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="white" />
            <text x="50%" y="50%" textAnchor="middle" fill="currentColor" fontSize="50" dominantBaseline="middle">
              ♛
            </text>
          </svg>
        )}
        {cardValue === 'jack' && (
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="white" />
            <text x="50%" y="50%" textAnchor="middle" fill="currentColor" fontSize="50" dominantBaseline="middle">
              J
            </text>
          </svg>
        )}
        {['2', '3', '4', '5', '6', '7', '8', '9', '10'].includes(cardValue) && (
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="white" />
            <text x="50%" y="50%" textAnchor="middle" fill="currentColor" fontSize="50" dominantBaseline="middle">
              {cardValue}
            </text>
          </svg>
        )}
      </div>

      <div className="bottom">
        <div className="value">{card.getValue() !== '10' ? card.getValue()[0] : '10'}</div>
        <span className="suit">{card.getSuitSymbol()}</span>
      </div>

      </div>

    </div>
  );
}

export default React.memo(Card);