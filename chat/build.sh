#!/bin/bash

black=`echo -e "\u001b[30m"`
red=`echo -e "\u001b[31m"`
green=`echo -e "\u001b[32m"`
yellow=`echo -e "\u001b[33m"`
blue=`echo -e "\u001b[34m"`
magenta=`echo -e "\u001b[35m"`
cyan=`echo -e "\u001b[36m"`
white=`echo -e "\u001b[37m"`
bold=`echo -e "\u001b[1m"`
reset=`echo -e "\u001b[0m"`

echo "${yellow}${bold}> Performing export: ${magenta}heavie.co${reset}"
npm run export > /dev/null
echo "${green}${bold}✔ Export successful!${reset}"

echo "${yellow}${bold}> Copying files: ${magenta}out/*.html ${yellow}→ ${magenta}public/*.html${reset}"
cp out/*.html public/

./generate-sitemap.sh

echo "${yellow}${bold}> Performing build: ${magenta}heavie.co${reset}"
npm run build
echo "${green}${bold}✔ Build successful!${reset}"