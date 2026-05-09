import { useState } from "react";

export default function App() {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Pink Besties ♡",
      lists: [
        { text: "🌷 Visit a flower café", done: false },
        { text: "❄️ Watch snowfall together", done: true },
      ],
    },
  ]);

  const [newGroup, setNewGroup] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [newTask, setNewTask] = useState("");

  const createGroup = () => {
    if (!newGroup.trim()) return;

    const group = {
      id: Date.now(),
      name: newGroup,
      lists: [],
    };

    setGroups([...groups, group]);
    setNewGroup("");
  };

  const addTask = () => {
    if (!newTask.trim()) return;

    const updated = groups.map((group) => {
      if (group.id === selectedGroup.id) {
        return {
          ...group,
          lists: [...group.lists, { text: newTask, done: false }],
        };
      }
      return group;
    });

    setGroups(updated);
    setSelectedGroup(
      updated.find((group) => group.id === selectedGroup.id)
    );

    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = groups.map((group) => {
      if (group.id === selectedGroup.id) {
        const updatedLists = [...group.lists];

        updatedLists[index].done = !updatedLists[index].done;

        return {
          ...group,
          lists: updatedLists,
        };
      }

      return group;
    });

    setGroups(updated);

    setSelectedGroup(
      updated.find((group) => group.id === selectedGroup.id)
    );
  };

  const deleteTask = (index) => {
    const updated = groups.map((group) => {
      if (group.id === selectedGroup.id) {
        return {
          ...group,
          lists: group.lists.filter((_, i) => i !== index),
        };
      }

      return group;
    });

    setGroups(updated);

    setSelectedGroup(
      updated.find((group) => group.id === selectedGroup.id)
    );
  };

  if (selectedGroup) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #ffe4ec, #fff0f5)",
          padding: "20px",
          fontFamily: "cursive",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            background: "white",
            borderRadius: "30px",
            padding: "30px",
            boxShadow: "0 10px 30px rgba(255,192,203,0.4)",
          }}
        >
          <button
            onClick={() => setSelectedGroup(null)}
            style={{
              border: "none",
              background: "#ffd6e7",
              padding: "10px 18px",
              borderRadius: "20px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            ← Back
          </button>

          <h1
            style={{
              color: "#ff69b4",
              textAlign: "center",
              fontSize: "3rem",
            }}
          >
            {selectedGroup.name}
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#b03060",
              marginBottom: "30px",
            }}
          >
            your shared dreamy bucket list ✨
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "25px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="add another dream..."
              style={{
                flex: 1,
                padding: "15px",
                borderRadius: "20px",
                border: "2px solid pink",
                outline: "none",
                minWidth: "200px",
              }}
            />

            <button
              onClick={addTask}
              style={{
                border: "none",
                background: "#ff69b4",
                color: "white",
                padding: "15px 20px",
                borderRadius: "20px",
                cursor: "pointer",
              }}
            >
              Add ✨
            </button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {selectedGroup.lists.map((task, index) => (
              <div
                key={index}
                style={{
                  background: task.done ? "#ffd6e7" : "#fff0f5",
                  borderRadius: "20px",
                  padding: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  onClick={() => toggleTask(index)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      border: "2px solid #ff69b4",
                      background: task.done ? "#ff69b4" : "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    {task.done ? "♡" : ""}
                  </div>

                  <span
                    style={{
                      textDecoration: task.done
                        ? "line-through"
                        : "none",
                      color: "#b03060",
                    }}
                  >
                    {task.text}
                  </span>
                </div>

                <button
                  onClick={() => deleteTask(index)}
                  style={{
                    border: "none",
                    background: "#ffb6c1",
                    color: "white",
                    padding: "8px 12px",
                    borderRadius: "15px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #ffe4ec, #fff0f5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "cursive",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "white",
          borderRadius: "30px",
          padding: "30px",
          boxShadow: "0 10px 30px rgba(255,192,203,0.4)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#ff69b4",
            fontSize: "3.5rem",
          }}
        >
          Dream Diary ♡
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#b03060",
            marginBottom: "35px",
          }}
        >
          create separate dreamy bucket lists with different friend groups ✨
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            value={newGroup}
            onChange={(e) => setNewGroup(e.target.value)}
            placeholder="create a new bestie group..."
            style={{
              flex: 1,
              padding: "15px",
              borderRadius: "20px",
              border: "2px solid pink",
              outline: "none",
              minWidth: "200px",
            }}
          />

          <button
            onClick={createGroup}
            style={{
              border: "none",
              background: "#ff69b4",
              color: "white",
              padding: "15px 20px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            Create ✨
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {groups.map((group) => (
            <div
              key={group.id}
              style={{
                background: "#fff0f5",
                padding: "20px",
                borderRadius: "25px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <div
                onClick={() => setSelectedGroup(group)}
                style={{
                  cursor: "pointer",
                  flex: 1,
                }}
              >
                <h2
                  style={{
                    color: "#ff69b4",
                    marginBottom: "5px",
                  }}
                >
                  {group.name}
                </h2>

                <p style={{ color: "#b03060" }}>
                  {group.lists.length} dreamy goals ♡
                </p>
              </div>

              <button
                onClick={() =>
                  setGroups(
                    groups.filter((g) => g.id !== group.id)
                  )
                }
                style={{
                  border: "none",
                  background: "#ffb6c1",
                  color: "white",
                  padding: "10px 14px",
                  borderRadius: "15px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}