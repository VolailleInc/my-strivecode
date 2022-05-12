import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  //flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;
  height: 2.6rem;
  width: 25rem;
  border: 0.5px solid #b5b3b3;
  border-radius: 0px;
  background-color: #efefef;
`;

const Input = styled.input`
  border: 0;
  padding-left: 0.3rem;
  border-radius: 0;
  width: 25rem;
  height: 2.5rem;
  font-weight: 510;
  line-height: 1.4;
  font-size: 1.3rem;
  color: #858687;
`;
const Button = styled.button`
  position: relative;
  top: 0;
  left: 0;
  width: 60px;
  height: 2.5rem;
  border: 0px;
  background-color: #b5b3b3;
  border-radius-right: 50px;
`;
function SearchBar() {
  return (
    <Form>
      <Input type="text" name="" id="" placeholder="search for a course..." />

      <Button>
        <FaSearch
          style={{
            color: "#FFF",
            fontSize: "1.2rem",
          }}
        />
      </Button>
    </Form>
  );
}

export default SearchBar;
