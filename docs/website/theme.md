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

## Gutenberg
Wordpress recently made large scale changes to their core code with the Gutenberg update. NC State IT is currently evaluating it for accessibility but efforts need to be made to adjust the ITRE site to Gutenberg and train relevant staff on its use.

## Resources
[OIT Web Services](https://design.oit.ncsu.edu)

[NC State Shortcodes](https://github.ncsu.edu/ncstate-wordpress/ncsu-shortcodes)

[Multiauth Plugin](https://github.ncsu.edu/ncstate-wordpress/ncsu-multiauth)
::: warning
The Multiauth plugin has reached End-Of-Life and is unsupported.
:::
[]()
