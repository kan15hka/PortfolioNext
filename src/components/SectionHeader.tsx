export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent  text-center">
          {title}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl mt-6 text-center">
        {eyebrow}
      </h2>
      <p className="text-white/60 text-center mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
