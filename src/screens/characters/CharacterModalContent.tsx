import React from 'react';
import styled from 'styled-components';
import { Character } from '../../types/CharacterTypes';

const Container = styled.div`
  position: relative;
  overflow: hidden;

  &:before {
    content: 'character';
    position: absolute;
    top: 20px;
    padding: 8px 48px 8px 40px;
    color: white;
    background: rgba(0, 0, 0, 0.9);
    transform: translateX(-30px) rotate(-35deg);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;

  color: white;
  font-size: 30px;
  font-weight: bold;
  line-height: 65px;
  margin-bottom: 15px;
  background: rgba(175, 0, 0, 0.6);
`;

const Body = styled.div`
  display: flex;
  padding: 16px 24px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  color: white;
  padding: 16px 24px;
  background: rgba(175, 0, 0, 0.6);
`;

const Description = styled.div`
  font-size: 20px;
  line-height: 24px;
  margin-left: 32px;
`;

const Portrait = styled.img`
  width: 425px;
`;

type InfoProps = {
  character: Character;
};

const Info: React.FC<InfoProps> = ({ character }: InfoProps) => {
  const { name, description, series, stories } = character;
  const informations = `
    ${name} appears in ${series.available} series and ${stories.available} stories.  
  `;

  return (
    <>
      {description != null && description.length > 0 && <br />}
      {informations}
    </>
  );
};

type WikiLinkProps = {
  character: Character;
};

const WikiLink: React.FC<WikiLinkProps> = ({ character }: WikiLinkProps) => {
  const { name, urls } = character;

  const link = urls.find((item) => item.type === 'wiki');

  return (
    <>
      Click <a href={link?.url}>here</a> to check {`${name}'s`} wiki page.
    </>
  );
};

interface Props {
  character: Character;
  dataProvider: string | undefined;
}

const CharacterModalContent: React.FC<Props> = ({
  character,
  dataProvider,
}: Props) => {
  const { name, description, thumbnail } = character;

  return (
    <Container>
      <Header>{name}</Header>
      <Body>
        <Portrait alt={name} src={`${thumbnail.path}.${thumbnail.extension}`} />
        <Description>
          {description}
          <Info character={character} />
          <WikiLink character={character} />
        </Description>
      </Body>
      <Footer>{dataProvider}</Footer>
    </Container>
  );
};

export default CharacterModalContent;