import React from 'react';
import me from 'assets/img/me.jpg';

export default function About() {
  return (
    <>
      <section className="grid">
        <div className="grid-cols-1">
          <img src={me} alt="Me" />
        </div>
        <div className="grid-cols-1">About</div>
      </section>
    </>
  );
}
