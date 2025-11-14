import BaseBox from "../common/BaseBox";
import Text from "../common/Text";
import Image from "next/image";
const Picks = () => {
  return (
    <BaseBox className="pick" padding={"20px 24px 0 40px"} maxWidth={"480px"}>
      <BaseBox
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={1}
        className="pick-content"
      >
        <BaseBox
          display={"flex"}
          alignItems={"center"}
          className="avatar-name"
          gap={1}
        >
          <BaseBox
            className="avtar"
            width={30}
            height={30}
            position={"relative"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {" "}
            <Image
              src="https://lh3.googleusercontent.com/a/ACg8ocIManjR7Trfhb_N_P4_3NIbDNngzS8-aFshFD10TJmoDuUghJU=s288-c-no"
              fill
              alt="user"
              style={{ borderRadius: "50%" }}
            />
          </BaseBox>
          <Text variant="body1" sx={{ fontSize: "14px", color: "#6b6b6b" }}>
            Karan Dhakad
          </Text>
        </BaseBox>
        <BaseBox className="pick-body">
          <Text variant="h5" fontWeight={"bold"}>
            Repair Over Perfection : What I learned When I said The Wrong Thing
          </Text>
        </BaseBox>
        <BaseBox className="date" color={"#6b6b6b"}>
          <Text color="#6b6b6b">Nov 10</Text>
        </BaseBox>
      </BaseBox>
    </BaseBox>
  );
};

export default Picks;
