from flask_script import Manager

from app import app
from app.mod_utils.managers import seeders

manager = Manager(app)

manager.add_command('seed', seeders.FirstTimeDataSeeder())
# manager.add_command('loadfixtures', fixture.Fixture())

if __name__ == "__main__":
    manager.run()
