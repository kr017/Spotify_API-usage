import { Button } from "@mui/material";
import { accessUrl } from "../../api/auth";

export const Login = () => {
  return <a href={accessUrl}>LOGIN TO SPOTIFY</a>;

  //   <Button onClick={accessUrl}> Login</Button>;
};
