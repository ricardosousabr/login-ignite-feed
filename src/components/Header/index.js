import Image from "next/image";
import ImageLogo from "../../../public/img/ignite-logo-mobile.png";
import { Box } from "./styles";

export default function Header() {
  return (
    <section>
      <Box>
        <div>
          <Image src={ImageLogo} />
        </div>
        <div>
          <h1>Ignite Feed</h1>
        </div>
      </Box>
    </section>
  );
}
