import { useState } from "react";
function Body() {
  const [values, setValues] = useState([]);
  const [text, setText] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const handlesubmit = (e) => {
    try {
      e.preventDefault();
      if (!text.trim()) return;
      if (values.includes(text.trim())) {
        alert("");
        return;
      }
      setValues([...values, text]);
      if (onEdit) {
        const newData = values.map((item, index) => {
          if (index === itemToEdit) {
            return text;
          } else {
            return item;
          }
        });
        setOnEdit(false);
        setItemToEdit(null);
        setValues(newData);
      }
    } catch {
      console.log("Error");
    }
  };
  const handleDelete = (index) => {
    const newData = values.filter((item, i) => i !== index);
    setValues(newData);
    setOnEdit(false);
  };
  const handleEdit = (index) => {
    setOnEdit(true);
    setItemToEdit(index);
    setText(values[index]);
  };
  const handleclear = () => {
    setValues([]);
    setOnEdit(false);
  };
  return (
    <>
      <div className="container">
        <div className="box">
          <form onSubmit={handlesubmit}>
            <label>Grocery-Item</label>
            <input
              values={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              type="text"
            />
            <button className="btn-submit">{onEdit ? "Edit" : "submit"}</button>
          </form>
        </div>
        {values.map((item, index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              <li>{item}</li>
              <button
                className="btn-Delete"
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
              <button
                className="btn-Edit"
                onClick={() => {
                  handleEdit(index);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
        <button
          className="btn-clear"
          onClick={(index) => {
            handleclear(index);
          }}
        >
          Clear
        </button>
      </div>
    </>
  );
}

export default Body;
