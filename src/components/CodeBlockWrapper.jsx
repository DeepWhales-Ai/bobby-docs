import React, {useState} from 'react';
import OriginalCodeBlock from '@theme-original/CodeBlock';
import './CodeBlockWrapper.css';

/**
 * Wraps Docusaurus's CodeBlock with the prototype's header bar (language label
 * on the left, Copy button on the right). Wired into MDXComponents.pre so
 * every fenced code block on every doc page picks it up.
 */
export default function CodeBlockWrapper({children, ...props}) {
  const [copied, setCopied] = useState(false);

  // children is a <code> React element rendered by MDX
  const codeProps = (children && children.props) || {};
  const rawText =
    typeof codeProps.children === 'string'
      ? codeProps.children
      : Array.isArray(codeProps.children)
        ? codeProps.children.filter((c) => typeof c === 'string').join('')
        : '';

  // Language label: prefer explicit title= in metastring, fallback to language-x class, fallback to CODE
  const className = codeProps.className || '';
  const langMatch = className.match(/language-([\w-]+)/);
  const lang = langMatch ? langMatch[1] : 'code';

  const meta = codeProps.metastring || '';
  const titleMatch = meta.match(/title=["']([^"']+)["']/);
  const label = titleMatch ? titleMatch[1] : props.title || lang.toUpperCase();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawText.trimEnd());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // clipboard API can fail in insecure contexts; silently no-op
    }
  };

  return (
    <div className="bobby-code-block">
      <div className="bobby-code-header">
        <span className="bobby-code-label">{label}</span>
        <button
          type="button"
          className={'bobby-code-copy' + (copied ? ' is-copied' : '')}
          onClick={handleCopy}
          aria-label="Copy code">
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <OriginalCodeBlock {...props} title={null}>
        {children}
      </OriginalCodeBlock>
    </div>
  );
}
