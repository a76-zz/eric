/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import { Surface, Group, Image, Text, FontFace, measureText } from 'react-canvas';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  get textStyle() {
    return {
      top: 100,
      left: 100,
      width: window.innerWidth,
      height: window.innerHeight,
      lineHeight: 50,
      fontSize: 18,
      color: '#222',
      fontFace: FontFace('Avenir Next Condensed, Helvetica, sans-serif', null, {weight: 500})
    }
  }

  /*render() {
    return (
      <Layout className={s.content}>
        <Surface top={0} left={0} width={100} height={100}>
          <Text style={{top: 0, left: 0, width: 100, fontSize: 22, lineHeight: 30, fontFace: this.fontFace()}}>{'Hello Canvas'}</Text>
        </Surface>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <h4>Articles</h4>
        <ul>
          {this.props.articles.map((article, i) =>
            <li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>
          )}
        </ul>
        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }*/

  render() {
    return (
      <Surface top={0} left={0} width={window.innerWidth} height={window.innerHeight}>
         <Text style={this.textStyle}>{'Hello Canvas'}</Text>
      </Surface>
    );
  }

}

export default HomePage;
