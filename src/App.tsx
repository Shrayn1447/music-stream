import Children from "./components/Children";
import styled from "styled-components";
import { x } from "@xstyled/styled-components";

const ChildrenStyled = styled(Children)`
  div > div {
    color: red;
  }
`;

const App = () => {
  return <>
    <x.div color={'red'} fontSize={'100px'}>
        sdkfjaddasdasdasdasdasksjfkl;asnfkasfas
    </x.div>
  </>;
};

export default App;
