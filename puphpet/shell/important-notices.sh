#!/bin/bash

VAGRANT_CORE_FOLDER=$(cat '/.puphpet-stuff/vagrant-core-folder.txt')

if [[ -f '/.puphpet-stuff/displayed-important-notices' ]]; then
    exit 0
fi

cat "${VAGRANT_CORE_FOLDER}/shell/ascii-art/important-notices.txt"
cat "${VAGRANT_CORE_FOLDER}/shell/ascii-art/nearsoft-logo.txt"

touch '/.puphpet-stuff/displayed-important-notices'
