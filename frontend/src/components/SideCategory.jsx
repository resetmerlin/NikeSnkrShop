import React from "react";

const SideCategory = ({ colors, onColorCheckboxChange }) => {
  let checkboxColor = [];

  const checkboxHandler = (event) => {
    if (event.target.checked) {
      checkboxColor.push(event.currentTarget.id);
      if (isDuplicated(event.currentTarget.id)) {
        const duplicated = checkboxColor.reduce((acc, string) => {
          if (
            checkboxColor.filter((s) => s === string).length > 1 &&
            !acc.includes(string)
          ) {
            acc.push(string);
          }
          return acc;
        }, []);
        for (let index = 0; index < duplicated.length; index++) {
          checkboxColor = checkboxColor.filter(
            (word) => word !== duplicated[index]
          );
        }
      }
    } else {
      checkboxColor = checkboxColor.filter((id) => id !== event.target.id);
    }
    onColorCheckboxChange(checkboxColor);
  };

  function isDuplicated(string) {
    return checkboxColor.filter((s) => s === string).length > 1;
  }
  return (
    <>
      {" "}
      <div className="Category-side">
        <div className="Category-side__colors">
          <input type="checkbox" id="color-toggle" />
          <label htmlFor="color-toggle" className="color-toggle-button">
            <span>Colors</span>
            <i className="bx bx-plus"></i>
            <i className="bx bx-minus"></i>
          </label>

          <div className="Category-side__colors__wrap">
            {colors.map((colorArray) =>
              colorArray.map((color) => (
                <>
                  <input
                    key={color}
                    type="checkbox"
                    className="color__checkbox"
                    id={color}
                    onClick={checkboxHandler}
                  />
                  <label htmlFor={color} className="color-button">
                    <div
                      key={checkboxColor}
                      style={{
                        background: `${color}`,
                      }}
                    ></div>
                  </label>
                </>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideCategory;
