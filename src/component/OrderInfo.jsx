import React from "react";
import styled from "styled-components";

const OrderInfo = styled.div`
  display: flex;
  background-color: #f1efef;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const OrderInfoImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 1rem;
`;
const OrderInfodes = styled.div`
  width: 60%;
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OrderInfos = () => {
  return (
    <OrderInfo>
      <OrderInfoImage
        src="https://i.ibb.co/THscJzt/IMG-20210425-WA0076.jpg"
        alt=""
      />
      <OrderInfodes>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsam,
        cum hic at ipsum laboriosam aliquid vero reprehenderit voluptatem autem
        quas quasi accusamus, expedita quae minima, illum sit nesciunt et!
      </OrderInfodes>
    </OrderInfo>
  );
};

export default OrderInfos;
