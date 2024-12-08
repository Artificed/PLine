#!/bin/bash

USER="root"
DB="PLine"
PASSWORD=""
MIGRATIONS_DIR="../migrations"

echo "Seeding..."
mysql -u $USER $PASSWORD $DB <"../seeding/seed.sql"
