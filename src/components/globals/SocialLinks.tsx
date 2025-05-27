"use client";
import React from "react";
import { LinkedinIcon, TwitterIcon } from "@sanity/icons";
import { motion } from "framer-motion";

import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../icons/SocialIcons";

const icons = {
  facebook: <FacebookIcon className="w-5 h-5" />,
  instagram: <InstagramIcon className="w-5 h-5" />,
  twitter: <TwitterIcon className="w-5 h-5" />,
  youtube: <YoutubeIcon className="w-5 h-5" />,
  linkedin: <LinkedinIcon className="w-5 h-5" />,
};

const SocialLinks = ({ data }) => {
  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const urls = {
    facebook: data?.facebook || "",
    instagram: data?.instagram || "",
    twitter: data?.twitter || "",
    youtube: data?.youtube || "",
    linkedin: data?.linkedin || "",
  };

  const socialMedia = Object.entries(urls)
    .filter(([, url]) => url)
    .map(([name, url]) => ({
      name,
      url,
      icon: icons[name],
    }));

  return (
    <div className="flex space-x-4">
      {socialMedia.map(({ name, url, icon }) => (
        <motion.a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          whileHover="hover"
          variants={iconVariants}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
