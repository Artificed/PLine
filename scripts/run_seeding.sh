#!/bin/bash

USER="root"
DB="PLine"
PASSWORD=""

echo "Seeding..."
mysql -u $USER $PASSWORD $DB <"../seeding/seed.sql"
