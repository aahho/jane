from os.path import dirname, basename, isfile
import glob
import importlib

from flask_script import Manager

def sub_opts(app, **kwargs):
    pass

class ScriptManager(Manager):
    pass

script_manager = ScriptManager(sub_opts)

modules = glob.glob(dirname(__file__)+"/*.py")

for module in [ basename(f)[:-3] for f in modules if isfile(f) and not f.endswith('__init__.py')]:
    try:
        m = importlib.import_module(__name__ + '.' +module)
        script_manager.add_command(module, m.Command())
    except:
        print "Error in importing " + module
        pass

