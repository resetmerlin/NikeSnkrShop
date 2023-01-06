// import React, { useEffect, useState } from "react";
// const categorySortOptions = [
//   "Sort by: featured",
//   "Price low to high",
//   "Price high to low",
//   "Order by reviews",
// ];

// const Category = () => {
//   const [categorySort, setCategorySort] = useState(categorySortOptions[0]);
//   console.log(categorySort);

//   return (
//     <form className="Category-sort-box">
//       <select
//         value={categorySort}
//         className="Category-sort-box__list"
//         onChange={(e) => setCategorySort(e.target.value)}
//       >
//         {categorySortOptions.map((value) => {
//           return (
//             <option value={value} key={value}>
//               {value}
//             </option>
//           );
//         })}
//       </select>
//     </form>
//   );
// };

// export default Category;
