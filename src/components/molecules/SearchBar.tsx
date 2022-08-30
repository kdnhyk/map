import styled from "styled-components";
import Input from "../atoms/Input";

export type tsearchBarSize = "SMALL" | "MEDIUM" | "LARGE";

type styledProps = {
  size: tsearchBarSize;
};

const Style = styled.div<styledProps>({
  height: "50px",
  width: "400px",
  borderRadius: "2px",

  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  color: "black",
  background: "white",

  ".Search-Icon": {
    padding: "15px 20px",
  },
  Input: {
    marginRight: "20px",
  },
});

type Props = {
  size: tsearchBarSize;
  className: string;
};

export default function SearchBar({ size, className }: Props) {
  return (
    <Style size={size} className={className}>
      <div className="Search-Icon">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="8.01504"
            cy="8.01504"
            r="7.01504"
            fill="white"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M12.5264 12.5263L22.0001 22"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      </div>
      <Input
        color="white"
        bgColor="black"
        size="LARGE"
        className="Input"
        placeholder="{장소}"
      />
    </Style>
  );
}
