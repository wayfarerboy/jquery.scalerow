jQuery ScaleRow plugin
======================

A plugin to mimic a Google Image Search results layout

INTRODUCTION

Inspired by the thumbnail scaling seen on Google Image Search pages, I developed this plugin.  The plugin
takes a list of thumbs (or other items with static width and height attributes) and measures each item,
grouping them into scaled rows and centering them vertically.
 
Also included in the thumbs directory is a bash script to generate 100 thumbnail images and
associated html code for testing purposes.

INSTALLATION

Clone the repository into your web server (preferably where you store your other jQuery plugins. 
Then add the following to the head of your web page:

    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="jquery.scalerow.js"></script>
    <link href="stylesheets/scalerow.css" media="screen" rel="stylesheet" type="text/css" />
  
USAGE

The plugin takes the following arguments:

    jQuery(mainList).ScaleRow(listItems, images);

The mainList is the list wrapper - this could be a ul tag.  The listItems are the individial item wrappers,
such as li tags. The images are the items themselves - ie, img tag.  The following is a simple example:

    jQuery('ul').ScaleRow('li', 'img');
    
You could also enter ids or classes as arguments, ie:

    jQuery('#gallery').ScaleRow('.gallery-item', 'img');

Please see the example.html page for a practical example.
