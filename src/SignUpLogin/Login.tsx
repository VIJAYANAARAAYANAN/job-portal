import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Button,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login = () => {
  const icon = <IconAt size={16} />;
  const iconlock = <IconLock size={18} stroke={1.5} />;
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput
        withAsterisk
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Email"
        placeholder="Your email"
      />
      <PasswordInput
        withAsterisk
        leftSection={iconlock}
        label="Password"
        placeholder="Password"
      />
     
      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>Terms & Conditions</Anchor>
          </>
        }
      />
      <Button autoContrast variant="filled">
        Sign up
      </Button>
      <div className="mx-auto">
        Don't have an account?{" "}
        <Link className="text-[#275DF5] hover:underline" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
export default Login;
