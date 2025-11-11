import { ROUTES } from "@/shared/model/routes";
import { useState } from "react";
import { href, Link } from "react-router-dom";

function PerformerListPage() {
  const [search, setSearch] = useState("");

  const performers = [
    {
      id: 1,
      name: "Анна",
      city: "Челябинск",
      tags: ["маникюр", "педикюр"],
    },
    {
      id: 2,
      name: "Марина",
      city: "Екатеринбург",
      tags: ["брови", "ресницы"],
    },
    {
      id: 3,
      name: "Вика",
      city: "Челябинск",
      tags: ["массаж", "релакс"],
    },
  ];

  const filtered = performers.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
      <h1 style={{ fontSize: 22, marginBottom: 16 }}>Исполнители</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск по имени или тегу"
        style={{
          width: "100%",
          marginBottom: 20,
          padding: "8px 10px",
          borderRadius: 8,
          border: "1px solid #ccc",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {filtered.map((p) => (
          <div
            key={p.id}
            style={{
              padding: 14,
              border: "1px solid #eee",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 18, fontWeight: 500 }}>{p.name}</div>
              <div style={{ fontSize: 14, opacity: 0.6 }}>{p.city}</div>

              <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "3px 8px",
                      background: "#efefef",
                      borderRadius: 6,
                      fontSize: 12,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to={`/performers/${p.id}`}
              style={{
                padding: "6px 12px",
                borderRadius: 6,
                background: "black",
                color: "white",
                textDecoration: "none",
              }}
            >
              Смотреть
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export const Component = PerformerListPage;
