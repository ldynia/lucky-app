#!/usr/bin/env python3

from selenium import webdriver
from selenium.webdriver.common.by import By


class TestLuckyApp:
    """E2E integration tests class."""

    def setup_method(self, method):
        options = webdriver.FirefoxOptions()
        self.driver = webdriver.Remote('http://firefoxdriver:4444/wd/hub', options=options)
        self.driver.set_window_size(1936, 1056)
        self.driver.get("http://proxy")

    def teardown_method(self, method):
        self.driver.quit()

    def test_frontend_app(self):
        """Test landing page of fronted app."""
        element = self.driver.find_element(By.ID, 'recommendation')
        assert element.text == "Pink Flody - Pulse"

        self.driver.save_screenshot("/app/tmp/pyshot1.png")

    def test_movie_app(self):
        """Test backend app(s)."""
        # Click recomendation button.
        element = self.driver.find_element(By.ID, 'btn-recommend-movie')
        element.click()

        # Check if new recomendation appeard on the webpage.
        element = self.driver.find_element(By.ID, 'recommendation')
        assert element.text != "Pink Flody - Pulse"

        self.driver.save_screenshot("/app/tmp/pyshot2.png")

    def test_music_app(self):
        """Test backend app(s)."""
        # Click recomendation button.
        element = self.driver.find_element(By.ID, 'btn-recommend-music')
        element.click()

        # Check if new recomendation appeard on the webpage.
        element = self.driver.find_element(By.ID, 'recommendation')
        assert element.text != "Pink Flody - Pulse"

        self.driver.save_screenshot("/app/tmp/pyshot3.png")
