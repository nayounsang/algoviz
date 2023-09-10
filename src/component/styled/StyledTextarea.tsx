import React from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

const grey = '#6e7781';
const blue = '#3399FF';

const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    border-radius: 8px 8px 0 8px;
    border: 1px solid ${grey};
    &:hover {
      border-color: ${blue};
    }
    
  `,
);

export default StyledTextarea;