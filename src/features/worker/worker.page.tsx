import { useState } from "react";
// TODO: отправлять в БД
// TODO: поправить стили
export function WorkerPage({ onSubmit }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [description, setDescription] = useState("");

  const addTag = () => {
    if (!tagInput.trim()) return;
    if (!tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
    }
    setTagInput("");
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSubmit = () => {
    if (!name.trim() || !city.trim()) return alert("Заполни имя и город");
    const profile = {
      name,
      city,
      tags,
      description,
    };
    onSubmit && onSubmit(profile);
  };

  return (
    <div>
      <h1>Создание профиля</h1>
      <div className="group">
        <label>Имя</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Например: Анна"
          className="input"
        />
      </div>

      <div className="group">
        <label>Город</label>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Например: Челябинск"
          className="input"
        />
      </div>

      <div className="group">
        <label>Теги (чем занимаешься)</label>
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="маникюр / массаж / брови"
            className="input"
          />
          <button onClick={addTag}>+</button>
        </div>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}
      >
        {tags.map((tag) => (
          <div
            key={tag}
            style={{
              padding: "4px 8px",
              background: "#eee",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span>{tag}</span>
            <button onClick={() => removeTag(tag)}>×</button>
          </div>
        ))}
      </div>

      <label>Описание</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Расскажи кратко, что ты предлагаешь"
        style={{ width: "100%", minHeight: 90, marginBottom: 20 }}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "10px 0",
          background: "black",
          color: "white",
          borderRadius: 6,
          fontSize: 16,
        }}
      >
        Сохранить
      </button>
    </div>
  );
}

export const Component = WorkerPage;
