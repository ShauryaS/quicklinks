<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Contributors][contributors-shield]][contributors-url]
[![Apache License 2.0][license-shield]][license-url]

[![Issues][issues-shield]][issues-url]
[![Bugs Open][bugs-open-shield]][bugs-open-url]
[![Bugs Closed][bugs-closed-shield]][bugs-closed-url]

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Quicklinks-Next

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li> <a href="#1-about">About</a> </li>
    <li><a href="#2-getting-started">Getting Started</a></li>
    <li><a href="#3-customizing-data">Customizing Data</a></li>
    <li><a href="#4-adding-theme-templates">Adding Theme Templates</a></li>
    <li><a href="#5-hosting-your-quicklinks">Hosting Your Quicklinks</a></li>
    <li><a href="#6-contributing">Contributing</a></li>
    <li><a href="#7-license">License</a></li>
    <li><a href="#8-star-history">Star History</a></li>
    <li><a href="#9-contributors">Contributors</a></li>
  </ol>
</details>

## 1. About

This open source project is an alternative to the popular Linktree. Quicklinks is a one-stop website template for people to have quick access to your other socials and important links. Made with Nextjs and containerized with Docker. Google analytics integration is available.

## 2. Getting Started

### Download the Code

Option 1: Clone this repository using the command below:

```
gh repo clone ShauryaS/quicklinks
```

Option 2: Download this repository as a zip file.

Option 3: Fork this repository and either clone the forked repository or download the forked repository as a zip.

Once you get the code on your machine, execute `git checkout quicklinks-next` to ensure you are viewing the Quicklinks code written in Nextjs.

### Run the Code in the Dev Env and View in Browser

1. Open the Terminal and navigate to the project's root directory.

