# WordPress without the clicking

For Kelsey. The point: WordPress has an API. Anything you do in the admin by hand, Claude can do through that API in bulk, from one brief. You keep WordPress, the client keeps their editor, you stop typing pages one at a time.

Three layers. Most sites only need the first.

---

## Layer 1: REST API with an application password (works on any WordPress 5.6 or newer, including WordPress.com Business and Commerce plans)

One time setup per site, two minutes:

1. Log in to the site as an administrator.
2. Users, then Profile, scroll to Application Passwords.
3. Name it "Claude" and click Add. Copy the password it shows. It is shown once.
4. Give Claude the site URL, the admin username, and that application password. It is a scoped credential; revoke it from the same screen when the job is done.

What Claude can then do from the shell, no browser:
Create, update, and delete pages and posts, including full block editor content.
Upload images and set featured images.
Create categories and tags.
Set the static homepage and the posts page.
Create and edit navigation menus (WordPress 6.0 and newer).
Manage users.
Read and update most theme and plugin settings that expose themselves to the API (most modern ones do).

What it cannot do through the API alone: install a theme or plugin. That is Layer 2 or a 30 second manual step.

### The workflow

Kelsey writes a brief. One page, plain language. Business name, what they do, the pages needed, tone, colours or logo if there is one, and any copy the client supplied. Claude does the rest.

Paste this into Claude Code (or Cowork with the brief attached). Fill the three bracketed values.

```
You are building a WordPress site through its REST API. Do not open a browser.

Site: [https://clientsite.com]
Admin user: [username]
Application password: [xxxx xxxx xxxx xxxx xxxx xxxx]
Brief: read brief.md in this folder.

1. Authenticate with HTTP Basic auth against /wp-json/wp/v2/. Confirm access by fetching /wp-json/wp/v2/users/me and print the display name. Stop and tell me if it fails.

2. Inventory the site first. List existing pages, posts, menus, the active theme, and the current homepage setting. Do not delete anything that exists; tell me what is there and ask before removing.

3. From the brief, write the full copy for every page listed. Plain language, no sales cliches, no hyphens or em dashes, headings that say what the section is. Show me the copy for the homepage before creating anything. Wait for my ok.

4. After my ok, create every page as block editor content (Gutenberg block markup: core/heading, core/paragraph, core/columns, core/buttons, core/image, core/list). Use the block patterns the active theme provides where they fit. Set each page's slug, title, excerpt, and status to draft.

5. Upload any images in the images folder to the media library, set alt text from the filename, and place them in the pages where the brief indicates. Set the homepage hero image as the featured image on the homepage.

6. Create the primary navigation menu with the pages in the order given in the brief, and assign it to the theme's primary menu location. If the theme has a footer menu location, create a footer menu with Privacy and Contact.

7. Set the static front page to the homepage and the posts page to Blog if the brief includes a blog.

8. Set site title and tagline from the brief. Set permalinks to post name if they are not already.

9. Create a Privacy Policy page from the brief's business details if one does not exist.

10. Publish everything, then fetch each page's public URL and confirm it returns 200. Give me the list of live URLs, anything you could not do through the API, and anything in the brief you were unsure about.
```

That prompt, run against a fresh WordPress install with a theme already active, produces a complete five to ten page site in one sitting. Kelsey's job becomes writing a good brief, reviewing the homepage copy at step 3, and doing the final look in the editor.

---

## Layer 2: WP CLI over SSH (for hosts that give you SSH: SiteGround, Kinsta, WP Engine, Cloudways, most VPS)

Everything in Layer 1, plus theme and plugin install, database operations, search and replace across the site, multisite, and bulk imports. If she builds on the same host repeatedly, this is the one to set up.

Claude runs commands like:
wp theme install kadence --activate
wp plugin install wordpress-seo contact-form-7 --activate
wp post create --post_type=page --post_title="Services" --post_status=publish
wp menu create "Primary" and wp menu item add-post
wp option update blogname "Client Name"

Setup: the host gives an SSH user and key. Claude gets the connection details, the same way as the application password. The prompt above works the same way; swap "REST API" for "WP CLI over SSH" and add "install and activate [theme] and [plugins] first."

---

## Layer 3: Claude in Chrome for the last five percent

Some things only exist as admin screens: a page builder's visual settings (Elementor, Divi), a premium theme's customizer panel, a licence key field. For those, the Chrome extension clicks through the admin with her watching. It is slower and each action may ask for approval, so use it for the handful of settings the API cannot reach, not for content.

---

## What changes for her day to day

Before: open the editor, build each page by hand, place each image, build the menu, repeat per site.

After: write a one page brief per client, drop the images in a folder, run the prompt, review the homepage copy, do a ten minute pass in the editor for anything visual. The build that took a day takes an hour, and most of that hour is the brief.

Two practical notes. First, a fresh install with a good block theme already active (Kadence, Blocksy, Twenty Twenty Five) gives the best result, because the API can then use the theme's own patterns. Second, keep one brief template and one images folder structure and reuse them; the prompt gets more reliable the more consistent the input is.

If she wants, the next step is a site kit: a starter theme, a brief template, and a saved Claude skill that runs the whole thing. That turns each new client into fill in the brief, run, review.
