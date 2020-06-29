#!/bin/bash
set -e

echo "Starting test"
npm run test
if [ $? -eq 0 ]
 then echo "Successful Test Run"
else
 echo "Failure!!!" >&2
 exist 1
fi

