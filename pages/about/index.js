import React from 'react';
import HomeLayout from '../../components/Layout/HomeLayout';
import s from './styles.css';
import { title, html } from './index.md';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <HomeLayout className={s.content}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </HomeLayout>
    );
  }

}

export default AboutPage;
