import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from '@emotion/styled';

const Main = () => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <>
      <p className="red">外のテキスト</p>
      <Container>
        <Ul>
          <p>ulのテキスト</p>
          <Li>liのテキスト</Li>
          <Li>liのテキスト</Li>
        </Ul>
        <Ul2>
          <p>ulのテキスト</p>
          <Li2>li2のテキスト</Li2>
          <Li2>li2のテキスト</Li2>
        </Ul2>
        <button onClick={() => setIsHover(!isHover)}>hover</button>
      </Container>
    </>
  );
};

const Container = styled('div')`
  & .red {
    color: red;
  }
`;

const Ul = styled('ul')`
  color: black;
`;
const Li = styled('ul')`
  color: black;
`;

const Ul2 = styled('ul')`
  color: black;

`;
const Li2 = styled('ul')`
  color: black;
  &:hover{
    color:red
  }
`;

ReactDOM.render(<Main />, document.getElementById('app'));
