import abc

from flask_script import Command

class BaseSeeder(Command):
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def run(self):
        pass
