import Routed from "./RoutedTemplate";

function Resume({ path }: { path: string}) {
  return (
    <Routed >
      <iframe src={path} title="My Resume" width="100%" height="100%" />
    </Routed>
  );
}

export default Resume;
