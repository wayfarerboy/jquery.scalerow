#!/bin/bash


# generate_thumbs.sh

# This script uses imagemagick to generate a collection of randomly
# generated image thumbnails for use in the example html page for
# the jQuery scalerow plugin

# Copyright 2012 Al Pagan <generamics@gmail.com>

# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.

# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
# MA 02110-1301, USA.

DIRNAME=$( dirname $0 )

for i in `seq 100`
do
  W=$((RANDOM%100+150))
  H=$((RANDOM%100+150))
  OUTFILE="$DIRNAME/image_`printf '%03d' $i`.jpg"
  convert -size ${W}x${H} xc: +noise Random -virtual-pixel tile -blur 0x50 -auto-level +repage -resize ${W}x${H}\! -quality 10 $OUTFILE
  ATTR=$( identify -format 'width="%w" height="%h"' $OUTFILE )
  sed "$((i+43))s/\.jpg[^\/]*/.jpg\" $ATTR /" $DIRNAME/../example.html > /tmp/example.html
  mv /tmp/example.html $DIRNAME/../example.html
done
