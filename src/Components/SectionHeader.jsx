function SectionHeader({ time, title }) {
  return (
    <div className="text-center my-10">
      <p className="text-orange-300 text-xl">{time}</p>
      <h2 className="text-4xl font-semibold py-2 uppercase">{title}</h2>
    </div>
  );
}

export default SectionHeader;
