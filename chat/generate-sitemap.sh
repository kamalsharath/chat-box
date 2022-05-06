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
baseUrl=`echo -e "https://heavie.co/"`
date=`echo -e "2021-08-01"`
echo "${red}${bold}> Erasing old sitemap: ${magenta}public/sitemap.xml${reset}"
rm public/sitemap.xml
echo "${green}${bold}> Generating new sitemap: ${magenta}public/sitemap.xml${reset}"
echo "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"><url><loc>${baseUrl}</loc><lastmod>${date}</lastmod></url>" >> public/sitemap.xml
for pathname in public/*.html; do
echo "<url><loc>${baseUrl}${pathname%.html}</loc><lastmod>${date}</lastmod></url>" >> public/sitemap.xml
done
for pathname in public/*.ico; do
echo "<url><loc>${baseUrl}$pathname</loc><lastmod>${date}</lastmod></url>" >> public/sitemap.xml
done
for pathname in public/*.js; do
echo "<url><loc>${baseUrl}$pathname</loc><lastmod>${date}</lastmod></url>" >> public/sitemap.xml
done
for pathname in public/*.txt; do
echo "<url><loc>${baseUrl}$pathname</loc><lastmod>${date}</lastmod></url>" >> public/sitemap.xml
done
for pathname in public/*.json; do
echo "<url><loc>${baseUrl}$pathname</loc><lastmod>${date}</lastmod></url>" >> public/sitemap.xml
done
for pathname in public/*.map; do
echo "<url><loc>${baseUrl}$pathname</loc><lastmod>${date}</lastmod></url>" >> public/sitemap.xml
done
echo "</urlset>" >> public/sitemap.xml
sed -i -e 's/public\///g' public/sitemap.xml
prettier --parser html --write public/sitemap.xml
echo "${green}${bold}✔ Sitemap generated!${reset}"