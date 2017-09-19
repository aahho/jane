from flask_script import Manager, Server

from app import app
from app.mod_utils.managers import base, seed_manager

manager = Manager(app)
server = Server(host="0.0.0.0", port=5000)

"""
To add more commands to manager do like below
Ex: manager.add_command('loadfixtures', fixture.Fixture())
"""

# To override default 127.0.0.1 host to 0.0.0.0 without command line args
manager.add_command('runserver', server)

# For seeding data
manager.add_command('seed', seed_manager)


if __name__ == "__main__":
    manager.run()
