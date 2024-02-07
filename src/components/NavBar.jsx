import React from "react";
import { Link } from '@tanstack/react-router'
import {
  Navbar,
  Drawer,
  List,
  Button,
  ListItem,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

function NavList() {
  {/* MUST UPDATE List Below */}
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium hover:text-blue-500 transition-colors"
        >
        Teams
        </Typography>
      </Link>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >

          Sponsors

      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        
          About Us

      </Typography>

      <AccountIcon />
    </ul>
  );
}

function AccountIcon() {
  return (
    <Menu>
      <MenuHandler>
        <IconButton variant="text" color="blue">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </IconButton>
      </MenuHandler>
      <MenuList>
        <MenuItem>Login</MenuItem>
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default function NavbarSimple() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">

      {/* Will display on SMALL SCREENS */}
        <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={openDrawer}
          >
        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
        </IconButton>

      {/* Will display on SMALL SCREENS */}
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="lg:hidden ml-auto mr-4 cursor-pointer py-1.5"
        >
          Ballpark Baseball Club
        </Typography>

      {/* Will display on LARGE SCREENS */}
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="hidden lg:block mr-4 cursor-pointer py-1.5"
        >
          Ballpark Baseball Club
        </Typography>

      {/* Will display on LARGE SCREENS */}
        <div className="hidden lg:block">
          <NavList />
        </div>

      {/* Will display on LARGE SCREENS */}
        <div className="lg:hidden ml-auto">
          <AccountIcon />
        </div>
      </div>
    </Navbar>

    <Drawer placement="left" open={open} onClose={closeDrawer}>
        <div className="flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Ballpark Baseball Club
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {/* MUST UPDATE NavList Above */}
        <List>
          <ListItem>
            Teams
          </ListItem>

          <ListItem>
            Sponsors
          </ListItem>

          <ListItem>
            About Us
          </ListItem>

        </List>
        <Button className="mt-3 ml-5" size="sm">
          Team Tryout Infomation
        </Button>
      </Drawer>
</React.Fragment>
  );
}