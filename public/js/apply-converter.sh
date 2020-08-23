#!/usr/bin/env bash

# Save json from webflow.js to events.json
tail -n2 webflow.js | head -n1 > events.json

# Delete last two lines of webflow.js
sed -i '$ d' webflow.js
sed -i '$ d' webflow.js

# Generate appfairy-events.json
node converter.js

# Write appfairy-events.json to webflow.js
cat appfairy-events.json >> webflow.js

# Add closing parenthesis
echo >> webflow.js
echo ");" >> webflow.js