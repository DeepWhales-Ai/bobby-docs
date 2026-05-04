import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import CodeBlockWrapper from '@site/src/components/CodeBlockWrapper';
import {
  Card,
  CardGroup,
  Frame,
  Note,
  Info,
  Warning,
  Tip,
  Steps,
  Step,
} from '@site/src/components';

const ADMONITION_MAP = {
  note: Note,
  info: Info,
  tip: Tip,
  warning: Warning,
  caution: Warning,
  danger: Warning,
};

function BobbyAdmonition({type, title, children}) {
  const Comp = ADMONITION_MAP[type] || Info;
  return <Comp title={title}>{children}</Comp>;
}

export default {
  ...MDXComponents,
  admonition: BobbyAdmonition,
  pre: CodeBlockWrapper,
  Card,
  CardGroup,
  Frame,
  Note,
  Info,
  Warning,
  Tip,
  Steps,
  Step,
};
