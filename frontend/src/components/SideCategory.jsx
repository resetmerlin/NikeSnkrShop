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
          <span>Colors</span>
          <div className="Category-side__colors__wrap">
            {colors.map((colorArray) =>
              colorArray.map((color) => (
                <>
                  <label htmlFor={color} className="color-button">
                    <div
                      key={checkboxColor}
                      style={{
                        background: `${color}`,
                        width: "5rem",
                      }}
                    ></div>
                  </label>

                  <input
                    key={color}
                    type="checkbox"
                    className="color__checkbox"
                    id={color}
                    onClick={checkboxHandler}
                  />
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
