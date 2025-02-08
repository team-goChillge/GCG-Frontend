import styled from "styled-components";

function App() {
  return (
    <>
      <ChildBoxOne></ChildBoxOne>
      <div></div>
      <h1 class="text-3xl">TEST</h1>
    </>
  );
}

const ChildBoxOne = styled.div`
  background-color: pink;
  width: 100px;
  height: 100px;
`;

export default App;