2. Execute command: `npm run dev` to view the Quicklinks page in your browser at [localhost:3000](http://localhost:3000/).

To run the dev env using docker, ensure Docker Desktop is running on your dev machine and execute command: `npm run docker-dev`. View the Quicklinks page in your browser at [localhost:3000](http://localhost:3000/).

Example terminal view for running dev Docker container:

```
npm run docker-dev
```

**The Docker dev env has fast refresh enabled.**

To shut down the Docker dev container, execute command: `npm run docker-stop`.

Example terminal view for stopping dev Docker container:

```
npm run docker-stop
```

### Run the Code in the Prod Env and View in Browser

1. Open the Terminal and navigate to the project's root directory.

2. Build the code by running command: `npm run build`.

3. Execute the code by running command: `npm start` to view the Quicklinks page in your browser at [localhost:3000](http://localhost:3000/).

To run the dev env using docker, ensure Docker Desktop is running on your dev machine and execute command: `npm run docker-prod`. View the Quicklinks page in your browser at [localhost:3000](http://localhost:3000/).

Example terminal view for running prod Docker container:

```
npm run docker-prod
```

**The Docker prod env DOES NOT have fast refresh enabled.**

To shut down the Docker prod container, execute command: `npm run docker-stop`.

Example terminal view for stopping dev Docker container:

```
npm run docker-stop
```

## 3. Customizing Data

To customize your Quicklinks page, edit the file [quicklinksinfo.json](/src/data/quicklinksinfo.json). Use the current file as a template/guidline to customize your own Quicklinks page.

### Template

```
{
  "name": "Your Name",
  "image": "/images/default-profile.png",
  "personal_site": "",
  "quicklinks_data": [
    {
      "name": "LinkedIn",
      "link": "https://www.linkedin.com/",
      "image": "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg"
    },
    {
      "name": "Instagram",
      "link": "https://www.instagram.com/",
      "image": "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/instagram.svg"
    },
    {
      "name": "Github",
      "link": "https://github.com/",
      "image": "/icons/github.svg"
    },
    {
      "name": "Medium",
      "link": "https://medium.com/",
      "image": "/icons/medium.svg"
    }
  ],
  "theme": "dark"
}
```

### Personal Information

```
"name": {your name},
"image": /images/{your image name},
"personal_site": {url to personal/portfolio site or any website},
```

Fill the value of the **name** key with your name, the value of the **image** key with the path pointing to your image, and the value of **personal_site** key with the url to a personal/portfolio website or any website of your choice. Place all images at the [images](/public/images) folder.

### QuickLinks Data

```
"quicklinks_data": [
    {
      "name": {link name},
      "link": {link url},
      "image": {path or url to link logo/icon}
    },
    ...
  ]
```

Quicklinks data is an array of objects representing a link. Fill the value of the **name** key with the name of the link, the value of the **link** key with the url of the link, and the value of the **image** key with the path or url pointing to the icon for the link.

All icons for each link must be an SVG format. Place all SVG icons for each link at the [icons](/public/icons) folder.

### Theme

```
"theme": {theme name}
```

Fill the value of the **theme** key in the json with the name of the theme that should be applied to Quicklinks. The list of themes can be found in [themes.jsx](/src/styles/themes/themes.jsx). To determine the string value referring to the theme, check the selectTheme function at [themeselector.jsx](/src/utilities/themeselector.jsx).

## 4. Adding Theme Templates

1. Add new themes at [themes.jsx](/src/styles/themes/themes.jsx) and use previous themes as a template to create/add your own.

2. After adding the theme, update the selectTheme function in [themeselector.jsx](/src/utilities/themeselector.jsx) to return the new theme depending on a specific string value.

## Link to Google Analytics

Linking Quicklinks to Google Analytics is pretty straightforward. Once you create a GA4 Data Stream on the Google Analytics website, find the Measurement ID. There are two ways to link to Google Analytics depending on whether a Docker container is used.

### Without Docker Container

Replace all instances of `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}` in the code with the GA4 Measurement ID.

### With Docker Container

In [Dockerfile](/Dockerfile) and [Dockerfile.dev](Dockerfile.dev), replace instances of `G-XXXXXXXXXX` with the GA4 Measurement ID.

## 5. Hosting your Quicklinks

Coming soon.

## 6. Contributing

There are two main ways of contributing to this project. (Hopefully you have starred the project by now ⭐️)

**BECOME A CONTRIBUTOR**

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Code up your feature or contribution.
4. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to your Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

You can read more details about adding a feature in our [CONTRIBUTING GUIDELINES](/CONTRIBUTING.md).

**RAISE AN ISSUE OR REQUEST A FEATURE**

- Raise an issue by opening a [bug ticket](https://github.com/ShauryaS/quicklinks/issues).
- Request a new feature through a [feature request ticket](https://github.com/ShauryaS/quicklinks/issues).

## 7. License

Distributed under the Apache License 2.0. See
[LICENSE](https://github.com/ShauryaS/quicklinks/blob/quicklinks-next/LICENSE) for more information.

## 8. Star History

[![Star History Chart](https://api.star-history.com/svg?repos=ShauryaS/quicklinks&type=Date)](https://star-history.com/#ShauryaS/quicklinks&Date)

## 9. Contributors

<a href="https://github.com/ShauryaS/quicklinks/graphs/contributors">
   <img src="https://contributors-img.web.app/image?repo=ShauryaS/quicklinks" width="600"/>
</a>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ShauryaS/quicklinks.svg?style=for-the-badge
[contributors-url]: https://github.com/ShauryaS/quicklinks/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ShauryaS/quicklinks.svg?style=for-the-badge
[forks-url]: https://github.com/ShauryaS/quicklinks/network/members
[stars-shield]: https://img.shields.io/github/stars/ShauryaS/quicklinks.svg?style=for-the-badge
[stars-url]: https://github.com/ShauryaS/quicklinks/stargazers
[issues-shield]: https://img.shields.io/github/issues/ShauryaS/quicklinks.svg?style=for-the-badge&color=blue
[issues-url]: https://github.com/ShauryaS/quicklinks/issues
[bugs-open-shield]: https://img.shields.io/github/issues/ShauryaS/quicklinks/bug.svg?style=for-the-badge&color=yellow
[bugs-open-url]: https://github.com/ShauryaS/quicklinks/issues?q=is%3Aissue+label%3Abug+is%3Aopen
[bugs-closed-shield]: https://img.shields.io/github/issues-closed/ShauryaS/quicklinks/bug.svg?style=for-the-badge&color=success
[bugs-closed-url]: https://github.com/ShauryaS/quicklinks/issues?q=is%3Aissue+label%3Abug+is%3Aclosed
[license-shield]: https://img.shields.io/github/license/ShauryaS/quicklinks.svg?style=for-the-badge
[license-url]: https://github.com/ShauryaS/quicklinks/blob/quicklinks-next/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/shauryas481
