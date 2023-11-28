import { Stack } from "@mui/material";

import { CategoryInterface, categories } from "../../utilts/constants";

interface CategoriresProps {
  selectedCategory: string;
  setSelectedCategory: (arg: string) => void;
}

const Categories = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriresProps) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      width: { sx: "auto", md: "200px" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category: CategoryInterface) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory ? "#FC1503" : "none",
          color: "white",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
