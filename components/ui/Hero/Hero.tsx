import Link from "next/link";
import { FunctionComponent } from "react";
import Container from "../Container";
import s from "./Hero.module.css";

interface Props {
  headline: string;
  description: string;
}
const Hero: FunctionComponent<Props> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={s.root}>
          <h2 className={s.headline}>{headline}</h2>
          <div className="flex-1 max-w-4xl">
            <p className={s.description}>{description}</p>
            <Link href="#">
              <a className={s.link}> Read more..</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
