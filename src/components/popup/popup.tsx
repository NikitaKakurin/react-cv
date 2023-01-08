import React, { ReactNode, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './popup.css';

export default function Popup(props: {
  popupVisible: boolean;
  setPopupVisible: (arg: boolean) => void;
  children: ReactNode;
}) {
  const [innerAnim, setInnerAnim] = useState(false);
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={outerRef}
      in={props.popupVisible}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames="external-animation"
      onEnter={() => setInnerAnim(true)}
      onExited={() => setInnerAnim(false)}
    >
      <div
        ref={outerRef}
        className="overlay"
        onClick={() => {
          setInnerAnim(false);
          props.setPopupVisible(false);
        }}
      >
        <CSSTransition
          nodeRef={outerRef}
          in={innerAnim}
          timeout={400}
          mountOnEnter
          unmountOnExit
          classNames="inner-animation"
        >
          <div className="popup" onClick={(e) => e.stopPropagation()} ref={innerRef}>
            {props.children}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
}
