import * as React from "react";

interface Props {}

const Select: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <form action="">
        <select name="" id="">
          {[1, 2, 3, 4, 5].map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Select;
