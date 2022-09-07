import { useRecoilState } from "recoil";
import { tagsState } from "../../store/Tags";
import styled from "styled-components";
import Button, { tButton } from "../Atoms/Button";

const TagsBarBlock = styled.div`
  height: fit-content;
  width: 440px;

  padding: 0px 20px;
  box-sizing: border-box;
  .Tag {
    margin-right: 10px;
  }
`;

export default function TagsBar({}) {
  const [tags, setTags] = useRecoilState(tagsState);
  const onExtendTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.textContent);
  };

  return (
    <TagsBarBlock className="TagsBar">
      {tags.map((tag) => (
        <Button
          key={tag.id}
          className="Tag"
          height="SMALL"
          width="FIT_CONTENT"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => onExtendTag(e)}
        >
          {tag.type}
        </Button>
      ))}
    </TagsBarBlock>
  );
}
