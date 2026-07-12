import { useState } from "react";
function Body() {
  const [value, setvalue] = useState([]);
  const [text, settext] = useState("");
  const [onEdit, setonEdit] = useState(false);
  const [Edit, setEdit] = useState(null);
  const handlesubmit = (e) => {
    try {
      e.preventDefault();
      if (!text.trim()) return;
      if (value.includes(text.trim())) {
        alert("");
        return;
      }
      setvalue([...value, text]);
      if (onEdit) {
        const newData = value.map((item, index) => {
          if (index === Edit) {
            return text;
          } else {
            return item;
          }
        });
        setonEdit(false);
        setEdit(null);
        setvalue(newData);
      }
    } catch {
      console.log("Error");
    }
  };
  const handleDelete = (index) => {
    const newData = value.filter((item, i) => i !== index);
    setvalue(newData);
    setonEdit(false);
  };
  const handleEdit = (index) => {
    setonEdit(true);
    setEdit(index);
    settext(value[index]);
  };
  const handleclear = () => {
    setvalue([]);
    setonEdit(false);
  };
  return (
    <>
      <div className="container">
        <div className="box">
          <form onSubmit={handlesubmit}>
            <label>Grocery-Item</label>
            <input
              value={text}
              onChange={(e) => {
                settext(e.target.value);
              }}
              type="text"
            />
            <button className="btn-submit">{onEdit ? "Edit" : "submit"}</button>
          </form>
        </div>
        {value.map((item, index) => {
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
