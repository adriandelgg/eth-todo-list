#!/bin/bash
npx hardhat typechain
[ -d ../frontend ] && cp -r typechain-types ../frontend/lib \
  && echo "Copied typechain types to frontend"
