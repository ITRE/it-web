---
prev: ../forms
---

# ITRE Website Overview
ITRE's main website runs on Wordpress and is hosted by NC State. The website can be found at [itre.ncsu.edu.](https://itre.ncsu.edu)

## Domains and Hosting

### ITRE
ITRE Wordpress is hosted through OIT. Most settings in [CPanel](https://web09cp.unity.ncsu.edu:2083/) are available, though the overall server administration is still handled by OIT and is subject to their updates.

### TIMS
Domains for NC Bus Safety and NASDPTS are managed through [Network Solutions](https://www.networksolutions.com). Greg Ferrara's PCard is currently assigned to the billing for this account.

|                 Service                |    Expiration    |
|----------------------------------------|------------------|
| ncbussafety.org                        | October 7, 2019  |
| nasdpts.org                            | October 27, 2019 |
| ncbussafety.com                        | April 17, 2020   |
| Private Registration (ncbussafety.com) | April 17, 2020   |
| Web Forwarding (ncbussafety.com)       | April 17, 2020   |


## Analytics
Google Analytics is set up to monitor traffic to ITRE websites. This information can be found through the [Google Analytics Dashboard](https://analytics.google.com) or made into easy to read infographics using [Google Data Studio](https://datastudio.google.com). Some ITRE departments and projects already have Data Studio infographics set up for them and should continue to pull data without further changes.

[LTAP Training](https://datastudio.google.com/open/1sW3ozkejlXguJaa_xNTbySS8MInWdzkt)  |
[LTAP Demographics](https://datastudio.google.com/open/1fv9cRjBum6gagPtGhgQyjHY7VlFBA2aY)  |
[ITRE Analytics](https://datastudio.google.com/open/1FUUxcjq32Ufz8Prubw22smgdSzG_BIo-)  |
[ITRE DataLab Freeval](https://datastudio.google.com/open/1AHLiy7coPyE_Mom2J5LNUCAW8r0yD6ws)


## Staff and News

<ImageEmbed name="Staff Admin Page Screenshot" preview="staff" classes="right" />

The staff page is a custom page template in the child theme which uses ACF Pro to collect and display information about staff members. All ITRE staff should have their photo taken, preferably against the brick half-wall by the outdoor patio tables, and added to the website. A PDF resume can be included at the staff member's request.

ITRE News is handled by Wordpress's built-in posts and displayed on the homepage using a custom widget.

## Images
When using images online it's important to be conscious of the size and resolution of the file, the visual content being conveyed, and associated metadata or accessibility labels. While print images need to meet a minimum 300dpi to print clearly, 72dpi is preferred online for faster rendering. Additional steps can be taken to better improve image rendering online, such as compression, lazy loading, and webp file formats, but keep in mind that NCDOT and other ITRE associates are limited in the browsers they can use and not all web technologies will work for all users.

<Resource name="Wordpress Image Guidelines" preview="images" :files="[
  {text:'PDF', link:'Image\ Guide.pdf'}
]" />

It is also important to consider copyright and fair use practices when choosing images. Students in a training course may not be comfortable having their image used in ITRE promotion, for instance, or an image emailed for use may not belong to the sender. Use best judgement in the inclusion of photos.

::: tip PackPix
NC State has a repository of images available for ITRE use called [PackPix](https://packpix.photoshelter.com/index#!/index). Use their search to find high resolution images taken on or around NC State Campus or used in NCSU marketing. Full resolution downloads require the itre-information generic account.
:::

All images used online should include alt text for accessibility. This text should be a short description of the image, **not** just a repeat of the title. Remember that alt text is _replacing_ your image for screen readers and so should convey to the user any information that is being visually conveyed.


## Links
[CPanel](https://web09cp.unity.ncsu.edu:2083/)

[WP Admin](https://itre.ncsu.edu/admin)

[Analytics](https://analytics.google.com)
