// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Section = require('grommet/components/Section');
var Anchor = require('grommet/components/Anchor');

var AnchorDoc = React.createClass({

  _onClick: function () {
    // no-op
  },

  render: function() {
    var inline = [
      "<Anchor href=\"...\">label</Anchor>"
    ].join("\n");

    return (
      <DocsArticle title="Anchor" colorIndex="neutral-3">

        <p>A text link. We have a separate component from the
        browser base so we can style it.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
          <dt><code>href           {"{location}"}</code></dt>
          <dd>Hyperlink reference to place in the anchor.</dd>
          <dt><code>onClick        {"{func}"}</code></dt>
          <dd>Click handler.</dd>
          <dt><code>primary        true|false</code></dt>
          <dd>Whether this is a primary anchor.</dd>
          <dt><code>tag            {"{text}"}</code></dt>
          <dd>The DOM tag to use for the element. The default is {'<a>'}.
            This should be used in conjunction with components like
            Link from React Router. In this case, Link controls the
            navigation while Anchor controls the styling.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <h3>Default</h3>
          <div className="example">
            <Anchor href="" onClick={this._onClick}>Text</Anchor>
          </div>
          <pre><code className="html hljs xml">{"<Anchor href=\"\" onClick={this._onClick}>Text</Anchor>"}</code></pre>

          <h3>Primary</h3>
          <div className="example">
            <Anchor href="" primary={true} onClick={this._onClick}>Text</Anchor>
          </div>
          <pre><code className="html hljs xml">{"<Anchor href=\"\" label=\"Text\" primary={true} onClick={this._onClick} />"}</code></pre>

        </section>

        <Section colorIndex="neutral-1" pad="large">
          <h3>Colored context</h3>
          <div className="example">
            <Anchor href="" onClick={this._onClick}>Text</Anchor>
          </div>
          <div className="example">
            <Anchor href="" primary={true} onClick={this._onClick}>Text</Anchor>
          </div>
        </Section>

      </DocsArticle>
    );
  }
});

module.exports = AnchorDoc;