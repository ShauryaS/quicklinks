# Quicklinks-Next

This open source project is an alternative to the popular Linktree. Quicklinks is a one-stop website template for people to have quick access to your other socials and important links. Made with Nextjs and containerized with Docker. Google analytics integration is available.

## Getting Started

### Download the Code

Option 1: Clone this repository using the command below:

```
git clone https://github.com/ShauryaS/quicklinks.git
```

Option 2: Download this repository as a zip file.

Option 3: Fork this repository and either clone the forked repository or download the forked repository as a zip.

Once you get the code on your machine, execute `git checkout quicklinks-next` to ensure you are viewing the Quicklinks code written in Nextjs.

### Run the Code in the Dev Env and View in Browser

1. Open the Terminal and navigate to the project's root directory.

2. Execute command: `npm run dev` to view the Quicklinks page in your browser at [localhost:3000](http://localhost:3000/).

To run the dev env using docker, execute command: `sh commands/run_container.sh`. When the script requests the name of the container to run, enter: `dev`. View the Quicklinks page in your browser at [localhost:3000](http://localhost:3000/).

Example terminal view for running dev Docker container:

```
> sh commands/run_container.sh
Enter container name (dev or prod): dev
executing command: docker-compose up -d dev
docker-compose up -d dev
```

**The Docker dev env has fast refresh enabled.**

To shut down the Docker dev container, execute command: `sh commands/stop_container.sh`. When the script requests the name of the container to stop, enter: `dev`.

Example terminal view for stopping dev Docker container:

```
> sh commands/stop_container.sh
Enter container name (dev or prod): dev
executing command: docker-compose stop dev
docker-compose stop dev
```

### Run the Code in the Prod Env and View in Browser

1. Open the Terminal and navigate to the project's root directory.

2. Build the code by running command: `npm run build`.

3. Execute the code by running command: `npm start` to view the Quicklinks page in your browser at [localhost:3000](http://localhost:3000/).

To run the dev env using docker, execute command: `sh commands/run_container.sh`. When the script requests the name of the container to run, enter: `prod`. View the Quicklinks page in your browser at [localhost:3000](http://localhost:3000/).

Example terminal view for running prod Docker container:

```
> sh commands/run_container.sh
Enter container name (dev or prod): prod
executing command: docker-compose up -d prod
docker-compose up -d prod
```

**The Docker prod env DOES NOT have fast refresh enabled.**

To shut down the Docker prod container, execute command: `sh commands/stop_container.sh`. When the script requests the name of the container to stop, enter: `prod`.

Example terminal view for stopping dev Docker container:

```
> sh commands/stop_container.sh
Enter container name (dev or prod): prod
executing command: docker-compose stop prod
docker-compose stop prod
```

## Customizing Data

To customize your Quicklinks page, edit the file `/{project_root}/src/data/quicklinksinfo.json`. Use the current file as a template/guidline to customize your own Quicklinks page.

### Template

```
{
  "name": "Your Name",
  "image": "/images/default-profile.png",
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
```

Fill the value of the **name** key with your name and the value of the **image** key with the path pointing to your image. Place all images at the `/{project_root}/public/images` folder.

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

All icons for each link must be an SVG format. Place all SVG icons for each link at the `/{project_root}/public/icons` folder.

### Theme

```
"theme": {theme name}
```

Fill the value of the **theme** key in the json with the name of the theme that should be applied to Quicklinks. The list of themes can be found in `/{project_root}/src/styles/themes/themes.jsx`. To determine the string value referring to the theme, check the selectTheme function at `/{project_root}/src/utilities/themeselector.jsx`.

## Adding Theme Templates

1. Add new themes at `/{project_root}/src/styles/themes/themes.jsx` and use previous themes as a template to create/add your own.

2. After adding the theme, update the selectTheme function in `/{project_root}/src/utilities/themeselector.jsx` to return the new theme depending on a specific string value.

## Link to Google Analytics

Linking Quicklinks to Google Analytics is pretty straightforward. Once you create a GA4 Data Stream on the Google Analytics website, find the Measurement ID. There are two ways to link to Google Analytics depending on whether a Docker container is used.

### Without Docker Container

Replace all instances of `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}` in the code with the GA4 Measurement ID.

### With Docker Container

In `/{project_root}/Dockerfile` and `/{project_root}/Dockerfile.dev`, replace instances of `G-XXXXXXXXXX` with the GA4 Measurement ID.

## Hosting your Quicklinks

Coming soon.

## Contributing

Coming soon.
