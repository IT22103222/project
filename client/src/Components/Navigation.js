import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";

export default function Navigation(props) {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      <HomeIcon sx={{ color: "#fff" }} />
    </Link>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" sx={{ color: "#fff" }} />}
      >
        {breadcrumbs}
        {props.breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
