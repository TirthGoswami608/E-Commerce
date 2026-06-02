import { useState } from "react";
import axios from "axios";
import { COLORS as T } from "../../constants/theme";

export default function CategoryForm({
  initial = null,
  onSave,
  onCancel,
}) {
  // State
  const [name, setName] = useState(initial?.name || "");
  const [desc, setDesc] = useState(initial?.description || "");
  const [loading, setLoading] = useState(false);

  // Submit Form
  const submit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name.trim()) {
      return alert("Please enter a category name");
    }

    // Payload
    const payload = {
      name: name.trim(),
      description: desc,
    };

    try {
      setLoading(true);

      // UPDATE CATEGORY
      if (initial?.id) {
        await axios.put(
          `http://localhost:5000/api/categories/${initial.id}`,
          payload
        );

        alert("Category updated successfully");
      }

      // CREATE CATEGORY
      else {
        await axios.post(
          "http://localhost:5000/api/categories",
          payload
        );

        alert("Category created successfully");
      }

      // Reset Form
      setName("");
      setDesc("");

      // Refresh Parent Component
      if (onSave) {
        onSave();
      }

    } catch (error) {
      console.error("Category Error:", error);

      alert(
        "Something went wrong while saving category"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      style={{
        minWidth: 420,
      }}
    >
      {/* Category Name */}
      <div style={{ marginBottom: 16 }}>
        <label
          style={{
            display: "block",
            fontSize: 13,
            color: T.textLight,
            marginBottom: 6,
            fontWeight: 600,
          }}
        >
          Category Name
        </label>

        <input
          type="text"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter category name"
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            border: `1px solid ${T.border}`,
            outline: "none",
            fontSize: 14,
          }}
        />
      </div>

      {/* Description */}
      <div style={{ marginBottom: 16 }}>
        <label
          style={{
            display: "block",
            fontSize: 13,
            color: T.textLight,
            marginBottom: 6,
            fontWeight: 600,
          }}
        >
          Description
        </label>

        <textarea
          rows={4}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Enter category description"
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            border: `1px solid ${T.border}`,
            outline: "none",
            fontSize: 14,
            resize: "none",
          }}
        />
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "flex-end",
          marginTop: 20,
        }}
      >
        {/* Cancel Button */}
        <button
          type="button"
          onClick={onCancel}
          style={{
            background: "transparent",
            border: `1px solid ${T.border}`,
            padding: "10px 14px",
            borderRadius: 10,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Cancel
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            background: T.brown,
            color: "#fff",
            border: "none",
            padding: "10px 14px",
            borderRadius: 10,
            cursor: "pointer",
            fontWeight: 600,
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading
            ? "Saving..."
            : initial
            ? "Save Changes"
            : "Add Category"}
        </button>
      </div>
    </form>
  );
}