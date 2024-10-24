import { FC, HTMLAttributes } from "react";

const Children: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={className}>
      1
      <div>
        2
        <div>
          3
          <div>
            4<div>5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Children;
