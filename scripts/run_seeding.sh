#!/bin/bash

USER="root"
DB="PLine"
PASSWORD=""
SEEDING_DIR="./seeding"

for file in $(ls $SEEDING_DIR/*.sql | sort); do
  echo "Seeding: $file"
  mysql -u $USER $PASSWORD $DB <$file
done
