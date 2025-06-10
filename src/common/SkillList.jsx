function SkillList({ src, skill, alt }) {
  return (
    <div>
      <span>
        <img src={src} alt={alt} />
        <p>{skill}</p>
      </span>
    </div>
  );
}

export default SkillList;
