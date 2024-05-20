function SectionHeader({ shorts, title }) {
  return (
    <div className="text-center my-8">
      <p className="text-orange-300 text-xl">{shorts}</p>
      <h2 className="text-4xl font-semibold py-2 uppercase">{title}</h2>
    </div>
  );
}

export default SectionHeader;
