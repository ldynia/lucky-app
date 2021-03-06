# Testing

### Automatic

```bash
docker exec -it lucky_testing bash
npm run test-jest
npm run test-pytest
npm run test-selenium
```

### Manual

```bash
curl 'http://proxy/'
curl 'http://proxy/api/v1/movies/recommend'
curl 'http://proxy/api/v1/music/recommend'
```

# Links

- [jest](https://jestjs.io/docs/expect)
- [command-line-runner](https://www.selenium.dev/selenium-ide/docs/en/introduction/command-line-runner)
- [selenium practical applications](https://www.softwaretestinghelp.com/assertion-examples-practical-applications/)
- [jest selenium tutorial](https://www.lambdatest.com/support/docs/automation-testing-with-selenium-and-jest/)
