import React, { useState, useEffect, useCallback } from 'react';

const BlackCard = ({ text, style }) => {
  return (
    <div className="card black-cards" style={style}>
      <p>{text}</p>
    </div>
  );
};

const WhiteCard = ({ text, onSelect, style }) => {
  return (
    <div className="card white-cards" onClick={onSelect} style={style}>
      <p>{text}</p>
    </div>
  );
};

const GameBoard = () => {
  const [selectedWhiteCard, setSelectedWhiteCard] = useState(null);
  const [cardsPositions, setCardsPositions] = useState({
    blackCard: { x: 0, y: 0 },
    whiteCards: [],
  });

  const blackCards = ["The top number is ______"];
  const whiteCards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const calculatePositions = useCallback(() => {
    const cardRadius = 330; // Radius of the circle
    const numCards = whiteCards.length;
    const angleIncrement = (2 * Math.PI) / numCards; // Angle between each card
    const positions = [];

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate position for black card
    const blackCardX = centerX;
    const blackCardY = centerY;
    const blackCardPosition = { x: blackCardX, y: blackCardY };

    for (let i = 0; i < numCards; i++) {
      const angle = i * angleIncrement;
      const x = centerX + Math.cos(angle) * cardRadius;
      const y = centerY + Math.sin(angle) * cardRadius;
      positions.push({ x, y });
    }

    setCardsPositions({ blackCard: blackCardPosition, whiteCards: positions });
  }, [whiteCards]);

  const handleResize = useCallback(() => {
    calculatePositions();
  }, [calculatePositions]);

  useEffect(() => {
    calculatePositions();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [calculatePositions, handleResize]);

  const handleWhiteCardSelect = (index) => {
    setSelectedWhiteCard(whiteCards[index]);
  };

  return (
    <div className="game">
      <BlackCard
        text={blackCards[0]}
        style={{
          position: 'absolute',
          top: `${cardsPositions.blackCard.y}px`,
          left: `${cardsPositions.blackCard.x}px`,
        }}
      />

      {whiteCards.map((card, index) => (
        <WhiteCard
          key={index}
          text={card}
          onSelect={() => handleWhiteCardSelect(index)}
          style={{
            position: 'absolute',
            top: `${cardsPositions.whiteCards[index]?.y}px`,
            left: `${cardsPositions.whiteCards[index]?.x}px`,
          }}
        />
      ))}

      {selectedWhiteCard && (
        <div className="selected-card">
          <p>{selectedWhiteCard}</p>
        </div>
      )}
    </div>
  );
};

export default GameBoard;