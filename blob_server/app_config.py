class Config:
    DEBUG = False
    TESTING = False

class DevConfig(Config):
    DEBUG = True

class TestConfig(Config):
    TESTING = True


