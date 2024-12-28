#!/bin/bash

USER="root"
DB="PLine"
PASSWORD=""
MIGRATIONS_DIR="../migrations"

for file in $(ls $MIGRATIONS_DIR/*.sql | sort); do
  echo "Applying migration: $file"
  mysql -u $USER $PASSWORD $DB <$file
done
