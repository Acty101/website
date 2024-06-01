function Resume({ path }: { path: string }) {
  return (
    <div style={{ height: '100vh' }}>
      <iframe src={path} title="My Resume" width="100%" height="100%" />
    </div>
  );
}

export default Resume;
