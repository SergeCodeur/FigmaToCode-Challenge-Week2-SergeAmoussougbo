const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="lg:text-6xl text-4xl max-lg:font-medium text-center font-roboto">
      {children}
    </h2>
  );
};

export default Title;
