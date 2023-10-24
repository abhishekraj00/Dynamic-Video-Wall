import "./DefaultGrids.css";

const DefaultGrids = ({ handleCreateGrid, row, col }) => {
  const cells = new Array(row * col).fill();

  const dynamicGridCol = `repeat(${col},1fr)`;
  const dynamicGridRow = `repeat(${row},1fr)`;

  return (
    <div
      className="outer"
      style={{
        gridTemplateColumns: dynamicGridCol,
        gridTemplateRows: dynamicGridRow,
      }}
      onClick={() => handleCreateGrid(row, col)}
    >
      {cells?.map((item, index) => {
        return <div key={Math.random() + index} className="inner"></div>;
      })}
    </div>
  );
};

export default DefaultGrids;
