import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Isaiah Nazaire</h1>
      <Image
        src="/profilePic.jpeg"
        alt="Picture of the author"
        layout="intricnsic"
        width={749}
        height={1065}
      />
      <h2>Software Engineer | NextJs | ReactJs</h2>
      <a href="/Isaiah-Nazaire-Resume.pdf" download="Isaiah-Nazaire-Resume.pdf">
        <button>Download Resume</button>
      </a>
      <p>
        I am a software engineer with experience in full stack web development.
        I have a passion for learning and working with new technologies. I am
        always looking for new challenges and opportunities to grow as a
        developer.
      </p>
    </div>
  );
}
