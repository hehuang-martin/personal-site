import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/hehuang_icon.png`} alt="" />
      </Link>
      <header>
        <h2>He Huang</h2>
        <p><a href="mailto:martinhehuang@gmail.com">martinhehuang@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m He. I like solving problems.
        I am currently a Computer Science Master Student at <a href="https://www.cs.usc.edu/">USC</a> in the track of <a href="https://www.cs.usc.edu/academic-programs/masters/intelligent-robotics/">Intelligent Robotics</a>. 
        My interest is in computer vision and robotics. I love skiing and playing basketball. Btw, I do think our world is virtual :-)
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">About Me</Link> : <Link to="/projects" className="button">Learn More</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; He Huang.</p>
    </section>
  </section>
);

export default Nav;
