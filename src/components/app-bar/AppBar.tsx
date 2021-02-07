import React, { useCallback, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import Button, { ButtonContainer, ButtonChildLabel } from '../button/Button';

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  height: 20%;
  border-bottom: 2px solid ${(props) => props.theme.secondary};
`;

const CenteredContent = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 16px;
  font-size: 22px;
  padding: 8px;
`;

const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: ${(props) => props.theme.primary};
  text-decoration: none;

  display: flex;
  align-items: center;
`;

const Label = styled.span`
  display: block;
  font-size: 32px;
  padding: 72px 0 16px 0;
`;

type Props = {};

const AppBar: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = useCallback(
    ({ target }) => {
      setSearchTerm(target.value);
    },
    [setSearchTerm],
  );

  return (
    <Container>
      <CenteredContent>
        <Label>The Amazing Marvel Catalog Search</Label>
        <Input value={searchTerm} onChange={handleChange} />
        <ButtonContainer>
          <Button>
            <StyledLink to={`/comics?search=${searchTerm}`}>
              <>
                <SearchIcon />
                <ButtonChildLabel>Search Comics</ButtonChildLabel>
              </>
            </StyledLink>
          </Button>
          <Button>
            <>
              <SearchIcon />
              <ButtonChildLabel>
                <StyledLink to={`/characters?search=${searchTerm}`}>
                  Search Characters
                </StyledLink>
              </ButtonChildLabel>
            </>
          </Button>
        </ButtonContainer>
        <Nav />
      </CenteredContent>
    </Container>
  );
};

export default AppBar;
