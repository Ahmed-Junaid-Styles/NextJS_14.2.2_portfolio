"use client"
import React from 'react';

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function MyComponent() {
  return (
    <div>
      <button onClick={() => scrollToElement('myContent')}>
        Scroll to Content
      </button>
      <div />
      <div id="myContent">
        Content to scroll to
      </div>
    </div>
  );
}

export default MyComponent;