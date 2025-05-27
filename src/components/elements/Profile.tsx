"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  Avatar,
  Button,
  DropdownSection,
} from "@heroui/react";

import ThemeSwitch from "../globals/ThemeSwitch";

// ProfileDropdown component
const ProfileDropdown = ({
  image,
  user,
  fullName,
  roles,
  handleLogout,
  router,
}) => {
  return (
    <Dropdown
      showArrow
      placement="bottom-end"
      radius="sm"
      classNames={{
        content: "border-small border-divider",
      }}
    >
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={user || ""}
          size="sm"
          src={image ?? "/images/placeholder.png"}
          classNames={{
            base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
            icon: "text-black/80",
          }}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Profile Actions"
        variant="flat"
        disabledKeys={
          roles && !roles.includes("superAdmin")
            ? ["register", "trackings"]
            : []
        }
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem key="profile" className="h-14 gap-2" isReadOnly>
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user}</p>
            {fullName && (
              <p className="font-normal text-xs text-secondary">{fullName}</p>
            )}
          </DropdownItem>
          <DropdownItem
            key="register"
            onPress={() => router.push("/auth/register")}
          >
            Register
          </DropdownItem>
          <DropdownItem
            key="trackings"
            onPress={() => router.push("/trackings")}
          >
            Trackings
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="Preferences" showDivider>
          <DropdownItem
            isReadOnly
            key="theme"
            className="cursor-default"
            endContent={<ThemeSwitch />}
          >
            Theme
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="Handlers">
          <DropdownItem key="logout" color="danger" onPress={handleLogout}>
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

// Profile component
const Profile = ({ user, handleLogout, isLoggedIn }) => {
  const router = useRouter();

  const data = isLoggedIn ? (
    <ProfileDropdown
      user={user?.email ?? "john@doe.com"}
      fullName={user?.name}
      image={user?.image}
      handleLogout={handleLogout}
      roles={user?.roles}
      router={router}
    />
  ) : (
    <Button as={Link} color="warning" href="/auth/login" variant="flat">
      Sign In
    </Button>
  );

  return <>{data}</>;
};

export default Profile;
