#!/usr/bin/bash

if [[ "$GITHUB_EVENT_NAME" == "pull_request" ]]; then
  echo "IS_PR=true" >> "$GITHUB_ENV"
else
  echo "IS_PR=false" >> "$GITHUB_ENV"
fi
