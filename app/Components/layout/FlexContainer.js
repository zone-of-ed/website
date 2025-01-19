function FlexContainer({ children, gap, justifyContent, flexWrap }) {
  return (
    <div className="flex-container"
         style={{ gap: gap, justifyContent: justifyContent, flexWrap: flexWrap }}>  {children}</div>
  );
}

export default FlexContainer;