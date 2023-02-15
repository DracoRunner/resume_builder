import React from "react";
import RichTextEditor, { ToolbarConfig } from "react-rte";
import "./component.scss";
const toolbarConfig: ToolbarConfig = {
  BLOCK_ALIGNMENT_BUTTONS: [],
  BLOCK_TYPE_DROPDOWN: [],
  INLINE_STYLE_BUTTONS: [
    { label: "Bold", style: "BOLD", className: "custom-css-class" },
    { label: "Italic", style: "ITALIC" },
    { label: "Underline", style: "UNDERLINE" },
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: "UL", style: "unordered-list-item" },
    { label: "OL", style: "ordered-list-item" },
  ],
  display: ["INLINE_STYLE_BUTTONS", "BLOCK_TYPE_BUTTONS"],
};

export default function RtEditor(props: any) {
  const defaultValue = RichTextEditor.createValueFromString("", "html");

  const [value, setValue] = React.useState(defaultValue);

  return (
    <RichTextEditor
      editorClassName="editor"
      className="editor-container"
      toolbarClassName="editor-toolbar bg-base-300"
      toolbarConfig={toolbarConfig}
      value={value}
      onChange={(val: any) => {
        setValue(val);
      }}
    />
  );
}
