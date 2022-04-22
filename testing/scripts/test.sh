#!/bin/sh

# Define vars
NC='\033[0m'
RED='\033[0;31m'
BLUE='\e[36m'
YELLOW='\033[0;33m'
TEST_OUTPUT_PATH=/app/tmp/jest.out
EXIT_CODE=0

# Clean up
rm -f $TEST_OUTPUT_PATH
mkdir -p /app/tmp

# Run test with jest
jest /app/tests/javascript > $TEST_OUTPUT_PATH 2>&1

# Check if tests failed
TEST_FAILED=$(cat $TEST_OUTPUT_PATH  | grep 'failed')
if [ "$TEST_FAILED" != "" ]; then
    printf "${RED}ERROR:${NC}${YELLOW}Jest test failed!${NC}\n"
    printf "${BLUE}"
    cat $TEST_OUTPUT_PATH
    printf "${NC}"
    EXIT_CODE=1
fi

exit $EXIT_CODE