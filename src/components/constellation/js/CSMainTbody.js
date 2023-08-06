import React from "react";
import "../scss/CSMain.scss";

const CSMainTbody = ({ open }) => {
  // const { Title, Date } = board.board;

  const modalOpen = () => {
    open();
  };

  return (
    <>
      <tr id='News-tbody'>
        <td className='td-title' onClick={modalOpen}>
          타이틀
        </td>
        <td className='td-date'>{Date}</td>
      </tr>
    </>
  );
};

export default CSMainTbody;
