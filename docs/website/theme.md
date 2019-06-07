# Poulton Child Theme
ITRE uses a child theme on top of [ORIED's Poulton](https://github.ncsu.edu/ORIED/Poulton) theme to make modifications to Poulton's styles. The Github Updater plugin helps to keep in sync with changes to Poulton, but manually checking and adjustments to the child theme need to be made semi-regularly.

## Style Modifications

<ImageEmbed name="Training Calendar Screenshot" preview="training" classes="right" />

Most changes made were to accommodate style changes to the appearance of the training calendar. These changes were made at the request of ITRE Staff to more closely mimic specific NC State Calendars.

Currently the styles of the child theme are out of date with the Poulton parent theme. This can be seen in particular in the internal heading navigation menus, which were dropped from the Poulton theme and broke styling changes made to it in the ITRE child theme.

## Plugins
Several plugins are in use in the Wordpress site, many on the recommendation of ORIED.

|                Plugin              |                                             Use                                           | Cost |
|------------------------------------|-------------------------------------------------------------------------------------------|------|
| Advanced Custom Fields Pro         | Easier custom fields. Handles Poulton's extended content template                         | $100 |
| Advanced Responsive Video Embedder | Responsive video embeds. Used in the training and focus group pages                       | Free |
| Classic Editor                     | Allow for the pre-Gutenberg editor in the Wordpress backend                               | Free |
| Easy FAQ                           | Accordion segments that expand and hide text. Used extensively in the training section    | Free |
| Embed Any Document                 | Embedded preview of documents. Used for newsletters and annual reports                    | Free |
| Enable Media Replace               | Swap out files without changing the links or file paths                                   | Free |
| Enhanced Media Library             | Add media categories. Manually set when adding media but allows for easier search         | Free |
| Github Updater                     | Connect plugins and themes to a github account so that new code pushes trigger WP updates | Free |
| ITRE Add-Ons                       | Custom ITRE plugins. Powers News widget and research breadcrumbs among other things       | Free |
| NC State Multiauth Plugin          | Handles NC State Unity login for Wordpress backend                                        | Free |
| NC State Shortcodes                | NC State created shortcodes for callouts, links, and other branded stylings               | Free |
| NC State Utility Bar               | Adds the NC State search bar to the top of the website. Required by NC State Branding     | Free |
| Page Links To                      | Easy page redirects. Currently makes research appear to be the same site                  | Free |
| Relevanssi                         | Improved search. Added by staff request to improve search results internally              | Free |
| Shortcake                          | Pretty UI for shortcodes. Suggested by NC State Shortcodes and used in ITRE Add-Ons       | Free |
| Simple Calendar                    | Handles the training calendar. Connects to the itre-information account calendar          | Free |
| TablePress                         | Better tables. Mostly used for FEP and HEC pages                                          | Free |
| Ultimate Google Analytics          | Analytics code handling.                                                                  | Free |


## Extended Content
Poulton uses ACF fields for their Extended Content theme which is used on many of the ITRE website pages. This allows for flexible rows and columns without much programing, but does come with a few details to keep in mind. Extended Content fields replace the default content field on the front end but don't hide the default content box on the back end. This means you may accidentally change content in the top box (the default box) that your user will not see. Make sure when editing content on a page using the Extended Content template that you are editing the ACF fields found lower on the editing screen.

You may also find that sometimes the preview for these pages does not properly display your changes. In this case simply publish the changed page and view it that way, making any additional changes as necessary. If you make a change that breaks something or is otherwise too time intensive to change back, you can use the previous Wordpress revision to roll the page back to an earlier state.

<Resource name="Wordpress Editing Guidelines" preview="wordpress" :files="[
  {text:'PDF', link:'Wordpress] Editing.pdf'}
]" />

## Gutenberg
Wordpress recently made large scale changes to their core code with the Gutenberg update. NC State IT is currently evaluating it for accessibility but efforts will be needed in the future to adjust the ITRE site to Gutenberg and train relevant staff on its use. The NC State [Web Developers Group](group-webdevelopers@ncsu.edu) is a good way to receive updates on this process and be aware of upcoming training being offered. This group also meets on most Friday afternoons for Co-Working in Avent Ferry Technology Center Room 106, 2114 Avent Ferry Road.

## Resources
[OIT Web Services](https://design.oit.ncsu.edu)

[NC State Shortcodes](https://github.ncsu.edu/ncstate-wordpress/ncsu-shortcodes)

[Multiauth Plugin](https://github.ncsu.edu/ncstate-wordpress/ncsu-multiauth)
::: warning
The Multiauth plugin has reached End-Of-Life and is unsupported.
:::

[NC State Wordpress Github](https://github.ncsu.edu/ncstate-wordpress)
