import { Container } from "./styles";

import { useRef, useEffect } from 'react';

export function TextArea({ value, readOnly, ...rest }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  return(
    <Container
    ref={textareaRef}
    value={value}
    readOnly={readOnly}
    {...rest}
    >

    </Container>
  );
}