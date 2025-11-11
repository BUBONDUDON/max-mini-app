import { useState } from "react";

export function WorkerProfilePage({ profile }) {
  profile = profile ?? {
    name: "Имя Фамилия",
    city: "Город",
    tags: ["маникюр", "педикюр"],
    description:
      "Короткое описание о себе, что ты делаешь и почему ты самый крутой.",
  };

  const [services, setServices] = useState([]);
  const [modal, setModal] = useState(false);

  const addService = (service) => {
    setServices([...services, service]);
    setModal(false);
  };

  const removeService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: 20 }}>
      <h1 style={{ fontSize: 22, marginBottom: 8 }}>{profile.name}</h1>
      <div style={{ opacity: 0.6, marginBottom: 12 }}>{profile.city}</div>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}
      >
        {profile.tags.map((tag) => (
          <span
            key={tag}
            style={{ padding: "4px 8px", background: "#eee", borderRadius: 6 }}
          >
            {tag}
          </span>
        ))}
      </div>
      <p style={{ marginBottom: 24 }}>{profile.description}</p>

      <h2 style={{ fontSize: 18, marginBottom: 12 }}>Услуги</h2>

      {services.length === 0 && (
        <div style={{ opacity: 0.6, marginBottom: 12 }}>Пока нет услуг</div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginBottom: 20,
        }}
      >
        {services.map((s, i) => (
          <div
            key={i}
            style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}
          >
            <div style={{ fontSize: 16, fontWeight: 500 }}>{s.name}</div>
            <div style={{ opacity: 0.7, margin: "4px 0" }}>{s.description}</div>
            <div style={{ fontSize: 14 }}>Цена: {s.price} ₽</div>
            <div style={{ fontSize: 14 }}>Длительность: {s.duration} мин</div>
            <button
              onClick={() => removeService(i)}
              style={{
                marginTop: 8,
                background: "red",
                color: "white",
                padding: "4px 8px",
                borderRadius: 6,
              }}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => setModal(true)}
        style={{
          width: "100%",
          padding: "10px 0",
          background: "black",
          color: "white",
          borderRadius: 6,
          fontSize: 16,
        }}
      >
        Добавить услугу
      </button>

      {modal && (
        <AddServiceModal onClose={() => setModal(false)} onAdd={addService} />
      )}
    </div>
  );
}

function AddServiceModal({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  const save = () => {
    if (!name.trim() || !price.trim() || !duration.trim())
      return alert("Заполни обязательные поля");
    onAdd({ name, description: desc, price, duration });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 10,
          width: 300,
        }}
      >
        <h3 style={{ marginBottom: 12 }}>Новая услуга</h3>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Название"
          style={{ width: "100%", marginBottom: 8 }}
        />

        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Описание"
          style={{ width: "100%", marginBottom: 8 }}
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Цена"
          style={{ width: "100%", marginBottom: 8 }}
        />

        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Длительность (мин)"
          style={{ width: "100%", marginBottom: 12 }}
        />

        <button
          onClick={save}
          style={{
            width: "100%",
            marginBottom: 8,
            background: "black",
            color: "white",
          }}
        >
          Сохранить
        </button>
        <button onClick={onClose} style={{ width: "100%" }}>
          Отмена
        </button>
      </div>
    </div>
  );
}

export const Component = WorkerProfilePage;
