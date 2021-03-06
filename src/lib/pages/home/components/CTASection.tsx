import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const CTASection = () => (
  <Box textAlign="center">
    <Flex marginY={4} justifyContent="center" gridGap={2}>
      <Link _hover={undefined} href="https://github.com/pm-pp/web-app-00">
        <Button leftIcon={<AiFillGithub />}>Open in Github</Button>
      </Link>
      <Link
        aria-label="Deploy to Netlify"
        isExternal
        href="https://app.netlify.com/start/deploy?repository=https://github.com/pm-pp/web-app-00"
      >
        <Image
          src="https://www.netlify.com/img/deploy/button.svg"
          alt="Netlify deploy button"
        />
      </Link>
    </Flex>
  </Box>
);

export default CTASection;
