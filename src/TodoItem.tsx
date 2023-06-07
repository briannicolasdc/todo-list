import { useState } from "react";

export interface TodoItem {
  id: string;
  name: string;
  isChecked: boolean;
}

export interface TodoItemProps {
  item: TodoItem;
  onDelete: (item: TodoItem) => void;
  onChangeName: (id: string, newName: string) => void;
  onCheck: (id: string) => void;
}


export function TodoItem({
  item,
  onDelete,
  onChangeName,
  onCheck,
}: TodoItemProps): JSX.Element {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [editName, setEditName] = useState(item.name);

  return (
    <div>
      <li>
        {isInEditMode ? (
          <div>
            <form
              action="submit"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            ></form>
            <input
              type="text"
              value={editName}
              onChange={(e) => {
                setEditName(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={() => {
                setIsInEditMode(false);
                onChangeName(item.id, editName);
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsInEditMode(false);
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="item">
            <input type="checkbox" onChange={() => onCheck(item.id)} />
            {item.isChecked ? <s>{item.name}</s> : <a>{item.name}</a>}
            <button disabled={item.isChecked} onClick={() => setIsInEditMode(true)}><span className="fa fa-edit"></span></button>
            <button disabled={item.isChecked} onClick={() => onDelete(item)}><span className="fa fa-trash"></span></button>
          </div>
        )}
      </li>
    </div>
  );
}
