import styled from "styled-components";
import COLORS from "../../../../data/colors";

const Cont = styled.div`
  border: 1px solid ${(props) => props.colors.ultraLightGrey};
  background-color: #fff;
  padding: 8px;
`;

const Instructions = ({ instructions }) => {
  return (
    <Cont colors={COLORS}>
      <h5 className="mar-bottom-4">Instructions</h5>
      <div className="grey-line mar-bottom-8"></div>
      <div className="instruction-box">
        {instructions.map((instruction, index) => {
          return (
            <div className="">
              <h5 className="mar-bottom-8">
                ({index + 1}) - {instruction.title}
              </h5>
              <p className="mar-bottom-8">{instruction.content}</p>
              <div className="grey-line mar-bottom-8"></div>
            </div>
          );
        })}
      </div>
    </Cont>
  );
};

export default Instructions;
