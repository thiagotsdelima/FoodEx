import { Container } from "./styles";

import { useRef, useEffect } from 'react';

export function TextArea({ value, readOnly, interactive = true, ...rest }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  return(
    <Container
    ref={textareaRef}
    value={value}
    readOnly={readOnly}
    {...rest}
    style={{
      pointerEvents: interactive ? 'auto' : 'none',
      userSelect: interactive ? 'text' : 'none',
      cursor: interactive ? 'text' : 'default',
    }}
    >
    </Container>
  );
}