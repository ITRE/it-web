---
next: ../equipment/
---

# Research Theme
The ITRE Research theme is a standalone theme designed to mimic Poulton while allowing for the extended functionality needed for the database. Design is handled by the theme itself while the custom posts and multi-author bylines are handled by plugins.

<ImageEmbed name="ITRE Research Database" preview="research" />

## Research
Research is a custom post type registered via a custom built plugin. It uses ACF Pro to handle files and Bylines to handle multiple authors. Bulk importing is handled by Ultimate CSV Importer.

<ImageEmbed name="Ultimate CSV Importer Screenshot" preview="research_csv" />

## Categories
Research Categories are regular Wordpress categories with links back to their ITRE Focus Area page in the description.

<ImageEmbed name="Research Category Description Screenshot" preview="research_categories" />

## Authors
Multiple authors are handled by the Bylines plugin. Additional custom fields were added to these through ACF to allow for author pages with more biographical information, images, etc. Authors must be added **_before_** importing the research csv when doing bulk imports, otherwise the authors will not link correctly.

<ImageEmbed name="Author Screenshot" preview="research_author" />

## Search
The research database uses a custom search function to filter by the custom fields added to each research post. This functionality, along with some others such as breadcrumbs and the news widget, are added using a custom ITRE specific plugin.
