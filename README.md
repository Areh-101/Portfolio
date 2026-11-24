# Arehone Rahulani — Portfolio

A responsive HTML/CSS/JavaScript portfolio. No installation, dependencies, paid fonts, or build commands needed.

## Preview on your Mac
1. Extract the ZIP by double-clicking it in Finder.
2. Open the extracted `portfolio` folder.
3. Double-click `index.html` to preview it in your browser.
4. To edit: in VSCodium choose File → Open Folder → portfolio. Edit the files, save, and refresh your browser.

## What is included
- index.html — homepage with your cover, seven projects, bio, photo, skills, and contact section
- styles.css — terracotta colours, typography, and responsive layouts
- script.js — footer year and editable contact details
- Seven project HTML files — complete case-study text and galleries
- assets/ — 53 optimized images from your uploads
- content.json — reference copy of project text (the pages are standalone HTML; editing this JSON does not update them)
- asset-map.json — original upload names mapped to web image filenames
- .nojekyll — optional static publishing marker

## Contact form — Formspree
The name, email, and message form in index.html posts directly to https://formspree.io/f/mzdqvpnp. All fields are required, with browser email validation. No JavaScript is needed to submit. Formspree handles the response page and any service-side errors or challenges.

Make sure the form is active and your recipient email is verified in Formspree. After publishing, send a real test message and confirm that it reaches your Formspree dashboard and inbox. No live submission was sent during code verification.

Optional email, LinkedIn, and CV buttons can be added using the contact fields at the top of script.js. Blank fields are omitted. For a CV, put your PDF in assets/ and set resume to the relative path.

## Publish using the GitHub website
1. Sign in at https://github.com.
2. Click + → New repository.
3. Name it portfolio, choose Public, select Add a README file, and click Create repository.
4. Select Add file → Upload files.
5. Drag the CONTENTS of the extracted portfolio folder into the upload area, including assets/. Do not upload the ZIP or the outer portfolio folder. index.html and styles.css must sit at the top level. You may skip the included README if the repository already has one. The hidden .nojekyll file is optional for this site.
6. Click Commit changes.
7. Open repository Settings → Pages.
8. Under Build and deployment, choose Source: Deploy from a branch.
9. Choose main and / (root), then Save.
10. Wait for deployment to finish, refresh Settings → Pages, and select Visit site. Your address will be https://YOUR-USERNAME.github.io/portfolio/.
11. Check Actions if deployment fails. A first deployment can take several minutes.

For https://YOUR-USERNAME.github.io/ instead, name the repository exactly YOUR-USERNAME.github.io.

## Connect your Mac with GitHub Desktop and VSCodium
1. Install GitHub Desktop from https://desktop.github.com and sign in.
2. Select File → Clone repository and choose your portfolio repository.
3. Choose a local folder and click Clone.
4. Open that cloned folder in VSCodium with File → Open Folder. Edit this copy going forward.
5. Save your changes. In GitHub Desktop, review Changes, enter a summary, and click Commit to main.
6. Click Push origin. GitHub Pages republishes after deployment finishes.
7. Fetch origin / Pull origin before editing if you also made changes on GitHub.com.

## Edit the portfolio
- Update text directly in index.html or the relevant case-study HTML file.
- Change colours and layout in styles.css.
- Replace images in assets/ or change their relative src paths in the HTML.
- Images open at full size when selected. The YouTube prototype has an embed and a direct link in bumbershoot.html. Playback depends on YouTube availability and the video's embedding settings.
- Keep paths relative (assets/image.webp), not starting with /, for repository hosting.
- All seven projects and all 53 supplied images are included. Originals remain unchanged; web copies are optimized.
- Old links back to your Figma portfolio have been removed.
- Case studies retain concept and assessment status. Sample ratings, balances, reviews, and marketing claims inside mockups are illustrative interface content, not validated project results.
- CareCircle’s visual-design description was aligned with the uploaded coral-and-cream designs.

## Troubleshooting
- 404: confirm main / (root) is selected and index.html is at the top level.
- Missing images: upload the entire assets/ folder and preserve filename case.
- Missing styles: styles.css must sit beside index.html.
- Old content: check Actions for a completed deployment, then hard-refresh.
- Optional contact links missing: fill the contact fields in script.js and commit/push the change.
- Form delivery: confirm the endpoint is active in Formspree and check the dashboard and spam folder.
- Uploaded files in a public repository are public; include only portfolio material.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
