import React from 'react';
import s from './styles.css';
import { title, html } from './index.md';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }

}

export default AboutPage;
