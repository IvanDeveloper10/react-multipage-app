import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const container = ({ children }: ContainerProps) => {
  return <div>{ children }</div>;
}

export default container;