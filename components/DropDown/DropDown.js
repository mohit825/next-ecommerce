import { useState } from "react";
import { useEffect } from "react";
import { Select } from "./Select";
import { getIdFromName } from "../../utils/helperFunctions";
const DropDown = ({ categories, setCategory }) => {
  console.log(categories);
  const [cat, setCat] = useState(categories);
  useEffect(() => {
    setCat(categories);
  }, []);

  const selected = (e) => {
    const id = getIdFromName(e.target.value, categories);
    setCategory(id);
  };

  return (
    <div>
      <Select name="categories" onChange={(e) => selected(e)}>
        {categories.map((category) => {
          return category.enabled ? (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ) : null;
        })}
      </Select>
    </div>
  );
};

export default DropDown;
