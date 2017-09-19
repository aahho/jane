import abc

from flask_script import Manager, Command, Option, prompt_bool

from app.mod_utils import helper
import config

class BaseSeeder(Command):
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def run(self):
        pass

    def ask_permission(self, message, default=False, yes_choices=None, no_choices=None):
        return prompt_bool(message)

    def ask(self, message, default=None):
        return prompt(message, default=default)

    def ask_password(self, message, default=None):
        return prompt_pass(message, default)

    def ask_choices(self, name, choices, default=None, no_choice=('none',)):
        return prompt_choices(name, choices, default, no_choice)


class SeedWorker(Command):
    """
    To call the class by using string class name
    """

    option_list = (
        Option('--all', '-a', dest='seed_all', default=False, required=False),
        Option('--module', '-m', dest='module', default=None),
        Option('--class', '-c', dest='cls', default=None),         
        Option('--def', '-d', dest='method', default=None),
        Option('--data', '-nd', dest='data', default=None, required=False),
    )
    #module = config.SEEDER_MODULE

    def run(self, module, cls, method, data, seed_all):
        if module is None:
            module = self.module

        if cls is not None:
            return self._call_class_seeder(module, cls, data)

        if method is not None:
            return self._call_def_seeder(module, method, data)

        raise Exception("Please provide either --class or --def option")

    def _call_class_seeder(self, module, cls, data):
        if helper.class_exists(cls, module):
            cls = helper.get_class(cls, module)
            if data is None:
                return cls().run()
            return cls().run(data)
        else:
            raise Exception("Class '{cls}' does not exist".format(cls=cls))

    def _call_def_seeder(self, module, method, data):
        if helper.method_exists(method, module):
            method = helper.get_def(method, module)
            if data is None:
                return method()
            return method(data)
        else:
            raise Exception("Method '{method}' does not exist.".format(method=method))

class SeedManager(Manager):
    pass

