// import { ROUTES, type PathParams } from "@/shared/model/routes";
// import { useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";

export function PerformerPage({ profile }) {
  profile = profile ?? {
    name: "Алёна Жоповна",
    city: "Город",
    tags: ["маникюр", "педикюр"],
    description:
      "Короткое описание о себе, что ты делаешь и почему ты самый крутой.",
    services: [
      {
        name: "Маникюр классический",
        description: "Описание услуги",
        price: 1000,
        duration: 60,
      },
      {
        name: "Педикюр",
        description: "Описание услуги",
        price: 1200,
        duration: 90,
      },
    ],
  };

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: 20 }}>
      {/* Основная информация */}
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

      {/* Список услуг */}
      <h2 style={{ fontSize: 18, marginBottom: 12 }}>Услуги</h2>
      {profile.services.length === 0 && (
        <div style={{ opacity: 0.6, marginBottom: 12 }}>
          Услуги пока не добавлены
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginBottom: 20,
        }}
      >
        {profile.services.map((s, i) => (
          <div
            key={i}
            style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}
          >
            <div style={{ fontSize: 16, fontWeight: 500 }}>{s.name}</div>
            <div style={{ opacity: 0.7, margin: "4px 0" }}>{s.description}</div>
            <div style={{ fontSize: 14 }}>Цена: {s.price} ₽</div>
            <div style={{ fontSize: 14 }}>Длительность: {s.duration} мин</div>
            <button
              style={{
                marginTop: 8,
                width: "100%",
                background: "black",
                color: "white",
                padding: "6px 0",
                borderRadius: 6,
                cursor: "pointer",
              }}
              onClick={() => alert(`Вы записались на услугу: ${s.name}`)}
            >
              Записаться
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Component = PerformerPage;
