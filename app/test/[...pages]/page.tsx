import { FC } from 'react';

export type DynamicRouteProps = {
  params: { pages: Array<string> };
};

const PageWithParams: FC<DynamicRouteProps> = ({ params: { pages } }) => {
  return <div>{pages.join('/')}</div>;
};

export default PageWithParams;
