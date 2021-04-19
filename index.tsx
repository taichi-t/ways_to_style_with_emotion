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
          <P className="p">ulのテキスト</P>
          <Li>liのテキスト</Li>
          <Li>liのテキスト</Li>
        </Ul>
        <Ul2>
          <P>ulのテキスト</P>
          <Li2>li2のテキスト</Li2>
          <Li2>li2のテキスト</Li2>
        </Ul2>
        <button onClick={() => setIsHover(!isHover)}>hover</button>
      </Container>
    </>
  );
};

const Container = styled('div')`
  & > * > .p {
    color: red;
  }
`;


const Ul = styled('ul')`
  color: black;
`;


const P = styled('p')`
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
`;

ReactDOM.render(<Main />, document.getElementById('app'));
