import React from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!

export default function Tooltip({children})  {
  return (<Tippy
    render={attrs => (
      <div className="box" tabIndex="-1" {...attrs}>
        My tippy box
      </div>
    )}
  >
    {children}
  </Tippy>)
};
