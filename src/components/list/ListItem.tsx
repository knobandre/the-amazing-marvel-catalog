import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Thumbnail } from '../../types/CommonTypes';

const ItemContainer = styled.div`
  position: relative;

  border: 1px solid black;
  border-radius: 3px;
  margin: 0 8px 16px 8px;
  flex: 0 1 400px;
  height: 450px;
  overflow: hidden;
  cursor: pointer;
`;

enum DisplayPropEnum {
  title,
  name,
}

type Props<T> = {
  item: T;
  onClick: () => void;
  displayProp: keyof typeof DisplayPropEnum;
};

const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type CardInfoProps = {
  isHovering: boolean;
};

const CardInfo = styled.div<CardInfoProps>`
  position: absolute;
  top: ${(props) => (props.isHovering ? '0' : '90%')};
  bottom: 0;

  background: rgba(0, 0, 0, ${(props) => (props.isHovering ? '0.9' : '0.5')});
  padding: 8px;
  color: white;
  width: 100%;

  transition: top 0.2s ease-out, background 0.3s;

  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  padding: 8px;
`;

const ShowDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type BaseT = {
  thumbnail: Thumbnail;
  title?: string;
  name?: string;
};

function ListItem<T extends BaseT>({ item, displayProp, onClick }: Props<T>) {
  const [isHovering, setIsHovering] = useState(false);
  const { thumbnail } = item;

  const handleMouseEnter = useCallback(() => setIsHovering(true), [
    setIsHovering,
  ]);
  const handleMouseLeave = useCallback(() => setIsHovering(false), [
    setIsHovering,
  ]);

  return (
    <ItemContainer
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Portrait
        alt={item[displayProp]}
        src={`${thumbnail.path}.${thumbnail.extension}`}
      />
      <CardInfo isHovering={isHovering}>
        <>
          <Name>{item[displayProp]}</Name>
          {isHovering && <ShowDetails>Click to see details</ShowDetails>}
        </>
      </CardInfo>
    </ItemContainer>
  );
}

export default ListItem;